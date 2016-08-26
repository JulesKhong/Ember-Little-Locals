import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('restaurant', {path: '/restaurant/:restaurant_id'});
  this.route('index', {path: '/'});
  this.route('admin');
  this.route('update-restaurant', {path:'/update-restaurant/:restaurant_id'});
  this.route('favorites');
});

export default Router;
