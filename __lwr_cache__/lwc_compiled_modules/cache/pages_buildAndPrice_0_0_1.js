import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./buildAndPrice.html";
const CRV_VARIANTS = [{
  variant: "VTi",
  price: 38900,
  formattedPrice: "$38,900",
  fuelConsumption: 7,
  seatingCapacity: 5,
  allowWheels: 17,
  checked: true,
  imageName: "ignite_red"
}, {
  variant: "VTi 7",
  formattedPrice: "$40,900",
  price: 40900,
  fuelConsumption: 7.3,
  seatingCapacity: 7,
  allowWheels: 17,
  imageName: "ignite_red"
}, {
  variant: "VTi X",
  formattedPrice: "$41,900",
  price: 41900,
  fuelConsumption: 7.3,
  seatingCapacity: 5,
  allowWheels: 18,
  imageName: "ignite_red"
}, {
  variant: "VTi LX AWD",
  formattedPrice: "$53,600",
  price: 53600,
  fuelConsumption: 7.4,
  seatingCapacity: 5,
  allowWheels: 19,
  imageName: "ignite_red"
}];
class BuildAndPrice extends LightningElement {
  constructor(...args) {
    super(...args);
    this.selectedVariant = CRV_VARIANTS[0];
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(BuildAndPrice, {
  fields: ["selectedVariant"]
});
export default _registerComponent(BuildAndPrice, {
  tmpl: _tmpl
});