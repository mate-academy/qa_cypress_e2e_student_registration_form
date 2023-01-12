class getSellector{
  elements = {   
    testField: (number) => cy.get(`tbody > :nth-child(${number}) > :nth-child(2)`),
    getField: (selector) => cy.get(`${selector}`)
  };
    
  click1(selector){
      this.elements.getField(selector).click();
  };

  getInput(number,input){
      this.elements.testField(number).should('contain.text',`${input}`);
  };

  fillField(selector, input){
      this.elements.getField(selector).type(input);
  };

  getTwoInputs(number,input,input1){
      this.elements.testField(number).should('contain.text',`${input} ${input1}`);
  };

  getTwoInputs1(number,input,input1){
      this.elements.testField(number).should('contain.text',`${input}, ${input1}`);
  };

  scrollimg(selector){
      this.elements.getField(selector).scrollIntoView();
  };

};

module.exports = new getSellector();