export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (num) => {
  return {
    type: ADD,
    payload: { value: num },
  };
};

export const subtract = (num) => {
  return {
    type: SUBTRACT,
    payload: { value: num },
  };
};

export const saveResult = (result) => {
  return {
    type: STORE_RESULT,
    result,
  };
};

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    elementId: id,
  };
};
