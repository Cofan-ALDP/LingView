import { TranslatableText } from "~./jsx/App/locale/TranslatableText.jsx";
import { 
  latexStoryTitleText,
  latexStoryIDText,
  latexSentenceURLText,
  latexLibraryText, 
} from "~./jsx/App/locale/LocaleConstants.jsx";

export const LatexResultContainer = ({ sentenceId, processedMaterial }) => {
  // <pre> means that its content is pre-formatted text. Newlines are preserved.
  return (
    <div className="latexResultContainer" sentenceId={sentenceId}>
      <pre>
        <TranslatableText dictionary={latexStoryTitleText}/> {processedMaterial["title"].replace(/\_/g, " ") + "\n"}
        <TranslatableText dictionary={latexStoryIDText}/> {processedMaterial["storyId"].replace(/_/g, "\\_") + "\n"}
        <TranslatableText dictionary={latexSentenceURLText}/> {processedMaterial["sentenceUrl"].replace(/_/g, "\\_") + "\n"}
      </pre>
      <pre><TranslatableText dictionary={latexLibraryText} /></pre>
      <pre>{convertToLatex(processedMaterial)}</pre>
    </div>
  );
};

/* Convert a sentence into LaTeX format with gb4e-modified package style. */
function convertToLatex(material) {
  const begin = "\\begin{exe} \n  \\ex \\label{example} \n  ";
  const end = "\\end{exe} \n";
  
  const morphLines = getMorphemeLines(material["morphemes"])
  const glossLine = getMorphologicalAnalysisLine(material["gloss"]);
  const translationLine = getSentenceTranslationLine(material["sentenceTranslation"]);
  // Replace _ with \_ so that it is recognized as underscore in LaTeX
  const storyTitle = material["title"].replace(/_/g, "\\_") + "\n"; 
  
  const toDisplay = begin + morphLines + glossLine + translationLine + storyTitle + end;
  return toDisplay; 
}

/* Combines the glossing and morphological analysis into their corresponding lines. */
function getMorphemeLines(morphemes) {
  const morphemeStart = "\\gll";
  const morphemeEnd = "\\\\ \n  ";
  
  let wordList = []; // This will contain the complete sentence without - or == 
  let morphemeList = [morphemeStart]; // This has each word decomposed into suffices and clitics.
  for (const [id, entry] of Object.entries(morphemes)) {
    for (const [wholeWord, morphs] of Object.entries(entry)) {
      wordList.push(wholeWord);
      morphemeList.push(morphs.join(""));
    }
  }
  morphemeList.push(morphemeEnd);
  
  return wordList.join(" ") + " \n  " + morphemeList.join(" ");
}

/* Creates the line for the morpheme translations. */
function getMorphologicalAnalysisLine(gloss) {
  // The \textsc tag is added for each suffix/clitic translation.
  const textscStart = "\\textsc{";
  const textscClose = "}";

  let glossList = []; // This has the morphological analysis line.
  for (const [id, entry] of Object.entries(gloss)) {
    for (const [wholeWord, glossItems] of Object.entries(entry)) {
      let glossForThisWord = [];
      for (const [id, glossItem] of Object.entries(glossItems)) {
        // Only the suffices and clitics need \textsc
        if (isSuffix(glossItem)) {
          glossForThisWord.push(textscStart + glossItem.toLowerCase() + textscClose);
        } else {
          glossForThisWord.push(glossItem); 
        } 
      }
      // Reason for using the replace with "_" is that some glossed word is two words in
      // the translation, but two words with a space in between will be recognized as two
      // separate glossed word by the LaTeX package, so adding the underscore makes sure 
      // that a phrase made up with multiple words can still be grouped together after being rendered in LaTeX. 
      glossList.push(glossForThisWord.join("").replace(" ", "\\_"));
    }
  }
  glossList.push("\\\\ \n  ");

  return glossList.join(" ");
}

/* Puts the sentence translation into LaTeX format. */
function getSentenceTranslationLine(sentenceObject) {
  const sentence = sentenceObject[0]["value"];
  const translationStart = "\\glt `";
  const translationEnd = "' \\\\ \n  ";
  return translationStart + sentence + translationEnd;
}

/* Checks if an item is a suffix or clitic. */
function isSuffix(item) {
  return item.startsWith("=") || item.startsWith("-") || item === item.toUpperCase();
}
