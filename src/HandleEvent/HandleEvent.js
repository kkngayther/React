import React,{Component} from 'react'

export default class HandleEvent extends Component{

    showMess = () => {
        alert('Hello Cybersoft FE54!');
    }
    showInfo = (info) => {
        alert(info);
    }
    render(){
        const title = 'cyberSoft';
        return (
            <div className="container">
                <h3>Handle Event</h3>
                <button onClick={this.showMess}>Click me!</button>
                <button onClick={
                    () => {
                        alert(`Hello ${title}`);
                    }
                }>Show message</button>
                <button onClick={
                    () => {
                        this.showInfo('hello fe54!');
                    }
                }>Show info</button>
                {/* <button onClick={
                        this.showInfo.bind(this,'hello fe54!')
                }>Show info</button> */}
            </div>
        )
    }
}