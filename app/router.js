import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	
	this.route('items');
	this.route('item', { path: '/item/:item_id' } );
	this.route('cart');
	/*
	this.route('items', function(){
		this.route('item', { path: '/:item_id' }); // = nested route
	}
	*/

});

export default Router;
