import React from "react";
import './DisplayInfor.scss';
class DisplayInfor extends React.Component{
    //cach code dung OOP
    //khong can dung do da co babel compiler
    constructor(props){
        super(props);
        console.log(">> this run first 1")
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount(){ //thuong dung goi api sau nay
        console.log(">>> call me componenent did mount last session in first run");
        setTimeout(() => {
            document.title = "React by Nope"
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(">>> call me when something update", this.props, prevProps);
        //check item difference
        if(this.props.listUser !== prevProps.listUser){
            if(this.props.listUser.length === 5){
                alert("full list");
            }
        }
    }

    handleShowHide = () => {
       this.setState({
            isShowListUser: !this.state.isShowListUser
       })
    }

    //template + logic js
    render(){
        console.log(">> call me render any time have change");
       //destructuring array/object
       const {listUser} = this.props;
       // console.log(listUser);
       //props -> viet tat properties
       return (
           <div className="display-infor-container">
               {/* <img src={logo} alt="logo" /> */}
               <div>
                   <span onClick={(event) => {this.handleShowHide()}}> {this.state.isShowListUser ? "Hide list users:" : "Show list users:"}</span>
               </div>
               {/* viet nhu duoi neu chi muon 1 dieu kien dung sai thi khong lam gi */}
               {this.state.isShowListUser &&
                   <div>
                       {listUser.map((user) => {
                           return(
                           <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                               <div>
                                    <div style={{color: "orange", marginBottom: "20px"}}>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                               </div>
                               <div>
                                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfor