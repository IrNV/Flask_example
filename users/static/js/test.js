/**
 * Created by 1 on 18.05.2018.
 */
$(document).ready(function () {
    // alert("Page is loaded")
    $( 'body' ).on( 'click', 'p', function () {
        // alert($(this).text())
        $.ajax({
            type: "GET",
            url:"http://127.0.0.1:5000/users/click/"+$(this).text(),
        });
    });
}
)
