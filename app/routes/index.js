import Ember from 'ember';

export default Ember.Route.extend({

				  /*
				  init() {
					debugger;
				  },
				  beforeModel(transition) {
					debugger;
				  },
				  model(params, transition) {
					debugger;
				  },
				  afterModel(model, transition) {
					debugger;
				  },
				  activate() {
					debugger;
				  },
				  setupController(controller, model) {
					debugger;
				  },
				  renderTemplate(controller, model) {
					debugger;
				  }
				  */

	cookie: Ember.inject.service(),

	model(){

		/*
		Ember.$.getJSON('daten.json') // return am anfang der zeile wirft scheints leere daten??
		//Ember.$.getJSON('https://api.vouchercube.com/api/v1/Auth/abcdefghijklmnopqrstuvwxyz0123456789') // return am anfang der zeile wirft scheints leere daten??
			.then(data => {
			//console.log(data);
			return data.testdata.map(platzhalter => { //map = wie foreach hat ein arr gibt neues object zurück mit new arr
				return this.store.createRecord('fisherman', {
					id: platzhalter.id,
					name: platzhalter.firstName,
					preis: platzhalter.lastName,
					team: platzhalter.occupation
				})
				.save()
				.then((response) => {
					//this.set('xyzResponseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
					//alert(response.get('id'));
					//this.set('hallo', response.get('id'));
				});
			});
		});

		return this.store.findAll('fisherman');
		*/


/*
alle returns von getjson - RSVP ALL darauf warten dass alle promises erfüllt werden
wenn man das returnt wartet die index route bis alles da ist
*/


	 return Ember.$.getJSON('daten.json')
      .then(data => {
        //console.log(data);

        // All promises
        let promises = [];

        // Get categories
			  let categories = data.kategorien.map(platzhalter => { //map = wie foreach hat ein arr gibt neues object zurück mit new arr
			  	return this.store.createRecord('category', {
			  		id: platzhalter.id,
			  		name: platzhalter.name
			  	})
			  	.save()
			  	.then((response) => {
			  		//this.set('xyzResponseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
			  		//alert(response.get('id'));
			  		//this.set('hallo', response.get('id'));
			  	});
			  });
        // Push into all promises
        promises.push(categories);

        // Get items
  			let items = data.produkte.map(platzhalter => {
  				return this.store.createRecord('item', {
  					id: platzhalter.id,
  					name: platzhalter.name,
  					price: platzhalter.price,
  					categoryid: this.store.findRecord('category', platzhalter.categoryid),
					//categoryid: platzhalter.categoryid,
  					image: platzhalter.image
  				})
  				.save()
  				.then((response) => {
  					//this.set('xyzResponseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
  					//alert(response.get('id'));
  					//this.set('hallo', response.get('id'));
  				});
  			});
        // Push into all promises
        promises.push(items);

        // Wait for all promises to resolve
        return Ember.RSVP.all(promises);
		  });
	},

	actions: {
        pressMe() {
			alert( this.get('cookie').getMyCookieHash() );
			this.set('hallo', this.get('cookie').getMyCookieHash());
        }
	}


});

