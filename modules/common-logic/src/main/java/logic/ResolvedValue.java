package logic;

import java.text.DecimalFormat;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

public abstract class ResolvedValue {

    public static ResolvedValue of(String value) {
        if (value == null) {
            return NullResolvedValue.INSTANCE;
        }
        return new TextResolvedValue(value);
    }

    public static ResolvedValue of(int value) {
        return new NumberResolvedValue(value);
    }

    public static ResolvedValue of(double value) {
        return new DecimalResolvedValue(value);
    }

    public static ResolvedValue of(boolean value) {
        return value
                ? BooleanTrueResolvedValue.INSTANCE
                : BooleanFalseResolvedValue.INSTANCE;
    }

    public static ResolvedValue none() {
        return NullResolvedValue.INSTANCE;
    }

    public abstract String asText();
    public abstract int asNumber();
    public abstract double asDecimal();
    public abstract boolean asBoolean();

    @RequiredArgsConstructor
    private static class TextResolvedValue extends ResolvedValue {
        private static final List<String> FALSE_STRING_VALUES = List.of("false", "no", "0", "");
        private final String value;

        @Override
        public String asText() {
            return value;
        }

        @Override
        public int asNumber() {
            return Integer.parseInt(value);
        }

        @Override
        public double asDecimal() {
            return Double.parseDouble(value);
        }

        @Override
        public boolean asBoolean() {
            return FALSE_STRING_VALUES.contains(value.toLowerCase(Locale.ROOT));
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }

            TextResolvedValue that = (TextResolvedValue) o;
            return Objects.equals(value, that.value);
        }

        @Override
        public int hashCode() {
            return value != null ? value.hashCode() : 0;
        }

        @Override
        public String toString() {
            return "\"" + value + "\"";
        }
    }

    @RequiredArgsConstructor
    private static class NumberResolvedValue extends ResolvedValue {
        private final int value;

        @Override
        public String asText() {
            return Integer.toString(value);
        }

        @Override
        public int asNumber() {
            return value;
        }

        @Override
        public double asDecimal() {
            return value;
        }

        @Override
        public boolean asBoolean() {
            return value != 0;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }

            NumberResolvedValue that = (NumberResolvedValue) o;
            return Objects.equals(value, that.value);
        }

        @Override
        public int hashCode() {
            return Integer.hashCode(value);
        }

        @Override
        public String toString() {
            return Integer.toString(value, 10);
        }
    }

    @RequiredArgsConstructor
    private static class DecimalResolvedValue extends ResolvedValue {
        private static final DecimalFormat DECIMAL_FORMAT = new DecimalFormat("0.#");

        private final double value;

        @Override
        public String asText() {
            return DECIMAL_FORMAT.format(value);
        }

        @Override
        public int asNumber() {
            return (int) value;
        }

        @Override
        public double asDecimal() {
            return value;
        }

        @Override
        public boolean asBoolean() {
            return value != 0;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }

            DecimalResolvedValue that = (DecimalResolvedValue) o;
            return Objects.equals(value, that.value);
        }

        @Override
        public int hashCode() {
            return Double.hashCode(value);
        }

        @Override
        public String toString() {
            return asText();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class BooleanTrueResolvedValue extends ResolvedValue {
        public static final BooleanTrueResolvedValue INSTANCE = new BooleanTrueResolvedValue();

        @Override
        public String asText() {
            return "true";
        }

        @Override
        public int asNumber() {
            return 1;
        }

        @Override
        public double asDecimal() {
            return 1.0;
        }

        @Override
        public boolean asBoolean() {
            return true;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            return o != null && getClass() == o.getClass();
        }

        @Override
        public int hashCode() {
            return Boolean.hashCode(true);
        }

        @Override
        public String toString() {
            return "true";
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class BooleanFalseResolvedValue extends ResolvedValue {
        public static final BooleanFalseResolvedValue INSTANCE = new BooleanFalseResolvedValue();

        @Override
        public String asText() {
            return "false";
        }

        @Override
        public int asNumber() {
            return 0;
        }

        @Override
        public double asDecimal() {
            return 0.0;
        }

        @Override
        public boolean asBoolean() {
            return false;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            return o != null && getClass() == o.getClass();
        }

        @Override
        public int hashCode() {
            return Boolean.hashCode(false);
        }

        @Override
        public String toString() {
            return "false";
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class NullResolvedValue extends ResolvedValue {
        public static final NullResolvedValue INSTANCE = new NullResolvedValue();

        @Override
        public String asText() {
            return "";
        }

        @Override
        public int asNumber() {
            return 0;
        }

        @Override
        public double asDecimal() {
            return 0;
        }

        @Override
        public boolean asBoolean() {
            return false;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            return o != null && getClass() == o.getClass();
        }

        @Override
        public int hashCode() {
            return 0;
        }

        @Override
        public String toString() {
            return "null";
        }
    }
}
