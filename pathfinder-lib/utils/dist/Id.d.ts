export default class Id {
    private static OptionDeliminator;
    private static KeyStart;
    private static SpecificStart;
    static withOption(id: string, option: string): string;
    static withoutOption(id: string): string;
    static justOption(id: string): string | undefined;
    static justKey(id: string): string | undefined;
    private constructor();
}
