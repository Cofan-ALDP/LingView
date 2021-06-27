import { UntimedTextDisplay } from './Untimed.jsx';
import { TimedTextDisplay } from './Timed.jsx';

export function CenterPanel({ timed, sentences, metadata}) {
	// I/P: timed, a boolean value
	//      sentences, a list of sentences
	// O/P: the main panel showing glossing, timestamps, etc.
	// Status: tested, working

	if (timed) {
		return <div id="centerPanel"><TimedTextDisplay sentences={sentences} metadata={metadata}/></div>;
	} else {
		return <div id="centerPanel"><UntimedTextDisplay sentences={sentences} metadata={metadata}/></div>;
	}
}
