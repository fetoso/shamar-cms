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
                  console.log(xhr);
                  alert('Could not upload file.');
                }
              }
            };
            xhr.send(file);


            // return _this.get('ajax')
            //   .request(response.data.signedRequest, {
            //     method: 'PUT',
            //     file: file,
            //     // headers: {
            //     //   Authorization: `JWT ${token}`
            //     // }
            //   })
            //   .then(function(response) {
            //     console.log('second response', response);
            //
            //   })
            //   .catch(function (response, jqXHR) {console.log('second catch', response, jqXHR)});
          })
          .catch(function (response, jqXHR) {console.log(response)});

        // readAs="readAsFile"
        console.log(file.name, file.type, file.size);
        // readAs="readAsArrayBuffer|readAsBinaryString|readAsDataURL|readAsText"
        console.log(file.name, file.type, file, file.size);
        // There is also file.filename for backward compatibility
    }
  }
});
