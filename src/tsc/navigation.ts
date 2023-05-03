import { Blog } from "./Blog/blog";

class BlogPage extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //let main_content = document.getElementById("main_content");

    // this.addEventListener("click", () => {
    //   while (main_content?.firstChild) {
    //     main_content.removeChild(main_content.firstChild);
    //   }
    //   main_content?.appendChild(new Blog());
    // });


    
    // // Create anchor element.
    // var a = document.createElement("a");

    // // Create the text node for anchor element.
    // var link = document.createTextNode("This is link");

    // // Append the text node to anchor element.
    // a.appendChild(link);

    // // Set the title.
    // a.title = "This is Link";

    // // Set the href property.
    // a.href = 'blog.asp';

    // // Append the anchor element to the body.
    // document.body.appendChild(a);
  }
}
customElements.define("nav-blog", BlogPage, { extends: "button" });
