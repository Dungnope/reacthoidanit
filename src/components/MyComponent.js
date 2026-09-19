//class componenent
//function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

//viet bang class
class MyComponent extends React.Component {
    
    state = {
        listUser: [
            {id: 1, name: "Nope", age: 30},
            {id: 2, name: "Linux", age: 12},
            {id: 3, name: "Torvals", age: 24},
        ]
    }

    handleAddNewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }
    //JSX
    render(){
        return (
            <>
                <div className="a">
                    <AddUserInfor handleAddNewUser = {this.handleAddNewUser} />
                    <br/> <br/>
                    <DisplayInfor listUser={this.state.listUser}
                    />
                </div>

                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;