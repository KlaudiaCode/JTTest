describe('Phone number text field', () => {
  beforeEach(() => {
    cy.visit('https://jobandtalent.com/')
    cy.get('button').contains('Accept all').click()

    cy.on('uncaught:exception', (_err, _runnable) => {
      return false
    })
  })

  it('Display success message after entering correct phone number', () => {
    cy.get('#sms_sender_phone_number').type('123123123')
    cy.get('form').first().submit()
    cy.contains('SMS sent, you will receive it shortly')
  })

  it('Display error message after entering too short phone number', () => {
    cy.get('#sms_sender_phone_number').type('123')
    cy.get('form').first().submit()
    cy.contains('There was an error sending the SMS')
  })

  it('Display error message after entering too long phone number', () => {
    cy.get('#sms_sender_phone_number').type('1231231231231231')
    cy.get('form').first().submit()
    cy.contains('There was an error sending the SMS')
  })

  it('Display error message after entering letters instead of phone number', () => {
    cy.get('#sms_sender_phone_number').type('abcde')
    cy.get('form').first().submit()
    cy.contains('There was an error sending the SMS')
  })

  it('Display error message after entering only special signs instead of phone number', () => {
    cy.get('#sms_sender_phone_number').type('.....')
    cy.get('form').first().submit()
    cy.contains('There was an error sending the SMS')
  })

  it('Display error message after summiting empty form', () => {
    cy.get('form').first().submit()
    cy.contains('There was an error sending the SMS')
  })
})