'use strict';

var jsxRuntime = require('react/jsx-runtime');

function Button({ children }) {
    return jsxRuntime.jsxs("button", { children: ["IXO:", children] });
}

exports.Button = Button;
//# sourceMappingURL=index.js.map
