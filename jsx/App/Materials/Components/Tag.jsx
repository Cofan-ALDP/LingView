const tagColors = {
    // TODO: add colors here! (can pull them from airtable)
    primary: '#A8C5FF',
    linguistic: '#F8CAFF',
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