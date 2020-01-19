import { HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetResolver } from './resolvers/asset.resolver';
import { AssetsResolver } from './resolvers/assets.resolver';
import { EnplugService } from './services/enplug.service';
import { translationInitializer } from './translation.initializer';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({})
  ],
  providers: [
    AssetResolver,
    AssetsResolver,
    {
      provide: APP_INITIALIZER,
      useFactory: translationInitializer,
      deps: [
        EnplugService,
        TranslateService
      ],
      multi: true,
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
