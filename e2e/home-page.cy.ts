import homePageAssertions from "../support/assertions/HomePageAssertions";
import homePage from "../support/pages/home-page";

describe("Home page", () => {
  beforeEach(() => {
    homePage.visitHomePage();
  });

  it("should redirect to Home page when helmes logo is clicked", () => {
    homePageAssertions.assertHomePageRedirectToHome();
  });

  it("should redirect to contact page when Contact us is clicked", () => {
    homePageAssertions.assertHomePageRedirectToContact;
  });

  it("should have correct address", () => {
    homePageAssertions.assertAddress;
  });

  it("should have correct email", () => {
    homePageAssertions.assertEmail;
  });

  it("should have correct phone", () => {
    homePageAssertions.assertPhone;
  });

  it("should have all socials with correct paths", () => {
    homePageAssertions.assertSocialMediaPaths;
  });

  it("should change language to German", () => {
    homePageAssertions.assertLanguageChangeToGerman;
  });

  it("should change language to French", () => {
    homePageAssertions.assertLanguageChangeToFench;
  });

  it("should change language to Estonian", () => {
    homePageAssertions.assertLanguageChangeToEstonian();
  });

  it("should change language to Norwegian", () => {
    homePageAssertions.assertLanguageChangeToNorwegian();
  });
});
