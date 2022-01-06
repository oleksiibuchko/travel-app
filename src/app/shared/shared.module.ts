import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { HeaderNavComponent } from './molecules/header-nav/header-nav.component';
import { LogoComponent } from './molecules/logo/logo.component';
import { RouterLinkComponent } from './atoms/router-link/router-link.component';
import { ImageComponent } from './atoms/image/image.component';
import { HeaderComponent } from './organisms/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderActionsComponent } from './organisms/header-actions/header-actions.component';
import { HomeComponent } from './templates/home/home.component';
import { NavComponent } from './molecules/nav/nav.component';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { ContentComponent } from './organisms/content/content.component';
import { FormComponent } from './organisms/form/form.component';
import { ArticleComponent } from './molecules/article/article.component';
import { ExternalLinksComponent } from './molecules/external-links/external-links.component';
import { MainComponent } from './organisms/main/main.component';



@NgModule({
  declarations: [
    HeaderNavComponent,
    LogoComponent,
    RouterLinkComponent,
    ImageComponent,
    HeaderComponent,
    HeaderActionsComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    ContentComponent,
    FormComponent,
    ArticleComponent,
    ExternalLinksComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    HomeComponent
  ]
})
export class SharedModule { }
