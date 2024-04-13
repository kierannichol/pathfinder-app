package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.List;
import pathfinder.data.ItemOptionDbo;
import pathfinder.model.pathfinder.SourceId;

//    uint32 id = 1;
//    string name = 2;
//    string base_name_prefix = 3;
//    string base_name_postfix = 4;
//    uint32 point_cost = 5;
//    repeated uint32 tags = 6;
//    repeated uint32 unique_tags = 7;
public record ItemOption(String code,
                         String name,
                         String baseNamePrefix,
                         String baseNamePostfix,
                         int pointCost,
                         double currencyCostBase,
                         double currencyCostByWeight,
                         List<String> tags,
                         String uniqueTag,
                         SourceId sourceId) {

    public static ItemOption.Builder builder(String code, SourceId sourceId) {
        return new Builder(code, sourceId);
    }

    public ItemOptionDbo toDbo() {
        return ItemOptionDbo.newBuilder()
                .setId(sourceId.generate(code).number())
                .setName(name)
                .setBaseNamePrefix(baseNamePrefix)
                .setBaseNamePostfix(baseNamePostfix)
                .setPointCost(pointCost)
                .setCurrencyCost(currencyCostBase)
                .setCurrencyCostByWeight(currencyCostByWeight)
                .addAllTags(mapList(tags, t -> sourceId.generate("tag:" + t).number()))
                .setUniquenessTag(uniqueTag.isBlank() ? 0 : sourceId.generate("tag:" + uniqueTag).number())
                .build();
    }

    public static class Builder {
        private final String code;
        private final SourceId sourceId;
        private String name = "";
        private String baseNamePrefix = "";
        private String baseNamePostfix = "";
        private int pointCost = 0;
        private double currencyCostBase = 0;
        private double currencyCostByWeight = 0;
        private final List<String> tags = new ArrayList<>();
        private String uniquenessTag = "";

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setBaseNamePrefix(String prefix) {
            this.baseNamePrefix = prefix;
            return this;
        }

        public Builder setBaseNamePostfix(String postfix) {
            this.baseNamePostfix = postfix;
            return this;
        }

        public Builder setPointCost(int pointCost) {
            this.pointCost = pointCost;
            return this;
        }

        public Builder setCurrencyCostBase(double currencyCostBase) {
            this.currencyCostBase = currencyCostBase;
            return this;
        }

        public Builder setCurrencyCostByWeight(double currencyCostByWeight) {
            this.currencyCostByWeight = currencyCostByWeight;
            return this;
        }

        public Builder addTag(String tag) {
            this.tags.add(tag);
            return this;
        }

        public Builder setUniquenessTag(String tag) {
            this.uniquenessTag = tag;
            return this;
        }

        public ItemOption build() {
            return new ItemOption(code,
                    name,
                    baseNamePrefix,
                    baseNamePostfix,
                    pointCost,
                    currencyCostBase,
                    currencyCostByWeight,
                    tags,
                    uniquenessTag,
                    sourceId);
        }

        private Builder(String code, SourceId sourceId) {
            this.code = code;
            this.sourceId = sourceId;
        }
    }
}
