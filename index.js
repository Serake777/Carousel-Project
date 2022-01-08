const images = document.getElementsByClassName("carousel-item")
let imagePosition = 0
const totalImages = images.length
const nextBtn  = document.getElementById("carousel-button-next").addEventListener("click", moveToNextImage)
const prevBtn  = document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevImage)

function moveToNextImage() {
    hideImages()
        if (imagePosition === totalImages -1) {
            imagePosition = 0
        } else {
            imagePosition++
        }
        images[imagePosition].classList.add("carousel-item-visible")
    }

function moveToPrevImage() {
    hideImages()
        if (imagePosition === 0) {
            imagePosition = totalImages -1
        } else {
            imagePosition--
        }
        images[imagePosition].classList.add("carousel-item-visible")
    }
    
function hideImages(){
    for (let image of images) {
        image.classList.remove("carousel-item-visible")
        image.classList.add("carousel-item-hidden")
    }
}
    



