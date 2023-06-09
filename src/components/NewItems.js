import React, { Component } from "react";

export class NewItems extends Component {
  render() {
    let {title , description,newsImage,url,author,date,source}=this.props;
    return (
      <div>
        <div className="card my-3">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'10',left:'90%'}}>
        {source}
   
  </span>
          <a rel="noreferrer" href={url} target="_blank"> <img src={!newsImage?"https://community.spotify.com/t5/image/serverpage/image-id/106208i2C0401950E6463A4/image-size/medium?v=v2&px=400":newsImage} className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItems;
