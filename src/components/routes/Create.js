import React from 'react';

export default class Create extends React.Component {

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div class="box">

                        <figure class="image">
                            <img src="/imgs/addphoto.png" />
                        </figure>
                        <br />

                        <div className="content">
                            <div class="field">
                                <label class="label">Campaign Title</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Campaign Title" />
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Goal Amount</label>
                                <div class="control">
                                    <input class="input" type="number" placeholder="$ amount" />
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Story</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Textarea"></textarea>
                                </div>
                            </div>

                            <div class="field is-grouped is-grouped-right">
                                <p class="control">
                                    <a class="button is-primary">
                                        Submit
    </a>
                                </p>
                                <p class="control">
                                    <a class="button is-light">
                                        Cancel
    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};