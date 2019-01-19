import React from 'react'
import { connect } from 'react-redux'
import { loggingIn } from '../redux/actions'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

import { withRouter, Link } from 'react-router-dom'

class Login extends React.Component {
    state = {
      username: "",
      password: ""
    };

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
//
    handleLogin = () => {
      let user = this.state
      console.log(user)
      this.props.loggingIn(user)
    }

    render() {
   return (
     <div className='login-page'>
       <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
         <Grid.Column style={{ maxWidth: 450 }}>
           <Header as='h2' textAlign='center'>
              Log-in to your account
           </Header>
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

               <Button onClick={this.handleLogin} fluid size='large'>
                 Login
               </Button>
             </Segment>
           </Form>
           <Message>
             New to us? <Link to='/signup'>Sign Up</Link>
           </Message>
         </Grid.Column>
       </Grid>
     </div>
   )
 }}


  const mapDispatchToProps = dispatch => {
    return {
      loggingIn: (user) => {dispatch(loggingIn(user))}
    }
  }

  export default connect(null, mapDispatchToProps)(Login);
