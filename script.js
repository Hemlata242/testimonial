const testimonials = [
  {
    name: "Amrita",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmWsfr39RDTeNxRc1oZ35xpbY8FI5Qotjzw&s",
    text: "This management session helped me become a better leader, improve my communication with employees, build relationships and be more productive within my team",
  },
  {
    name: "Rahul",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVt_gBjH_MEj9TqPoZ7YdKdOL1VVW0ZQYugw&s",
    text: "I would also like to say thank you to all your coaches. Wow what great skills they have, I love it!NSA impressed me on multiple levels.",
  },
  {
    name: "Nikita Sarkar",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVrIew4wGdw5mK6gL--VNgWtcavnDjErVzg&s",
    text: "The Course Director was absolutely excellent! He made statistics easy to understand and even fun and exciting! His depth of knowledge coupled with his teaching ...",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}