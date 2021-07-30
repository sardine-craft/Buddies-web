var scrollbar = document.getElementById("slidey-thing");
var iframe = document.getElementById("displayPageContent");

function resizeIframe () {
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

    var iframe = document.getElementById("displayPageContent");
    iframe.height = height + "px";
}

resizeIframe();

function navigate (newSource) {
    let previousSource = iframe.getAttribute("src");
    console.log(previousSource);
    iframe.removeAttribute(previousSource);
}