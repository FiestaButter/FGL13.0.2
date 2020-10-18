$(document).ready(function(){

	var validator = $("#contactform").validate({
		errorClass:'has-error',
		validClass:'has-success',
		errorElement:'div',
		highlight: function (element, errorClass, validClass) {
			$(element).closest('.form-control').addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).parents(".has-error").removeClass(errorClass).addClass(validClass);
		},
		rules: {
			contactname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phoneUS: true
			},
			subject: {
				required: true
			},
			message: {
				required: true,
				minlength: 6
			}
		},
		messages: {
			contactname: {
				required: '<span class="help-block">Please enter your name.</span>',
				minlength: jQuery.format('<span class="help-block">Your name needs to be at least 2 characters.</span>')
			},
			email: {
				required: '<span class="help-block">Please enter a valid email address.</span>',
				minlength: '<span class="help-block">Please enter a valid email address.</span>'
			},
			phone: {
				required: '<span class="help-block">You need to enter your phone number.</span>',
				phoneUS: jQuery.format('<span class="help-block">You need to enter a valid phone number.</span>')
			},
			subject: {
				required: '<span class="help-block">You need to enter a subject.</span>'
			},
			message: {
				required: '<span class="help-block">You need to enter a message.</span>',
				minlength: jQuery.format('<span class="help-block">Enter at least 6 characters.</span>')
			}
		}
	});
});
