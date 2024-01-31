import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c'
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c'

import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioOtherDetails extends LightningElement {
    superbadges=[]
    languages=[]
    languageIcon = `${PortfolioAssets}/PortfolioAssets/language.png`
    badgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`
    @api recordId
    @wire(getRecord, {
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELD, LANGUAGES_FIELD]
    })otherFieldsHandler({data, error}){
        if(data){
            console.log("otherFieldsHandler data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("otherFieldsHandler error", error)
        }
    }
    formatData(data){
        const {Languages__c, Superbadges__c} = data.fields
        this.languages = Languages__c && Languages__c.value ? Languages__c.value.split(','):[]
        this.superbadges = Superbadges__c && Superbadges__c.value ? Superbadges__c.value.split(';'):[]
    }
}