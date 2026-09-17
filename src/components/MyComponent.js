//class componenent
//function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

//viet bang class
class MyComponent extends React.Component {
    
    //JSX
    render(){
        const Info = ['a', 'b', 'c'];
        return (
            <div>
                <UserInfor />
                <br/> <br/>
                <DisplayInfor name="Musk" age="30"/>
                <hr/>
                <DisplayInfor name={"Google"} age={50} myInfor = {Info}/>
            </div>
        );
    }
}

export default MyComponent;