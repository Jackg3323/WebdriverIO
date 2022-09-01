import Page from "./page";

class DynamicPage extends Page {
  get heading() {
    return $("h4");
  }

  get ARbutton() {
    return $("#checkbox-example button");
  }

  get checkbox() {
    return $("#checkbox-example input");
  }

  get message() {
    return $("#message");
  }

  get loadingBar() {
    return $("#loading");
  }

  get footerLink() {
    return $("#page-footer a");
  }

  get EDbutton() {
    return $("#input-example button");
  }

  get input() {
    return $("#input-example input");
  }

  open() {
    return super.open("dynamic_controls");
  }

  toggleCheckbox() {
    this.ARbutton.click();
  }

  toggleInput() {
    this.EDbutton.click();
  }
}

export default new DynamicPage();
