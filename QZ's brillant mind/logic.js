var x = "available" ;

$(document).ready(function(){
    var data = '#status'


    if (x ==  "full")
        $(data).removeClass("nothing").addClass("status-full");

    else if (x == "available")
        $(data).removeClass("nothing").addClass("status-available");
    
    else if (x == "current")
        $(data).removeClass("nothing").addClass("status-currentNode");


}); 


// To enable CORS in firefox

/* 

1) Open Firefox, and on the address bar, type about:config.

2) Click on I'll be careful,I promise!".

3) Search for security.fileuri.strict_origin_policy.

4) Right-click and select Toggle to change the value from true to false.

5) Close the browser and launch it again. */