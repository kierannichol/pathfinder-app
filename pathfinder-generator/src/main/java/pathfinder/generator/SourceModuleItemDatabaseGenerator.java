package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import pathfinder.data.ItemDbo;
import pathfinder.data.ItemOptionDbo;
import pathfinder.data.ItemOptionSetDbo;
import pathfinder.data.ItemSummaryDbo;
import pathfinder.data.SourceModuleItemDatabaseDbo;
import pathfinder.model.Item;
import pathfinder.model.ItemOption;
import pathfinder.model.ItemOptionSet;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.util.StreamUtils;

@RequiredArgsConstructor
@Slf4j
public class SourceModuleItemDatabaseGenerator {

    private final SourceId sourceId;
    private final List<ItemProvider> itemProviders;
    private final List<ItemOptionsProvider> itemOptionsProviders;
    private final DatabaseWriter writer;

    protected Stream<Item> streamItems() {
        return itemProviders.stream()
                .flatMap(provider -> provider.items(sourceId))
                .filter(StreamUtils.duplicates(Item::id));
    }

    protected Stream<ItemOption> streamItemOptions() {
        return itemOptionsProviders.stream()
                .flatMap(provider -> provider.options(sourceId))
                .filter(StreamUtils.duplicates(ItemOption::code));
    }

    protected Stream<ItemOptionSet> streamItemOptionSets() {
        return itemOptionsProviders.stream()
                .flatMap(provider -> provider.optionSets(sourceId))
                .filter(StreamUtils.duplicates(ItemOptionSet::code));
    }

    private String databaseId() {
        return sourceId.code();
    }

    protected String getRelativeOutputPath() {
        return databaseId();
    }

    protected String getOutputDatabaseName() {
        return databaseId() + "_items";
    }

    protected ItemSummaryDbo encodedItemSummary(Item item) {
        return item.toSummaryDbo();
    }

    protected ItemDbo encodedItemDetailed(Item item) {
        return item.toDbo();
    }

    protected Message createSummaryDatabase(List<ItemSummaryDbo> items, List<ItemOptionSetDbo> itemOptionSets,
            List<ItemOptionDbo> itemOptions) {
        return SourceModuleItemDatabaseDbo.newBuilder()
                .setSourceId(sourceId.id())
                .setSourceCode(databaseId())
                .addAllItems(items)
                .addAllOptionSets(itemOptionSets)
                .addAllOptions(itemOptions)
                .build();
    }

    public void generate() throws IOException {
        String relativeOutputPath = getRelativeOutputPath();

        List<ItemSummaryDbo> summaries = new ArrayList<>();
        streamItems()
                .distinct()
                .forEachOrdered(model -> {
                    ItemSummaryDbo summary = encodedItemSummary(model);
                    if (summary != null) {
                        summaries.add(summary);
                    }

                    ItemDbo detailed = encodedItemDetailed(model);
                    if (detailed != null) {
                        writer.write(detailed, Integer.toString(model.id().number()), relativeOutputPath);
                    }
                });

        List<ItemOptionDbo> itemOptions = new ArrayList<>();
        streamItemOptions()
                .distinct()
                .forEachOrdered(option -> itemOptions.add(option.toDbo()));

        List<ItemOptionSetDbo> itemOptionSets = new ArrayList<>();
        streamItemOptionSets()
                .distinct()
                .forEachOrdered(optionSet -> itemOptionSets.add(optionSet.toDbo()));

        Message database = createSummaryDatabase(summaries,
                itemOptionSets,
                itemOptions);

        if (database != null) {
            writer.write(database, getOutputDatabaseName(), "");
        }
    }
}
