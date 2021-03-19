export const ACTIONTYPES = {
  GET_PRODUCT: 'GET_PRODUCT',
};

export const createTypeResult = action => {
  return `${action}_RESULT`;
};

export const createTypeFall = action => {
  return `${action}_FALL`;
};

export const createTypeLoadStart = action => {
  return `${action}_LOAD_START`;
};

export const createTypeLoadEnd = action => {
  return `${action}_LOAD_END`;
};
