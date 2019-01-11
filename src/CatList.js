import React from 'react'

export default class CatList extends React.Component {
  render() {
    let cats = this.props.catPics.map(pic => <img alt="" src={`${pic.url}`}/>)
    return(
      <div>
      {cats}
      </div>
      )
  }
}
