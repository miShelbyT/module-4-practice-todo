import React from 'react'
import CategoryComponent from '../Components/CategoryComponent'

function CategoryContainer(props) {

  const renderCategories = () => {
    return props.categories.map(category => <CategoryComponent key={category} category={category}/>)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories()}
    </div>
  )
}

export default CategoryContainer

