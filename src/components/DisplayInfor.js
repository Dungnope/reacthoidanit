import React from "react";

class DisplayInfor extends React.Component{
 render(){
    //destructuring array/object
    const {listUser} = this.props;
    console.log(listUser);
    //props -> viet tat properties
    return (
        <div>
            {listUser.map((user) => {
                return(
                    <div key={user.id}>
                        <div>My name is {user.name}</div>
                        <div>My age is {user.age}</div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
 }
}

export default DisplayInfor