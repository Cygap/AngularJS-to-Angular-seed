import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UpgradeModule],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap{ 
constructor(private upgrade: UpgradeModule) {}

ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
}
}
