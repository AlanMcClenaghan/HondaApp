import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buildAndPrice.css";

import _implicitScopedStylesheets from "./buildAndPrice.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div${3}>Hello I am Build And Price Page</div>`;
const $fragment2 = parseFragment`<button class="slds-button slds-button_success${0}"${2}>Success Button</button>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1), api_static_fragment($fragment2(), 3)];
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
