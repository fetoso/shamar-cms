import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service('session'),
  actions: {
    submit: function() {
      this.sendAction('action', this.item);
    },
    selectNotify: function(value) {
      this.set('item.notify', value);
    },
    selectActive: function(value) {
      this.set('item.is_active', value);
    },
    fileLoaded: function(file) {
        var type = file.type.replace('video/','');
        var token = this.get('session.session.content.authenticated.token');
        var _this = this;
        return _this.get('ajax')
          .request('/videos', {
            method: 'POST',
            data: {
              filename: file.name, // - String (Email format) *
              filetype: type, // - String (mpg-4, mpeg-4, mp4)*
              category: '589a2a1f44251c0bfe7c53ad', // - CategoryID *
              approved: false, // - Boolean (Only when user is admin can edit this field)
            },
            headers: {
              Authorization: `JWT ${token}`
            }
          })
          .then(function(response) {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', response.data.signedRequest);
            xhr.setRequestHeader("Content-Type", "mp4");
            xhr.onprogress = function (evt){
               if (evt.lengthComputable) {
                 var percentComplete = (evt.loaded / evt.total)*100;

                //  $('#progressbar').progressbar( "option", "value", percentComplete );
               }
            };
            xhr.onreadystatechange = () => {
              if(xhr.readyState === 4){
                if(xhr.status === 200){
                  _this.set('item.video_url', 'https://s3.amazonaws.com/shamar-videos/' + response.data.video.key + '.mp4');
                }
                else{
                  alert('Could not upload file.');
                }
              }
            };
            xhr.send(file);
          })
          .catch(function (response, jqXHR) {
            alert('Could not upload file.');
            console.log(response, jqXHR)
          });
    }
  }
});
