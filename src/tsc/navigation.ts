import { Blog } from "./Blog/blogIndex";

class BlogPage extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {

  }
}
customElements.define("nav-blog", BlogPage, { extends: "button" });
