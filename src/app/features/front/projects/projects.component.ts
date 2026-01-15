import { Component } from '@angular/core';
export class ProjectExp{
  #id!: number;
  #name!: string;
  #iConUrl!: string;
  #description!: string;
  #repoUrl!: string;
  #techstack!: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})


export class ProjectsComponent {

}
