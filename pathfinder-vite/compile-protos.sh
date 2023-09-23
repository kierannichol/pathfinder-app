#!/bin/sh -e

SCRIPT=$(readlink -f $0)
SCRIPTPATH=`dirname $SCRIPT`

PROTO_FILE_DIR=$SCRIPTPATH/../pathfinder-generator/src/main/proto
PROTO_FILE_LIST=$(find $PROTO_FILE_DIR -type f -name "*.proto")

./node_modules/protobufjs-cli/bin/pbjs --force-message -t static-module -w es6 -o $SCRIPTPATH/src/compiled.js -r $SCRIPTPATH/../pathfinder-generator/src/main/proto $PROTO_FILE_LIST
./node_modules/protobufjs-cli/bin/pbts -o $SCRIPTPATH/src/compiled.d.ts $SCRIPTPATH/src/compiled.js

#cd $SCRIPTPATH
#npx protoc --ts_out $SCRIPTPATH/src/ --proto_path $SCRIPTPATH/../pathfinder-generator/src/main/proto $PROTO_FILE_LIST