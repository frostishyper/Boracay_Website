document.addEventListener('DOMContentLoaded', () => {

    // Buttons For Redirects
    const homeBtn = document.getElementById('Home-Btn');
    homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
    });

    const GroupNav = document.getElementById('Group-Nav');
    GroupNav.addEventListener('click', () => {
    window.location.href = 'Group.html';
    });

    const contactsNav = document.getElementById('Contacts-Nav');
    contactsNav.addEventListener('click', () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });

    const LearnBtn = document.getElementById('Learn-Btn');
    LearnBtn.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Boracay', '_blank');
    });

    const HotelCrimson = document.getElementById('Hotel-Crimson');
    HotelCrimson.addEventListener('click', () => {
    window.open('https://www.crimsonhotel.com/boracay?gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59GwefnPl0QBQia5f1hplWAmlETYgIhj4TECMpsmU_r3OblAo2G_Iko_0aAq4ZEALw_wcB', '_blank');
    });

    const HotelBelmont = document.getElementById('Hotel-Belmont');
    HotelBelmont.addEventListener('click', () => {
    window.open('https://www.belmonthotelboracay.com/', '_blank');
    });


    const HotelAstoria = document.getElementById('Hotel-Astoria');
    HotelAstoria.addEventListener('click', () => {
    window.open('https://astoriaboracay.com/?gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59Gwf3DOt-It03iYa_U7M2vVW6XDl9qQgFLImN3EocLduj7WlXhM76wwQaAvD2EALw_wcB', '_blank');
    });

    const HotelAstoria1 = document.getElementById('Hotel-Astoria1');
    HotelAstoria1.addEventListener('click', () => {
    window.open('https://astoriaboracay.com/?gad_source=1&gclid=Cj0KCQjwk6SwBhDPARIsAJ59Gwf3DOt-It03iYa_U7M2vVW6XDl9qQgFLImN3EocLduj7WlXhM76wwQaAvD2EALw_wcB', '_blank');
    });

    const MoreHotelsBtn = document.getElementById('MoreRooms-Btn');
    MoreHotelsBtn.addEventListener('click', () => {
    window.open('https://www.agoda.com/city/boracay-island-ph.html?cid=1844104', '_blank');
    });

    const ActivitiesBtn = document.getElementById('Activities-Btn');
    ActivitiesBtn.addEventListener('click', () => {
    window.location.href = 'Activities.html';
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

    const FacebookBtn = document.getElementById('Link-Facebook');
    FacebookBtn.addEventListener('click', () => {
    window.open('https://web.facebook.com/profile.php?id=61550485739728', '_blank');
    });

    

    // Scrolling Reviews

    const ratingsScroller = document.querySelector('.Ratings-Scroller');
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    //If Left Mouse Button Is Being Held Down The Enables Scrolling
    const handleMouseDown = (e) => {
        isMouseDown = true;
        startX = e.pageX - ratingsScroller.offsetLeft;
        scrollLeft = ratingsScroller.scrollLeft;
    };

    //Detect If Left Mouse Button Is Held Or Not
    const handleMouseLeave = () => {
        isMouseDown = false;
    };

    const handleMouseUp = () => {
        isMouseDown = false;
    };


    //Scrolling Behavior
    //Also Prevents RubberBanding (ie reviews return to deafult position after scrollinga)
    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - ratingsScroller.offsetLeft;
        const walk = (x - startX) * 2; 
        ratingsScroller.scrollLeft = scrollLeft - walk;
    };

    //Event Listeners (ie watching out for certain events/actions)
    ratingsScroller.addEventListener('mousedown', handleMouseDown);
    ratingsScroller.addEventListener('mouseleave', handleMouseLeave);
    ratingsScroller.addEventListener('mouseup', handleMouseUp);
    ratingsScroller.addEventListener('mousemove', handleMouseMove);
});