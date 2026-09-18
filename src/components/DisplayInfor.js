import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';
class DisplayInfor extends React.Component{

    state = {
        isShowListUser: true
    }


    handleShowHide = () => {
       this.setState({
            isShowListUser: !this.state.isShowListUser
       })
    }

    render(){
       //destructuring array/object
       const {listUser} = this.props;
       // console.log(listUser);
       //props -> viet tat properties
       return (
           <div className="display-infor-container">
               <img src={logo} alt="logo" />
               <div>
                   <span onClick={(event) => {this.handleShowHide()}}> {this.state.isShowListUser ? "Hide list users:" : "Show list users:"}</span>
               </div>
               {/* viet nhu duoi neu chi muon 1 dieu kien dung sai thi khong lam gi */}
               {this.state.isShowListUser &&
                   <div>
                       {listUser.map((user) => {
                           return(
                           <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                               <div style={{color: "orange", marginBottom: "20px"}}>My name is {user.name}</div>
                               <div>My age is {user.age}</div>
                               <hr />
                           </div>
                           )
                       })}
                   </div>
               }
           </div>
       )
    }
}

export default DisplayInfor