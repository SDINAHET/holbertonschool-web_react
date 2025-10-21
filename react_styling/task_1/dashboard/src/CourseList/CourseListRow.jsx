import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  // Fond translucide via variables (texte non translucide)
  const rowBg = isHeader
    ? "bg-[color:rgb(var(--color-table-header-rgb)/0.66)]"
    : "bg-[color:rgb(var(--color-table-rows-rgb)/0.45)]";

  // ⬇️ th centrés (exigence maquette)
  const thBase = "border border-gray-400 px-2 py-2 font-bold text-center";
  // td à gauche + padding-left 8px
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
