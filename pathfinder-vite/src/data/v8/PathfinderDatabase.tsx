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