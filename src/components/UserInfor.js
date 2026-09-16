import React from "react";

class UserInfor extends React.Component {
    state = {
      name: 'Nope',
      address: 'Viet Nam',
      age: 18
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
        console.log(this.state);
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
                    <button>Submit</button>

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

export default UserInfor;