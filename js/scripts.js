$(document).ready(function() {

    $("#inputBox").submit(function(event) {
      var nameInput = $("input#studentName").val();
      var emailInput= $("input#email").val();

      $(".nameReturn").text(nameInput);
      $(".emailReturn").text(emailInput);		
		alert("begin");
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

		
		//this is the 1st value of Question 1 
		var valueOfQuestion_1 = $("input:radio[name=answerForQ1]:checked").val();
		var valueOfQuestion_2 = $("input:radio[name=answerForQ2]:checked").val();
		var valueOfQuestion_3 = $("input:radio[name=answerForQ3]:checked").val();
		var valueOfQuestion_4 = $("input:radio[name=answerForQ4]:checked").val();
		
		if(valueOfQuestion_1==="0"){
			scoreOfJava +=1;
			scoreOfCsharp +=1;
			scoreOfCss +=1;

		} else{
			scoreOfJava +=2;
			scoreOfCsharp +=2;
		
		}
		//question 2
		if(valueOfQuestion_2==="1"){
			scoreOfJava +=1;
			scoreOfCsharp +=1;
			scoreOfCss +=1;
	
		} else{
			scoreOfJava +=2;
			scoreOfCsharp +=2;
		}
		
		
		//question 3
		if(valueOfQuestion_3==="3"){
			scoreOfJava +=1;
			
		
			
		} else{
			scoreOfJava +=2;
			scoreOfCsharp +=2;
		}
		//question 4
		if(valueOfQuestion_4==="2"){
			
			scoreOfCss +=100;
		
			
		} else{
			scoreOfJava +=2;
			scoreOfCsharp +=2;

		}
		
		
		var max = Math.max(scoreOfJava, scoreOfCsharp, scoreOfCss);
		
		if(scoreOfJava=max){
			
			$("#recommendForStudnet").show(); 
			
		}
		
		if(scoreOfCsharp=max){
			$("#suggestionOfCsharp").show(); 
			
		}
		if(scoreOfCss=max){
			$("#suggestionOfCss").show(); 
			
		}
		

		
  })
   })





