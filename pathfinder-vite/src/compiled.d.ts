import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace data. */
export namespace data {

    /** Properties of a ChoiceDbo. */
    interface IChoiceDbo {

        /** ChoiceDbo choiceId */
        choiceId?: (string|null);

        /** ChoiceDbo label */
        label?: (string|null);

        /** ChoiceDbo type */
        type?: (string|null);

        /** ChoiceDbo repeating */
        repeating?: (boolean|null);

        /** ChoiceDbo text */
        text?: (data.TextChoiceInputDbo|null);

        /** ChoiceDbo featureSelect */
        featureSelect?: (data.FeatureSelectChoiceInputDbo|null);
    }

    /** Represents a ChoiceDbo. */
    class ChoiceDbo implements IChoiceDbo {

        /**
         * Constructs a new ChoiceDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IChoiceDbo);

        /** ChoiceDbo choiceId. */
        public choiceId: string;

        /** ChoiceDbo label. */
        public label: string;

        /** ChoiceDbo type. */
        public type: string;

        /** ChoiceDbo repeating. */
        public repeating: boolean;

        /** ChoiceDbo text. */
        public text?: (data.TextChoiceInputDbo|null);

        /** ChoiceDbo featureSelect. */
        public featureSelect?: (data.FeatureSelectChoiceInputDbo|null);

        /** ChoiceDbo input. */
        public input?: ("text"|"featureSelect");

        /**
         * Creates a new ChoiceDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChoiceDbo instance
         */
        public static create(properties?: data.IChoiceDbo): data.ChoiceDbo;

        /**
         * Encodes the specified ChoiceDbo message. Does not implicitly {@link data.ChoiceDbo.verify|verify} messages.
         * @param message ChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChoiceDbo message, length delimited. Does not implicitly {@link data.ChoiceDbo.verify|verify} messages.
         * @param message ChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ChoiceDbo;

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ChoiceDbo;

        /**
         * Verifies a ChoiceDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChoiceDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChoiceDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ChoiceDbo;

        /**
         * Creates a plain object from a ChoiceDbo message. Also converts values to other types if specified.
         * @param message ChoiceDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ChoiceDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChoiceDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChoiceDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TextChoiceInputDbo. */
    interface ITextChoiceInputDbo {
    }

    /** Represents a TextChoiceInputDbo. */
    class TextChoiceInputDbo implements ITextChoiceInputDbo {

        /**
         * Constructs a new TextChoiceInputDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.ITextChoiceInputDbo);

        /**
         * Creates a new TextChoiceInputDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextChoiceInputDbo instance
         */
        public static create(properties?: data.ITextChoiceInputDbo): data.TextChoiceInputDbo;

        /**
         * Encodes the specified TextChoiceInputDbo message. Does not implicitly {@link data.TextChoiceInputDbo.verify|verify} messages.
         * @param message TextChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.TextChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TextChoiceInputDbo message, length delimited. Does not implicitly {@link data.TextChoiceInputDbo.verify|verify} messages.
         * @param message TextChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.TextChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TextChoiceInputDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TextChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.TextChoiceInputDbo;

        /**
         * Decodes a TextChoiceInputDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TextChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.TextChoiceInputDbo;

        /**
         * Verifies a TextChoiceInputDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TextChoiceInputDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TextChoiceInputDbo
         */
        public static fromObject(object: { [k: string]: any }): data.TextChoiceInputDbo;

        /**
         * Creates a plain object from a TextChoiceInputDbo message. Also converts values to other types if specified.
         * @param message TextChoiceInputDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.TextChoiceInputDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TextChoiceInputDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TextChoiceInputDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeatureSelectChoiceInputDbo. */
    interface IFeatureSelectChoiceInputDbo {

        /** FeatureSelectChoiceInputDbo optionTags */
        optionTags?: (string[]|null);

        /** FeatureSelectChoiceInputDbo featureIds */
        featureIds?: (string[]|null);

        /** FeatureSelectChoiceInputDbo categories */
        categories?: (data.FeatureSelectChoiceCategoryDbo[]|null);

        /** FeatureSelectChoiceInputDbo sortBy */
        sortBy?: (data.FeatureSelectChoiceSortByDbo|null);
    }

    /** Represents a FeatureSelectChoiceInputDbo. */
    class FeatureSelectChoiceInputDbo implements IFeatureSelectChoiceInputDbo {

        /**
         * Constructs a new FeatureSelectChoiceInputDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IFeatureSelectChoiceInputDbo);

        /** FeatureSelectChoiceInputDbo optionTags. */
        public optionTags: string[];

        /** FeatureSelectChoiceInputDbo featureIds. */
        public featureIds: string[];

        /** FeatureSelectChoiceInputDbo categories. */
        public categories: data.FeatureSelectChoiceCategoryDbo[];

        /** FeatureSelectChoiceInputDbo sortBy. */
        public sortBy: data.FeatureSelectChoiceSortByDbo;

        /**
         * Creates a new FeatureSelectChoiceInputDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureSelectChoiceInputDbo instance
         */
        public static create(properties?: data.IFeatureSelectChoiceInputDbo): data.FeatureSelectChoiceInputDbo;

        /**
         * Encodes the specified FeatureSelectChoiceInputDbo message. Does not implicitly {@link data.FeatureSelectChoiceInputDbo.verify|verify} messages.
         * @param message FeatureSelectChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.FeatureSelectChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureSelectChoiceInputDbo message, length delimited. Does not implicitly {@link data.FeatureSelectChoiceInputDbo.verify|verify} messages.
         * @param message FeatureSelectChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.FeatureSelectChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureSelectChoiceInputDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureSelectChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FeatureSelectChoiceInputDbo;

        /**
         * Decodes a FeatureSelectChoiceInputDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureSelectChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FeatureSelectChoiceInputDbo;

        /**
         * Verifies a FeatureSelectChoiceInputDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureSelectChoiceInputDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureSelectChoiceInputDbo
         */
        public static fromObject(object: { [k: string]: any }): data.FeatureSelectChoiceInputDbo;

        /**
         * Creates a plain object from a FeatureSelectChoiceInputDbo message. Also converts values to other types if specified.
         * @param message FeatureSelectChoiceInputDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.FeatureSelectChoiceInputDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureSelectChoiceInputDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatureSelectChoiceInputDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeatureSelectChoiceCategoryDbo. */
    interface IFeatureSelectChoiceCategoryDbo {

        /** FeatureSelectChoiceCategoryDbo label */
        label?: (string|null);

        /** FeatureSelectChoiceCategoryDbo tag */
        tag?: (string|null);
    }

    /** Represents a FeatureSelectChoiceCategoryDbo. */
    class FeatureSelectChoiceCategoryDbo implements IFeatureSelectChoiceCategoryDbo {

        /**
         * Constructs a new FeatureSelectChoiceCategoryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IFeatureSelectChoiceCategoryDbo);

        /** FeatureSelectChoiceCategoryDbo label. */
        public label: string;

        /** FeatureSelectChoiceCategoryDbo tag. */
        public tag: string;

        /**
         * Creates a new FeatureSelectChoiceCategoryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureSelectChoiceCategoryDbo instance
         */
        public static create(properties?: data.IFeatureSelectChoiceCategoryDbo): data.FeatureSelectChoiceCategoryDbo;

        /**
         * Encodes the specified FeatureSelectChoiceCategoryDbo message. Does not implicitly {@link data.FeatureSelectChoiceCategoryDbo.verify|verify} messages.
         * @param message FeatureSelectChoiceCategoryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.FeatureSelectChoiceCategoryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureSelectChoiceCategoryDbo message, length delimited. Does not implicitly {@link data.FeatureSelectChoiceCategoryDbo.verify|verify} messages.
         * @param message FeatureSelectChoiceCategoryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.FeatureSelectChoiceCategoryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureSelectChoiceCategoryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureSelectChoiceCategoryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FeatureSelectChoiceCategoryDbo;

        /**
         * Decodes a FeatureSelectChoiceCategoryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureSelectChoiceCategoryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FeatureSelectChoiceCategoryDbo;

        /**
         * Verifies a FeatureSelectChoiceCategoryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureSelectChoiceCategoryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureSelectChoiceCategoryDbo
         */
        public static fromObject(object: { [k: string]: any }): data.FeatureSelectChoiceCategoryDbo;

        /**
         * Creates a plain object from a FeatureSelectChoiceCategoryDbo message. Also converts values to other types if specified.
         * @param message FeatureSelectChoiceCategoryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.FeatureSelectChoiceCategoryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureSelectChoiceCategoryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatureSelectChoiceCategoryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** FeatureSelectChoiceSortByDbo enum. */
    enum FeatureSelectChoiceSortByDbo {
        FEATURE_SELECT_CHOICE_SORTBY_NONE = 0,
        FEATURE_SELECT_CHOICE_SORTBY_NAME = 1
    }

    /** Properties of a DescriptionDbo. */
    interface IDescriptionDbo {

        /** DescriptionDbo text */
        text?: (string|null);

        /** DescriptionDbo sections */
        sections?: ({ [k: string]: string }|null);
    }

    /** Represents a DescriptionDbo. */
    class DescriptionDbo implements IDescriptionDbo {

        /**
         * Constructs a new DescriptionDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IDescriptionDbo);

        /** DescriptionDbo text. */
        public text: string;

        /** DescriptionDbo sections. */
        public sections: { [k: string]: string };

        /**
         * Creates a new DescriptionDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DescriptionDbo instance
         */
        public static create(properties?: data.IDescriptionDbo): data.DescriptionDbo;

        /**
         * Encodes the specified DescriptionDbo message. Does not implicitly {@link data.DescriptionDbo.verify|verify} messages.
         * @param message DescriptionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.DescriptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DescriptionDbo message, length delimited. Does not implicitly {@link data.DescriptionDbo.verify|verify} messages.
         * @param message DescriptionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.DescriptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DescriptionDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DescriptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.DescriptionDbo;

        /**
         * Decodes a DescriptionDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DescriptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.DescriptionDbo;

        /**
         * Verifies a DescriptionDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DescriptionDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DescriptionDbo
         */
        public static fromObject(object: { [k: string]: any }): data.DescriptionDbo;

        /**
         * Creates a plain object from a DescriptionDbo message. Also converts values to other types if specified.
         * @param message DescriptionDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.DescriptionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DescriptionDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DescriptionDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeatureSummaryDbo. */
    interface IFeatureSummaryDbo {

        /** FeatureSummaryDbo id */
        id?: (string|null);

        /** FeatureSummaryDbo name */
        name?: (string|null);

        /** FeatureSummaryDbo tags */
        tags?: (string[]|null);

        /** FeatureSummaryDbo enabledFormula */
        enabledFormula?: (string|null);

        /** FeatureSummaryDbo maxStacks */
        maxStacks?: (number|null);

        /** FeatureSummaryDbo label */
        label?: (string|null);
    }

    /** Represents a FeatureSummaryDbo. */
    class FeatureSummaryDbo implements IFeatureSummaryDbo {

        /**
         * Constructs a new FeatureSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IFeatureSummaryDbo);

        /** FeatureSummaryDbo id. */
        public id: string;

        /** FeatureSummaryDbo name. */
        public name: string;

        /** FeatureSummaryDbo tags. */
        public tags: string[];

        /** FeatureSummaryDbo enabledFormula. */
        public enabledFormula: string;

        /** FeatureSummaryDbo maxStacks. */
        public maxStacks?: (number|null);

        /** FeatureSummaryDbo label. */
        public label?: (string|null);

        /** FeatureSummaryDbo _maxStacks. */
        public _maxStacks?: "maxStacks";

        /** FeatureSummaryDbo _label. */
        public _label?: "label";

        /**
         * Creates a new FeatureSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureSummaryDbo instance
         */
        public static create(properties?: data.IFeatureSummaryDbo): data.FeatureSummaryDbo;

        /**
         * Encodes the specified FeatureSummaryDbo message. Does not implicitly {@link data.FeatureSummaryDbo.verify|verify} messages.
         * @param message FeatureSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.FeatureSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureSummaryDbo message, length delimited. Does not implicitly {@link data.FeatureSummaryDbo.verify|verify} messages.
         * @param message FeatureSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.FeatureSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FeatureSummaryDbo;

        /**
         * Decodes a FeatureSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FeatureSummaryDbo;

        /**
         * Verifies a FeatureSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): data.FeatureSummaryDbo;

        /**
         * Creates a plain object from a FeatureSummaryDbo message. Also converts values to other types if specified.
         * @param message FeatureSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.FeatureSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatureSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeatureDbo. */
    interface IFeatureDbo {

        /** FeatureDbo id */
        id?: (string|null);

        /** FeatureDbo name */
        name?: (string|null);

        /** FeatureDbo tags */
        tags?: (string[]|null);

        /** FeatureDbo enabledFormula */
        enabledFormula?: (string|null);

        /** FeatureDbo maxStacks */
        maxStacks?: (number|null);

        /** FeatureDbo label */
        label?: (string|null);

        /** FeatureDbo description */
        description?: (data.DescriptionDbo|null);

        /** FeatureDbo stacks */
        stacks?: (data.StacksDbo|null);

        /** FeatureDbo featureModifications */
        featureModifications?: (data.FeatureModificationDbo[]|null);
    }

    /** Represents a FeatureDbo. */
    class FeatureDbo implements IFeatureDbo {

        /**
         * Constructs a new FeatureDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IFeatureDbo);

        /** FeatureDbo id. */
        public id: string;

        /** FeatureDbo name. */
        public name: string;

        /** FeatureDbo tags. */
        public tags: string[];

        /** FeatureDbo enabledFormula. */
        public enabledFormula: string;

        /** FeatureDbo maxStacks. */
        public maxStacks?: (number|null);

        /** FeatureDbo label. */
        public label?: (string|null);

        /** FeatureDbo description. */
        public description?: (data.DescriptionDbo|null);

        /** FeatureDbo stacks. */
        public stacks?: (data.StacksDbo|null);

        /** FeatureDbo featureModifications. */
        public featureModifications: data.FeatureModificationDbo[];

        /** FeatureDbo _maxStacks. */
        public _maxStacks?: "maxStacks";

        /** FeatureDbo _label. */
        public _label?: "label";

        /**
         * Creates a new FeatureDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureDbo instance
         */
        public static create(properties?: data.IFeatureDbo): data.FeatureDbo;

        /**
         * Encodes the specified FeatureDbo message. Does not implicitly {@link data.FeatureDbo.verify|verify} messages.
         * @param message FeatureDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.FeatureDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureDbo message, length delimited. Does not implicitly {@link data.FeatureDbo.verify|verify} messages.
         * @param message FeatureDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.FeatureDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FeatureDbo;

        /**
         * Decodes a FeatureDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FeatureDbo;

        /**
         * Verifies a FeatureDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureDbo
         */
        public static fromObject(object: { [k: string]: any }): data.FeatureDbo;

        /**
         * Creates a plain object from a FeatureDbo message. Also converts values to other types if specified.
         * @param message FeatureDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.FeatureDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatureDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StacksDbo. */
    interface IStacksDbo {

        /** StacksDbo fixedStack */
        fixedStack?: (data.FixedStackDbo|null);

        /** StacksDbo repeatingStack */
        repeatingStack?: (data.StackDbo|null);
    }

    /** Represents a StacksDbo. */
    class StacksDbo implements IStacksDbo {

        /**
         * Constructs a new StacksDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IStacksDbo);

        /** StacksDbo fixedStack. */
        public fixedStack?: (data.FixedStackDbo|null);

        /** StacksDbo repeatingStack. */
        public repeatingStack?: (data.StackDbo|null);

        /** StacksDbo stackable. */
        public stackable?: ("fixedStack"|"repeatingStack");

        /**
         * Creates a new StacksDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StacksDbo instance
         */
        public static create(properties?: data.IStacksDbo): data.StacksDbo;

        /**
         * Encodes the specified StacksDbo message. Does not implicitly {@link data.StacksDbo.verify|verify} messages.
         * @param message StacksDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.StacksDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StacksDbo message, length delimited. Does not implicitly {@link data.StacksDbo.verify|verify} messages.
         * @param message StacksDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.StacksDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StacksDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StacksDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.StacksDbo;

        /**
         * Decodes a StacksDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StacksDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.StacksDbo;

        /**
         * Verifies a StacksDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StacksDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StacksDbo
         */
        public static fromObject(object: { [k: string]: any }): data.StacksDbo;

        /**
         * Creates a plain object from a StacksDbo message. Also converts values to other types if specified.
         * @param message StacksDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.StacksDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StacksDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StacksDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FixedStackDbo. */
    interface IFixedStackDbo {

        /** FixedStackDbo stacks */
        stacks?: (data.StackDbo[]|null);
    }

    /** Represents a FixedStackDbo. */
    class FixedStackDbo implements IFixedStackDbo {

        /**
         * Constructs a new FixedStackDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IFixedStackDbo);

        /** FixedStackDbo stacks. */
        public stacks: data.StackDbo[];

        /**
         * Creates a new FixedStackDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FixedStackDbo instance
         */
        public static create(properties?: data.IFixedStackDbo): data.FixedStackDbo;

        /**
         * Encodes the specified FixedStackDbo message. Does not implicitly {@link data.FixedStackDbo.verify|verify} messages.
         * @param message FixedStackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.FixedStackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FixedStackDbo message, length delimited. Does not implicitly {@link data.FixedStackDbo.verify|verify} messages.
         * @param message FixedStackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.FixedStackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FixedStackDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FixedStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FixedStackDbo;

        /**
         * Decodes a FixedStackDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FixedStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FixedStackDbo;

        /**
         * Verifies a FixedStackDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FixedStackDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FixedStackDbo
         */
        public static fromObject(object: { [k: string]: any }): data.FixedStackDbo;

        /**
         * Creates a plain object from a FixedStackDbo message. Also converts values to other types if specified.
         * @param message FixedStackDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.FixedStackDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FixedStackDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FixedStackDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeatureModificationDbo. */
    interface IFeatureModificationDbo {

        /** FeatureModificationDbo targetFeatureId */
        targetFeatureId?: (string|null);

        /** FeatureModificationDbo stackModifications */
        stackModifications?: (data.StackModificationDbo[]|null);
    }

    /** Represents a FeatureModificationDbo. */
    class FeatureModificationDbo implements IFeatureModificationDbo {

        /**
         * Constructs a new FeatureModificationDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IFeatureModificationDbo);

        /** FeatureModificationDbo targetFeatureId. */
        public targetFeatureId: string;

        /** FeatureModificationDbo stackModifications. */
        public stackModifications: data.StackModificationDbo[];

        /**
         * Creates a new FeatureModificationDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureModificationDbo instance
         */
        public static create(properties?: data.IFeatureModificationDbo): data.FeatureModificationDbo;

        /**
         * Encodes the specified FeatureModificationDbo message. Does not implicitly {@link data.FeatureModificationDbo.verify|verify} messages.
         * @param message FeatureModificationDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.FeatureModificationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureModificationDbo message, length delimited. Does not implicitly {@link data.FeatureModificationDbo.verify|verify} messages.
         * @param message FeatureModificationDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.FeatureModificationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureModificationDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FeatureModificationDbo;

        /**
         * Decodes a FeatureModificationDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FeatureModificationDbo;

        /**
         * Verifies a FeatureModificationDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureModificationDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureModificationDbo
         */
        public static fromObject(object: { [k: string]: any }): data.FeatureModificationDbo;

        /**
         * Creates a plain object from a FeatureModificationDbo message. Also converts values to other types if specified.
         * @param message FeatureModificationDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.FeatureModificationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureModificationDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatureModificationDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StackModificationDbo. */
    interface IStackModificationDbo {

        /** StackModificationDbo targetStackCount */
        targetStackCount?: (number|null);

        /** StackModificationDbo linksToAdd */
        linksToAdd?: (string[]|null);

        /** StackModificationDbo linksToRemove */
        linksToRemove?: (string[]|null);
    }

    /** Represents a StackModificationDbo. */
    class StackModificationDbo implements IStackModificationDbo {

        /**
         * Constructs a new StackModificationDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IStackModificationDbo);

        /** StackModificationDbo targetStackCount. */
        public targetStackCount: number;

        /** StackModificationDbo linksToAdd. */
        public linksToAdd: string[];

        /** StackModificationDbo linksToRemove. */
        public linksToRemove: string[];

        /**
         * Creates a new StackModificationDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StackModificationDbo instance
         */
        public static create(properties?: data.IStackModificationDbo): data.StackModificationDbo;

        /**
         * Encodes the specified StackModificationDbo message. Does not implicitly {@link data.StackModificationDbo.verify|verify} messages.
         * @param message StackModificationDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.StackModificationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StackModificationDbo message, length delimited. Does not implicitly {@link data.StackModificationDbo.verify|verify} messages.
         * @param message StackModificationDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.StackModificationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StackModificationDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StackModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.StackModificationDbo;

        /**
         * Decodes a StackModificationDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StackModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.StackModificationDbo;

        /**
         * Verifies a StackModificationDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StackModificationDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StackModificationDbo
         */
        public static fromObject(object: { [k: string]: any }): data.StackModificationDbo;

        /**
         * Creates a plain object from a StackModificationDbo message. Also converts values to other types if specified.
         * @param message StackModificationDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.StackModificationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StackModificationDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StackModificationDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EffectDbo. */
    interface IEffectDbo {

        /** EffectDbo conditionFormula */
        conditionFormula?: (string|null);

        /** EffectDbo setAction */
        setAction?: (data.EffectDbo.SetActionDbo|null);

        /** EffectDbo addAction */
        addAction?: (data.EffectDbo.AddActionDbo|null);
    }

    /** Represents an EffectDbo. */
    class EffectDbo implements IEffectDbo {

        /**
         * Constructs a new EffectDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IEffectDbo);

        /** EffectDbo conditionFormula. */
        public conditionFormula?: (string|null);

        /** EffectDbo setAction. */
        public setAction?: (data.EffectDbo.SetActionDbo|null);

        /** EffectDbo addAction. */
        public addAction?: (data.EffectDbo.AddActionDbo|null);

        /** EffectDbo _conditionFormula. */
        public _conditionFormula?: "conditionFormula";

        /** EffectDbo action. */
        public action?: ("setAction"|"addAction");

        /**
         * Creates a new EffectDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EffectDbo instance
         */
        public static create(properties?: data.IEffectDbo): data.EffectDbo;

        /**
         * Encodes the specified EffectDbo message. Does not implicitly {@link data.EffectDbo.verify|verify} messages.
         * @param message EffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.EffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EffectDbo message, length delimited. Does not implicitly {@link data.EffectDbo.verify|verify} messages.
         * @param message EffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.EffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EffectDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.EffectDbo;

        /**
         * Decodes an EffectDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.EffectDbo;

        /**
         * Verifies an EffectDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EffectDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EffectDbo
         */
        public static fromObject(object: { [k: string]: any }): data.EffectDbo;

        /**
         * Creates a plain object from an EffectDbo message. Also converts values to other types if specified.
         * @param message EffectDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.EffectDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EffectDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EffectDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace EffectDbo {

        /** Properties of a SetActionDbo. */
        interface ISetActionDbo {

            /** SetActionDbo targetKey */
            targetKey?: (string|null);

            /** SetActionDbo formula */
            formula?: (string|null);

            /** SetActionDbo numberValue */
            numberValue?: (number|null);
        }

        /** Represents a SetActionDbo. */
        class SetActionDbo implements ISetActionDbo {

            /**
             * Constructs a new SetActionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: data.EffectDbo.ISetActionDbo);

            /** SetActionDbo targetKey. */
            public targetKey: string;

            /** SetActionDbo formula. */
            public formula?: (string|null);

            /** SetActionDbo numberValue. */
            public numberValue?: (number|null);

            /** SetActionDbo value. */
            public value?: ("formula"|"numberValue");

            /**
             * Creates a new SetActionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetActionDbo instance
             */
            public static create(properties?: data.EffectDbo.ISetActionDbo): data.EffectDbo.SetActionDbo;

            /**
             * Encodes the specified SetActionDbo message. Does not implicitly {@link data.EffectDbo.SetActionDbo.verify|verify} messages.
             * @param message SetActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: data.EffectDbo.SetActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetActionDbo message, length delimited. Does not implicitly {@link data.EffectDbo.SetActionDbo.verify|verify} messages.
             * @param message SetActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: data.EffectDbo.SetActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.EffectDbo.SetActionDbo;

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.EffectDbo.SetActionDbo;

            /**
             * Verifies a SetActionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetActionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetActionDbo
             */
            public static fromObject(object: { [k: string]: any }): data.EffectDbo.SetActionDbo;

            /**
             * Creates a plain object from a SetActionDbo message. Also converts values to other types if specified.
             * @param message SetActionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: data.EffectDbo.SetActionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetActionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetActionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddActionDbo. */
        interface IAddActionDbo {

            /** AddActionDbo targetKey */
            targetKey?: (string|null);

            /** AddActionDbo numberDelta */
            numberDelta?: (number|null);
        }

        /** Represents an AddActionDbo. */
        class AddActionDbo implements IAddActionDbo {

            /**
             * Constructs a new AddActionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: data.EffectDbo.IAddActionDbo);

            /** AddActionDbo targetKey. */
            public targetKey: string;

            /** AddActionDbo numberDelta. */
            public numberDelta: number;

            /**
             * Creates a new AddActionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddActionDbo instance
             */
            public static create(properties?: data.EffectDbo.IAddActionDbo): data.EffectDbo.AddActionDbo;

            /**
             * Encodes the specified AddActionDbo message. Does not implicitly {@link data.EffectDbo.AddActionDbo.verify|verify} messages.
             * @param message AddActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: data.EffectDbo.AddActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddActionDbo message, length delimited. Does not implicitly {@link data.EffectDbo.AddActionDbo.verify|verify} messages.
             * @param message AddActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: data.EffectDbo.AddActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.EffectDbo.AddActionDbo;

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.EffectDbo.AddActionDbo;

            /**
             * Verifies an AddActionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddActionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddActionDbo
             */
            public static fromObject(object: { [k: string]: any }): data.EffectDbo.AddActionDbo;

            /**
             * Creates a plain object from an AddActionDbo message. Also converts values to other types if specified.
             * @param message AddActionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: data.EffectDbo.AddActionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddActionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddActionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a LinkDbo. */
    interface ILinkDbo {

        /** LinkDbo featureId */
        featureId?: (string|null);

        /** LinkDbo conditionFormula */
        conditionFormula?: (string|null);
    }

    /** Represents a LinkDbo. */
    class LinkDbo implements ILinkDbo {

        /**
         * Constructs a new LinkDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.ILinkDbo);

        /** LinkDbo featureId. */
        public featureId: string;

        /** LinkDbo conditionFormula. */
        public conditionFormula?: (string|null);

        /** LinkDbo _conditionFormula. */
        public _conditionFormula?: "conditionFormula";

        /**
         * Creates a new LinkDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinkDbo instance
         */
        public static create(properties?: data.ILinkDbo): data.LinkDbo;

        /**
         * Encodes the specified LinkDbo message. Does not implicitly {@link data.LinkDbo.verify|verify} messages.
         * @param message LinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.LinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinkDbo message, length delimited. Does not implicitly {@link data.LinkDbo.verify|verify} messages.
         * @param message LinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.LinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinkDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.LinkDbo;

        /**
         * Decodes a LinkDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.LinkDbo;

        /**
         * Verifies a LinkDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinkDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinkDbo
         */
        public static fromObject(object: { [k: string]: any }): data.LinkDbo;

        /**
         * Creates a plain object from a LinkDbo message. Also converts values to other types if specified.
         * @param message LinkDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.LinkDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinkDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LinkDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UnlinkDbo. */
    interface IUnlinkDbo {

        /** UnlinkDbo featureId */
        featureId?: (string|null);

        /** UnlinkDbo conditionFormula */
        conditionFormula?: (string|null);
    }

    /** Represents an UnlinkDbo. */
    class UnlinkDbo implements IUnlinkDbo {

        /**
         * Constructs a new UnlinkDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IUnlinkDbo);

        /** UnlinkDbo featureId. */
        public featureId: string;

        /** UnlinkDbo conditionFormula. */
        public conditionFormula?: (string|null);

        /** UnlinkDbo _conditionFormula. */
        public _conditionFormula?: "conditionFormula";

        /**
         * Creates a new UnlinkDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnlinkDbo instance
         */
        public static create(properties?: data.IUnlinkDbo): data.UnlinkDbo;

        /**
         * Encodes the specified UnlinkDbo message. Does not implicitly {@link data.UnlinkDbo.verify|verify} messages.
         * @param message UnlinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.UnlinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnlinkDbo message, length delimited. Does not implicitly {@link data.UnlinkDbo.verify|verify} messages.
         * @param message UnlinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.UnlinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlinkDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnlinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.UnlinkDbo;

        /**
         * Decodes an UnlinkDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnlinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.UnlinkDbo;

        /**
         * Verifies an UnlinkDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnlinkDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnlinkDbo
         */
        public static fromObject(object: { [k: string]: any }): data.UnlinkDbo;

        /**
         * Creates a plain object from an UnlinkDbo message. Also converts values to other types if specified.
         * @param message UnlinkDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.UnlinkDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnlinkDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UnlinkDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StackDbo. */
    interface IStackDbo {

        /** StackDbo conditionalComponents */
        conditionalComponents?: (data.ConditionalStackComponentDbo[]|null);

        /** StackDbo effects */
        effects?: (data.EffectDbo[]|null);

        /** StackDbo links */
        links?: (data.LinkDbo[]|null);

        /** StackDbo unlinks */
        unlinks?: (data.UnlinkDbo[]|null);

        /** StackDbo choices */
        choices?: (data.ChoiceDbo[]|null);
    }

    /** Represents a StackDbo. */
    class StackDbo implements IStackDbo {

        /**
         * Constructs a new StackDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IStackDbo);

        /** StackDbo conditionalComponents. */
        public conditionalComponents: data.ConditionalStackComponentDbo[];

        /** StackDbo effects. */
        public effects: data.EffectDbo[];

        /** StackDbo links. */
        public links: data.LinkDbo[];

        /** StackDbo unlinks. */
        public unlinks: data.UnlinkDbo[];

        /** StackDbo choices. */
        public choices: data.ChoiceDbo[];

        /**
         * Creates a new StackDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StackDbo instance
         */
        public static create(properties?: data.IStackDbo): data.StackDbo;

        /**
         * Encodes the specified StackDbo message. Does not implicitly {@link data.StackDbo.verify|verify} messages.
         * @param message StackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.StackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StackDbo message, length delimited. Does not implicitly {@link data.StackDbo.verify|verify} messages.
         * @param message StackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.StackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StackDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.StackDbo;

        /**
         * Decodes a StackDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.StackDbo;

        /**
         * Verifies a StackDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StackDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StackDbo
         */
        public static fromObject(object: { [k: string]: any }): data.StackDbo;

        /**
         * Creates a plain object from a StackDbo message. Also converts values to other types if specified.
         * @param message StackDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.StackDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StackDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StackDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConditionalStackComponentDbo. */
    interface IConditionalStackComponentDbo {

        /** ConditionalStackComponentDbo conditionFormula */
        conditionFormula?: (string|null);

        /** ConditionalStackComponentDbo effects */
        effects?: (data.EffectDbo[]|null);

        /** ConditionalStackComponentDbo links */
        links?: (data.LinkDbo[]|null);

        /** ConditionalStackComponentDbo unlinks */
        unlinks?: (data.UnlinkDbo[]|null);

        /** ConditionalStackComponentDbo choices */
        choices?: (data.ChoiceDbo[]|null);
    }

    /** Represents a ConditionalStackComponentDbo. */
    class ConditionalStackComponentDbo implements IConditionalStackComponentDbo {

        /**
         * Constructs a new ConditionalStackComponentDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IConditionalStackComponentDbo);

        /** ConditionalStackComponentDbo conditionFormula. */
        public conditionFormula: string;

        /** ConditionalStackComponentDbo effects. */
        public effects: data.EffectDbo[];

        /** ConditionalStackComponentDbo links. */
        public links: data.LinkDbo[];

        /** ConditionalStackComponentDbo unlinks. */
        public unlinks: data.UnlinkDbo[];

        /** ConditionalStackComponentDbo choices. */
        public choices: data.ChoiceDbo[];

        /**
         * Creates a new ConditionalStackComponentDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConditionalStackComponentDbo instance
         */
        public static create(properties?: data.IConditionalStackComponentDbo): data.ConditionalStackComponentDbo;

        /**
         * Encodes the specified ConditionalStackComponentDbo message. Does not implicitly {@link data.ConditionalStackComponentDbo.verify|verify} messages.
         * @param message ConditionalStackComponentDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ConditionalStackComponentDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConditionalStackComponentDbo message, length delimited. Does not implicitly {@link data.ConditionalStackComponentDbo.verify|verify} messages.
         * @param message ConditionalStackComponentDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ConditionalStackComponentDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConditionalStackComponentDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConditionalStackComponentDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ConditionalStackComponentDbo;

        /**
         * Decodes a ConditionalStackComponentDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConditionalStackComponentDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ConditionalStackComponentDbo;

        /**
         * Verifies a ConditionalStackComponentDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConditionalStackComponentDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConditionalStackComponentDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ConditionalStackComponentDbo;

        /**
         * Creates a plain object from a ConditionalStackComponentDbo message. Also converts values to other types if specified.
         * @param message ConditionalStackComponentDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ConditionalStackComponentDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConditionalStackComponentDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConditionalStackComponentDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CharacterTemplateDbo. */
    interface ICharacterTemplateDbo {

        /** CharacterTemplateDbo levels */
        levels?: (data.CharacterLevelTemplateDbo[]|null);
    }

    /** Represents a CharacterTemplateDbo. */
    class CharacterTemplateDbo implements ICharacterTemplateDbo {

        /**
         * Constructs a new CharacterTemplateDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.ICharacterTemplateDbo);

        /** CharacterTemplateDbo levels. */
        public levels: data.CharacterLevelTemplateDbo[];

        /**
         * Creates a new CharacterTemplateDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CharacterTemplateDbo instance
         */
        public static create(properties?: data.ICharacterTemplateDbo): data.CharacterTemplateDbo;

        /**
         * Encodes the specified CharacterTemplateDbo message. Does not implicitly {@link data.CharacterTemplateDbo.verify|verify} messages.
         * @param message CharacterTemplateDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.CharacterTemplateDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CharacterTemplateDbo message, length delimited. Does not implicitly {@link data.CharacterTemplateDbo.verify|verify} messages.
         * @param message CharacterTemplateDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.CharacterTemplateDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CharacterTemplateDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CharacterTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.CharacterTemplateDbo;

        /**
         * Decodes a CharacterTemplateDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CharacterTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.CharacterTemplateDbo;

        /**
         * Verifies a CharacterTemplateDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CharacterTemplateDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CharacterTemplateDbo
         */
        public static fromObject(object: { [k: string]: any }): data.CharacterTemplateDbo;

        /**
         * Creates a plain object from a CharacterTemplateDbo message. Also converts values to other types if specified.
         * @param message CharacterTemplateDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.CharacterTemplateDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CharacterTemplateDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CharacterTemplateDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CharacterLevelTemplateDbo. */
    interface ICharacterLevelTemplateDbo {

        /** CharacterLevelTemplateDbo levelNumber */
        levelNumber?: (number|null);

        /** CharacterLevelTemplateDbo effects */
        effects?: (data.EffectDbo[]|null);

        /** CharacterLevelTemplateDbo links */
        links?: (data.LinkDbo[]|null);

        /** CharacterLevelTemplateDbo unlinks */
        unlinks?: (data.UnlinkDbo[]|null);

        /** CharacterLevelTemplateDbo choices */
        choices?: (data.ChoiceDbo[]|null);
    }

    /** Represents a CharacterLevelTemplateDbo. */
    class CharacterLevelTemplateDbo implements ICharacterLevelTemplateDbo {

        /**
         * Constructs a new CharacterLevelTemplateDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.ICharacterLevelTemplateDbo);

        /** CharacterLevelTemplateDbo levelNumber. */
        public levelNumber: number;

        /** CharacterLevelTemplateDbo effects. */
        public effects: data.EffectDbo[];

        /** CharacterLevelTemplateDbo links. */
        public links: data.LinkDbo[];

        /** CharacterLevelTemplateDbo unlinks. */
        public unlinks: data.UnlinkDbo[];

        /** CharacterLevelTemplateDbo choices. */
        public choices: data.ChoiceDbo[];

        /**
         * Creates a new CharacterLevelTemplateDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CharacterLevelTemplateDbo instance
         */
        public static create(properties?: data.ICharacterLevelTemplateDbo): data.CharacterLevelTemplateDbo;

        /**
         * Encodes the specified CharacterLevelTemplateDbo message. Does not implicitly {@link data.CharacterLevelTemplateDbo.verify|verify} messages.
         * @param message CharacterLevelTemplateDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.CharacterLevelTemplateDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CharacterLevelTemplateDbo message, length delimited. Does not implicitly {@link data.CharacterLevelTemplateDbo.verify|verify} messages.
         * @param message CharacterLevelTemplateDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.CharacterLevelTemplateDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CharacterLevelTemplateDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CharacterLevelTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.CharacterLevelTemplateDbo;

        /**
         * Decodes a CharacterLevelTemplateDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CharacterLevelTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.CharacterLevelTemplateDbo;

        /**
         * Verifies a CharacterLevelTemplateDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CharacterLevelTemplateDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CharacterLevelTemplateDbo
         */
        public static fromObject(object: { [k: string]: any }): data.CharacterLevelTemplateDbo;

        /**
         * Creates a plain object from a CharacterLevelTemplateDbo message. Also converts values to other types if specified.
         * @param message CharacterLevelTemplateDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.CharacterLevelTemplateDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CharacterLevelTemplateDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CharacterLevelTemplateDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SourceModuleDbo. */
    interface ISourceModuleDbo {

        /** SourceModuleDbo sourceId */
        sourceId?: (string|null);

        /** SourceModuleDbo features */
        features?: (data.FeatureSummaryDbo[]|null);
    }

    /** Represents a SourceModuleDbo. */
    class SourceModuleDbo implements ISourceModuleDbo {

        /**
         * Constructs a new SourceModuleDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.ISourceModuleDbo);

        /** SourceModuleDbo sourceId. */
        public sourceId: string;

        /** SourceModuleDbo features. */
        public features: data.FeatureSummaryDbo[];

        /**
         * Creates a new SourceModuleDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SourceModuleDbo instance
         */
        public static create(properties?: data.ISourceModuleDbo): data.SourceModuleDbo;

        /**
         * Encodes the specified SourceModuleDbo message. Does not implicitly {@link data.SourceModuleDbo.verify|verify} messages.
         * @param message SourceModuleDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.SourceModuleDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SourceModuleDbo message, length delimited. Does not implicitly {@link data.SourceModuleDbo.verify|verify} messages.
         * @param message SourceModuleDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.SourceModuleDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SourceModuleDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SourceModuleDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.SourceModuleDbo;

        /**
         * Decodes a SourceModuleDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SourceModuleDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.SourceModuleDbo;

        /**
         * Verifies a SourceModuleDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SourceModuleDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SourceModuleDbo
         */
        public static fromObject(object: { [k: string]: any }): data.SourceModuleDbo;

        /**
         * Creates a plain object from a SourceModuleDbo message. Also converts values to other types if specified.
         * @param message SourceModuleDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.SourceModuleDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SourceModuleDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SourceModuleDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
