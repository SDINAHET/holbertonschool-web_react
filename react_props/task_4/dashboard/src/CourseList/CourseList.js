// Runner-friendly (CommonJS + pas de JSX)
const React = require('react');
const CourseListRow = require('./CourseListRow.js');

function CourseList({ courses = [] }) {
  const hasCourses = Array.isArray(courses) && courses.length > 0;

  return React.createElement(
    'table',
    { id: 'CourseList', className: 'course-list' },
    // thead
    React.createElement(
      'thead',
      null,
      React.createElement(CourseListRow, {
        isHeader: true,
        textFirstCell: 'Available courses',
        textSecondCell: null,
      }),
      React.createElement(CourseListRow, {
        isHeader: true,
        textFirstCell: 'Course name',
        textSecondCell: 'Credit',
      })
    ),
    // tbody
    React.createElement(
      'tbody',
      null,
      hasCourses
        ? courses.map((c) =>
            React.createElement(CourseListRow, {
              key: c.id,
              textFirstCell: c.name,
              textSecondCell: c.credit,
            })
          )
        : React.createElement(
            'tr',
            null,
            React.createElement('td', { colSpan: '2' }, 'No course available yet')
          )
    )
  );
}

module.exports = CourseList;
