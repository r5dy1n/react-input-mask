import { createRoot } from "react-dom/client";
/* eslint-disable no-console */
import React from 'react';
import InputMask from '../src';

class Input extends React.Component {
  state = {
    value: ''
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return <InputMask mask="**99-9999-9999" value={this.state.value} onChange={this.onChange} />;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Input />);

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const consoleDiv = document.getElementById('console');
const log = console.log;
console.log = (text, ...rest) => {
  log.apply(console, [text, ...rest]);
  consoleDiv.innerHTML = `${escapeHtml(text)}<br/>${consoleDiv.innerHTML}`;
};
