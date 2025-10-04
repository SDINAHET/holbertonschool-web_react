// Runner-friendly (CommonJS + pas de JSX)
const React = require('react');

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  if (isHeader) {
    return React.createElement(
      'tr',
      null,
      textSecondCell === null
        ? React.createElement('th', { colSpan: '2' }, textFirstCell)
        : [
            React.createElement('th', { key: 'h1' }, textFirstCell),
            React.createElement('th', { key: 'h2' }, textSecondCell),
          ]
    );
  }

  return React.createElement(
    'tr',
    null,
    React.createElement('td', null, textFirstCell),
    React.createElement('td', null, textSecondCell)
  );
}

module.exports = CourseListRow;
