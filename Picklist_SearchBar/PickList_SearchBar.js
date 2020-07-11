/* eslint-disable no-console */
import {
    LightningElement,
    track,
    api
} from 'lwc';
import {
    loadStyle
} from 'NestedPickList/node_modules/lightning/platformResourceLoader';
import assets from '@salesforce/resourceUrl/assets';

export default class JliPicklistSearchBar extends LightningElement {
    serachvar = false;
    @track search;
    @api dropDownDetails = [];
    @api value = [];

    // Pull in shared styles
    renderedCallback() {
        Promise.all([
            loadStyle(this, assets + '/css/global.css')
        ]);
    }
    searchDropdown(event) {
        this.value = [];
        this.search = event.target.value;
        console.log('search---' + this.search);
        console.log('list value at key before if -----' + JSON.stringify(this.dropDownDetails));

        // eslint-disable-next-line guard-for-in
        for (let key in this.dropDownDetails) {
            console.log('Picklist at key -----' + this.dropDownDetails[key]);
            //console.log('includes ---'+this.carDetails[key].Vehicle_Name__c.includes(this.search.toUpperCase()));
            //console.log('Contain---'+serachvar);                       
            if (this.dropDownDetails[key].toUpperCase().startsWith(this.search.toUpperCase())) {
                console.log('forIf-------');
                this.value.push(this.dropDownDetails[key]);
            }
        }
        console.log('searched result ' + JSON.stringify(this.value));
        // Creates the event with the data.
        const selectedEvent = new CustomEvent("progressvaluechange", {
            detail: this.value
        });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}