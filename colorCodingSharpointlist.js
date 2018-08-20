
var DateFieldTitle="Response Due Date";
var findingStatus = "Finding Status"
var ColumnIndex=null;
var ColumnIndexStatus = null;
var today=new Date();

  $(".ms-viewheadertr").children().each(function(index){
    $(this).find("a").find("img").remove();
    Title = $(this).find("a").html();
    if (Title==DateFieldTitle){
        ColumnIndex=index;
      }
    if(Title == findingStatus){
      ColumnIndexStatus=index;
    }
    });
    $('.ms-listviewtable').find('tr').each(function(){
      var status = $(this).find('td').eq(ColumnIndexStatus).html();
      console.log(status);
      var expiry = $(this).find('td').eq(ColumnIndex).find("span").html();
      if (expiry != undefined){
        var expiryDate = expiry.split('/');
        expiryDate = expiryDate[2]+"/"+expiryDate[1]+"/"+expiryDate[0];
        var DueDate = new Date(expiryDate);
        var dateDiff = Math.ceil((DueDate.getTime()-today.getTime())/(1000*60*60*24));
        if(status == "Closed"){
            $(this).css("background-color", "white");
        }else {
          if(dateDiff < 0){
            $(this).css("background-color", "red");
          }
        }

      }

    });
