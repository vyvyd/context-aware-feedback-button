import { r as registerInstance, h } from './index-6c69c4d0.js';

const feedbackButtonCss = ":host{display:block}";

let CustomFeedbackComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("button", null, "Tell me!");
  }
};
CustomFeedbackComponent.style = feedbackButtonCss;

export { CustomFeedbackComponent as feedback_button };
