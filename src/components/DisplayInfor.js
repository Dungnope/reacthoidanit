import React from "react";

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
           <div>
               <div>
                   <span onClick={(event) => {this.handleShowHide()}}> {this.state.isShowListUser ? "Hide list users:" : "Show list users:"}</span>
               </div>
               {/* viet nhu duoi neu chi muon 1 dieu kien dung sai thi khong lam gi */}
               {this.state.isShowListUser &&
                   <div>
                       {listUser.map((user) => {
                           return(
                           <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                               <div>My name is {user.name}</div>
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