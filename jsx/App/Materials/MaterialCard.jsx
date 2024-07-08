import { Tag } from './Components/Tag.jsx';

export function MaterialCard({ metadata }) {
  return (
    <div className="material-card">
      <main>
        {metadata.itemServerUrl ?
          <a href={metadata.itemServerUrl}><h3>{metadata.title}</h3></a>
        :
          <h3>{metadata.title}</h3>
        }
        <h4>{metadata.credits.concat([metadata.year]).filter(x => x).join(', ')}</h4>
        <p dangerouslySetInnerHTML={{__html: metadata.descriptionHTML}} /> 
        {/* it's okay since we sanitize ahead of time (see fetch_materials.js) */}
      </main>
    </div>
  );
}
