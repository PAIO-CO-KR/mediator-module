import assert from 'assert';
import MediatorModule from '../lib';

describe('mediator-module', function () {
  it('should interact', function (done) {

    assert(MediatorModule.globalMediator !== null, 'should be called with param');

    class FirstMediatorModule extends MediatorModule {
      constructor() {
        super();
        this.mediator.subscribe('test', this.aTestFunction);
      }

      *aTestFunction() {
        done();
      }
    }

    class SecondMediatorModule extends MediatorModule {
      constructor() {
        super();
      }

      testPublish() {
        this.mediator.publish('test');
      }
    }

    let aModule = new FirstMediatorModule();
    aModule = new SecondMediatorModule();

    aModule.testPublish();
  });
});
