import { Angular2ChangeDetectionsPage } from './app.po';

describe('angular2-change-detections App', () => {
  let page: Angular2ChangeDetectionsPage;

  beforeEach(() => {
    page = new Angular2ChangeDetectionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
