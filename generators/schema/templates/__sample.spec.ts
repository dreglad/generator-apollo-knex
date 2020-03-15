import { createSandbox } from 'sinon';
import { resolvers } from './<%= apiName %>';

const sandbox = createSandbox();

describe('<%=apiNameCap %>', () => {
  afterEach(() => sandbox.restore());
  describe('Query', () => {
    let query;
    beforeEach(() => {
      query = resolvers.Query;
    });

    describe('<%= apiNameCap %>', () => {
      it('should return <%= apiNameCap %> by id', async () => {
        const expected = { id: 'xxx' };
        const firstSpy = sandbox.fake.resolves(expected);
        const whereSpy = sandbox.fake.returns({
          first: firstSpy,
        });
        const context = {
          db: {
            query: sandbox.fake.returns({
              where: whereSpy,
            }),
          },
        };
        const input = {id: '100'};
  
        const result = await query.<%= apiNameCap %>(null, input, context);
        sandbox.assert.calledOnce(whereSpy);
        sandbox.assert.calledWith(whereSpy, {
          id: input.id,
        });
        sandbox.assert.calledOnce(firstSpy);
        result.should.deepEqual(expected);
      });
    })
  });
});