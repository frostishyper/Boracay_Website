document.addEventListener('DOMContentLoaded', () => {

    // Buttons For Redirects
    const homeBtn = document.getElementById('Home-Btn');
    homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
    });

    const LearnBtn = document.getElementById('Learn-Btn');
    LearnBtn.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Boracay', '_blank');
    });

    const RoomsBtn = document.getElementById('Rooms-Btn');
    RoomsBtn.addEventListener('click', () => {
    window.location.href = '#';
    });

    const ActivitiesBtn = document.getElementById('Activities-Btn');
    ActivitiesBtn.addEventListener('click', () => {
    window.location.href = '#';
    });

    const CuisineBtn = document.getElementById('Cuisine-Btn');
    CuisineBtn.addEventListener('click', () => {
    window.open('https://www.klook.com/en-PH/blog/food-guide-boracay/', '_blank');
    });

    const SpaBtn = document.getElementById('Spa-Btn');
    SpaBtn.addEventListener('click', () => {
    window.open('https://www.tripadvisor.com.ph/Attractions-g294260-Activities-c40-Boracay_Malay_Aklan_Province_Panay_Island_Visayas.html', '_blank');
    });

    const CafeBtn = document.getElementById('Cafe-Btn');
    CafeBtn.addEventListener('click', () => {
    window.open('https://www.tripadvisor.com.ph/Restaurants-g294260-c8-Boracay_Malay_Aklan_Province_Panay_Island_Visayas.html', '_blank');
    });

    const EventsBtn = document.getElementById('Events-Btn');
    EventsBtn.addEventListener('click', () => {
    window.open('https://web.facebook.com/groups/BoracayActivity/?_rdc=1&_rdr', '_blank');
    });

    const GithubBtn = document.getElementById('Link-Github');
    GithubBtn.addEventListener('click', () => {
    window.open('https://github.com/frostishyper/Boracay_Website', '_blank');
    });

    







    // Scrolling Reviews
    const ratingsScroller = document.querySelector('.Ratings-Scroller');
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
        isMouseDown = true;
        startX = e.pageX - ratingsScroller.offsetLeft;
        scrollLeft = ratingsScroller.scrollLeft;
    };

    const handleMouseLeave = () => {
        isMouseDown = false;
    };

    const handleMouseUp = () => {
        isMouseDown = false;
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - ratingsScroller.offsetLeft;
        const walk = (x - startX) * 2; 
        ratingsScroller.scrollLeft = scrollLeft - walk;
    };

    ratingsScroller.addEventListener('mousedown', handleMouseDown);
    ratingsScroller.addEventListener('mouseleave', handleMouseLeave);
    ratingsScroller.addEventListener('mouseup', handleMouseUp);
    ratingsScroller.addEventListener('mousemove', handleMouseMove);
});