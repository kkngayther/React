import React, { Component } from 'react';
import ProductList from './ProductList';
import Modals from './Modals'

class PropsWithEvent extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-right">
                    <button className="btn btn-success my-3" data-toggle="modal" data-target="#modelId">Giỏ hàng</button>
                </div>
                <h3 className="text-center my-3">Danh sach san pham</h3>
                <ProductList />
            </div>
        );
    }
}

export default PropsWithEvent;