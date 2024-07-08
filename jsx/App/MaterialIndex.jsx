import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { MaterialCard } from './Materials/MaterialCard.jsx';
import { Tag } from './Materials/Components/Tag.jsx';
import { NotFound } from './Materials/NotFound.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx';
import { 
  currentCategoryText, 
  chooseCategoryPrompt, 
  materialsLinkInstructions, 
  returnToMaterialsIndexLinkText,
  aldpMaterialsButton,
  allMaterialsButton,
  materialsPageHeader
} from './locale/LocaleConstants.jsx';

export class MaterialIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materialsIndex: []
    };
  }
  async componentDidMount() {
    const index = (await import('~./data/materials_index.json')).default;
    this.setState({ materialsIndex: index });
  }

  getCategories(materials) {
    const categories = new Set();
    for (const materialInfo of materials) {
      for (const category of materialInfo.categories) {
        categories.add(category)
      }
    }
    return Array.from(categories);
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
              <h1><TranslatableText dictionary={materialsPageHeader} /></h1>
          </header>
          <Route component={scrollToTop} />
          <Switch>
            <Route
              key={-1}
              exact path="/materials"
              render={_ => (
                <div>
                <Curated index={this.state.materialsIndex} />
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

function Curated({ index }) {
  return (
    <article>
      <header>
        <div className="material-card-list">
          {index.filter(m => m.isCurated).map((materialInfo, i) => (
            <MaterialCard key={i} metadata={materialInfo} />
          ))}
        </div>
      </header>
    </article>
  );
}

function ChooseCategory({ categories }) {
  return (
    <article>
      <header>
        <h2><TranslatableText dictionary={chooseCategoryPrompt} /></h2>
        <ul className="tag-grid">
          {categories && categories.map((category, i) => (
            <a href={`#/materials/${category}`} key={i}>
              <Tag text={category} />
            </a>
          ))}
        </ul>
      </header>
    </article>
  );
}

function CategoryView({ category, items }) {
  return (
    <article>
      <header>
        <h2><TranslatableText dictionary={currentCategoryText} /><Tag text={category} /></h2>
        {items &&
          <p>Showing {items.length} item{items.length == 1 || 's'} in the chosen category. <TranslatableText dictionary={materialsLinkInstructions} /></p>}
        <a href="#/materials/"><TranslatableText dictionary={returnToMaterialsIndexLinkText} /></a>
      </header>
      <div className="material-card-grid">
        {items.map((materialInfo, j) => <MaterialCard key={j} metadata={materialInfo} />)}
      </div>
      <a href="#/materials/"><TranslatableText dictionary={returnToMaterialsIndexLinkText} /></a>
    </article>
  );
}