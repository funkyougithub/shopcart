import Ember from 'ember';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Route.extend({
  cart: service(),

	model() {
		return this.get('cart').getCart();
	},

	actions: {

	}

});

