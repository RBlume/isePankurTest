jQuery(document).ready(function($) {
    $("#button_submit").click(function() {
        var x = $("#email").val();
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length)
        {
            $("#email_invalid").show();
        }
        else {
            $("#email_invalid").hide();
            location.href="https://www.isepankur.ee/";
        }
    });
    $("#clickable_terms").click(function() {
        window.open('tos.html', '_blank', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=600');
    });
});

