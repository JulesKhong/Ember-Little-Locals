import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      restaurants: this.store.findAll('restaurant')
    });
  },
  actions: {
    saveRestaurant(params) {
      var newRestaurant = this.store.createRecord('restaurant', params);
      newRestaurant.save();
      this.transitionTo('admin');
    }
  }
});
