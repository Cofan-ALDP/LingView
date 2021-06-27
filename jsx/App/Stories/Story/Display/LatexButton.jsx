import React from 'react';
import TierSelectionWindow from "./Latex/TierSelectionWindow.jsx";
import { TranslatableText } from "~./jsx/App/locale/TranslatableText.jsx";
import { latexButtonText } from "~./jsx/App/locale/LocaleConstants.jsx";

/* 
  A text format button that renders a window for tier selection on clicked. 
  This tier selection window then leads to a new block displaying the result of LaTeX format conversion.
*/
export class LatexButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked : false
        }
        this.handleClick = this.handleClick.bind(this);
      }

    /* Updates the flag when button is clicked so that the tier selection component gets rendered. */
    handleClick(e) {
        e.preventDefault();

        this.setState({
            buttonClicked : true
        });

    }

    render() {
        return (
            <div class="latexButtonContainer">
                <button class="latexButton" onClick={this.handleClick}>
                    <TranslatableText dictionary={latexButtonText} />
                </button>
                {/* The -1 from start time ms matches how the sentence's search index is calculated for the sentence's URL.
                A timed sentence's index in the URL is its start time minus 1. */}
                {this.state.buttonClicked ? 
                    <TierSelectionWindow 
                        sentence={this.props.sentence} 
                        metadata={this.props.metadata} 
                        sentenceId = {this.props.metadata["timed"] ? (this.props.sentence["start_time_ms"]-1) : (this.props.sentence["sentence_id"])} /> 
                    : null}
            </div>); 
    }
    
}
