import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

export default function CourseList({ courses = [] }) {
  const hasCourses = courses && courses.length > 0;

  return (
    <table id="CourseList" className="course-list">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" textSecondCell={null} />
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {hasCourses ? (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        ) : (
          // Empty state: 1 row, spanning 2 columns (via header row)
          <CourseListRow isHeader textFirstCell="No course available yet" textSecondCell={null} />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};
