import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signingUp } from '../redux/actions'

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSignUp = () => {
    let user = this.state
    console.log(user)
    if (this.state.password === this.state.passwordConfirmation) {
      this.props.signingUp(user)
    } else {
      alert("Passwords must match!")
    }
  }

render() {
 return (
   <div className='login-page'>
     <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
       <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2' textAlign='center'>
         Sign Up For Uncorked
         </Header>
         <h3 className="subheader">Explore, track, and save your favorite wines</h3>
         <Form size='large'>
           <Segment stacked>
             <Form.Input
               name='username'
               fluid icon='user'
               iconPosition='left'
               placeholder='Username'
               onChange={this.handleChange}
               value={this.state.username}
             />
             <Form.Input
               fluid
               name='password'
               icon='lock'
               iconPosition='left'
               placeholder='Password'
               type='password'
               onChange={this.handleChange}
               value={this.state.password}
             />
             <Form.Input
               fluid
               name='passwordConfirmation'
               icon='lock'
               iconPosition='left'
               placeholder='Confirm Password'
               type='password'
               onChange={this.handleChange}
               value={this.state.passwordConfirmation}
             />
             {this.props.errors ? <div>{this.props.errors}</div> : null}
             <Button fluid size='large' onClick={this.handleSignUp}>
               Sign Up
             </Button>
           </Segment>
         </Form>

       </Grid.Column>
     </Grid>
     <div className='spacing'></div>
   </div>
 )
}}

const mapDispatchToProps = dispatch => {
  return {
    signingUp: (user) => {dispatch(signingUp(user))}
  }
}


export default connect(null, mapDispatchToProps)(Signup);
