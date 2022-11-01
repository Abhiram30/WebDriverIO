import SearchPage from "../pageobjects/search.page";

describe("Google Search Page", () => {
  it("Should Able to write and search result", async () => {
    let searchString = "gurgaon";

    await SearchPage.open();

    await SearchPage.search(searchString);
  });

  it("Should Read the Links on Page 1", async () => {
    let links = await SearchPage.fetchLinks();
    expect(links).toBeDefined();
  });

  it("Should Click on Page 2", async () => {
    await SearchPage.page2Click();
    let resultStat = $("#result-stats");

    let pageNo = (await resultStat.getText()).split(" ")[1];

    expect("2").toEqual(pageNo);
  });

  it("Should Read the Links on Page 2", async () => {
    let links = await SearchPage.fetchLinks();
    expect(links).toBeDefined();
  });
});
