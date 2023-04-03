import React, { Component } from "react";

export class NewItems extends Component {
  render() {
    let {title , description,newsImage,url}=this.props;
    return (
      <div>
        <div className="card my-3">
         
          <a rel="noreferrer" href={url} target="_blank"> <img src={newsImage} className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            
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
