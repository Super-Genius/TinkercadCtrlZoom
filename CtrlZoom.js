if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', CtrlZoom);
} else {
    CtrlZoom();
}

function CtrlZoom() {
    var Editor3DElement = document.getElementsByClassName("editor__holder");
    if (Editor3DElement.length > 0) {
        console.log(Editor3DElement);
        Editor3DElement[0].onmousewheel = function () {
            stopWheel();
        } /* IE7, IE8 */
        if (Editor3DElement[0].addEventListener) { /* Chrome, Safari, Firefox */
            Editor3DElement[0].addEventListener('wheel', stopWheel, capture = true);

        }
    } else {
        console.log("Class NOT Found!: editor__holder");

    }
}

//monitorEvents(window);

function stopWheel(e){
    if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
    if (!e.ctrlKey) {
        if(e.preventDefault) { e.preventDefault(); } /* Chrome, Safari, Firefox */
        e.returnValue = false; /* IE7, IE8 */
        e.stopPropagation();
    }
}

