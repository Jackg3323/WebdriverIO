import Page from "./page";

class ABPage extends Page {
  get heading() {
    return$("h3");
  }

  get footerLink() {
    return $("#page-footer a");
  }

  open() {
    return super.open("abtest");
  }
}

export default new ABPage();
