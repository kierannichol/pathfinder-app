package logic.context;

import java.util.stream.Stream;
import logic.ResolvedValue;

public interface DataContext {

    StaticDataContext EMPTY = StaticDataContext.empty();

    ResolvedValue get(String key);
    Stream<ResolvedValue> find(String pattern);
    Stream<String> keys();
}
