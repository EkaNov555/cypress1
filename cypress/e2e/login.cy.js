describe('lohin tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('login', () => {
    cy.login("test@test.com","test")
    cy.contains("Добро пожаловать test@test.com").should('be.visible');
  })
  it('wrong login', () => {
    cy.login("test1@test.com","test")
    cy.contains("Неправильая почта или пароль").should('be.visible');
  })
  it('login empty mail', () => {
    cy.login(null,"test")
    cy.get('#mail').then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
  it('login empty password', () => {
    cy.login("test@test.com ",null)
    cy.get('#pass').then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
})