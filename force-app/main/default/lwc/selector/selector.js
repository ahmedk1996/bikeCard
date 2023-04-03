import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [NAME_FIELD];

export default class Selector extends LightningElement {
    selectedProductId;

    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }

    //set the id to user id so that it can be used.
    userId = Id;

    //uses the @wire decorator to use the wire service to call getRecord passing in the userId and getting the fields
    @wire(getRecord, { recordId: '$userId', fields }) 
    //sets user as the receiver for the @wire call.
    user;

    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }
}