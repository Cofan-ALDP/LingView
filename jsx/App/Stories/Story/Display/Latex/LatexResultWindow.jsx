import React from 'react';
import { LatexResultContainer } from "./LatexResultContainer.jsx";
import { TranslatableText } from "~./jsx/App/locale/TranslatableText.jsx";
import { 
  latexSentenceTierName, 
  latexMorphemesTierName, 
  latexMorphemeTranslationsTierName, 
  latexSentenceTranslationsTierName,
} from "~./jsx/App/locale/LocaleConstants.jsx";
var htmlEscape = require("html-es6cape");

/*
 This window displays the LaTeX conversion format result, along with 
 some other metadata of the story.
*/
export default class LatexResultWindow extends React.Component {

  constructor(props) {
    super(props);
  }

  /* 
    Calls individual helper functions to gather the words,
    morphemes, morpheme translation, and metadata 
    of the selected sentence. 
  */
  processSentences() {
    let dependents = this.props.sentence["dependents"];

    // Get each Latex section's corresponding tier name.
    const wordTier = this.props.tierMap.sentence;
    const morphemeTier = this.props.tierMap.morphemes;
    const glossTier = this.props.tierMap.morphemeTranslations;
    const sentenceTranslationTier = this.props.tierMap.sentenceTranslations;

    let wordList = [];
    let morphemeList = [];
    let glossList = [];
    let sentenceTranslation = []; 

    // Loop through dependents to match each Latex section's tier name to the actual content of that tier. 
    for (var idx in dependents) {
      // The selected tier names from the tierMap should have been escaped,
      // so here we also need to escape each original tier name so that the selected 
      // tier name can be matched to one of the original tier names. 
      const escapedTierName = htmlEscape(dependents[idx]["tier"]);
      if (escapedTierName === wordTier) {
      wordList = dependents[idx]["values"];
      }
      if (escapedTierName === morphemeTier) {
      morphemeList = dependents[idx]["values"];
      }
      if (escapedTierName === glossTier) {
      glossList = dependents[idx]["values"];
      }
      if (escapedTierName === sentenceTranslationTier) {
      sentenceTranslation = dependents[idx]["values"];
      }
      
    }

    const morphAndGloss = this.organizeWords(wordList, morphemeList, glossList);
    const morphemeMap = morphAndGloss["morphemes"];
    const glossMap = morphAndGloss["gloss"];

    // Retrieves some metadata to be displayed later.
    const title = this.getTitle();
    const storyId = this.getStoryId();
    const sentenceUrl = this.getSentenceUrl();

    return {
      storyId : storyId,
      title : title,
      sentenceUrl : sentenceUrl,
      morphemes : morphemeMap,
      gloss : glossMap,
      sentenceTranslation : sentenceTranslation  
    };
  }

  /* Returns a map between each word and all of its sub-components (core and clitics, and gloss, etc.) */
  organizeWords(wordList, morphemeList, glossList) {
    let wordListCounter = 0;
    let morphemeListIndex = 0;

    let word2Morpheme = {};
    let word2Gloss = {};

    while (wordListCounter < wordList.length) {
      word2Morpheme[wordListCounter] = {};
      word2Gloss[wordListCounter] = {};

      const wordEntry = wordList[wordListCounter];
      const word = wordEntry["value"];
      const wordStartSlot = wordEntry["start_slot"];
      const wordEndSlot = wordEntry["end_slot"];

      let morphemes = [];
      let gloss = [];
      let flag = true; 
      // Find the morphemes belonging to the current word, and add them and their gloss
      // into a list. 
      while (flag && morphemeListIndex < morphemeList.length) {
        // Add the "Undefined" strings just in case that some texts have glossing misaligned.
        // For texts with aligned morphemes and glossing, "Undefined" shouldn't show up,
        // but adding "Undefined here" avoids an error being thrown and is a way of letting the user know 
        // that something is off with this sentence so they should edit the generated LaTeX code. 
        const morphemeEntry = morphemeList[morphemeListIndex] || "Undefined";;
        const glossEntry = glossList[morphemeListIndex] || "Undefined";
        if (morphemeEntry["start_slot"] >= wordStartSlot && morphemeEntry["end_slot"] <= wordEndSlot) {
          // If a morpheme item has the whole word, eg. "cundyi-'je='fa", we need to
          // split the current morpheme on = or -, so that each root or suffix or clitic is on its own. 
          const morphemeValue = morphemeEntry["value"] || "Undefined";
          const glossValue = glossEntry["value"] || "Undefined";
          // First, add a space in front of = and - so that we can split on space later and preserve both = and -
          const currentMorpheme = morphemeValue.replace("=", " =").replace("-", " -");
          const currentGloss = glossValue.replace("=", " =").replace("-", " -");;      
          const currentMorphemeSplit = currentMorpheme.split(" ");
          const currentGlossSplit = currentGloss.split(" ");

          for (const e of currentMorphemeSplit) {
            if (e !== "") {
              morphemes.push(e);
            }
          }
          for (const e of currentGlossSplit) {
            if (e !== "") {
              gloss.push(e);
            }
          }
          morphemeListIndex += 1;
        } else {   
          flag = false;
        } 
      }
      word2Morpheme[wordListCounter][word] = morphemes;
      word2Gloss[wordListCounter][word] = gloss;
      wordListCounter += 1;
    }

    return {
      "morphemes" : word2Morpheme,
      "gloss" : word2Gloss
    };
  }

  /* Retrives the title of the story from metadata. */
  getTitle() {
    const title = this.props.metadata["title"]["_default"];
    return title; 
  }

  /* Retrives the story ID. */
  getStoryId() {
    return this.props.metadata["story ID"];
  }

  /* Retrives the sentence's URL. */ 
  getSentenceUrl() {
    const isStoryTimed = this.props.metadata["timed"];
    const indexID = isStoryTimed ? (this.props.sentence["start_time_ms"]-1) : (this.props.sentence["sentence_id"]);
    const url = window.location.href.replace(/\?.*$/,'') + `?${indexID}`;
    return url;
  }

  render() {
    const processedMaterial = this.processSentences();
    return (
      <LatexResultContainer 
        sentenceId={this.props.sentenceId} 
        processedMaterial={processedMaterial} 
      />
    );
  }; 

} 