import Ember from 'ember';

export default Ember.Service.extend({
  places: [],

  add(place) {
    this.get('places').pushObject(place);
  },
  includes(place) {
    return this.get('places').includes(place);
  }
  // avgRating: Ember.computed('restaurant.reviews.[]', function() {
  //   var runningTotal = 0;
  //   this.get('restaurant.reviews').forEach(function(restaurant){
  //     runningTotal += restaurant.get('rating');
  //   });
  //   return
  // })
});
