import React from 'react'
import { connect } from 'react-redux'
import { changeSearchText } from '../redux/actions'

const SearchBar = (props) => {
  return (
    <div >
      <input className="searchbar"
            type="text"
            placeholder='Search'
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    value: state.searchText
  }
}

export default connect(mapStateToProps, {onChange: changeSearchText})(SearchBar);
