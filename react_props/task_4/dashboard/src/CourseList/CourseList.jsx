import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

// ✅ note le "= {}" pour éviter l'erreur si le composant est appelé sans props
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
          courses.map((c) => (
            <CourseListRow
              key={c.id}
              textFirstCell={c.name}
              textSecondCell={c.credit}
            />
          ))
        ) : (
          // Etat vide: 1 seule ligne, 1 cellule avec colSpan=2
          <CourseListRow textFirstCell="No course available yet" textSecondCell={null} />
        )}
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
