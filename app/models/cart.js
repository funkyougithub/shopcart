import DS from 'ember-data';

export default DS.Model.extend({

  orderItems: DS.hasMany('order-item')

});
