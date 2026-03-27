import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buildAndPrice.css";

import _implicitScopedStylesheets from "./buildAndPrice.scoped.css?scoped=true";

import _componentsCarDetails from "components/carDetails";
import _componentsRangeSelection from "components/rangeSelection";
import _componentsColorSelection from "components/colorSelection";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h2 class="slds-text-heading_large${0}"${2}>CR-V Range</h2>`;
const $fragment2 = parseFragment`<h2 class="slds-text-heading_large slds-m-top_large${0}"${2}>CR-V Colors</h2>`;
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
const stc3 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true,
    "slds-large-size_4-of-12": true
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, st: api_static_fragment, b: api_bind, k: api_key, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("main", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_custom_element("components-car-details", _componentsCarDetails, {
    props: {
      "selectedVariant": $cmp.selectedVariant
    },
    key: 3
  })]), api_element("div", stc3, api_flatten([api_static_fragment($fragment1(), 6), api_custom_element("components-range-selection", _componentsRangeSelection, {
    props: {
      "variants": $cmp.crvVariants
    },
    key: 7,
    on: {
      "selection": _m0 || ($ctx._m0 = api_bind($cmp.selectionHandler))
    }
  }), api_static_fragment($fragment2(), 9), api_iterator($cmp.colorsList, function (item) {
    return api_custom_element("components-color-selection", _componentsColorSelection, {
      props: {
        "color": item
      },
      key: api_key(10, item.value),
      on: {
        "colorselection": _m1 || ($ctx._m1 = api_bind($cmp.colorSelectionHandler))
      }
    });
  })]))])])];
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
