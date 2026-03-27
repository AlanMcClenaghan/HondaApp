import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./modal.html";
class Modal extends LightningElement {
  constructor(...args) {
    super(...args);
    this.heading = void 0;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(Modal, {
  publicProps: {
    heading: {
      config: 0
    }
  }
});
export default _registerComponent(Modal, {
  tmpl: _tmpl
});