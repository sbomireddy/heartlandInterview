import {browser} from 'protractor';
import {login} from './login.app.po';


describe('Heartland Point of Sale QA Candidate Problem Set', () => {
    let page: login;
   

beforeEach(() => {
  browser.ignoreSynchronization = true;
    page = new login();
    
  });
  it('TS_0001-Access Automation practice page', () => {
    page.navigateTo();
  });

  it('TS_0002- Search for a product', () => {
      page.searchProdcut();
    });

    it('TS_0003- Click on Search', () => {
      page.search();
    });
    it('TS_0004- Select a product', () => {
      page.selectProduct();
    });
    it('TS_0005- Select Quantity', () => {
      page.quantity();
    });
    it('TS_0006- Select Size', () => {
      page.size();
    });
    it('TS_0006- Select color', () => {
      page.color();
    });
    it('TS_0007- Add to Cart', () => {
      page.addCart();
    });
   
});