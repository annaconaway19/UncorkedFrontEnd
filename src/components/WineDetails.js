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
      <div>
        <div className="WineDetails">
        {this.props.wine ? (
          <React.Fragment>
              <div className="header">Swirl. Sip. Savor.</div>
              <h3>Highlights of: {this.props.wine.name}</h3>
              <img className="wine-image" alt="wine" src="https://cdn.pixabay.com/photo/2016/10/22/21/44/white-wine-1761771_960_720.jpg"/>
              <h3>Varietal: {this.props.wine.varietal.name}</h3>
              <h3>Tasting Notes</h3>
              <ul>
                  <li>{this.randomNote()}</li>
                  <li>{this.randomNote()}</li>
                  <li>{this.randomNote()}</li>
                  <li>{this.randomNote()}</li>
                  <li>{this.randomNote()}</li>
              </ul>
              <h3>Points: {this.props.wine.points}</h3>
              <h3>Price: {this.props.wine.price}</h3>
          </React.Fragment>
        ) : ("loading...")}
        <div className="spacing"></div>
        </div>

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
