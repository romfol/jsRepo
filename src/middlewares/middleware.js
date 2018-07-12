export const middleware = store => next => (action) => {
   console.log('middleware works');
  if (action.request) {
    return action.request.then(res => res.json()).then(res => next({
      type: action.type,
      payload: res,
    }));
  }
  next(action);
};
