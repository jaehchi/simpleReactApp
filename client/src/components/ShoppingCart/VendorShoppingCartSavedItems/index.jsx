import React, { Component } from "react";

class VendorShoppingCartSavedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        products: [
          {
            key: "726",
            thumb:
              "http://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg",
            name: "iPod Shuffle",
            points: 0,
            product_id: "34",
            model: "Product 7",
            option: [],
            quantity: "2",
            stock: true,
            reward: "",
            price: "$122.00",
            recurring: "",
            total: "$244.00",
            price_raw: 122,
            total_raw: 244
          },
          {
            key: "726",
            thumb:
              "http://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg",
            name: "iPod Shuffle",
            points: 0,
            product_id: "34",
            model: "Product 7",
            option: [],
            quantity: "2",
            stock: true,
            reward: "",
            price: "$122.00",
            recurring: "",
            total: "$244.00",
            price_raw: 122,
            total_raw: 244
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="container" id="vendorShoppingCartSavedItems_container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Pic</th>
                  <th>Style No.</th>
                  <th className="text-center">Color</th>
                  <th className="text-center">Size</th>
                  <th>Pack</th>
                  <th>Total Qty</th>
                  <th>Unit Price</th>
                  <th>Amount</th>
                  <th>Sel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-xs-3 col-sm-3 col-md-3">
                    <div className="media">
                      <a className="thumbnail pull-left" href="#">
                        {" "}
                        <img
                          style={{ width: "72px", height: "72px" }}
                          className="media-object"
                          src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"
                        />
                      </a>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="#">Product name</a>
                        </h4>
                        <h5 className="media-heading">
                          {" "}
                          by <a href="#">Brand name</a>
                        </h5>
                        <span>Status: </span>
                        <span className="text-success">
                          <strong>In Stock</strong>
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="col-sm-1 col-md-1">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      value="3"
                    />
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    {<strong>RED</strong>}
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>S-M-L</strong>
                  </td>
                  <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove" /> Remove
                    </button>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>10</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>$15.00</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>$150.00</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <label><input type="checkbox"></input></label>
                  </td>
                </tr>

                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>$24.59</strong>
                    </h5>
                  </td>
                </tr>

                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h5>Estimated shipping</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>$6.94</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h3>Total</h3>
                  </td>
                  <td className="text-right">
                    <h3>
                      <strong>$31.53</strong>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-shopping-cart" />{" "}
                      Continue Shopping
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Checkout <span className="glyphicon glyphicon-play" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorShoppingCartSavedItems;