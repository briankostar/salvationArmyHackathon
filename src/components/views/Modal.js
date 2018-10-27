import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class={`modal ${this.props.show ? 'is-active' : null}`}>
                <div class="modal-background"></div>
                <div class="modal-content">
                    {this.props.children}
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={this.props.onClose}></button>
            </div>
        )
    }
}

export default Modal;