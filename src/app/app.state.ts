import { State } from "@ngxs/store";

// SCHEMATICS | ng generate @ngxs/store:state
// `App` should be dynamic based on the name parameter of the command. CamelCased
export interface AppStateModel {}

@State<AppStateModel>({
  // Value of name should be a camelCase version of the name parameter
  name: "app",
  defaults: {}
})
export class AppState {}
