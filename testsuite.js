import * as loginFuncs from '../integration/loginpage-pg'
import * as indexFuncs from '../integration/index-pg'
import * as headerFuncs from '../integration/header-pg'
import * as reservationFuncs from '../integration/reservations-pg'
import * as roomsFuncs from '../integration/rooms-pg'
import * as billsFuncs from '../integration/bills-pg'

describe('Testfall',function(){
    beforeEach(()=>{
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        loginFuncs.checkLoginPageTitle(cy)
    })
    it('Perform valid login', function(){
        loginFuncs.preformLogin(cy,'jp','1010')  
        indexFuncs.checkIndexPageTitle(cy)
    })
    it('Perform valid login and logout', function(){
        loginFuncs.preformLogin(cy,'jp','1010')  
        indexFuncs.checkIndexPageTitle(cy)
        headerFuncs.prefomLogout(cy)
        loginFuncs.checkLoginPageTitle(cy)
 
     })
     it('Perform valid login go to reservation and logout', function(){
        loginFuncs.preformLogin(cy,'jp','1010')  
        indexFuncs.checkIndexPageTitle(cy)
        indexFuncs.clickAllReservations(cy)
        reservationFuncs.checkReservationPage(cy)
        headerFuncs.prefomLogout(cy)
        loginFuncs.checkLoginPageTitle(cy)
     })
     it('Perform valid login go to rooms and logout', function(){
        loginFuncs.preformLogin(cy,'jp','1010')  
        indexFuncs.checkIndexPageTitle(cy)
        indexFuncs.clickAllBedrooms(cy)
        roomsFuncs.checkBedroomPage(cy)
        headerFuncs.prefomLogout(cy)
        loginFuncs.checkLoginPageTitle(cy)
     })
     it('Perform valid login go to bills and logout', function(){
        loginFuncs.preformLogin(cy,'jp','1010')  
        indexFuncs.checkIndexPageTitle(cy)
        indexFuncs.clickAllBills(cy)
        billsFuncs.checkBillPage(cy)
        headerFuncs.prefomLogout(cy)
        loginFuncs.checkLoginPageTitle(cy)
     }) 
})