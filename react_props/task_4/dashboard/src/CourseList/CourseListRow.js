// CommonJS, sans JSX (pour le runner du checkeur)
const React = require('react');

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return React.createElement('tr', null,
        React.createElement('th', { colSpan: '2' }, textFirstCell)
      );
    }
    return React.createElement('tr', null,
      React.createElement('th', null, textFirstCell),
      React.createElement('th', null, textSecondCell)
    );
  }

  if (textSecondCell === null) {
    return React.createElement('tr', null,
      React.createElement('td', { colSpan: '2' }, textFirstCell)
    );
  }

  return React.createElement('tr', null,
    React.createElement('td', null, textFirstCell),
    React.createElement('td', null, textSecondCell)
  );
}

module.exports = CourseListRow;
