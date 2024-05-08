describe('template spec', () => {
  it('passes', () => {

    cy.session("login",()=>{

      cy.visit('https://www.linkedin.com')
      cy.get(':nth-child(1) > .flex-col > .text-input').type("bn234crpf@gmail.com");
      cy.get(':nth-child(2) > .flex-col > .text-input').type("Rajan@71");
      cy.get('.justify-between > .btn-md').click();
    })
    
    cy.visit('https://www.linkedin.com')
    cy.get('.global-nav__primary-items > :nth-child(2) > .app-aware-link > .t-12').click();
    cy.get('.search-global-typeahead__collapsed-search-button-text').click().wait(6000).type("frontend developer {Enter}");
    cy.get('.msg-overlay-bubble-header__details').click();
    cy.wait(5000);
    cy.get('.search-reusables__filter-list > :nth-child(1) > .artdeco-pill').click();

    cy.wait(6000);

    cy.contains('Easy Apply').first().click();
    cy.wait(6000);
    cy.get(".jobs-apply-button--top-card").first().click();
    cy.wait(5000);
    if(cy.get(".artdeco-text-input--input")){
      cy.get(".artdeco-text-input--input").click(); 
    }

    cy.get(".artdeco-button--primary")
    .first()
    .then(($element) => {
      if ($element.text().includes("next")) {
        $element.click();
      }
      if ($element.text().includes("Submit application")) {
        $element.click();
      } else if ($element.text().includes("Next")) {
        $element.click();
        cy.contains("Resume").then(($resume) => {
          cy.contains("Next").click();
        });
        

        cy.contains("Additional Questions").then(($header) => {
          if ($header.length > 0) {
            cy.wait(20000);
            
          } else {
            cy.contains("Next").click();
          }
        });
        cy.contains("Review").click();
        cy.get(".jobs-easy-apply-modal__content").scrollTo("bottom"); 
        cy.contains("Submit").click();
        cy.wait(5000);
      }
    });

  cy.get(".artdeco-modal__dismiss").click();
  cy.wait(4000);
  cy.get(".job-card-container__action").first().click();


  cy.reload();


  })
})
