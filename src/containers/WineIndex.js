import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingWines } from '../redux/actions'
import WineCard from '../components/WineCard'
import SearchBar from '../components/SearchBar'

class WineIndex extends Component {

  handleNextClick = () => {
    let pageNum = this.props.currentPage.links.next.split("=")[1] - 1
    console.log(pageNum)
    this.props.fetchingWines(pageNum)
  }

  render(){
    return (
      <div>
        <div className="header">
          <div className="heading">Welcome to the Wine Cellar</div>
          <SearchBar />
        </div>
        <div className="WineIndex">
          {this.props.wines ? this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} /> ) : null}
        </div>

        <div className="buttons">
          <button>Previous Page</button>
          <button onClick={() => this.handleNextClick()}>Next Page</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines.filter(
      w => w.name.toLowerCase().includes(state.searchText.toLowerCase())
    ),
    currentPage: state.page.pagination
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingWines: (num) => {dispatch(fetchingWines(num + 1))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineIndex);
//
