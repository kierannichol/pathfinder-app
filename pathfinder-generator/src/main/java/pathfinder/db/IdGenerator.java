package pathfinder.db;

import pathfinder.model.IntId;

public interface IdGenerator {

    IntId generate(String code);
}
