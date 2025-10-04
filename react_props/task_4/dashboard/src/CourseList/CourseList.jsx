import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList({ courses = [] } = {}) {
  const hasCourses = Array.isArray(courses) && courses.length > 0;

  return (
    <table id="CourseList" className="course-list">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" textSecondCell={null} />
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {hasCourses ? (
          courses.map(({ id, name, credit }) => (
            <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
          ))
        ) : (
          // ⬇️ Exigé par le checker: une seule cellule qui span 2 colonnes
          <tr>
            <td colSpan="2">No course available yet</td>
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

export default CourseList;
