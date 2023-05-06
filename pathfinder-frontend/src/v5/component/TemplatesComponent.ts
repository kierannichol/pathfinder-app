import {Template} from "../../v4/Template";

export default class TemplatesComponent {
  constructor(private readonly templates: Record<string, Template>) {
  }

  addTemplate(template: Template): void {
    this.templates[template.id] = template;
  }
}