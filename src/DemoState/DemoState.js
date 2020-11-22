import React,{Component} from 'react'

export default class DemoState extends Component{
    // state la thuoc tinh co san cua component => dung de qun ly nguon du lieu thay doi tren giao dien khi nguoi dung thao tac(click, change, blur,...)
    state = {
        isLogin: false
    }

    userName = 'ttttt';

    renderContent = () => {
        if (this.state.isLogin){
            return <p>
                Hello {this.userName}
            </p>
        }
        return <button className="btn btn-success" onClick={
            () => {
                this.handleLogin();
            }
        }>Dang nhap</button>
    }
    handleLogin = () => {
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);
        
        this.setState({
            isLogin: true
        });
    }

    render(){
        return (
            <div className="container">
                <h3>if else react</h3>
                {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>Sign in</button>} */}
                {this.renderContent()}
            </div>
        );
    }
}
