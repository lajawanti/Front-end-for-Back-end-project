import React from 'react';
import Login from './Login.js';

const Authenticate = (App) => 
   
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn : true,
            };
        }

        onLoggedIn = () => {
            this.setState({ loggedIn : true })
        }  
        
        render() {
            console.log("Inside render " ,this.state.loggedIn);
            if(this.state.loggedIn) {
                return  <App />
            } else {
                return  <Login onLoggedIn = {this.state.onLoggedIn}/>
            }
        }
};

export default Authenticate;