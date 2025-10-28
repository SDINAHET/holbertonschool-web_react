import React from "react";
import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

function CourseList({ courses = [] }) {
  return (
    // Outer wrapper: full width, centers content, adds side padding on small screens
    <div className="w-full flex justify-center my-8 px-3 sm:px-4">
      {/* Width: full on small screens, 80% from md and up */}
      <div className="w-full md:w-4/5">
        {/* Responsive scroll container to avoid overflow issues on small screens */}
        <div className="w-full overflow-x-auto rounded">
          {/* Table fills its container; ensure a reasonable min width to keep columns readable */}
          <table
            id="CourseList"
            className="w-full border-collapse text-black table-auto text-sm sm:text-base min-w-[420px]"
          >
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
      </div>
    </div>
  );
}

export default WithLogging(CourseList);
