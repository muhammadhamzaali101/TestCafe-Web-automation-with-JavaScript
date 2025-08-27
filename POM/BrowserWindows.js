import {Selector, t } from "testcafe";

class BrowserWindows{
    constructor(){

        this.title=Selector('.main-header')
        this.newTabbtn=Selector('#tabButton');
        this.newWindbtn=Selector('#windowButton');
        this.newWindMsgbtn=Selector('#messageWindowButton');
        this.newWindMsg=Selector('#sampleHeading');
    
    }

    async clicknewTab()
    {
        await t.click(this.newTabbtn);
    }
    
    async clicknewWind()
    {
        await t.click(this.newWindbtn);
    }
    
    async clicknewWindMsg()
    {
        await t.click(this.newWindMsgbtn);
    }
}

export default new BrowserWindows();