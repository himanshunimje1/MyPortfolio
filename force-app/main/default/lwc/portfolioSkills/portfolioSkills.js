import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECH_SKILLS_FIELD from '@salesforce/schema/Portfolio__c.TechnicalSkills__c'
import SOFT_SKILLS_FIELD from '@salesforce/schema/Portfolio__c.SoftSkills__c'
import SOFTWARE_FIELD from '@salesforce/schema/Portfolio__c.SoftwareTools__c'
import METHODOLOGIES_FIELD from '@salesforce/schema/Portfolio__c.SoftwareDevelopmentMethodologies__c'
export default class PortfolioSkills extends LightningElement {
    @api recordId
    @wire(getRecord, {
        recordId:'$recordId',
        fields:[TECH_SKILLS_FIELD, SOFT_SKILLS_FIELD, SOFTWARE_FIELD, METHODOLOGIES_FIELD]
    })skillHandler({data, error}){
        if(data){
            console.log("Skills Data", JSON.stringify(data))
        }
        if(error){
            console.error("Skills error", error)
        }
    }

}