 
$( function() {

  			$("#tab1").hide();
    		$("#tab2").hide();
    		$("#tab3").hide();
    		$("#tab1").show();
    		$("#Home").addClass('active');
    		$("#Profile").removeClass('active');
    		$("#Messages").removeClass('active');

  $(".nav li a").click( function(){

    	if ($(this).attr('id') == "1") {
    		
    		$("#tab1").hide();
    		$("#tab2").hide();
    		$("#tab3").hide();
    		$("#tab1").show('slide', {direction: 'up'}, 1000);
    		$("#Home").addClass('active');
    		$("#Profile").removeClass('active');
    		$("#Messages").removeClass('active');
    	}else if ($(this).attr('id') == "2"){
    		
    		$("#tab1").hide();
    		$("#tab2").hide();
    		$("#tab3").hide();
    		$("#tab2").show('slide', {direction: 'up'}, 1000);
    		$("#Profile").addClass('active');
    		$("#Home").removeClass('active');
    		$("#Messages").removeClass('active');
    	}else if ($(this).attr('id') == "3"){
    		
    		$("#tab1").hide();
    		$("#tab2").hide();
    		$("#tab3").hide();
    		$("#tab3").show('slide', {direction: 'up'}, 1000);
    		$("#Messages").addClass('active');
    		$("#Home").removeClass('active');
    		$("#Profile").removeClass('active');
    
    	}
    })
    	
  } );