import React from "react";
import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

function CourseList({ courses = [] }) {
  return (
    // Un SEUL wrapper centré, 80% de largeur
    <div className="w-4/5 mx-auto my-8">
      <table id="CourseList" className="w-full border-collapse">
        {courses.length > 0 ? (
          <>
            <thead>
              <CourseListRow isHeader={true} textFirstCell="Available courses" />
              <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
              {courses.map((c) => (
                <CourseListRow key={c.id} textFirstCell={c.name} textSecondCell={c.credit} />
              ))}
            </tbody>
          </>
        ) : (
          <tbody>
            <CourseListRow isHeader={true} textFirstCell="No course available yet" />
          </tbody>
        )}
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
