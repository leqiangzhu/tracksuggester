$(document).ready(function() {

    $("#inputBox").submit(function(event) {
      var nameInput = $("input#studentName").val();
      var addressInput = $("input#address").val();
      var emailInput= $("input#email").val();
      var phoneInput = $("input#phoneNumber").val();
      var divName = nameInput.concat(phoneInput);

      $(".nameReturn").text(nameInput);
      $(".addressReturn").text(addressInput);
      $(".emailReturn").text(emailInput);
      $(".phoneReturn").text(phoneInput);

	  var sub
	  
	  
	  
	  
	  
	  
	  
	  
      //Error message
       // if (nameInput.length != 0 && 
		//	addressInput.length != 0 &&
       ///     emailInput.length != 0 && 
		//	phoneInput.length != 0) 
		//{
			event.preventDefault(); 
				//$("#errorMessage").hide();
			$("#suggestion").show();   
			//} else {
            $("#createdContact").show(); 
			
         //    alert("Please enter valid information.")
           
					 $("#trackQueston").hide(); 

  })
   })
  
						//$("#suggestion").click(function() {
						//$(this).children("p").fadeToggle()
						//});

					//$("button#submit").click(function() {
					//$("#createdContact").after(createdContact);
					//})
				//	$(”#createdContact“).html("<div>nameReturn</div>");
					
					




















