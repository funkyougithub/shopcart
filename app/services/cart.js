import Ember from 'ember';

const {
  inject: {
    service
  },
  isEmpty
} = Ember;

export default Ember.Service.extend({
  store: service(),

  getCart() {
    return this.get('store')
      .findAll('cart')
      .then(carts => {
        if (carts.get('length') === 0) {
          return this.get('store').createRecord('cart');
        } else {
          return carts.get('firstObject');
        }
      });
  },

  addItem(item) {
    return this.getCart()
      .then(cart => {

        let orderItem = cart.get('orderItems')
          .find(orderItem => {
            return orderItem.get('item.id') === item.get('id');
          });

        if (orderItem) {
          orderItem.incrementProperty('amount');
          return orderItem.save();
        } else {
          let newOrderItem = this.get('store').createRecord('order-item', {
            amount: 1,
            item: item
          });

          cart.get('orderItems').addObject(newOrderItem);
          newOrderItem.save();

          return cart.save();
        }
      });
  }
});