import {Component, Event, EventEmitter, h, JSX, Prop} from '@stencil/core';
import {ModalEvents} from "./modal-events";

@Component({
  tag: 'feedback-modal',
  styleUrl: 'feedback-modal.css',
  shadow: true,
})
export class FeedbackModal {
  @Prop() targetEmail: string;

  @Prop({mutable:true, reflect:true}) visible: boolean;

  @Event({
    eventName: 'modalEvents',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) modalEvents: EventEmitter<ModalEvents>;


  private close() {
    this.modalEvents.emit(ModalEvents.CLOSED)
    this.visible = false
  }



  render(): JSX.Element {
    return (
      <div class={this.visible ? "wrapper visible" : "wrapper"}>
        <div class="modal">
          <span class="title">Email will be sent to:</span>
          <div class="content">{this.targetEmail}</div>
          <div class="button-container">
            <button class="ok" onClick={()=>this.close()}>Okay</button>
          </div>
        </div>
      </div>
    );
  }

}
