import React from "react";
import CourseListRow from "./CourseListRow";
import WithLogging from '../HOC/WithLogging';

// export default function CourseList({ courses=[] }) {
// 	return (
// 		<table id="CourseList">
// 			{courses.length > 0 ? (
// 				<>
// 					<thead>
// 						<CourseListRow isHeader={true} textFirstCell="Available courses" />
// 						<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
// 					</thead>
// 					<tbody>
// 						{courses.map((course) => (
// 							<CourseListRow
// 								key={course.id}
// 								textFirstCell={course.name}
// 								textSecondCell={course.credit}
// 							/>
// 						))}
// 					</tbody>
// 				</>
// 				) : (
// 					<tbody>
// 						<CourseListRow isHeader={true} textFirstCell="No course available yet" />
// 					</tbody>
// 					)}
// 		</table>
// 	);
// }
// function CourseList({ courses = [] }) {
//   return (
//     <table id="CourseList">
//       {courses.length > 0 ? (
//         <>
//           <thead>
//             <CourseListRow isHeader={true} textFirstCell="Available courses" />
//             <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <CourseListRow
//                 key={course.id}
//                 textFirstCell={course.name}
//                 textSecondCell={course.credit}
//               />
//             ))}
//           </tbody>
//         </>
//       ) : (
//         <tbody>
//           <CourseListRow isHeader={true} textFirstCell="No course available yet" />
//         </tbody>
//       )}
//     </table>
//   );
// }

// export default WithLogging(CourseList);

function CourseList({ courses = [] }) {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-4/5 md:w-[85%]"> {/* 80–85% de largeur */}
        <table id="CourseList" className="w-full border-collapse">
          {courses.length > 0 ? (
            <>
              <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
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
