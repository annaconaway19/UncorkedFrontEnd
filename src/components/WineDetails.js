import React from 'react'
import { connect } from 'react-redux'

const WineDetails = (props) => {
  console.log(props.wine);
  return (
    <div>
      {props.wine ? props.wine.name : "loading"}
      <img alt="wine" src="https://cdn.pixabay.com/photo/2016/10/22/21/44/white-wine-1761771_960_720.jpg" />

    </div>

  )
}

// const mapStateToProps = (state, ownProps) => {
//   console.log(ownProps)
//   return {
//     wine: state.wines.find(w => w.id === parseInt(ownProps.match.params.id))
//   }
// }

export default connect()(WineDetails);
