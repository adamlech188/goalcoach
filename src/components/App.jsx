import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal'; 
import {connect} from 'react-redux'; 
import {logUser} from '../actions'; 
import GoalList from './GoalList'; 

class App extends Component {

    constructor(props) {
        super(props);


        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push('/app');
                const { email }  = user; 
                this.props.logUser(email); 

            }
            else {

                this.props.history.push('/signin');
            }

        })
    }
    signOut() {
        firebaseApp.auth().signOut();
        this.props.history.push('/signin');
    }
    render() {
        return (
            <div>
                <h3> Goals </h3> 
                <AddGoal /> 
               <GoalList /> 
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Sign out
                </button>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    console.log('state', state); 
    return {}; 
}

export default connect(mapStatetoProps, {logUser})(App); 