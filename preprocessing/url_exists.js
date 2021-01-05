const fetch = require('isomorphic-fetch');
const { URL } = require('url');

function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}

function timeoutRetrier(asyncFn, { maxRetries = 5, retryDelay = 1000, timeout = 3000 } = {}) {
  return async function(...args) {
    const errors = [];
    for (let i = 0; i < maxRetries; i++) {
      try {
        const { result, err = '' } = await Promise.race([
          asyncFn(...args).then(result => ({ result })),
          sleep(timeout).then(() => ({ err: 'timed out' }))
        ]);
        if (err) {
          throw err;
        }
        return result;
      } catch (err) {
        errors.push(err);
        if (retryDelay > 0) {
          await sleep(retryDelay);
        }
      }
    }
    throw errors;
  }
}

const timeoutRetryFetch = timeoutRetrier(fetch);
async function urlExists(url) {
  const urlEncoded = new URL(url).href; // without encoding the url, the fetch fails if the url includes any letters with diacritics
  const response = await timeoutRetryFetch(urlEncoded, { method: 'HEAD' });
  // if (!response.ok) {
  //   console.warn('unexpected response', response.statusText, 'when checking url', url);
  // }
  return response.ok;
}

module.exports = () => urlExists;