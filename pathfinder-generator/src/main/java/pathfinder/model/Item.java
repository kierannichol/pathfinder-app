package pathfinder.model;

import static pathfinder.util.ListUtils.mapSet;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.ItemDbo;
import pathfinder.data.ItemSummaryDbo;
import pathfinder.model.pathfinder.SourceId;

public record Item(IntId id,
                   String code,
                   String name,
                   double cost,
                   double weight,
                   List<OptionSetId> optionSetIds,
                   List<String> tags,
                   Description description) {

    public static ItemBuilder builder(SourceId sourceId, String code) {
        return new ItemBuilder(sourceId, code);
    }

    public ItemSummaryDbo toSummaryDbo() {
        return ItemSummaryDbo.newBuilder()
                .setId(id.number())
                .setName(name)
                .setCost(cost)
                .setWeight(weight)
                .addAllTags(tags)
                .addAllOptionSets(mapSet(optionSetIds, OptionSetId::number))
                .build();
    }

    public ItemDbo toDbo() {
        return ItemDbo.newBuilder()
                .setId(id.number())
                .setName(name)
                .setCost(cost)
                .setWeight(weight)
                .addAllTags(tags)
                .addAllOptionSets(mapSet(optionSetIds, OptionSetId::number))
                .setDescription(description.toDbo())
                .build();
    }

    public static class ItemBuilder {
        private String name = "";
        private String code;
        private double cost = 0.0;
        private double weight = 0.0;
        private Description description = pathfinder.model.Description.empty();
        private final List<String> tags = new ArrayList<>();
        private final List<OptionSetId> optionSetIds = new ArrayList<>();
        private final SourceId sourceId;

        private ItemBuilder(SourceId sourceId, String code) {
            this.sourceId = sourceId;
            this.code = code;
        }

        public ItemBuilder setCode(String code) {
            this.code = code;
            return this;
        }

        public ItemBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public ItemBuilder setCost(double cost) {
            this.cost = cost;
            return this;
        }

        public ItemBuilder setWeight(double weight) {
            this.weight = weight;
            return this;
        }

        public ItemBuilder setDescription(String text) {
            return setDescription(pathfinder.model.Description.create(text));
        }

        public ItemBuilder setDescription(Description description) {
            this.description = description;
            return this;
        }

        public ItemBuilder addOptionSet(OptionSetId optionSetId) {
            this.optionSetIds.add(optionSetId);
            return this;
        }

        public ItemBuilder addTag(String tag) {
            String formattedTag = tag.toLowerCase().trim();
            if (this.tags.contains(formattedTag)) {
                return this;
            }
            this.tags.add(formattedTag);
            return this;
        }

        public Item build() {
            return new Item(sourceId.generate(code),
                    code,
                    name,
                    cost,
                    weight,
                    optionSetIds,
                    tags,
                    description);
        }
    }
}
