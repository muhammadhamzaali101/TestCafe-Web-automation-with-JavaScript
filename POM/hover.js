import {Selector, t } from "testcafe";

class hover{
    constructor(){
        this.title=Selector('.main-header')
        this.hoverbtn=Selector('#toolTipButton');
    
    }

    async hover(){
        await t
        .hover(this.hoverbtn);
    }


}
export default new hover();