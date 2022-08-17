
const menuIcon = () => cy.get('.menu-button');
const createQuoteButton = () => cy.get('button[name="Quote"]');
const createVZWQuoteButton = () => cy.get('button[name="vzw"]');
const quoteNameInput = () => cy.get('input.quote-name');
const addALineButton = () => cy.get('.add-a-line-button');
const closeAddALineMenuButton = () => cy.get('.close-icon-svg');
const addSmartPhoneButton = () => cy.get('button.add-smartphone');
const addLinesButton = () => cy.get('.add-lines-button');


describe('Member Quote Comparison', {
  viewportWidth: 414,
  viewportHeight: 896,
}, () => {

  it('sanity check', () => {
    expect(true).to.equal(true);
  });
  
  it('Quote for 4 lines on old verizon shared plan', () => {
    // Go to home page
    cy.visit('http://localhost:3000');
    
    // Click the menu icon
    menuIcon()
    .click();
  
    // Click the create quote button
    createQuoteButton()
    .click();
    
    // Click the create verizon quote button
    createVZWQuoteButton()
    .click();


    quoteNameInput()
    .clear();

    quoteNameInput()
    .type('Current');

    // Open add a line menu
    addALineButton()
    .click();
    
    for(let i = 0, len = 4; i<len; i++){
      addSmartPhoneButton()
      .click();
    }

    addLinesButton()
    .click();
    
    /* ASSERT */
    expect(true).to.equal(true);
  })
});