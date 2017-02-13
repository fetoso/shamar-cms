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
    this.route('videos');
  });
  this.route('videos', function() {
    this.route('rejected', function() {
      this.route('video', { path: ':video_id' });
    });
    this.route('approved', function() {
      this.route('video', { path: ':video_id' });
    });
    this.route('all', { path: '/' }, function() {
      this.route('video', { path: ':video_id' });
    });
    // this.route('preview', { path: ':video_id' });
    // this.route('video', { path: ':video_id' });
  });
  this.route('categories', function() {
    this.route('new');
    this.route('category', { path: ':category_id' }); // categories/3
  });
  this.route('queue', {path: '/'});
  this.route('login');
  this.route('contents', function() {
    this.route('content', { path: ':content_id' });
    this.route('new');
  });
});

export default Router;
