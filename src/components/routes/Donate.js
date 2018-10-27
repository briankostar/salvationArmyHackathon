import React from 'react';
import Modal from '../views/Modal'

export default class Donate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    open = () => this.setState({ show: true });
    close = () => this.setState({ show: false });

    render() {
        return (
            <div className="profile">

                <div className="section">
                    <div className="container">
                        <div className="box">
                            <div className="content">
                                <p className="is-size-3">Donate with:</p>
                                <a class="button is-link is-fullwidth">Paypal</a>
                                <a class="button is-link is-fullwidth">Credit Card</a>
                                <a class="button is-link is-fullwidth" onClick={this.open}>Cryptocurrency</a>
                            </div>
                        </div>

                        <Modal show={this.state.show} onClose={this.close}>
                            <p class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                            </p>
                        </Modal>
                    </div>
                </div>
            </div>

        )
    }
};