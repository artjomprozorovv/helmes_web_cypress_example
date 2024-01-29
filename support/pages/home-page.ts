import * as Constants from "../constants";
import 'cypress-real-events/support';


class HomepageTestAssertions {

    visitHomePage(){
        cy.visit(Constants.HOME_PAGE_URL)
    }

  assertHomePageRedirectToHome() {
    cy.get("header#masthead")
      .find('svg[enable-background="new 0 0 125 28"]')
      .click();
    cy.url().should("eq", Constants.HOME_PAGE_URL);
  }

  assertHomePageRedirectToContact() {
    cy.get('a.btn.btn--floating:contains("Contact us")').click();
    cy.url().should("eq", Constants.CONTACT_PAGE_URL);
  }

  assertAddressEmailPhoneData() {
    cy.scrollTo("bottom");
    cy.contains("Lõõtsa 6B, 11415 Tallinn").should("exist");
    cy.contains("+372 610 6100").should("exist");
    cy.contains("a", "info@helmes.com").should("exist");
  }

  assertSocialMediaPaths(): void {
    cy.scrollTo("bottom");
    cy.get("ul.site-info__social-media").within(() => {
      cy.get("li:nth-child(1) a").should(
        "have.attr",
        "href",
        Constants.SOCIAL_MEDIA_PATHS.facebook
      );
      cy.get("li:nth-child(2) a").should(
        "have.attr",
        "href",
        Constants.SOCIAL_MEDIA_PATHS.twitter
      );
      cy.get("li:nth-child(3) a").should(
        "have.attr",
        "href",
        Constants.SOCIAL_MEDIA_PATHS.linkedin
      );
      cy.get("li:nth-child(4) a").should(
        "have.attr",
        "href",
        Constants.SOCIAL_MEDIA_PATHS.instagram
      );
    });
  }

  assertLanguageChangeToGerman(){
    this.changeLanguage('GER')

  }

  assertLanguageChangeToFench(){
    this.changeLanguage('FRA')

  }

  assertLanguageChangeToNorwegian(){
    this.changeLanguage('NO')

  }

  assertLanguageChangeToEstonian(){
    this.changeLanguage('EST')
  }

   private changeLanguage(language: string) {
    cy.get("#site-navigation")
      .realHover()
      .contains("li.menu-item", "ENG")
      .within(() => {
        cy.get("a").contains(language).click({ force: true });
      });
  }
}

export default new HomepageTestAssertions();
