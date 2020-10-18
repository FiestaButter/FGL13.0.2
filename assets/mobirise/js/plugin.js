$(document).ready(function () {
    'use strict';

    var userError = true,

        emailError = true;

    $('.form-control').blur(function () {

        if ($(this).val().length < 3) {

            $(this).css('border', '1px solid #f00');

            $(this).parent().find('.private-alert').fadeIn(200);

            $(this).parent().find('.asterisx').fadeIn(100);

            userError = true;

        } else {

            $(this).css('border', '1px solid #080');

            $(this).parent().find('.private-alert').fadeOut(200);

            $(this).parent().find('.asterisx').fadeOut(100);

            userError = false;
        }

    });

    $('.email').blur(function () {

        if ($(this).val() === '') {

            $(this).css('border', '1px solid #f00');

            $(this).parent().find('.private-alert').fadeIn(200);

            emailError = true;


        } else {

            $(this).css('border', '1px solid #080');

            $(this).parent().find('.private-alert').fadeOut(200);

            emailError = false;

        }

    });

    $('.contact-form').submit(function (e) {

        if (userError === true || emailError === true) {

            e.preventDefault();

            $('.form-control, .email').blur();

        }

    });
});
