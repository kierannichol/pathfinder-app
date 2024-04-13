package pathfinder.generator;

import pathfinder.model.pathfinder.ClassFeature;

public class TypeAliasProvider {

    public String getTypeAliasForClassFeature(ClassFeature feature) {
        return feature.classId().key;
    }
}
