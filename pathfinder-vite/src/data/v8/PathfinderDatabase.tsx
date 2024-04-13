import {fetchProto} from "./loader.tsx";
import Database from "./Database.ts";
import {decodeCharacterTemplate, decodeFeatureSummary} from "./decoder.ts";
import SourceModule, {ExternalSourceModule} from "./SourceModule.ts";
import {data} from "../../compiled";
import {CharacterTemplate} from "./CharacterTemplate.ts";
import CharacterTemplateDbo = data.CharacterTemplateDbo;
import SourceModuleDbo = data.SourceModuleDbo;

const Modules: (SourceModule|Promise<SourceModule>)[] = [
  loadModule('PZO1110'),
  loadModule('PZO1114'),
  loadModule('PZO1115'),
  loadModule('PZO1117'),
  loadModule('PZO1118'),
  loadModule('PZO1123'),
  loadModule('PZO1129'),
  loadModule('PZO1131'),
  loadModule('PZO1132'),
  loadModule('PZO9476'),
];

export async function loadBaseCharacterTemplate(): Promise<CharacterTemplate> {
  const dbo = await fetchProto(`db/character_template.bin`, CharacterTemplateDbo.decode);
  return decodeCharacterTemplate(dbo);
}

async function loadModule(id: string): Promise<SourceModule> {
  const dbo = await fetchProto(`db/${id}.bin`, SourceModuleDbo.decode);
  return ExternalSourceModule.create(dbo.sourceId,
      dbo.features.map(decodeFeatureSummary));
}

export async function initializePathfinderDatabase(): Promise<Database> {
  const modules = await Promise.all(Modules);
  return new Database(modules);
}