import Language from './Language';

describe('Language', () => {
  it('translates', () => {
    const service = new Language('en');
    expect(service.translate('label.username')).toEqual('label.username');
  });
});
