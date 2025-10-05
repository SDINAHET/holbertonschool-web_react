import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList({ courses = [] }) {
  const hasCourses = courses && courses.length > 0;

  return (
    <table id="CourseList" className="course-list">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {/* {hasCourses
          ? courses.map((c) => (
              <CourseListRow key={c.id} textFirstCell={c.name} textSecondCell={c.credit} />
            ))
          : <CourseListRow textFirstCell="No course available yet" />
        } */}
        {hasCourses
        ? courses.map((c) => (
            <CourseListRow key={c.id} textFirstCell={c.name} textSecondCell={c.credit} />
          ))
        : <CourseListRow isHeader textFirstCell="No course available yet" />
      }
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  })),
};

export default CourseList;
