import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  // Couleur de fond et opacité selon le type de ligne
  const rowClass = isHeader
    ? "bg-[var(--color-table-header)] opacity-[0.66]"
    : "bg-[var(--color-table-rows)] opacity-[0.45]";

  // Bordure grise, padding-left de 8px, texte noir
  const cellClass = "border border-gray-400 pl-2 text-black";

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={rowClass}>
          <th colSpan="2" className={`${cellClass} font-bold`}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={rowClass}>
        <th className={`${cellClass} font-bold w-[70%]`}>{textFirstCell}</th>
        <th className={`${cellClass} font-bold`}>{textSecondCell}</th>
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
