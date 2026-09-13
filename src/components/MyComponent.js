//class componenent
//function component
import React from "react";

//viet bang class
class MyComponent extends React.Component {
    
    state = {
      name: 'Nope',
      address: 'Viet Nam',
      age: 18
    }
    
    handleClick(event){
        console.log("click me");
    }

    handleOver(event){
        console.log("My name is ", this.state.name);
    }
    //JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Clicking</button>
                <button onMouseOver={this.handleOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;