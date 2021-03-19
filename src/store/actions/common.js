export const requestResult = (action, payload) => ({
  type: `${action}_RESULT`,
  payload,
});

export const requestFall = (action, payload) => ({
  type: `${action}_FALL`,
  payload,
});

export const requestLoadStart = (action, payload) => ({
  type: `${action}_LOAD_START`,
  payload,
});

export const requestLoadEnd = (action, payload) => ({
  type: `${action}_LOAD_END`,
  payload,
});
