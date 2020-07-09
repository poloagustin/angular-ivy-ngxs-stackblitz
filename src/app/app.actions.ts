// SCHEMATICS | ng generate @ngxs/store:action
// `DoSomething` should be dynamic based on the name parameter of the command. CamelCased
// `App` should be retrieved from the module name (app). CamelCased

export class DoSomething {
  static readonly type = "[App] DoSomething";
  // constructor (public payload: T) {}
}
