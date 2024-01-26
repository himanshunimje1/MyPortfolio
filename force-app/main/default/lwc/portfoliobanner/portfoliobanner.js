import { LightningElement,wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.Fullname__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'

export default class PortfolioBanner extends LightningElement {

    @api recordId // ='a0007000001PwTrAAK';
    @api linkedinUrl// = 'https://www.linkedin.com/in/himanshu-nimje-22487a18/'
    @api twitterUrl  // = 'https://twitter.com/'
    @api githubUrl  // = 'https://github.com/himanshunimje1/himanshunimje1'
    @api youtubeUrl  // = 'https://youtube.com/'
    @api trailheadUrl // = 'https://www.salesforce.com/trailblazer/hnimje1'
    @api blogUrl  // = 'https://www.google.com/'

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`
    
    
    @wire(getRecord,{recordId:'$recordId', fields:[FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION]})
    portfolioData
    /*portfolioHandler({data,error}){
        if(data){
            console.log("record Data", JSON.stringify(data));
        }if(error){
            console.error("Error:", error);
        }
    } */
   
    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME);
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME);
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION);
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION);
    }

}