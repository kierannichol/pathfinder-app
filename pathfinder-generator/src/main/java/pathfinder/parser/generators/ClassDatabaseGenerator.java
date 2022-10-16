package pathfinder.parser.generators;

import static pathfinder.parser.ApplicationSettings.OUTPUT_DIRECTORY_PATH;

import com.google.protobuf.util.JsonFormat;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import pathfinder.parser.db.ClassDatabase;

public class ClassDatabaseGenerator {

    public static void main(String[] args) throws IOException {
        List<pathfinder.data.ClassData> classDataList = new ArrayList<>();
        try (ClassDatabase classDb = ClassDatabase.load()) {
//            classDb.stream().forEach(classEntry -> System.out.println(classEntry.toString()));
            classDb.stream().forEach(classEntry -> classDataList.add(pathfinder.data.ClassData.newBuilder()
                            .setId(classEntry.id())
                            .setName(classEntry.name())
                            .addAllLevels(classEntry.levels().stream()
                                    .map(entryLevel -> pathfinder.data.ClassData.Level.newBuilder()
                                            .setBab(entryLevel.bab())
                                            .setFortSave(entryLevel.fortSave())
                                            .setRefSave(entryLevel.refSave())
                                            .setWillSave(entryLevel.willSave())
                                            .addAllSpecial(entryLevel.special())
                                            .build())
                                    .toList())
                    .build()));
        }

        pathfinder.data.ClassDatabase database = pathfinder.data.ClassDatabase.newBuilder()
                .addAllClasses(classDataList)
                .build();
        Files.write(OUTPUT_DIRECTORY_PATH.resolve("ClassDatabase.bin"),
                database.toByteArray());
        Files.writeString(OUTPUT_DIRECTORY_PATH.resolve("ClassDatabase.json"),
                JsonFormat.printer().print(database));
    }
}
