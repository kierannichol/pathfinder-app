class Id {
    static withOption(id, option) {
        return id + this.OptionDeliminator + option;
    }
    static withoutOption(id) {
        const index = id.lastIndexOf(Id.OptionDeliminator);
        if (index < 0)
            return id;
        return id.substring(0, index);
    }
    static justOption(id) {
        if (id === undefined)
            return undefined;
        const index = id.lastIndexOf(Id.OptionDeliminator);
        if (index < 0)
            return undefined;
        return id.substring(index + 1);
    }
    static justKey(id) {
        const startIndex = id.indexOf(Id.KeyStart);
        const endIndex = id.indexOf(Id.SpecificStart);
        return id.substring(startIndex < 0 ? 0 : startIndex + 1, endIndex < 0 ? undefined : endIndex);
    }
    constructor() {
    }
}
Id.OptionDeliminator = '#';
Id.KeyStart = ':';
Id.SpecificStart = '#';
export default Id;
