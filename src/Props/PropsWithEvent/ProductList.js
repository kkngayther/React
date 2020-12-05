import React, { Component } from 'react';
import productList from '../data/productList.json';
import Product from './Product';
import Modals from './Modals'

class ProductList extends Component {
    state = {
        productDetail: productList[0],
        cart: [
            {
                maSP: 1,
                tenSP: "VinSmart Live",
                donGia: 5700000,
                hinhAnh: "./img/vsphone.jpg",
                soLuong: 1,
            }
        ]
    }
    renderSanPham = () => {
        return productList.map((product, index) => {
            return (
                <Product addToCart={this.addToCart} onViewDetail={this.viewDetail} prod={product} key={index} />
            )
        });
    }

    viewDetail = (product) => {
        console.log(product);
        this.setState({
            productDetail: product,
        });

    }

    addToCart = (product) => {
        // console.log(product);
        const productUpdate = {
            ...product, soLuong: 1
        };
        const index = this.state.cart.findIndex(product => product.maSP === productUpdate.maSP);

        if (index !== -1) {
            this.state.cart[index].soLuong += 1;
            this.setState({
                cart: [...this.state.cart]
            });
            //this.state.cart[index].soLuong += 1;
        }
        else {
            this.setState({
                cart: [
                    ...this.state.cart,
                    {
                        maSP: product.maSP,
                        tenSP: product.tenSP,
                        donGia: product.giaBan,
                        hinhAnh: product.hinhAnh,
                        soLuong: 1,
                    }
                ]
            });
        }
    }
    tangSoLuong = (product) => {
        const index = this.state.cart.findIndex(prod => product.maSP === prod.maSP);
        console.log(index);
        this.state.cart[index].soLuong += 1;
        this.setState({
            cart: [
                ...this.state.cart
            ]
        })
    }
    giamSoLuong = (product) => {
        const index = this.state.cart.findIndex(prod => product.maSP === prod.maSP);
        console.log(index);
        if (this.state.cart[index].soLuong !== 0) {
            this.state.cart[index].soLuong -= 1;
        }
        this.setState({
            cart: [
                ...this.state.cart
            ]
        })
    }
    xoaMonHang = (product) => {
        const index = this.state.cart.findIndex(prod => product.maSP === prod.maSP);
        console.log(index);
        this.state.cart.splice(index, 1);
        this.setState({
            cart: [
                ...this.state.cart
            ]
        })
    }

    render() {
        console.log('rendering')
        const { productDetail, cart } = this.state;
        return (
            <div>
                <Modals cart={cart} onTangSoLuong={this.tangSoLuong} onGiamSoLuong={this.giamSoLuong} onXoaMonHang={this.xoaMonHang}/>
                <div className="row">
                    {this.renderSanPham()}
                    {/* <div>Thong so ki thuat</div> */}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h5 className="text-center my-3">{this.state.productDetail.tenSP}</h5>
                        <img width="300" src={this.state.productDetail.hinhAnh} />
                    </div>
                    <div className="col-8">
                        <h5 className="my-3 text-center">Thông số kĩ thuật</h5>
                        <table class="table">
                            <tr>
                                <th>Màn hình</th>
                                <td>{productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{productDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <td>{productDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <td>{productDetail.ram}</td>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <td>{productDetail.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;