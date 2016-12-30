import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('new');
    this.route('user', { path: ':user_id' }); // users/3
  });
  this.route('videos', function() {
    this.route('rejected');
    this.route('approved');
    this.route('all', { path: '/' });
  });
  this.route('categories', function() {
    this.route('new');
    this.route('category', { path: ':category_id' }); // categories/3
  });
  this.route('queue', {path: '/'});
  this.route('login');
});

export default Router;
