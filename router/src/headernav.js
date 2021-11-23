import React, { Component } from 'react'
import './CSS/headernav.css'
export class headernav extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigationMaindDiv">
                    <div className="navigationItmsDiv">
                    <div className="navMenu tablinks" onclick="openCity(event, 'London')">
                        <div id="London" class="tabcontent">
                            <h3>London</h3>
                            <p>London is the capital city of England.</p>
                        </div>
                    </div>
                        <p>Home</p>
                        <p>Home</p>
                        <p>Home</p>
                        <p>Home</p>
                        <p>Home</p>
                        <p>Home</p>
                        <p>Home</p>
                        <p>Home</p>
                        <p>Home</p>
                    </div>
                    <div className="navigationItmsLeftDiv">
                        <p>About</p>
                        <p>About</p>
                        <p>About</p>
                        <p>About</p>
                        <p>About</p>
                        <p>About</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default headernav
