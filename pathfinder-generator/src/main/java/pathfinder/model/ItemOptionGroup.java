package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.ItemOptionGroupDbo;

public class ItemOptionGroup {
    private final String name;
    private final List<OptionTag> optionTags;
    public boolean hasMaxSelectable;
    private final int maxSelectable;

    public static Builder builder() {
        return new Builder();
    }

    public String name() {
        return name;
    }

    public List<OptionTag> optionTags() {
        return optionTags;
    }

    public boolean hasMaxSelectable() {
        return hasMaxSelectable;
    }

    public int maxSelectable() {
        return maxSelectable;
    }

    public ItemOptionGroupDbo toDbo() {
        return ItemOptionGroupDbo.newBuilder()
                .setName(name)
                .addAllOptionTags(mapList(optionTags, OptionTag::number))
                .setHasMaxSelectable(hasMaxSelectable)
                .setMaxSelectable(maxSelectable)
                .build();
    }

    private ItemOptionGroup(Builder builder) {
        this.name = builder.name;
        this.optionTags = builder.optionTags;
        this.hasMaxSelectable = builder.hasMaxSelectable;
        this.maxSelectable = builder.maxSelectable;
    }

    public static class Builder {

        private String name = "";
        private final List<OptionTag> optionTags = new ArrayList<>();
        private boolean hasMaxSelectable = false;
        private int maxSelectable = 0;

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder addTag(String tag) {
            this.optionTags.add(OptionTag.of(tag));
            return this;
        }

        public Builder addTag(OptionTag tag) {
            this.optionTags.add(tag);
            return this;
        }

        public Builder setMaxSelectable(int maxSelectable) {
            this.hasMaxSelectable = true;
            this.maxSelectable = maxSelectable;
            return this;
        }

        public ItemOptionGroup build() {
            if (name.isBlank()) {
                throw new ModelValidationException("Item Option Group name cannot be empty");
            }
            if (optionTags.isEmpty()) {
                throw new ModelValidationException("Item Option Group has not option tags");
            }
            return new ItemOptionGroup(this);
        }

        private Builder() {}
    }
}
