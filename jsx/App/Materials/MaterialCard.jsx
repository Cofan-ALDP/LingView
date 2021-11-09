import { Tag } from './Components/Tag.jsx';

export function MaterialCard({ metadata }) {

  let itemUrl = ""; 
  if (metadata.itemServerUrl) {
    itemUrl  = metadata.itemServerUrl; 
  } else if (metadata.itemLocalUrl) {
    itemUrl = metadata.itemLocalUrl; 
  }

  return (
    <div className="material-card">
      <main>
        {itemUrl ? 
          <a href={itemUrl}><h3>{metadata.title}</h3></a>
          : <h3>{metadata.title}</h3>
        }
        <h4>{metadata.credits.concat([metadata.year]).filter(x => x).join(', ')}</h4>
        <p dangerouslySetInnerHTML={{__html: metadata.descriptionHTML}} /> 
        {/* it's okay since we sanitize ahead of time (see fetch_materials.js) */}
        <div>{metadata.categories.map((category, i) => <Tag key={i} text={category} />)}</div>
      </main>
    </div>
  );
}
