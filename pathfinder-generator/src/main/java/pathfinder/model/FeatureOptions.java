package pathfinder.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import pathfinder.data.FeatureOptionsDbo;

public record FeatureOptions(@JsonProperty("option_tag") String optionTag,
                             @JsonProperty("id_template") String idTemplate,
                             @JsonProperty("prerequisites_template") String prerequisitesTemplate) {

    public FeatureOptionsDbo toDbo() {
        return FeatureOptionsDbo.newBuilder()
                .setOptionTag(optionTag)
                .setIdTemplate(idTemplate)
                .setPrerequisitesTemplate(prerequisitesTemplate)
                .build();
    }
}
