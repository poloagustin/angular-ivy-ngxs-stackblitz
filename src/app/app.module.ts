import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";

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
    })
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
