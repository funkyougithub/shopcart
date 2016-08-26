import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  price: DS.attr('number'),
  // categoryid: DS.attr('number'),
  image: DS.attr('string'),
  category: DS.belongsTo('category', {async:true}),
  cart: DS.belongsTo('cart')

});
