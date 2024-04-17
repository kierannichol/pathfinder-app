package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import java.util.List;
import pathfinder.data.ItemOptionDbo;
import pathfinder.data.ItemOptionSummaryDbo;
import pathfinder.model.pathfinder.FromSourceBook;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;

//    uint32 id = 1;
//    string name = 2;
//    string base_name_prefix = 3;
//    string base_name_postfix = 4;
//    uint32 point_cost = 5;
//    repeated uint32 tags = 6;
//    repeated uint32 unique_tags = 7;
public record ItemOption(String code,
                         String name,
                         Description description,
                         @JsonProperty("base_name_prefix") String baseNamePrefix,
                         @JsonProperty("base_name_postfix") String baseNamePostfix,
                         @JsonProperty("point_cost") int pointCost,
                         @JsonProperty("currency_cost_base") double currencyCostBase,
                         @JsonProperty("currency_cost_by_weight") double currencyCostByWeight,
                         List<String> tags,
                         @JsonProperty("source_id") SourceId sourceId) implements FromSourceBook {

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
                .addAllTags(mapList(tags, t -> Sources.CORE.generate("tag:" + t).number()))
                .setDescription(description.toDbo())
                .build();
    }

    public ItemOptionSummaryDbo toSummaryDbo() {
        return ItemOptionSummaryDbo.newBuilder()
                .setId(sourceId.generate(code).number())
                .setName(name)
                .setBaseNamePrefix(baseNamePrefix)
                .setBaseNamePostfix(baseNamePostfix)
                .setPointCost(pointCost)
                .setCurrencyCost(currencyCostBase)
                .setCurrencyCostByWeight(currencyCostByWeight)
                .addAllTags(mapList(tags, t -> Sources.CORE.generate("tag:" + t).number()))
                .build();
    }

    @Override
    public List<String> sources() {
        if (sourceId == null) {
            return List.of();
        }
        return List.of(sourceId.code());
    }

    public static class Builder {
        private final String code;
        private final SourceId sourceId;
        private String name = "";
        private Description description = Description.empty();
        private String baseNamePrefix = "";
        private String baseNamePostfix = "";
        private int pointCost = 0;
        private double currencyCostBase = 0;
        private double currencyCostByWeight = 0;
        private final List<String> tags = new ArrayList<>();

        public String getCode() {
            return code;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setDescription(String text) {
            this.description = Description.create(text);
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

        public ItemOption build() {
            return new ItemOption(code,
                    name,
                    description,
                    baseNamePrefix,
                    baseNamePostfix,
                    pointCost,
                    currencyCostBase,
                    currencyCostByWeight,
                    tags,
                    sourceId);
        }

        private Builder(String code, SourceId sourceId) {
            this.code = code;
            this.sourceId = sourceId;
        }
    }
}
