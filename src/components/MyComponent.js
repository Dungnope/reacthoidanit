//class componenent
//function component
import React from "react";
import UserInfor from "./UserInfor";
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
    //JSX
    render(){
        return (
            <div>
                <UserInfor />
                <br/> <br/>
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;