import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StoryCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <Link to={`/profile/1`} >
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </Link>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <Link to={`/profile/1`} ><p className="has-text-weight-bold">Title/Name</p></Link>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
                            {/* <br /> */}
                            {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                            <p className="has-text-weight-light">Last donation 7h ago</p>
                            <progress class="progress is-success is-smaller" value="60" max="100">60%</progress>
                            <p><span className="has-text-weight-bold">$38,200</span> raised of $25,000</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryCard;