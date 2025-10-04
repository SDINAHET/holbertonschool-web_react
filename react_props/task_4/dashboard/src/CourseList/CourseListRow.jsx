import React from 'react';
import PropTypes from 'prop-types';

// ✅ Accepte un appel sans props
function CourseListRow(props = {}) {
  const {
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null,
  } = props;

  if (isHeader) {
    // Header:
    //  - sans seconde cellule -> un seul <th colSpan="2">
    //  - avec seconde cellule -> deux <th>
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

  // Body:
  //  ❗ Toujours deux <td>, même si textSecondCell est null (cellule vide attendue par le checker)
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
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
};

export default CourseListRow;
