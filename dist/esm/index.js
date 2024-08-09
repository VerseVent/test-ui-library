import { jsxs } from 'react/jsx-runtime';

function Button({ children }) {
    return jsxs("button", { children: ["IXO:", children] });
}

export { Button };
//# sourceMappingURL=index.js.map
