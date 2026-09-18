import React from "react";

class AddUserInfor extends React.Component {
    state = {
      name: "",
      address: 'Viet Nam',
      age: ""
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        //bad code
        //this.state.age = event.target.value never code like this, this is change value undirect, render wrong inform
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: this.state.name,
            age: this.state.age
        });
    }
    
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input 
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleOnChangeInput(event)}/>

                    <label>Your Age: </label>
                    <input 
                    type="text"
                    value={this.state.age}
                    onChange={(event) => this.handleOnChangeAge(event)}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;