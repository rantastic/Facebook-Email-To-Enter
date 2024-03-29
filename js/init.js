$(document).ready(function(){
	$('#errorModal').modal({show:false});
	$('#closeButton').click(function(){$('#errorModal').modal('hide');});

	$("#email").keyup(function(event){
		if(event.keyCode == 13){
			$("#emSub").click();
		}
	});

	$("#emSub").click(function(){
		//button.js from bootstrap doesn't really work properly...
		var button = $(this);
		button.html('...');
		button.attr('disabled','disabled');
		
		
		$.post('email.php', {email:$('input#email').val()},
			function(data){
				if(data.success){
					$('#theForm').html(data.message);
				}
				else{
					$('#errorDesc').html(data.message);
					$('#errorModal').modal('show');
					button.html('Submit');
					button.removeAttr('disabled');
				}
			},
		'json');
		return false;
	});

});