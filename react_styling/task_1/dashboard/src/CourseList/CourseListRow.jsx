// import React from "react";

// export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
// return (
// 	<tr>
// 		{isHeader ? (
// 			textSecondCell === null ? (
// 				<th colSpan="2">{textFirstCell}</th>
// 			) : (
// 				<>
// 					<th style={{ width: '70%'}}>{textFirstCell}</th>
// 					<th>{textSecondCell}</th>
// 				</>
// 			)
// 		) : (
// 			<>
// 				<td>{textFirstCell}</td>
// 				<td>{textSecondCell}</td>
// 			</>
// 		)}
// 	</tr>
// );
// }

import React from "react";

export default function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
  // Couleur de fond et opacité selon le type de ligne
  const rowClass = isHeader
    ? "bg-[var(--color-table-header)] opacity-[0.66]"
    : "bg-[var(--color-table-rows)] opacity-[0.45]";

  // Bordure et padding à gauche de 8px pour chaque cellule
  const cellClass = "border border-gray-400 pl-2";

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={rowClass}>
          <th colSpan="2" className={cellClass}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={rowClass}>
        <th className={`${cellClass} w-[70%]`}>{textFirstCell}</th>
        <th className={cellClass}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={rowClass}>
      <td className={cellClass}>{textFirstCell}</td>
      <td className={cellClass}>{textSecondCell}</td>
    </tr>
  );
}
