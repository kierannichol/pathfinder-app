import {util} from "protobufjs";

export async function fetchProto<T>(path: string, decoder: (binary: Uint8Array) => T): Promise<T> {
  path = path.startsWith('/') ? path.substring(1) : path;
  path = import.meta.env.BASE_URL + path;
  const binary = await util.fetch(path, { binary: true });
  return decoder(binary as Uint8Array);
}