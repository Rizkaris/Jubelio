describe('Create Product', () => {
  const validEmail = 'Ristianarizka@gmail.com';
  const validPassword = 'kzf8_Ffy@';

  it('Login', () => {
    // halaman login
    cy.visit('https://v2.jubelio.com');
  
    cy.wait(5000);
    // input email
    cy.get('#textfield-email', { timeout: 10000 }).type("ristianarizka@gmail.com");
    //cy.get('#textfield-email').type(validEmail).should('be.visible');

    // input password
    cy.get('input[name="password"]').type(validPassword);

    // klik button login 
    cy.get('button.MuiButton-root')
    .scrollIntoView()
    .should('exist')
    .and('be.visible')
    .click();

    cy.wait(10000);
    cy.get('.header-nav-actions').find('button.hamburger').click();
    cy.get('.nav-inner-wrapper').find('a[href="/catalog"]').click();
    cy.contains('a', 'Produk').and('not.be.visible').click({ force: true });
    cy.wait(5000);
    cy.contains('.title', 'Upload Produk').scrollIntoView().click({ force: true });
    cy.get('[data-testid="ChevronRightIcon"]').trigger('click');
    
    // input produk 
    cy.get('input[name="name"]').type('Baju anak 2 tahun korean style');
    cy.get('[class*="-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButtonBase-root py-3 text-primary css-1ex63bw"]').click();
    cy.get('input').debug();
    cy.get('[placeholder = "Cari kategori"]').type('fashion bayi & anak');
   
  });
});