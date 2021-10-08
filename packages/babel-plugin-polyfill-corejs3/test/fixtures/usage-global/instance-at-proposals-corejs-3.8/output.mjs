import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array-buffer.slice.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.typed-array.int8-array.js";
import "core-js/modules/esnext.typed-array.at.js";
import "core-js/modules/es.typed-array.copy-within.js";
import "core-js/modules/es.typed-array.every.js";
import "core-js/modules/es.typed-array.fill.js";
import "core-js/modules/es.typed-array.filter.js";
import "core-js/modules/es.typed-array.find.js";
import "core-js/modules/es.typed-array.find-index.js";
import "core-js/modules/es.typed-array.for-each.js";
import "core-js/modules/es.typed-array.includes.js";
import "core-js/modules/es.typed-array.index-of.js";
import "core-js/modules/es.typed-array.iterator.js";
import "core-js/modules/es.typed-array.join.js";
import "core-js/modules/es.typed-array.last-index-of.js";
import "core-js/modules/es.typed-array.map.js";
import "core-js/modules/es.typed-array.reduce.js";
import "core-js/modules/es.typed-array.reduce-right.js";
import "core-js/modules/es.typed-array.reverse.js";
import "core-js/modules/es.typed-array.set.js";
import "core-js/modules/es.typed-array.slice.js";
import "core-js/modules/es.typed-array.some.js";
import "core-js/modules/es.typed-array.sort.js";
import "core-js/modules/es.typed-array.subarray.js";
import "core-js/modules/es.typed-array.to-locale-string.js";
import "core-js/modules/es.typed-array.to-string.js";
import "core-js/modules/esnext.array.at.js";
import "core-js/modules/esnext.string.at.js";
// obscuring instance type
let tmp;

switch (Math.floor(Math.random() * 3)) {
  case 0:
    tmp = "";
    break;

  case 1:
    tmp = [];
    break;

  case 2:
    tmp = new Int8Array(1);
    break;
}

tmp.at(-1);
