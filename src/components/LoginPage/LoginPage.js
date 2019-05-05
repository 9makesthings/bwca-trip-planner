import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI
import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <h1>Login</h1>
          <div className="login-input" >
            <label htmlFor="username">
              Username:
              <TextField
                className={classes.textField}
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div className="login-input" >
            <label htmlFor="password">
              Password:
              <TextField
                className={classes.textField}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div className="login-button" >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              name="submit"
              value="Log In"
            >Log In </Button>
          </div>
          <center>
            <Button
              variant="outlined" 
              type="button"
              className={classes.button}
              onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
            >
              Register
            </Button>
          </center>
        </form>
        {/* <center>
          <Button
            variant="outlined" 
            type="button"
            className={classes.button}
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </Button>
        </center> */}
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    width: 200,
  },
});  

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
