import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  // console.log(categories)
  // create a variable set to a mapped array of categories, creating a button for each one
  const categoryButtons = categories.map(
    (category) => {
      const className = category === selectedCategory ? "selected" : null
        return (
          <button
            key={category}
            className = {className}
            onClick={() => {
              onSelectCategory(category)
              console.log(category + " it is then!")}
            }>
              {category}
          </button>
        )
    }
  )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
