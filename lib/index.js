let CoMediator = require('co-mediator');

let globalMediator = null;

/**
 * MediatorModule
 */
class MediatorModule {

  /**
   * constructor
   */
  constructor() {
    if (globalMediator === null) {
      globalMediator = new CoMediator();
    }
    this.mediator = globalMediator;
  }

}

export default MediatorModule;
