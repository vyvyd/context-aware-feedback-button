class FeedbackButton extends HTMLElement {
    connectedCallback () {
        this.innerHTML = '<button name="feedback-button" type="button">Feedback</button>'
    }
}

customElements.define( 'feedback-button', FeedbackButton)