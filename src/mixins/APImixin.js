var React = require('react');

module.exports = {
  
  getApi: function(url, callback) {
    $.ajax({ 
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(data) {        
        callback(null, data);
      },
      error: function(request, status, error) {
        callback(error, null);          
      }
    });
      
  },
  postApi: function(url, parameters, callback) {
    $.ajax({ 
      url: url,
      type: 'POST',
      data: parameters,
      success: function(data) {
        callback(null, data);
      },
      error: function(request, status, error) {
        callback(error, null);
      }
    });
      
  }
};
