/* eslint-disable no-console */
import {
    LightningElement,
    api,
    track
} from 'lwc';
import {
    loadStyle
} from 'lightning/platformResourceLoader';
import assets from '@salesforce/resourceUrl/assets';
import getAList from '@salesforce/apex/Controller.getAValues';
import getBList from '@salesforce/apex/Controller.getBList';
import getCList from '@salesforce/apex/Controller.getCList';
import getDList from '@salesforce/apex/Controller.getDList';
import Button from 'c/button';
export default class JliYmmePicklist extends LightningElement {

    // To be be wired from CMS
    @track AState = 'closed';
    @track BState = 'closed';
    @track CState = 'closed';
    @track DState = 'closed';
    @api ADropdownDetails = [];
    @api BDropdownDetails = [];
    @api CDropdownDetails = [];
    @api DDropdownDetails = [];
    @track searchKeyword = '';
    picklisteventdetail = [{
        name: '',
        state: ''
    }];
    @track selectedADetails = [];
    @track selectedBDetails = [];
    @track selectedCDetails = [];
    @track selectedDDetails = [];
    @track selectedA = 'Select your A';
    @track selectedB = 'Select your B';
    @track selectedC = 'Select your C';
    @track selectedD = 'Select your D (Optional)';

    get selectedValue() {
        return {
            name: this.placeholder
        }
    }

    connectedCallback() {
        this.getALists();
    }

    closeDropdowns() {
        let dropdownList = this.template.querySelector('.A_dropdown .select-menu');
        dropdownList.classList.remove('open');
        dropdownList = this.template.querySelector('.B_dropdown .select-menu');
        dropdownList.classList.remove('open');
        dropdownList = this.template.querySelector('.C_dropdown .select-menu');
        dropdownList.classList.remove('open');
        dropdownList = this.template.querySelector('.D_dropdown .select-menu');
        dropdownList.classList.remove('open');
    }

    /******A Dropdown JS Start */
    handleAValueChange(event) {
        this.selectedADetails = event.detail;
    }

    getALists() {
        getAList({})
            .then(result => {
                this.ADropdownDetails = result;
                this.selectedADetails = this.ADropdownDetails;
                this.error = undefined;
                console.log('result dropDownValue' + JSON.stringify(this.ADropdownDetails));
            })
            .catch(error => {
                console.log('error' + JSON.stringify(error));
                this.error = error;
                this.ADropdownDetails = undefined;
            });
    }

    toggleADropdown() {
        this.closeDropdowns();
        let dropdownList = this.template.querySelector('.A_dropdown .select-menu');
        this.AState = this.AState === 'closed' ? 'open' : 'closed';
        dropdownList.classList.toggle('open');
    }

    chooseAValue(e) {
        let dropdownList = this.template.querySelector('.A_dropdown .select-menu');
        let selectedVal = this.template.querySelector('.A_dropdown select').value;
        let selectedAName = this.template.querySelector('.A_dropdown .select-option span');
        selectedVal = e.toElement.innerText;
        selectedAName.innerText = selectedVal;
        this.selectedA = selectedVal;
        this.toggleBValue();

        dropdownList.classList.remove('open');
        this.picklisteventdetail = {
            name: selectedVal,
            state: this.AState
        }
        this.AState = 'closed';
        const dropdown = new CustomEvent('toggleAdropdown', {
            detail: this.picklisteventdetail
        });
        this.dispatchEvent(dropdown);
    }
    /******A Dropdown JS End */


    /******B Dropdown JS Start */
    handleBValueChange(event) {
        this.selectedBDetails = event.detail;
    }

    getBLists() {
        getBList({
                A: this.selectedA
            })
            .then(result => {
                this.BDropdownDetails = result;
                this.selectedBDetails = this.BDropdownDetails;
                this.error = undefined;
                console.log('result dropDownValue' + JSON.stringify(this.BDropdownDetails));
            })
            .catch(error => {
                console.log('error' + JSON.stringify(error));
                this.error = error;
                this.BDropdownDetails = undefined;
            });
    }

    toggleBDropdown() {
        this.closeDropdowns();
        let dropdownList = this.template.querySelector('.B_dropdown .select-menu');
        this.BState = this.BState === 'closed' ? 'open' : 'closed';
        dropdownList.classList.toggle('open');
    }

    chooseBValue(e) {
        let dropdownList = this.template.querySelector('.B_dropdown .select-menu');
        let selectedVal = this.template.querySelector('.B_dropdown select').value;
        let selectedBName = this.template.querySelector('.B_dropdown .select-option span');
        selectedVal = e.toElement.innerText;
        selectedBName.innerText = selectedVal;
        this.selectedB = selectedVal;
        this.toggleCValue();
        dropdownList.classList.remove('open');
        this.picklisteventdetail = {
            name: selectedVal,
            state: this.BState
        }
        this.BState = 'closed';
        const dropdown = new CustomEvent('toggleBdropdown', {
            detail: this.picklisteventdetail
        });
        this.dispatchEvent(dropdown);
    }

    toggleBValue() {
        let selectedBName = this.template.querySelector('.B_dropdown .select-option span');
        selectedBName.innerText = 'Select your B';
        this.getBLists();
        this.selectedB = 'Select your B';
        this.toggleCValue();
    }
    /******B Dropdown JS End */

    /******C Dropdown JS Start */
    handleCValueChange(event) {
        this.selectedCDetails = event.detail;
    }

    getCLists() {
        getCList({
                A: this.selectedA,
                B: this.selectedB
            })
            .then(result => {
                this.CDropdownDetails = result;
                this.selectedCDetails = this.CDropdownDetails;
                this.error = undefined;
                console.log('result dropDownValue' + JSON.stringify(this.CDropdownDetails));
            })
            .catch(error => {
                console.log('error' + JSON.stringify(error));
                this.error = error;
                this.CDropdownDetails = undefined;
            });
    }

    toggleCDropdown() {
        this.closeDropdowns();
        let dropdownList = this.template.querySelector('.C_dropdown .select-menu');
        this.CState = this.CState === 'closed' ? 'open' : 'closed';
        dropdownList.classList.toggle('open');
    }

    chooseCValue(e) {
        let dropdownList = this.template.querySelector('.C_dropdown .select-menu');
        let selectedVal = this.template.querySelector('.C_dropdown select').value;
        let selectedCName = this.template.querySelector('.C_dropdown .select-option span');
        selectedVal = e.toElement.innerText;
        selectedCName.innerText = selectedVal;
        this.selectedC = selectedVal;
        this.toggleDValue();
        dropdownList.classList.remove('open');
        this.picklisteventdetail = {
            name: selectedVal,
            state: this.CState
        }
        this.CState = 'closed';
        const dropdown = new CustomEvent('toggleCdropdown', {
            detail: this.picklisteventdetail
        });
        this.dispatchEvent(dropdown);
    }

    toggleCValue() {
        let selectedCName = this.template.querySelector('.C_dropdown .select-option span');
        selectedCName.innerText = 'Select your C';
        this.getCLists();
        this.selectedC = 'Select your C';
        this.toggleDValue();
    }
    /******C Dropdown JS End */


    /******D Dropdown JS Start */
    handleDValueChange(event) {
        this.selectedDDetails = event.detail;
    }

    getDLists() {
        getDList({
                A: this.selectedA,
                B: this.selectedB,
                C: this.selectedC
            })
            .then(result => {
                this.DDropdownDetails = result;
                this.selectedDDetails = this.DDropdownDetails;
                this.error = undefined;
                if (result == null) {
                    console.log("Result is null");
                    let button = this.template.querySelector('.D_dropdown .select-menu button');
                    button.disabled = true;
                }
                console.log('result dropDownValue' + JSON.stringify(this.DDropdownDetails));
            })
            .catch(error => {
                console.log('error' + JSON.stringify(error));
                this.error = error;
                this.DDropdownDetails = undefined;
            });
    }

    toggleDDropdown() {
        this.closeDropdowns();
        let dropdownList = this.template.querySelector('.D_dropdown .select-menu');
        this.DState = this.DState === 'closed' ? 'open' : 'closed';
        dropdownList.classList.toggle('open');
    }

    chooseDValue(e) {
        let dropdownList = this.template.querySelector('.D_dropdown .select-menu');
        let selectedVal = this.template.querySelector('.D_dropdown select').value;
        let selectedDName = this.template.querySelector('.D_dropdown .select-option span');
        selectedVal = e.toElement.innerText;
        selectedDName.innerText = selectedVal;
        this.selectedD = selectedVal;
        dropdownList.classList.remove('open');
        this.picklisteventdetail = {
            name: selectedVal,
            state: this.DState
        }
        this.DState = 'closed';
        const dropdown = new CustomEvent('toggleDdropdown', {
            detail: this.picklisteventdetail
        });
        this.dispatchEvent(dropdown);
    }

    toggleDValue() {
        let selectedDName = this.template.querySelector('.D_dropdown .select-option span');
        selectedDName.innerText = 'Select your D (optional)';
        this.getDLists();
        this.selectedD = 'Select your D (optional)';
    }
    /******D Dropdown JS End */


    // Pull in shared styles
    renderedCallback() {
        Promise.all([
            loadStyle(this, assets + '/css/global.css')
        ]);
    }
}