import {util} from "protobufjs";
import {v3} from "../../compiled";
import ModificationDatabase from "../../v3/model/ModificationDatabase";
import {decodeCategory, decodeModification, decodeModificationSummary} from "./decode";
import fetch = util.fetch;
import ModificationDatabaseDbo = v3.ModificationDatabaseDbo;
import ModificationDetailsDbo = v3.ModificationDetailsDbo;

async function fetchProto<T>(path: string, decoder: (binary: Uint8Array) => T): Promise<T> {
  const binary = await fetch(`${process.env.PUBLIC_URL}/db/${path}`, { binary: true });
  return decoder(binary as Uint8Array);
}

function idToFilename(id: string): string {
  return id
  .replaceAll(':', '_')
  .replaceAll('#', '_');
}

export async function loadModification(detailsPath: string, id: string) {
  const dbo = await fetchProto(`${detailsPath}/${idToFilename(id)}.bin`,
      binary => ModificationDetailsDbo.decode(binary));
  return decodeModification(dbo);
}

export async function loadDatabase(path: string, detailsPath: string): Promise<ModificationDatabase> {
  const data: ModificationDatabaseDbo = await fetchProto(path + ".bin", binary => ModificationDatabaseDbo.decode(binary));
  return new ModificationDatabase(data.databaseId,
      data.summaries.map(decodeModificationSummary),
      data.categories.map(decodeCategory),
      id => loadModification(detailsPath, id));
}