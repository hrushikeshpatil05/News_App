import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, url, desc, newsUrl, publishedAt} = this.props;
    return (
        <div className="my-3">
        <div className="card" style={{width:'300px', height:'500px', marginLeft:'10px'}}>
            <img style={{ width: 300, height: 260 }} src={url?url:"https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top"/>
            <div className="card-body">
                <h5>{title}...</h5>
                <p className="card-text">{desc}...</p>
                <p className="card-text" style={{color:'red'}}>{publishedAt}</p>
                <a className="btn btn-primary" href={newsUrl} role="button">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
