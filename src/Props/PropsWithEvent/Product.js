import React, { Component } from 'react';

class Product extends Component {
    render() {
        const {prod, onViewDetail, addToCart} = this.props;
        return (
            <div className="col-4">
                <div class="card">
                    <img class="card-img-top" height="400" src={prod.hinhAnh} alt="" />
                    <div class="card-body">
                        <h4 class="card-title">{prod.tenSP}</h4>
                        <button className="btn btn-success mr-2" onClick={() => onViewDetail(prod)}>Xem chi tiet</button>
                        <button className="btn btn-primary" onClick={() => addToCart(prod)}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;