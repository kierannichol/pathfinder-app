import fetch = util.fetch;
import {util} from "protobufjs";

export async function fetchProto<T>(path: string, decoder: (binary: Uint8Array) => T): Promise<T> {
  const binary = await fetch(`${process.env.PUBLIC_URL}/${path}`, { binary: true });
  return decoder(binary as Uint8Array);
}