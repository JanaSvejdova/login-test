/// <reference types="cypress" /> 

describe("Actions", () => {
  
    it.only('login test', function() {
        cy.visit('https://pasport.dev.enmon.tech/')
        cy.get('#authForm_locationApiKey').type('f75cb865ded1c60e')
        cy.get('.ant-btn').click()
        cy.get(':nth-child(2) > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()
        cy.contains('Search').click()
        cy.get(':nth-child(3) > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click()
        cy.get('[data-row-key="146"] > .ant-table-cell-fix-right > .ant-space > .ant-space-item > .ant-btn').click()
    
         })

   
   
})