const fetch = require('isomorphic-fetch');

fetch('//cds.library.brown.edu/projects/kofan/Materials/submb_hengeveld&fischer_transparency.pdf')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        console.log(response);
    })