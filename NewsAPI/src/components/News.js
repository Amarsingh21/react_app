import React, { Component, parsedData } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=38f85f9fb3ca489fb74db5b401a6b1cd"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2> NewsMonkey - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                        <NewsItem title ={element.title?element.title.slice(0,45): ""} description={element.description?element.description.slice(0,200): ""} imageUrl= {element.urlToImage} newsUrl= {element.url}/>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}
export default News
{/* Your API key is: 38f85f9fb3ca489fb74db5b401a6b1cd */}
