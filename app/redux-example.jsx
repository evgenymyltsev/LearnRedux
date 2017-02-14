var redux = require('redux');

console.log('starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHtml = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();

store.dispatch (actions.fetchLocation());

store.dispatch (actions.changeName('ME'));

store.dispatch (actions.addHobby('Running'));
store.dispatch (actions.addHobby('Walking'));
store.dispatch (actions.removeHobby(2));

store.dispatch (actions.changeName('AM'));

store.dispatch (actions.addMovie('Mad Max', 'Action'));
store.dispatch (actions.addMovie('Batman', 'Action'));
store.dispatch (actions.removeMovie(1));
