const points = document.querySelectorAll(".ctrl-select");
const items = document.querySelectorAll(".slide__info__title");

points.forEach((currentPoint, index) => {
    currentPoint.addEventListener("click", function (e) {
        e.preventDefault();

        points.forEach(item => item.classList.remove("active"))
        this.classList.add("active");

        items.forEach(item => item.classList.remove("active"))
        items[index].classList.add("active");
    });
});