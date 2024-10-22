const imagEl = document.querySelector('img')

const textEl = document.querySelector('p');





const testimonial = [
    {
        img: 'first.jpg',
        text: 'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
    },
    {
        img: 'second.jpg',
        text: 'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
    },
    {
        img: 'third.jpg',
        text: 'Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.',
    },
    {
        img: 'fourth.jpg',
        text: 'It was a pleasure working with you and your team. We were very happy with the new camera. I would highly recommend it to everyone.',
    }
];

const { img, text } = testimonial[0];
console.log(img, text);


let currentIndex = 0;

function changeTestimonial() {
    const { img, text } = testimonial[currentIndex];
    imagEl.src = `public/images/${img}`;
    textEl.innerHTML = text;
    currentIndex++;
    if (currentIndex === testimonial.length) {
        currentIndex = 0;
    }
}
setInterval(changeTestimonial, 3000)
