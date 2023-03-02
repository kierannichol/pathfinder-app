package pathfinder.model.v4;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class Tags {
    private final List<Tag> tags;

    public static Tags of(String... tags) {
        return new Tags(new ArrayList<>(mapList(Arrays.asList(tags), Tag::of)));
    }

    public Tags add(String tag) {
        this.tags.add(Tag.of(tag));
        return this;
    }

    public Tags add(Tag tag) {
        this.tags.add(tag);
        return this;
    }

    public Tags addAll(Tags tags) {
        this.tags.addAll(tags.tags);
        return this;
    }

    public List<String> toDbos() {
        return mapList(tags, Tag::toString);
    }
}
