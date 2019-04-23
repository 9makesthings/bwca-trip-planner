import React, {Component} from 'react';
import { connect } from 'react-redux';


// Material
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



class StepTwo extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_ROUTE_DATA'} );
    }

    render() {

        return(
            <div>

                <p>Step Two!</p>

                <Card>
                    <CardContent>

                    </CardContent>

                </Card>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepTwo);