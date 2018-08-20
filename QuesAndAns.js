var answers =["a. Monthly","b. False","b. Raw vegetable sprouts","a. Negotiate and accept the item if possible","a. True"]
var count = 0;
var prevQuesNo = 0;
$("td>.ms-RadioText>input").click(function(){
debugger;
var question = $(this).parent().parent().parent().parent().parent().parent().parent().parent().children("td:nth-child(1)").text().trim();
var answer = $(this).parent().text().trim();
var questionNo = question[0];
if(prevQuesNo != questionNo){
prevQuesNo = questionNo ;
count = 0;
}
switch (questionNo) {
    case "1":
        if(answer != answers[0]){
          if(count == 0){
          $(this).parent().parent().parent().parent().parent().parent().after( "<p id='worngAns1' style = 'color:red'>Wrong Answer</p>" );
          count++
          }
        }else{
          $("#worngAns"+questionNo+"").hide();
          count = 0;
          prevQuesNo = 0;
        }
        break;
    case "2":
       if(answer != answers[1]){
         if(count == 0){
         $(this).parent().parent().parent().parent().parent().parent().after( "<p id='worngAns2' style = 'color:red'>Wrong Answer</p>" );
         count++
         }
        }else{
          $("#worngAns"+questionNo+"").hide();
          count = 0;
          prevQuesNo = 0;
        }
        break;
    case "3":
        if(answer != answers[2]){
          if(count == 0){
          $(this).parent().parent().parent().parent().parent().parent().after( "<p id='worngAns3' style = 'color:red'>Wrong Answer</p>" );
          count++
          }
        }else{
          $("#worngAns"+questionNo+"").hide();
          count = 0;
          prevQuesNo = 0;
        }
        break;
    case "4":
        if(answer != answers[3]){
          if(count == 0){
          $(this).parent().parent().parent().parent().parent().parent().after( "<p id='worngAns4' style = 'color:red'>Wrong Answer</p>" );
          count++
          }
        }else{
          $("#worngAns"+questionNo+"").hide();
          count = 0;
          prevQuesNo = 0;
        }
        break;
    case "5*":
        if(answer != answers[4]){
          if(count == 0){
          $(this).parent().parent().parent().parent().parent().parent().after( "<p id='worngAns5' style = 'color:red'>Wrong Answer</p>" );
          count++
          }
        }else{
          $("#worngAns"+questionNo+"").hide();
          count = 0;
          prevQuesNo = 0;
        }
    	break;
}

});
