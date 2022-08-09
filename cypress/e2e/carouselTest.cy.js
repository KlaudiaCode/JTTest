describe('Carousel with cities', () => {
  beforeEach(() => {
    cy.visit('https://jobandtalent.com/')
    cy.get('button').contains('Accept all').click()
  })

  it('Scroll after clicking on dots', () => {
    cy.get('ul.js_areas_wrapper').children().should('have.length', 7)
    cy.get('li.js_loop_areas').eq(0).click()
    cy.get('ul.landing_areas_of_activity').should('have.class', 'first_areas')
    cy.get('li.js_loop_areas').eq(1).click()
    cy.get('ul.landing_areas_of_activity').should('have.class', 'second_areas')
    cy.get('li.js_loop_areas').eq(2).click()
    cy.get('ul.landing_areas_of_activity').should('have.class', 'third_areas')
  })
})