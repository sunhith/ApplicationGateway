import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ApplicationgatewaySharedModule } from 'app/shared/shared.module';
import { ApplicationgatewayCoreModule } from 'app/core/core.module';
import { ApplicationgatewayAppRoutingModule } from './app-routing.module';
import { ApplicationgatewayHomeModule } from './home/home.module';
import { ApplicationgatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { ChemicalComponent } from './chemical/chemical.component';

@NgModule({
  imports: [
    BrowserModule,
    ApplicationgatewaySharedModule,
    ApplicationgatewayCoreModule,
    ApplicationgatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ApplicationgatewayEntityModule,
    ApplicationgatewayAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent, ChemicalComponent],
  bootstrap: [JhiMainComponent]
})
export class ApplicationgatewayAppModule {}
