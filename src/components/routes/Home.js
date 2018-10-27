import React, { Component } from 'react';
import Banner from '../views/Banner'
import StoryCard from '../views/StoryCard'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Banner></Banner>
                <div className="section">
                    <div className="container">
                        <div class="columns">
                            <div class="column"><StoryCard></StoryCard></div>
                            <div class="column"><StoryCard></StoryCard></div>
                            <div class="column"><StoryCard></StoryCard></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;