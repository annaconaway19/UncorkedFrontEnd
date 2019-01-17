import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingWines } from '../redux/actions'
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
    console.log('works')
    this.props.fetchingWines(`/${this.props.searchText}?page=1`)
    this.setState({ searching: !this.state.searching })
  }

  handleNextClick = () => {
    console.log(this.props.currentPage.links)
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
      <div>
        <div className="header">
          <div className="heading">Welcome to the Wine Cellar</div>
          <WineSearchBar onSubmit={this.handleSubmit}/>
        </div>
        <div className="WineIndex">
          {this.props.wines ? this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} /> ) : null}
        </div>

        <div className="buttons">
          <button onClick={() => this.handlePreviousClick()}>Previous Page</button>
          <button onClick={() => this.handleNextClick()}>Next Page</button>
        </div>
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
    fetchingWines: (num) => {dispatch(fetchingWines(num))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineIndex);
//
