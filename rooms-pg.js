const createNewBedroomButton ='#j_idt50 > a.btn.btn-primary'
const bedroomIndexButton='#j_idt50 > a.btn.btn-default'
const bedroomUniqeWords='Create New Bedroom'

function checkBedroomPage(cy){
    cy.contains(bedroomUniqeWords)
}
function clickCreateNewBedroomButton(cy){
    cy.get(createNewBedroomButton).click()
}
function clickBedroomIndexButton(cy){
    cy.get(bedroomIndexButton).click()
}
module.exports={
    checkBedroomPage,
    clickCreateNewBedroomButton,
    clickBedroomIndexButton
}