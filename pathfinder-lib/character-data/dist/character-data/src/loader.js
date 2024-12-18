"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProto = fetchProto;
const protobufjs_1 = require("protobufjs");
async function fetchProto(path, decoder) {
    path = path.startsWith('/') ? path.substring(1) : path;
    path = import.meta.env.BASE_URL + path;
    try {
        const binary = await protobufjs_1.util.fetch(path, { binary: true });
        return decoder(binary);
    }
    catch (error) {
        console.error("Failed to load " + path, error);
        throw error;
    }
}
