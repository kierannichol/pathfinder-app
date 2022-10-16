import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a RaceDatabase. */
export interface IRaceDatabase {

    /** RaceDatabase Races */
    Races?: (RaceData[]|null);
}

/** Represents a RaceDatabase. */
export class RaceDatabase implements IRaceDatabase {

    /**
     * Constructs a new RaceDatabase.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRaceDatabase);

    /** RaceDatabase Races. */
    public Races: RaceData[];

    /**
     * Creates a new RaceDatabase instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RaceDatabase instance
     */
    public static create(properties?: IRaceDatabase): RaceDatabase;

    /**
     * Encodes the specified RaceDatabase message. Does not implicitly {@link RaceDatabase.verify|verify} messages.
     * @param message RaceDatabase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RaceDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RaceDatabase message, length delimited. Does not implicitly {@link RaceDatabase.verify|verify} messages.
     * @param message RaceDatabase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RaceDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RaceDatabase message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RaceDatabase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RaceDatabase;

    /**
     * Decodes a RaceDatabase message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RaceDatabase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RaceDatabase;

    /**
     * Verifies a RaceDatabase message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RaceDatabase message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RaceDatabase
     */
    public static fromObject(object: { [k: string]: any }): RaceDatabase;

    /**
     * Creates a plain object from a RaceDatabase message. Also converts values to other types if specified.
     * @param message RaceDatabase
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RaceDatabase, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RaceDatabase to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RaceDatabase
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RaceData. */
export interface IRaceData {

    /** RaceData id */
    id?: (number|Long|null);

    /** RaceData name */
    name?: (string|null);
}

/** Represents a RaceData. */
export class RaceData implements IRaceData {

    /**
     * Constructs a new RaceData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRaceData);

    /** RaceData id. */
    public id: (number|Long);

    /** RaceData name. */
    public name: string;

    /**
     * Creates a new RaceData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RaceData instance
     */
    public static create(properties?: IRaceData): RaceData;

    /**
     * Encodes the specified RaceData message. Does not implicitly {@link RaceData.verify|verify} messages.
     * @param message RaceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: RaceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RaceData message, length delimited. Does not implicitly {@link RaceData.verify|verify} messages.
     * @param message RaceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: RaceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RaceData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RaceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RaceData;

    /**
     * Decodes a RaceData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RaceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RaceData;

    /**
     * Verifies a RaceData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RaceData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RaceData
     */
    public static fromObject(object: { [k: string]: any }): RaceData;

    /**
     * Creates a plain object from a RaceData message. Also converts values to other types if specified.
     * @param message RaceData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RaceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RaceData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RaceData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ClassDatabase. */
export interface IClassDatabase {

    /** ClassDatabase classes */
    classes?: (ClassData[]|null);
}

/** Represents a ClassDatabase. */
export class ClassDatabase implements IClassDatabase {

    /**
     * Constructs a new ClassDatabase.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassDatabase);

    /** ClassDatabase classes. */
    public classes: ClassData[];

    /**
     * Creates a new ClassDatabase instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassDatabase instance
     */
    public static create(properties?: IClassDatabase): ClassDatabase;

    /**
     * Encodes the specified ClassDatabase message. Does not implicitly {@link ClassDatabase.verify|verify} messages.
     * @param message ClassDatabase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClassDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassDatabase message, length delimited. Does not implicitly {@link ClassDatabase.verify|verify} messages.
     * @param message ClassDatabase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ClassDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassDatabase message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassDatabase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassDatabase;

    /**
     * Decodes a ClassDatabase message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassDatabase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassDatabase;

    /**
     * Verifies a ClassDatabase message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassDatabase message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassDatabase
     */
    public static fromObject(object: { [k: string]: any }): ClassDatabase;

    /**
     * Creates a plain object from a ClassDatabase message. Also converts values to other types if specified.
     * @param message ClassDatabase
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassDatabase, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassDatabase to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClassDatabase
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ClassData. */
export interface IClassData {

    /** ClassData id */
    id?: (string|null);

    /** ClassData name */
    name?: (string|null);

    /** ClassData levels */
    levels?: (ClassData.Level[]|null);
}

/** Represents a ClassData. */
export class ClassData implements IClassData {

    /**
     * Constructs a new ClassData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassData);

    /** ClassData id. */
    public id: string;

    /** ClassData name. */
    public name: string;

    /** ClassData levels. */
    public levels: ClassData.Level[];

    /**
     * Creates a new ClassData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassData instance
     */
    public static create(properties?: IClassData): ClassData;

    /**
     * Encodes the specified ClassData message. Does not implicitly {@link ClassData.verify|verify} messages.
     * @param message ClassData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClassData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassData message, length delimited. Does not implicitly {@link ClassData.verify|verify} messages.
     * @param message ClassData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ClassData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassData;

    /**
     * Decodes a ClassData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassData;

    /**
     * Verifies a ClassData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassData
     */
    public static fromObject(object: { [k: string]: any }): ClassData;

    /**
     * Creates a plain object from a ClassData message. Also converts values to other types if specified.
     * @param message ClassData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClassData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ClassData {

    /** Properties of a Level. */
    interface ILevel {

        /** Level levelNumber */
        levelNumber?: (number|null);

        /** Level bab */
        bab?: (number|null);

        /** Level fortSave */
        fortSave?: (number|null);

        /** Level refSave */
        refSave?: (number|null);

        /** Level willSave */
        willSave?: (number|null);

        /** Level special */
        special?: (string[]|null);
    }

    /** Represents a Level. */
    class Level implements ILevel {

        /**
         * Constructs a new Level.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClassData.ILevel);

        /** Level levelNumber. */
        public levelNumber: number;

        /** Level bab. */
        public bab: number;

        /** Level fortSave. */
        public fortSave: number;

        /** Level refSave. */
        public refSave: number;

        /** Level willSave. */
        public willSave: number;

        /** Level special. */
        public special: string[];

        /**
         * Creates a new Level instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Level instance
         */
        public static create(properties?: ClassData.ILevel): ClassData.Level;

        /**
         * Encodes the specified Level message. Does not implicitly {@link ClassData.Level.verify|verify} messages.
         * @param message Level message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClassData.Level, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Level message, length delimited. Does not implicitly {@link ClassData.Level.verify|verify} messages.
         * @param message Level message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClassData.Level, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Level message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Level
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassData.Level;

        /**
         * Decodes a Level message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Level
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassData.Level;

        /**
         * Verifies a Level message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Level message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Level
         */
        public static fromObject(object: { [k: string]: any }): ClassData.Level;

        /**
         * Creates a plain object from a Level message. Also converts values to other types if specified.
         * @param message Level
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClassData.Level, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Level to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Level
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace v2. */
export namespace v2 {

    /** Properties of an AbilityDatabaseDbo. */
    interface IAbilityDatabaseDbo {

        /** AbilityDatabaseDbo AbilitySummaries */
        AbilitySummaries?: (v2.AbilitySummaryDbo[]|null);
    }

    /** Represents an AbilityDatabaseDbo. */
    class AbilityDatabaseDbo implements IAbilityDatabaseDbo {

        /**
         * Constructs a new AbilityDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IAbilityDatabaseDbo);

        /** AbilityDatabaseDbo AbilitySummaries. */
        public AbilitySummaries: v2.AbilitySummaryDbo[];

        /**
         * Creates a new AbilityDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AbilityDatabaseDbo instance
         */
        public static create(properties?: v2.IAbilityDatabaseDbo): v2.AbilityDatabaseDbo;

        /**
         * Encodes the specified AbilityDatabaseDbo message. Does not implicitly {@link v2.AbilityDatabaseDbo.verify|verify} messages.
         * @param message AbilityDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.AbilityDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AbilityDatabaseDbo message, length delimited. Does not implicitly {@link v2.AbilityDatabaseDbo.verify|verify} messages.
         * @param message AbilityDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.AbilityDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AbilityDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AbilityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.AbilityDatabaseDbo;

        /**
         * Decodes an AbilityDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AbilityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.AbilityDatabaseDbo;

        /**
         * Verifies an AbilityDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AbilityDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AbilityDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.AbilityDatabaseDbo;

        /**
         * Creates a plain object from an AbilityDatabaseDbo message. Also converts values to other types if specified.
         * @param message AbilityDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.AbilityDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AbilityDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AbilityDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AbilitySummaryDbo. */
    interface IAbilitySummaryDbo {

        /** AbilitySummaryDbo id */
        id?: (string|null);

        /** AbilitySummaryDbo name */
        name?: (string|null);

        /** AbilitySummaryDbo type */
        type?: (v2.AbilityTypeDbo|null);
    }

    /** Represents an AbilitySummaryDbo. */
    class AbilitySummaryDbo implements IAbilitySummaryDbo {

        /**
         * Constructs a new AbilitySummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IAbilitySummaryDbo);

        /** AbilitySummaryDbo id. */
        public id: string;

        /** AbilitySummaryDbo name. */
        public name: string;

        /** AbilitySummaryDbo type. */
        public type: v2.AbilityTypeDbo;

        /**
         * Creates a new AbilitySummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AbilitySummaryDbo instance
         */
        public static create(properties?: v2.IAbilitySummaryDbo): v2.AbilitySummaryDbo;

        /**
         * Encodes the specified AbilitySummaryDbo message. Does not implicitly {@link v2.AbilitySummaryDbo.verify|verify} messages.
         * @param message AbilitySummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.AbilitySummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AbilitySummaryDbo message, length delimited. Does not implicitly {@link v2.AbilitySummaryDbo.verify|verify} messages.
         * @param message AbilitySummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.AbilitySummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AbilitySummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AbilitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.AbilitySummaryDbo;

        /**
         * Decodes an AbilitySummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AbilitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.AbilitySummaryDbo;

        /**
         * Verifies an AbilitySummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AbilitySummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AbilitySummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.AbilitySummaryDbo;

        /**
         * Creates a plain object from an AbilitySummaryDbo message. Also converts values to other types if specified.
         * @param message AbilitySummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.AbilitySummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AbilitySummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AbilitySummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AbilityTypeDbo enum. */
    enum AbilityTypeDbo {
        ABILITY_TYPE_NONE = 0,
        ABILITY_TYPE_EX = 1,
        ABILITY_TYPE_SP = 2,
        ABILITY_TYPE_SU = 3
    }

    /** Properties of an AbilityDataDbo. */
    interface IAbilityDataDbo {

        /** AbilityDataDbo id */
        id?: (string|null);

        /** AbilityDataDbo name */
        name?: (string|null);

        /** AbilityDataDbo type */
        type?: (v2.AbilityTypeDbo|null);

        /** AbilityDataDbo description */
        description?: (string|null);
    }

    /** Represents an AbilityDataDbo. */
    class AbilityDataDbo implements IAbilityDataDbo {

        /**
         * Constructs a new AbilityDataDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IAbilityDataDbo);

        /** AbilityDataDbo id. */
        public id: string;

        /** AbilityDataDbo name. */
        public name: string;

        /** AbilityDataDbo type. */
        public type: v2.AbilityTypeDbo;

        /** AbilityDataDbo description. */
        public description: string;

        /**
         * Creates a new AbilityDataDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AbilityDataDbo instance
         */
        public static create(properties?: v2.IAbilityDataDbo): v2.AbilityDataDbo;

        /**
         * Encodes the specified AbilityDataDbo message. Does not implicitly {@link v2.AbilityDataDbo.verify|verify} messages.
         * @param message AbilityDataDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.AbilityDataDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AbilityDataDbo message, length delimited. Does not implicitly {@link v2.AbilityDataDbo.verify|verify} messages.
         * @param message AbilityDataDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.AbilityDataDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AbilityDataDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AbilityDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.AbilityDataDbo;

        /**
         * Decodes an AbilityDataDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AbilityDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.AbilityDataDbo;

        /**
         * Verifies an AbilityDataDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AbilityDataDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AbilityDataDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.AbilityDataDbo;

        /**
         * Creates a plain object from an AbilityDataDbo message. Also converts values to other types if specified.
         * @param message AbilityDataDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.AbilityDataDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AbilityDataDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AbilityDataDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WeaponDatabaseDbo. */
    interface IWeaponDatabaseDbo {

        /** WeaponDatabaseDbo WeaponTypes */
        WeaponTypes?: (v2.WeaponTypeDbo[]|null);
    }

    /** Represents a WeaponDatabaseDbo. */
    class WeaponDatabaseDbo implements IWeaponDatabaseDbo {

        /**
         * Constructs a new WeaponDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IWeaponDatabaseDbo);

        /** WeaponDatabaseDbo WeaponTypes. */
        public WeaponTypes: v2.WeaponTypeDbo[];

        /**
         * Creates a new WeaponDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WeaponDatabaseDbo instance
         */
        public static create(properties?: v2.IWeaponDatabaseDbo): v2.WeaponDatabaseDbo;

        /**
         * Encodes the specified WeaponDatabaseDbo message. Does not implicitly {@link v2.WeaponDatabaseDbo.verify|verify} messages.
         * @param message WeaponDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.WeaponDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WeaponDatabaseDbo message, length delimited. Does not implicitly {@link v2.WeaponDatabaseDbo.verify|verify} messages.
         * @param message WeaponDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.WeaponDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WeaponDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WeaponDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.WeaponDatabaseDbo;

        /**
         * Decodes a WeaponDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WeaponDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.WeaponDatabaseDbo;

        /**
         * Verifies a WeaponDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WeaponDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WeaponDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.WeaponDatabaseDbo;

        /**
         * Creates a plain object from a WeaponDatabaseDbo message. Also converts values to other types if specified.
         * @param message WeaponDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.WeaponDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WeaponDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WeaponDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WeaponTypeDbo. */
    interface IWeaponTypeDbo {

        /** WeaponTypeDbo id */
        id?: (string|null);

        /** WeaponTypeDbo name */
        name?: (string|null);

        /** WeaponTypeDbo proficiency */
        proficiency?: (v2.WeaponProficiencyDbo|null);

        /** WeaponTypeDbo range */
        range?: (v2.WeaponRangeDbo|null);

        /** WeaponTypeDbo grip */
        grip?: (v2.WeaponGripDbo|null);
    }

    /** Represents a WeaponTypeDbo. */
    class WeaponTypeDbo implements IWeaponTypeDbo {

        /**
         * Constructs a new WeaponTypeDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IWeaponTypeDbo);

        /** WeaponTypeDbo id. */
        public id: string;

        /** WeaponTypeDbo name. */
        public name: string;

        /** WeaponTypeDbo proficiency. */
        public proficiency: v2.WeaponProficiencyDbo;

        /** WeaponTypeDbo range. */
        public range: v2.WeaponRangeDbo;

        /** WeaponTypeDbo grip. */
        public grip: v2.WeaponGripDbo;

        /**
         * Creates a new WeaponTypeDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WeaponTypeDbo instance
         */
        public static create(properties?: v2.IWeaponTypeDbo): v2.WeaponTypeDbo;

        /**
         * Encodes the specified WeaponTypeDbo message. Does not implicitly {@link v2.WeaponTypeDbo.verify|verify} messages.
         * @param message WeaponTypeDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.WeaponTypeDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WeaponTypeDbo message, length delimited. Does not implicitly {@link v2.WeaponTypeDbo.verify|verify} messages.
         * @param message WeaponTypeDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.WeaponTypeDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WeaponTypeDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WeaponTypeDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.WeaponTypeDbo;

        /**
         * Decodes a WeaponTypeDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WeaponTypeDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.WeaponTypeDbo;

        /**
         * Verifies a WeaponTypeDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WeaponTypeDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WeaponTypeDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.WeaponTypeDbo;

        /**
         * Creates a plain object from a WeaponTypeDbo message. Also converts values to other types if specified.
         * @param message WeaponTypeDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.WeaponTypeDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WeaponTypeDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WeaponTypeDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WeaponSummaryDbo. */
    interface IWeaponSummaryDbo {

        /** WeaponSummaryDbo id */
        id?: (string|null);

        /** WeaponSummaryDbo name */
        name?: (string|null);

        /** WeaponSummaryDbo proficiency */
        proficiency?: (v2.WeaponProficiencyDbo|null);

        /** WeaponSummaryDbo special */
        special?: (v2.WeaponSpecialDbo[]|null);

        /** WeaponSummaryDbo grip */
        grip?: (v2.WeaponGripDbo|null);
    }

    /** Represents a WeaponSummaryDbo. */
    class WeaponSummaryDbo implements IWeaponSummaryDbo {

        /**
         * Constructs a new WeaponSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IWeaponSummaryDbo);

        /** WeaponSummaryDbo id. */
        public id: string;

        /** WeaponSummaryDbo name. */
        public name: string;

        /** WeaponSummaryDbo proficiency. */
        public proficiency: v2.WeaponProficiencyDbo;

        /** WeaponSummaryDbo special. */
        public special: v2.WeaponSpecialDbo[];

        /** WeaponSummaryDbo grip. */
        public grip: v2.WeaponGripDbo;

        /**
         * Creates a new WeaponSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WeaponSummaryDbo instance
         */
        public static create(properties?: v2.IWeaponSummaryDbo): v2.WeaponSummaryDbo;

        /**
         * Encodes the specified WeaponSummaryDbo message. Does not implicitly {@link v2.WeaponSummaryDbo.verify|verify} messages.
         * @param message WeaponSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.WeaponSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WeaponSummaryDbo message, length delimited. Does not implicitly {@link v2.WeaponSummaryDbo.verify|verify} messages.
         * @param message WeaponSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.WeaponSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WeaponSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WeaponSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.WeaponSummaryDbo;

        /**
         * Decodes a WeaponSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WeaponSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.WeaponSummaryDbo;

        /**
         * Verifies a WeaponSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WeaponSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WeaponSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.WeaponSummaryDbo;

        /**
         * Creates a plain object from a WeaponSummaryDbo message. Also converts values to other types if specified.
         * @param message WeaponSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.WeaponSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WeaponSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WeaponSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WeaponDbo. */
    interface IWeaponDbo {

        /** WeaponDbo id */
        id?: (string|null);

        /** WeaponDbo name */
        name?: (string|null);

        /** WeaponDbo proficiency */
        proficiency?: (v2.WeaponProficiencyDbo|null);

        /** WeaponDbo special */
        special?: (v2.WeaponSpecialDbo[]|null);

        /** WeaponDbo grip */
        grip?: (v2.WeaponGripDbo|null);
    }

    /** Represents a WeaponDbo. */
    class WeaponDbo implements IWeaponDbo {

        /**
         * Constructs a new WeaponDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IWeaponDbo);

        /** WeaponDbo id. */
        public id: string;

        /** WeaponDbo name. */
        public name: string;

        /** WeaponDbo proficiency. */
        public proficiency: v2.WeaponProficiencyDbo;

        /** WeaponDbo special. */
        public special: v2.WeaponSpecialDbo[];

        /** WeaponDbo grip. */
        public grip: v2.WeaponGripDbo;

        /**
         * Creates a new WeaponDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WeaponDbo instance
         */
        public static create(properties?: v2.IWeaponDbo): v2.WeaponDbo;

        /**
         * Encodes the specified WeaponDbo message. Does not implicitly {@link v2.WeaponDbo.verify|verify} messages.
         * @param message WeaponDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.WeaponDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WeaponDbo message, length delimited. Does not implicitly {@link v2.WeaponDbo.verify|verify} messages.
         * @param message WeaponDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.WeaponDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WeaponDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WeaponDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.WeaponDbo;

        /**
         * Decodes a WeaponDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WeaponDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.WeaponDbo;

        /**
         * Verifies a WeaponDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WeaponDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WeaponDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.WeaponDbo;

        /**
         * Creates a plain object from a WeaponDbo message. Also converts values to other types if specified.
         * @param message WeaponDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.WeaponDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WeaponDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WeaponDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WeaponGripDbo enum. */
    enum WeaponGripDbo {
        WEAPON_GRIP_UNARMED = 0,
        WEAPON_GRIP_LIGHT = 1,
        WEAPON_GRIP_ONE_HANDED = 2,
        WEAPON_GRIP_TWO_HANDED = 3,
        WEAPON_GRIP_RANGED = 4,
        WEAPON_GRIP_AMMO = 5
    }

    /** WeaponProficiencyDbo enum. */
    enum WeaponProficiencyDbo {
        WEAPON_PROFICIENCY_OTHER = 0,
        WEAPON_PROFICIENCY_SIMPLE = 1,
        WEAPON_PROFICIENCY_MARTIAL = 2,
        WEAPON_PROFICIENCY_EXOTIC = 3
    }

    /** WeaponRangeDbo enum. */
    enum WeaponRangeDbo {
        WEAPON_RANGE_NONE = 0,
        WEAPON_RANGE_MELEE = 1,
        WEAPON_RANGE_REACH = 2,
        WEAPON_RANGE_RANGED = 3
    }

    /** WeaponSpecialDbo enum. */
    enum WeaponSpecialDbo {
        WEAPON_SPECIAL_DISARM = 0,
        WEAPON_SPECIAL_TRIP = 1,
        WEAPON_SPECIAL_IMPROVISED = 2,
        WEAPON_SPECIAL_BLOCKING = 3,
        WEAPON_SPECIAL_FINESSE = 4,
        WEAPON_SPECIAL_FRAGILE = 5,
        WEAPON_SPECIAL_BRACE = 6,
        WEAPON_SPECIAL_REACH = 7,
        WEAPON_SPECIAL_PERFORMANCE = 8,
        WEAPON_SPECIAL_GRAPPLE = 9,
        WEAPON_SPECIAL_MONK = 10,
        WEAPON_SPECIAL_SUNDER = 11,
        WEAPON_SPECIAL_DISTRACTING = 12,
        WEAPON_SPECIAL_NONLETHAL = 13,
        WEAPON_SPECIAL_DOUBLE = 14,
        WEAPON_SPECIAL_ATTACHED = 15,
        WEAPON_SPECIAL_TOOL = 16,
        WEAPON_SPECIAL_STRENGTH = 17
    }

    /** Properties of a FeatDatabaseDbo. */
    interface IFeatDatabaseDbo {

        /** FeatDatabaseDbo FeatSummaries */
        FeatSummaries?: (v2.FeatSummaryDbo[]|null);
    }

    /** Represents a FeatDatabaseDbo. */
    class FeatDatabaseDbo implements IFeatDatabaseDbo {

        /**
         * Constructs a new FeatDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IFeatDatabaseDbo);

        /** FeatDatabaseDbo FeatSummaries. */
        public FeatSummaries: v2.FeatSummaryDbo[];

        /**
         * Creates a new FeatDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatDatabaseDbo instance
         */
        public static create(properties?: v2.IFeatDatabaseDbo): v2.FeatDatabaseDbo;

        /**
         * Encodes the specified FeatDatabaseDbo message. Does not implicitly {@link v2.FeatDatabaseDbo.verify|verify} messages.
         * @param message FeatDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.FeatDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatDatabaseDbo message, length delimited. Does not implicitly {@link v2.FeatDatabaseDbo.verify|verify} messages.
         * @param message FeatDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.FeatDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.FeatDatabaseDbo;

        /**
         * Decodes a FeatDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.FeatDatabaseDbo;

        /**
         * Verifies a FeatDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.FeatDatabaseDbo;

        /**
         * Creates a plain object from a FeatDatabaseDbo message. Also converts values to other types if specified.
         * @param message FeatDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.FeatDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeatSummaryDbo. */
    interface IFeatSummaryDbo {

        /** FeatSummaryDbo id */
        id?: (string|null);

        /** FeatSummaryDbo name */
        name?: (string|null);

        /** FeatSummaryDbo types */
        types?: (v2.FeatTypeDbo[]|null);

        /** FeatSummaryDbo prerequisites */
        prerequisites?: (string|null);

        /** FeatSummaryDbo prerequisitesFormula */
        prerequisitesFormula?: (string|null);

        /** FeatSummaryDbo teamwork */
        teamwork?: (boolean|null);

        /** FeatSummaryDbo options */
        options?: (v2.FeatOptionDbo[]|null);
    }

    /** Represents a FeatSummaryDbo. */
    class FeatSummaryDbo implements IFeatSummaryDbo {

        /**
         * Constructs a new FeatSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IFeatSummaryDbo);

        /** FeatSummaryDbo id. */
        public id: string;

        /** FeatSummaryDbo name. */
        public name: string;

        /** FeatSummaryDbo types. */
        public types: v2.FeatTypeDbo[];

        /** FeatSummaryDbo prerequisites. */
        public prerequisites: string;

        /** FeatSummaryDbo prerequisitesFormula. */
        public prerequisitesFormula: string;

        /** FeatSummaryDbo teamwork. */
        public teamwork: boolean;

        /** FeatSummaryDbo options. */
        public options: v2.FeatOptionDbo[];

        /**
         * Creates a new FeatSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatSummaryDbo instance
         */
        public static create(properties?: v2.IFeatSummaryDbo): v2.FeatSummaryDbo;

        /**
         * Encodes the specified FeatSummaryDbo message. Does not implicitly {@link v2.FeatSummaryDbo.verify|verify} messages.
         * @param message FeatSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.FeatSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatSummaryDbo message, length delimited. Does not implicitly {@link v2.FeatSummaryDbo.verify|verify} messages.
         * @param message FeatSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.FeatSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.FeatSummaryDbo;

        /**
         * Decodes a FeatSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.FeatSummaryDbo;

        /**
         * Verifies a FeatSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.FeatSummaryDbo;

        /**
         * Creates a plain object from a FeatSummaryDbo message. Also converts values to other types if specified.
         * @param message FeatSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.FeatSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeatOptionDbo. */
    interface IFeatOptionDbo {

        /** FeatOptionDbo id */
        id?: (string|null);

        /** FeatOptionDbo name */
        name?: (string|null);

        /** FeatOptionDbo prerequisitesFormula */
        prerequisitesFormula?: (string|null);
    }

    /** Represents a FeatOptionDbo. */
    class FeatOptionDbo implements IFeatOptionDbo {

        /**
         * Constructs a new FeatOptionDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IFeatOptionDbo);

        /** FeatOptionDbo id. */
        public id: string;

        /** FeatOptionDbo name. */
        public name: string;

        /** FeatOptionDbo prerequisitesFormula. */
        public prerequisitesFormula: string;

        /**
         * Creates a new FeatOptionDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatOptionDbo instance
         */
        public static create(properties?: v2.IFeatOptionDbo): v2.FeatOptionDbo;

        /**
         * Encodes the specified FeatOptionDbo message. Does not implicitly {@link v2.FeatOptionDbo.verify|verify} messages.
         * @param message FeatOptionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.FeatOptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatOptionDbo message, length delimited. Does not implicitly {@link v2.FeatOptionDbo.verify|verify} messages.
         * @param message FeatOptionDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.FeatOptionDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatOptionDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.FeatOptionDbo;

        /**
         * Decodes a FeatOptionDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.FeatOptionDbo;

        /**
         * Verifies a FeatOptionDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatOptionDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatOptionDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.FeatOptionDbo;

        /**
         * Creates a plain object from a FeatOptionDbo message. Also converts values to other types if specified.
         * @param message FeatOptionDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.FeatOptionDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatOptionDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatOptionDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** FeatTypeDbo enum. */
    enum FeatTypeDbo {
        FEAT_TYPE_GENERAL = 0,
        FEAT_TYPE_COMBAT = 1,
        FEAT_TYPE_CRITICAL = 2,
        FEAT_TYPE_ITEM_CREATION = 3,
        FEAT_TYPE_METAMAGIC = 4,
        FEAT_TYPE_ACHIEVEMENT = 5,
        FEAT_TYPE_BLOODHEX = 6,
        FEAT_TYPE_FACTION = 7,
        FEAT_TYPE_GRIT = 8,
        FEAT_TYPE_PANACHE = 9,
        FEAT_TYPE_MYTHIC = 10,
        FEAT_TYPE_TEAMWORK = 11,
        FEAT_TYPE_MONSTER = 12
    }

    /** Properties of a FeatDbo. */
    interface IFeatDbo {

        /** FeatDbo id */
        id?: (string|null);

        /** FeatDbo name */
        name?: (string|null);

        /** FeatDbo types */
        types?: (v2.FeatTypeDbo[]|null);

        /** FeatDbo description */
        description?: (string|null);

        /** FeatDbo prerequisites */
        prerequisites?: (string|null);

        /** FeatDbo prerequisitesFormula */
        prerequisitesFormula?: (string|null);

        /** FeatDbo benefit */
        benefit?: (string|null);

        /** FeatDbo normal */
        normal?: (string|null);

        /** FeatDbo special */
        special?: (string|null);

        /** FeatDbo source */
        source?: (string|null);

        /** FeatDbo teamwork */
        teamwork?: (boolean|null);

        /** FeatDbo note */
        note?: (string|null);

        /** FeatDbo options */
        options?: (v2.FeatOptionDbo[]|null);
    }

    /** Represents a FeatDbo. */
    class FeatDbo implements IFeatDbo {

        /**
         * Constructs a new FeatDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IFeatDbo);

        /** FeatDbo id. */
        public id: string;

        /** FeatDbo name. */
        public name: string;

        /** FeatDbo types. */
        public types: v2.FeatTypeDbo[];

        /** FeatDbo description. */
        public description: string;

        /** FeatDbo prerequisites. */
        public prerequisites: string;

        /** FeatDbo prerequisitesFormula. */
        public prerequisitesFormula: string;

        /** FeatDbo benefit. */
        public benefit: string;

        /** FeatDbo normal. */
        public normal: string;

        /** FeatDbo special. */
        public special: string;

        /** FeatDbo source. */
        public source: string;

        /** FeatDbo teamwork. */
        public teamwork: boolean;

        /** FeatDbo note. */
        public note: string;

        /** FeatDbo options. */
        public options: v2.FeatOptionDbo[];

        /**
         * Creates a new FeatDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatDbo instance
         */
        public static create(properties?: v2.IFeatDbo): v2.FeatDbo;

        /**
         * Encodes the specified FeatDbo message. Does not implicitly {@link v2.FeatDbo.verify|verify} messages.
         * @param message FeatDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.FeatDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatDbo message, length delimited. Does not implicitly {@link v2.FeatDbo.verify|verify} messages.
         * @param message FeatDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.FeatDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.FeatDbo;

        /**
         * Decodes a FeatDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.FeatDbo;

        /**
         * Verifies a FeatDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.FeatDbo;

        /**
         * Creates a plain object from a FeatDbo message. Also converts values to other types if specified.
         * @param message FeatDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.FeatDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeatDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a Formula. */
export interface IFormula {

    /** Formula operation */
    operation?: (Formula.Operation|null);
}

/** Represents a Formula. */
export class Formula implements IFormula {

    /**
     * Constructs a new Formula.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFormula);

    /** Formula operation. */
    public operation?: (Formula.Operation|null);

    /**
     * Creates a new Formula instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Formula instance
     */
    public static create(properties?: IFormula): Formula;

    /**
     * Encodes the specified Formula message. Does not implicitly {@link Formula.verify|verify} messages.
     * @param message Formula message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Formula, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Formula message, length delimited. Does not implicitly {@link Formula.verify|verify} messages.
     * @param message Formula message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Formula, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Formula message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Formula
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula;

    /**
     * Decodes a Formula message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Formula
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula;

    /**
     * Verifies a Formula message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Formula message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Formula
     */
    public static fromObject(object: { [k: string]: any }): Formula;

    /**
     * Creates a plain object from a Formula message. Also converts values to other types if specified.
     * @param message Formula
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Formula, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Formula to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Formula
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Formula {

    /** Properties of an Operation. */
    interface IOperation {

        /** Operation integerValue */
        integerValue?: (number|null);

        /** Operation decimalValue */
        decimalValue?: (number|null);

        /** Operation booleanValue */
        booleanValue?: (boolean|null);

        /** Operation stringValue */
        stringValue?: (string|null);

        /** Operation variableValue */
        variableValue?: (Formula.Operation.VariableValue|null);

        /** Operation addOperation */
        addOperation?: (Formula.Operation.AddOperation|null);

        /** Operation subtractOperation */
        subtractOperation?: (Formula.Operation.SubtractOperation|null);

        /** Operation multiplyOperation */
        multiplyOperation?: (Formula.Operation.MultiplyOperation|null);

        /** Operation divideOperation */
        divideOperation?: (Formula.Operation.DivideOperation|null);

        /** Operation equalsOperation */
        equalsOperation?: (Formula.Operation.EqualsOperation|null);

        /** Operation notEqualsOperation */
        notEqualsOperation?: (Formula.Operation.NotEqualsOperation|null);

        /** Operation greaterThanOperation */
        greaterThanOperation?: (Formula.Operation.GreaterThanOperation|null);

        /** Operation greaterThanOrEqualsOperation */
        greaterThanOrEqualsOperation?: (Formula.Operation.GreaterThanOrEqualsOperation|null);

        /** Operation lessThanOperation */
        lessThanOperation?: (Formula.Operation.LessThanOperation|null);

        /** Operation lessThanOrEqualsOperation */
        lessThanOrEqualsOperation?: (Formula.Operation.LessThanOrEqualsOperation|null);

        /** Operation andOperation */
        andOperation?: (Formula.Operation.AndOperation|null);

        /** Operation orOperation */
        orOperation?: (Formula.Operation.OrOperation|null);

        /** Operation notOperation */
        notOperation?: (Formula.Operation.NotOperation|null);

        /** Operation absFunction */
        absFunction?: (Formula.Operation.AbsFunction|null);

        /** Operation minFunction */
        minFunction?: (Formula.Operation.MinFunction|null);

        /** Operation maxFunction */
        maxFunction?: (Formula.Operation.MaxFunction|null);

        /** Operation floorFunction */
        floorFunction?: (Formula.Operation.FloorFunction|null);

        /** Operation ceilFunction */
        ceilFunction?: (Formula.Operation.CeilFunction|null);

        /** Operation signedFunction */
        signedFunction?: (Formula.Operation.SignedFunction|null);

        /** Operation concatFunction */
        concatFunction?: (Formula.Operation.ConcatFunction|null);

        /** Operation ifFunction */
        ifFunction?: (Formula.Operation.IfFunction|null);
    }

    /** Represents an Operation. */
    class Operation implements IOperation {

        /**
         * Constructs a new Operation.
         * @param [properties] Properties to set
         */
        constructor(properties?: Formula.IOperation);

        /** Operation integerValue. */
        public integerValue?: (number|null);

        /** Operation decimalValue. */
        public decimalValue?: (number|null);

        /** Operation booleanValue. */
        public booleanValue?: (boolean|null);

        /** Operation stringValue. */
        public stringValue?: (string|null);

        /** Operation variableValue. */
        public variableValue?: (Formula.Operation.VariableValue|null);

        /** Operation addOperation. */
        public addOperation?: (Formula.Operation.AddOperation|null);

        /** Operation subtractOperation. */
        public subtractOperation?: (Formula.Operation.SubtractOperation|null);

        /** Operation multiplyOperation. */
        public multiplyOperation?: (Formula.Operation.MultiplyOperation|null);

        /** Operation divideOperation. */
        public divideOperation?: (Formula.Operation.DivideOperation|null);

        /** Operation equalsOperation. */
        public equalsOperation?: (Formula.Operation.EqualsOperation|null);

        /** Operation notEqualsOperation. */
        public notEqualsOperation?: (Formula.Operation.NotEqualsOperation|null);

        /** Operation greaterThanOperation. */
        public greaterThanOperation?: (Formula.Operation.GreaterThanOperation|null);

        /** Operation greaterThanOrEqualsOperation. */
        public greaterThanOrEqualsOperation?: (Formula.Operation.GreaterThanOrEqualsOperation|null);

        /** Operation lessThanOperation. */
        public lessThanOperation?: (Formula.Operation.LessThanOperation|null);

        /** Operation lessThanOrEqualsOperation. */
        public lessThanOrEqualsOperation?: (Formula.Operation.LessThanOrEqualsOperation|null);

        /** Operation andOperation. */
        public andOperation?: (Formula.Operation.AndOperation|null);

        /** Operation orOperation. */
        public orOperation?: (Formula.Operation.OrOperation|null);

        /** Operation notOperation. */
        public notOperation?: (Formula.Operation.NotOperation|null);

        /** Operation absFunction. */
        public absFunction?: (Formula.Operation.AbsFunction|null);

        /** Operation minFunction. */
        public minFunction?: (Formula.Operation.MinFunction|null);

        /** Operation maxFunction. */
        public maxFunction?: (Formula.Operation.MaxFunction|null);

        /** Operation floorFunction. */
        public floorFunction?: (Formula.Operation.FloorFunction|null);

        /** Operation ceilFunction. */
        public ceilFunction?: (Formula.Operation.CeilFunction|null);

        /** Operation signedFunction. */
        public signedFunction?: (Formula.Operation.SignedFunction|null);

        /** Operation concatFunction. */
        public concatFunction?: (Formula.Operation.ConcatFunction|null);

        /** Operation ifFunction. */
        public ifFunction?: (Formula.Operation.IfFunction|null);

        /** Operation op. */
        public op?: ("integerValue"|"decimalValue"|"booleanValue"|"stringValue"|"variableValue"|"addOperation"|"subtractOperation"|"multiplyOperation"|"divideOperation"|"equalsOperation"|"notEqualsOperation"|"greaterThanOperation"|"greaterThanOrEqualsOperation"|"lessThanOperation"|"lessThanOrEqualsOperation"|"andOperation"|"orOperation"|"notOperation"|"absFunction"|"minFunction"|"maxFunction"|"floorFunction"|"ceilFunction"|"signedFunction"|"concatFunction"|"ifFunction");

        /**
         * Creates a new Operation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Operation instance
         */
        public static create(properties?: Formula.IOperation): Formula.Operation;

        /**
         * Encodes the specified Operation message. Does not implicitly {@link Formula.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Formula.Operation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link Formula.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Formula.Operation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation;

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation;

        /**
         * Verifies an Operation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Operation
         */
        public static fromObject(object: { [k: string]: any }): Formula.Operation;

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @param message Operation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Formula.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Operation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Operation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Operation {

        /** Properties of a VariableValue. */
        interface IVariableValue {

            /** VariableValue variableId */
            variableId?: (string|null);
        }

        /** Represents a VariableValue. */
        class VariableValue implements IVariableValue {

            /**
             * Constructs a new VariableValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IVariableValue);

            /** VariableValue variableId. */
            public variableId: string;

            /**
             * Creates a new VariableValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VariableValue instance
             */
            public static create(properties?: Formula.Operation.IVariableValue): Formula.Operation.VariableValue;

            /**
             * Encodes the specified VariableValue message. Does not implicitly {@link Formula.Operation.VariableValue.verify|verify} messages.
             * @param message VariableValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.VariableValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VariableValue message, length delimited. Does not implicitly {@link Formula.Operation.VariableValue.verify|verify} messages.
             * @param message VariableValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.VariableValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VariableValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VariableValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.VariableValue;

            /**
             * Decodes a VariableValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VariableValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.VariableValue;

            /**
             * Verifies a VariableValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VariableValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VariableValue
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.VariableValue;

            /**
             * Creates a plain object from a VariableValue message. Also converts values to other types if specified.
             * @param message VariableValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.VariableValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VariableValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VariableValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddOperation. */
        interface IAddOperation {

            /** AddOperation a */
            a?: (Formula.Operation|null);

            /** AddOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents an AddOperation. */
        class AddOperation implements IAddOperation {

            /**
             * Constructs a new AddOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IAddOperation);

            /** AddOperation a. */
            public a?: (Formula.Operation|null);

            /** AddOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new AddOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddOperation instance
             */
            public static create(properties?: Formula.Operation.IAddOperation): Formula.Operation.AddOperation;

            /**
             * Encodes the specified AddOperation message. Does not implicitly {@link Formula.Operation.AddOperation.verify|verify} messages.
             * @param message AddOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.AddOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddOperation message, length delimited. Does not implicitly {@link Formula.Operation.AddOperation.verify|verify} messages.
             * @param message AddOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.AddOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.AddOperation;

            /**
             * Decodes an AddOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.AddOperation;

            /**
             * Verifies an AddOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.AddOperation;

            /**
             * Creates a plain object from an AddOperation message. Also converts values to other types if specified.
             * @param message AddOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.AddOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SubtractOperation. */
        interface ISubtractOperation {

            /** SubtractOperation a */
            a?: (Formula.Operation|null);

            /** SubtractOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a SubtractOperation. */
        class SubtractOperation implements ISubtractOperation {

            /**
             * Constructs a new SubtractOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.ISubtractOperation);

            /** SubtractOperation a. */
            public a?: (Formula.Operation|null);

            /** SubtractOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new SubtractOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubtractOperation instance
             */
            public static create(properties?: Formula.Operation.ISubtractOperation): Formula.Operation.SubtractOperation;

            /**
             * Encodes the specified SubtractOperation message. Does not implicitly {@link Formula.Operation.SubtractOperation.verify|verify} messages.
             * @param message SubtractOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.SubtractOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubtractOperation message, length delimited. Does not implicitly {@link Formula.Operation.SubtractOperation.verify|verify} messages.
             * @param message SubtractOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.SubtractOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubtractOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubtractOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.SubtractOperation;

            /**
             * Decodes a SubtractOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubtractOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.SubtractOperation;

            /**
             * Verifies a SubtractOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubtractOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubtractOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.SubtractOperation;

            /**
             * Creates a plain object from a SubtractOperation message. Also converts values to other types if specified.
             * @param message SubtractOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.SubtractOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubtractOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SubtractOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MultiplyOperation. */
        interface IMultiplyOperation {

            /** MultiplyOperation a */
            a?: (Formula.Operation|null);

            /** MultiplyOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a MultiplyOperation. */
        class MultiplyOperation implements IMultiplyOperation {

            /**
             * Constructs a new MultiplyOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IMultiplyOperation);

            /** MultiplyOperation a. */
            public a?: (Formula.Operation|null);

            /** MultiplyOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new MultiplyOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MultiplyOperation instance
             */
            public static create(properties?: Formula.Operation.IMultiplyOperation): Formula.Operation.MultiplyOperation;

            /**
             * Encodes the specified MultiplyOperation message. Does not implicitly {@link Formula.Operation.MultiplyOperation.verify|verify} messages.
             * @param message MultiplyOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.MultiplyOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MultiplyOperation message, length delimited. Does not implicitly {@link Formula.Operation.MultiplyOperation.verify|verify} messages.
             * @param message MultiplyOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.MultiplyOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MultiplyOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MultiplyOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.MultiplyOperation;

            /**
             * Decodes a MultiplyOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MultiplyOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.MultiplyOperation;

            /**
             * Verifies a MultiplyOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MultiplyOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MultiplyOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.MultiplyOperation;

            /**
             * Creates a plain object from a MultiplyOperation message. Also converts values to other types if specified.
             * @param message MultiplyOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.MultiplyOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MultiplyOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MultiplyOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DivideOperation. */
        interface IDivideOperation {

            /** DivideOperation a */
            a?: (Formula.Operation|null);

            /** DivideOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a DivideOperation. */
        class DivideOperation implements IDivideOperation {

            /**
             * Constructs a new DivideOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IDivideOperation);

            /** DivideOperation a. */
            public a?: (Formula.Operation|null);

            /** DivideOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new DivideOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DivideOperation instance
             */
            public static create(properties?: Formula.Operation.IDivideOperation): Formula.Operation.DivideOperation;

            /**
             * Encodes the specified DivideOperation message. Does not implicitly {@link Formula.Operation.DivideOperation.verify|verify} messages.
             * @param message DivideOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.DivideOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DivideOperation message, length delimited. Does not implicitly {@link Formula.Operation.DivideOperation.verify|verify} messages.
             * @param message DivideOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.DivideOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DivideOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DivideOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.DivideOperation;

            /**
             * Decodes a DivideOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DivideOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.DivideOperation;

            /**
             * Verifies a DivideOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DivideOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DivideOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.DivideOperation;

            /**
             * Creates a plain object from a DivideOperation message. Also converts values to other types if specified.
             * @param message DivideOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.DivideOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DivideOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DivideOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EqualsOperation. */
        interface IEqualsOperation {

            /** EqualsOperation a */
            a?: (Formula.Operation|null);

            /** EqualsOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents an EqualsOperation. */
        class EqualsOperation implements IEqualsOperation {

            /**
             * Constructs a new EqualsOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IEqualsOperation);

            /** EqualsOperation a. */
            public a?: (Formula.Operation|null);

            /** EqualsOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new EqualsOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EqualsOperation instance
             */
            public static create(properties?: Formula.Operation.IEqualsOperation): Formula.Operation.EqualsOperation;

            /**
             * Encodes the specified EqualsOperation message. Does not implicitly {@link Formula.Operation.EqualsOperation.verify|verify} messages.
             * @param message EqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.EqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.EqualsOperation.verify|verify} messages.
             * @param message EqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.EqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EqualsOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.EqualsOperation;

            /**
             * Decodes an EqualsOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.EqualsOperation;

            /**
             * Verifies an EqualsOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EqualsOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.EqualsOperation;

            /**
             * Creates a plain object from an EqualsOperation message. Also converts values to other types if specified.
             * @param message EqualsOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.EqualsOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EqualsOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EqualsOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NotEqualsOperation. */
        interface INotEqualsOperation {

            /** NotEqualsOperation a */
            a?: (Formula.Operation|null);

            /** NotEqualsOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a NotEqualsOperation. */
        class NotEqualsOperation implements INotEqualsOperation {

            /**
             * Constructs a new NotEqualsOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.INotEqualsOperation);

            /** NotEqualsOperation a. */
            public a?: (Formula.Operation|null);

            /** NotEqualsOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new NotEqualsOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotEqualsOperation instance
             */
            public static create(properties?: Formula.Operation.INotEqualsOperation): Formula.Operation.NotEqualsOperation;

            /**
             * Encodes the specified NotEqualsOperation message. Does not implicitly {@link Formula.Operation.NotEqualsOperation.verify|verify} messages.
             * @param message NotEqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.NotEqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotEqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.NotEqualsOperation.verify|verify} messages.
             * @param message NotEqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.NotEqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotEqualsOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.NotEqualsOperation;

            /**
             * Decodes a NotEqualsOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.NotEqualsOperation;

            /**
             * Verifies a NotEqualsOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotEqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotEqualsOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.NotEqualsOperation;

            /**
             * Creates a plain object from a NotEqualsOperation message. Also converts values to other types if specified.
             * @param message NotEqualsOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.NotEqualsOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotEqualsOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NotEqualsOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GreaterThanOperation. */
        interface IGreaterThanOperation {

            /** GreaterThanOperation a */
            a?: (Formula.Operation|null);

            /** GreaterThanOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a GreaterThanOperation. */
        class GreaterThanOperation implements IGreaterThanOperation {

            /**
             * Constructs a new GreaterThanOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IGreaterThanOperation);

            /** GreaterThanOperation a. */
            public a?: (Formula.Operation|null);

            /** GreaterThanOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new GreaterThanOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GreaterThanOperation instance
             */
            public static create(properties?: Formula.Operation.IGreaterThanOperation): Formula.Operation.GreaterThanOperation;

            /**
             * Encodes the specified GreaterThanOperation message. Does not implicitly {@link Formula.Operation.GreaterThanOperation.verify|verify} messages.
             * @param message GreaterThanOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.GreaterThanOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GreaterThanOperation message, length delimited. Does not implicitly {@link Formula.Operation.GreaterThanOperation.verify|verify} messages.
             * @param message GreaterThanOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.GreaterThanOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GreaterThanOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GreaterThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.GreaterThanOperation;

            /**
             * Decodes a GreaterThanOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GreaterThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.GreaterThanOperation;

            /**
             * Verifies a GreaterThanOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GreaterThanOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GreaterThanOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.GreaterThanOperation;

            /**
             * Creates a plain object from a GreaterThanOperation message. Also converts values to other types if specified.
             * @param message GreaterThanOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.GreaterThanOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GreaterThanOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GreaterThanOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GreaterThanOrEqualsOperation. */
        interface IGreaterThanOrEqualsOperation {

            /** GreaterThanOrEqualsOperation a */
            a?: (Formula.Operation|null);

            /** GreaterThanOrEqualsOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a GreaterThanOrEqualsOperation. */
        class GreaterThanOrEqualsOperation implements IGreaterThanOrEqualsOperation {

            /**
             * Constructs a new GreaterThanOrEqualsOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IGreaterThanOrEqualsOperation);

            /** GreaterThanOrEqualsOperation a. */
            public a?: (Formula.Operation|null);

            /** GreaterThanOrEqualsOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new GreaterThanOrEqualsOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GreaterThanOrEqualsOperation instance
             */
            public static create(properties?: Formula.Operation.IGreaterThanOrEqualsOperation): Formula.Operation.GreaterThanOrEqualsOperation;

            /**
             * Encodes the specified GreaterThanOrEqualsOperation message. Does not implicitly {@link Formula.Operation.GreaterThanOrEqualsOperation.verify|verify} messages.
             * @param message GreaterThanOrEqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.GreaterThanOrEqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GreaterThanOrEqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.GreaterThanOrEqualsOperation.verify|verify} messages.
             * @param message GreaterThanOrEqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.GreaterThanOrEqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GreaterThanOrEqualsOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GreaterThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.GreaterThanOrEqualsOperation;

            /**
             * Decodes a GreaterThanOrEqualsOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GreaterThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.GreaterThanOrEqualsOperation;

            /**
             * Verifies a GreaterThanOrEqualsOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GreaterThanOrEqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GreaterThanOrEqualsOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.GreaterThanOrEqualsOperation;

            /**
             * Creates a plain object from a GreaterThanOrEqualsOperation message. Also converts values to other types if specified.
             * @param message GreaterThanOrEqualsOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.GreaterThanOrEqualsOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GreaterThanOrEqualsOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GreaterThanOrEqualsOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LessThanOperation. */
        interface ILessThanOperation {

            /** LessThanOperation a */
            a?: (Formula.Operation|null);

            /** LessThanOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a LessThanOperation. */
        class LessThanOperation implements ILessThanOperation {

            /**
             * Constructs a new LessThanOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.ILessThanOperation);

            /** LessThanOperation a. */
            public a?: (Formula.Operation|null);

            /** LessThanOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new LessThanOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LessThanOperation instance
             */
            public static create(properties?: Formula.Operation.ILessThanOperation): Formula.Operation.LessThanOperation;

            /**
             * Encodes the specified LessThanOperation message. Does not implicitly {@link Formula.Operation.LessThanOperation.verify|verify} messages.
             * @param message LessThanOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.LessThanOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LessThanOperation message, length delimited. Does not implicitly {@link Formula.Operation.LessThanOperation.verify|verify} messages.
             * @param message LessThanOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.LessThanOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LessThanOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LessThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.LessThanOperation;

            /**
             * Decodes a LessThanOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LessThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.LessThanOperation;

            /**
             * Verifies a LessThanOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LessThanOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LessThanOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.LessThanOperation;

            /**
             * Creates a plain object from a LessThanOperation message. Also converts values to other types if specified.
             * @param message LessThanOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.LessThanOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LessThanOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LessThanOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LessThanOrEqualsOperation. */
        interface ILessThanOrEqualsOperation {

            /** LessThanOrEqualsOperation a */
            a?: (Formula.Operation|null);

            /** LessThanOrEqualsOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents a LessThanOrEqualsOperation. */
        class LessThanOrEqualsOperation implements ILessThanOrEqualsOperation {

            /**
             * Constructs a new LessThanOrEqualsOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.ILessThanOrEqualsOperation);

            /** LessThanOrEqualsOperation a. */
            public a?: (Formula.Operation|null);

            /** LessThanOrEqualsOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new LessThanOrEqualsOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LessThanOrEqualsOperation instance
             */
            public static create(properties?: Formula.Operation.ILessThanOrEqualsOperation): Formula.Operation.LessThanOrEqualsOperation;

            /**
             * Encodes the specified LessThanOrEqualsOperation message. Does not implicitly {@link Formula.Operation.LessThanOrEqualsOperation.verify|verify} messages.
             * @param message LessThanOrEqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.LessThanOrEqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LessThanOrEqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.LessThanOrEqualsOperation.verify|verify} messages.
             * @param message LessThanOrEqualsOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.LessThanOrEqualsOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LessThanOrEqualsOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LessThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.LessThanOrEqualsOperation;

            /**
             * Decodes a LessThanOrEqualsOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LessThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.LessThanOrEqualsOperation;

            /**
             * Verifies a LessThanOrEqualsOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LessThanOrEqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LessThanOrEqualsOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.LessThanOrEqualsOperation;

            /**
             * Creates a plain object from a LessThanOrEqualsOperation message. Also converts values to other types if specified.
             * @param message LessThanOrEqualsOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.LessThanOrEqualsOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LessThanOrEqualsOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LessThanOrEqualsOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AndOperation. */
        interface IAndOperation {

            /** AndOperation a */
            a?: (Formula.Operation|null);

            /** AndOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents an AndOperation. */
        class AndOperation implements IAndOperation {

            /**
             * Constructs a new AndOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IAndOperation);

            /** AndOperation a. */
            public a?: (Formula.Operation|null);

            /** AndOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new AndOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AndOperation instance
             */
            public static create(properties?: Formula.Operation.IAndOperation): Formula.Operation.AndOperation;

            /**
             * Encodes the specified AndOperation message. Does not implicitly {@link Formula.Operation.AndOperation.verify|verify} messages.
             * @param message AndOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.AndOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AndOperation message, length delimited. Does not implicitly {@link Formula.Operation.AndOperation.verify|verify} messages.
             * @param message AndOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.AndOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AndOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AndOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.AndOperation;

            /**
             * Decodes an AndOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AndOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.AndOperation;

            /**
             * Verifies an AndOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AndOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AndOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.AndOperation;

            /**
             * Creates a plain object from an AndOperation message. Also converts values to other types if specified.
             * @param message AndOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.AndOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AndOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AndOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OrOperation. */
        interface IOrOperation {

            /** OrOperation a */
            a?: (Formula.Operation|null);

            /** OrOperation b */
            b?: (Formula.Operation|null);
        }

        /** Represents an OrOperation. */
        class OrOperation implements IOrOperation {

            /**
             * Constructs a new OrOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IOrOperation);

            /** OrOperation a. */
            public a?: (Formula.Operation|null);

            /** OrOperation b. */
            public b?: (Formula.Operation|null);

            /**
             * Creates a new OrOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrOperation instance
             */
            public static create(properties?: Formula.Operation.IOrOperation): Formula.Operation.OrOperation;

            /**
             * Encodes the specified OrOperation message. Does not implicitly {@link Formula.Operation.OrOperation.verify|verify} messages.
             * @param message OrOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.OrOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrOperation message, length delimited. Does not implicitly {@link Formula.Operation.OrOperation.verify|verify} messages.
             * @param message OrOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.OrOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.OrOperation;

            /**
             * Decodes an OrOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.OrOperation;

            /**
             * Verifies an OrOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.OrOperation;

            /**
             * Creates a plain object from an OrOperation message. Also converts values to other types if specified.
             * @param message OrOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.OrOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NotOperation. */
        interface INotOperation {

            /** NotOperation a */
            a?: (Formula.Operation|null);
        }

        /** Represents a NotOperation. */
        class NotOperation implements INotOperation {

            /**
             * Constructs a new NotOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.INotOperation);

            /** NotOperation a. */
            public a?: (Formula.Operation|null);

            /**
             * Creates a new NotOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotOperation instance
             */
            public static create(properties?: Formula.Operation.INotOperation): Formula.Operation.NotOperation;

            /**
             * Encodes the specified NotOperation message. Does not implicitly {@link Formula.Operation.NotOperation.verify|verify} messages.
             * @param message NotOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.NotOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotOperation message, length delimited. Does not implicitly {@link Formula.Operation.NotOperation.verify|verify} messages.
             * @param message NotOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.NotOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.NotOperation;

            /**
             * Decodes a NotOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.NotOperation;

            /**
             * Verifies a NotOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotOperation
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.NotOperation;

            /**
             * Creates a plain object from a NotOperation message. Also converts values to other types if specified.
             * @param message NotOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.NotOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NotOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AbsFunction. */
        interface IAbsFunction {

            /** AbsFunction param */
            param?: (Formula.Operation|null);
        }

        /** Represents an AbsFunction. */
        class AbsFunction implements IAbsFunction {

            /**
             * Constructs a new AbsFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IAbsFunction);

            /** AbsFunction param. */
            public param?: (Formula.Operation|null);

            /**
             * Creates a new AbsFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AbsFunction instance
             */
            public static create(properties?: Formula.Operation.IAbsFunction): Formula.Operation.AbsFunction;

            /**
             * Encodes the specified AbsFunction message. Does not implicitly {@link Formula.Operation.AbsFunction.verify|verify} messages.
             * @param message AbsFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.AbsFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AbsFunction message, length delimited. Does not implicitly {@link Formula.Operation.AbsFunction.verify|verify} messages.
             * @param message AbsFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.AbsFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AbsFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AbsFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.AbsFunction;

            /**
             * Decodes an AbsFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AbsFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.AbsFunction;

            /**
             * Verifies an AbsFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AbsFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AbsFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.AbsFunction;

            /**
             * Creates a plain object from an AbsFunction message. Also converts values to other types if specified.
             * @param message AbsFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.AbsFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AbsFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AbsFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MinFunction. */
        interface IMinFunction {

            /** MinFunction param */
            param?: (Formula.Operation|null);
        }

        /** Represents a MinFunction. */
        class MinFunction implements IMinFunction {

            /**
             * Constructs a new MinFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IMinFunction);

            /** MinFunction param. */
            public param?: (Formula.Operation|null);

            /**
             * Creates a new MinFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MinFunction instance
             */
            public static create(properties?: Formula.Operation.IMinFunction): Formula.Operation.MinFunction;

            /**
             * Encodes the specified MinFunction message. Does not implicitly {@link Formula.Operation.MinFunction.verify|verify} messages.
             * @param message MinFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.MinFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MinFunction message, length delimited. Does not implicitly {@link Formula.Operation.MinFunction.verify|verify} messages.
             * @param message MinFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.MinFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MinFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MinFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.MinFunction;

            /**
             * Decodes a MinFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MinFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.MinFunction;

            /**
             * Verifies a MinFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MinFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MinFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.MinFunction;

            /**
             * Creates a plain object from a MinFunction message. Also converts values to other types if specified.
             * @param message MinFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.MinFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MinFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MinFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MaxFunction. */
        interface IMaxFunction {

            /** MaxFunction param */
            param?: (Formula.Operation|null);
        }

        /** Represents a MaxFunction. */
        class MaxFunction implements IMaxFunction {

            /**
             * Constructs a new MaxFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IMaxFunction);

            /** MaxFunction param. */
            public param?: (Formula.Operation|null);

            /**
             * Creates a new MaxFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MaxFunction instance
             */
            public static create(properties?: Formula.Operation.IMaxFunction): Formula.Operation.MaxFunction;

            /**
             * Encodes the specified MaxFunction message. Does not implicitly {@link Formula.Operation.MaxFunction.verify|verify} messages.
             * @param message MaxFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.MaxFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MaxFunction message, length delimited. Does not implicitly {@link Formula.Operation.MaxFunction.verify|verify} messages.
             * @param message MaxFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.MaxFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MaxFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MaxFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.MaxFunction;

            /**
             * Decodes a MaxFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MaxFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.MaxFunction;

            /**
             * Verifies a MaxFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MaxFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MaxFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.MaxFunction;

            /**
             * Creates a plain object from a MaxFunction message. Also converts values to other types if specified.
             * @param message MaxFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.MaxFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MaxFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MaxFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloorFunction. */
        interface IFloorFunction {

            /** FloorFunction param */
            param?: (Formula.Operation|null);
        }

        /** Represents a FloorFunction. */
        class FloorFunction implements IFloorFunction {

            /**
             * Constructs a new FloorFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IFloorFunction);

            /** FloorFunction param. */
            public param?: (Formula.Operation|null);

            /**
             * Creates a new FloorFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloorFunction instance
             */
            public static create(properties?: Formula.Operation.IFloorFunction): Formula.Operation.FloorFunction;

            /**
             * Encodes the specified FloorFunction message. Does not implicitly {@link Formula.Operation.FloorFunction.verify|verify} messages.
             * @param message FloorFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.FloorFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloorFunction message, length delimited. Does not implicitly {@link Formula.Operation.FloorFunction.verify|verify} messages.
             * @param message FloorFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.FloorFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloorFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloorFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.FloorFunction;

            /**
             * Decodes a FloorFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloorFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.FloorFunction;

            /**
             * Verifies a FloorFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloorFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloorFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.FloorFunction;

            /**
             * Creates a plain object from a FloorFunction message. Also converts values to other types if specified.
             * @param message FloorFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.FloorFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloorFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloorFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CeilFunction. */
        interface ICeilFunction {

            /** CeilFunction param */
            param?: (Formula.Operation|null);
        }

        /** Represents a CeilFunction. */
        class CeilFunction implements ICeilFunction {

            /**
             * Constructs a new CeilFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.ICeilFunction);

            /** CeilFunction param. */
            public param?: (Formula.Operation|null);

            /**
             * Creates a new CeilFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CeilFunction instance
             */
            public static create(properties?: Formula.Operation.ICeilFunction): Formula.Operation.CeilFunction;

            /**
             * Encodes the specified CeilFunction message. Does not implicitly {@link Formula.Operation.CeilFunction.verify|verify} messages.
             * @param message CeilFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.CeilFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CeilFunction message, length delimited. Does not implicitly {@link Formula.Operation.CeilFunction.verify|verify} messages.
             * @param message CeilFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.CeilFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CeilFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CeilFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.CeilFunction;

            /**
             * Decodes a CeilFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CeilFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.CeilFunction;

            /**
             * Verifies a CeilFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CeilFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CeilFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.CeilFunction;

            /**
             * Creates a plain object from a CeilFunction message. Also converts values to other types if specified.
             * @param message CeilFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.CeilFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CeilFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CeilFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SignedFunction. */
        interface ISignedFunction {

            /** SignedFunction param */
            param?: (Formula.Operation|null);
        }

        /** Represents a SignedFunction. */
        class SignedFunction implements ISignedFunction {

            /**
             * Constructs a new SignedFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.ISignedFunction);

            /** SignedFunction param. */
            public param?: (Formula.Operation|null);

            /**
             * Creates a new SignedFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedFunction instance
             */
            public static create(properties?: Formula.Operation.ISignedFunction): Formula.Operation.SignedFunction;

            /**
             * Encodes the specified SignedFunction message. Does not implicitly {@link Formula.Operation.SignedFunction.verify|verify} messages.
             * @param message SignedFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.SignedFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignedFunction message, length delimited. Does not implicitly {@link Formula.Operation.SignedFunction.verify|verify} messages.
             * @param message SignedFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.SignedFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignedFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.SignedFunction;

            /**
             * Decodes a SignedFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignedFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.SignedFunction;

            /**
             * Verifies a SignedFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignedFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignedFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.SignedFunction;

            /**
             * Creates a plain object from a SignedFunction message. Also converts values to other types if specified.
             * @param message SignedFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.SignedFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignedFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SignedFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ConcatFunction. */
        interface IConcatFunction {

            /** ConcatFunction params */
            params?: (Formula.Operation[]|null);
        }

        /** Represents a ConcatFunction. */
        class ConcatFunction implements IConcatFunction {

            /**
             * Constructs a new ConcatFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IConcatFunction);

            /** ConcatFunction params. */
            public params: Formula.Operation[];

            /**
             * Creates a new ConcatFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConcatFunction instance
             */
            public static create(properties?: Formula.Operation.IConcatFunction): Formula.Operation.ConcatFunction;

            /**
             * Encodes the specified ConcatFunction message. Does not implicitly {@link Formula.Operation.ConcatFunction.verify|verify} messages.
             * @param message ConcatFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.ConcatFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConcatFunction message, length delimited. Does not implicitly {@link Formula.Operation.ConcatFunction.verify|verify} messages.
             * @param message ConcatFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.ConcatFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConcatFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConcatFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.ConcatFunction;

            /**
             * Decodes a ConcatFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConcatFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.ConcatFunction;

            /**
             * Verifies a ConcatFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConcatFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConcatFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.ConcatFunction;

            /**
             * Creates a plain object from a ConcatFunction message. Also converts values to other types if specified.
             * @param message ConcatFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.ConcatFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConcatFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConcatFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IfFunction. */
        interface IIfFunction {

            /** IfFunction condition */
            condition?: (Formula.Operation|null);

            /** IfFunction whenTrue */
            whenTrue?: (Formula.Operation|null);

            /** IfFunction whenFalse */
            whenFalse?: (Formula.Operation|null);
        }

        /** Represents an IfFunction. */
        class IfFunction implements IIfFunction {

            /**
             * Constructs a new IfFunction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Formula.Operation.IIfFunction);

            /** IfFunction condition. */
            public condition?: (Formula.Operation|null);

            /** IfFunction whenTrue. */
            public whenTrue?: (Formula.Operation|null);

            /** IfFunction whenFalse. */
            public whenFalse?: (Formula.Operation|null);

            /**
             * Creates a new IfFunction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IfFunction instance
             */
            public static create(properties?: Formula.Operation.IIfFunction): Formula.Operation.IfFunction;

            /**
             * Encodes the specified IfFunction message. Does not implicitly {@link Formula.Operation.IfFunction.verify|verify} messages.
             * @param message IfFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Formula.Operation.IfFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IfFunction message, length delimited. Does not implicitly {@link Formula.Operation.IfFunction.verify|verify} messages.
             * @param message IfFunction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Formula.Operation.IfFunction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IfFunction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IfFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Formula.Operation.IfFunction;

            /**
             * Decodes an IfFunction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IfFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Formula.Operation.IfFunction;

            /**
             * Verifies an IfFunction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IfFunction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IfFunction
             */
            public static fromObject(object: { [k: string]: any }): Formula.Operation.IfFunction;

            /**
             * Creates a plain object from an IfFunction message. Also converts values to other types if specified.
             * @param message IfFunction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Formula.Operation.IfFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IfFunction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IfFunction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Properties of a Die. */
export interface IDie {

    /** Die count */
    count?: (number|null);

    /** Die sides */
    sides?: (number|null);
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
