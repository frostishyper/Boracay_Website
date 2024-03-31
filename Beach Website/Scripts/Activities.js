//Wait For Document/Page To Fully Load Before Initiating JS
document.addEventListener('DOMContentLoaded', function() {

    //Buttons For Redirects/Links
    const HomeButtons = document.querySelectorAll('#Home-Btn');
    HomeButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'Index.html';
        });
    });

    const ParasailBtn = document.getElementById('Parasail-Btn');
    ParasailBtn.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Parasailing', '_blank');
    });

    const PaddleBtn = document.getElementById('Paddle-Btn');
    PaddleBtn.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Paddleboarding', '_blank');
    });

    const ScubaBtn = document.getElementById('Scuba-Btn');
    ScubaBtn.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Scuba_diving', '_blank');
    });

    const CanoeingBtn = document.getElementById('Canoeing-Btn');
    CanoeingBtn.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Canoeing', '_blank');
    });

    const JetskiingBtn = document.getElementById('Jetskiing-Btn');
    JetskiingBtn.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Jet_Ski', '_blank');
    });

    //This Point On is For The Slider Functions
    //Gets Elements From The HTML Document

    let nextDom = document.getElementById('Forward');
    let prevDom = document.getElementById('Backward');
    let carouselDom = document.querySelector('.Carousel');
    let activitiesDom = document.querySelector('.Carousel .Activities');
    let thumbnailDom = document.querySelector('.Carousel .Thumbnail');


    //On Click Events For Forward And Backward Button
    nextDom.onclick = function() {
        showSlider('Next')
    }
    prevDom.onclick = function(){
        showSlider('Prev');
    }

    //Timer 
    let timeRunning = 3000; //Three Seconds
    let runTimeout;

    //Function
    function showSlider(type){
        let ActivitiesSlider = document.querySelectorAll('.Carousel .Activities .Activity'); //Gets The Activity Slides
        let ActivitiesThumbnail = document.querySelectorAll('.Carousel .Thumbnail .Item'); //Gets The Thumbnails

        //When Forward Is Clicked
        if(type === 'Next'){
            activitiesDom.appendChild(ActivitiesSlider[0]); //Puts the next slide forward
            thumbnailDom.appendChild(ActivitiesThumbnail[0]); //Puts the next thumbnail forward
            carouselDom.classList.add('Next'); //Adds Animation Class For The 'Next' Animation
        }
        
        //When Backward Is Clicked
        else{
            let positionLastItem = ActivitiesSlider.length - 1;
            activitiesDom.prepend(ActivitiesSlider[positionLastItem]); // Puts The Last Slide Forward
            thumbnailDom.prepend(ActivitiesThumbnail[positionLastItem]); // Puts The Last Thumbnail Forward
            carouselDom.classList.add('Prev'); // Adds Animation Class For The 'Back' Animation
        }


        //Removes Animation Class After The Three Seconds
        clearTimeout(runTimeout);
        runTimeout = setTimeout(() =>{
            carouselDom.classList.remove('Next');
            carouselDom.classList.remove('Prev');
        }, timeRunning)
    }

});