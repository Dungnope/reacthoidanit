//class componenent
//function component
import React from "react";

//viet bang class
class MyComponent extends React.Component {
    
    state = {
      name: 'Nope',
      address: 'Viet Nam',
      age: 18
    }
    

    //JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;