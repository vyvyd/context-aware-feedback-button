import { Component, h } from '@stencil/core';

@Component({
  tag: 'feedback-button',
  styleUrl: 'feedback-button.css',
  shadow: true,
})
export class CustomFeedbackComponent {

  render() {
    return <button>Tell me!</button>
  }
}
