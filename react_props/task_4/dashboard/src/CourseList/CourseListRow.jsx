import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props = {}) {
  const { isHeader = false, textFirstCell = '', textSecondCell = null } = props;

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

  // toujours deux <td> en mode body
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
