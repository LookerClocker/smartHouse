$(document).ready(function () {
    var consoleEvent = $('#console-event'),
        checkbox = $('#toggle-event'),
        holder = checkbox.parent();
    consoleEvent2 = $('#console-event2');
    imgId = $('#img');
    checkbox.change(function () {
        if (checkbox[0].checked) holder.removeClass('off');
        else holder.addClass('off');

        consoleEvent.css('display', checkbox[0].checked ? 'block' : 'none');
        consoleEvent2.css('display', checkbox[0].checked ? 'none' : 'block');
        imgId.css('position', 'relative');
        imgId.css('height', '40px');
        imgId.css('bottom', '5px');
        setTimeout(function () {
            imgId.css('height', '100px');
            imgId.css('position', 'absolute');
            imgId.css('bottom', '-64px');
            imgId.css('left', '21%');
            setTimeout(function () {
                holder.removeClass('off');
                consoleEvent.css('display', 'block');
                consoleEvent2.css('display', 'none');
                imgId.css('position', 'relative');
                imgId.css('height', '40px');
                imgId.css('bottom', '5px');
            }, 2000);
        }, 5000);
       
    }).change();
});


