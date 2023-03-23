package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;
import static pathfinder.util.ListUtils.mapSet;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class Tags {
    private final Set<Tag> tags;

    public static Tags of(String... tags) {
        return new Tags(new HashSet<>(mapList(Arrays.asList(tags), Tag::of)));
    }

    public static Tags of(Collection<Tag> tags) {
        return new Tags(new HashSet<>(tags));
    }

    public Tags add(String tag) {
        return add(Tag.of(tag));
    }

    public Tags add(Tag tag) {
        Set<Tag> combined = new HashSet<>(this.tags);
        combined.add(tag);
        return new Tags(combined);
    }

    public Tags addAll(Tags tags) {
        Set<Tag> combined = new HashSet<>(this.tags);
        combined.addAll(tags.tags);
        return new Tags(combined);
    }

    public Set<String> toDbos() {
        return mapSet(tags, Tag::toString);
    }

    public Set<Tag> list() {
        return Collections.unmodifiableSet(this.tags);
    }
}
