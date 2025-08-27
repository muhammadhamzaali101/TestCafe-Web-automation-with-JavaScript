import { Selector,t }from 'testcafe';

class form{
    constructor(){

        this.title=Selector('.main-header');
        this.fName=Selector('#firstName');
        this.lName=Selector('#lastName');
        this.email=Selector('#userEmail');
        this.genderM=Selector('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label');
        this.genderF=Selector('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(2) > label');
        this.genderO=Selector('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(3) > label');
        this.mobNo=Selector('#userNumber');
        this.DOB=Selector('#dateOfBirthInput');

        this.monthDropdown=Selector('.react-datepicker__month-select');
        this.monthOption = this.monthDropdown.find("option");

        this.yearDropdown=Selector('.react-datepicker__year-select');
        this.yearOption = this.yearDropdown.find("option");

        this.dayBirth='div.react-datepicker__day.react-datepicker__day--0';

        this.Subj=Selector('#subjectsContainer > div > div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3');
        this.subjOptions=Selector('.subjects-auto-complete__menu');
        this.selectedSubj=Selector('#subjectsContainer > div > div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.subjects-auto-complete__value-container--has-value.css-1hwfws3>div:nth-child(1)>div:nth-child(1)')
        this.hobSprt=Selector('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label');
        this.hobRead=Selector('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(2) > label');
        this.hobMusic=Selector('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(3) > label');
        this.file='#uploadPicture';
        this.adrs=Selector('#currentAddress');
        this.submit=Selector('#submit');
        this.submitText= Selector('#example-modal-sizes-title-lg')

    }

    async setFName(FName){
        await t
        .typeText(this.fName,FName);
    }
    
    async setLName(LName){
        await t.typeText(this.lName,LName)
    }
    
    async setEmail(mail){
        await t.typeText(this.email,mail)
    }
    
    async clickGenderM(){
        await t.click(this.genderM)
    }
    
    async clickGenderF(){
        await t.click(this.genderF)
    }
    
    async clickGenderO(){
        await t.click(this.genderO)
    }
    
    async setMobile(num){
        await t.typeText(this.mobNo,num)
    }
    
    async setDOB(dob){
        await t.typeText(this.DOB,dob)
    }

    async setSubj(sub){
        await t.typeText(this.subj,sub)
    }

    async clickHobSprt(){
        await t.click(this.hobSprt)
    }

    async clickHobRead(){
        await t.click(this.hobRead)
    }

    async clickHobMus(){
        await t.click(this.hobMusic)
    }

    async uploadFile(ufilePath){
        await t
        .setFilesToUpload(this.file,ufilePath)
    }

    async setAdrs(adrs){
        await t.typeText(this.adrs,adrs)
    }

    async clickSubmit(){
        await t.click(this.submit)
    }

}

export default new form();
