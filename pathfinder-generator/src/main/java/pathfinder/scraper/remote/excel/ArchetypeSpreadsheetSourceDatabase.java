package pathfinder.scraper.remote.excel;

public class ArchetypeSpreadsheetSourceDatabase {

//    @Override
//    public Stream<CharacterModifier> streamArchetypes() throws IOException {
//        try (Workbook workbook = loadClasspathWorkbook("ArchetypeDatabase.xlsx")) {
//            SpreadsheetDatabase database = new SpreadsheetDatabase(workbook);
//            return database.query("archetypes")
//                    .map(archetypeRow -> {
//                        return CharacterModifier.builder()
//                                .id(archetypeRow.getText("id"))
//                                .name(archetypeRow.getText("name"))
//                                .categoryId(archetypeRow.getInteger("category_id"))
//                                .descriptionText(archetypeRow.getText("description"))
//                                .source(Sources.findSourceByNameOrCode(archetypeRow.getText("source")))
//                                .effects(
//                                        database.query("effects")
//                                                .filter(effectRow -> effectRow.getText("archetype_id").equals(archetypeRow.getText("id")))
//                                                .map(effectRow -> CharacterEffect)
//                                )
//                                .build();
//                    });
//        }
//    }
}
