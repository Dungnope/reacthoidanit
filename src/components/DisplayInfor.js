import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';



//stateless component
//stateless vs stateful: khi chua co hook
const DisplayInfor = (props) => { //function component props tu dong truyen vao
    const {listUser} = props; 
    
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // [ten bien state, ham giup cap nhat bien state]
    //destructuring assigment
    // giong voi this.state = {isShowHideListUser: true}
    
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser); 
        // tuong duong voi this.setState({isShowHideListUser: !isShowHideListUser})
    }

    console.log(">> call me render any time have change");

    useEffect(() => { //nhu componenetDidMount
        if(listUser.length === 0) alert("you deleted all the users");
        console.log(">> call me useEffect");
    }, [listUser]); // ngoac vuong thi chi chay 1 lan, bien muon react theo doi chinh la check xem componentDidUpdate
    //useEffect dung bao nhieu tuy y

    //props -> viet tat properties
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide" : "Show"} List user
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUser.map((user) => {
                        return(
                        <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                            <div>
                                 <div style={{color: "orange", marginBottom: "20px"}}>My name is {user.name}</div>
                                 <div>My age is {user.age}</div>
                            </div>
                            <div>
                                 <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                            </div>
                            <hr />
                        </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DisplayInfor