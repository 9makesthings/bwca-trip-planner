import React, {Component} from 'react';
import {connect} from 'react-redux';

// Material
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


class Packlist extends Component {

    state = {
        packlist: [],
        editStateOff: true 
    }

    handlechange = (i) => (event) => {        
        let newPacklist = [...this.props.reduxState.tripDetails.packlist];
        let newStatus;
        if(event.target.value === 'need'){
            newStatus = 'have';
        } else {
            newStatus = 'need';
        }

        newPacklist[i].status = newStatus;
        
        this.setState({
            ...this.state,
            packlist: newPacklist
        })
    }
    
    handleEdit = (event) => {
        this.setState({
            ...this.state,
            editStateOff: !this.state.editStateOff
        })
    }

    handleSave = () => {
        const saveData = {
            packlist: this.state.packlist,
            trip_id: this.props.trip_id
        }
        this.props.dispatch( {type: 'UPDATE_PACKLIST', payload: saveData} );

        console.log( `SAVE DATA:`, saveData );
        

        this.setState({
            ...this.state,
            editStateOff: !this.state.editStateOff
        })
    }

    render(){
        const { classes } = this.props;
        const tripPacklist = this.props.reduxState.tripDetails.packlist;
        let packlist;
        let button;
        if(this.state.editStateOff === true){
            if(tripPacklist){
                button = <Button variant="outlined"
                    className={classes.button} 
                    onClick={this.handleEdit} >Edit</Button>
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
                button = <Button variant="contained" color="primary" 
                    className={classes.button}
                    onClick={this.handleSave} >Save</Button>
                packlist = tripPacklist.map((item, i) => {
                        let currentStatus = false;    
                        if(item.status === 'have'){
                            currentStatus = true;}
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
                    );
            } else {
                packlist = null;
            } // end conditional render of editable checklist
        }


        return(
            <div className="info-form-card" >
                <h3>Pack List</h3>
                {/* <p>Items needed:</p> */}

                <div className="packlist-checklist" >
                        {packlist}
                </div>
                {button}
            </div>
        );
    }
}

const styles = theme => ({
    button: {
        margin: '20px 30px 0 0',
        float: 'right',
    },
  });

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Packlist));