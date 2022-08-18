import React from "react";
import "./TableList.css";
import Accordion from "./Accordion";

const ProductItems = ({ state: { products, displayCategory } }) => (
  <div>
    {products
      .filter(
        ({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, name, explanation, contents }) => (
        <Accordion
          key={`Accordion-${name}`}
          category={category}
          name={name}
          explanation={explanation}
          contents={contents}
        />
      ))}
  </div>
);

const ButtonCategories = (productCategories, setCategory) =>
  productCategories.map(category => (
    <button
      key={category}
      className={`category-item flex-spread`}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  ));

const UI = ({ state, state: { productCategories }, setCategory }) => (
  <div className="commands-split">
    <div className="category-box flex-col">
      <p className="category-box-title">Categories</p>
      <div className="category-box-horizontal-line"></div>
      {ButtonCategories(productCategories, setCategory)}
    </div>
    <div className="result-box flex-col">
      <ProductItems state={state} />
    </div>
  </div>
);

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
      products: props.products,
      productCategories: props.productCategories,
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }
  render() {
    return <UI setCategory={this.setCategory} state={this.state} />;
  }
}

export default TableList;
