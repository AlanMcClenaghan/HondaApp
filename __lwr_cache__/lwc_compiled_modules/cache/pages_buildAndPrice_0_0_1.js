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

// Define the colors available for the car
const COLORS = [{
  label: "Ignite Red (Metallic)",
  value: "ignite_red",
  checked: true
}, {
  label: "Brilliant Sporty Blue",
  value: "sporty_blue"
}, {
  label: "Crystal Black",
  value: "crystal_black"
}, {
  label: "Platinum White (Pearlescent)",
  value: "platinum_white"
}];
class BuildAndPrice extends LightningElement {
  constructor(...args) {
    super(...args);
    this.crvVariants = CRV_VARIANTS;
    this.colorsList = COLORS;
    this.selectedVariant = CRV_VARIANTS[0];
    this.selectedPrice = this.selectedVariant.price;
  }
  //Handler for when a variant is selected
  selectionHandler(event) {
    console.log("selected record", event.detail.selected);
    console.log("selected variant", event.detail.variant);
  }

  //Handler for when a color is selected
  colorSelectionHandler(event) {
    console.log("selected color", event.detail);
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(BuildAndPrice, {
  fields: ["crvVariants", "colorsList", "selectedVariant", "selectedPrice"]
});
export default _registerComponent(BuildAndPrice, {
  tmpl: _tmpl
});