
// ----------------------------- Fade welcome message START
// function removeElement(target) {
//     target.animate({
//         opacity: "0",
//         padding: "0",
//         fontSize: "30px"
//     }, 2000, function() {
//         target.remove();
//     });
// }

// removeElement($("#intro"));
// ------------------------------ Fade welcome message END


// ----------------------------- arrow animation for dropdown START
$(".arrow-dropdown").click(element => {
    // grab element
    const el = $(element.target);

    // toggle classes
    if (el.hasClass("fa-angle-down")) {
        el.removeClass("fa-angle-down").addClass( "fa-angle-up" );
    } else {
        el.removeClass("fa-angle-up").addClass( "fa-angle-down" );
    }
})
// ----------------------------- arrow animation for dropdown END

