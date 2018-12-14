export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires}`;
};

export const getCookie = cname => {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const deleteCookie = cname => {
  document.cookie = `${cname}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const checkCookie = cname => {
  const c = getCookie(cname);
  if (c !== '') {
    return true;
  }
  return false;
};
