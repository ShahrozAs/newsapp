import React, { Component } from 'react'
import NewItems from './NewItems'

export class News extends Component {
  
constructor(){
  super();
 this.state={
  articles:[]
 }
}
async componentDidMount() {
  const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8c5e5ec518bc4fe29c8f9469a9bd9d1c");
  const data = await response.json();
  this.setState({ articles: data.articles });
}

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row my-3" >
          {this.state.articles.map((element)=>{

           return <div className="col-md-4" key={element.url}>
            <NewItems title={element.title} description={element.description} newsImage={element.urlToImage} url={element.url}/>
            </div>
          })}
        
        </div>

      </div>
    )
  }
}

export default News