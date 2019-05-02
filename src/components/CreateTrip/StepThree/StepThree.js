import React, {Component} from 'react';
import {connect} from 'react-redux';
import NextButton from '../NextButton';
import '../CreateTrip.css'
// import ChecklistItem from './ChecklistItem';

// Material
// import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';



class StepThree extends Component {


    state = {
        equipment: this.props.reduxState.equipment || [],
    }

    // componentDidMount() {
    //     this.props.dispatch( {type: 'GET_EQUIPMENT'});
    //         // create temporary new object
    //         // let equipObject = {};

    //         // for(let i = 0; i < this.props.reduxState.equipment.length; i++) {
    //         //     let item = this.props.reduxState.equipment[i];
    //         //     console.log( 'item:', item );
    //         //     // create a property with the item code as the "name"/"key"
    //         //     equipObject[item.code] = {
    //         //         name: item.name,
    //         //         code: item.code, 
    //         //         status: false,
    //         //     };
    //         // }
    //         // console.log( equipObject );
            
    //         // this.setState({
    //         //     equipment: equipObject,
    //         // });

    //         // console.log( `componentDidUpdate... current state:`, this.state );
    // }

    // componentDidUpdate(prevProps){
    //     if(this.props.reduxState.equipment !== prevProps.equipment){
    //         this.setState({
    //             equipment: this.props.reduxState.equipment
    //         })
    //     } 
    // }

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
    

    render() {
        const stepAction = {type: 'SAVE_EQUIPMENT', payload: this.state.equipment};
        let packlist;
        if( this.props.reduxState.equipment ){
            packlist = this.props.reduxState.equipment.map( (item, i) => {
                let currentStatus = false;    
                if(item.status === 'have'){
                    currentStatus = true;
                    }
                {return <FormControlLabel key={i}
                        control={
                            <Checkbox name={item.name}
                                checked={currentStatus}
                                color="primary"
                                value={item.status} 
                                onChange={this.handlechange(i)} />
                        }
                        label={item.name}
                    />}
                });
        } else {
            packlist = null;
        }

        return(
            <div>
                {/* {JSON.stringify(this.state.equipment)} */}

                <Card className="step-card" >
                    <FormGroup>

                        {/* This will map and create a checkbox for each item */}
                        {packlist}

                    </FormGroup>
                </Card>

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepThree);