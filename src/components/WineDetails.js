import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchingTastingNotes } from '../redux/actions'

class WineDetails extends Component {

  componentDidMount(){
    this.props.fetchingTastingNotes()
  }

  randomNote = () => {
      let noteObj = this.props.tastingNotes[Math.floor(Math.random() * this.props.tastingNotes.length)]
      console.log(noteObj)
  }

  render() {
    return (
      <div>
      {this.props.wine ? (
        <React.Fragment>
            <h2>More About:</h2>
            <h3>{this.props.wine.name}</h3>
            <img alt="wine" src="https://cdn.pixabay.com/photo/2016/10/22/21/44/white-wine-1761771_960_720.jpg"/>
            <h4>Varietal: {this.props.wine.varietal.name}</h4>

            <h3>Tasting Notes</h3>
            <ul>
                <li>{this.randomNote()}</li>
                <li>{this.randomNote()}</li>
                <li>{this.randomNote()}</li>
                <li>{this.randomNote()}</li>
                <li>{this.randomNote()}</li>
            </ul>
        </React.Fragment>
      ) : ("loading...")}
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
