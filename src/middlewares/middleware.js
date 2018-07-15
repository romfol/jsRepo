export const middleware = store => next => (action) => {
   console.log('middleware works');
  if (action.request) {
    return action.request.then(results => results.json()).then(results => next({
      type: action.type,
      payload: results,
    }));
  }
  next(action);
};
