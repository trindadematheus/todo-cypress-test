const inputValue = 'play soccer'

describe("todo app home page", () => {
  it("add some task", () => {
    cy.visit("/");
    cy.get("#task-form-input").type(inputValue);
    cy.get("#task-form-btn-submit").click();

    cy.get(".task-item").eq(0).should("contain.text", inputValue);
  });
});
