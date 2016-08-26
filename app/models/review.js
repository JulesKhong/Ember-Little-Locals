import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  comments: DS.attr(),
  restaurant: DS.belongsTo('restaurant', {async: true})
});
