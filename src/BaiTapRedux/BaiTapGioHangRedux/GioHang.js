import React, { Component } from 'react';
// import thu vien ket noi redux
import { connect } from 'react-redux';
import DanhSachSanPham from './DanhSachSanPham';

class GioHang extends Component {



    render() {
        console.log(this.props.gioHang);
        return (
            <div className="container">
                <h1 className="text-center display-4">
                    Giỏ hàng
                </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.gioHang.map((sp, index) => {
                                return <tr key={index}>
                                    <td>{sp.maSP}</td>
                                    <td>{sp.tenSP}</td>
                                    <td><img width="50" height="50" src={sp.hinhAnh} /></td>
                                    <td>{sp.soLuong}</td>
                                    <td>{sp.donGia}</td>
                                    <td>{sp.soLuong * sp.donGia}</td>
                                    <td><button className="btn btn-danger">Xóa</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

// Dinh nghia ham lay state tu redux ve bien thanh props cua reactComponent
const mapStateToProps = (state) => {
    // state dai dien cho rootReducer
    return {
        gioHang: state.stateGioHang.gioHang
    }
}


// Ket noi react component voi redux store tao ra 1 component moi export ra ngoai
export default connect(mapStateToProps)(GioHang);