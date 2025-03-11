import com.google.protobuf.gradle.id

plugins {
    id("java")
    id("com.google.protobuf") version "0.9.4"
}

group = "pathfinder"
version = "1.0-SNAPSHOT"

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:${project.properties["protobufVersion"]}"
    }
    plugins {
        id("ts") {
            path = "node_modules/.bin/protoc-gen-ts"
        }
    }
    generateProtoTasks {
        all().forEach {
            it.plugins {
                id("ts") {
                    outputSubDir = "ts"
                }
            }
        }
    }
}

configurations {
    runtimeOnly {
        exclude(group = "org.slf4j", module = "slf4j-simple")
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.formula:formula-java:2.1.0")

    implementation("com.google.protobuf:protobuf-java:${project.properties["protobufVersion"]}")
    implementation("com.google.protobuf:protobuf-java-util:${project.properties["protobufVersion"]}")

    testImplementation("org.assertj:assertj-core:3.23.1")
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

tasks.test {
    useJUnitPlatform()
}

//task<Exec>("generateProtoJs") {
//    // --force-message -t static-module -w es6 -o $SCRIPTPATH/src/compiled.js -r $SCRIPTPATH/../pathfinder-generator/src/main/proto $PROTO_FILE_LIST
//    commandLine("./node_modules/protobufjs-cli/bin/pbjs",
//        "--force-message",
//        "-t", "static-module",
//        "-w", "es6",
//        "src/main/ts/compiled.js",
//        "-r", "src/main/proto",
//        "src/main/proto/Choice.proto",
//        "src/main/proto/Entity.proto",
//        "src/main/proto/Feature.proto",
//        "src/main/proto/Stack.proto")
//}

//task<Exec>("generateProtoTs") {
//    // --force-message -t static-module -w es6 -o $SCRIPTPATH/src/compiled.js -r $SCRIPTPATH/../pathfinder-generator/src/main/proto $PROTO_FILE_LIST
//    commandLine("./node_modules/protobufjs-cli/bin/pbjs", "-I=src/main/proto", "--java_out=src/main/java", "src/main/proto/ttrpg.proto")
//}