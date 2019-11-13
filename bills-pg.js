const createNewBillButton ='#j_idt50 > a.btn.btn-primary'
const billIndexButton='#j_idt50 > a.btn.btn-default'
const billUniqeWords='Create New Bill'

function checkBillPage(cy){
    cy.contains(billUniqeWords)
}
function clickCreateNewBillButton(cy){
    cy.get(createNewBillButton).click()
}
function clickBillIndexButton(cy){
    cy.get(billIndexButton).click()
}
module.exports={
    checkBillPage,
    clickCreateNewBillButton,
    clickBillIndexButton
}