import { LightningElement, api } from 'lwc';

export default class RefreshEveryNMinutes extends LightningElement {

    @api minutes;

    connectedCallback() {
        setTimeout(() => {
            console.log("Refresh done!");
            eval("$A.get('e.force:refreshView').fire();");
       }, this.minutes * 60 * 1000); 

    }

}