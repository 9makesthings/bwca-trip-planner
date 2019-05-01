import React, {Component} from 'react';
import {connect} from 'react-redux';

// Material
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup, Card } from '@material-ui/core';


class Packlist extends Component {

    state = {
        packlist: this.props.reduxState.tripDetails.packlist 
    }


    render(){
        // console.log( `Please map this...`, this.props.reduxState.tripDetails.packlist );
        let packlist;
        if(this.props.reduxState.tripDetails.packlist){
            packlist =
                this.props.reduxState.tripDetails.packlist.map((item, i) => {
                    if( item.status === 'need'){
                    return <FormControlLabel key={i}
                        control={<Checkbox disabled />}
                        label={item.equipment_name}
                        />
                    }
                });
        } else {
            packlist = null;
        }
        return(
            <div className="packlist-card">
                <FormGroup>
                    <h4>Pack List</h4>
                    <p>Items needed:</p>
                    {packlist}
                </FormGroup>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Packlist);