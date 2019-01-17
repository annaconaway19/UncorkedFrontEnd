import React from 'react'
import { connect } from 'react-redux'
import { changeSearchText, fetchingWines } from '../redux/actions'

class WineSearchBar extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchingWines(`/${this.props.value}?page=1`)
  }

  render(){
    return (
      <div >
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input className="wine-search"
                type="text"
                placeholder='Search'
                value={this.props.value}
                onChange={e => this.props.onChange(e.target.value)}
                />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (searchText) => {dispatch(changeSearchText(searchText))},
    fetchingWines: (searchText) => {dispatch(fetchingWines(searchText))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineSearchBar);
