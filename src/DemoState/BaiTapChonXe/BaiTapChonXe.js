import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: './img/car/products/black-car.jpg' // gia tri mac dinh cua state
    }

    changePicture = (newPicture) => {
        this.setState({
            imgSrc: `./img/car/products/${newPicture}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        {/* Hinh cua xe */}
                        <img className="w-100" src={this.state.imgSrc} />

                    </div>
                    <div className="col-6">
                        {/* Button chon mau xe */}
                        <div className="card">
                            <div className="bg-dark card-head text-white p-3">Exterior Color</div>
                            <div className="card-body">
                                <div className="row mt-1 border border-dark p-2">
                                    <div className="col-2">
                                        <img className="w-100" src="./img/car/icons/icon-black.jpg" alt="" onClick={() => {
                                            this.changePicture('black')
                                        }}/>
                                    </div>
                                    <div className="col-10">
                                        <h3 className="card-title">Black Color</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mt-1 border border-dark p-2">
                                    <div className="col-2">
                                        <img className="w-100" src="./img/car/icons/icon-silver.jpg" alt="" onClick={() => {
                                            this.changePicture('silver')
                                        }}/>
                                    </div>
                                    <div className="col-10">
                                        <h3 className="card-title">Silver Color</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mt-1 border border-dark p-2">
                                    <div className="col-2">
                                        <img className="w-100" src="./img/car/icons/icon-red.jpg" alt="" onClick={() => {
                                            this.changePicture('red')
                                        }}/>
                                    </div>
                                    <div className="col-10">
                                        <h3 className="card-title">Red Color</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mt-1 border border-dark p-2">
                                    <div className="col-2">
                                        <img className="w-100" src="./img/car/icons/icon-steel.jpg" alt="" onClick={() => {
                                            this.changePicture('steel')
                                        }}/>
                                    </div>
                                    <div className="col-10">
                                        <h3 className="card-title">Steel Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}