import React from 'react'
import { connect } from 'react-redux'
import { loggingIn } from '../redux/actions'

class Login extends React.Component {
    state = {
      username: "",
      password: ""
    };

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
//
//   handleLoginSubmit = () => {
//     console.log('trying to log in')
//     fetch(`http://localhost:3001/api/v1/login`, {
//       method:"POST",
//       headers: {
//         "Content-type":"application/json",
//         "Accept":"application/json"
//       },
//       body: JSON.stringify({
//         username: this.state.username,
//         password: this.state.password
//       })
//     }).then(res => res.json())
//     .then(data => {
//       if(data.error){
//         alert('Incorrect username or password')
//       }else{
//         console.log(data)
//         this.props.setCurrentReader(data.reader_info)
//         localStorage.setItem('token', data.token)
//       }
//     })
//   };
    handleLogin = () => {
      console.log('works')
      let username = this.state.username
      let password = this.state.password
      this.props.loggingIn(username, password)
    }

    render(){
      return (
        <div className='login-page'>
          <div className="ui middle aligned center aligned grid">
              <div className="column">
                <h2 className="heading">
                    Log-in to your account
                </h2>

                <form className="ui large form" onSubmit={this.handleLogin}>
                  <div className="ui  secondary  segment">
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={(e) => this.handleChange(e)}/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                      </div>
                    </div>
                    <button className="ui fluid large submit button" value='submit' type="submit">Login</button>
                  </div>
                  <div className="ui error message"></div>
                </form>

                <div className="ui button">
                  New to us? Click to Register.
                </div>
              </div>
            </div>
            <div className="spacing"></div>
          </div>
      )
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      loggingIn: (username, password) => {dispatch(loggingIn(username, password))}
    }
  }
  export default connect(mapDispatchToProps)(Login);
