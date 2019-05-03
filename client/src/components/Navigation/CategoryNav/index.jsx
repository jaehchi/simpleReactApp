import React, { Component } from 'react';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'


const data = [
  {
    "category_id": 1,
    "parent_id": 0,
    name: 'women',
    categories: [
      {
        "category_id": 10,
        "parent_id": 1,
        name: "tops",
        categories: [
          {
            "category_id": 20,
            "parent_id": 10,
            name: "bodysuits",
            categories: []
          },
          {
            "category_id": 21,
            "parent_id": 10,
            name: "casual",
            categories: []
          },
          {
            "category_id": 22,
            "parent_id": 10,
            name: 'dressy tops',
            categories: []
          },
        ]
      },
      {
        "category_id": 11,
        "parent_id": 1,
        name: "denim",
        categories: [
          {
            "category_id": 23,
            "parent_id": 11,
            name: "jackets & outerwear",
            categories: []
          },
          {
            "category_id": 24,
            "parent_id": 11,
            name: "jeans",
            categories: []
          },
          {
            "category_id": 25,
            "parent_id": 1,
            name: 'jumpsuit & romper',
            categories: []
          },
        ]
      }
    ]
  },
  {
  "category_id": 2,
    "parent_id": 0,
    name: 'shoes',
    categories: [
      {
        "category_id": 12,
        "parent_id": 2,
        name: 'booties',
        categories: [
        ]
      },
      {
        "category_id": 13,
        "parent_id": 2,
        name: 'boots',
        categories: [
        ]
      },
    ]
  },
  {
    "category_id": 3,
      "parent_id": 0,
      name: 'accessories',
      categories: []
  }
]

export default class CategoryNav extends Component {
  constructor() {
    super();
    this.state = {
      subItemToggle: {
        display: 'none',
        toggle: false,
        borderLeft: 'none',
      },
      selectedIds: [],
      activeSub: {
        isActive: false,
        visibility: 'hidden'
      }
    };
    
    this.toggleCategories = this.toggleCategories.bind(this);
    // this.renderSubCategories = this.renderSubCategories.bind(this);
    // this.toggleCaret = this.toggleCaret.bind(this);
  }  
  toggleCategories() {
    this.state.subItemToggle.toggle ? this.setState({subItemToggle: {toggle: false, display: 'none'}, activeSub: {isActive: false, visibility: 'hidden'}}) : this.setState({subItemToggle: {display: "flex", toggle: true, borderLeft: '2px solid darkGrey'}, activeSub: {isActive: true, visibility: 'visible'}})
  }
  handleSelectedId(selected, depthLevel) {
    console.log(this.state.isActive, 'hello')
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);

      updatedArray[depthLevel] = selected;

      this.setState({
        selectedIds: updatedArray,
        // isActive: true,
      })
      this.toggleCategories();
    }
  }
  renderSubCategories(categories, depthLevel = 0) {
    return categories.map(category => {
      return (
        <div className="tooltip_container">
          <div className="col category_container" key={category.category_id}>
            <ul className="category_item" onClick={this.handleSelectedId(category.category_id, depthLevel)}>{category.name}<Icon icon={ic_keyboard_arrow_right} style={this.state.isActive}/></ul>
          </div>
          <ul className="col subCategory_container" style={this.state.subItemToggle}>
            {
              category.categories.map(name => {
                if((this.state.selectedIds[depthLevel] === name.parent_id)) {
                  return (
                    <div className>
                      <ul className="col subCategory_name" key={category.parent_id}>
                      {name.name}
                      </ul>
                      {
                        name.categories.map(subName => {
                          return (
                            <div>
                              <li className="subCategory_item" key={subName.parent_id}>{subName.name}</li>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                }
              })
            }
          </ul>
        </div>
      )
    })
  }
  render() {
    return(
      <div>
        {this.renderSubCategories(data)}
      </div>
    )
  }
}