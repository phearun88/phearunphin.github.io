import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { AppRoute } from './app.route';
import { ResumeComponent } from './features/front/resume/resume.component';
import { ExperiencesComponent } from './features/front/experiences/experiences.component';
import { AchievementComponent } from './features/front/achievement/achievement.component';
import { ProjectsComponent } from './features/front/projects/projects.component';
import { ContactComponent } from './features/front/contact/contact.component';
import { SkillsComponent } from './features/front/skills/skills.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HomeComponent } from './features/front/home/home.component'; // <-- add this

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FrontLayoutComponent,
    ResumeComponent,
    ExperiencesComponent,
    AchievementComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoute),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
