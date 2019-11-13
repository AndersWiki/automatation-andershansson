const loginPageTitle = 'Hotel Accomodation - login page'
const loginFormLabel = 'Please, login!'
const loginTextField = '#login'
const passwordTextField = '#senha'
const loginFormButton = '#loginBtn'

function checkLoginPageTitle(cy){
    cy.title().should('eq',loginPageTitle)
}
function preformLogin(cy,username,password){
    cy.contains(loginFormLabel)
    cy.get(loginTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginFormButton).click()
}
module.exports={
    checkLoginPageTitle,
    preformLogin
}