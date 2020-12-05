import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" height="350" src={this.props.sp.hinhAnh} alt="123.png" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.sp.tenSP}</h4>
                    <p className="card-text">{this.props.sp.giaBan.toLocaleString()}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success">Thêm giỏ hàng</button>
                </div>
            </div>

        );
    }
}

export default SanPham;