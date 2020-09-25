import { Tag } from './Components/Tag.jsx';
// import { thumbnailProperties } from '~./preprocessing/materials-page/shared';
// <aside style={{
//     backgroundColor: thumbnailProperties.backgroundColor,
//     width: thumbnailProperties.width,
//     height: thumbnailProperties.height,
// }}></aside>

export function MaterialCard({ metadata }) {
    // if (metadata == null) {
    //      return <div className="material-card"></div>;
    // }
	return (
        <div className="material-card">
            <aside>
                <a href={metadata.savedPath}>
                    { metadata.thumbnailImageUrl
                        ? <img src={metadata.thumbnailImageUrl} />
                        : <div className="nothumbnail"><span>no preview</span></div> }
                </a>
            </aside>
            <main>
                <a href={metadata.savedPath}><h3>{metadata.title}</h3></a>
                <h4>{metadata.credits.concat([metadata.year]).filter(x => x).join(', ')}</h4>
                <p dangerouslySetInnerHTML={{__html: metadata.descriptionHTML}} /> 
                {/* it's okay since we sanitize ahead of time (see fetch-materials.js) */}
                <div>{metadata.categories.map((category, i) => <Tag key={i} text={category} />)}</div>
            </main>
        </div>
    );
}