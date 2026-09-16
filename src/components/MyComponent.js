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
        // console.log("My name is ", this.state.name);

        //merge State => react class have this
        this.setState({
            name: 'itDev',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }
    
    handleOver(event){
        console.log("hover me");
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    //JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;