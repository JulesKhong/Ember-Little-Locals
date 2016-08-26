import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateRestaurant(restaurant) {
      var params = {
        name: this.get('name'),
        neighborhood: this.get('neighborhood'),
        notes: this.get('notes'),
        img: this.get('img'),
        location: this.get('location'),
        style: this.get('style')
      };
      this.sendAction('update', restaurant, params);
    }
  }
});
