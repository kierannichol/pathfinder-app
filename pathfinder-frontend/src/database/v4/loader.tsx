import {util} from "protobufjs";
import {v4} from "../../compiled";
import EntityDatabase from "../../v4/EntityDatabase";
import {decodeEntity, decodeEntitySummary} from "./decode";
import fetch = util.fetch;
import EntityDatabaseDbo = v4.EntityDatabaseDbo;
import EntityDbo = v4.EntityDbo;

async function fetchProto<T>(path: string, decoder: (binary: Uint8Array) => T): Promise<T> {
  const binary = await fetch(`${process.env.PUBLIC_URL}/db/v4/${path}`, { binary: true });
  return decoder(binary as Uint8Array);
}

function idToFilename(id: string): string {
  return id
  .replaceAll(':', '_')
  .replaceAll('#', '_');
}

export async function loadEntity(detailsPath: string, id: string) {
  const dbo = await fetchProto(`${detailsPath}/${idToFilename(id)}.bin`,
      binary => EntityDbo.decode(binary));
  return decodeEntity(dbo);
}

export async function loadDatabase(path: string, detailsPath: string): Promise<EntityDatabase> {
  const data: EntityDatabaseDbo = await fetchProto(path + ".bin", binary => EntityDatabaseDbo.decode(binary));
  return new EntityDatabase(data.databaseId,
      data.summaries.map(decodeEntitySummary),
      id => loadEntity(detailsPath, id));
}