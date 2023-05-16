/*
    TO OBSERVE THE USERS VIEWPORT 
*/

export const observer: IntersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        //entry.target.classList.remove("animate"); //to ensure the animation continues appearing once the user reaches the viewport width of the element
      }
    });
  },
  { threshold: 0.5 }
);
