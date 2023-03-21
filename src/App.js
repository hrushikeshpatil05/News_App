import './App.css';
import React, { Component } from 'react'
import NavBar from './NavBar';
import NewsComponent from './NewsComponent';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  
  pageSize=9;
  apiKey=process.env.REACT_APP_API_KEY
 
  state={
  progress:0
  }
  
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
      <Router>
      <div>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={4}
      />
      </div>
          <Routes>
                 <Route exact path='/general' element={ <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' catagory="general"/>}></Route>
                 <Route exact path='/business' element={ <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country='in' catagory="business"/>}></Route>
                 <Route exact path='/entertainment' element={ <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' catagory="entertainment"/>}></Route>
                 <Route exact path='/health' element={ <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country='in' catagory="health"/>}></Route>
                 <Route exact path='/science' element={ <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country='in' catagory="science"/>}></Route>
                 <Route exact path='/sports' element={ <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country='in' catagory="sports"/>}></Route>
                 <Route exact path='/technology' element={ <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country='in' catagory="technology"/>}></Route>
          </Routes>
      </Router>
      </> 
    )
  }
}

