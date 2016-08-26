import Ember from 'ember';

export default Ember.Component.extend({
  showReviewForm: false,
  actions: {
    showReviewForm() {
      this.set('showReviewForm', true);
    },
    hideReviewForm() {
      this.set('showReviewForm', false);
    },
    saveReview(){
      var params = {
        rating: this.get('rating') ? this.get('rating'): "",
        comments: this.get('comments') ? this.get('comments'): "",
        restaurant: this.get('restaurant')
      };
      this.set('showReviewForm', false);
      this.sendAction('saveReview', params);
    }
  }
});
