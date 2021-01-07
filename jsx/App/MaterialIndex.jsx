import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MaterialCard } from './Materials/MaterialCard.jsx';
import { Tag } from './Materials/Components/Tag.jsx';
import { NotFound } from './Materials/NotFound.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx';
import { 
  navBarMaterialsText, 
  curatedCategoryName, 
  curatedCategoryDescription, 
  currentCategoryText, 
  chooseCategoryPrompt, 
  materialsLinkInstructions, 
  returnToMaterialsIndexLinkText,
} from './locale/LocaleConstants.jsx';

export class MaterialIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materialsIndex: [],
      materialsCategories: [],
    };
  }
  async componentDidMount() {
    const index = (await import('~./data/materials_index.json')).default;
    const categories = this.getCategories(index);
    this.setState({ materialsIndex: index, materialsCategories: categories });
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
        <header>
          <h1><TranslatableText dictionary={navBarMaterialsText} /></h1>
          <p></p>
        </header>
        <Route component={scrollToTop} />
        <Switch>
          <Route
            key={-1}
            exact path="/materials"
            render={_ => (
              <div>
                <Curated index={this.state.materialsIndex} />
                <ChooseCategory categories={this.state.materialsCategories} />
              </div>
            )}
          />
          {this.state.materialsCategories && this.state.materialsCategories.map((category, i) => (
            <Route
              key={i}
              exact path={`/materials/${category}`}
              render={_ =>
                <CategoryView
                  category={category}
                  items={
                    this.state.materialsIndex
                      .filter(materialInfo => materialInfo.categories.includes(category))
                  }
                />
              }
            />
          ))}
          <Route component={NotFound} />
        </Switch>
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
        <h2><TranslatableText dictionary={curatedCategoryName} /></h2>
        <p><TranslatableText dictionary={curatedCategoryDescription} /></p>
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
