import React from "react";
import './DisplayInfor.scss';

//stateless vs stateful: khi chua co hook
// class DisplayInfor extends React.Component{
//     //cach code dung OOP
//     //khong can dung do da co babel compiler

//     //template + logic js
//     render(){
//         console.log(">> call me render any time have change");
//        //destructuring array/object
//        const {listUser} = this.props;
//        // console.log(listUser);
//        //props -> viet tat properties
//        return (
//            <div className="display-infor-container">
//                {true &&
//                    <div>
//                        {listUser.map((user) => {
//                            return(
//                            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                                <div>
//                                     <div style={{color: "orange", marginBottom: "20px"}}>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                </div>
//                                <div>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                </div>
//                                <hr />
//                            </div>
//                            )
//                        })}
//                    </div>
//                }
//            </div>
//        )
//     }
// }

const DisplayInfor = (props) => { //function component props tu dong truyen vao
    console.log(">> call me render any time have change");
    //destructuring array/object
    const {listUser} = props;
    // console.log(listUser);
    //props -> viet tat properties
    return (
        <div className="display-infor-container">
            {true &&
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