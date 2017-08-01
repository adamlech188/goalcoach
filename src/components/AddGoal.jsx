import React, { Component } from 'react';
import {goalRef }from '../firebase'; 
import {connect} from 'react-redux'; 

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    addGoal() {
        console.log('this', this); 
        const {title} = this.state; 
        const {email} =  this.props; 
        goalRef.push({ email, title})
    }
    render() {
        return (
            <div className="form-inline">
                <div className="form-group" >
                    <input
                        ref="goaltext"
                        type="text"
                        placeholder="Add goal"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        onChange={event => this.setState({ title: event.target.value })} />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => {this.addGoal(); this.refs.goaltext.value=''}}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

function mapStatetoProperties(state) {
    const {email} = state; 
    return {
        email
    }
}

export default connect(mapStatetoProperties, null)(AddGoal); 