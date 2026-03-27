import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./priceFooter.html";
class PriceFooter extends LightningElement {
  constructor(...args) {
    super(...args);
    this.price = void 0;
  }
  get formattedPrice() {
    return this.formatter(this.price);
  }
  formatter(value) {
    if (value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
    } else {
      return null;
    }
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(PriceFooter, {
  publicProps: {
    price: {
      config: 0
    }
  }
});
export default _registerComponent(PriceFooter, {
  tmpl: _tmpl
});