import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../CreateTrip/CreateTrip.css';

// Material
import Card from '@material-ui/core/Card';


class Resources extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_OUTFITTERS'} );
    }

    render() {
        const outfitter = this.props.reduxState.outfitter;
        return(
            <div>
                <p className="step-intro" >
                    Here are some outfitters than can provide additional help with planning your next trip to the Boundary Waters.
                </p>

                {outfitter.map( outfitter => 
                        <Card key={outfitter.id} className="route-card" >
                            <div className="route-card-div" >
                                <div className="route-img" >
                                    <img src={outfitter.image} alt={outfitter.name} />
                                </div>

                                <div className="route-info" >
                                    <h4>{outfitter.name}</h4>

                                    <p>{outfitter.city}
                                    <br/>{outfitter.phone}
                                    <br/>{outfitter.email}
                                    <br/><a href={outfitter.website}>Website</a>
                                    </p>
                                </div>

                            </div>
                        </Card>
                    )}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(Resources);