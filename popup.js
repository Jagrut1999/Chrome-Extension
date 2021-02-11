$(document).ready(function(){
    $("#add_button").click(function(){
      $("#add_button").hide();
      $("#myinput").show();

    });
    $("#print_button").click(function(){
      $("#add_button").show();
      var jd = $("#myinput").val();
        
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
        chrome.tabs.executeScript(null, {
          code : 'var config = ' + JSON.stringify(jd)  
        }, function(){
          chrome.tabs.executeScript(null, {
            file: 'inject.js'
          });
        });
        
      });
    
    
   // });
   $("#myinput").hide();
  
  });
  });