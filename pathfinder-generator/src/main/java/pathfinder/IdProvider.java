package pathfinder;

import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.NumericId;

@Component
public class IdProvider {

    public NumericId id(Id id) {
        return id(id.string());
    }

    public NumericId id(String id) {
        return NumericId.EMPTY;
    }
}
