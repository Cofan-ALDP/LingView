import { Tag } from './Components/Tag.jsx';

export function MaterialCard({ metadata }) {
  return (
    <div className="material-card">
      <main>
        <a href={metadata.itemServerUrl}><h3>{metadata.title}</h3></a>
        <h4>{metadata.credits.concat([metadata.year]).filter(x => x).join(', ')}</h4>
        <p dangerouslySetInnerHTML={{__html: metadata.descriptionHTML}} /> 
        {/* it's okay since we sanitize ahead of time (see fetch-materials.js) */}
        <div>{metadata.categories.map((category, i) => <Tag key={i} text={category} />)}</div>
      </main>
    </div>
  );
}
