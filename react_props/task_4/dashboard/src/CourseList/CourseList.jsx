// src/CourseList/CourseList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList({ courses = [] }) {
  const hasCourses = courses && courses.length > 0;

  return (
    <table id="CourseList" className="course-list">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" textSecondCell={null} />
        {/* <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" /> */}
        {hasCourses && (
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
        )}
      </thead>
      <tbody>
        {/* {hasCourses ? (
          courses.map((c) => (
            <CourseListRow key={c.id} textFirstCell={c.name} textSecondCell={c.credit} />
          ))
        ) : (
          <CourseListRow isHeader textFirstCell="No course available yet" textSecondCell={null} />
        )} */}
        {/* {hasCourses ? (
          courses.map((c) => (
            <CourseListRow key={c.id} textFirstCell={c.name} textSecondCell={c.credit} />
          ))
        ) : (
          <tr>
            <td colSpan="2">No course available yet</td>
          </tr>
        )} */}
        {hasCourses ? (
          courses.map((c) => (
            <CourseListRow key={c.id} textFirstCell={c.name} textSecondCell={c.credit} />
          ))
        ) : (
          <tr>
            <td className="CourseList-empty" colSpan="2">No course available yet</td>
          </tr>
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

// ❌ enlever toute ligne du style :
// CourseList.defaultProps = { courses: [] };

export default CourseList;
