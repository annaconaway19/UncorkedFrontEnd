import React from 'react'
import { connect } from 'react-redux'
import TastedList from '../components/TastedList'
import Wishlist from '../components/Wishlist'
import { fetchingUserWines } from '../redux/actions'


class UserProfile extends React.Component {

  componentDidMount(){
    console.log(this.props)
    this.props.fetchingUserWines(this.props.currentUser.id)
    }

  render(){
    return(
      <div>
        <h2>Welcome to Uncorked, {this.props.currentUser.username}!</h2>
        <Wishlist />
        <TastedList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    wishlist: state.wishlist,
    tastedList: state.tastedList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingUserWines: (userId) => {dispatch(fetchingUserWines(userId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
