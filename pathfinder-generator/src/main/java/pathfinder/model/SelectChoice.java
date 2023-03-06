package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v4.ChoiceDbo;
import pathfinder.data.v4.ChoiceDbo.SelectChoiceDbo;

@RequiredArgsConstructor
public class SelectChoice implements Choice {
    private final String id;
    private final String label;
    private final String type;
    private final String condition;
    private final List<String> tags;
    private final List<Id> ids;

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setId(id)
                .setLabel(label)
                .setType(type)
                .setCondition(condition)
                .setSelect(SelectChoiceDbo.newBuilder()
                        .addAllTags(tags)
                        .addAllIds(mapList(ids, Id::string))
                        .build())
                .build();
    }
}
