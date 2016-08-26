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

  model() {
   return Ember.$.getJSON('daten.json')
      .then(data => {
        // All promises
        let promises = [];

        // Get categories
        let categories = data.kategorien.map(platzhalter => { //map = wie foreach hat ein arr gibt neues object zurück mit new arr
          return this.store.createRecord('category', {
            id: platzhalter.id,
            name: platzhalter.name
          })
          .save()
          .then((response) => { });
        });
        // Push into all promises
        promises.concat(categories);

        // Get items
        let items = data.produkte.map(platzhalter => {
          this.store
            .findRecord('category', platzhalter.categoryid)
            .then(category => {

              return this.store.createRecord('item', {
                id: platzhalter.id,
                name: platzhalter.name,
                price: platzhalter.price,
                category: category,
                image: platzhalter.image
              })
              .save()
              .then((response) => { });
            });

        });
        // Push into all promises
        promises.concat(items);

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

