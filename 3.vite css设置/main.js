import count from "./common.js";
import lodashES from "lodash-es" 
import _ from "lodash";
import request from "./request"
import "./componentA.js"
import "./componentB.js"
import "./index.css"
import "./index.module.less"

console.log(count);
console.log("lodash",_);
request()

// lodash ƒ lodash(value) {
//     if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
//       if (value instanceof LodashWrapper) {
//         return value;
//       }