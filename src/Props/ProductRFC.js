import React, { Component } from 'react';

// React function component nhan props la tham so dau vao cua ham component
export default function ProductRFC (props){
    let {name,price} = props;
        return (
            <div>
                <div class="card">
                    <img class="card-img-top" src="https://picsum.photos/200/200" alt="" />
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{price}</p>
                    </div>
                </div>
            </div>
        
        );
}
