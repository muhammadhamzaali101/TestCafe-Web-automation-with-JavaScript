//Imports
import { ClientFunction, Selector } from 'testcafe';
import form from '../POM/form'
import BrowserWindows from '../POM/BrowserWindows';
import hover from '../POM/hover';
import dropable from '../POM/dropable';

//Global Variables
const getUrl = ClientFunction(() => document.location.href.toString());

//Required
const dataset = require('../data/form.json')
//===========================================================================//

fixture `TESTCAFE ASSIGNMENT` 
  
dataset.forEach(data =>{

  test.before(async t => {
    await t
    .maximizeWindow()
    .navigateTo('https://demoqa.com/automation-practice-form')
  })
  ('Register Form', async t => {

    await t
    .expect(form.title.innerText).eql('Practice Form')
    .expect(form.fName.visible).ok()
    .typeText(form.fName,data.Firstname)
    .expect(form.lName.visible).ok()
    .typeText(form.lName,data.LastName)
    .typeText(form.email,data.email)
    .typeText(form.mobNo,data.MobileNo)
    .click(form.DOB)
    .click(form.monthDropdown)
    .click(form.monthOption.withText(data.BirthMonth))
    .expect(form.monthDropdown.textContent).contains(data.BirthMonth)
    .click(form.yearDropdown)
    .click(form.yearOption.withText(data.BirthYear))
    .expect(form.yearDropdown.textContent).contains(data.BirthYear)
    .click(Selector(form.dayBirth+data.BirthDate).nth(0))
    .click(form.adrs)
    .expect(form.DOB.value).contains(data.BirthDate)
    .wait(1000)
    .typeText(form.Subj,data.Subject)
    .click(form.subjOptions.child(0))
    .setFilesToUpload(form.file,data.Picture)
    .typeText(form.adrs,data.Address)
    .expect(form.submit.visible).ok()
    .expect(form.selectedSubj.innerText).contains(data.Subject)
    console.log(await form.file.value)

    if(data.Gender=='Male')
    {
      await t
      .expect(form.genderM.visible).ok()
      .click(form.genderM)
    }
    else if(data.Gender=='Female'){
      await t
      .expect(form.genderF.visible).ok()
      .click(form.genderF)
    }
    else if(data.Gender=='Other'){
      await t
      .expect(form.genderO.visible).ok()
      .click(form.genderO)
    }
    else{
      console.log("---- Error Occured in Gender - Gender Not Recognized ----");
        
    }


    if(data.Hobies=='Sports')
    {
      await t
      .click(form.hobSprt)
    }
    else if(data.Hobies=='Reading'){
      await t
      .click(form.hobRead)
    }
    else if(data.Hobies=='Music'){
      await t
      .click(form.hobMusic)
    }
    else{
      console.log("---- Error Occured in Hobbies - Hobby Not Recognized ----");  
    }

    await t
    .click(form.submit)
    // .expect(form.submitText.innerText).eql('Thanks for submitting the form')
    .takeScreenshot();
    
  });
    
});

//               --------------------------------------

test.before(async t => {
  await t
  .maximizeWindow()
  .navigateTo('https://demoqa.com/browser-windows')
})
('Open New tab and Validate', async t => {
  await t
  .expect(BrowserWindows.title.innerText).eql('Browser Windows')
  .takeScreenshot()

  // New Tab and assertion
  BrowserWindows.clicknewTab();
  await t
  .expect(getUrl()).contains('/sample')
  .takeScreenshot()
  .closeWindow()

});

//               --------------------------------------

test.before(async t => {
  await t
  .navigateTo('https://demoqa.com/browser-windows')
})
('Ope New Window and Navigate', async t => {
  
  await t
  .expect(BrowserWindows.title.innerText).eql('Browser Windows')
  .takeScreenshot()
  //New Window and navigate
  BrowserWindows.clicknewWind()
  await t
  .expect(getUrl()).contains('/sample')
  .navigateTo('https://www.google.com/')
  .takeScreenshot()
  .closeWindow()

});

//               --------------------------------------

test.before(async t => {
  await t
  .navigateTo('https://demoqa.com/browser-windows')

})
('Open and Verify New Window Message', async t => {
  await t
  .expect(BrowserWindows.title.innerText).eql('Browser Windows')
  .takeScreenshot()
  //New Window and Validate Message
  BrowserWindows.clicknewWind()
  await t
  .expect(BrowserWindows.newWindMsg.textContent).contains('This is a sample page')
  .takeScreenshot()
  .closeWindow()
});

//               --------------------------------------

test.before(async t => {
  await t
  .navigateTo('https://demoqa.com/tool-tips')
})
('Verify Hover Operation', async t => {
  await t
  .expect(hover.title.innerText).eql('Tool Tips')
  .hover(hover.hoverbtn)
  .takeScreenshot();
  
  
});

//               --------------------------------------

test.before(async t => {
  await t
  .navigateTo('https://demoqa.com/droppable')
})
('Verify Drag and Drop', async t => {

  await t
  .expect(dropable.dragItem.exists).ok()
  .expect(dropable.dropBox.exists).ok()

  dropable.dragDrop()

  await t
  .expect(dropable.title.innerText).eql('Droppable')
  .takeScreenshot();

  
});
