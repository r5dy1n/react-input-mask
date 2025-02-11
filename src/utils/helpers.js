import ReactDOM from 'react-dom';

export function isDOMElement(element) {
  return typeof HTMLElement === 'object'
    ? element instanceof HTMLElement // DOM2
    : element.nodeType === 1 && typeof element.nodeName === 'string';
}

export function isFunction(value) {
  return typeof value === 'function';
}

// https://github.com/facebook/react/blob/main/packages/shared/ReactDOMSharedInternals.js
const reactDOMInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE

export function findDOMNode(instance) {
  return ReactDOM.findDOMNode
    ? ReactDOM.findDOMNode(instance)
    : reactDOMInternals.findDOMNode(instance);
}
