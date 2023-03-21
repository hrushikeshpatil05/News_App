import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class NewsComponent extends Component {
 
static defaultProps = {
    country : 'in',
    pageSize: 6,
    catagory: 'general'
}
static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    catagory : PropTypes.string,
}

constructor(props){
    super(props);
    this.state = {
        articles:[],
        loading: false,
        page:1
    }
    document.title = "NewsMonkey-"+`${(this.props.catagory)}`;
}

async updateNews(){
    this.props.setProgress(10)
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({loading:true})
    this.setState({
      articles:parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100)
  }

async componentDidMount(){
  this.props.setProgress(10)
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data=await fetch(url);
  this.props.setProgress(30)
  let parsedData = await data.json();
  this.props.setProgress(50)
  this.setState({loading:true})
  this.setState({
    articles:parsedData.articles, 
    totalResults:parsedData.totalResults,
    loading:false
  })
  this.props.setProgress(100)
}

handlePrevClick= async ()=>{
    this.setState({page:this.state.page-1})
    console.group(this.state.page);
    this.updateNews();
}
handleNextClick= async ()=>{
    this.setState({page:this.state.page+1})
    console.group(this.state.page);
    this.updateNews();
}
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Today's Top News on  {this.props.catagory}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,55):""} publishedAt={element.publishedAt} desc={element.description?element.description.slice(0,80):""} url={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Prev</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
        
      </div>
    )
  }
}
