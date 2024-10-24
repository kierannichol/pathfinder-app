import {fetchProto} from "./loader.tsx";
import Database, {ItemDatabase} from "./Database.ts";
import {decodeCharacterTemplate, decodeFeatureSummary} from "./decoder.ts";
import SourceModule, {ExternalSourceModule} from "./SourceModule.ts";
import {data} from "@/compiled";
import {CharacterTemplate} from "./CharacterTemplate.ts";
import {SourceItemModule} from "@/data/v8/SourceItemModule.ts";
import CharacterTemplateDbo = data.CharacterTemplateDbo;
import SourceModuleDbo = data.SourceModuleDbo;
import SourceBookIndexDbo = data.SourceBookIndexDbo;

// const Modules: () => (SourceModule|Promise<SourceModule>)[] = () => [
//     loadModule('PZO1110'),
//     loadModule('PZO1114'),
//     loadModule('PZO1115'),
//     loadModule('PZO1117'),
//     loadModule('PZO1118'),
//     loadModule('PZO1123'),
//     loadModule('PZO1129'),
//     loadModule('PZO1131'),
//     loadModule('PZO1132'),
//     loadModule('PZO9476'),
//     loadModule('PZO9226'),
//     loadModule('PZO9267'),
//     loadModule('PZO9466'),
//     loadModule('PZO9407'),
// ];
//
// const ItemModules: () => (SourceItemModule|Promise<SourceItemModule>)[] = () => [
//   loadItemModule('PZO1110'),
//   // loadItemModule('PZO1114'),
//   loadItemModule('PZO1115'),
//   loadItemModule('PZO1117'),
//   loadItemModule('PZO1118'),
//   loadItemModule('PZO1123'),
//   loadItemModule('PZO1129'),
//   loadItemModule('PZO1131'),
//   loadItemModule('PZO1132'),
//   loadItemModule('PZO9476'),
//   loadItemModule('PZO9226'),
//   loadItemModule('PZO9267'),
//   loadItemModule('PZO9466'),
//   loadItemModule('PZO9407'),
// ];

export async function loadBaseCharacterTemplate(): Promise<CharacterTemplate> {
  const dbo = await fetchProto(`db/character_template.bin`, CharacterTemplateDbo.decode);
  return decodeCharacterTemplate(dbo);
}

async function loadModule(id: string): Promise<SourceModule> {
  const dbo = await fetchProto(`db/${id}.bin`, SourceModuleDbo.decode);
  return ExternalSourceModule.create(dbo.sourceId,
      dbo.title,
      dbo.features.map(decodeFeatureSummary));
}

async function loadItemModule(id: string): Promise<SourceItemModule> {
  return SourceItemModule.load(id);
}

async function loadSourceBookCodes(): Promise<string[]> {
  const dbo = await fetchProto('db/source_books.bin', SourceBookIndexDbo.decode);
  return dbo.sourceBookCode;
}

export async function initializePathfinderDatabase(): Promise<Database> {
  const sourceBooks = await loadSourceBookCodes();
  const modules = await Promise.all(sourceBooks.map(loadModule));
  return new Database(modules);
}

export async function initializePathfinderItemDatabase(): Promise<ItemDatabase> {
  const sourceBooks = await loadSourceBookCodes();
  const modules = await Promise.all(sourceBooks.map(loadItemModule));
  return new ItemDatabase(modules);
}