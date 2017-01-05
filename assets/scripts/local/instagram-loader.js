(function($) {

	

	$(document).ready(function() { 

		var igConfig = {
			token: '199450205.2b60c7a.6b0b48cc37214274b29cf851cfdb3308',
			userid: 'self',
			count: 10
		};

	    $.ajax({
	      url: 'https://api.instagram.com/v1/users/' + igConfig.userid + '/media/recent', // or /users/self/media/recent for Sandbox
	      dataType: 'jsonp',
	      type: 'GET',
	      data: {access_token: igConfig.token, count: igConfig.count},
	      success: function(data){
	          console.log(data);
	          var wrapper = $('#instagramWrapper');
	          wrapper.append('<ul id="instagram">');
	          for( x in data.data ){
	            wrapper.children()
	              .append('<li><a href="' + data.data[x].link + '" target="_blank">'
	              	+ '<img src="' + data.data[x].images.low_resolution.url+'"></a>'
	              	//+ '<p>' + data.data[x].caption.text + '</p>'
	              	+ '</li>'); 
	            // data.data[x].images.low_resolution.url - URL of image, 306х306
	            // data.data[x].images.thumbnail.url - URL of image 150х150
	            // data.data[x].images.standard_resolution.url - URL of image 612х612
	            // data.data[x].link - Instagram post URL 
	          }
	        },
	        error: function(data){
	          console.log(data); // send the error notifications to console
	        }
	      });

	});
	

})(jQuery);