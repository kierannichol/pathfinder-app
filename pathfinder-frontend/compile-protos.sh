#!/bin/sh -e

PROTO_FILE_DIR=../pathfinder-generator/src/main/proto
PROTO_FILE_LIST=$(find $PROTO_FILE_DIR -type f -name "*.proto")

./node_modules/protobufjs-cli/bin/pbjs --force-message -t static-module -w commonjs -o ./src/compiled.js -r ../pathfinder-generator/src/main/proto $PROTO_FILE_LIST
./node_modules/protobufjs-cli/bin/pbts -o ./src/compiled.d.ts ./src/compiled.js