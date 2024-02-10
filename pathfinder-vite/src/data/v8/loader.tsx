import {util} from "protobufjs";

export async function fetchProto<T>(path: string, decoder: (binary: Uint8Array) => T): Promise<T> {
  path = path.startsWith('/') ? path : '/' + path;
  const binary = await util.fetch(path, { binary: true });
  return decoder(binary as Uint8Array);
}