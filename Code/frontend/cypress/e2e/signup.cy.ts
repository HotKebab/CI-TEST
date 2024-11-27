describe('Signup Test', () => {
  const email = `nouvelutilisateur@example.com`
  const password = 'motdepasse123'

  it('devrait inscrire un nouvel utilisateur', () => {
    cy.visit('/register')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('input[name="confirmation"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.contains('h1', 'Connectez-vous', { timeout: 10000 })
  })

  afterEach(() => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3000/api/users/delete',
      body: { email },
      failOnStatusCode: false
    })
  })
})