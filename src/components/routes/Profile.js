import React from 'react';
import Modal from '../views/Modal'
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    render() {
        let profile = [
            {
                id: 1,
                title: "Story of an Immigrant",
                image: "/imgs/pic1.jpg",
                shortStory: "Navjot was a student of Columbia College who recently came from I…",
                story: "Markus Antony Hogg is a sweet, caring, handsome, bright and athletic 15 year old, grade 10 student at Mount Carmel. He is beyond athletic, excelling in Football, Volleyball, Shot Put, Javelin and many other sports. Markus came 9th in OFSAA for Javelin and his coaches had just asked to him to be the starting QB on the football team at school. A few weeks ago Markus’ life changed forever. He was taken to hospital after weeks of pain in his leg and lower back. Expecting a sport injury diagnosis, he and all of us were shocked to learn he had a tumour on his spine. A biopsy was taken and after two weeks of increasingly excruciating pain, on Friday October 12th came the devestating and feared diagnosis. Markus has been diagnosed with Chondroblastic Osteosarcoma which is a cancer of the bone cells. Doctors jumped into action and Markus began Chemotherapy the following day. The support from family and friends over this time has been tremendous. The total treatment plan right now is expected to be 29 weeks and he will undergo surgery likely around week 11 (after the second round of chemo). After surgery he will have 4 or 5 more rounds of the chemotherapy. Markus will stay in the hospital for at least a few more weeks (and potentially longer) until his pain levels are manageable - the tumor is affecting the nerves in the spinal chord and causing extreme nerve pain and numbness in his leg as well as affecting his mobility.",
                lastDonation: "Last donation 7h ago",
                goalCurrent: "28,175",
                goalMax: "25,000",
                goalPercent: 100
            }
        ]

        return (
            <div className="profile">

                <div className="section">
                    <div className="container">
                        <div class="columns">
                            <div class="column is-three-quarters">
                                <div class="box">
                                    <figure class="image">
                                        <img src="/imgs/pic.jpg" />
                                    </figure>
                                    <div className="content">
                                        <div className="level">
                                            <p className="has-text-weight-bold is-size-1">{profile[0].title}</p>
                                        </div>
                                        <div className="columns">
                                            <div className="column">
                                                <Link to="/donate" class="button is-link is-fullwidth salvation-red">Donate</Link>
                                            </div>
                                            <div className="column"><a class="button is-link is-fullwidth">Share On Facebook</a></div>
                                            <div className="column"><a class="button is-primary is-fullwidth">Share On Twitter</a></div>
                                        </div>

                                        <nav class="level">
                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <p class="heading">Tweets</p>
                                                    <p class="title">3,456</p>
                                                </div>
                                            </div>
                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <p class="heading">Following</p>
                                                    <p class="title">123</p>
                                                </div>
                                            </div>
                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <p class="heading">Followers</p>
                                                    <p class="title">456K</p>
                                                </div>
                                            </div>
                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <p class="heading">Likes</p>
                                                    <p class="title">789</p>
                                                </div>
                                            </div>
                                        </nav>

                                        <p className="is-size-2 no-margin">Navit's Story</p>
                                        {/* <div className="level"> */}
                                        <p>{profile[0].story}</p>
                                        <p className="">We are so lucky to know this beautiful family that gives everyone so much of themselves. This is why we feel like it is time to give back and support them in the tough months ahead. We are looking to help his parents with lost wages, daily parking costs, take out meals and any other expenses that may come up. Do not feel that any amount is too small and any donations would be greatly appreciated.</p>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                {/* <div className="box"> */}
                                <div className="tile notification is-primary">
                                    <p className="">This Campaign is Trending!</p>
                                </div>
                                {/* </div> */}
                                <div class="box">
                                    <div className="content">

                                        <p><span className="has-text-weight-bold">${profile[0].goalCurrent}</span> raised of ${profile[0].goalMax}</p>
                                        <progress class="progress is-success is-smaller" value={profile[0].goalPercent} max="100">{profile[0].goalPercent}</progress>

                                        <p className="has-text-weight-light">Raised by 341 people in 4days</p>

                                        <Link to="/donate" class="button is-link is-fullwidth salvation-red">Donate</Link>
                                        <a class="button is-link is-fullwidth">Share On Facebook</a>
                                        <a class="button is-primary is-fullwidth">Share On Twitter</a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};