import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//       name: "",
//       address: 'Viet Nam',
//       age: ""
//     }

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         //bad code
//         //this.state.age = event.target.value never code like this, this is change value undirect, render wrong inform
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + 'random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
    
//     render(){
//         return (
//             <div>
//                 My name is {this.state.name} and I'm from {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your Name: </label>
//                     <input 
//                     type="text"
//                     value={this.state.name}
//                     onChange={(event) => this.handleOnChangeInput(event)}/>

//                     <label>Your Age: </label>
//                     <input 
//                     type="text"
//                     value={this.state.age}
//                     onChange={(event) => this.handleOnChangeAge(event)}/>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {
    const [currentName, setNewName] = useState("");
    const [currentAge, setNewAge] = useState("");
    const [currentAddress, setNewAddress] = useState("VietNam");

    const handleOnChangeInput = (event) => {
        setNewName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setNewAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: currentName,
            age: currentAge
        });
    }


    return (
        <div>
            My name is {currentName} and I'm from {currentAge}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your Name: </label>
                <input 
                type="text"
                value={currentName}
                onChange={(event) => handleOnChangeInput(event)}/>
                <label>Your Age: </label>
                <input 
                type="text"
                value={currentAge}
                onChange={(event) => handleOnChangeAge(event)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor;