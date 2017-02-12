// Code for application logic goes here
// $(document).ready(function() {
//  $("button").click (function (){
//  	$("#button2").hide();
//  	});
//  	});
 	
 setInterval(function() {
    var date = new Date();
    var cuttime =  date.getHours() + ":" + date.getMinutes() ;
    $('#clock-wrapper').html(cuttime);
    
  $(".btntosetalrm").click(function(){
     var alRmTime = $(".getalarmtime").val();  
     if(alRmTime){
     $('.aumkar').html(alRmTime);
     $(".alrm-main").css("display","none");
     $(".when-alrm-ring").css("display","block");
     }
        
     else{
     return false;
     }
     });
          var awesome = $(".aumkar").html();  
        
    if(awesome == cuttime){
    
    }
    
}, 500);

   