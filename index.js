

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");


    prevButton.addEventListener("click",getImage)
    nextButton.addEventListener("click",getImage)


    nextButton.addEventListener("click", () => {
        const slideWidth = slide;
        slidesContainer.scrollLeft += slideWidth;
      });
      
      prevButton.addEventListener("click", () => {
      
        const slideWidth = slide;
      
        slidesContainer.scrollLeft -= slideWidth;
      
      });
      


function getImage(){

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        console.log(data.message)
        document.querySelector(".slide1").src = data.message
    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
    })

}






