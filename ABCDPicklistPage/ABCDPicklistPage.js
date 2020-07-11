import {
  LightningElement,
  track,
  api
} from "lwc";

export default class ABCDPicklistPage extends LightningElement {
  @track dropdownA;
  @track dropdownB;
  @track dropdownC;
  @track dropdownD;

  @track AlwcInitialLoad = false;
  @track BlwcInitialLoad = false;
  @track ClwcInitialLoad = false;
  @track DlwcInitialLoad = false;
  @track selectedA = "Select your A";
  @track selectedB = "Select your B";
  @track selectedC = "Select your C";
  @track selectedD = "Select your D";

  getA(event) {
    this.dropdownA = event.detail;
    this.selectedA = event.detail.name;

    if (this.AlwcInitialLoad == true) {
      const checkedval = this.dropdownA;
      const textChangeEvent = new CustomEvent("searchcomponentchange", {
        detail: {
          checkedval
        }
      });
    }
    this.AlwcInitialLoad = true;
    this.selectedA = this.dropdownA.name;
  }

  getB(event) {
    this.dropdownB = event.detail;
    this.selectedB = event.detail.name;

    if (this.BlwcInitialLoad == true) {
      const checkedval = this.dropdownB;
      const textChangeEvent = new CustomEvent("searchcomponentchange", {
        detail: {
          checkedval
        }
      });
    }
    this.BlwcInitialLoad = true;
    this.selectedB = this.dropdownB.name;
  }

  getC(event) {
    this.dropdownC = event.detail;
    this.selectedC = event.detail.name;

    if (this.ClwcInitialLoad == true) {
      const checkedval = this.dropdownC;
      const textChangeEvent = new CustomEvent("searchcomponentchange", {
        detail: {
          checkedval
        }
      });
      // this.dispatchEvent(textChangeEvent);
    }
    this.ClwcInitialLoad = true;
    this.selectedC = this.dropdownC.name;
  }

  getD(event) {
    this.dropdownD = event.detail;
    this.selectedD = event.detail.name;
    if (this.DlwcInitialLoad == true) {
      const checkedval = this.dropdownD;
      const textChangeEvent = new CustomEvent("searchcomponentchange", {
        detail: {
          checkedval
        }
      });
    }
    this.DlwcInitialLoad = true;
    this.selectedD = this.dropdownD.name;
  }
}