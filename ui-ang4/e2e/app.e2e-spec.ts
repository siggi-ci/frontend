import { UiAng4Page } from './app.po';

describe('ui-ang4 App', () => {
  let page: UiAng4Page;

  beforeEach(() => {
    page = new UiAng4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
