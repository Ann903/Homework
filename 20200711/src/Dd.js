import React, { Component } from "react";
import "./css/index.css";

class Dd extends Component {
    state={
        show: false
    }
    
    changeShow=()=>{
        let {show} = this.state;
        this.setState({
            show:!show
        });
    }
    
    render(){
        let {name,children} = this.props.data;
        let {show} = this.state;
        return <div className="friend-list">
            <dl className={show?"friend-group expanded":"friend-group"}>
            <dt onClick={this.changeShow}>{name}</dt>
            {children.map((itemData,index)=><dd key={index}>{itemData}</dd>)}
            </dl>
            </div>
    }
}

export default Dd;