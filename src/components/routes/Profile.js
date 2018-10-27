import React from 'react';
import Modal from '../views/Modal'
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    render() {
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
                                            <p className="has-text-weight-bold is-size-1">Title/Name</p>
                                        </div>
                                        <div className="columns">
                                            <div className="column">
                                                <Link to="/donate" class="button is-link is-fullwidth">Donate</Link>
                                            </div>
                                            <div className="column"><a class="button is-link is-fullwidth">Share On Facebook</a></div>
                                            <div className="column"><a class="button is-link is-fullwidth">Share On Twitter</a></div>
                                        </div>

                                        <p className="is-size-2">Story</p>
                                        <div className="level">
                                            <p>These last couple of weeks have been the worst nightmare a child could ever have. I am generally not one to ask for help, but I cannot ever imagine needing it more than I do right now. I've asked for my friends prayers and positive words, and I'm so grateful for them. My immediate family (my mom and brother) is small, but my friends have always been my family, and right now, I need them more than ever.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                <div className="box">
                                    <div className="content">
                                        <p className="">This Campaign is Trending!</p>
                                    </div>
                                </div>
                                <div class="box">
                                    <div className="content">

                                        <p><span className="has-text-weight-bold">$38,200</span> raised of $25,000</p>
                                        <progress class="progress is-success is-smaller" value="60" max="100">60%</progress>

                                        <p className="has-text-weight-light">Raised by 341 people in 4days</p>

                                        <Link to="/donate" class="button is-link is-fullwidth">Donate</Link>
                                        <a class="button is-link is-fullwidth">Share On Facebook</a>
                                        <a class="button is-link is-fullwidth">Share On Twitter</a>
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