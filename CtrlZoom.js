
// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
    // `mutations` is an array of mutations that occurred
    // `me` is the MutationObserver instance
    var Editor3DElement = document.getElementsByClassName("editor-3d-container");
    if (Editor3DElement.length > 0) {
        console.log(Editor3DElement);
        Editor3DElement[0].onmousewheel = function () {
            stopWheel();
        } /* IE7, IE8 */
        if (Editor3DElement[0].addEventListener) { /* Chrome, Safari, Firefox */
            Editor3DElement[0].addEventListener('wheel', stopWheel, capture = true);

        }
        console.log("editor-3d-container class found");
        me.disconnect(); // stop observing
    }
    return;
});

function stopWheel(e){
    if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
    if (!e.ctrlKey) {
        if(e.preventDefault) { e.preventDefault(); } /* Chrome, Safari, Firefox */
        e.returnValue = false; /* IE7, IE8 */
        e.stopPropagation();
    }
}

console.log("adding observer to document")

// start observing
observer.observe(document, {
    childList: true,
    subtree: true
});