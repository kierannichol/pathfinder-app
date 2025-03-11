package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;
import static pathfinder.util.ListUtils.mapSet;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import pathfinder.data.ItemDbo;
import pathfinder.data.ItemSummaryDbo;
import pathfinder.model.id.IntId;
import pathfinder.model.pathfinder.SourceId;

public record Item(IntId id,
                   String code,
                   String name,
                   double cost,
                   double weight,
                   List<OptionSetId> optionSetIds,
                   List<String> tags,
                   Description description,
                   List<String> actions,
                   Map<String, Integer> stats,
                   List<Effect> effects,
                   AttackModification attackMod,
                   List<Attack> attacks) {

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
        var builder = ItemDbo.newBuilder()
                .setId(id.number())
                .setName(name)
                .setCost(cost)
                .setWeight(weight)
                .addAllTags(tags)
                .addAllOptionSets(mapSet(optionSetIds, OptionSetId::number))
                .setDescription(description.toDbo())
                .addAllActions(actions)
                .addAllEffects(mapList(effects, Effect::toDbo))
                .addAllAttacks(mapList(attacks, Attack::toDbo))
                .putAllStats(stats);

        if (attackMod != null) {
            builder.setAttackModifier(attackMod.toDbo());
        }

        return builder.build();
    }

    public static class ItemBuilder {
        private String name = "";
        private String code;
        private double cost = 0.0;
        private double weight = 0.0;
        private Description description = pathfinder.model.Description.empty();
        private final List<String> tags = new ArrayList<>();
        private final List<OptionSetId> optionSetIds = new ArrayList<>();
        private final List<String> actions = new ArrayList<>();
        private final Map<String, Integer> stats = new HashMap<>();
        private final SourceId sourceId;
        private AttackModification attackMod;
        private final List<Effect> effects = new ArrayList<>();
        private final List<Attack> attacks = new ArrayList<>();

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

        public ItemBuilder addAction(String action) {
            actions.add(action);
            return this;
        }

        public ItemBuilder addStat(String key, int value) {
            stats.put(key, value);
            return this;
        }

        public ItemBuilder addStats(Map<String, Integer> stats) {
            if (stats == null) {
                return this;
            }
            this.stats.putAll(stats);
            return this;
        }

        public ItemBuilder setAttackMod(AttackModification attackMod) {
            this.attackMod = attackMod;
            return this;
        }

        public ItemBuilder addEffect(Effect effect) {
            this.effects.add(effect);
            return this;
        }

        public ItemBuilder addAttack(Attack attack) {
            this.attacks.add(attack);
            return this;
        }

        public ItemBuilder addAllAttacks(List<Attack> attacks) {
            this.attacks.addAll(attacks);
            return this;
        }

        public ItemBuilder addEffects(Collection<Effect> effects) {
            if (effects == null) {
                return this;
            }
            this.effects.addAll(effects);
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
                    description,
                    actions,
                    stats,
                    effects,
                    attackMod,
                    attacks);
        }
    }
}
