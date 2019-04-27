import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsResolverService } from './shared/projects-resolver.service';

const routes: Routes = [
  { path: '', component: ProjectListComponent, resolve: {projects: ProjectsResolverService} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
