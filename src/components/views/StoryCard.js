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
                            <Link to={`/profile/${this.props.profile.id}`} >
                                <img src={this.props.profile.image} alt="Placeholder image" />
                            </Link>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <Link to={`/profile/1`} ><p className="has-text-weight-bold">{this.props.profile.title}</p></Link>
                            {this.props.profile.shortStory}
                            <p className="has-text-weight-light">{this.props.profile.lastDonation}</p>
                            <progress class="progress is-success is-smaller" value={this.props.profile.goalPercent} max="100">{this.props.profile.goalPercent}%</progress>
                            <p><span className="has-text-weight-bold">${this.props.profile.goalCurrent}</span> raised of ${this.props.profile.goalMax}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryCard;