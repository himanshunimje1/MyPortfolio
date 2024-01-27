import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects=[
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://troop-portfolio-dev-ed.my.site.com/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://troop-portfolio-dev-ed.my.site.com/alarm-clock"
        },
        {
            "name":"Curreny Converter App",
            "img":this.CurrencyCalculator,
            "link":"https://troop-portfolio-dev-ed.my.site.com/currency-converter"
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://troop-portfolio-dev-ed.my.site.com/weather-app"
        },
        {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":"https://troop-portfolio-dev-ed.my.site.com/survey/survey/runtimeApp.app?invitationId=0Ki5g0000009IHa&surveyName=employee_survey&UUID=ada46bf6-2671-4ea5-a224-43f8508d6a24"
        },
        {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":"https://troop-portfolio-dev-ed.my.site.com/note-taking-app"
        }
    ]
}