import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { NgxsWebsocketPluginModule } from "@ngxs/websocket-plugin";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // SCHEMATICS | @ngxs/store | ng add
    // Add this Module. If we can, we should auto import the environment file when it doesn't exist
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    // SCHEMATICS | @ngxs/logger-plugin | ng add
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    // SCHEMATICS | @ngxs/storage-plugin | ng add
    NgxsStoragePluginModule.forRoot({}),
    // SCHEMATICS | @ngxs/form-plugin | ng add
    NgxsFormPluginModule.forRoot(),
    // SCHEMATICS | @ngxs/router-plugin | ng add
    NgxsRouterPluginModule.forRoot(),
    // SCHEMATICS | @ngxs/websocket-plugin | ng add
    NgxsWebsocketPluginModule.forRoot({
      url: "ws://localhost:4200", // this value can come from an optional argument?
      typeKey: "type", // this value can come from an optional argument?
      reconnectInterval: 5000, // this value can come from an optional argument?
      reconnectAttempts: 10, // this value can come from an optional argument?
    }),
    // SCHEMATICS | @ngxs/devtools-plugin | ng add
    // Should display a disclaimer message saying that the user should make sure that this is the last plugin added to the module
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      maxAge: 10 // this value can come from an optional argument?
    }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
