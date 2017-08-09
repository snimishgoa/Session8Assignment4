import { Session8Assignment4Page } from './app.po';

describe('session8-assignment4 App', () => {
  let page: Session8Assignment4Page;

  beforeEach(() => {
    page = new Session8Assignment4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
