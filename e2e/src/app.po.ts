import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getHeaderTitleText() {
    return element(by.css('app-root app-header header #headerTitle')).getText() as Promise<string>;
  }
}
