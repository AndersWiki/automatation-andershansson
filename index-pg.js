const indexPageTitle = 'Dashboard'
const indexAllBedrooms = '#page-wrapper > div > div > div > div > div:nth-child(2) > div > a > div > span.pull-left'
const indexAllBills = '#page-wrapper > div > div > div > div > div:nth-child(3) > div > a > div > span.pull-left'
const indexAllClients = '#page-wrapper > div > div > div > div > div:nth-child(4) > div > a > div > span.pull-left'
const indexAllReservations = '#page-wrapper > div > div > div > div > div:nth-child(5) > div > a > div > span.pull-left'

function checkIndexPageTitle(cy){
    cy.title().should('eq',indexPageTitle)
}
function clickAllBedrooms(cy){
    cy.get(indexAllBedrooms).click()
}
function clickAllBills(cy){
    cy.get(indexAllBills).click()
}
function clickAllClients(cy){
    cy.get(indexAllClients).click()
}
function clickAllReservations(cy){
    cy.get(indexAllReservations).click()
}
module.exports={
    checkIndexPageTitle,
    clickAllBedrooms,
    clickAllBills,
    clickAllClients,
    clickAllReservations
}