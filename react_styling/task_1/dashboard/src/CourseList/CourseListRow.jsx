import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  // Fond avec alpha (0.66 pour header, 0.45 sinon), le texte reste opaque
  const rowBg = isHeader
    ? "bg-[color:rgb(var(--color-table-header-rgb)/0.66)]"
    : "bg-[color:rgb(var(--color-table-rows-rgb)/0.45)]";

  // Bordures gray-400 autour de chaque cellule
  // th: padding x = 8px ; td: padding-left = 8px
  const thBase = "border border-gray-400 text-left px-2 py-2 font-bold";
  const tdBase = "border border-gray-400 text-left pl-2 py-2";

  return (
    <tr className={rowBg}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={thBase} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={thBase} style={{ width: "70%" }}>{textFirstCell}</th>
            <th className={thBase}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={tdBase}>{textFirstCell}</td>
          <td className={tdBase}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
