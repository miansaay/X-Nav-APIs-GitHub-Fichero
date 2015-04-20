

$(document).ready(function() { 

   var mytoken = $("#token").val();
   console.log(token);
   var github = new Github({
     token: mytoken,
     auth: "oauth"
   });

   

});
