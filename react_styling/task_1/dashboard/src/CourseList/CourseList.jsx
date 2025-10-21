import React from "react";
import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

function CourseList({ courses = [] }) {
  return (
    // Conteneur centré qui occupe ~80% de la page
    <div className="w-4/5 mx-auto my-10">
      <div className="overflow-x-auto rounded border border-gray-200">
        {/* La table remplit 100% du conteneur */}
        <table id="CourseList" className="w-full table-auto border-collapse">
          {courses.length > 0 ? (
            <>
              <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow
                  isHeader={true}
                  textFirstCell="Course name"
                  textSecondCell="Credit"
                />
              </thead>
              <tbody>
                {courses.map((course) => (
                  <CourseListRow
                    key={course.id}
                    textFirstCell={course.name}
                    textSecondCell={course.credit}
                  />
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
    </div>
  );
}

export default WithLogging(CourseList);
