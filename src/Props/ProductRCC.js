import React, { Component } from 'react';

class ProductRCC extends Component {
    render() {
        // this.props la thuoc tinh co san cua react class component dung de nhan gia tri tu component cha truyen vao
        // this.props: thuoc tinh khong duoc gan lai gia tri moi
        let {sanPham} = this.props;
        return (
            <div class="card">
                <img class="card-img-top" src={sanPham.hinhAnh} alt="" />
                <div class="card-body">
                    <h4 class="card-title">{sanPham.tenSP}</h4>
                    <p class="card-text">{sanPham.giaBan}</p>
                </div>
            </div>
        );
    }
}

export default ProductRCC;