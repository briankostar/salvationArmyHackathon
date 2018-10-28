import React, { Component } from 'react';
import Banner from '../views/Banner'
import StoryCard from '../views/StoryCard'

class Home extends Component {
    constructor(props) {
        super(props)
        this.profiles = [
            {
                id: 1,
                title: "Story of an Immigrant",
                image: "/imgs/pic1.jpg",
                shortStory: "Navjot was a student of Columbia College who recently came from I…",
                story: "story story",
                lastDonation: "Last donation 7h ago",
                goalCurrent: "28,175",
                goalMax: "25,000",
                goalPercent: 100
            },
            {
                id: 2,
                title: "Helping those in need",
                image: "/imgs/pic2.jpg",
                shortStory: "This is a nightmare that hits home for so many. Jenn Dixon was tragically …",
                story: "story story",
                lastDonation: "Last donation 18h ago",
                goalCurrent: "4,000",
                goalMax: "5,000",
                goalPercent: 80
            },
            {
                id: 3,
                title: "Educating others",
                image: "/imgs/pic3.jpg",
                shortStory: "These last couple of weeks have been the worst nightmare a child could …",
                story: "story story",
                lastDonation: "Last donation 1d ago",
                goalCurrent: "8,210",
                goalMax: "12,000",
                goalPercent: 69
            }
        ]
    }
    render() {
        return (
            <div>
                <Banner></Banner>
                <div className="section">
                    <div className="container">
                        <div class="columns">
                            <div class="column"><StoryCard profile={this.profiles[0]}></StoryCard></div>
                            <div class="column"><StoryCard profile={this.profiles[1]}></StoryCard></div>
                            <div class="column"><StoryCard profile={this.profiles[2]}></StoryCard></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;