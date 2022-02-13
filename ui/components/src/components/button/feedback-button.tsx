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

  @State() targetEmail: string = null;

  private openModal() {
    this.isModalOpen = true
  }

  @Listen('updateEmail', { target: 'document' })
  handleUpdateEmail(event: CustomEvent<UpdateEmailEvent>) {
    this.targetEmail = event.detail.email;
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
        <button
          onClick={ () => this.openModal() }
          class= { this.targetEmail === null ? "invisible" : ""}
        >
          Feed us back!

        </button>
        <feedback-modal
          targetEmail={this.targetEmail}
          visible={this.isModalOpen}
        />
      </div>
    )
  }
}
