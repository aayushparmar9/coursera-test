// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

       var ques=document.getElementById("ques").value;
        
        // Call server to get the name
        if(ques==="Question 1"){
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = res.Question1;
              message+= "Your answer is";
              message+= res.Answer1+"<br>"; 
             }
                          
            
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
elseif(ques==="Question2"){
$ajaxutils
.sendGetRequest("name.json",
function(res){
var message="Your answer is";
message+=res.Answer2;
}
document.querySelector("#content")
 .innerHTML="<h2>" + message + "</h2>";
    });

 
 });

}

);



