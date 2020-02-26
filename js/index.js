$(function(){

    $('#super-easy-form-questions').submit(function(e){
        e.preventDefault();
        let captcha = grecaptcha.getResponse();
        if(captcha.length < 1){
            alert('please fill out the recaptcha')
        }
        else {
            $.ajax({
                type: "POST",
                url: "https://oel3xxvb3h.execute-api.us-east-1.amazonaws.com/DeploymentStage/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify( { "id": "","name": $('#name').val(),"email": $('#email').val(),"message": $('#message').val(), "captcha":captcha } ),
                beforeSend: function(data) {
                        $('#super-easy-btn-questions').prop('disabled', true);
                        $('#super-easy-form-questions :input').prop('disabled', true);
                        $('#contact-status-questions').html('Sending...').show();
                },
                success: function(data, status, jqXHR) {
                    console.log(data);
                    if(status === 'success'){
                        $('#contact-status-questions').text("We'll get back to you soon").show();
                        $('#super-easy-form-questions :input').removeProp('disabled');
                        $('#super-easy-btn-questions').removeProp('disabled');
                    }
                    else {
                        $('#contact-status-questions').text('Error. Please try again.').show();
                        $('#super-easy-form-questions :input').removeProp('disabled');
                        $('#super-easy-btn-questions').removeProp('disabled');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $('#contact-status-quetions').text('Error. Please check your network connection and try again.').show();
                    $('#super-easy-form-questions :input').removeProp('disabled');
                    $('#super-easy-btn-questions').removeProp('disabled');
                }
            });
        }
    }); 				

    $('#super-easy-form-register').submit(function(e){
        e.preventDefault();
        var formdata = toJSONString(this);
        console.log(formdata);
        $.ajax({
            type: "POST",
            url: "https://9wqrnmzlv0.execute-api.us-east-1.amazonaws.com/deployment2019-05-22T22-53-02-822Z/",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify( { "id": "","email": $('#email').val() } ),
            beforeSend: function(data) {
                $('#super-easy-btn-register').prop('disabled', true);
                $('#super-easy-form-register :input').prop('disabled', true);
                $('#contact-status-register').html('Sending...').show();
            },
            success: function(data) {
                console.log(data);
                $('#contact-status-register').text("We'll keep you posted").show();
                $('#super-easy-form-register :input').removeProp('disabled');
                $('#super-easy-btn-register').removeProp('disabled');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#contact-status-register').text('Error. Please try again soon.').show();
                $('#super-easy-form-register :input').removeProp('disabled');
                $('#super-easy-btn-register').removeProp('disabled');
            }
        });
    }); 

    $('#sefsuggestions-form').submit(function(e){
        e.preventDefault();
        let captcha = grecaptcha.getResponse();
        if(captcha.length < 1){
            alert('please fill out the recaptcha')
        }
        else {
            $.ajax({
                type: "POST",
                url: "https://bdy3silvfd.execute-api.us-east-1.amazonaws.com/DeploymentStage/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify( { "id": "","message": $('#message').val(), "captcha":captcha } ),
                beforeSend: function(data) {
                    $('#sefsuggestions-btn').prop('disabled', true);
                    $('#sefsuggestions-form :input').prop('disabled', true);
                    $('#sefsuggestions-status').html('Sending...').show();
                },
                success: function(data, status, jqXHR) {
                    console.log(data);
                    if(status === 'success'){
                        $('#sefsuggestions-status').text("We'll get back to you soon").show();
                        $('#sefsuggestions-form :input').removeProp('disabled');
                        $('#sefsuggestions-btn').removeProp('disabled');
                    }
                    else {
                        $('#sefsuggestions-status').text('Error. Please try again.').show();
                        $('#sefsuggestions-form :input').removeProp('disabled');
                        $('#sefsuggestions-btn').removeProp('disabled');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $('#sefsuggestions-status').text('Error. Please check your network connection and try again.').show();
                    $('#sefsuggestions-form :input').removeProp('disabled');
                    $('#sefsuggestions-btn').removeProp('disabled');
                }
            });
        }
    }); 				

    function toJSONString (form) {
    var obj = {};
    var elements = form.querySelectorAll("input, select, textarea");
    for(var i = 0; i < elements.length; ++i) {
      var element = elements[i];
      var name = element.name;
      var value = element.value;
      if(name) {
        obj[name] = value;
      }
        }
        return JSON.stringify(obj);
    }
});