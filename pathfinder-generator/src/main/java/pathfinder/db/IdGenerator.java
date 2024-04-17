package pathfinder.db;

import pathfinder.model.id.IntId;

public interface IdGenerator {

    IntId generate(String code);
}
