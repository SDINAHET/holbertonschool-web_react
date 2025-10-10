// task_5/dashboard/src/utils/utils.js
// export const getCurrentYear = () => new Date().getFullYear();

// export const getFooterCopy = (isIndex) =>
  // isIndex ? 'Holberton School' : 'Holberton School main dashboard';

// export const getLatestNotification = () =>
  // '<strong>Urgent requirement</strong> - complete by EOD';

// Optional alias so old code using getFullYear() still works
// export const getFullYear = getCurrentYear;

// utils.js
export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

