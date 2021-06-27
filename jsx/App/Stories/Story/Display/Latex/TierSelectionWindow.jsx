import React from 'react';
import LatexResultWindow from "./LatexResultWindow.jsx";
import { TierButtonList } from "./TierButtonList.jsx";
import { TranslatableText } from "~./jsx/App/locale/TranslatableText.jsx";
import { 
  latexSelectTiersPromptText,
  latexSentenceTierName, 
  latexMorphemesTierName, 
  latexMorphemeTranslationsTierName, 
  latexSentenceTranslationsTierName,
  tierSelectionConfirmButtonText,
} from "~./jsx/App/locale/LocaleConstants.jsx";

const htmlEscape = require("html-es6cape");

// Each ID is a stable identifier that doesn't depend on the current language.
// The names are textTranslations to show to the user. 
export const latexSectionIdsToNames = {
  sentence: latexSentenceTierName, 
  morphemes: latexMorphemesTierName, 
  morphemeTranslations: latexMorphemeTranslationsTierName, 
  sentenceTranslations: latexSentenceTranslationsTierName,
};

/*
  This class models a window where the user tells LingView which tier should 
  be matched to which LaTeX section during the conversion. 
  The user does this by selecting the tier out of a list of radio buttons.
  When the Confirm button is clicked, the text is processed to be formatted,
  and the result is shown in a LatexResultWindow that gets rendered after 
  the confirm button is clicked. 
*/ 
export default class TierSelectionWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked : false,
      tierMap : {}
    }

    this.handleConfirmButtonClick = this.handleConfirmButtonClick.bind(this);
  }

  /* Retrieves all the tier names for this story. */
  getTierNames() {
    let tierNames = [];
    for (var tierEntry of this.props.sentence["dependents"]) {
      tierNames.push(tierEntry["tier"]);
    }
    return tierNames;
  }

  /* 
    Displays the tier selection window where the user tells LingView 
    which tier corresponds to which section in the LaTeX example through
    selecting from a radio button list form.
  */
  getTierSelectionFormChildren() {
    const children = [];
    
    // For each LaTeX section that needs to be formatted, create a list of radio buttons
    // so that the user can select which tier is matched to this section.
    let tierNames = this.getTierNames();
    for (let [latexSectionId, latexSectionName] of Object.entries(latexSectionIdsToNames)) { 
      children.push(<TierButtonList sentenceId={this.props.sentenceId} tierNames={tierNames} latexSectionId={latexSectionId} latexSectionName={latexSectionName} />);
    }
    
    return children;
  }

  /* 
   When the confirm button is clicked, 
   saves a map between latex section names and their selected tier names in state. 
  */
  handleConfirmButtonClick(e) {
    e.preventDefault();

    let tierMap = {};
    // Go through the selected radio buttons for this sentence and retrieve their value.
    for (let [latexSectionId, latexSectionName] of Object.entries(latexSectionIdsToNames)) {
      const buttons = document.querySelectorAll(
            `input[name="button-${this.props.sentenceId}-for-${latexSectionId}"]`);
      let selectedValue;
      for (const button of buttons) {
          if (button.checked) {
              selectedValue = button.value;
              break;
          }
      }
      tierMap[latexSectionId] = selectedValue;
    }

    // Add the tierMap to the state so that this object can be passed
    // on to the result window.
    this.setState({
      buttonClicked : true,
      tierMap : tierMap
    }); 

  }

  render() {
    return (
      <div className="tierSelectionSection">
          <div className="tierSelectionWrapper">
            <form className="tierSelectionForm" id={this.props.sentenceId}>
              <p><TranslatableText dictionary={latexSelectTiersPromptText} /></p>
              {this.getTierSelectionFormChildren()}
            </form>
            <button class="confirmButton" onClick={this.handleConfirmButtonClick}>
              <TranslatableText dictionary={tierSelectionConfirmButtonText} />
            </button>
          </div>
          
          {this.state.buttonClicked ? 
            <LatexResultWindow 
              sentenceId={this.props.sentenceId} 
              tierMap={this.state.tierMap} 
              sentence={this.props.sentence}
              metadata={this.props.metadata}/> : null}
      </div>
    );
  }; 
  
}
