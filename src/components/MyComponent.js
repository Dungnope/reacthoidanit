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

    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => {
            return item.id !== userId;
        })
        this.setState({
            listUser: listUserClone
        })
    }

    //JSX
    render(){
        //DRY: don't repeat yourself
        const test = true;
        return (
            <>
                {test}
                <div className="a">
                    <AddUserInfor handleAddNewUser = {this.handleAddNewUser} />
                    <br/> <br/>
                    <DisplayInfor 
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>

                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;