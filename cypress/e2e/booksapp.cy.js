describe("Books website testing", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("Books list").should("be.visible");
    });
  
    it("Should add book", () => {
      cy.login("test@test.com", "test");
      cy.addBook("Хоббит, или Туда и обратно", "Книга о приключениях", "Толкин Джон Рональд Руэл");
      cy.contains("Хоббит, или Туда и обратно").should("be.visible");
    });
  
    it("Should add to favourite", () => {
      cy.login("test@test.com", "test");
      cy.addBook("Гарри Поттер", "Книга о мальчике, который выжил", "Джоан Роулинг");
      cy.contains("Add to favorite").click();
      cy.contains("Delete from favorite").should("be.visible");
    });
  
    it("Download checking", () => {
      cy.login("test@test.com", "test");
      cy.addBook("Сильмариллион", "О том, как все начиналось", "Толкин Джон Рональд Руэл");
      cy.contains("Сильмариллион").click();
      cy.contains("Dowload book").should("be.visible");
    });
  });