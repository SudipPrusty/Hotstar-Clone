let movies = [
    {
        name: "falcon and the winter soldier",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exc",
        image: "images/slider 2. png"
    },
    {
        name: "loki",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exce",
        image: "Images/slider 1. png"
    },
    {
        name: "wanda vision",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exce",
        image: "images/slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exce",
        image: "images/slider 4.png"
    },
    {
        name: "luca",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exce",
        image: "images/slider 5.png"
    }
];

const carousel=document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;     //track the current slide

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    //create DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //getting up the images
    imgElement.src=movies[slideIndex].image;
    slideIndex++

    //setting elements classnames
    slide.className="slider";
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);

    if(slide.length){
        sliders[0].style.marginLeft = 'calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)';
    }
};