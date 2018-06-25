/*------------------------------------------
 Contact form
 ------------------------------------------*/

$(document).ready(function () {

    $("#contactform").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postArray 		= $(this).serializeArray(), 
            formURL 		= "http://TODO: put node on the box/email/send";

        var postData = {};
        try {
            postArray.forEach( function (a) { 
                postData[a.name] = a.value || "[empty]";
            })
        } catch (e) {
            
            // message for developer
            let actualError = "FRONT END: " + JSON.stringify(e);
            let line = '<br/>-------------------------------------------<br/>';
            let attemptedPostObject = "Attempted Post Object: " + JSON.stringify(postData); //TODO: ask if this is okay for developer to see
            let msgForDev = "Message For Developer: " + line + "<br/>  " + actualError + "<br/><br/>" + attemptedPostObject;
            
            // email for admin
            postData = {
                "name":"jeongandassociates.com",
                "email": "TODO: edit on box@email.com",
                "subject": "Customer Email Failed",
                "comments": `Someone tried to email you on your website and something went wrong, <br/>
                             If you are seeing this message, you will not be receiving emails until this is resolved ㅠㅠ <br/>
                             Please forward this email to 'TODO: edit on box @email.com' or call me at (###) ### - ####. <br/>
                             <br/>` + line + msgForDev
            }
        }
        
        $.ajax(
            {
                url : postData,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $("#contactform")[0].reset();
                },
                error: function(data)
                {
                    // message for user      
                    // TODO: change verbiage
                    alert("Error occurred! Please try again!");
                    
                    // TODO: Write log file when you put node on the box
                }
            });

        return false;

    });



});
