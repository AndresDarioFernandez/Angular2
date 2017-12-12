import { AngularMaterialHelloWorldPage } from './app.po';

describe('angular-material-hello-world App', () => {
  let page: AngularMaterialHelloWorldPage;

  beforeEach(() => {
    page = new AngularMaterialHelloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
