function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.383171, lng: 8.528357 },
        zoom: 13, 
        styles: [
            {
                featureType: "all",
                elementType: "all",
                stylers: [
                    { saturation: -100 },
                    { lightness: 50 }
                ]
            }
        ]
    });
}

const inputs = document.querySelectorAll(".images-slide input");
const dots = document.querySelectorAll(".dots label");


inputs.forEach((input, index) => {
    input.addEventListener("click", () => {
        dots.forEach(dot => {
            dot.style.width = "8px";
            dot.style.borderRadius = "50%";
            dot.style.backgroundColor = "hsla(232, 100%, 70%, 0.74)";
            dot.style.marginLeft = "3px";
            dot.style.marginRight = "3px";
        });
        dots[index].style.width = "16px";
        dots[index].style.borderRadius = "30%";
        dots[index].style.backgroundColor = "#4762FF";
        dots[index].style.marginLeft = "8px";
        dots[index].style.marginRight = "8px";
    });
});

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});