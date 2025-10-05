import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  // en body: toujours une <tr>; si pas de 2e cellule -> <td colSpan="2">
  if (textSecondCell === null) {
    return (
      <tr>
        <td colSpan="2">{textFirstCell}</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
