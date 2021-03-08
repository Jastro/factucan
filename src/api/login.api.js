const HOSTNAME = "";

const buildRequest = (endpoint, config = {}) => {
  return fetch(`${HOSTNAME}${endpoint}`, config);
};

export const login = () => {
  return buildRequest("/login").then((response) => response.json());
};
