function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "footer" + shadowSelector + " {background: #f2f2f2;padding: 32px;display: flex;align-items: center;border-top: 1px solid #cdcdcd;}.price" + shadowSelector + " {font-size: 40px;}button" + shadowSelector + ", button:hover" + shadowSelector + " {padding: 8px 24px;font-size: 20px;border-radius: 20px;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];