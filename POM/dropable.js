import {Selector, t } from "testcafe";

class dropable{
    constructor(){

        this.title=Selector('.main-header')
        this.dragItem=Selector('#draggable');
        this.dropBox=Selector('#droppable');
    }
    

    async dragDrop(){
        
        await t 
        .dragToElement(this.dragItem, this.dropBox);
    }


}

export default new dropable();