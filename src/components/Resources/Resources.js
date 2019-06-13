import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Resources.css';

// Material
import Card from '@material-ui/core/Card';


class Resources extends Component {

    // componentDidMount() {
    //     this.props.dispatch( {type: 'GET_OUTFITTERS'} );
    // }

    render() {
        const outfitter = this.props.reduxState.outfitter;
        return(
            <div>
                <p className="resource-intro" >
                    Here are some outfitters than can provide additional help with planning your next trip to the Boundary Waters.
                </p>

                {outfitter.map( (outfitter, i) => 
                    <Card key={i} className="resource-card" >
                        <div className="resource-card-div" >
                            <div className="resource-img" >
                                <img src={outfitter.image} alt={outfitter.name} />
                            </div>

                            <div className="resource-info" >
                                <h3>{outfitter.name}</h3>

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