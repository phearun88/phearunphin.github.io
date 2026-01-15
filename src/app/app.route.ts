import { FrontLayoutComponent } from "./layouts/front-layout/front-layout.component";
import { HomeComponent } from "./features/front/home/home.component";
import { DashboardComponent } from "./features/admin/dashboard/dashboard.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { ResumeComponent } from "./features/front/resume/resume.component";
import { ExperiencesComponent } from "./features/front/experiences/experiences.component";
import { AchievementComponent } from "./features/front/achievement/achievement.component";
import { ProjectsComponent } from "./features/front/projects/projects.component";
import { SkillsComponent } from "./features/front/skills/skills.component";
import { ContactComponent } from "./features/front/contact/contact.component";


export const AppRoute = [
    {
      path: '',
      component : FrontLayoutComponent,
      children: [
        {path: '', component: HomeComponent},
        {path: 'skills', component: SkillsComponent},
        {path: 'experiences', component: ExperiencesComponent},
        {path: 'achievement', component: AchievementComponent},
        {path: 'projects', component: ProjectsComponent},
        {path: 'connect', component: ContactComponent},
      ]
    },
    {
      path: 'admin',
      component : AdminLayoutComponent,
      children: [
        {path: '', component: DashboardComponent},
      ]
    }
      
    
      
      
];