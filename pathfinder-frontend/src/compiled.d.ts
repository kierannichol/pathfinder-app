import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace v6. */
export namespace v6 {

    /** Properties of a ChoiceDbo. */
    interface IChoiceDbo {

        /** ChoiceDbo choiceId */
        choiceId?: (string|null);

        /** ChoiceDbo label */
        label?: (string|null);

        /** ChoiceDbo type */
        type?: (string|null);

        /** ChoiceDbo text */
        text?: (v6.TextChoiceInputDbo|null);

        /** ChoiceDbo featureSelect */
        featureSelect?: (v6.FeatureSelectChoiceInputDbo|null);
    }

    /** Represents a ChoiceDbo. */
    class ChoiceDbo implements IChoiceDbo {

        /**
         * Constructs a new ChoiceDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IChoiceDbo);

        /** ChoiceDbo choiceId. */
        public choiceId: string;

        /** ChoiceDbo label. */
        public label: string;

        /** ChoiceDbo type. */
        public type: string;

        /** ChoiceDbo text. */
        public text?: (v6.TextChoiceInputDbo|null);

        /** ChoiceDbo featureSelect. */
        public featureSelect?: (v6.FeatureSelectChoiceInputDbo|null);

        /** ChoiceDbo input. */
        public input?: ("text"|"featureSelect");

        /**
         * Creates a new ChoiceDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChoiceDbo instance
         */
        public static create(properties?: v6.IChoiceDbo): v6.ChoiceDbo;

        /**
         * Encodes the specified ChoiceDbo message. Does not implicitly {@link v6.ChoiceDbo.verify|verify} messages.
         * @param message ChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.ChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChoiceDbo message, length delimited. Does not implicitly {@link v6.ChoiceDbo.verify|verify} messages.
         * @param message ChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.ChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.ChoiceDbo;

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.ChoiceDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.ChoiceDbo;

        /**
         * Creates a plain object from a ChoiceDbo message. Also converts values to other types if specified.
         * @param message ChoiceDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.ChoiceDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: v6.ITextChoiceInputDbo);

        /**
         * Creates a new TextChoiceInputDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextChoiceInputDbo instance
         */
        public static create(properties?: v6.ITextChoiceInputDbo): v6.TextChoiceInputDbo;

        /**
         * Encodes the specified TextChoiceInputDbo message. Does not implicitly {@link v6.TextChoiceInputDbo.verify|verify} messages.
         * @param message TextChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.TextChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TextChoiceInputDbo message, length delimited. Does not implicitly {@link v6.TextChoiceInputDbo.verify|verify} messages.
         * @param message TextChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.TextChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TextChoiceInputDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TextChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.TextChoiceInputDbo;

        /**
         * Decodes a TextChoiceInputDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TextChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.TextChoiceInputDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.TextChoiceInputDbo;

        /**
         * Creates a plain object from a TextChoiceInputDbo message. Also converts values to other types if specified.
         * @param message TextChoiceInputDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.TextChoiceInputDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }

    /** Represents a FeatureSelectChoiceInputDbo. */
    class FeatureSelectChoiceInputDbo implements IFeatureSelectChoiceInputDbo {

        /**
         * Constructs a new FeatureSelectChoiceInputDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IFeatureSelectChoiceInputDbo);

        /** FeatureSelectChoiceInputDbo optionTags. */
        public optionTags: string[];

        /** FeatureSelectChoiceInputDbo featureIds. */
        public featureIds: string[];

        /**
         * Creates a new FeatureSelectChoiceInputDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureSelectChoiceInputDbo instance
         */
        public static create(properties?: v6.IFeatureSelectChoiceInputDbo): v6.FeatureSelectChoiceInputDbo;

        /**
         * Encodes the specified FeatureSelectChoiceInputDbo message. Does not implicitly {@link v6.FeatureSelectChoiceInputDbo.verify|verify} messages.
         * @param message FeatureSelectChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.FeatureSelectChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureSelectChoiceInputDbo message, length delimited. Does not implicitly {@link v6.FeatureSelectChoiceInputDbo.verify|verify} messages.
         * @param message FeatureSelectChoiceInputDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.FeatureSelectChoiceInputDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureSelectChoiceInputDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureSelectChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.FeatureSelectChoiceInputDbo;

        /**
         * Decodes a FeatureSelectChoiceInputDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureSelectChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.FeatureSelectChoiceInputDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.FeatureSelectChoiceInputDbo;

        /**
         * Creates a plain object from a FeatureSelectChoiceInputDbo message. Also converts values to other types if specified.
         * @param message FeatureSelectChoiceInputDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.FeatureSelectChoiceInputDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }

    /** Represents a FeatureSummaryDbo. */
    class FeatureSummaryDbo implements IFeatureSummaryDbo {

        /**
         * Constructs a new FeatureSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IFeatureSummaryDbo);

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

        /** FeatureSummaryDbo _maxStacks. */
        public _maxStacks?: "maxStacks";

        /**
         * Creates a new FeatureSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureSummaryDbo instance
         */
        public static create(properties?: v6.IFeatureSummaryDbo): v6.FeatureSummaryDbo;

        /**
         * Encodes the specified FeatureSummaryDbo message. Does not implicitly {@link v6.FeatureSummaryDbo.verify|verify} messages.
         * @param message FeatureSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.FeatureSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureSummaryDbo message, length delimited. Does not implicitly {@link v6.FeatureSummaryDbo.verify|verify} messages.
         * @param message FeatureSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.FeatureSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.FeatureSummaryDbo;

        /**
         * Decodes a FeatureSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.FeatureSummaryDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.FeatureSummaryDbo;

        /**
         * Creates a plain object from a FeatureSummaryDbo message. Also converts values to other types if specified.
         * @param message FeatureSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.FeatureSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** FeatureDbo description */
        description?: (DescriptionDbo|null);

        /** FeatureDbo stacks */
        stacks?: (v6.StacksDbo|null);
    }

    /** Represents a FeatureDbo. */
    class FeatureDbo implements IFeatureDbo {

        /**
         * Constructs a new FeatureDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IFeatureDbo);

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

        /** FeatureDbo description. */
        public description?: (DescriptionDbo|null);

        /** FeatureDbo stacks. */
        public stacks?: (v6.StacksDbo|null);

        /** FeatureDbo _maxStacks. */
        public _maxStacks?: "maxStacks";

        /**
         * Creates a new FeatureDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureDbo instance
         */
        public static create(properties?: v6.IFeatureDbo): v6.FeatureDbo;

        /**
         * Encodes the specified FeatureDbo message. Does not implicitly {@link v6.FeatureDbo.verify|verify} messages.
         * @param message FeatureDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.FeatureDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureDbo message, length delimited. Does not implicitly {@link v6.FeatureDbo.verify|verify} messages.
         * @param message FeatureDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.FeatureDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.FeatureDbo;

        /**
         * Decodes a FeatureDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.FeatureDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.FeatureDbo;

        /**
         * Creates a plain object from a FeatureDbo message. Also converts values to other types if specified.
         * @param message FeatureDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.FeatureDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        fixedStack?: (v6.FixedStackDbo|null);

        /** StacksDbo repeatingStack */
        repeatingStack?: (v6.StackDbo|null);
    }

    /** Represents a StacksDbo. */
    class StacksDbo implements IStacksDbo {

        /**
         * Constructs a new StacksDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IStacksDbo);

        /** StacksDbo fixedStack. */
        public fixedStack?: (v6.FixedStackDbo|null);

        /** StacksDbo repeatingStack. */
        public repeatingStack?: (v6.StackDbo|null);

        /** StacksDbo stackable. */
        public stackable?: ("fixedStack"|"repeatingStack");

        /**
         * Creates a new StacksDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StacksDbo instance
         */
        public static create(properties?: v6.IStacksDbo): v6.StacksDbo;

        /**
         * Encodes the specified StacksDbo message. Does not implicitly {@link v6.StacksDbo.verify|verify} messages.
         * @param message StacksDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.StacksDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StacksDbo message, length delimited. Does not implicitly {@link v6.StacksDbo.verify|verify} messages.
         * @param message StacksDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.StacksDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StacksDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StacksDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.StacksDbo;

        /**
         * Decodes a StacksDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StacksDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.StacksDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.StacksDbo;

        /**
         * Creates a plain object from a StacksDbo message. Also converts values to other types if specified.
         * @param message StacksDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.StacksDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        stacks?: (v6.StackDbo[]|null);
    }

    /** Represents a FixedStackDbo. */
    class FixedStackDbo implements IFixedStackDbo {

        /**
         * Constructs a new FixedStackDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IFixedStackDbo);

        /** FixedStackDbo stacks. */
        public stacks: v6.StackDbo[];

        /**
         * Creates a new FixedStackDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FixedStackDbo instance
         */
        public static create(properties?: v6.IFixedStackDbo): v6.FixedStackDbo;

        /**
         * Encodes the specified FixedStackDbo message. Does not implicitly {@link v6.FixedStackDbo.verify|verify} messages.
         * @param message FixedStackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.FixedStackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FixedStackDbo message, length delimited. Does not implicitly {@link v6.FixedStackDbo.verify|verify} messages.
         * @param message FixedStackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.FixedStackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FixedStackDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FixedStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.FixedStackDbo;

        /**
         * Decodes a FixedStackDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FixedStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.FixedStackDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.FixedStackDbo;

        /**
         * Creates a plain object from a FixedStackDbo message. Also converts values to other types if specified.
         * @param message FixedStackDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.FixedStackDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** StackDbo conditionalComponents */
        conditionalComponents?: (v6.ConditionalStackComponentDbo[]|null);

        /** StackDbo effects */
        effects?: (v6.EffectDbo[]|null);

        /** StackDbo links */
        links?: (v6.LinkDbo[]|null);

        /** StackDbo unlinks */
        unlinks?: (v6.UnlinkDbo[]|null);

        /** StackDbo choices */
        choices?: (v6.ChoiceDbo[]|null);
    }

    /** Represents a StackDbo. */
    class StackDbo implements IStackDbo {

        /**
         * Constructs a new StackDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IStackDbo);

        /** StackDbo conditionalComponents. */
        public conditionalComponents: v6.ConditionalStackComponentDbo[];

        /** StackDbo effects. */
        public effects: v6.EffectDbo[];

        /** StackDbo links. */
        public links: v6.LinkDbo[];

        /** StackDbo unlinks. */
        public unlinks: v6.UnlinkDbo[];

        /** StackDbo choices. */
        public choices: v6.ChoiceDbo[];

        /**
         * Creates a new StackDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StackDbo instance
         */
        public static create(properties?: v6.IStackDbo): v6.StackDbo;

        /**
         * Encodes the specified StackDbo message. Does not implicitly {@link v6.StackDbo.verify|verify} messages.
         * @param message StackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.StackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StackDbo message, length delimited. Does not implicitly {@link v6.StackDbo.verify|verify} messages.
         * @param message StackDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.StackDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StackDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.StackDbo;

        /**
         * Decodes a StackDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.StackDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.StackDbo;

        /**
         * Creates a plain object from a StackDbo message. Also converts values to other types if specified.
         * @param message StackDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.StackDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        effects?: (v6.EffectDbo[]|null);

        /** ConditionalStackComponentDbo links */
        links?: (v6.LinkDbo[]|null);

        /** ConditionalStackComponentDbo unlinks */
        unlinks?: (v6.UnlinkDbo[]|null);

        /** ConditionalStackComponentDbo choices */
        choices?: (v6.ChoiceDbo[]|null);
    }

    /** Represents a ConditionalStackComponentDbo. */
    class ConditionalStackComponentDbo implements IConditionalStackComponentDbo {

        /**
         * Constructs a new ConditionalStackComponentDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IConditionalStackComponentDbo);

        /** ConditionalStackComponentDbo conditionFormula. */
        public conditionFormula: string;

        /** ConditionalStackComponentDbo effects. */
        public effects: v6.EffectDbo[];

        /** ConditionalStackComponentDbo links. */
        public links: v6.LinkDbo[];

        /** ConditionalStackComponentDbo unlinks. */
        public unlinks: v6.UnlinkDbo[];

        /** ConditionalStackComponentDbo choices. */
        public choices: v6.ChoiceDbo[];

        /**
         * Creates a new ConditionalStackComponentDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConditionalStackComponentDbo instance
         */
        public static create(properties?: v6.IConditionalStackComponentDbo): v6.ConditionalStackComponentDbo;

        /**
         * Encodes the specified ConditionalStackComponentDbo message. Does not implicitly {@link v6.ConditionalStackComponentDbo.verify|verify} messages.
         * @param message ConditionalStackComponentDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.ConditionalStackComponentDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConditionalStackComponentDbo message, length delimited. Does not implicitly {@link v6.ConditionalStackComponentDbo.verify|verify} messages.
         * @param message ConditionalStackComponentDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.ConditionalStackComponentDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConditionalStackComponentDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConditionalStackComponentDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.ConditionalStackComponentDbo;

        /**
         * Decodes a ConditionalStackComponentDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConditionalStackComponentDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.ConditionalStackComponentDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.ConditionalStackComponentDbo;

        /**
         * Creates a plain object from a ConditionalStackComponentDbo message. Also converts values to other types if specified.
         * @param message ConditionalStackComponentDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.ConditionalStackComponentDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: v6.ILinkDbo);

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
        public static create(properties?: v6.ILinkDbo): v6.LinkDbo;

        /**
         * Encodes the specified LinkDbo message. Does not implicitly {@link v6.LinkDbo.verify|verify} messages.
         * @param message LinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.LinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinkDbo message, length delimited. Does not implicitly {@link v6.LinkDbo.verify|verify} messages.
         * @param message LinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.LinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinkDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.LinkDbo;

        /**
         * Decodes a LinkDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.LinkDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.LinkDbo;

        /**
         * Creates a plain object from a LinkDbo message. Also converts values to other types if specified.
         * @param message LinkDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.LinkDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: v6.IUnlinkDbo);

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
        public static create(properties?: v6.IUnlinkDbo): v6.UnlinkDbo;

        /**
         * Encodes the specified UnlinkDbo message. Does not implicitly {@link v6.UnlinkDbo.verify|verify} messages.
         * @param message UnlinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.UnlinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnlinkDbo message, length delimited. Does not implicitly {@link v6.UnlinkDbo.verify|verify} messages.
         * @param message UnlinkDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.UnlinkDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlinkDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnlinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.UnlinkDbo;

        /**
         * Decodes an UnlinkDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnlinkDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.UnlinkDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.UnlinkDbo;

        /**
         * Creates a plain object from an UnlinkDbo message. Also converts values to other types if specified.
         * @param message UnlinkDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.UnlinkDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a SourceModuleDbo. */
    interface ISourceModuleDbo {

        /** SourceModuleDbo sourceId */
        sourceId?: (string|null);

        /** SourceModuleDbo features */
        features?: (v6.FeatureSummaryDbo[]|null);
    }

    /** Represents a SourceModuleDbo. */
    class SourceModuleDbo implements ISourceModuleDbo {

        /**
         * Constructs a new SourceModuleDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.ISourceModuleDbo);

        /** SourceModuleDbo sourceId. */
        public sourceId: string;

        /** SourceModuleDbo features. */
        public features: v6.FeatureSummaryDbo[];

        /**
         * Creates a new SourceModuleDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SourceModuleDbo instance
         */
        public static create(properties?: v6.ISourceModuleDbo): v6.SourceModuleDbo;

        /**
         * Encodes the specified SourceModuleDbo message. Does not implicitly {@link v6.SourceModuleDbo.verify|verify} messages.
         * @param message SourceModuleDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.SourceModuleDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SourceModuleDbo message, length delimited. Does not implicitly {@link v6.SourceModuleDbo.verify|verify} messages.
         * @param message SourceModuleDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.SourceModuleDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SourceModuleDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SourceModuleDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.SourceModuleDbo;

        /**
         * Decodes a SourceModuleDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SourceModuleDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.SourceModuleDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.SourceModuleDbo;

        /**
         * Creates a plain object from a SourceModuleDbo message. Also converts values to other types if specified.
         * @param message SourceModuleDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.SourceModuleDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of an EffectDbo. */
    interface IEffectDbo {

        /** EffectDbo setAction */
        setAction?: (v6.EffectDbo.SetActionDbo|null);

        /** EffectDbo addAction */
        addAction?: (v6.EffectDbo.AddActionDbo|null);
    }

    /** Represents an EffectDbo. */
    class EffectDbo implements IEffectDbo {

        /**
         * Constructs a new EffectDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v6.IEffectDbo);

        /** EffectDbo setAction. */
        public setAction?: (v6.EffectDbo.SetActionDbo|null);

        /** EffectDbo addAction. */
        public addAction?: (v6.EffectDbo.AddActionDbo|null);

        /** EffectDbo action. */
        public action?: ("setAction"|"addAction");

        /**
         * Creates a new EffectDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EffectDbo instance
         */
        public static create(properties?: v6.IEffectDbo): v6.EffectDbo;

        /**
         * Encodes the specified EffectDbo message. Does not implicitly {@link v6.EffectDbo.verify|verify} messages.
         * @param message EffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v6.EffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EffectDbo message, length delimited. Does not implicitly {@link v6.EffectDbo.verify|verify} messages.
         * @param message EffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v6.EffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EffectDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.EffectDbo;

        /**
         * Decodes an EffectDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.EffectDbo;

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
        public static fromObject(object: { [k: string]: any }): v6.EffectDbo;

        /**
         * Creates a plain object from an EffectDbo message. Also converts values to other types if specified.
         * @param message EffectDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v6.EffectDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: v6.EffectDbo.ISetActionDbo);

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
            public static create(properties?: v6.EffectDbo.ISetActionDbo): v6.EffectDbo.SetActionDbo;

            /**
             * Encodes the specified SetActionDbo message. Does not implicitly {@link v6.EffectDbo.SetActionDbo.verify|verify} messages.
             * @param message SetActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v6.EffectDbo.SetActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetActionDbo message, length delimited. Does not implicitly {@link v6.EffectDbo.SetActionDbo.verify|verify} messages.
             * @param message SetActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v6.EffectDbo.SetActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.EffectDbo.SetActionDbo;

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.EffectDbo.SetActionDbo;

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
            public static fromObject(object: { [k: string]: any }): v6.EffectDbo.SetActionDbo;

            /**
             * Creates a plain object from a SetActionDbo message. Also converts values to other types if specified.
             * @param message SetActionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v6.EffectDbo.SetActionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: v6.EffectDbo.IAddActionDbo);

            /** AddActionDbo targetKey. */
            public targetKey: string;

            /** AddActionDbo numberDelta. */
            public numberDelta: number;

            /**
             * Creates a new AddActionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddActionDbo instance
             */
            public static create(properties?: v6.EffectDbo.IAddActionDbo): v6.EffectDbo.AddActionDbo;

            /**
             * Encodes the specified AddActionDbo message. Does not implicitly {@link v6.EffectDbo.AddActionDbo.verify|verify} messages.
             * @param message AddActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v6.EffectDbo.AddActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddActionDbo message, length delimited. Does not implicitly {@link v6.EffectDbo.AddActionDbo.verify|verify} messages.
             * @param message AddActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v6.EffectDbo.AddActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v6.EffectDbo.AddActionDbo;

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v6.EffectDbo.AddActionDbo;

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
            public static fromObject(object: { [k: string]: any }): v6.EffectDbo.AddActionDbo;

            /**
             * Creates a plain object from an AddActionDbo message. Also converts values to other types if specified.
             * @param message AddActionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v6.EffectDbo.AddActionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
}

/** Namespace local. */
export namespace local {

    /** Properties of a FeatData. */
    interface IFeatData {

        /** FeatData id */
        id?: (string|null);

        /** FeatData name */
        name?: (string|null);

        /** FeatData type */
        type?: (string|null);

        /** FeatData description */
        description?: (string|null);

        /** FeatData prerequisites */
        prerequisites?: (string|null);

        /** FeatData benefit */
        benefit?: (string|null);

        /** FeatData normal */
        normal?: (string|null);

        /** FeatData special */
        special?: (string|null);

        /** FeatData source */
        source?: (string|null);

        /** FeatData teamwork */
        teamwork?: (boolean|null);

        /** FeatData critical */
        critical?: (boolean|null);

        /** FeatData grit */
        grit?: (boolean|null);

        /** FeatData style */
        style?: (boolean|null);

        /** FeatData performance */
        performance?: (boolean|null);

        /** FeatData racial */
        racial?: (boolean|null);

        /** FeatData companion */
        companion?: (boolean|null);

        /** FeatData notes */
        notes?: (string|null);

        /** FeatData goal */
        goal?: (string|null);

        /** FeatData multiple */
        multiple?: (boolean|null);

        /** FeatData prerequisiteFeats */
        prerequisiteFeats?: (string|null);

        /** FeatData raceName */
        raceName?: (string|null);

        /** FeatData completionBenefit */
        completionBenefit?: (string|null);

        /** FeatData suggestedTraits */
        suggestedTraits?: (string|null);
    }

    /** Represents a FeatData. */
    class FeatData implements IFeatData {

        /**
         * Constructs a new FeatData.
         * @param [properties] Properties to set
         */
        constructor(properties?: local.IFeatData);

        /** FeatData id. */
        public id: string;

        /** FeatData name. */
        public name: string;

        /** FeatData type. */
        public type: string;

        /** FeatData description. */
        public description: string;

        /** FeatData prerequisites. */
        public prerequisites: string;

        /** FeatData benefit. */
        public benefit: string;

        /** FeatData normal. */
        public normal: string;

        /** FeatData special. */
        public special: string;

        /** FeatData source. */
        public source: string;

        /** FeatData teamwork. */
        public teamwork: boolean;

        /** FeatData critical. */
        public critical: boolean;

        /** FeatData grit. */
        public grit: boolean;

        /** FeatData style. */
        public style: boolean;

        /** FeatData performance. */
        public performance: boolean;

        /** FeatData racial. */
        public racial: boolean;

        /** FeatData companion. */
        public companion: boolean;

        /** FeatData notes. */
        public notes: string;

        /** FeatData goal. */
        public goal: string;

        /** FeatData multiple. */
        public multiple: boolean;

        /** FeatData prerequisiteFeats. */
        public prerequisiteFeats: string;

        /** FeatData raceName. */
        public raceName: string;

        /** FeatData completionBenefit. */
        public completionBenefit: string;

        /** FeatData suggestedTraits. */
        public suggestedTraits: string;

        /**
         * Creates a new FeatData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatData instance
         */
        public static create(properties?: local.IFeatData): local.FeatData;

        /**
         * Encodes the specified FeatData message. Does not implicitly {@link local.FeatData.verify|verify} messages.
         * @param message FeatData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: local.FeatData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatData message, length delimited. Does not implicitly {@link local.FeatData.verify|verify} messages.
         * @param message FeatData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: local.FeatData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): local.FeatData;

        /**
         * Decodes a FeatData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): local.FeatData;

        /**
         * Verifies a FeatData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatData
         */
        public static fromObject(object: { [k: string]: any }): local.FeatData;

        /**
         * Creates a plain object from a FeatData message. Also converts values to other types if specified.
         * @param message FeatData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: local.FeatData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DescriptionDbo. */
export interface IDescriptionDbo {

    /** DescriptionDbo text */
    text?: (string|null);

    /** DescriptionDbo sections */
    sections?: ({ [k: string]: string }|null);
}

/** Represents a DescriptionDbo. */
export class DescriptionDbo implements IDescriptionDbo {

    /**
     * Constructs a new DescriptionDbo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDescriptionDbo);

    /** DescriptionDbo text. */
    public text: string;

    /** DescriptionDbo sections. */
    public sections: { [k: string]: string };

    /**
     * Creates a new DescriptionDbo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DescriptionDbo instance
     */
    public static create(properties?: IDescriptionDbo): DescriptionDbo;

    /**
     * Encodes the specified DescriptionDbo message. Does not implicitly {@link DescriptionDbo.verify|verify} messages.
     * @param message DescriptionDbo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: DescriptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DescriptionDbo message, length delimited. Does not implicitly {@link DescriptionDbo.verify|verify} messages.
     * @param message DescriptionDbo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: DescriptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DescriptionDbo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DescriptionDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DescriptionDbo;

    /**
     * Decodes a DescriptionDbo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DescriptionDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DescriptionDbo;

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
    public static fromObject(object: { [k: string]: any }): DescriptionDbo;

    /**
     * Creates a plain object from a DescriptionDbo message. Also converts values to other types if specified.
     * @param message DescriptionDbo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DescriptionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Namespace v4. */
export namespace v4 {

    /** Properties of a ChoiceDbo. */
    interface IChoiceDbo {

        /** ChoiceDbo id */
        id?: (string|null);

        /** ChoiceDbo type */
        type?: (string|null);

        /** ChoiceDbo label */
        label?: (string|null);

        /** ChoiceDbo repeating */
        repeating?: (boolean|null);

        /** ChoiceDbo text */
        text?: (v4.ChoiceDbo.TextChoiceDbo|null);

        /** ChoiceDbo select */
        select?: (v4.ChoiceDbo.SelectChoiceDbo|null);
    }

    /** Represents a ChoiceDbo. */
    class ChoiceDbo implements IChoiceDbo {

        /**
         * Constructs a new ChoiceDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.IChoiceDbo);

        /** ChoiceDbo id. */
        public id: string;

        /** ChoiceDbo type. */
        public type: string;

        /** ChoiceDbo label. */
        public label: string;

        /** ChoiceDbo repeating. */
        public repeating: boolean;

        /** ChoiceDbo text. */
        public text?: (v4.ChoiceDbo.TextChoiceDbo|null);

        /** ChoiceDbo select. */
        public select?: (v4.ChoiceDbo.SelectChoiceDbo|null);

        /** ChoiceDbo choice. */
        public choice?: ("text"|"select");

        /**
         * Creates a new ChoiceDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChoiceDbo instance
         */
        public static create(properties?: v4.IChoiceDbo): v4.ChoiceDbo;

        /**
         * Encodes the specified ChoiceDbo message. Does not implicitly {@link v4.ChoiceDbo.verify|verify} messages.
         * @param message ChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.ChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChoiceDbo message, length delimited. Does not implicitly {@link v4.ChoiceDbo.verify|verify} messages.
         * @param message ChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.ChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.ChoiceDbo;

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.ChoiceDbo;

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
        public static fromObject(object: { [k: string]: any }): v4.ChoiceDbo;

        /**
         * Creates a plain object from a ChoiceDbo message. Also converts values to other types if specified.
         * @param message ChoiceDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.ChoiceDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    namespace ChoiceDbo {

        /** Properties of a TextChoiceDbo. */
        interface ITextChoiceDbo {
        }

        /** Represents a TextChoiceDbo. */
        class TextChoiceDbo implements ITextChoiceDbo {

            /**
             * Constructs a new TextChoiceDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: v4.ChoiceDbo.ITextChoiceDbo);

            /**
             * Creates a new TextChoiceDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TextChoiceDbo instance
             */
            public static create(properties?: v4.ChoiceDbo.ITextChoiceDbo): v4.ChoiceDbo.TextChoiceDbo;

            /**
             * Encodes the specified TextChoiceDbo message. Does not implicitly {@link v4.ChoiceDbo.TextChoiceDbo.verify|verify} messages.
             * @param message TextChoiceDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v4.ChoiceDbo.TextChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TextChoiceDbo message, length delimited. Does not implicitly {@link v4.ChoiceDbo.TextChoiceDbo.verify|verify} messages.
             * @param message TextChoiceDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v4.ChoiceDbo.TextChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TextChoiceDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TextChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.ChoiceDbo.TextChoiceDbo;

            /**
             * Decodes a TextChoiceDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TextChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.ChoiceDbo.TextChoiceDbo;

            /**
             * Verifies a TextChoiceDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TextChoiceDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TextChoiceDbo
             */
            public static fromObject(object: { [k: string]: any }): v4.ChoiceDbo.TextChoiceDbo;

            /**
             * Creates a plain object from a TextChoiceDbo message. Also converts values to other types if specified.
             * @param message TextChoiceDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v4.ChoiceDbo.TextChoiceDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TextChoiceDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TextChoiceDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SelectChoiceDbo. */
        interface ISelectChoiceDbo {

            /** SelectChoiceDbo tags */
            tags?: (string[]|null);

            /** SelectChoiceDbo ids */
            ids?: (string[]|null);
        }

        /** Represents a SelectChoiceDbo. */
        class SelectChoiceDbo implements ISelectChoiceDbo {

            /**
             * Constructs a new SelectChoiceDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: v4.ChoiceDbo.ISelectChoiceDbo);

            /** SelectChoiceDbo tags. */
            public tags: string[];

            /** SelectChoiceDbo ids. */
            public ids: string[];

            /**
             * Creates a new SelectChoiceDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectChoiceDbo instance
             */
            public static create(properties?: v4.ChoiceDbo.ISelectChoiceDbo): v4.ChoiceDbo.SelectChoiceDbo;

            /**
             * Encodes the specified SelectChoiceDbo message. Does not implicitly {@link v4.ChoiceDbo.SelectChoiceDbo.verify|verify} messages.
             * @param message SelectChoiceDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v4.ChoiceDbo.SelectChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectChoiceDbo message, length delimited. Does not implicitly {@link v4.ChoiceDbo.SelectChoiceDbo.verify|verify} messages.
             * @param message SelectChoiceDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v4.ChoiceDbo.SelectChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectChoiceDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.ChoiceDbo.SelectChoiceDbo;

            /**
             * Decodes a SelectChoiceDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.ChoiceDbo.SelectChoiceDbo;

            /**
             * Verifies a SelectChoiceDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectChoiceDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectChoiceDbo
             */
            public static fromObject(object: { [k: string]: any }): v4.ChoiceDbo.SelectChoiceDbo;

            /**
             * Creates a plain object from a SelectChoiceDbo message. Also converts values to other types if specified.
             * @param message SelectChoiceDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v4.ChoiceDbo.SelectChoiceDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectChoiceDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectChoiceDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an EntitySummaryDbo. */
    interface IEntitySummaryDbo {

        /** EntitySummaryDbo id */
        id?: (string|null);

        /** EntitySummaryDbo name */
        name?: (string|null);

        /** EntitySummaryDbo tags */
        tags?: (string[]|null);

        /** EntitySummaryDbo prerequisiteFormula */
        prerequisiteFormula?: (string|null);

        /** EntitySummaryDbo children */
        children?: (v4.ChildEntitySummaryDbo[]|null);
    }

    /** Represents an EntitySummaryDbo. */
    class EntitySummaryDbo implements IEntitySummaryDbo {

        /**
         * Constructs a new EntitySummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.IEntitySummaryDbo);

        /** EntitySummaryDbo id. */
        public id: string;

        /** EntitySummaryDbo name. */
        public name: string;

        /** EntitySummaryDbo tags. */
        public tags: string[];

        /** EntitySummaryDbo prerequisiteFormula. */
        public prerequisiteFormula: string;

        /** EntitySummaryDbo children. */
        public children: v4.ChildEntitySummaryDbo[];

        /**
         * Creates a new EntitySummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntitySummaryDbo instance
         */
        public static create(properties?: v4.IEntitySummaryDbo): v4.EntitySummaryDbo;

        /**
         * Encodes the specified EntitySummaryDbo message. Does not implicitly {@link v4.EntitySummaryDbo.verify|verify} messages.
         * @param message EntitySummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.EntitySummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntitySummaryDbo message, length delimited. Does not implicitly {@link v4.EntitySummaryDbo.verify|verify} messages.
         * @param message EntitySummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.EntitySummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntitySummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EntitySummaryDbo;

        /**
         * Decodes an EntitySummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EntitySummaryDbo;

        /**
         * Verifies an EntitySummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntitySummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntitySummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v4.EntitySummaryDbo;

        /**
         * Creates a plain object from an EntitySummaryDbo message. Also converts values to other types if specified.
         * @param message EntitySummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.EntitySummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntitySummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntitySummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EntityDbo. */
    interface IEntityDbo {

        /** EntityDbo id */
        id?: (string|null);

        /** EntityDbo name */
        name?: (string|null);

        /** EntityDbo tags */
        tags?: (string[]|null);

        /** EntityDbo prerequisiteFormula */
        prerequisiteFormula?: (string|null);

        /** EntityDbo children */
        children?: (v4.ChildEntityDbo[]|null);

        /** EntityDbo description */
        description?: (DescriptionDbo|null);

        /** EntityDbo effects */
        effects?: (v4.EffectDbo[]|null);

        /** EntityDbo choices */
        choices?: (v4.ChoiceDbo[]|null);

        /** EntityDbo template */
        template?: (v4.TemplateDbo|null);
    }

    /** Represents an EntityDbo. */
    class EntityDbo implements IEntityDbo {

        /**
         * Constructs a new EntityDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.IEntityDbo);

        /** EntityDbo id. */
        public id: string;

        /** EntityDbo name. */
        public name: string;

        /** EntityDbo tags. */
        public tags: string[];

        /** EntityDbo prerequisiteFormula. */
        public prerequisiteFormula: string;

        /** EntityDbo children. */
        public children: v4.ChildEntityDbo[];

        /** EntityDbo description. */
        public description?: (DescriptionDbo|null);

        /** EntityDbo effects. */
        public effects: v4.EffectDbo[];

        /** EntityDbo choices. */
        public choices: v4.ChoiceDbo[];

        /** EntityDbo template. */
        public template?: (v4.TemplateDbo|null);

        /**
         * Creates a new EntityDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityDbo instance
         */
        public static create(properties?: v4.IEntityDbo): v4.EntityDbo;

        /**
         * Encodes the specified EntityDbo message. Does not implicitly {@link v4.EntityDbo.verify|verify} messages.
         * @param message EntityDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.EntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityDbo message, length delimited. Does not implicitly {@link v4.EntityDbo.verify|verify} messages.
         * @param message EntityDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.EntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EntityDbo;

        /**
         * Decodes an EntityDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EntityDbo;

        /**
         * Verifies an EntityDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityDbo
         */
        public static fromObject(object: { [k: string]: any }): v4.EntityDbo;

        /**
         * Creates a plain object from an EntityDbo message. Also converts values to other types if specified.
         * @param message EntityDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.EntityDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChildEntitySummaryDbo. */
    interface IChildEntitySummaryDbo {

        /** ChildEntitySummaryDbo optionId */
        optionId?: (string|null);

        /** ChildEntitySummaryDbo condition */
        condition?: (string|null);

        /** ChildEntitySummaryDbo name */
        name?: (string|null);

        /** ChildEntitySummaryDbo additionalTags */
        additionalTags?: (string[]|null);
    }

    /** Represents a ChildEntitySummaryDbo. */
    class ChildEntitySummaryDbo implements IChildEntitySummaryDbo {

        /**
         * Constructs a new ChildEntitySummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.IChildEntitySummaryDbo);

        /** ChildEntitySummaryDbo optionId. */
        public optionId: string;

        /** ChildEntitySummaryDbo condition. */
        public condition: string;

        /** ChildEntitySummaryDbo name. */
        public name: string;

        /** ChildEntitySummaryDbo additionalTags. */
        public additionalTags: string[];

        /**
         * Creates a new ChildEntitySummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChildEntitySummaryDbo instance
         */
        public static create(properties?: v4.IChildEntitySummaryDbo): v4.ChildEntitySummaryDbo;

        /**
         * Encodes the specified ChildEntitySummaryDbo message. Does not implicitly {@link v4.ChildEntitySummaryDbo.verify|verify} messages.
         * @param message ChildEntitySummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.ChildEntitySummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChildEntitySummaryDbo message, length delimited. Does not implicitly {@link v4.ChildEntitySummaryDbo.verify|verify} messages.
         * @param message ChildEntitySummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.ChildEntitySummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChildEntitySummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChildEntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.ChildEntitySummaryDbo;

        /**
         * Decodes a ChildEntitySummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChildEntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.ChildEntitySummaryDbo;

        /**
         * Verifies a ChildEntitySummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChildEntitySummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChildEntitySummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v4.ChildEntitySummaryDbo;

        /**
         * Creates a plain object from a ChildEntitySummaryDbo message. Also converts values to other types if specified.
         * @param message ChildEntitySummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.ChildEntitySummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChildEntitySummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChildEntitySummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChildEntityDbo. */
    interface IChildEntityDbo {

        /** ChildEntityDbo optionId */
        optionId?: (string|null);

        /** ChildEntityDbo condition */
        condition?: (string|null);

        /** ChildEntityDbo name */
        name?: (string|null);

        /** ChildEntityDbo additionalTags */
        additionalTags?: (string[]|null);

        /** ChildEntityDbo effects */
        effects?: (v4.EffectDbo[]|null);

        /** ChildEntityDbo choices */
        choices?: (v4.ChoiceDbo[]|null);

        /** ChildEntityDbo template */
        template?: (v4.TemplateDbo|null);
    }

    /** Represents a ChildEntityDbo. */
    class ChildEntityDbo implements IChildEntityDbo {

        /**
         * Constructs a new ChildEntityDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.IChildEntityDbo);

        /** ChildEntityDbo optionId. */
        public optionId: string;

        /** ChildEntityDbo condition. */
        public condition: string;

        /** ChildEntityDbo name. */
        public name: string;

        /** ChildEntityDbo additionalTags. */
        public additionalTags: string[];

        /** ChildEntityDbo effects. */
        public effects: v4.EffectDbo[];

        /** ChildEntityDbo choices. */
        public choices: v4.ChoiceDbo[];

        /** ChildEntityDbo template. */
        public template?: (v4.TemplateDbo|null);

        /**
         * Creates a new ChildEntityDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChildEntityDbo instance
         */
        public static create(properties?: v4.IChildEntityDbo): v4.ChildEntityDbo;

        /**
         * Encodes the specified ChildEntityDbo message. Does not implicitly {@link v4.ChildEntityDbo.verify|verify} messages.
         * @param message ChildEntityDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.ChildEntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChildEntityDbo message, length delimited. Does not implicitly {@link v4.ChildEntityDbo.verify|verify} messages.
         * @param message ChildEntityDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.ChildEntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChildEntityDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChildEntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.ChildEntityDbo;

        /**
         * Decodes a ChildEntityDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChildEntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.ChildEntityDbo;

        /**
         * Verifies a ChildEntityDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChildEntityDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChildEntityDbo
         */
        public static fromObject(object: { [k: string]: any }): v4.ChildEntityDbo;

        /**
         * Creates a plain object from a ChildEntityDbo message. Also converts values to other types if specified.
         * @param message ChildEntityDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.ChildEntityDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChildEntityDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChildEntityDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EntityDatabaseDbo. */
    interface IEntityDatabaseDbo {

        /** EntityDatabaseDbo databaseId */
        databaseId?: (string|null);

        /** EntityDatabaseDbo summaries */
        summaries?: (v4.EntitySummaryDbo[]|null);
    }

    /** Represents an EntityDatabaseDbo. */
    class EntityDatabaseDbo implements IEntityDatabaseDbo {

        /**
         * Constructs a new EntityDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.IEntityDatabaseDbo);

        /** EntityDatabaseDbo databaseId. */
        public databaseId: string;

        /** EntityDatabaseDbo summaries. */
        public summaries: v4.EntitySummaryDbo[];

        /**
         * Creates a new EntityDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityDatabaseDbo instance
         */
        public static create(properties?: v4.IEntityDatabaseDbo): v4.EntityDatabaseDbo;

        /**
         * Encodes the specified EntityDatabaseDbo message. Does not implicitly {@link v4.EntityDatabaseDbo.verify|verify} messages.
         * @param message EntityDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.EntityDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityDatabaseDbo message, length delimited. Does not implicitly {@link v4.EntityDatabaseDbo.verify|verify} messages.
         * @param message EntityDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.EntityDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EntityDatabaseDbo;

        /**
         * Decodes an EntityDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EntityDatabaseDbo;

        /**
         * Verifies an EntityDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v4.EntityDatabaseDbo;

        /**
         * Creates a plain object from an EntityDatabaseDbo message. Also converts values to other types if specified.
         * @param message EntityDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.EntityDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TemplateDbo. */
    interface ITemplateDbo {

        /** TemplateDbo id */
        id?: (string|null);

        /** TemplateDbo sections */
        sections?: (v4.TemplateSectionDbo[]|null);
    }

    /** Represents a TemplateDbo. */
    class TemplateDbo implements ITemplateDbo {

        /**
         * Constructs a new TemplateDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.ITemplateDbo);

        /** TemplateDbo id. */
        public id: string;

        /** TemplateDbo sections. */
        public sections: v4.TemplateSectionDbo[];

        /**
         * Creates a new TemplateDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TemplateDbo instance
         */
        public static create(properties?: v4.ITemplateDbo): v4.TemplateDbo;

        /**
         * Encodes the specified TemplateDbo message. Does not implicitly {@link v4.TemplateDbo.verify|verify} messages.
         * @param message TemplateDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.TemplateDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TemplateDbo message, length delimited. Does not implicitly {@link v4.TemplateDbo.verify|verify} messages.
         * @param message TemplateDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.TemplateDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TemplateDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.TemplateDbo;

        /**
         * Decodes a TemplateDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.TemplateDbo;

        /**
         * Verifies a TemplateDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TemplateDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TemplateDbo
         */
        public static fromObject(object: { [k: string]: any }): v4.TemplateDbo;

        /**
         * Creates a plain object from a TemplateDbo message. Also converts values to other types if specified.
         * @param message TemplateDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.TemplateDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TemplateDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TemplateDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TemplateSectionDbo. */
    interface ITemplateSectionDbo {

        /** TemplateSectionDbo condition */
        condition?: (string|null);

        /** TemplateSectionDbo effects */
        effects?: (v4.EffectDbo[]|null);

        /** TemplateSectionDbo choices */
        choices?: (v4.ChoiceDbo[]|null);
    }

    /** Represents a TemplateSectionDbo. */
    class TemplateSectionDbo implements ITemplateSectionDbo {

        /**
         * Constructs a new TemplateSectionDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.ITemplateSectionDbo);

        /** TemplateSectionDbo condition. */
        public condition: string;

        /** TemplateSectionDbo effects. */
        public effects: v4.EffectDbo[];

        /** TemplateSectionDbo choices. */
        public choices: v4.ChoiceDbo[];

        /**
         * Creates a new TemplateSectionDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TemplateSectionDbo instance
         */
        public static create(properties?: v4.ITemplateSectionDbo): v4.TemplateSectionDbo;

        /**
         * Encodes the specified TemplateSectionDbo message. Does not implicitly {@link v4.TemplateSectionDbo.verify|verify} messages.
         * @param message TemplateSectionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.TemplateSectionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TemplateSectionDbo message, length delimited. Does not implicitly {@link v4.TemplateSectionDbo.verify|verify} messages.
         * @param message TemplateSectionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.TemplateSectionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TemplateSectionDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TemplateSectionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.TemplateSectionDbo;

        /**
         * Decodes a TemplateSectionDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TemplateSectionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.TemplateSectionDbo;

        /**
         * Verifies a TemplateSectionDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TemplateSectionDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TemplateSectionDbo
         */
        public static fromObject(object: { [k: string]: any }): v4.TemplateSectionDbo;

        /**
         * Creates a plain object from a TemplateSectionDbo message. Also converts values to other types if specified.
         * @param message TemplateSectionDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.TemplateSectionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TemplateSectionDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TemplateSectionDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EffectDbo. */
    interface IEffectDbo {

        /** EffectDbo setAction */
        setAction?: (v4.EffectDbo.SetActionDbo|null);

        /** EffectDbo addAction */
        addAction?: (v4.EffectDbo.AddActionDbo|null);

        /** EffectDbo renameAction */
        renameAction?: (v4.EffectDbo.RenameKeyDbo|null);

        /** EffectDbo addEntity */
        addEntity?: (v4.EffectDbo.AddEntityDbo|null);

        /** EffectDbo replaceEntity */
        replaceEntity?: (v4.EffectDbo.ReplaceEntityDbo|null);
    }

    /** Represents an EffectDbo. */
    class EffectDbo implements IEffectDbo {

        /**
         * Constructs a new EffectDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v4.IEffectDbo);

        /** EffectDbo setAction. */
        public setAction?: (v4.EffectDbo.SetActionDbo|null);

        /** EffectDbo addAction. */
        public addAction?: (v4.EffectDbo.AddActionDbo|null);

        /** EffectDbo renameAction. */
        public renameAction?: (v4.EffectDbo.RenameKeyDbo|null);

        /** EffectDbo addEntity. */
        public addEntity?: (v4.EffectDbo.AddEntityDbo|null);

        /** EffectDbo replaceEntity. */
        public replaceEntity?: (v4.EffectDbo.ReplaceEntityDbo|null);

        /** EffectDbo action. */
        public action?: ("setAction"|"addAction"|"renameAction"|"addEntity"|"replaceEntity");

        /**
         * Creates a new EffectDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EffectDbo instance
         */
        public static create(properties?: v4.IEffectDbo): v4.EffectDbo;

        /**
         * Encodes the specified EffectDbo message. Does not implicitly {@link v4.EffectDbo.verify|verify} messages.
         * @param message EffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v4.EffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EffectDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.verify|verify} messages.
         * @param message EffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v4.EffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EffectDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EffectDbo;

        /**
         * Decodes an EffectDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EffectDbo;

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
        public static fromObject(object: { [k: string]: any }): v4.EffectDbo;

        /**
         * Creates a plain object from an EffectDbo message. Also converts values to other types if specified.
         * @param message EffectDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v4.EffectDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: v4.EffectDbo.ISetActionDbo);

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
            public static create(properties?: v4.EffectDbo.ISetActionDbo): v4.EffectDbo.SetActionDbo;

            /**
             * Encodes the specified SetActionDbo message. Does not implicitly {@link v4.EffectDbo.SetActionDbo.verify|verify} messages.
             * @param message SetActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v4.EffectDbo.SetActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetActionDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.SetActionDbo.verify|verify} messages.
             * @param message SetActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v4.EffectDbo.SetActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EffectDbo.SetActionDbo;

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EffectDbo.SetActionDbo;

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
            public static fromObject(object: { [k: string]: any }): v4.EffectDbo.SetActionDbo;

            /**
             * Creates a plain object from a SetActionDbo message. Also converts values to other types if specified.
             * @param message SetActionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v4.EffectDbo.SetActionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: v4.EffectDbo.IAddActionDbo);

            /** AddActionDbo targetKey. */
            public targetKey: string;

            /** AddActionDbo numberDelta. */
            public numberDelta: number;

            /**
             * Creates a new AddActionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddActionDbo instance
             */
            public static create(properties?: v4.EffectDbo.IAddActionDbo): v4.EffectDbo.AddActionDbo;

            /**
             * Encodes the specified AddActionDbo message. Does not implicitly {@link v4.EffectDbo.AddActionDbo.verify|verify} messages.
             * @param message AddActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v4.EffectDbo.AddActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddActionDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.AddActionDbo.verify|verify} messages.
             * @param message AddActionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v4.EffectDbo.AddActionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EffectDbo.AddActionDbo;

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EffectDbo.AddActionDbo;

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
            public static fromObject(object: { [k: string]: any }): v4.EffectDbo.AddActionDbo;

            /**
             * Creates a plain object from an AddActionDbo message. Also converts values to other types if specified.
             * @param message AddActionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v4.EffectDbo.AddActionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a RenameKeyDbo. */
        interface IRenameKeyDbo {

            /** RenameKeyDbo targetKey */
            targetKey?: (string|null);

            /** RenameKeyDbo renamedKey */
            renamedKey?: (string|null);
        }

        /** Represents a RenameKeyDbo. */
        class RenameKeyDbo implements IRenameKeyDbo {

            /**
             * Constructs a new RenameKeyDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: v4.EffectDbo.IRenameKeyDbo);

            /** RenameKeyDbo targetKey. */
            public targetKey: string;

            /** RenameKeyDbo renamedKey. */
            public renamedKey: string;

            /**
             * Creates a new RenameKeyDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameKeyDbo instance
             */
            public static create(properties?: v4.EffectDbo.IRenameKeyDbo): v4.EffectDbo.RenameKeyDbo;

            /**
             * Encodes the specified RenameKeyDbo message. Does not implicitly {@link v4.EffectDbo.RenameKeyDbo.verify|verify} messages.
             * @param message RenameKeyDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v4.EffectDbo.RenameKeyDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameKeyDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.RenameKeyDbo.verify|verify} messages.
             * @param message RenameKeyDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v4.EffectDbo.RenameKeyDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameKeyDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameKeyDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EffectDbo.RenameKeyDbo;

            /**
             * Decodes a RenameKeyDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameKeyDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EffectDbo.RenameKeyDbo;

            /**
             * Verifies a RenameKeyDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameKeyDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameKeyDbo
             */
            public static fromObject(object: { [k: string]: any }): v4.EffectDbo.RenameKeyDbo;

            /**
             * Creates a plain object from a RenameKeyDbo message. Also converts values to other types if specified.
             * @param message RenameKeyDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v4.EffectDbo.RenameKeyDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameKeyDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RenameKeyDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddEntityDbo. */
        interface IAddEntityDbo {

            /** AddEntityDbo entityId */
            entityId?: (string|null);
        }

        /** Represents an AddEntityDbo. */
        class AddEntityDbo implements IAddEntityDbo {

            /**
             * Constructs a new AddEntityDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: v4.EffectDbo.IAddEntityDbo);

            /** AddEntityDbo entityId. */
            public entityId: string;

            /**
             * Creates a new AddEntityDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddEntityDbo instance
             */
            public static create(properties?: v4.EffectDbo.IAddEntityDbo): v4.EffectDbo.AddEntityDbo;

            /**
             * Encodes the specified AddEntityDbo message. Does not implicitly {@link v4.EffectDbo.AddEntityDbo.verify|verify} messages.
             * @param message AddEntityDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v4.EffectDbo.AddEntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddEntityDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.AddEntityDbo.verify|verify} messages.
             * @param message AddEntityDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v4.EffectDbo.AddEntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddEntityDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddEntityDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EffectDbo.AddEntityDbo;

            /**
             * Decodes an AddEntityDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddEntityDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EffectDbo.AddEntityDbo;

            /**
             * Verifies an AddEntityDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddEntityDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddEntityDbo
             */
            public static fromObject(object: { [k: string]: any }): v4.EffectDbo.AddEntityDbo;

            /**
             * Creates a plain object from an AddEntityDbo message. Also converts values to other types if specified.
             * @param message AddEntityDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v4.EffectDbo.AddEntityDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddEntityDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddEntityDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReplaceEntityDbo. */
        interface IReplaceEntityDbo {

            /** ReplaceEntityDbo targetEntityId */
            targetEntityId?: (string|null);

            /** ReplaceEntityDbo replacementEntityId */
            replacementEntityId?: (string|null);
        }

        /** Represents a ReplaceEntityDbo. */
        class ReplaceEntityDbo implements IReplaceEntityDbo {

            /**
             * Constructs a new ReplaceEntityDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: v4.EffectDbo.IReplaceEntityDbo);

            /** ReplaceEntityDbo targetEntityId. */
            public targetEntityId: string;

            /** ReplaceEntityDbo replacementEntityId. */
            public replacementEntityId: string;

            /**
             * Creates a new ReplaceEntityDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReplaceEntityDbo instance
             */
            public static create(properties?: v4.EffectDbo.IReplaceEntityDbo): v4.EffectDbo.ReplaceEntityDbo;

            /**
             * Encodes the specified ReplaceEntityDbo message. Does not implicitly {@link v4.EffectDbo.ReplaceEntityDbo.verify|verify} messages.
             * @param message ReplaceEntityDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v4.EffectDbo.ReplaceEntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReplaceEntityDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.ReplaceEntityDbo.verify|verify} messages.
             * @param message ReplaceEntityDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v4.EffectDbo.ReplaceEntityDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReplaceEntityDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReplaceEntityDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v4.EffectDbo.ReplaceEntityDbo;

            /**
             * Decodes a ReplaceEntityDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReplaceEntityDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v4.EffectDbo.ReplaceEntityDbo;

            /**
             * Verifies a ReplaceEntityDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReplaceEntityDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReplaceEntityDbo
             */
            public static fromObject(object: { [k: string]: any }): v4.EffectDbo.ReplaceEntityDbo;

            /**
             * Creates a plain object from a ReplaceEntityDbo message. Also converts values to other types if specified.
             * @param message ReplaceEntityDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v4.EffectDbo.ReplaceEntityDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReplaceEntityDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReplaceEntityDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Properties of a FormulaDbo. */
export interface IFormulaDbo {

    /** FormulaDbo operation */
    operation?: (FormulaDbo.OperationDbo|null);
}

/** Represents a FormulaDbo. */
export class FormulaDbo implements IFormulaDbo {

    /**
     * Constructs a new FormulaDbo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFormulaDbo);

    /** FormulaDbo operation. */
    public operation?: (FormulaDbo.OperationDbo|null);

    /**
     * Creates a new FormulaDbo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FormulaDbo instance
     */
    public static create(properties?: IFormulaDbo): FormulaDbo;

    /**
     * Encodes the specified FormulaDbo message. Does not implicitly {@link FormulaDbo.verify|verify} messages.
     * @param message FormulaDbo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: FormulaDbo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FormulaDbo message, length delimited. Does not implicitly {@link FormulaDbo.verify|verify} messages.
     * @param message FormulaDbo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: FormulaDbo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FormulaDbo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FormulaDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo;

    /**
     * Decodes a FormulaDbo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FormulaDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo;

    /**
     * Verifies a FormulaDbo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FormulaDbo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FormulaDbo
     */
    public static fromObject(object: { [k: string]: any }): FormulaDbo;

    /**
     * Creates a plain object from a FormulaDbo message. Also converts values to other types if specified.
     * @param message FormulaDbo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FormulaDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FormulaDbo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FormulaDbo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace FormulaDbo {

    /** Properties of an OperationDbo. */
    interface IOperationDbo {

        /** OperationDbo integerValue */
        integerValue?: (number|null);

        /** OperationDbo decimalValue */
        decimalValue?: (number|null);

        /** OperationDbo booleanValue */
        booleanValue?: (boolean|null);

        /** OperationDbo stringValue */
        stringValue?: (string|null);

        /** OperationDbo variableValue */
        variableValue?: (FormulaDbo.OperationDbo.VariableValueDbo|null);

        /** OperationDbo addOperation */
        addOperation?: (FormulaDbo.OperationDbo.AddOperationDbo|null);

        /** OperationDbo subtractOperation */
        subtractOperation?: (FormulaDbo.OperationDbo.SubtractOperationDbo|null);

        /** OperationDbo multiplyOperation */
        multiplyOperation?: (FormulaDbo.OperationDbo.MultiplyOperationDbo|null);

        /** OperationDbo divideOperation */
        divideOperation?: (FormulaDbo.OperationDbo.DivideOperationDbo|null);

        /** OperationDbo equalsOperation */
        equalsOperation?: (FormulaDbo.OperationDbo.EqualsOperationDbo|null);

        /** OperationDbo notEqualsOperation */
        notEqualsOperation?: (FormulaDbo.OperationDbo.NotEqualsOperationDbo|null);

        /** OperationDbo greaterThanOperation */
        greaterThanOperation?: (FormulaDbo.OperationDbo.GreaterThanOperationDbo|null);

        /** OperationDbo greaterThanOrEqualsOperation */
        greaterThanOrEqualsOperation?: (FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo|null);

        /** OperationDbo lessThanOperation */
        lessThanOperation?: (FormulaDbo.OperationDbo.LessThanOperationDbo|null);

        /** OperationDbo lessThanOrEqualsOperation */
        lessThanOrEqualsOperation?: (FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo|null);

        /** OperationDbo andOperation */
        andOperation?: (FormulaDbo.OperationDbo.AndOperationDbo|null);

        /** OperationDbo orOperation */
        orOperation?: (FormulaDbo.OperationDbo.OrOperationDbo|null);

        /** OperationDbo notOperation */
        notOperation?: (FormulaDbo.OperationDbo.NotOperationDbo|null);

        /** OperationDbo absFunction */
        absFunction?: (FormulaDbo.OperationDbo.AbsFunctionDbo|null);

        /** OperationDbo minFunction */
        minFunction?: (FormulaDbo.OperationDbo.MinFunctionDbo|null);

        /** OperationDbo maxFunction */
        maxFunction?: (FormulaDbo.OperationDbo.MaxFunctionDbo|null);

        /** OperationDbo floorFunction */
        floorFunction?: (FormulaDbo.OperationDbo.FloorFunctionDbo|null);

        /** OperationDbo ceilFunction */
        ceilFunction?: (FormulaDbo.OperationDbo.CeilFunctionDbo|null);

        /** OperationDbo signedFunction */
        signedFunction?: (FormulaDbo.OperationDbo.SignedFunctionDbo|null);

        /** OperationDbo concatFunction */
        concatFunction?: (FormulaDbo.OperationDbo.ConcatFunctionDbo|null);

        /** OperationDbo ifFunction */
        ifFunction?: (FormulaDbo.OperationDbo.IfFunctionDbo|null);
    }

    /** Represents an OperationDbo. */
    class OperationDbo implements IOperationDbo {

        /**
         * Constructs a new OperationDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: FormulaDbo.IOperationDbo);

        /** OperationDbo integerValue. */
        public integerValue?: (number|null);

        /** OperationDbo decimalValue. */
        public decimalValue?: (number|null);

        /** OperationDbo booleanValue. */
        public booleanValue?: (boolean|null);

        /** OperationDbo stringValue. */
        public stringValue?: (string|null);

        /** OperationDbo variableValue. */
        public variableValue?: (FormulaDbo.OperationDbo.VariableValueDbo|null);

        /** OperationDbo addOperation. */
        public addOperation?: (FormulaDbo.OperationDbo.AddOperationDbo|null);

        /** OperationDbo subtractOperation. */
        public subtractOperation?: (FormulaDbo.OperationDbo.SubtractOperationDbo|null);

        /** OperationDbo multiplyOperation. */
        public multiplyOperation?: (FormulaDbo.OperationDbo.MultiplyOperationDbo|null);

        /** OperationDbo divideOperation. */
        public divideOperation?: (FormulaDbo.OperationDbo.DivideOperationDbo|null);

        /** OperationDbo equalsOperation. */
        public equalsOperation?: (FormulaDbo.OperationDbo.EqualsOperationDbo|null);

        /** OperationDbo notEqualsOperation. */
        public notEqualsOperation?: (FormulaDbo.OperationDbo.NotEqualsOperationDbo|null);

        /** OperationDbo greaterThanOperation. */
        public greaterThanOperation?: (FormulaDbo.OperationDbo.GreaterThanOperationDbo|null);

        /** OperationDbo greaterThanOrEqualsOperation. */
        public greaterThanOrEqualsOperation?: (FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo|null);

        /** OperationDbo lessThanOperation. */
        public lessThanOperation?: (FormulaDbo.OperationDbo.LessThanOperationDbo|null);

        /** OperationDbo lessThanOrEqualsOperation. */
        public lessThanOrEqualsOperation?: (FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo|null);

        /** OperationDbo andOperation. */
        public andOperation?: (FormulaDbo.OperationDbo.AndOperationDbo|null);

        /** OperationDbo orOperation. */
        public orOperation?: (FormulaDbo.OperationDbo.OrOperationDbo|null);

        /** OperationDbo notOperation. */
        public notOperation?: (FormulaDbo.OperationDbo.NotOperationDbo|null);

        /** OperationDbo absFunction. */
        public absFunction?: (FormulaDbo.OperationDbo.AbsFunctionDbo|null);

        /** OperationDbo minFunction. */
        public minFunction?: (FormulaDbo.OperationDbo.MinFunctionDbo|null);

        /** OperationDbo maxFunction. */
        public maxFunction?: (FormulaDbo.OperationDbo.MaxFunctionDbo|null);

        /** OperationDbo floorFunction. */
        public floorFunction?: (FormulaDbo.OperationDbo.FloorFunctionDbo|null);

        /** OperationDbo ceilFunction. */
        public ceilFunction?: (FormulaDbo.OperationDbo.CeilFunctionDbo|null);

        /** OperationDbo signedFunction. */
        public signedFunction?: (FormulaDbo.OperationDbo.SignedFunctionDbo|null);

        /** OperationDbo concatFunction. */
        public concatFunction?: (FormulaDbo.OperationDbo.ConcatFunctionDbo|null);

        /** OperationDbo ifFunction. */
        public ifFunction?: (FormulaDbo.OperationDbo.IfFunctionDbo|null);

        /** OperationDbo op. */
        public op?: ("integerValue"|"decimalValue"|"booleanValue"|"stringValue"|"variableValue"|"addOperation"|"subtractOperation"|"multiplyOperation"|"divideOperation"|"equalsOperation"|"notEqualsOperation"|"greaterThanOperation"|"greaterThanOrEqualsOperation"|"lessThanOperation"|"lessThanOrEqualsOperation"|"andOperation"|"orOperation"|"notOperation"|"absFunction"|"minFunction"|"maxFunction"|"floorFunction"|"ceilFunction"|"signedFunction"|"concatFunction"|"ifFunction");

        /**
         * Creates a new OperationDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperationDbo instance
         */
        public static create(properties?: FormulaDbo.IOperationDbo): FormulaDbo.OperationDbo;

        /**
         * Encodes the specified OperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.verify|verify} messages.
         * @param message OperationDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FormulaDbo.OperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.verify|verify} messages.
         * @param message OperationDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FormulaDbo.OperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperationDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo;

        /**
         * Decodes an OperationDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo;

        /**
         * Verifies an OperationDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperationDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperationDbo
         */
        public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo;

        /**
         * Creates a plain object from an OperationDbo message. Also converts values to other types if specified.
         * @param message OperationDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FormulaDbo.OperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperationDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OperationDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace OperationDbo {

        /** Properties of a VariableValueDbo. */
        interface IVariableValueDbo {

            /** VariableValueDbo variableId */
            variableId?: (string|null);
        }

        /** Represents a VariableValueDbo. */
        class VariableValueDbo implements IVariableValueDbo {

            /**
             * Constructs a new VariableValueDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IVariableValueDbo);

            /** VariableValueDbo variableId. */
            public variableId: string;

            /**
             * Creates a new VariableValueDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VariableValueDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IVariableValueDbo): FormulaDbo.OperationDbo.VariableValueDbo;

            /**
             * Encodes the specified VariableValueDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.VariableValueDbo.verify|verify} messages.
             * @param message VariableValueDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.VariableValueDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VariableValueDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.VariableValueDbo.verify|verify} messages.
             * @param message VariableValueDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.VariableValueDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VariableValueDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VariableValueDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.VariableValueDbo;

            /**
             * Decodes a VariableValueDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VariableValueDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.VariableValueDbo;

            /**
             * Verifies a VariableValueDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VariableValueDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VariableValueDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.VariableValueDbo;

            /**
             * Creates a plain object from a VariableValueDbo message. Also converts values to other types if specified.
             * @param message VariableValueDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.VariableValueDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VariableValueDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VariableValueDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddOperationDbo. */
        interface IAddOperationDbo {

            /** AddOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** AddOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents an AddOperationDbo. */
        class AddOperationDbo implements IAddOperationDbo {

            /**
             * Constructs a new AddOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IAddOperationDbo);

            /** AddOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** AddOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new AddOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IAddOperationDbo): FormulaDbo.OperationDbo.AddOperationDbo;

            /**
             * Encodes the specified AddOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.AddOperationDbo.verify|verify} messages.
             * @param message AddOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.AddOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.AddOperationDbo.verify|verify} messages.
             * @param message AddOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.AddOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.AddOperationDbo;

            /**
             * Decodes an AddOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.AddOperationDbo;

            /**
             * Verifies an AddOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.AddOperationDbo;

            /**
             * Creates a plain object from an AddOperationDbo message. Also converts values to other types if specified.
             * @param message AddOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.AddOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SubtractOperationDbo. */
        interface ISubtractOperationDbo {

            /** SubtractOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** SubtractOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a SubtractOperationDbo. */
        class SubtractOperationDbo implements ISubtractOperationDbo {

            /**
             * Constructs a new SubtractOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.ISubtractOperationDbo);

            /** SubtractOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** SubtractOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new SubtractOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubtractOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.ISubtractOperationDbo): FormulaDbo.OperationDbo.SubtractOperationDbo;

            /**
             * Encodes the specified SubtractOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.SubtractOperationDbo.verify|verify} messages.
             * @param message SubtractOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.SubtractOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubtractOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.SubtractOperationDbo.verify|verify} messages.
             * @param message SubtractOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.SubtractOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubtractOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubtractOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.SubtractOperationDbo;

            /**
             * Decodes a SubtractOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubtractOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.SubtractOperationDbo;

            /**
             * Verifies a SubtractOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubtractOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubtractOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.SubtractOperationDbo;

            /**
             * Creates a plain object from a SubtractOperationDbo message. Also converts values to other types if specified.
             * @param message SubtractOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.SubtractOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubtractOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SubtractOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MultiplyOperationDbo. */
        interface IMultiplyOperationDbo {

            /** MultiplyOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** MultiplyOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a MultiplyOperationDbo. */
        class MultiplyOperationDbo implements IMultiplyOperationDbo {

            /**
             * Constructs a new MultiplyOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IMultiplyOperationDbo);

            /** MultiplyOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** MultiplyOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new MultiplyOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MultiplyOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IMultiplyOperationDbo): FormulaDbo.OperationDbo.MultiplyOperationDbo;

            /**
             * Encodes the specified MultiplyOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.MultiplyOperationDbo.verify|verify} messages.
             * @param message MultiplyOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.MultiplyOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MultiplyOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.MultiplyOperationDbo.verify|verify} messages.
             * @param message MultiplyOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.MultiplyOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MultiplyOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MultiplyOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.MultiplyOperationDbo;

            /**
             * Decodes a MultiplyOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MultiplyOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.MultiplyOperationDbo;

            /**
             * Verifies a MultiplyOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MultiplyOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MultiplyOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.MultiplyOperationDbo;

            /**
             * Creates a plain object from a MultiplyOperationDbo message. Also converts values to other types if specified.
             * @param message MultiplyOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.MultiplyOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MultiplyOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MultiplyOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DivideOperationDbo. */
        interface IDivideOperationDbo {

            /** DivideOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** DivideOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a DivideOperationDbo. */
        class DivideOperationDbo implements IDivideOperationDbo {

            /**
             * Constructs a new DivideOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IDivideOperationDbo);

            /** DivideOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** DivideOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new DivideOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DivideOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IDivideOperationDbo): FormulaDbo.OperationDbo.DivideOperationDbo;

            /**
             * Encodes the specified DivideOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.DivideOperationDbo.verify|verify} messages.
             * @param message DivideOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.DivideOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DivideOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.DivideOperationDbo.verify|verify} messages.
             * @param message DivideOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.DivideOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DivideOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DivideOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.DivideOperationDbo;

            /**
             * Decodes a DivideOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DivideOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.DivideOperationDbo;

            /**
             * Verifies a DivideOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DivideOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DivideOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.DivideOperationDbo;

            /**
             * Creates a plain object from a DivideOperationDbo message. Also converts values to other types if specified.
             * @param message DivideOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.DivideOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DivideOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DivideOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EqualsOperationDbo. */
        interface IEqualsOperationDbo {

            /** EqualsOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** EqualsOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents an EqualsOperationDbo. */
        class EqualsOperationDbo implements IEqualsOperationDbo {

            /**
             * Constructs a new EqualsOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IEqualsOperationDbo);

            /** EqualsOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** EqualsOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new EqualsOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EqualsOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IEqualsOperationDbo): FormulaDbo.OperationDbo.EqualsOperationDbo;

            /**
             * Encodes the specified EqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.EqualsOperationDbo.verify|verify} messages.
             * @param message EqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.EqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.EqualsOperationDbo.verify|verify} messages.
             * @param message EqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.EqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EqualsOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.EqualsOperationDbo;

            /**
             * Decodes an EqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.EqualsOperationDbo;

            /**
             * Verifies an EqualsOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EqualsOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.EqualsOperationDbo;

            /**
             * Creates a plain object from an EqualsOperationDbo message. Also converts values to other types if specified.
             * @param message EqualsOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.EqualsOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EqualsOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EqualsOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NotEqualsOperationDbo. */
        interface INotEqualsOperationDbo {

            /** NotEqualsOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** NotEqualsOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a NotEqualsOperationDbo. */
        class NotEqualsOperationDbo implements INotEqualsOperationDbo {

            /**
             * Constructs a new NotEqualsOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.INotEqualsOperationDbo);

            /** NotEqualsOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** NotEqualsOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new NotEqualsOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotEqualsOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.INotEqualsOperationDbo): FormulaDbo.OperationDbo.NotEqualsOperationDbo;

            /**
             * Encodes the specified NotEqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.NotEqualsOperationDbo.verify|verify} messages.
             * @param message NotEqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.NotEqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotEqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.NotEqualsOperationDbo.verify|verify} messages.
             * @param message NotEqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.NotEqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotEqualsOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.NotEqualsOperationDbo;

            /**
             * Decodes a NotEqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.NotEqualsOperationDbo;

            /**
             * Verifies a NotEqualsOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotEqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotEqualsOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.NotEqualsOperationDbo;

            /**
             * Creates a plain object from a NotEqualsOperationDbo message. Also converts values to other types if specified.
             * @param message NotEqualsOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.NotEqualsOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotEqualsOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NotEqualsOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GreaterThanOperationDbo. */
        interface IGreaterThanOperationDbo {

            /** GreaterThanOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** GreaterThanOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a GreaterThanOperationDbo. */
        class GreaterThanOperationDbo implements IGreaterThanOperationDbo {

            /**
             * Constructs a new GreaterThanOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IGreaterThanOperationDbo);

            /** GreaterThanOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** GreaterThanOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new GreaterThanOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GreaterThanOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IGreaterThanOperationDbo): FormulaDbo.OperationDbo.GreaterThanOperationDbo;

            /**
             * Encodes the specified GreaterThanOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOperationDbo.verify|verify} messages.
             * @param message GreaterThanOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.GreaterThanOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GreaterThanOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOperationDbo.verify|verify} messages.
             * @param message GreaterThanOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.GreaterThanOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GreaterThanOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GreaterThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.GreaterThanOperationDbo;

            /**
             * Decodes a GreaterThanOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GreaterThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.GreaterThanOperationDbo;

            /**
             * Verifies a GreaterThanOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GreaterThanOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GreaterThanOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.GreaterThanOperationDbo;

            /**
             * Creates a plain object from a GreaterThanOperationDbo message. Also converts values to other types if specified.
             * @param message GreaterThanOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.GreaterThanOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GreaterThanOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GreaterThanOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GreaterThanOrEqualsOperationDbo. */
        interface IGreaterThanOrEqualsOperationDbo {

            /** GreaterThanOrEqualsOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** GreaterThanOrEqualsOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a GreaterThanOrEqualsOperationDbo. */
        class GreaterThanOrEqualsOperationDbo implements IGreaterThanOrEqualsOperationDbo {

            /**
             * Constructs a new GreaterThanOrEqualsOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IGreaterThanOrEqualsOperationDbo);

            /** GreaterThanOrEqualsOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** GreaterThanOrEqualsOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new GreaterThanOrEqualsOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GreaterThanOrEqualsOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IGreaterThanOrEqualsOperationDbo): FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo;

            /**
             * Encodes the specified GreaterThanOrEqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.verify|verify} messages.
             * @param message GreaterThanOrEqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GreaterThanOrEqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.verify|verify} messages.
             * @param message GreaterThanOrEqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GreaterThanOrEqualsOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GreaterThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo;

            /**
             * Decodes a GreaterThanOrEqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GreaterThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo;

            /**
             * Verifies a GreaterThanOrEqualsOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GreaterThanOrEqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GreaterThanOrEqualsOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo;

            /**
             * Creates a plain object from a GreaterThanOrEqualsOperationDbo message. Also converts values to other types if specified.
             * @param message GreaterThanOrEqualsOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GreaterThanOrEqualsOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GreaterThanOrEqualsOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LessThanOperationDbo. */
        interface ILessThanOperationDbo {

            /** LessThanOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** LessThanOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a LessThanOperationDbo. */
        class LessThanOperationDbo implements ILessThanOperationDbo {

            /**
             * Constructs a new LessThanOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.ILessThanOperationDbo);

            /** LessThanOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** LessThanOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new LessThanOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LessThanOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.ILessThanOperationDbo): FormulaDbo.OperationDbo.LessThanOperationDbo;

            /**
             * Encodes the specified LessThanOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOperationDbo.verify|verify} messages.
             * @param message LessThanOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.LessThanOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LessThanOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOperationDbo.verify|verify} messages.
             * @param message LessThanOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.LessThanOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LessThanOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LessThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.LessThanOperationDbo;

            /**
             * Decodes a LessThanOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LessThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.LessThanOperationDbo;

            /**
             * Verifies a LessThanOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LessThanOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LessThanOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.LessThanOperationDbo;

            /**
             * Creates a plain object from a LessThanOperationDbo message. Also converts values to other types if specified.
             * @param message LessThanOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.LessThanOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LessThanOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LessThanOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LessThanOrEqualsOperationDbo. */
        interface ILessThanOrEqualsOperationDbo {

            /** LessThanOrEqualsOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** LessThanOrEqualsOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a LessThanOrEqualsOperationDbo. */
        class LessThanOrEqualsOperationDbo implements ILessThanOrEqualsOperationDbo {

            /**
             * Constructs a new LessThanOrEqualsOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.ILessThanOrEqualsOperationDbo);

            /** LessThanOrEqualsOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** LessThanOrEqualsOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new LessThanOrEqualsOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LessThanOrEqualsOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.ILessThanOrEqualsOperationDbo): FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo;

            /**
             * Encodes the specified LessThanOrEqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.verify|verify} messages.
             * @param message LessThanOrEqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LessThanOrEqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.verify|verify} messages.
             * @param message LessThanOrEqualsOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LessThanOrEqualsOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LessThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo;

            /**
             * Decodes a LessThanOrEqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LessThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo;

            /**
             * Verifies a LessThanOrEqualsOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LessThanOrEqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LessThanOrEqualsOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo;

            /**
             * Creates a plain object from a LessThanOrEqualsOperationDbo message. Also converts values to other types if specified.
             * @param message LessThanOrEqualsOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LessThanOrEqualsOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LessThanOrEqualsOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AndOperationDbo. */
        interface IAndOperationDbo {

            /** AndOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** AndOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents an AndOperationDbo. */
        class AndOperationDbo implements IAndOperationDbo {

            /**
             * Constructs a new AndOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IAndOperationDbo);

            /** AndOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** AndOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new AndOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AndOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IAndOperationDbo): FormulaDbo.OperationDbo.AndOperationDbo;

            /**
             * Encodes the specified AndOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.AndOperationDbo.verify|verify} messages.
             * @param message AndOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.AndOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AndOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.AndOperationDbo.verify|verify} messages.
             * @param message AndOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.AndOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AndOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AndOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.AndOperationDbo;

            /**
             * Decodes an AndOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AndOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.AndOperationDbo;

            /**
             * Verifies an AndOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AndOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AndOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.AndOperationDbo;

            /**
             * Creates a plain object from an AndOperationDbo message. Also converts values to other types if specified.
             * @param message AndOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.AndOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AndOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AndOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OrOperationDbo. */
        interface IOrOperationDbo {

            /** OrOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);

            /** OrOperationDbo b */
            b?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents an OrOperationDbo. */
        class OrOperationDbo implements IOrOperationDbo {

            /**
             * Constructs a new OrOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IOrOperationDbo);

            /** OrOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /** OrOperationDbo b. */
            public b?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new OrOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IOrOperationDbo): FormulaDbo.OperationDbo.OrOperationDbo;

            /**
             * Encodes the specified OrOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.OrOperationDbo.verify|verify} messages.
             * @param message OrOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.OrOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.OrOperationDbo.verify|verify} messages.
             * @param message OrOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.OrOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.OrOperationDbo;

            /**
             * Decodes an OrOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.OrOperationDbo;

            /**
             * Verifies an OrOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.OrOperationDbo;

            /**
             * Creates a plain object from an OrOperationDbo message. Also converts values to other types if specified.
             * @param message OrOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.OrOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NotOperationDbo. */
        interface INotOperationDbo {

            /** NotOperationDbo a */
            a?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a NotOperationDbo. */
        class NotOperationDbo implements INotOperationDbo {

            /**
             * Constructs a new NotOperationDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.INotOperationDbo);

            /** NotOperationDbo a. */
            public a?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new NotOperationDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotOperationDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.INotOperationDbo): FormulaDbo.OperationDbo.NotOperationDbo;

            /**
             * Encodes the specified NotOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.NotOperationDbo.verify|verify} messages.
             * @param message NotOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.NotOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.NotOperationDbo.verify|verify} messages.
             * @param message NotOperationDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.NotOperationDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotOperationDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.NotOperationDbo;

            /**
             * Decodes a NotOperationDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.NotOperationDbo;

            /**
             * Verifies a NotOperationDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotOperationDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.NotOperationDbo;

            /**
             * Creates a plain object from a NotOperationDbo message. Also converts values to other types if specified.
             * @param message NotOperationDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.NotOperationDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotOperationDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NotOperationDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AbsFunctionDbo. */
        interface IAbsFunctionDbo {

            /** AbsFunctionDbo param */
            param?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents an AbsFunctionDbo. */
        class AbsFunctionDbo implements IAbsFunctionDbo {

            /**
             * Constructs a new AbsFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IAbsFunctionDbo);

            /** AbsFunctionDbo param. */
            public param?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new AbsFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AbsFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IAbsFunctionDbo): FormulaDbo.OperationDbo.AbsFunctionDbo;

            /**
             * Encodes the specified AbsFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.AbsFunctionDbo.verify|verify} messages.
             * @param message AbsFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.AbsFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AbsFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.AbsFunctionDbo.verify|verify} messages.
             * @param message AbsFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.AbsFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AbsFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AbsFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.AbsFunctionDbo;

            /**
             * Decodes an AbsFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AbsFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.AbsFunctionDbo;

            /**
             * Verifies an AbsFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AbsFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AbsFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.AbsFunctionDbo;

            /**
             * Creates a plain object from an AbsFunctionDbo message. Also converts values to other types if specified.
             * @param message AbsFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.AbsFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AbsFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AbsFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MinFunctionDbo. */
        interface IMinFunctionDbo {

            /** MinFunctionDbo param */
            param?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a MinFunctionDbo. */
        class MinFunctionDbo implements IMinFunctionDbo {

            /**
             * Constructs a new MinFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IMinFunctionDbo);

            /** MinFunctionDbo param. */
            public param?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new MinFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MinFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IMinFunctionDbo): FormulaDbo.OperationDbo.MinFunctionDbo;

            /**
             * Encodes the specified MinFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.MinFunctionDbo.verify|verify} messages.
             * @param message MinFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.MinFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MinFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.MinFunctionDbo.verify|verify} messages.
             * @param message MinFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.MinFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MinFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MinFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.MinFunctionDbo;

            /**
             * Decodes a MinFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MinFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.MinFunctionDbo;

            /**
             * Verifies a MinFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MinFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MinFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.MinFunctionDbo;

            /**
             * Creates a plain object from a MinFunctionDbo message. Also converts values to other types if specified.
             * @param message MinFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.MinFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MinFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MinFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MaxFunctionDbo. */
        interface IMaxFunctionDbo {

            /** MaxFunctionDbo param */
            param?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a MaxFunctionDbo. */
        class MaxFunctionDbo implements IMaxFunctionDbo {

            /**
             * Constructs a new MaxFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IMaxFunctionDbo);

            /** MaxFunctionDbo param. */
            public param?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new MaxFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MaxFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IMaxFunctionDbo): FormulaDbo.OperationDbo.MaxFunctionDbo;

            /**
             * Encodes the specified MaxFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.MaxFunctionDbo.verify|verify} messages.
             * @param message MaxFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.MaxFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MaxFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.MaxFunctionDbo.verify|verify} messages.
             * @param message MaxFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.MaxFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MaxFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MaxFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.MaxFunctionDbo;

            /**
             * Decodes a MaxFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MaxFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.MaxFunctionDbo;

            /**
             * Verifies a MaxFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MaxFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MaxFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.MaxFunctionDbo;

            /**
             * Creates a plain object from a MaxFunctionDbo message. Also converts values to other types if specified.
             * @param message MaxFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.MaxFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MaxFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MaxFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloorFunctionDbo. */
        interface IFloorFunctionDbo {

            /** FloorFunctionDbo param */
            param?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a FloorFunctionDbo. */
        class FloorFunctionDbo implements IFloorFunctionDbo {

            /**
             * Constructs a new FloorFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IFloorFunctionDbo);

            /** FloorFunctionDbo param. */
            public param?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new FloorFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloorFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IFloorFunctionDbo): FormulaDbo.OperationDbo.FloorFunctionDbo;

            /**
             * Encodes the specified FloorFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.FloorFunctionDbo.verify|verify} messages.
             * @param message FloorFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.FloorFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloorFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.FloorFunctionDbo.verify|verify} messages.
             * @param message FloorFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.FloorFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloorFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloorFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.FloorFunctionDbo;

            /**
             * Decodes a FloorFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloorFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.FloorFunctionDbo;

            /**
             * Verifies a FloorFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloorFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloorFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.FloorFunctionDbo;

            /**
             * Creates a plain object from a FloorFunctionDbo message. Also converts values to other types if specified.
             * @param message FloorFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.FloorFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloorFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloorFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CeilFunctionDbo. */
        interface ICeilFunctionDbo {

            /** CeilFunctionDbo param */
            param?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a CeilFunctionDbo. */
        class CeilFunctionDbo implements ICeilFunctionDbo {

            /**
             * Constructs a new CeilFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.ICeilFunctionDbo);

            /** CeilFunctionDbo param. */
            public param?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new CeilFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CeilFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.ICeilFunctionDbo): FormulaDbo.OperationDbo.CeilFunctionDbo;

            /**
             * Encodes the specified CeilFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.CeilFunctionDbo.verify|verify} messages.
             * @param message CeilFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.CeilFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CeilFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.CeilFunctionDbo.verify|verify} messages.
             * @param message CeilFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.CeilFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CeilFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CeilFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.CeilFunctionDbo;

            /**
             * Decodes a CeilFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CeilFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.CeilFunctionDbo;

            /**
             * Verifies a CeilFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CeilFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CeilFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.CeilFunctionDbo;

            /**
             * Creates a plain object from a CeilFunctionDbo message. Also converts values to other types if specified.
             * @param message CeilFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.CeilFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CeilFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CeilFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SignedFunctionDbo. */
        interface ISignedFunctionDbo {

            /** SignedFunctionDbo param */
            param?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents a SignedFunctionDbo. */
        class SignedFunctionDbo implements ISignedFunctionDbo {

            /**
             * Constructs a new SignedFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.ISignedFunctionDbo);

            /** SignedFunctionDbo param. */
            public param?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new SignedFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.ISignedFunctionDbo): FormulaDbo.OperationDbo.SignedFunctionDbo;

            /**
             * Encodes the specified SignedFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.SignedFunctionDbo.verify|verify} messages.
             * @param message SignedFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.SignedFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignedFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.SignedFunctionDbo.verify|verify} messages.
             * @param message SignedFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.SignedFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignedFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.SignedFunctionDbo;

            /**
             * Decodes a SignedFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignedFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.SignedFunctionDbo;

            /**
             * Verifies a SignedFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignedFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignedFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.SignedFunctionDbo;

            /**
             * Creates a plain object from a SignedFunctionDbo message. Also converts values to other types if specified.
             * @param message SignedFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.SignedFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignedFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SignedFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ConcatFunctionDbo. */
        interface IConcatFunctionDbo {

            /** ConcatFunctionDbo params */
            params?: (FormulaDbo.OperationDbo[]|null);
        }

        /** Represents a ConcatFunctionDbo. */
        class ConcatFunctionDbo implements IConcatFunctionDbo {

            /**
             * Constructs a new ConcatFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IConcatFunctionDbo);

            /** ConcatFunctionDbo params. */
            public params: FormulaDbo.OperationDbo[];

            /**
             * Creates a new ConcatFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConcatFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IConcatFunctionDbo): FormulaDbo.OperationDbo.ConcatFunctionDbo;

            /**
             * Encodes the specified ConcatFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.ConcatFunctionDbo.verify|verify} messages.
             * @param message ConcatFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.ConcatFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConcatFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.ConcatFunctionDbo.verify|verify} messages.
             * @param message ConcatFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.ConcatFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConcatFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConcatFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.ConcatFunctionDbo;

            /**
             * Decodes a ConcatFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConcatFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.ConcatFunctionDbo;

            /**
             * Verifies a ConcatFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConcatFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConcatFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.ConcatFunctionDbo;

            /**
             * Creates a plain object from a ConcatFunctionDbo message. Also converts values to other types if specified.
             * @param message ConcatFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.ConcatFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConcatFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConcatFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IfFunctionDbo. */
        interface IIfFunctionDbo {

            /** IfFunctionDbo condition */
            condition?: (FormulaDbo.OperationDbo|null);

            /** IfFunctionDbo whenTrue */
            whenTrue?: (FormulaDbo.OperationDbo|null);

            /** IfFunctionDbo whenFalse */
            whenFalse?: (FormulaDbo.OperationDbo|null);
        }

        /** Represents an IfFunctionDbo. */
        class IfFunctionDbo implements IIfFunctionDbo {

            /**
             * Constructs a new IfFunctionDbo.
             * @param [properties] Properties to set
             */
            constructor(properties?: FormulaDbo.OperationDbo.IIfFunctionDbo);

            /** IfFunctionDbo condition. */
            public condition?: (FormulaDbo.OperationDbo|null);

            /** IfFunctionDbo whenTrue. */
            public whenTrue?: (FormulaDbo.OperationDbo|null);

            /** IfFunctionDbo whenFalse. */
            public whenFalse?: (FormulaDbo.OperationDbo|null);

            /**
             * Creates a new IfFunctionDbo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IfFunctionDbo instance
             */
            public static create(properties?: FormulaDbo.OperationDbo.IIfFunctionDbo): FormulaDbo.OperationDbo.IfFunctionDbo;

            /**
             * Encodes the specified IfFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.IfFunctionDbo.verify|verify} messages.
             * @param message IfFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: FormulaDbo.OperationDbo.IfFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IfFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.IfFunctionDbo.verify|verify} messages.
             * @param message IfFunctionDbo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: FormulaDbo.OperationDbo.IfFunctionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IfFunctionDbo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IfFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FormulaDbo.OperationDbo.IfFunctionDbo;

            /**
             * Decodes an IfFunctionDbo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IfFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FormulaDbo.OperationDbo.IfFunctionDbo;

            /**
             * Verifies an IfFunctionDbo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IfFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IfFunctionDbo
             */
            public static fromObject(object: { [k: string]: any }): FormulaDbo.OperationDbo.IfFunctionDbo;

            /**
             * Creates a plain object from an IfFunctionDbo message. Also converts values to other types if specified.
             * @param message IfFunctionDbo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: FormulaDbo.OperationDbo.IfFunctionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IfFunctionDbo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IfFunctionDbo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** AbilityScoreDbo enum. */
export enum AbilityScoreDbo {
    ABILITY_SCORE_UNKNOWN = 0,
    ABILITY_SCORE_STR = 1,
    ABILITY_SCORE_DEX = 2,
    ABILITY_SCORE_CON = 3,
    ABILITY_SCORE_INT = 4,
    ABILITY_SCORE_WIS = 5,
    ABILITY_SCORE_CHA = 6
}

/** ActionTypeDbo enum. */
export enum ActionTypeDbo {
    ACTION_TYPE_UNKNOWN = 0,
    ACTION_TYPE_IMMEDIATE = 1,
    ACTION_TYPE_FREE = 2,
    ACTION_TYPE_SWIFT = 3,
    ACTION_TYPE_MOVE = 4,
    ACTION_TYPE_STANDARD = 5,
    ACTION_TYPE_FULL_ROUND = 6
}

/** Represents a RangeDbo. */
export class RangeDbo implements IRangeDbo {

    /**
     * Constructs a new RangeDbo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRangeDbo);

    /** RangeDbo category. */
    public category?: (RangeDbo.Category|null);

    /** RangeDbo feet. */
    public feet?: (number|null);

    /** RangeDbo Distance. */
    public Distance?: ("category"|"feet");

    /**
     * Creates a new RangeDbo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RangeDbo instance
     */
    public static create(properties?: IRangeDbo): RangeDbo;

    /**
     * Encodes the specified RangeDbo message. Does not implicitly {@link RangeDbo.verify|verify} messages.
     * @param message RangeDbo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RangeDbo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RangeDbo message, length delimited. Does not implicitly {@link RangeDbo.verify|verify} messages.
     * @param message RangeDbo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RangeDbo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RangeDbo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RangeDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RangeDbo;

    /**
     * Decodes a RangeDbo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RangeDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RangeDbo;

    /**
     * Verifies a RangeDbo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RangeDbo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RangeDbo
     */
    public static fromObject(object: { [k: string]: any }): RangeDbo;

    /**
     * Creates a plain object from a RangeDbo message. Also converts values to other types if specified.
     * @param message RangeDbo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RangeDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RangeDbo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RangeDbo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace RangeDbo {

    /** Category enum. */
    enum Category {
        PERSONAL = 0,
        TOUCH = 1,
        CLOSE = 2,
        MEDIUM = 3,
        LONG = 4,
        UNLIMITED = 5
    }
}

/** Represents a Die. */
export class Die implements IDie {

    /**
     * Constructs a new Die.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDie);

    /** Die count. */
    public count: number;

    /** Die sides. */
    public sides: number;

    /**
     * Creates a new Die instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Die instance
     */
    public static create(properties?: IDie): Die;

    /**
     * Encodes the specified Die message. Does not implicitly {@link Die.verify|verify} messages.
     * @param message Die message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Die, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Die message, length delimited. Does not implicitly {@link Die.verify|verify} messages.
     * @param message Die message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Die, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Die message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Die
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Die;

    /**
     * Decodes a Die message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Die
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Die;

    /**
     * Verifies a Die message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Die message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Die
     */
    public static fromObject(object: { [k: string]: any }): Die;

    /**
     * Creates a plain object from a Die message. Also converts values to other types if specified.
     * @param message Die
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Die, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Die to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Die
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
