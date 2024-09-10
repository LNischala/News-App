import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static deafaultProps = {
    category : 'general',
  }
  static propTypes = {
    category : PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 25,
      totalResults:0,
      // category : this.props.category
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f727df9d389241f1be56f54772fe620c&pageSize=${this.state.pageSize}`
    this.setState({
      loading : true
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      articles: parseData.articles,
      totalResults : parseData.totalResults,
      loading : false
    });
  }

  render() {

    let goForward = async () => {
      if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) { }
      else {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f727df9d389241f1be56f54772fe620c&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
        this.setState({
          loading : true
        });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
          articles: parseData.articles,
          page: this.state.page + 1,
          loading : false
        });
      }

    }

    let goBack = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f727df9d389241f1be56f54772fe620c&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
      this.setState({
        loading : true
      });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page - 1,
        loading : false
      });
    }

    return (
      <>
      {/* <Slider/> */}
      <div className='container my-3'>
        <h2 className='my-3 text-center'>News headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((e) => {
            return <div className="col-4 my-3" key={e.url}>
              <NewsItem title={e.title} description={e.description} imgsrc={!e.urlToImage?"https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":e.urlToImage} newsUrl={e.url} author={e.author?"Unknown":e.author} date={e.publishedAt}/>
            </div>
          })}
          {/* STATIC RENDERING
            <div className="col">
                <NewsItem title="cricket" description="its a sport" imgsrc="https://thumbs.dreamstime.com/b/test-cricket-match-international-england-india-edgbaston-birmingham-england-uk-64683030.jpg"/>
            </div>
            <div className="col">
                <NewsItem title="census" description="population survey" imgsrc="https://www.shutterstock.com/image-vector/electronic-population-census-list-form-260nw-1581308971.jpg"/>
            </div>
            <div className="col">
                <NewsItem title="floods" description="natural calamity" imgsrc="https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/25/full/1706206527-8399.jpg?im=FeatureCrop,size=(826,465)"/>
            </div> */}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page - 1 < 1} className='btn btn-secondary' onClick={goBack}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} className='btn btn-secondary' onClick={goForward}>Next&rarr;</button>
        </div>
      </div>
      </>
    )
  }
}

export default News