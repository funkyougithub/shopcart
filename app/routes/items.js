import Ember from 'ember';
	
export default Ember.Route.extend({
	
	model(){
		
		return this.store.findAll('item');	
							
	},

	actions: {
		warenkorb_add(item) {
			
			
			
			/*
			let blogPost = this.get('store').peekRecord('item', item.id);
			console.log(blogPost.name);
			let comment = this.get('store').createRecord('cart', {
			  id: item.id,
			  anzahl: 5,
			  items: blogPost
			});
			comment.save();
			*/
			
			
			
			this.store.createRecord('cart', {
				id: item.id,
				anzahl: 5,
				items: [item]  //this.store.find('item', item.id)
			})
			.save();
			
			
        }
	}
  
});

	