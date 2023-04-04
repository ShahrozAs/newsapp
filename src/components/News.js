import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'
//let {pagesize}=this.props;
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      TotalResult: 0

    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

  async updateCode() {
    this.setState({
      loading: true
    });
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c5e5ec518bc4fe29c8f9469a9bd9d1c&page=${this.state.page}&pageSize=${this.props.pagesize}`);
    const data = await response.json();
    this.setState({
      articles: data.articles,
      TotalResult: data.totalResult,
      loading: false
    });

  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c5e5ec518bc4fe29c8f9469a9bd9d1c&page=${this.state.page}&pageSize=${this.props.pagesize}`);
    const data = await response.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      TotalResult: data.totalResult,
      loading: false
    });

  }

  async componentDidMount() {
    this.updateCode();
  }
  handlePrevClick = async () => {
    console.log("prvious");
    this.setState({ page: this.state.page - 1 });
    this.updateCode();
  }
  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
    this.updateCode();
  }

  render() {
    return (
      <>

        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.TotalResult}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
        >
          <div className='container my-3'>
            <div className="row my-3" >
              {this.state.articles.map((element) => {

                return <div className="col-md-4" key={element.url}>
                  <NewItems title={element.title} description={element.description} newsImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>

        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-3" >
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.TotalResult / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}


      </>
    )
  }
}

export default News