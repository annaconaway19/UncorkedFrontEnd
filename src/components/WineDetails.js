import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchingTastingNotes, fetchingSingleWine, addingToWishlist, addingToTastedlist } from '../redux/actions'

class WineDetails extends Component {

  componentDidMount(){
    this.props.fetchingTastingNotes()
    this.props.fetchingSingleWine(this.props.match.params.id)
  }

  randomNote = () => {
    let notes = []
    this.props.tastingNotes.forEach(note => {
      notes.push(note.name)
    })
    return notes[Math.floor(Math.random() * notes.length)]
  }

  addToWishlist = () => {
    let userId = this.props.currentUser.id
    let wineId = this.props.wine.id
    let wishlistArr = this.props.wishlist.map(data => data.wine_id)
    if (!wishlistArr.includes(wineId)) {
      this.props.addingToWishlist(userId, wineId);
    } else {
    alert("You've already added this wine to your Wishlist!")
  }
}

  addToTastedList = () => {
    let userId = this.props.currentUser.id
    let wineId = this.props.wine.id
    let tastedArr = this.props.tastedList.map(data => data.wine_id)
    if (!tastedArr.includes(wineId)) {
      this.props.addingToTastedlist(userId, wineId)
    } else {
      alert("You must really love this one! Already on your list.")
    }
  }

  render() {
    return (
        <div className="WineDetails">
        {this.props.wine  ? (
          <React.Fragment>
              <div className="header">Swirl. Sip. Savor.</div>
              <h2 className="headline">Highlights of {this.props.wine.name}</h2>

              <div className="top-wine-div">
                <img className="wine-image" alt="wine" src="https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <div className="tasting-notes">
                  <h2>Tasting Notes</h2>
                  <ul>
                      <li>{this.randomNote()}</li>
                      <li>{this.randomNote()}</li>
                      <li>{this.randomNote()}</li>
                      <li>{this.randomNote()}</li>
                      <li>{this.randomNote()}</li>
                  </ul>
                </div>
              </div>

              <div className="wine-info">
                <h2>Varietal: {this.props.wine.varietal.name}</h2>
                <h2>Points: {this.props.wine.points}</h2>
                <h2>Price: {this.props.wine.price}</h2>
              </div>

          </React.Fragment>
        ) : ("loading...")}
        {this.props.currentUser ? (
          <React.Fragment>
            <div className="buttons">
              <button onClick={this.addToWishlist}>Add To Wine Wishlist</button>
              <button onClick={this.addToTastedList}>Been There, Drank That</button>
            </div>
          </React.Fragment>
        ) : null }
        <div className="spacing"></div>
      </div>

    )
  }
  }

const mapDispatchToProps = dispatch => {
  return {
    fetchingTastingNotes: () => {dispatch(fetchingTastingNotes())},
    fetchingSingleWine: (wineId) => {dispatch(fetchingSingleWine(wineId))},
    addingToWishlist: (userId, wineId) => {dispatch(addingToWishlist(userId, wineId))},
    addingToTastedlist: (userId, wineId) => {dispatch(addingToTastedlist(userId, wineId))}
  }
}

const mapStateToProps = state => {
  return {
    tastingNotes: state.tastingNotes,
    wine: state.singleWine,
    currentUser: state.currentUser,
    wishlist: state.wishlist,
    tastedList: state.tastedList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineDetails);
