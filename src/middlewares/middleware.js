export const middleware = store => next => (action) => {
  console.log('middleware works');
  // if (action.request) {
  //   return action.request.then(results => results.json()).then(results => next({
  //     type: action.request,
  //     payload: results,
  //   }));
  // }
  next(action);
};
