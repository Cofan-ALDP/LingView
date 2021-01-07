const tagColors = {
  // Add colors here! (can pull them from airtable or make them up)
	anthropological: '#95e8e2',
  primary: '#A8C5FF',
  linguistic: '#F8CAFF',
	visual: '#ebffa8',
	pedagogical: '#a8ffe5',
	lexical: '#fcf69d',
	"project 2017": '#e3c0ed',
	translation: '#b8b8cf',
	ecological: '#baffab',
	"field guide": '#ffdebb',
	"rapid inventory": '#ffc1bf',
};

const defaultTagColor = '#ddd';

const createTagBackgroundColor = tagName => ({
  backgroundColor: tagColors[tagName] || defaultTagColor,
});

export function Tag({ text }) {
  return (
    <div className="taglabel" style={createTagBackgroundColor(text.toLowerCase())}>
      {text}
    </div>
  );
}
