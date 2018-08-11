$(document).ready(function() {

    $("#inputBox").submit(function(event) {
      var nameInput = $("input#studentName").val();
      var emailInput= $("input#email").val();
	  var studentGender=$("#gender").val();
	  var studentLocation=$("#local").val();
	  
	  //alert("studentGender"+studentGender)
	  if(studentGender==="male"){
		   $("#genderMale").show(); 
		
	  }else{
		  $("#genderFemale").show(); 
	  }
	  
	  if(studentLocation==="seattle"){
		   $("#locationsettle").show(); 
		
	  }else{
		  $("#locationportland").show(); 
	  }
	  
	  

      $(".nameReturn").text(nameInput);
      $(".emailReturn").text(emailInput);
	  $(".GenderReturn").text(studentGender);
	  
		
		
		//for the answer , We need to calculate the score of 4 languages which 
		//the user goto,delear 4 vales 
		var scoreOfJava=0;
		var scoreOfCsharp=0;
		var scoreOfCss=0;
		var scoreOfRuby=0;
		
		event.preventDefault(); 
			$("#suggestion").show(); 
			$(".recommendForStudnet").show(); 
			$("#trackQueston").hide(); 

		
		//delear  four values of suestion 
		var valueOfQuestion_1 = $("input:radio[name=answerForQ1]:checked").val();
		var valueOfQuestion_2 = $("input:radio[name=answerForQ2]:checked").val();
		var valueOfQuestion_3 = $("input:radio[name=answerForQ3]:checked").val();
		var valueOfQuestion_4 = $("input:radio[name=answerForQ4]:checked").val();
		
		
				if(nameInput.length == 0||
				valueOfQuestion_1.length == 0||
				valueOfQuestion_2.length == 0||
				valueOfQuestion_3.length == 0||
				valueOfQuestion_4.length == 0){
				alert("please enter your info")
				//location.reload();
				//break;
				}
      
		
		
		//the value of Q1
		if(valueOfQuestion_1==="0"){
			scoreOfCss +=1;

		} else if(valueOfQuestion_1==="1"){
			scoreOfJava +=2;
			scoreOfCsharp +=2;
		}
		
		//the value of Q2
		if(valueOfQuestion_2==="1"){
			scoreOfJava +=3;
			scoreOfCsharp +=3;
			
	
		}else if(valueOfQuestion_2==="2"){
			scoreOfCss +=2;
		}else if(valueOfQuestion_2==="3"){
			scoreOfCss +=2;
		}
		
		//the value of Q3
		if(valueOfQuestion_3==="1"){
			scoreOfJava +=5;
		} else if (valueOfQuestion_3==="2"){
			scoreOfCss +=4;
		}else if(valueOfQuestion_3==="3"){
			scoreOfJava +=4;
			scoreOfCsharp +=4;
		}
		//the value of Q4
		if(valueOfQuestion_4==="1"){
			scoreOfJava +=3;
			scoreOfCsharp +=3;
		} else if (valueOfQuestion_4==="2"||valueOfQuestion_4==="3"){
			scoreOfCss +=3;
		}
		
		
		
		 // alert("scoreOfJava:"+scoreOfJava);
		 // alert("scoreOfCsharp:"+scoreOfCsharp);
		 // alert("scoreOfCss:"+scoreOfCss);
		
		var max = Math.max(scoreOfJava, scoreOfCsharp, scoreOfCss);
		//alert("MAX=:"+max);
		
		if(scoreOfJava==max){
			$("#suggestionOfJava").show(); 
			
		}
		
		if(scoreOfCsharp==max){
			$("#suggestionOfCsharp").show(); 
			
		}
		if(scoreOfCss==max){
			$("#suggestionOfCss").show(); 
			
		}
		//try again
			$("#tryAgain").click(function(){
			location.reload();
			});

		
  })
   })





