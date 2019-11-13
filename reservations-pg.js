const createNewReservationButton ='#j_idt50 > a.btn.btn-primary'
const ReservationsIndexButton='#j_idt50 > a.btn.btn-default'
const reservationUniqeWords='Create New Hotel Reservation'

function checkReservationPage(cy){
    cy.contains(reservationUniqeWords)
}
function clickCreateNewReservationButton(cy){
    cy.get(createNewReservationButton).click()
}
function clickReservationsIndexButton(cy){
    cy.get(ReservationsIndexButton).click()
}
module.exports={
    checkReservationPage,
    clickCreateNewReservationButton,
    clickReservationsIndexButton
}