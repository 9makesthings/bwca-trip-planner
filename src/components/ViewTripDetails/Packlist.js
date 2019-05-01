import React, {Component} from 'react';
import {connect} from 'react-redux';


class Packlist extends Component {

    state = {
        packlist: []
    }

    componentDidUpdate(prevProps){
        if( this.props.reduxState.tripDetails.packlist !== prevProps.tripDetails.packlist ){

            let packlist = this.props.reduxState.tripDetails.packlist;
            for( let i=0; i<packlist.length; i++ ){
                if( packlist[i].status === 'need' ){
                    this.state.packlist.push( packlist[i] );
                }
            }
            console.log( `Packlist current state...`, this.state );

        }
        
    }

    render(){
        console.log( `Please map this...`, this.props.reduxState.tripDetails.packlist );
        
        return(

            <ul>
                {this.state.packlist.map( (item, i) => 
                        <li key={i}>{item.name}</li>
                    )}
            </ul>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Packlist);