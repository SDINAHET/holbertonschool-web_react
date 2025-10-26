import React from "react";
import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

function CourseList({ courses = [] }) {
  return (
    // Wrapper unique : centré + 85% (80–90%) — pas d'autre div autour
    <div className="mx-auto my-8 w-[85%] md:w-4/5">
      {/* La table remplit complètement le conteneur */}
      <table id="CourseList" className="w-full border-collapse text-black">
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
              {courses.map((c) => (
                <CourseListRow
                  key={c.id}
                  textFirstCell={c.name}
                  textSecondCell={c.credit}
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
  );
}

export default WithLogging(CourseList);
