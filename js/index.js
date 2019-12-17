$(function(){
    $('#super-easy-form').submit(function(e){
        e.preventDefault();
        var formdata = toJSONString(this);
        console.log(formdata);
        $.ajax({
            type: "POST",
            url: "https://5gtjl3amef.execute-api.us-east-1.amazonaws.com/deployment2019-05-22T06-12-27-870Z/",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify( { "id": "","name": $('#name').val(),"email": $('#email').val(),"message": $('#message').val() } ),
            beforeSend: function(data) {
                $('#super-easy-btn').prop('disabled', true);
                $('#super-easy-form :input').prop('disabled', true);
                $('#contact-status').html('Sending...').show();
            },
            success: function(data) {
                console.log(data);
                $('#contact-status').text("We'll get back to you soon").show();
                $('#super-easy-form :input').removeProp('disabled');
                $('#super-easy-btn').removeProp('disabled');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#contact-status').text('Error. Please try again soon.').show();
                $('#super-easy-form :input').removeProp('disabled');
                $('#super-easy-btn').removeProp('disabled');
            }
        });
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

    $('#super-easy-form-suggestion').submit(function(e){
        e.preventDefault();
        var formdata = toJSONString(this);
        console.log(formdata);
        $.ajax({
            type: "POST",
            url: "https://i7bicxy6nh.execute-api.us-east-1.amazonaws.com/deployment2019-05-23T04-18-48-494Z/",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify( { "id": "","message": $('#message').val() } ),
            beforeSend: function(data) {
                $('#super-easy-btn-suggestion').prop('disabled', true);
                $('#super-easy-form-suggestion :input').prop('disabled', true);
                $('#contact-status-suggestion').html('Sending...').show();
            },
            success: function(data) {
                console.log(data);
                $('#contact-status-suggestion').text("Thank you for the feedback").show();
                $('#super-easy-form-suggestion :input').removeProp('disabled');
                $('#super-easy-btn-suggestion').removeProp('disabled');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#contact-status-suggestion').text('Error. Please try again soon.').show();
                $('#super-easy-form-suggestion :input').removeProp('disabled');
                $('#super-easy-btn-suggestion').removeProp('disabled');
            }
        });
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