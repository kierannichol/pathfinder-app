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

    /** Properties of a StackDbo. */
    interface IStackDbo {

        /** StackDbo effects */
        effects?: (data.EffectDbo[]|null);

        /** StackDbo links */
        links?: (string[]|null);

        /** StackDbo choices */
        choices?: (data.ChoiceDbo[]|null);

        /** StackDbo featureModifications */
        featureModifications?: (data.FeatureModificationDbo[]|null);
    }

    /** Represents a StackDbo. */
    class StackDbo implements IStackDbo {

        /**
         * Constructs a new StackDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IStackDbo);

        /** StackDbo effects. */
        public effects: data.EffectDbo[];

        /** StackDbo links. */
        public links: string[];

        /** StackDbo choices. */
        public choices: data.ChoiceDbo[];

        /** StackDbo featureModifications. */
        public featureModifications: data.FeatureModificationDbo[];

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

    /** Properties of a ConditionalStackDbo. */
    interface IConditionalStackDbo {

        /** ConditionalStackDbo conditionFormula */
        conditionFormula?: (string|null);

        /** ConditionalStackDbo effects */
        effects?: (data.EffectDbo[]|null);

        /** ConditionalStackDbo links */
        links?: (string[]|null);

        /** ConditionalStackDbo choices */
        choices?: (data.ChoiceDbo[]|null);

        /** ConditionalStackDbo featureModifications */
        featureModifications?: (data.FeatureModificationDbo[]|null);
    }

    /** Represents a ConditionalStackDbo. */
    class ConditionalStackDbo implements IConditionalStackDbo {

        /**
         * Constructs a new ConditionalStackDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IConditionalStackDbo);

        /** ConditionalStackDbo conditionFormula. */
        public conditionFormula: string;

        /** ConditionalStackDbo effects. */
        public effects: data.EffectDbo[];

        /** ConditionalStackDbo links. */
        public links: string[];

        /** ConditionalStackDbo choices. */
        public choices: data.ChoiceDbo[];

        /** ConditionalStackDbo featureModifications. */
        public featureModifications: data.FeatureModificationDbo[];

        /**
         * Creates a new ConditionalStackDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConditionalStackDbo instance
         */
        public static create(properties?: data.IConditionalStackDbo): data.ConditionalStackDbo;

        /**
         * Encodes the specified ConditionalStackDbo message. Does not implicitly {@link data.ConditionalStackDbo.verify|verify} messages.
         * @param message ConditionalStackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ConditionalStackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConditionalStackDbo message, length delimited. Does not implicitly {@link data.ConditionalStackDbo.verify|verify} messages.
         * @param message ConditionalStackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ConditionalStackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConditionalStackDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConditionalStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ConditionalStackDbo;

        /**
         * Decodes a ConditionalStackDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConditionalStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ConditionalStackDbo;

        /**
         * Verifies a ConditionalStackDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConditionalStackDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConditionalStackDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ConditionalStackDbo;

        /**
         * Creates a plain object from a ConditionalStackDbo message. Also converts values to other types if specified.
         * @param message ConditionalStackDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ConditionalStackDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConditionalStackDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConditionalStackDbo
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

        /** FeatureSummaryDbo options */
        options?: (data.FeatureOptionsDbo|null);

        /** FeatureSummaryDbo typeAlias */
        typeAlias?: (string|null);
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

        /** FeatureSummaryDbo options. */
        public options?: (data.FeatureOptionsDbo|null);

        /** FeatureSummaryDbo typeAlias. */
        public typeAlias: string;

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

        /** FeatureDbo options */
        options?: (data.FeatureOptionsDbo|null);

        /** FeatureDbo typeAlias */
        typeAlias?: (string|null);

        /** FeatureDbo description */
        description?: (data.DescriptionDbo|null);

        /** FeatureDbo stacks */
        stacks?: (data.StacksDbo|null);

        /** FeatureDbo conditionalStacks */
        conditionalStacks?: (data.ConditionalStackDbo[]|null);
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

        /** FeatureDbo options. */
        public options?: (data.FeatureOptionsDbo|null);

        /** FeatureDbo typeAlias. */
        public typeAlias: string;

        /** FeatureDbo description. */
        public description?: (data.DescriptionDbo|null);

        /** FeatureDbo stacks. */
        public stacks?: (data.StacksDbo|null);

        /** FeatureDbo conditionalStacks. */
        public conditionalStacks: data.ConditionalStackDbo[];

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

    /** Properties of a FeatureOptionsDbo. */
    interface IFeatureOptionsDbo {

        /** FeatureOptionsDbo select */
        select?: (data.FeatureOptionsDbo.Select|null);
    }

    /** Represents a FeatureOptionsDbo. */
    class FeatureOptionsDbo implements IFeatureOptionsDbo {

        /**
         * Constructs a new FeatureOptionsDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IFeatureOptionsDbo);

        /** FeatureOptionsDbo select. */
        public select?: (data.FeatureOptionsDbo.Select|null);

        /** FeatureOptionsDbo option. */
        public option?: "select";

        /**
         * Creates a new FeatureOptionsDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureOptionsDbo instance
         */
        public static create(properties?: data.IFeatureOptionsDbo): data.FeatureOptionsDbo;

        /**
         * Encodes the specified FeatureOptionsDbo message. Does not implicitly {@link data.FeatureOptionsDbo.verify|verify} messages.
         * @param message FeatureOptionsDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.FeatureOptionsDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureOptionsDbo message, length delimited. Does not implicitly {@link data.FeatureOptionsDbo.verify|verify} messages.
         * @param message FeatureOptionsDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.FeatureOptionsDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureOptionsDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureOptionsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FeatureOptionsDbo;

        /**
         * Decodes a FeatureOptionsDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureOptionsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FeatureOptionsDbo;

        /**
         * Verifies a FeatureOptionsDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureOptionsDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureOptionsDbo
         */
        public static fromObject(object: { [k: string]: any }): data.FeatureOptionsDbo;

        /**
         * Creates a plain object from a FeatureOptionsDbo message. Also converts values to other types if specified.
         * @param message FeatureOptionsDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.FeatureOptionsDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureOptionsDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatureOptionsDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FeatureOptionsDbo {

        /** Properties of a Select. */
        interface ISelect {

            /** Select optionTag */
            optionTag?: (string|null);

            /** Select idTemplate */
            idTemplate?: (string|null);

            /** Select prerequisitesTemplate */
            prerequisitesTemplate?: (string|null);
        }

        /** Represents a Select. */
        class Select implements ISelect {

            /**
             * Constructs a new Select.
             * @param [properties] Properties to set
             */
            constructor(properties?: data.FeatureOptionsDbo.ISelect);

            /** Select optionTag. */
            public optionTag: string;

            /** Select idTemplate. */
            public idTemplate: string;

            /** Select prerequisitesTemplate. */
            public prerequisitesTemplate: string;

            /**
             * Creates a new Select instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Select instance
             */
            public static create(properties?: data.FeatureOptionsDbo.ISelect): data.FeatureOptionsDbo.Select;

            /**
             * Encodes the specified Select message. Does not implicitly {@link data.FeatureOptionsDbo.Select.verify|verify} messages.
             * @param message Select message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: data.FeatureOptionsDbo.Select, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Select message, length delimited. Does not implicitly {@link data.FeatureOptionsDbo.Select.verify|verify} messages.
             * @param message Select message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: data.FeatureOptionsDbo.Select, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Select message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Select
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.FeatureOptionsDbo.Select;

            /**
             * Decodes a Select message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Select
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.FeatureOptionsDbo.Select;

            /**
             * Verifies a Select message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Select message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Select
             */
            public static fromObject(object: { [k: string]: any }): data.FeatureOptionsDbo.Select;

            /**
             * Creates a plain object from a Select message. Also converts values to other types if specified.
             * @param message Select
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: data.FeatureOptionsDbo.Select, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Select to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Select
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
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
        links?: (string[]|null);

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
        public links: string[];

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

    /** Properties of a SourceModuleItemDatabaseDbo. */
    interface ISourceModuleItemDatabaseDbo {

        /** SourceModuleItemDatabaseDbo sourceId */
        sourceId?: (number|null);

        /** SourceModuleItemDatabaseDbo sourceCode */
        sourceCode?: (string|null);

        /** SourceModuleItemDatabaseDbo items */
        items?: (data.ItemSummaryDbo[]|null);

        /** SourceModuleItemDatabaseDbo optionSets */
        optionSets?: (data.ItemOptionSetDbo[]|null);

        /** SourceModuleItemDatabaseDbo options */
        options?: (data.ItemOptionSummaryDbo[]|null);
    }

    /** Represents a SourceModuleItemDatabaseDbo. */
    class SourceModuleItemDatabaseDbo implements ISourceModuleItemDatabaseDbo {

        /**
         * Constructs a new SourceModuleItemDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.ISourceModuleItemDatabaseDbo);

        /** SourceModuleItemDatabaseDbo sourceId. */
        public sourceId: number;

        /** SourceModuleItemDatabaseDbo sourceCode. */
        public sourceCode: string;

        /** SourceModuleItemDatabaseDbo items. */
        public items: data.ItemSummaryDbo[];

        /** SourceModuleItemDatabaseDbo optionSets. */
        public optionSets: data.ItemOptionSetDbo[];

        /** SourceModuleItemDatabaseDbo options. */
        public options: data.ItemOptionSummaryDbo[];

        /**
         * Creates a new SourceModuleItemDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SourceModuleItemDatabaseDbo instance
         */
        public static create(properties?: data.ISourceModuleItemDatabaseDbo): data.SourceModuleItemDatabaseDbo;

        /**
         * Encodes the specified SourceModuleItemDatabaseDbo message. Does not implicitly {@link data.SourceModuleItemDatabaseDbo.verify|verify} messages.
         * @param message SourceModuleItemDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.SourceModuleItemDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SourceModuleItemDatabaseDbo message, length delimited. Does not implicitly {@link data.SourceModuleItemDatabaseDbo.verify|verify} messages.
         * @param message SourceModuleItemDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.SourceModuleItemDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SourceModuleItemDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SourceModuleItemDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.SourceModuleItemDatabaseDbo;

        /**
         * Decodes a SourceModuleItemDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SourceModuleItemDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.SourceModuleItemDatabaseDbo;

        /**
         * Verifies a SourceModuleItemDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SourceModuleItemDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SourceModuleItemDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): data.SourceModuleItemDatabaseDbo;

        /**
         * Creates a plain object from a SourceModuleItemDatabaseDbo message. Also converts values to other types if specified.
         * @param message SourceModuleItemDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.SourceModuleItemDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SourceModuleItemDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SourceModuleItemDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemSummaryDbo. */
    interface IItemSummaryDbo {

        /** ItemSummaryDbo id */
        id?: (number|null);

        /** ItemSummaryDbo name */
        name?: (string|null);

        /** ItemSummaryDbo tags */
        tags?: (string[]|null);

        /** ItemSummaryDbo cost */
        cost?: (number|null);

        /** ItemSummaryDbo optionSets */
        optionSets?: (number[]|null);

        /** ItemSummaryDbo weight */
        weight?: (number|null);
    }

    /** Represents an ItemSummaryDbo. */
    class ItemSummaryDbo implements IItemSummaryDbo {

        /**
         * Constructs a new ItemSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IItemSummaryDbo);

        /** ItemSummaryDbo id. */
        public id: number;

        /** ItemSummaryDbo name. */
        public name: string;

        /** ItemSummaryDbo tags. */
        public tags: string[];

        /** ItemSummaryDbo cost. */
        public cost: number;

        /** ItemSummaryDbo optionSets. */
        public optionSets: number[];

        /** ItemSummaryDbo weight. */
        public weight: number;

        /**
         * Creates a new ItemSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemSummaryDbo instance
         */
        public static create(properties?: data.IItemSummaryDbo): data.ItemSummaryDbo;

        /**
         * Encodes the specified ItemSummaryDbo message. Does not implicitly {@link data.ItemSummaryDbo.verify|verify} messages.
         * @param message ItemSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ItemSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemSummaryDbo message, length delimited. Does not implicitly {@link data.ItemSummaryDbo.verify|verify} messages.
         * @param message ItemSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ItemSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ItemSummaryDbo;

        /**
         * Decodes an ItemSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ItemSummaryDbo;

        /**
         * Verifies an ItemSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ItemSummaryDbo;

        /**
         * Creates a plain object from an ItemSummaryDbo message. Also converts values to other types if specified.
         * @param message ItemSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ItemSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemDbo. */
    interface IItemDbo {

        /** ItemDbo id */
        id?: (number|null);

        /** ItemDbo name */
        name?: (string|null);

        /** ItemDbo tags */
        tags?: (string[]|null);

        /** ItemDbo cost */
        cost?: (number|null);

        /** ItemDbo optionSets */
        optionSets?: (number[]|null);

        /** ItemDbo weight */
        weight?: (number|null);

        /** ItemDbo description */
        description?: (data.DescriptionDbo|null);
    }

    /** Represents an ItemDbo. */
    class ItemDbo implements IItemDbo {

        /**
         * Constructs a new ItemDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IItemDbo);

        /** ItemDbo id. */
        public id: number;

        /** ItemDbo name. */
        public name: string;

        /** ItemDbo tags. */
        public tags: string[];

        /** ItemDbo cost. */
        public cost: number;

        /** ItemDbo optionSets. */
        public optionSets: number[];

        /** ItemDbo weight. */
        public weight: number;

        /** ItemDbo description. */
        public description?: (data.DescriptionDbo|null);

        /**
         * Creates a new ItemDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemDbo instance
         */
        public static create(properties?: data.IItemDbo): data.ItemDbo;

        /**
         * Encodes the specified ItemDbo message. Does not implicitly {@link data.ItemDbo.verify|verify} messages.
         * @param message ItemDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ItemDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemDbo message, length delimited. Does not implicitly {@link data.ItemDbo.verify|verify} messages.
         * @param message ItemDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ItemDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ItemDbo;

        /**
         * Decodes an ItemDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ItemDbo;

        /**
         * Verifies an ItemDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ItemDbo;

        /**
         * Creates a plain object from an ItemDbo message. Also converts values to other types if specified.
         * @param message ItemDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ItemDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemOptionSetDbo. */
    interface IItemOptionSetDbo {

        /** ItemOptionSetDbo id */
        id?: (number|null);

        /** ItemOptionSetDbo hasPoints */
        hasPoints?: (boolean|null);

        /** ItemOptionSetDbo hasMaxPoints */
        hasMaxPoints?: (boolean|null);

        /** ItemOptionSetDbo maxPoints */
        maxPoints?: (number|null);

        /** ItemOptionSetDbo pointCurrencyCost */
        pointCurrencyCost?: ({ [k: string]: number }|null);

        /** ItemOptionSetDbo optionGroups */
        optionGroups?: (data.ItemOptionGroupDbo[]|null);
    }

    /** Represents an ItemOptionSetDbo. */
    class ItemOptionSetDbo implements IItemOptionSetDbo {

        /**
         * Constructs a new ItemOptionSetDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IItemOptionSetDbo);

        /** ItemOptionSetDbo id. */
        public id: number;

        /** ItemOptionSetDbo hasPoints. */
        public hasPoints: boolean;

        /** ItemOptionSetDbo hasMaxPoints. */
        public hasMaxPoints: boolean;

        /** ItemOptionSetDbo maxPoints. */
        public maxPoints: number;

        /** ItemOptionSetDbo pointCurrencyCost. */
        public pointCurrencyCost: { [k: string]: number };

        /** ItemOptionSetDbo optionGroups. */
        public optionGroups: data.ItemOptionGroupDbo[];

        /**
         * Creates a new ItemOptionSetDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemOptionSetDbo instance
         */
        public static create(properties?: data.IItemOptionSetDbo): data.ItemOptionSetDbo;

        /**
         * Encodes the specified ItemOptionSetDbo message. Does not implicitly {@link data.ItemOptionSetDbo.verify|verify} messages.
         * @param message ItemOptionSetDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ItemOptionSetDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemOptionSetDbo message, length delimited. Does not implicitly {@link data.ItemOptionSetDbo.verify|verify} messages.
         * @param message ItemOptionSetDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ItemOptionSetDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemOptionSetDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemOptionSetDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ItemOptionSetDbo;

        /**
         * Decodes an ItemOptionSetDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemOptionSetDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ItemOptionSetDbo;

        /**
         * Verifies an ItemOptionSetDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemOptionSetDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemOptionSetDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ItemOptionSetDbo;

        /**
         * Creates a plain object from an ItemOptionSetDbo message. Also converts values to other types if specified.
         * @param message ItemOptionSetDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ItemOptionSetDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemOptionSetDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemOptionSetDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemOptionGroupDbo. */
    interface IItemOptionGroupDbo {

        /** ItemOptionGroupDbo name */
        name?: (string|null);

        /** ItemOptionGroupDbo optionTags */
        optionTags?: (number[]|null);

        /** ItemOptionGroupDbo hasMaxSelectable */
        hasMaxSelectable?: (boolean|null);

        /** ItemOptionGroupDbo maxSelectable */
        maxSelectable?: (number|null);
    }

    /** Represents an ItemOptionGroupDbo. */
    class ItemOptionGroupDbo implements IItemOptionGroupDbo {

        /**
         * Constructs a new ItemOptionGroupDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IItemOptionGroupDbo);

        /** ItemOptionGroupDbo name. */
        public name: string;

        /** ItemOptionGroupDbo optionTags. */
        public optionTags: number[];

        /** ItemOptionGroupDbo hasMaxSelectable. */
        public hasMaxSelectable: boolean;

        /** ItemOptionGroupDbo maxSelectable. */
        public maxSelectable: number;

        /**
         * Creates a new ItemOptionGroupDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemOptionGroupDbo instance
         */
        public static create(properties?: data.IItemOptionGroupDbo): data.ItemOptionGroupDbo;

        /**
         * Encodes the specified ItemOptionGroupDbo message. Does not implicitly {@link data.ItemOptionGroupDbo.verify|verify} messages.
         * @param message ItemOptionGroupDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ItemOptionGroupDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemOptionGroupDbo message, length delimited. Does not implicitly {@link data.ItemOptionGroupDbo.verify|verify} messages.
         * @param message ItemOptionGroupDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ItemOptionGroupDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemOptionGroupDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemOptionGroupDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ItemOptionGroupDbo;

        /**
         * Decodes an ItemOptionGroupDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemOptionGroupDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ItemOptionGroupDbo;

        /**
         * Verifies an ItemOptionGroupDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemOptionGroupDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemOptionGroupDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ItemOptionGroupDbo;

        /**
         * Creates a plain object from an ItemOptionGroupDbo message. Also converts values to other types if specified.
         * @param message ItemOptionGroupDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ItemOptionGroupDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemOptionGroupDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemOptionGroupDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemOptionSummaryDbo. */
    interface IItemOptionSummaryDbo {

        /** ItemOptionSummaryDbo id */
        id?: (number|null);

        /** ItemOptionSummaryDbo name */
        name?: (string|null);

        /** ItemOptionSummaryDbo baseNamePrefix */
        baseNamePrefix?: (string|null);

        /** ItemOptionSummaryDbo baseNamePostfix */
        baseNamePostfix?: (string|null);

        /** ItemOptionSummaryDbo pointCost */
        pointCost?: (number|null);

        /** ItemOptionSummaryDbo currencyCost */
        currencyCost?: (number|null);

        /** ItemOptionSummaryDbo tags */
        tags?: (number[]|null);

        /** ItemOptionSummaryDbo currencyCostByWeight */
        currencyCostByWeight?: (number|null);
    }

    /** Represents an ItemOptionSummaryDbo. */
    class ItemOptionSummaryDbo implements IItemOptionSummaryDbo {

        /**
         * Constructs a new ItemOptionSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IItemOptionSummaryDbo);

        /** ItemOptionSummaryDbo id. */
        public id: number;

        /** ItemOptionSummaryDbo name. */
        public name: string;

        /** ItemOptionSummaryDbo baseNamePrefix. */
        public baseNamePrefix: string;

        /** ItemOptionSummaryDbo baseNamePostfix. */
        public baseNamePostfix: string;

        /** ItemOptionSummaryDbo pointCost. */
        public pointCost: number;

        /** ItemOptionSummaryDbo currencyCost. */
        public currencyCost: number;

        /** ItemOptionSummaryDbo tags. */
        public tags: number[];

        /** ItemOptionSummaryDbo currencyCostByWeight. */
        public currencyCostByWeight: number;

        /**
         * Creates a new ItemOptionSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemOptionSummaryDbo instance
         */
        public static create(properties?: data.IItemOptionSummaryDbo): data.ItemOptionSummaryDbo;

        /**
         * Encodes the specified ItemOptionSummaryDbo message. Does not implicitly {@link data.ItemOptionSummaryDbo.verify|verify} messages.
         * @param message ItemOptionSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ItemOptionSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemOptionSummaryDbo message, length delimited. Does not implicitly {@link data.ItemOptionSummaryDbo.verify|verify} messages.
         * @param message ItemOptionSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ItemOptionSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemOptionSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemOptionSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ItemOptionSummaryDbo;

        /**
         * Decodes an ItemOptionSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemOptionSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ItemOptionSummaryDbo;

        /**
         * Verifies an ItemOptionSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemOptionSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemOptionSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ItemOptionSummaryDbo;

        /**
         * Creates a plain object from an ItemOptionSummaryDbo message. Also converts values to other types if specified.
         * @param message ItemOptionSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ItemOptionSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemOptionSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemOptionSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemOptionDbo. */
    interface IItemOptionDbo {

        /** ItemOptionDbo id */
        id?: (number|null);

        /** ItemOptionDbo name */
        name?: (string|null);

        /** ItemOptionDbo baseNamePrefix */
        baseNamePrefix?: (string|null);

        /** ItemOptionDbo baseNamePostfix */
        baseNamePostfix?: (string|null);

        /** ItemOptionDbo pointCost */
        pointCost?: (number|null);

        /** ItemOptionDbo currencyCost */
        currencyCost?: (number|null);

        /** ItemOptionDbo tags */
        tags?: (number[]|null);

        /** ItemOptionDbo currencyCostByWeight */
        currencyCostByWeight?: (number|null);

        /** ItemOptionDbo description */
        description?: (data.DescriptionDbo|null);
    }

    /** Represents an ItemOptionDbo. */
    class ItemOptionDbo implements IItemOptionDbo {

        /**
         * Constructs a new ItemOptionDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IItemOptionDbo);

        /** ItemOptionDbo id. */
        public id: number;

        /** ItemOptionDbo name. */
        public name: string;

        /** ItemOptionDbo baseNamePrefix. */
        public baseNamePrefix: string;

        /** ItemOptionDbo baseNamePostfix. */
        public baseNamePostfix: string;

        /** ItemOptionDbo pointCost. */
        public pointCost: number;

        /** ItemOptionDbo currencyCost. */
        public currencyCost: number;

        /** ItemOptionDbo tags. */
        public tags: number[];

        /** ItemOptionDbo currencyCostByWeight. */
        public currencyCostByWeight: number;

        /** ItemOptionDbo description. */
        public description?: (data.DescriptionDbo|null);

        /**
         * Creates a new ItemOptionDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemOptionDbo instance
         */
        public static create(properties?: data.IItemOptionDbo): data.ItemOptionDbo;

        /**
         * Encodes the specified ItemOptionDbo message. Does not implicitly {@link data.ItemOptionDbo.verify|verify} messages.
         * @param message ItemOptionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.ItemOptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemOptionDbo message, length delimited. Does not implicitly {@link data.ItemOptionDbo.verify|verify} messages.
         * @param message ItemOptionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.ItemOptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemOptionDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.ItemOptionDbo;

        /**
         * Decodes an ItemOptionDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.ItemOptionDbo;

        /**
         * Verifies an ItemOptionDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemOptionDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemOptionDbo
         */
        public static fromObject(object: { [k: string]: any }): data.ItemOptionDbo;

        /**
         * Creates a plain object from an ItemOptionDbo message. Also converts values to other types if specified.
         * @param message ItemOptionDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.ItemOptionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemOptionDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemOptionDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IdDatabaseDbo. */
    interface IIdDatabaseDbo {

        /** IdDatabaseDbo codeToId */
        codeToId?: ({ [k: string]: number }|null);
    }

    /** Represents an IdDatabaseDbo. */
    class IdDatabaseDbo implements IIdDatabaseDbo {

        /**
         * Constructs a new IdDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: data.IIdDatabaseDbo);

        /** IdDatabaseDbo codeToId. */
        public codeToId: { [k: string]: number };

        /**
         * Creates a new IdDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdDatabaseDbo instance
         */
        public static create(properties?: data.IIdDatabaseDbo): data.IdDatabaseDbo;

        /**
         * Encodes the specified IdDatabaseDbo message. Does not implicitly {@link data.IdDatabaseDbo.verify|verify} messages.
         * @param message IdDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: data.IdDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdDatabaseDbo message, length delimited. Does not implicitly {@link data.IdDatabaseDbo.verify|verify} messages.
         * @param message IdDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: data.IdDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): data.IdDatabaseDbo;

        /**
         * Decodes an IdDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): data.IdDatabaseDbo;

        /**
         * Verifies an IdDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): data.IdDatabaseDbo;

        /**
         * Creates a plain object from an IdDatabaseDbo message. Also converts values to other types if specified.
         * @param message IdDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: data.IdDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
