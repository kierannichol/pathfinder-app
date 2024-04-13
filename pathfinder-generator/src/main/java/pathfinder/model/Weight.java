package pathfinder.model;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public abstract class Weight {
    private static final Pattern WEIGHT_PATTERN = Pattern.compile("(?<amount>\\d+(?:[.,]\\d{2})?)\\s*(?<unit>\\w+)?\\.?");

    public static Weight parseWeight(String str) {
        Matcher matcher = WEIGHT_PATTERN.matcher(str);
        if (!matcher.find()) {
            throw new WeightFormatException("Invalid weight format: " + str);
        }

        double amount = Double.parseDouble(matcher.group("amount"));
        String unit = matcher.group("unit");
        if (unit == null) {
            unit = "lbs";
        }
        return switch (unit.toLowerCase()) {
            case "lbs", "lb" -> Weight.lbs(amount);
            case "kgs", "kg" -> Weight.kgs(amount);
            default -> throw new WeightFormatException("Unknown weight unit: " + unit);
        };
    }

    public static Weight lbs(double amount) {
        return new Lbs(amount);
    }

    public static Weight kgs(double amount) {
        return new Kgs(amount);
    }

    public abstract double toLbs();
    public abstract double toKgs();

    private static class Lbs extends Weight {
        private static final double KGS_TO_LBS = 2.205;

        private final double amount;

        public Lbs(double amount) {
            super();
            this.amount = amount;
        }

        @Override
        public double toLbs() {
            return amount;
        }

        @Override
        public double toKgs() {
            return amount / KGS_TO_LBS;
        }
    }

    private static class Kgs extends Weight {
        private static final double KGS_TO_LBS = 2.205;

        private final double amount;

        public Kgs(double amount) {
            super();
            this.amount = amount;
        }

        @Override
        public double toLbs() {
            return amount * KGS_TO_LBS;
        }

        @Override
        public double toKgs() {
            return amount;
        }
    }

    public static class WeightFormatException extends RuntimeException {

        public WeightFormatException(String message) {
            super(message);
        }
    }
}
