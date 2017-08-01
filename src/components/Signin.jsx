import React, {Component} from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import {firebaseApp} from '../firebase'; 

class Signin extends Component {

    constructor(props){
        super(props); 
        this.state ={
            email: '', 
            password: '', 
            error: {
                message: ''
            }
        }
    }

    signIn() {
        console.log('this.state' , this.state); 
        const {email, password} = this.state; 
        firebaseApp.auth().signInWithEmailAndPassword(email , password).then( () => {this.setState({error: ''})
        this.props.history.push('/app'); })
        .catch(error => {
            console.log('error' , error); 
            this.setState({error})
        }); 
    
    }
    render() { 
        return (
            <div className="form-inline"> 
                <h2>Sign in</h2>
                <div className="form-group"> 
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange = {event => this.setState({email:event.target.value})}
                       
                    /> 
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password" 
                        onChange= { event => this.setState({password: event.target.value})}
                        onKeyDown = {event => {
                            if(event.key === 'Enter'){
                                this.signIn(); 
                            }    
                        }}
                    /> 
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick = { (event) => this.signIn()}
                        
                     > 
                        Sign In
                    </button> 
                </div> 
                <div> {this.state.error.message} </div> 
                <div><Link to={'/signup'}>Sign up instead</Link> </div> 
            </div> 
        )
    }
}

export default withRouter(Signin); 