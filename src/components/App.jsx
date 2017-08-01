import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { withRouter } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);


        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user has signed in or up ', user);
                this.props.history.push('/app');

            }
            else {
                console.log('user has signed out or still needs to sign in.');
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

export default withRouter(App); 