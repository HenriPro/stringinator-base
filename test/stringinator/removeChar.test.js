const stringinator = require('../../stringinator');

describe('removeChar()', () => {
  it('removes a target char', () => {
    expect(stringinator.removeChar('bubbles r', 'u')).toEqual('bbbles r');
  });
});
