import React from 'react';
import PropTypes from 'prop-types';

// ✅ on sécurise aussi le paramètre d'entrée
function CourseListRow(props = {}) {
  const {
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null,
  } = props;

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

  return (
    <tr>
      {textSecondCell === null ? (
        // Dans le tbody, si pas de 2e cellule on met un td avec colSpan=2
        <td colSpan="2">{textFirstCell}</td>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  // ✅ on autorise explicitement null pour éviter les warnings en console
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
};

export default CourseListRow;
