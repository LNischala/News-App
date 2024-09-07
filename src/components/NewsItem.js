import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imgsrc,newsUrl,author,date} = this.props;
        return (
            <div>
                <div className="card" style={{width: "25rem"}}>
                    <img src={imgsrc} className="card-img-top" alt="..." style={{height:'180px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>By {author}</p>
                        <p>On {date}</p>
                        <a href={newsUrl} className="btn btn-sm btn-secondary">Read more..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
