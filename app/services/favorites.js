import Ember from 'ember';

export default Ember.Service.extend({
  places: [],

  add(place) {
    this.get('places').pushObject(place);
  },
  includes(restaurant) {
    return this.get('places').includes(restaurant);
  }
});
