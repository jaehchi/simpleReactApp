import React, { Component } from 'react';

import ProductImage from '../../Vendor/ProductImage';
import './favoriteStyle.scss';

class FavoriteStyle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      images: this.props.images
    })
  }

  onClick (e) {
    const id = e.target.attributes.getNamedItem('data-id').value;
    const filter = this.state.images.filter( image => {
      return image.id !== id
    });

    this.setState({ images: filter });
  }

  generateMockData (images) {
    let mock = []; 
    const item = {
      name: 'Aisley Rose',
      price: 18,
      model: 'L4777R',
      image: "https://dummyimage.com/400x600/26628a/fff"
    }


    for ( let i = 0; i < 1; i++ ) {
       let fake = images.map( image => {
          return (
            <div className="col-xs-3 col-sm-3 col-md-3" style={{ padding: '5px'}} onClick={this.onClick}>
              <div className="row">
                <ProductImage 
                  name="default" 
                  className="col-xs-12 col-sm-12 col-md-12" 
                  images={[image]}
                  onClick={this.onClick}
                  isViewable={false}
                  isDeletable={true}
                />
              </div>
              <div className="row">
                <div className="favorites__item__desc col-xs-6 col-sm-6 col-md-6">
                  <h4>{item.model} / ${ item.price} </h4>
                  <div>{item.name}</div>
                </div>
                <div className="favorite__addToCart col-xs-6 col-sm-6 col-md-6">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          )
        });
    
      mock = mock.concat(fake);
    }
    return mock;
  }

  render() {
    return (
      <div className="container">
        <div id="favoriteStyles">
          <div style={{ width: '100%', height: '50px', backgroundColor: '#efefef', margin: '20px 0'}}>
            Filter Component
          </div>
          <div className="row" style={{ margin: 0 }}>
            { this.generateMockData(this.state.images) }
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteStyle;