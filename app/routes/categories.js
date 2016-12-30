import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category')
    //   categories: [
    //     {
    //       id: 0,
    //       name: 'Rock',
    //       slug: 'rock',
    //     },
    //     {
    //       id: 1,
    //       name: 'Balad',
    //       slug: 'balad',
    //     },
    //     {
    //       id: 2,
    //       name: 'Jazz',
    //       slug: 'jazz',
    //     },
    //     {
    //       id: 3,
    //       name: 'Hip Hop',
    //       slug: 'hiphop',
    //     },
    //     {
    //       id: 4,
    //       name: 'Funk',
    //       slug: 'funk',
    //     },
    //   ]
    });
  },

  setupController: function(controller, models) {
    return controller.setProperties(models);
  }

});
