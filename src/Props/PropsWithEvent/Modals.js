import React, { Component } from 'react';

class Modals extends Component {
    // onTangSoLuong = (product) => {
    //     // console.log(product.maSP);
    //     const index = this.props.cart.findIndex(prod => product.maSP === prod.maSP);
    //     console.log(index);
        
    // }
    render() {
        const { cart, onTangSoLuong, onGiamSoLuong, onXoaMonHang } = this.props;
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cart.map((product, index) => {
                                            // product.soLuong = this.state.soLuong;
                                            return (
                                                <tr>
                                                    <td>{product.maSP}</td>
                                                    <td><img width="30px" src={product.hinhAnh}/></td>
                                                    <td>{product.tenSP}</td>
                                                    <td> 
                                                        <button className="btn btn-primary mr-2" onClick={() => onGiamSoLuong(product)}>-</button> 
                                                            {product.soLuong} 
                                                        <button className="btn btn-primary ml-2" onClick={() => onTangSoLuong(product)}>+</button>
                                                    </td>
                                                    <td>{product.donGia.toLocaleString()}</td>
                                                    <td>{(product.donGia * product.soLuong).toLocaleString()}</td>
                                                    <td><button className="btn btn-danger" onClick={() => onXoaMonHang(product)}>Xóa</button></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="4"></td>
                                            <td>Tổng tiền</td>
                                            <td>
                                                {
                                                    this.props.cart.reduce((tongTien, product, index) => {
                                                        return tongTien += product.soLuong * product.donGia;
                                                    },0).toLocaleString()
                                                }
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modals;