import { protractor, browser, element, by } from 'protractor';


const EC = protractor.ExpectedConditions;

export class login{
  navigateTo() {
    return browser.get('http://automationpractice.com/index.php');

  }
  searchProdcut() { 
  browser.driver.findElement(by.id('search_query_top')).sendKeys('Printed Dress');
  browser.driver.sleep(3000);
  }
  search() {
    let search = browser.driver.findElement(by.name('submit_search'));
    search.click().then(function () {
      browser.driver.sleep(4000);
    });
  }
  selectProduct() {  
    browser.driver.findElement(by.xpath('//*[@id="center_column"]/ul/li[1]/div/div[1]/div/a[1]/img')).click();
    browser.driver.sleep(3000);
  }
  quantity() { 
    browser.driver.actions().mouseMove(element(by.className('icon-plus'))).click().perform();
    browser.driver.sleep(3000);
    }
  size() { 
      browser.driver.findElement(by.id('group_1')).findElement(by.css("[value='2']")).click();
      browser.driver.sleep(3000);
      }
  color() { 
      browser.driver.actions().mouseMove(element(by.id('color_11'))).click().perform();
      browser.driver.sleep(3000);
        }
  addCart() {
      let addCart = browser.driver.findElement(by.id('add_to_cart'));
      addCart.click().then(function () {
      browser.driver.sleep(4000);
          });
        }
}