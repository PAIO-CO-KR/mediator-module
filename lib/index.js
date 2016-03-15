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
    this.mediator = MediatorModule.globalMediator;
  }

  /**
   * gets global co-mediator
   * @returns {CoMediator}
   */
  static get globalMediator() {
    if (globalMediator === null) {
      globalMediator = new CoMediator();
    }
    return globalMediator;
  }

}

export default MediatorModule;
