import React, { Component } from 'react';
import ProductRFC from './ProductRFC';

class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sach san pham</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="Iphone" price="1000$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Samsung" price="800$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Sony" price="700$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Xiaomi" price="500$"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoProps;