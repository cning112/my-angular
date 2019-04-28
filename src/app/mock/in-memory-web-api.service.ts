import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Overview } from 'src/app/projects/shared/data.model';
import * as faker from 'faker';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService {

  constructor() { }

  private fakeProject(): Overview {
    const name = `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`;
    return {
      id: faker.random.number(),
      slug: faker.helpers.slugify(name),
      name,
      description: faker.lorem.sentence(),
      createdUtc: faker.date.recent(365),
      createdBy: faker.name.firstName(),
      lastUpdateUtc: faker.date.recent(365),
      lastUpdateBy: faker.name.firstName(),
      Owner: faker.name.firstName()
    };
  }

  createDb() {
    const projects: Overview[] = _.range(14).map(i => this.fakeProject());
    return {projects};
  }
}
