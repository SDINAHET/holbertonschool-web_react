// CommonJS, sans JSX (pour le runner du checkeur)
const React = require('react');
const CourseListRow = require('./CourseListRow.js');

module.exports = function CourseList({ courses = [] }) {
  const hasCourses = Array.isArray(courses) && courses.length > 0;

  return React.createElement(
    'table',
    { id: 'CourseList', className: 'course-list' },
    React.createElement(
      'thead',
      null,
      React.createElement(CourseListRow, {
        isHeader: true,
        textFirstCell: 'Available courses',
        textSecondCell: null
      }),
      React.createElement(CourseListRow, {
        isHeader: true,
        textFirstCell: 'Course name',
        textSecondCell: 'Credit'
      })
    ),
    React.createElement(
      'tbody',
      null,
      hasCourses
        ? courses.map((c) =>
            React.createElement(CourseListRow, {
              key: c.id,
              textFirstCell: c.name,
              textSecondCell: c.credit
            })
          )
        : React.createElement(CourseListRow, {
            textFirstCell: 'No course available yet',
            textSecondCell: null
          })
    )
  );
};
