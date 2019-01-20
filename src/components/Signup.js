import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Signup extends React.Component {

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
             />
             <Form.Input
               fluid
               name='password'
               icon='lock'
               iconPosition='left'
               placeholder='Password'
               type='password'
             />
             <Form.Input
               fluid
               name='password'
               icon='lock'
               iconPosition='left'
               placeholder='Confirm Password'
               type='password'
             />
             <Button  fluid size='large'>
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

export default Signup;
