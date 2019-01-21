import React from 'react'
import { connect } from 'react-redux'
import { changeSearchText, fetchingWines } from '../redux/actions'

class WineSearchBar extends React.Component {

  render(){
    return (
      <div >
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <input className="wine-search"
                type="text"
                placeholder='Search Your Favorite Bottle'
                value={this.props.searchText}
                onChange={e => this.props.onChange(e.target.value)}
                />
          <input className="submit-button" type="submit" value="Submit" />
          <button className="clear-button" onClick={() => this.props.onClear()}>Clear Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (searchText) => {dispatch(changeSearchText(searchText))},
    fetchingWines: (searchText) => {dispatch(fetchingWines(searchText))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineSearchBar);
