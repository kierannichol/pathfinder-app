package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import pathfinder.data.ItemOptionSetDbo;

// message ItemOptionSetDbo {
//    uint32 id = 1;
//    bool has_points = 2;
//    uint32 max_points = 3;
//    map<uint32, uint32> point_cost = 4;
//    repeated int32 option_tags = 5;
//}
public class ItemOptionSet {
    private final OptionSetId id;
    private final boolean hasPoints;
    private final boolean hasMaxPoints;
    private final int maxPoints;
    private final Map<Integer, Double> pointCurrencyCost;
    private final List<ItemOptionGroup> optionGroups;

    public static ItemOptionSet.Builder builder(OptionSetId optionSetId) {
        return new Builder(optionSetId);
    }

    public ItemOptionSetDbo toDbo() {
        return ItemOptionSetDbo.newBuilder()
                .setId(id.number())
                .setHasPoints(hasPoints)
                .setHasMaxPoints(hasMaxPoints)
                .setMaxPoints(maxPoints)
                .putAllPointCurrencyCost(pointCurrencyCost)
                .addAllOptionGroups(mapList(optionGroups, ItemOptionGroup::toDbo))
//                .addAllOptionTags(mapList(optionTags, t -> Sources.CORE.generate("tag:" + t).number()))
                .build();
    }

    private ItemOptionSet(Builder builder) {
        this.id = builder.optionSetId;
        this.hasPoints = builder.hasPoints;
        this.hasMaxPoints = builder.hasMaxPoints;
        this.maxPoints = builder.maxPoints;
        this.pointCurrencyCost = builder.pointCurrencyCost;
        this.optionGroups = builder.optionGroups;
    }

    public String code() {
        return id.code();
    }

    public static class Builder {
        private final OptionSetId optionSetId;
        private boolean hasPoints = false;
        private boolean hasMaxPoints = false;
        private int maxPoints = 0;
        private final Map<Integer, Double> pointCurrencyCost = new HashMap<>();
        private final List<ItemOptionGroup> optionGroups = new ArrayList<>();

        public Builder setMaxPoints(int maxPoints) {
            this.hasPoints = true;
            this.hasMaxPoints = true;
            this.maxPoints = maxPoints;
            return this;
        }

        public Builder setPointCurrencyCost(int points, double cost) {
            this.hasPoints = true;
            this.pointCurrencyCost.put(points, cost);
            return this;
        }

        public Builder addOptionGroup(ItemOptionGroup group) {
            this.optionGroups.add(group);
            return this;
        }

        public ItemOptionSet build() {
            return new ItemOptionSet(this);
        }

        private Builder(OptionSetId optionSetId) {
            this.optionSetId = optionSetId;
        }
    }
}
