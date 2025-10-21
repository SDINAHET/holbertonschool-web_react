import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  // BG + opacité selon header / ligne simple (variables définies dans main.css)
  const rowBg = isHeader
    ? "bg-[var(--color-table-header)] opacity-[0.66]"
    : "bg-[var(--color-table-rows)] opacity-[0.45]";

  // Bordure gray-400 autour de chaque cellule
  // th: padding horizontal 8px ; td: padding-left 8px
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
