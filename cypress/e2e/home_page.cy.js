
const menuIcon = () => cy.get('.menu-button');
const createQuoteButton = () => cy.get('button[name="Quote"]');
const createVZWQuoteButton = () => cy.get('button[name="vzw"]');
const quoteNameInput = () => cy.get('input.quote-name');
const addALineButton = () => cy.get('.add-a-line-button');
const closeAddALineMenuButton = () => cy.get('.close-icon-svg');
const addSmartPhoneButton = () => cy.get('button.add-smartphone');
const addLinesButton = () => cy.get('.add-lines-button');
const accountEditButton = () => cy.get('.account-edit-button');
const selectAccountPlan = () => cy.get('select[name="account.plan.name"]');
const accountDueMonthly = () => cy.get('input[name="account.plan.dueMonthly"]');

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

    const quoteName = 'Current';
    quoteNameInput()
    .clear()
    .type(quoteName)
    .should('have.attr', 'value', quoteName)
    
    accountEditButton() // expand account section
    .click();

    const accountPlan = 'The Verizon Unlimited Plan';
    selectAccountPlan()
    .select(accountPlan)
    .should('have.value', accountPlan);
    
    const accountPlanDueMonthly = '100';
    accountDueMonthly()
    .clear()
    .type(accountPlanDueMonthly)
    .should('have.value', accountPlanDueMonthly);

    // Close accountsection
    accountEditButton()
    .click();
    
    // Click add a line
    addALineButton()
    .click();
    
    // Add 4 smartphones
    const count = 4;
    for(let i = 0, len = count; i<len; i++){
      addSmartPhoneButton()
      .click();
    }

    // add lines
    addLinesButton()
    .click();

    
    
    /* ASSERT */
    expect(true).to.equal(true);
  })
});