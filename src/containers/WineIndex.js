import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingWines, clearSearch } from '../redux/actions'
import WineCard from '../components/WineCard'
import WineSearchBar from '../components/WineSearchBar'

class WineIndex extends Component {
  constructor(){
    super()
      this.state = {
        searching: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchingWines(`/${this.props.searchText}?page=1`)
    this.setState({ searching: true })
  }

  handleClear = () => {
    this.setState({ searching: false })
    this.props.fetchingWines('?page=1')
    this.props.clearSearch()
  }

  handleNextClick = () => {
    let pageNum = this.props.currentPage.links.next.split("=")[1] - 1
    if (this.state.searching) {
      this.props.fetchingWines(`/${this.props.searchText}?page=${pageNum + 1}`)
    } else {
      this.props.fetchingWines(`?page=${pageNum + 1}`)
    }
  }

  handlePreviousClick = () => {
    let pageNum = this.props.currentPage.links.next.split("=")[1] - 1
    if (this.state.searching) {
      this.props.fetchingWines(`/${this.props.searchText}?page=${pageNum - 1}`)
    } else {
      this.props.fetchingWines(`?page=${pageNum - 1}`)
  }
}

  render(){
    return (
      <div className="wine-index">
        <div className="header">
          <div className="heading">Welcome to the Wine Cellar</div>
          <WineSearchBar onSubmit={this.handleSubmit} onClear={this.handleClear}/>
        </div>
        <div className="WineIndex">
          {this.props.wines ? this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} /> ) : null}
        </div>

        {(this.props.wines.length >= 20) ? (
          <React.Fragment>
          <div className="buttons">
            <button onClick={() => this.handlePreviousClick()}>Previous Page</button>
            <button onClick={() => this.handleNextClick()}>Next Page</button>
          </div>
          </React.Fragment>
        ) : (null) }
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines,
    currentPage: state.page.pagination,
    searchText: state.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingWines: (num) => {dispatch(fetchingWines(num))},
    clearSearch: () => {dispatch(clearSearch())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineIndex);
//
