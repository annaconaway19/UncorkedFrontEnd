import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchingTastingNotes } from '../redux/actions'

class WineDetails extends Component {

  componentDidMount(){
    this.props.fetchingTastingNotes()
  }

  randomNote = () => {
    let notes = []
    this.props.tastingNotes.forEach(note => {
      notes.push(note.name)
    })
    return notes[Math.floor(Math.random() * notes.length)]
  }

  render() {
    return (
        <div className="WineDetails">
        {this.props.wine ? (
          <React.Fragment>
              <div className="header">Swirl. Sip. Savor.</div>
              <h3>Highlights of: {this.props.wine.name}</h3>
              <img className="wine-image" alt="wine" src="https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>

              <div className="wine-info">
                <h3>Varietal: {this.props.wine.varietal.name}</h3>
                <h3>Points: {this.props.wine.points}</h3>
                <h3>Price: {this.props.wine.price}</h3>
              </div>

              <div className="tasting-notes">
              Tasting Notes
                <ul>
                    <li>{this.randomNote()}</li>
                    <li>{this.randomNote()}</li>
                    <li>{this.randomNote()}</li>
                    <li>{this.randomNote()}</li>
                    <li>{this.randomNote()}</li>
                </ul>
              </div>  

          </React.Fragment>
        ) : ("loading...")}
        <div className="spacing"></div>
      </div>

    )
  }
  }

const mapDispatchToProps = dispatch => {
  return {
    fetchingTastingNotes: () => {dispatch(fetchingTastingNotes())}
  }
}

const mapStateToProps = state => {
  return {
    tastingNotes: state.tastingNotes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineDetails);
