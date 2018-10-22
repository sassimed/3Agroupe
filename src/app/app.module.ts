import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { AboutComponent } from './home/about/about.component';
import { ServiceComponent } from './home/service/service.component';
import { FactComponent } from './home/fact/fact.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ClientComponent } from './home/client/client.component';
import { TeamComponent } from './home/team/team.component';
import { ContactComponent } from './home/contact/contact.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { GroupComponent } from './group/group.component';
import { LogoComponent } from './group/logo/logo.component';
import { ProjetComponent } from './group/projet/projet.component';
import { InfoComponent } from './group/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    GroupComponent,
    IntroComponent,
    AboutComponent,
    ServiceComponent,
    FactComponent,
    PortfolioComponent,
    ClientComponent,
    TeamComponent,
    ContactComponent,
    TestimonialComponent,
    LogoComponent,
    ProjetComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
