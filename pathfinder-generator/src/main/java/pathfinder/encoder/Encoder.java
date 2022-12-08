package pathfinder.encoder;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;

public interface Encoder<M,D> {

    D encode(M model);

    default List<D> encodeList(List<M> models) {
        return mapList(models, this::encode);
    }
}
