package pathfinder.parser;

import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class BenefitParser {

    private static Map<String, String> benefitsByFeatId;

    static {
        var gson = new GsonBuilder()
                .setPrettyPrinting()
                .create();
        try (InputStream inputStream = ClassLoader.getSystemResourceAsStream("FeatBenefits.json")) {
            benefitsByFeatId = gson.fromJson(new InputStreamReader(inputStream), Map.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static List<String> tryParseBenefit(String featId, RawFeat feat) {
        if (!benefitsByFeatId.containsKey(featId)) {
            return Collections.emptyList();
        }
        return Arrays.stream(benefitsByFeatId.get(featId).split(";"))
                .map(String::trim)
                .toList();
    }
}
