import React, {Component} from 'react';
import {connect} from 'react-redux';

// Material
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup} from '@material-ui/core';


class Packlist extends Component {

    state = {
        packlist: this.props.reduxState.tripDetails.packlist 
    }

    handlechange = (i) => (event) => {
        // console.log( `in handleChange...`, this.state );
        // console.log( `status of item:`, event.target.value );
        
        let newPacklist = [...this.state.equipment];
        let newStatus;
        if(event.target.value === 'need'){
            newStatus = 'have';
        } else {
            newStatus = 'need';
        }

        newPacklist[i].status = newStatus;
        
        this.setState({
            ...this.state,
            equipment: newPacklist
        })
    }
    

    render(){
        const tripPacklist = this.props.reduxState.tripDetails.packlist;
        let packlist;
        if(this.props.editState === true){
            if(tripPacklist){
                packlist =
                    tripPacklist.map((item, i) => {
                        if( item.status === 'need'){
                        return <FormControlLabel key={i}
                            control={<Checkbox disabled />}
                            label={item.equipment_name}
                            />
                        }
                    });
            } else {
                packlist = null;
            } // end conditionally rendering disable checklist of items user needs for trip
        } else {
            if(tripPacklist){
                packlist = tripPacklist.map((item, i) => {
                        let currentStatus = false;    
                        if(item.status === 'have'){
                            currentStatus = true;
                        return <FormControlLabel key={i}
                            control={
                                <Checkbox name={item.name}
                                    checked={currentStatus}
                                    color="primary"
                                    value={item.status} 
                                    onChange={this.handlechange(i)} />
                            }
                            label={item.equipment_name}
                        />}
                    });
            } else {
                packlist = null;
            } // end conditional render of editable checklist
        }


        return(
            <div className="packlist-card">
                <h4>Pack List</h4>
                <p>Items needed:</p>

                <div className="packlist-checklist" >
                    <FormGroup>
                            {packlist}
                    </FormGroup>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Packlist);