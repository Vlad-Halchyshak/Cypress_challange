describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]').should('exist')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click().then(() => {
        cy.contains('Saving...').should('be.visible')
        cy.contains('Saved!', {timeout: 10000}).should('be.visible')
      })

    cy.get('li')
      .should('contain', 'Some Name - some@email.com - core - git-it')
    
  })
})
