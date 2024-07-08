import React, { Component } from 'react';

export class CategorySidebar extends Component {
    constructor(props) {
        super(props);
        const categoryCheckboxes = {};
        this.props.categories.forEach(category => {
          categoryCheckboxes[category] = true;
        });
        this.state = {
          categoryCheckboxes: categoryCheckboxes,
        };
        console.log('Initial categoryCheckboxes:', this.state.categoryCheckboxes);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
      }
      

  handleCheckboxChange(category) {
    const categoryCheckboxes = Object.assign({}, this.state.categoryCheckboxes);
    categoryCheckboxes[category] = !categoryCheckboxes[category];
    this.setState({
      categoryCheckboxes: categoryCheckboxes,
    });
  }

  render() {
    const { categories } = this.props;
    const { categoryCheckboxes } = this.state;

    return (
      <aside>
        <h2>Filter by Category</h2>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <label>
                <input
                  type="checkbox"
                  checked={categoryCheckboxes[category]}
                  onChange={() => this.handleCheckboxChange(category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
