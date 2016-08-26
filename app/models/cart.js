import DS from 'ember-data';
		
export default DS.Model.extend({

	anzahl: DS.attr('number'), 
	items: DS.hasMany('item')

});
