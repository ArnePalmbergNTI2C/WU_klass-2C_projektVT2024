// meny
const burger = document.getElementById('burger')
const linkList = document.getElementById('ul_header')

function toggleMenu() {
    linkList.classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)

//bildspel

const arrowLeft = document.getElementById('arrow_left')
const arrowRight = document.getElementById('arrow_right')

var imgGalleryImgSources = ["img/bildspel/1..jpg", "img/bildspel/2..jpg", "img/bildspel/3..jpg", "img/bildspel/4..jpg", "img/bildspel/5..jpg"]
var imgGalleryIndex = 0

function newImageRight() {
    if (imgGalleryIndex == imgGalleryImgSources.length - 1) {imgGalleryIndex = 0}
    else {imgGalleryIndex = imgGalleryIndex + 1}
    document.getElementById('bildspel_bilderna').src = imgGalleryImgSources[imgGalleryIndex]
}

function newImageLeft() {
    if (imgGalleryIndex == 0) {imgGalleryIndex = imgGalleryImgSources.length - 1}
    else {imgGalleryIndex = imgGalleryIndex - 1}
    document.getElementById('bildspel_bilderna').src = imgGalleryImgSources[imgGalleryIndex]
}

arrowLeft.addEventListener('click', newImageLeft)
arrowRight.addEventListener('click', newImageRight)

// knapp

const knapp = document.getElementById('knapp')
var index = 0
var img = ["img/person_1.jpg", "img/person_2.jpg", "img/person_3.jpg", "img/person_4.jpg", "img/person_5.jpg", "img/person_6.jpg", "img/person_7.jpg", "img/person_8.jpg"]

function randomo() {
    index = Math.floor(Math.random() * 8)
    document.getElementById('random_bilder').src = img[index]
}

knapp.addEventListener('click', randomo)

