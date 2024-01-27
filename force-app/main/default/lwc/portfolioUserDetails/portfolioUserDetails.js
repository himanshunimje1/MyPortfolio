import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectApiName

    downloadResume(){
        window.open("https://github.com/himanshunimje1/Himanshu-Resume/blob/main/Himanshu_Nimje_Resume%20.pdf","_blank");
    }
    
}