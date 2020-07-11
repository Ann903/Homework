import React, { Component } from "react";
import "./css/index.css";
import data from "./data";
import Dd from "./Dd";

class App extends Component {
  render() {
      return <div id="menu">
          {data.map((item,index)=>{
              {/* console.log(item); */}
              return <Dd key={index} data={item} />
          })}
      </div>;
  }
}


export default App;
