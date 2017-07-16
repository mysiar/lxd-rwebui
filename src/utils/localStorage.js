import { LXD_SERVER } from '../constants/App';

const LXD_SERVER_KEY = 'LXD_SERVER';

export const getLxdServer = () => {
  try {
    const server = window.localStorage.getItem(LXD_SERVER_KEY);
    if (server === null) {
      return LXD_SERVER;
    }
    return server;
  } catch (error) {
    return LXD_SERVER;
  }
};

export const setLxdServer = (server) => {
  try {
    if (server) {
      window.localStorage.setItem(LXD_SERVER_KEY, server);
    }
  } catch (error) {
    // Ignore storage write errors
  }
};
