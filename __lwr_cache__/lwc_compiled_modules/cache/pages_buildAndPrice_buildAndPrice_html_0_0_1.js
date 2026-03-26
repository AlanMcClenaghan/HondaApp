import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buildAndPrice.css";

import _implicitScopedStylesheets from "./buildAndPrice.scoped.css?scoped=true";

import _componentsCarDetails from "components/carDetails";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col slds-size_12-of-12 slds-large-size_4-of-12${0}"${2}>Range and color selection components will come here</div>`;
const stc0 = {
  classMap: {
    "slds-p-around_medium": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true,
    "slds-m-bottom_large": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true,
    "slds-large-size_8-of-12": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, st: api_static_fragment} = $api;
  return [api_element("main", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_custom_element("components-car-details", _componentsCarDetails, {
    props: {
      "selectedVariant": $cmp.selectedVariant
    },
    key: 3
  })]), api_static_fragment($fragment1(), 5)])])];
  /*LWC compiler v2.38.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "pages-buildAndPrice_buildAndPrice";
freezeTemplate(tmpl);
