import DS from 'ember-data';
		
export default DS.Model.extend({

  name: DS.attr('string'),
  preis: DS.attr('string'),
  team: DS.attr('string')

});
