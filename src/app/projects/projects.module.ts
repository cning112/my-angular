import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectDetailsComponent],
  imports: [
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
