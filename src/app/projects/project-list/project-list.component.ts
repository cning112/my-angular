import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectMeta } from '../shared/project.model';
import * as moment from 'moment';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @ViewChild('input') private searchBox: ElementRef;
  private allProjects: ProjectMeta[];
  private projects: ProjectMeta[];
  private name: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchBox.nativeElement.focus();
    this.route.data.subscribe((data: {projects: ProjectMeta[]}) => {
      this.allProjects = data.projects;
      this.projects = this.allProjects;
    });
  }

  filterProjects(): void {
    const lower = this.name.toLowerCase();
    this.projects = this.allProjects.filter(p => p.name.toLowerCase().includes(lower));
  }


  fromNow(dt: Date): string {
    return moment(dt).fromNow();
  }

}
