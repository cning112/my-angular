export class Overview {
  id: number;
  slug: string;
  name: string;
  description: string;
  createdUtc: Date;
  createdBy: string;
  lastUpdateUtc: Date;
  lastUpdateBy: string;
  Owner: string;
}

export class Template extends Overview {
  version: string;
  labels: string[];
  // TODO
  rawdata: string;
  inputs: string[];
  outputs: string[];
  arguments: string[];
}

export class Project extends Overview {
  version: string;
  templates: Template[];
}
