const hotelAccomedationLink = '#wrapper > nav > div.navbar-header > a'
const logoutToggleDropdown = '.dropdown-toggle'
const logoutToggleDropdownButton = '.dropdown-menu > li > a'

function prefomLogout(cy){
    cy.get(logoutToggleDropdown).click()
    cy.get(logoutToggleDropdownButton).click()
}
function useHotelAccomendationLink(cy){
    cy.get(hotelAccomedationLink).click()
}
module.exports={
    prefomLogout,
    useHotelAccomendationLink
}
