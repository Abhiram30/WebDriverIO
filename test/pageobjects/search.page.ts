import { ChainablePromiseElement } from "webdriverio";
import Page from "./page";

class SearchPage extends Page {
  public get searchBar() {
    return $('input[title="Search"]');
  }

  public get submitButton() {
    return browser.keys("Enter");
  }

  public get page2Anchor() {
    return $('a[aria-label="Page 2"]');
  }

  public async search(searchString: string) {
    await this.searchBar.setValue(searchString);
    await this.submitButton;
  }

  public async page2Click() {
    await this.page2Anchor.click();
  }

  public async fetchLinks() {
    let linksAvaliables = [];

    let headings = await $$("h3");

    for (var heading of headings) {
      let links = await heading.parentElement().getAttribute("href");
      linksAvaliables.push(links);
    }

    return linksAvaliables;
  }

  public open() {
    return super.open();
  }
}

export default new SearchPage();
