class tierRegistry {

  static isIgnored(type) {
    // Omit these tier types from the website, as they're ugly and mostly useless.
    return (
        type === "variantTypes" || // variantTypes indicates when a morpheme is a spelling variant, free variant, etc.
        type === "hn" || // hn, "homophone number", indicates which of multiple look-alike morphemes it is.
        type === "glsAppend" ||
        type === "msa" // msa is the part of speech
    );
  }

  // Must return a different string for each tier type in the corpus
  // so that tier names can be guaranteed to be unique.
  static decodeType(type) {
    /*
    // English UI text:
      switch(type) {
          case "txt": return "morpheme (as in the text)";
          case "cf": return "morpheme (citation form)";
          case "gls": return "morpheme gloss"
          case "msa": return "part of speech";
      default: return type;
      }
    */

    // Spanish UI text:
    switch (type) {
      case "txt":
        return "morfema (como en el texto)";
      case "cf":
        return "morfema (forma típica)";
      case "gls":
        return "glosa de morfema";
      case "msa":
        return "parte del habla";
      case "words":
        return "palabra";
      case "free":
        return "frase";
      default:
        return type;
    }
  }

  constructor(isoDict) {
    this.jsonTierIDs = {}; // format that should be written to file
    this.isoDict = isoDict;
  }

  // Must return a different string for each language in the corpus
  // so that tier names can be guaranteed to be unique.
  decodeLang(lang) {

    const desiredName = "Native name"; // or we might want to use "ISO language name"
    const lcLang = lang.toLowerCase(); // ignore capitalization when decoding

    // Override the usual iso-based decoding for some language codes
    switch (lang) {
      // case "flex-language-name-here": return "desired-decoded-name-here";
      case "con-Latn-EC":
        return "a'ingae (ortografía Borman)";
      case "con-Latn-EC-x-dureno":
        return "a'ingae (ortografía nueva)";
      case "cof":
        return "a'ingae (con cambio de código)";
      case "defaultLang":
        return "defaultLang";

      // for Spanish UI text:
      case "en":
        return "inglés";

      default: // fall through
    }

    // if lang is an iso code, decode it
    if (this.isoDict.hasOwnProperty(lcLang)) {
      return this.isoDict[lcLang][desiredName];
    }

    // if lang starts with a (three-letter or two-letter) iso code, decode it
    const firstThreeLetters = lcLang.substr(0, 3);
    if (this.isoDict.hasOwnProperty(firstThreeLetters)) {
      return this.isoDict[firstThreeLetters][desiredName];
    }
    const firstTwoLetters = lcLang.substr(0, 2);
    if (this.isoDict.hasOwnProperty(firstTwoLetters)) {
      return this.isoDict[firstTwoLetters][desiredName];
    }

    // as a last resort, return without decoding
    return lang;
  }

  // LingView assumes that each tier has a unique name. 
  // If getTierName returns the same name for two different tiers in your corpus,
  // some features (specifically, showing/hiding tiers and narrowing search 
  // results via checkboxes) will work incorrectly. 
  getTierName(lang, type) {
    /*
    // English UI text:
      return decodeLang(lang) + " " + decodeType(type);
    */

    // Spanish UI text:
    return tierRegistry.decodeType(type) + " en " + this.decodeLang(lang);
  }

  getTiersJson() {
    return this.jsonTierIDs;
  }

  // if this is a new, non-ignored tier, include it in metadata
  // if the tier is ignored, return null; else return its name
  maybeRegisterTier(lang, type, isSubdivided) {
    if (tierRegistry.isIgnored(type)) {
      return null;
    }
    const tierName = this.getTierName(lang, type)
    this.jsonTierIDs[tierName] = {
      subdivided: isSubdivided,
    };
    return tierName;
  }
}

module.exports = {
  tierRegistry: tierRegistry
};
