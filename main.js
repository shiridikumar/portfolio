let pages = ["home", "about", "recognitions", "conferences", "talks", "projects", "students", "publications", "bio"]

function myFunction(x) {
    x.classList.toggle("change");
    var el = document.getElementById("menulist")
    console.log(el.style.width, el.style.maxHeight, "**********")
    if (el.style.width == "0px" || !(el.style.width)) {
        el.style.width = "fit-content";
        el.style.maxHeight = "500px";
        el.style.transition = "max-height 1s";
        el.style.display = "flex";
        el.style.flexDirection = "column";
    }
    else {
        el.style.width = "0px";
        el.style.maxHeight = "0px";
        el.style.transition = "max-height 1s";
        el.style.display = "flex";
        el.style.flexDirection = "column";

    }

}
function buttonclick(id) {
    for (var i = 0; i < pages.length; i++) {
        if (pages[i] != "home" && pages[i] != "about") {
            var el = document.getElementById(pages[i]);
            el.style.display = "none";
            console.log(pages[i], "*********")

            el.classList.remove("mystyle");
        }
    }
    var el = document.getElementById("home");
    el.style.display = "flex";
    el.classList.remove("mystyle");
    var el = document.getElementById("about");
    el.style.display = "flex";
    el.classList.remove("mystyle");
    var el = document.getElementById(id);
    el.classList.add("mystyle");
    var x=document.getElementById("navbutton");
    if(x.classList.value!="container1"){
        x.classList.toggle("change");
        var el = document.getElementById("menulist")
        el.style.width = "0px";
        el.style.maxHeight = "0px";
        el.style.transition = "max-height 1s";
        el.style.display = "flex";
        el.style.flexDirection = "column";
    }


}

function page(id) {
    for (var i = 0; i < pages.length; i++) {
        console.log(pages[i])
        if (pages[i] != id) {
            var el = document.getElementById(pages[i]);
            el.classList.remove("mystyle");
            el.style.display = "none";
        }
        else {
            var el = document.getElementById(pages[i]);
            el.classList.add("mystyle");
            el.style.display = "flex";
            // el.style.transitionDelay="2s";
        }
    }
    var x=document.getElementById("navbutton");
    x.classList.toggle("change");
    var el = document.getElementById("menulist")
    el.style.width = "0px";
    el.style.maxHeight = "0px";
    el.style.transition = "max-height 0.5s";
    el.style.display = "flex";
    el.style.flexDirection = "column";
}

