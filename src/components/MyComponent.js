//class componenent
//function component
import React from "react";
import UserInfor from "./UserInfor";

//viet bang class
class MyComponent extends React.Component {
    
    //JSX
    render(){
        return (
            <div>
                <UserInfor />
            </div>
        );
    }
}

export default MyComponent;