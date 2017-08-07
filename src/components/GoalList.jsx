import React, { Component } from 'react';
import {goalRef} from '../firebase';
import {setGoals} from '../actions'; 
import {connect} from 'react-redux'; 

class GoalList extends Component {

    componentDidMount() {
        goalRef.on('value', snap => {
            let goals  = []; 
            snap.forEach(goal => {
                const { email, title} = goal.val(); 

                goals.push({email, title}); 
            })
           this.props.setGoals(goals); 
        })
    }

    render() {
        console.log('this.props.goals' , this.props.goals); 
        return (
            <div>{
                this.props.goals.map((goal, index) => {
                    return (
                        <div key={index}>{goal.title}</div> 
                    )
                })
                }</div>
        )
    }
}

function mapStateToProps(state){
    const {goals} = state; 

    return {
        goals
    }
}

export default connect(mapStateToProps,{setGoals})(GoalList); 