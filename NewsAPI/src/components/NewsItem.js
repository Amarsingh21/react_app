import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div  className="card" style={{width: "18rem;"}}>
                    <img src={!imageUrl?"https://blogger.googleusercontent.com/img/a/AVvXsEiw51YCkJq7M5Pam8Jv4qT9MycaaeYJh5A9p3nh_CWGMuNf4vs6_Jc6TWk4IPMfFtSpRm4wndKEkQIKx7XF9MqySwMHgpIXy2CCu-xy8Q_yTARP9pZn-mCduAfP7XE0xg8bxuG805PXDSQVm14z5Fv31cAz1HVvN2CTa_QI2-TWim5qqIIACzC6adYq=s16000" : imageUrl}  className="card-img-top" alt="..." width="200" height="180"/>
                    <div  className="card-body">
                    <h5  className="card-title">{title}...</h5>
                    <p  className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
