import Ember from 'ember';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Route.extend({
  cart: service(),

	model(){

		return this.store.findAll('item');

	},

  actions: {
    warenkorb_add(item) {
      return this.get('cart').addItem(item);
    }
  }

});

