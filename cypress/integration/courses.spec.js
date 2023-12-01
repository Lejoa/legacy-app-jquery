describe("the home page courses action", () => {
    it("display courses", () => {
        cy.visit("/");
        cy.findByRole("heading", { name: /Courses/i }).should("exist");
        cy.findByRole("heading", { name: /Vue 3/i }).should("exist");
    });
});