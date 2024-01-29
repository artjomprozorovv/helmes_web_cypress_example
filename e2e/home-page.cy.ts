import HomepageTestAssertions from "../support/pages/home-page";


describe("Home page", () => {
  beforeEach(() => {
    HomepageTestAssertions.visitHomePage();
  });

  it("should redirect to Home page when helmes logo is clicked", () => {
    HomepageTestAssertions.assertHomePageRedirectToHome();
  });

  it("should redirect to contact page when Contact us is clicked", () => {
    HomepageTestAssertions.assertHomePageRedirectToContact();
  });

  it("should have correct address/email/phone data", () => {
    HomepageTestAssertions.assertAddressEmailPhoneData();
  });

  it("should have all socials with correct paths", () => {
    HomepageTestAssertions.assertSocialMediaPaths();
  });

  it("should change language to German", () => {
    HomepageTestAssertions.assertLanguageChangeToGerman();
  });

  it("should change language to French", () => {
    HomepageTestAssertions.assertLanguageChangeToFench();
  });

  it("should change language to Estonian", () => {
    HomepageTestAssertions.assertLanguageChangeToEstonian();
  });

  it("should change language to Norwegian", () => {
    HomepageTestAssertions.assertLanguageChangeToNorwegian();
  });
});
