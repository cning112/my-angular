import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
