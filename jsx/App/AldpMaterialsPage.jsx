import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { MaterialCard } from './Materials/MaterialCard.jsx';
import { NotFound } from './Materials/NotFound.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx';
import { 
  aldpMaterialsButton,
  allMaterialsButton,
  materialsPageHeader
} from './locale/LocaleConstants.jsx';

export class AldpMaterialsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materialsIndex: []
    };
  }
  async componentDidMount() {
    const index = (await import('~./data/materials_index.json')).default;
    this.setState({ materialsIndex: index});
    console.log("componentDidMount")
  }

  render() {
    return (
      <main className="wide-content-wrapper">
        <div className='sidenav'>
            <div className="material-buttons-container">
                    <Link to="/materials"  className="material-button">
                      <TranslatableText dictionary={materialsPageHeader} />
                    </Link>
                    <Link to="/aldp-materials">
                      <TranslatableText dictionary={aldpMaterialsButton} />
                    </Link>
                    <Link to="/all-materials" className="material-button">
                      <TranslatableText dictionary={allMaterialsButton} />
                    </Link>
              </div>
        </div>
        <div className="header-content-container">
          <header>
              <h1><TranslatableText dictionary={aldpMaterialsButton} /></h1>
          </header>
          <Route component={scrollToTop} />
          <Switch>
            {console.log("switch")}
            <Route
              key={-1}
              exact path="/aldp-materials"
              render={_ => (
                <div>
                    <GetAldp index={this.state.materialsIndex} />
                </div>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    );
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  return null;
}

function GetAldp({ index }) {
    return (
        <article>
          <header>
            <div className="material-card-list">
              {index.filter(m => m.isALDP).map((materialInfo, i) => (
                <MaterialCard key={i} metadata={materialInfo} />
              ))}
            </div>
          </header>
        </article>
      );
}

