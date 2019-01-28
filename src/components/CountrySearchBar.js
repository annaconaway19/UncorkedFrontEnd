import React from 'react'
import { connect } from 'react-redux'
import { changeSearchText, clearSearch } from '../redux/actions'

class CountrySearchBar extends React.Component {
  componentDidMount(){
    this.props.clearSearch()
  }

  render(){
    return (
      <div >
        <input className="searchbar"
              type="text"
              placeholder='Search The Wine World'
              value={this.props.value}
              onChange={e => this.props.onChange(e.target.value)}
              />
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
    clearSearch: () => {dispatch(clearSearch())},
    onChange: () => {dispatch(changeSearchText())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearchBar);
