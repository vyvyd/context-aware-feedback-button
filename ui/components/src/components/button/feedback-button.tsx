import {Component, h, State, Listen} from '@stencil/core';
import {ModalEvents} from "../feedback-modal/modal-events";

@Component({
  tag: 'feedback-button',
  styleUrl: 'feedback-button.css',
  shadow: true,
})
export class CustomFeedbackComponent {

  constructor() {
    this.isModalOpen = false
  }

  @State() isModalOpen: boolean;

  private openModal() {
    this.isModalOpen = true
  }


  @Listen('modalEvents', { target: 'document' })
  handleModalEvents(event: CustomEvent<ModalEvents>) {
    console.log(event)
    if(event.detail ===ModalEvents.CLOSED) {
      this.isModalOpen=false
    }
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.openModal()}>Feed us back!</button>
        <feedback-modal
          targetEmail={"vineeth.ink@gmail.com"}
          visible={this.isModalOpen}
        />
      </div>
    )
  }
}
