interface IStorage {
  property: string;
  key: string;
  value?: string;
}

function setItem({ property, key, value }: IStorage) {
  const options: { [key: string]: any } = {
    cookie: (key: string, value: string) =>
      (document.cookie = key + "=" + JSON.stringify(value)),
    localStorage: (key: string, value: string) =>
      localStorage.setItem(key, JSON.stringify(value)),
    sessionStorage: (key: string, value: string) =>
      sessionStorage.setItem(key, JSON.stringify(value)),
  };

  options[property](key, value);
}

function removeItem({ property, key }: IStorage) {
  const options: { [key: string]: any } = {
    cookie: (key: string) =>
      (document.cookie = key + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"),
    localStorage: (key: string) => localStorage.removeItem(key),
    sessionStorage: (key: string) => sessionStorage.removeItem(key),
  };

  options[property](key);
}

function getItem({ property, key }: IStorage) {
  const options: { [key: string]: any } = {
    cookie: () => document.cookie,
    localStorage: (key: string) =>
      JSON.parse(localStorage.getItem(key) || "{}"),
    sessionStorage: (key: string) =>
      JSON.parse(sessionStorage.getItem(key) || "{}"),
  };

  return options[property](key);
}

export { setItem, removeItem, getItem };
