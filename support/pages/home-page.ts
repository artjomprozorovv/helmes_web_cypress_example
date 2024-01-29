import * as Constants from "../constants";
import "cypress-real-events/support";

class HomePage {
  get header() {
    return cy.get("header#masthead");
  }

  visitHomePage() {
    cy.visit(Constants.HOME_PAGE_URL);
  }

  get getHelmesLogoSvg() {
    return cy.get('svg[enable-background="new 0 0 125 28"]');
  }

  get getContactButton() {
    return cy.get('a.btn.btn--floating:contains("Contact us")');
  }

  getAddress() {
    return cy.contains("Lõõtsa 6B, 11415 Tallinn");
  }

  getPhoneNumber() {
    return cy.contains("+372 610 6100");
  }

  getEmail() {
    return cy.contains("a", "info@helmes.com");
  }

  getLanguageElement() {
    return cy.contains("li.menu-item", "ENG");
  }

  getNavigationBar() {
    return cy.get("#site-navigation");
  }

  getSocialMediaBlock() {
    return cy.get("ul.site-info__social-media");
  }

  getSocialMediaLink(index: string, type: string) {
    return cy
      .get(`li:nth-child(${index}) a`)ß
      .should("have.attr", "href", Constants[type]);
  }
  changeLanguage(language: string) {
    cy.get("#site-navigation")
      .realHover()
      .contains("li.menu-item", "ENG")ß
      .within(() => {
        cy.get("a").contains(language).click({ force: true });
      });
  }
}

export default new HomePage();
