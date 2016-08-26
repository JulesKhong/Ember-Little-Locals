import Ember from 'ember';

export default Ember.Component.extend({
  showRestaurantForm: false,
  actions: {
    showRestaurantForm() {
      this.set('showRestaurantForm', true);
    },
    hideRestaurantForm() {
      this.set('showRestaurantForm', false);
    },
    saveRestaurant() {
      var params = {
        name: this.get('name') ? this.get('name'): "",
        neighborhood: this.get('neighborhood') ? this.get('neighborhood'): "",
        notes: this.get('notes') ? this.get('notes'): "",
        img: this.get('img') ? this.get('img'): "",
        location: this.get('location') ? this.get('location'): "",
        style: this.get('style') ? this.get('style'): "",
      };
      this.set('showRestaurantForm', false);
      this.sendAction('saveRestaurant', params);
    }
  }
});
