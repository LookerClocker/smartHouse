$(document).ready(function () {

    function Metro() {
        var ifPassed = 0;
        $.when($(function () {
            if ($('#bodyClock').hasClass('evening')) {

                ifPassed = 1;

                $('#bodyClock').removeClass('evening');
                $('#bodyClock').addClass('midningh2');
                $('#bodyClock').fadeIn(1000, function () {
                    $('#bodyClock').delay(8000);
                    $('#bodyClock').fadeOut(1000);
                });

            }
            else {

                $('#bodyClock').addClass('midningh2');
                $('#bodyClock').delay(8000);
                $('#bodyClock').fadeOut(1000);

            }
        })).then(

            $(function () {

                if (ifPassed == 1) {
                    var intervalMS = 10000;
                }
                else {
                    var intervalMS = 9000;
                }

                setTimeout(function () {

                    $('#bodyClock').removeClass('midningh2');
                    $('#bodyClock').addClass('morning');
                    $('#bodyClock').fadeIn(1000, function () {
                        $('#bodyClock').delay(8000);
                        $('#bodyClock').fadeOut(1000);

                    });

                }, intervalMS);

            })).then(

            $(function () {

                if (ifPassed == 1) {
                    var tenTimeout = 20000;
                }
                else {
                    var tenTimeout = 19000;
                }

                setTimeout(function () {

                    $('#bodyClock').removeClass('morning');
                    $('#bodyClock').addClass('midday');
                    $('#bodyClock').fadeIn(1000, function () {
                        $('#bodyClock').delay(8000);
                        $('#bodyClock').fadeOut(1000);

                    });

                }, tenTimeout);

            })).then(

            $(function () {

                if (ifPassed == 1) {
                    var fifteenTimeout = 30000;
                }
                else {
                    var fifteenTimeout = 29000;
                }

                setTimeout(function () {

                    $('#bodyClock').removeClass('midday');
                    $('#bodyClock').addClass('evening');
                    $('#bodyClock').fadeIn(1000, function () {
                        $('#bodyClock').delay(8000);
                        $('#bodyClock').fadeOut(1000, function () {
                            $('#bodyClock').addClass('evening');
                            Metro();

                        });

                    });

                }, fifteenTimeout);

            }));
    }
    Metro();
});