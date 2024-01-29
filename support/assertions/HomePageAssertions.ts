import homePage from "../pages/home-page";
import * as Constants from "../constants";

class HomePageAssertions {
  assertAddress() {
    cy.scrollTo("bottom");
    homePage.getAddress().should("exist");
  }

  assertPhone() {
    cy.scrollTo("bottom");
    homePage.getPhoneNumber().should("exist");
  }

  assertEmail() {
    cy.scrollTo("bottom");
    homePage.getEmail().should("exist");
  }

  assertLanguageChangeToGerman(): void {
    homePage.changeLanguage(Constants.LANGUAGES.GERMAN);
  }

  assertLanguageChangeToFench(): void {
    homePage.changeLanguage(Constants.LANGUAGES.FRENCH);
  }

  assertLanguageChangeToNorwegian(): void {
    homePage.changeLanguage(Constants.LANGUAGES.NORWEGIAN);
  }

  assertLanguageChangeToEstonian(): void {
    homePage.changeLanguage(Constants.LANGUAGES.ESTONIAN);
  }

  assertHomePageRedirectToHome() {
    homePage.header.find('svg[enable-background="new 0 0 125 28"]').click();
    cy.url().should("eq", Constants.HOME_PAGE_URL);
  }

  assertHomePageRedirectToContact() {
    homePage.getContactButton.click();
    cy.url().should("eq", Constants.CONTACT_PAGE_URL);
  }

  assertSocialMediaPaths(): void {
    cy.scrollTo("bottom");
    homePage.getSocialMediaLink("1", Constants.SOCIAL_MEDIA_PATHS.facebook);
    homePage.getSocialMediaLink("2", Constants.SOCIAL_MEDIA_PATHS.twitter);
    homePage.getSocialMediaLink("3", Constants.SOCIAL_MEDIA_PATHS.linkedin);
    homePage.getSocialMediaLink("4", Constants.SOCIAL_MEDIA_PATHS.instagram);
  }
}

export default new HomePageAssertions();
