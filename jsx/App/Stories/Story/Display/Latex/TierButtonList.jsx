import { TranslatableText } from "~./jsx/App/locale/TranslatableText.jsx";

const htmlEscape = require("html-es6cape");

/* 
 A list of radio buttons for all the tier names. 
 The tierNames passed in here have not been escaped. They may contain special characters.
*/
export const TierButtonList = ({ sentenceId, tierNames, latexSectionId, latexSectionName }) => {
  return (
    <div className="tierSelectionRow">
      <b><TranslatableText dictionary={latexSectionName} /></b>
      <TierRadioButtons sentenceId={sentenceId} tierNames={tierNames} latexSectionId={latexSectionId} latexSectionName={latexSectionName} />
    </div>
  );
};

const TierRadioButtons = ({ sentenceId, tierNames, latexSectionId, latexSectionName }) => {
  const children = [];
  
  // Iterate through tier names and create a list of radio buttons corresponding to each tier. 
  for (let i = 0; i < tierNames.length; i++) {
    // Call escape function on tier names so that special characters can be used as HTML property names.
    const tierName = tierNames[i];
    const escapedTierName = htmlEscape(tierName);
    
    const buttonId = `button-${sentenceId}-${escapedTierName}-for-${latexSectionId}`;
    
    children.push(
      <TierRadioButton 
        sentenceId={sentenceId}
        escapedTierName={escapedTierName} 
        latexSectionId={latexSectionId} 
        buttonId={buttonId} 
        isChecked={i == 0} 
      />
    );
    children.push(
      <TierRadioButtonLabel 
        tierName={tierName} 
        buttonId={buttonId} 
      />
    );
  }
  
  return (<div>{children}</div>);
};

const TierRadioButton = ({ sentenceId, escapedTierName, latexSectionId, buttonId, isChecked }) => {
  const groupName = `button-${sentenceId}-for-${latexSectionId}`;
  
  return (
    <input 
      type="radio" 
      id={buttonId} 
      value={escapedTierName} 
      name={groupName} 
      defaultChecked={isChecked}
    />
  );
};

const TierRadioButtonLabel = ({ tierName, buttonId }) => {
  return (<label for={buttonId}>{tierName}</label>);
};