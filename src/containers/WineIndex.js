import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingWines } from '../redux/actions'
import WineCard from '../components/WineCard'
import WineSearchBar from '../components/WineSearchBar'

class WineIndex extends Component {

  handleNextClick = () => {
    let pageNum = this.props.currentPage.links.next.split("=")[1] - 1
    console.log(pageNum)
    this.props.fetchingWines(`?page=${pageNum + 1}`)
  }

  handlePreviousClick = () => {
    let pageNum = this.props.currentPage.links.next.split("=")[1] - 1
    console.log(this.props.currentPage.links)
    this.props.fetchingWines(`?page=${pageNum - 1}`)
  }

  render(){
    return (
      <div>
        <div className="header">
          <div className="heading">Welcome to the Wine Cellar</div>
          <WineSearchBar />
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
    searchedWines: state.searchedWines
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingWines: (num) => {dispatch(fetchingWines(num))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineIndex);
//
