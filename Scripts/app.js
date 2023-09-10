let Share = document.getElementsByClassName("Share");
let here = document.getElementById("here")

Array.from(Share).forEach(Element => {
    Element.addEventListener('click', () => {
        if (here.classList.contains("active")){
            here.classList.toggle("active");
        } else {
            Array.from(Share).forEach((here) => here.classList.remove("active"));
            here.classList.add("active");
        }
    });
});

