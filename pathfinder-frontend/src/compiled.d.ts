import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace v2. */
export namespace v2 {

    /** Properties of a RaceDatabaseDbo. */
    interface IRaceDatabaseDbo {

        /** RaceDatabaseDbo raceSummaries */
        raceSummaries?: (v2.RaceSummaryDbo[]|null);
    }

    /** Represents a RaceDatabaseDbo. */
    class RaceDatabaseDbo implements IRaceDatabaseDbo {

        /**
         * Constructs a new RaceDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IRaceDatabaseDbo);

        /** RaceDatabaseDbo raceSummaries. */
        public raceSummaries: v2.RaceSummaryDbo[];

        /**
         * Creates a new RaceDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceDatabaseDbo instance
         */
        public static create(properties?: v2.IRaceDatabaseDbo): v2.RaceDatabaseDbo;

        /**
         * Encodes the specified RaceDatabaseDbo message. Does not implicitly {@link v2.RaceDatabaseDbo.verify|verify} messages.
         * @param message RaceDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.RaceDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RaceDatabaseDbo message, length delimited. Does not implicitly {@link v2.RaceDatabaseDbo.verify|verify} messages.
         * @param message RaceDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.RaceDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.RaceDatabaseDbo;

        /**
         * Decodes a RaceDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RaceDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.RaceDatabaseDbo;

        /**
         * Verifies a RaceDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RaceDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RaceDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.RaceDatabaseDbo;

        /**
         * Creates a plain object from a RaceDatabaseDbo message. Also converts values to other types if specified.
         * @param message RaceDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.RaceDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RaceDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RaceDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RaceSummaryDbo. */
    interface IRaceSummaryDbo {

        /** RaceSummaryDbo id */
        id?: (string|null);

        /** RaceSummaryDbo name */
        name?: (string|null);

        /** RaceSummaryDbo size */
        size?: (number|null);

        /** RaceSummaryDbo type */
        type?: (string|null);

        /** RaceSummaryDbo speed */
        speed?: (number|null);

        /** RaceSummaryDbo languages */
        languages?: (string[]|null);

        /** RaceSummaryDbo traits */
        traits?: (string[]|null);
    }

    /** Represents a RaceSummaryDbo. */
    class RaceSummaryDbo implements IRaceSummaryDbo {

        /**
         * Constructs a new RaceSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IRaceSummaryDbo);

        /** RaceSummaryDbo id. */
        public id: string;

        /** RaceSummaryDbo name. */
        public name: string;

        /** RaceSummaryDbo size. */
        public size: number;

        /** RaceSummaryDbo type. */
        public type: string;

        /** RaceSummaryDbo speed. */
        public speed: number;

        /** RaceSummaryDbo languages. */
        public languages: string[];

        /** RaceSummaryDbo traits. */
        public traits: string[];

        /**
         * Creates a new RaceSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceSummaryDbo instance
         */
        public static create(properties?: v2.IRaceSummaryDbo): v2.RaceSummaryDbo;

        /**
         * Encodes the specified RaceSummaryDbo message. Does not implicitly {@link v2.RaceSummaryDbo.verify|verify} messages.
         * @param message RaceSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.RaceSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RaceSummaryDbo message, length delimited. Does not implicitly {@link v2.RaceSummaryDbo.verify|verify} messages.
         * @param message RaceSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.RaceSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.RaceSummaryDbo;

        /**
         * Decodes a RaceSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RaceSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.RaceSummaryDbo;

        /**
         * Verifies a RaceSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RaceSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RaceSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.RaceSummaryDbo;

        /**
         * Creates a plain object from a RaceSummaryDbo message. Also converts values to other types if specified.
         * @param message RaceSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.RaceSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RaceSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RaceSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RaceDataDbo. */
    interface IRaceDataDbo {

        /** RaceDataDbo id */
        id?: (string|null);

        /** RaceDataDbo name */
        name?: (string|null);

        /** RaceDataDbo size */
        size?: (number|null);

        /** RaceDataDbo type */
        type?: (string|null);

        /** RaceDataDbo speed */
        speed?: (number|null);

        /** RaceDataDbo languages */
        languages?: (string[]|null);

        /** RaceDataDbo traits */
        traits?: (string[]|null);
    }

    /** Represents a RaceDataDbo. */
    class RaceDataDbo implements IRaceDataDbo {

        /**
         * Constructs a new RaceDataDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IRaceDataDbo);

        /** RaceDataDbo id. */
        public id: string;

        /** RaceDataDbo name. */
        public name: string;

        /** RaceDataDbo size. */
        public size: number;

        /** RaceDataDbo type. */
        public type: string;

        /** RaceDataDbo speed. */
        public speed: number;

        /** RaceDataDbo languages. */
        public languages: string[];

        /** RaceDataDbo traits. */
        public traits: string[];

        /**
         * Creates a new RaceDataDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceDataDbo instance
         */
        public static create(properties?: v2.IRaceDataDbo): v2.RaceDataDbo;

        /**
         * Encodes the specified RaceDataDbo message. Does not implicitly {@link v2.RaceDataDbo.verify|verify} messages.
         * @param message RaceDataDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.RaceDataDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RaceDataDbo message, length delimited. Does not implicitly {@link v2.RaceDataDbo.verify|verify} messages.
         * @param message RaceDataDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.RaceDataDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceDataDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.RaceDataDbo;

        /**
         * Decodes a RaceDataDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RaceDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.RaceDataDbo;

        /**
         * Verifies a RaceDataDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RaceDataDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RaceDataDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.RaceDataDbo;

        /**
         * Creates a plain object from a RaceDataDbo message. Also converts values to other types if specified.
         * @param message RaceDataDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.RaceDataDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RaceDataDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RaceDataDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AbilityDatabaseDbo. */
    interface IAbilityDatabaseDbo {

        /** AbilityDatabaseDbo abilitySummaries */
        abilitySummaries?: (v2.AbilitySummaryDbo[]|null);
    }

    /** Represents an AbilityDatabaseDbo. */
    class AbilityDatabaseDbo implements IAbilityDatabaseDbo {

        /**
         * Constructs a new AbilityDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IAbilityDatabaseDbo);

        /** AbilityDatabaseDbo abilitySummaries. */
        public abilitySummaries: v2.AbilitySummaryDbo[];

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

        /** AbilitySummaryDbo prerequisitesFormula */
        prerequisitesFormula?: (string|null);

        /** AbilitySummaryDbo benefit */
        benefit?: (string|null);
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

        /** AbilitySummaryDbo prerequisitesFormula. */
        public prerequisitesFormula: string;

        /** AbilitySummaryDbo benefit. */
        public benefit: string;

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

        /** AbilityDataDbo prerequisitesFormula */
        prerequisitesFormula?: (string|null);

        /** AbilityDataDbo description */
        description?: (string|null);

        /** AbilityDataDbo benefit */
        benefit?: (string|null);
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

        /** AbilityDataDbo prerequisitesFormula. */
        public prerequisitesFormula: string;

        /** AbilityDataDbo description. */
        public description: string;

        /** AbilityDataDbo benefit. */
        public benefit: string;

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

    /** Properties of a CharacterEffectDbo. */
    interface ICharacterEffectDbo {

        /** CharacterEffectDbo level */
        level?: (number|null);

        /** CharacterEffectDbo modifyFeature */
        modifyFeature?: (v2.CharacterEffectDbo.ModifyFeatureEffect|null);

        /** CharacterEffectDbo setFeature */
        setFeature?: (v2.CharacterEffectDbo.SetFeatureEffect|null);

        /** CharacterEffectDbo grantChoice */
        grantChoice?: (v2.CharacterEffectDbo.GrantChoiceEffect|null);

        /** CharacterEffectDbo grantAbility */
        grantAbility?: (v2.CharacterEffectDbo.GrantAbilityEffect|null);

        /** CharacterEffectDbo grantFeat */
        grantFeat?: (v2.CharacterEffectDbo.GrantFeatEffect|null);
    }

    /** Represents a CharacterEffectDbo. */
    class CharacterEffectDbo implements ICharacterEffectDbo {

        /**
         * Constructs a new CharacterEffectDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.ICharacterEffectDbo);

        /** CharacterEffectDbo level. */
        public level: number;

        /** CharacterEffectDbo modifyFeature. */
        public modifyFeature?: (v2.CharacterEffectDbo.ModifyFeatureEffect|null);

        /** CharacterEffectDbo setFeature. */
        public setFeature?: (v2.CharacterEffectDbo.SetFeatureEffect|null);

        /** CharacterEffectDbo grantChoice. */
        public grantChoice?: (v2.CharacterEffectDbo.GrantChoiceEffect|null);

        /** CharacterEffectDbo grantAbility. */
        public grantAbility?: (v2.CharacterEffectDbo.GrantAbilityEffect|null);

        /** CharacterEffectDbo grantFeat. */
        public grantFeat?: (v2.CharacterEffectDbo.GrantFeatEffect|null);

        /** CharacterEffectDbo effect. */
        public effect?: ("modifyFeature"|"setFeature"|"grantChoice"|"grantAbility"|"grantFeat");

        /**
         * Creates a new CharacterEffectDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CharacterEffectDbo instance
         */
        public static create(properties?: v2.ICharacterEffectDbo): v2.CharacterEffectDbo;

        /**
         * Encodes the specified CharacterEffectDbo message. Does not implicitly {@link v2.CharacterEffectDbo.verify|verify} messages.
         * @param message CharacterEffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.CharacterEffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CharacterEffectDbo message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.verify|verify} messages.
         * @param message CharacterEffectDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.CharacterEffectDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CharacterEffectDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CharacterEffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterEffectDbo;

        /**
         * Decodes a CharacterEffectDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CharacterEffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterEffectDbo;

        /**
         * Verifies a CharacterEffectDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CharacterEffectDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CharacterEffectDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.CharacterEffectDbo;

        /**
         * Creates a plain object from a CharacterEffectDbo message. Also converts values to other types if specified.
         * @param message CharacterEffectDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.CharacterEffectDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CharacterEffectDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CharacterEffectDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CharacterEffectDbo {

        /** Properties of a ModifyFeatureEffect. */
        interface IModifyFeatureEffect {

            /** ModifyFeatureEffect featureId */
            featureId?: (string|null);

            /** ModifyFeatureEffect delta */
            delta?: (number|null);
        }

        /** Represents a ModifyFeatureEffect. */
        class ModifyFeatureEffect implements IModifyFeatureEffect {

            /**
             * Constructs a new ModifyFeatureEffect.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterEffectDbo.IModifyFeatureEffect);

            /** ModifyFeatureEffect featureId. */
            public featureId: string;

            /** ModifyFeatureEffect delta. */
            public delta: number;

            /**
             * Creates a new ModifyFeatureEffect instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModifyFeatureEffect instance
             */
            public static create(properties?: v2.CharacterEffectDbo.IModifyFeatureEffect): v2.CharacterEffectDbo.ModifyFeatureEffect;

            /**
             * Encodes the specified ModifyFeatureEffect message. Does not implicitly {@link v2.CharacterEffectDbo.ModifyFeatureEffect.verify|verify} messages.
             * @param message ModifyFeatureEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterEffectDbo.ModifyFeatureEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModifyFeatureEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.ModifyFeatureEffect.verify|verify} messages.
             * @param message ModifyFeatureEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterEffectDbo.ModifyFeatureEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModifyFeatureEffect message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModifyFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterEffectDbo.ModifyFeatureEffect;

            /**
             * Decodes a ModifyFeatureEffect message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModifyFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterEffectDbo.ModifyFeatureEffect;

            /**
             * Verifies a ModifyFeatureEffect message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModifyFeatureEffect message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModifyFeatureEffect
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterEffectDbo.ModifyFeatureEffect;

            /**
             * Creates a plain object from a ModifyFeatureEffect message. Also converts values to other types if specified.
             * @param message ModifyFeatureEffect
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterEffectDbo.ModifyFeatureEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModifyFeatureEffect to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ModifyFeatureEffect
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetFeatureEffect. */
        interface ISetFeatureEffect {

            /** SetFeatureEffect featureId */
            featureId?: (string|null);

            /** SetFeatureEffect value */
            value?: (number|null);
        }

        /** Represents a SetFeatureEffect. */
        class SetFeatureEffect implements ISetFeatureEffect {

            /**
             * Constructs a new SetFeatureEffect.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterEffectDbo.ISetFeatureEffect);

            /** SetFeatureEffect featureId. */
            public featureId: string;

            /** SetFeatureEffect value. */
            public value: number;

            /**
             * Creates a new SetFeatureEffect instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetFeatureEffect instance
             */
            public static create(properties?: v2.CharacterEffectDbo.ISetFeatureEffect): v2.CharacterEffectDbo.SetFeatureEffect;

            /**
             * Encodes the specified SetFeatureEffect message. Does not implicitly {@link v2.CharacterEffectDbo.SetFeatureEffect.verify|verify} messages.
             * @param message SetFeatureEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterEffectDbo.SetFeatureEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetFeatureEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.SetFeatureEffect.verify|verify} messages.
             * @param message SetFeatureEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterEffectDbo.SetFeatureEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetFeatureEffect message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterEffectDbo.SetFeatureEffect;

            /**
             * Decodes a SetFeatureEffect message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterEffectDbo.SetFeatureEffect;

            /**
             * Verifies a SetFeatureEffect message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetFeatureEffect message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetFeatureEffect
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterEffectDbo.SetFeatureEffect;

            /**
             * Creates a plain object from a SetFeatureEffect message. Also converts values to other types if specified.
             * @param message SetFeatureEffect
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterEffectDbo.SetFeatureEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetFeatureEffect to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetFeatureEffect
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantChoiceEffect. */
        interface IGrantChoiceEffect {

            /** GrantChoiceEffect choice */
            choice?: (v2.CharacterChoiceDbo|null);
        }

        /** Represents a GrantChoiceEffect. */
        class GrantChoiceEffect implements IGrantChoiceEffect {

            /**
             * Constructs a new GrantChoiceEffect.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterEffectDbo.IGrantChoiceEffect);

            /** GrantChoiceEffect choice. */
            public choice?: (v2.CharacterChoiceDbo|null);

            /**
             * Creates a new GrantChoiceEffect instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantChoiceEffect instance
             */
            public static create(properties?: v2.CharacterEffectDbo.IGrantChoiceEffect): v2.CharacterEffectDbo.GrantChoiceEffect;

            /**
             * Encodes the specified GrantChoiceEffect message. Does not implicitly {@link v2.CharacterEffectDbo.GrantChoiceEffect.verify|verify} messages.
             * @param message GrantChoiceEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterEffectDbo.GrantChoiceEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantChoiceEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.GrantChoiceEffect.verify|verify} messages.
             * @param message GrantChoiceEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterEffectDbo.GrantChoiceEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantChoiceEffect message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantChoiceEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterEffectDbo.GrantChoiceEffect;

            /**
             * Decodes a GrantChoiceEffect message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantChoiceEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterEffectDbo.GrantChoiceEffect;

            /**
             * Verifies a GrantChoiceEffect message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantChoiceEffect message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantChoiceEffect
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterEffectDbo.GrantChoiceEffect;

            /**
             * Creates a plain object from a GrantChoiceEffect message. Also converts values to other types if specified.
             * @param message GrantChoiceEffect
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterEffectDbo.GrantChoiceEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantChoiceEffect to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantChoiceEffect
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantAbilityEffect. */
        interface IGrantAbilityEffect {

            /** GrantAbilityEffect abilityId */
            abilityId?: (string|null);
        }

        /** Represents a GrantAbilityEffect. */
        class GrantAbilityEffect implements IGrantAbilityEffect {

            /**
             * Constructs a new GrantAbilityEffect.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterEffectDbo.IGrantAbilityEffect);

            /** GrantAbilityEffect abilityId. */
            public abilityId: string;

            /**
             * Creates a new GrantAbilityEffect instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantAbilityEffect instance
             */
            public static create(properties?: v2.CharacterEffectDbo.IGrantAbilityEffect): v2.CharacterEffectDbo.GrantAbilityEffect;

            /**
             * Encodes the specified GrantAbilityEffect message. Does not implicitly {@link v2.CharacterEffectDbo.GrantAbilityEffect.verify|verify} messages.
             * @param message GrantAbilityEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterEffectDbo.GrantAbilityEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantAbilityEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.GrantAbilityEffect.verify|verify} messages.
             * @param message GrantAbilityEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterEffectDbo.GrantAbilityEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantAbilityEffect message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantAbilityEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterEffectDbo.GrantAbilityEffect;

            /**
             * Decodes a GrantAbilityEffect message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantAbilityEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterEffectDbo.GrantAbilityEffect;

            /**
             * Verifies a GrantAbilityEffect message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantAbilityEffect message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantAbilityEffect
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterEffectDbo.GrantAbilityEffect;

            /**
             * Creates a plain object from a GrantAbilityEffect message. Also converts values to other types if specified.
             * @param message GrantAbilityEffect
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterEffectDbo.GrantAbilityEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantAbilityEffect to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantAbilityEffect
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantFeatEffect. */
        interface IGrantFeatEffect {

            /** GrantFeatEffect featId */
            featId?: (string|null);
        }

        /** Represents a GrantFeatEffect. */
        class GrantFeatEffect implements IGrantFeatEffect {

            /**
             * Constructs a new GrantFeatEffect.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterEffectDbo.IGrantFeatEffect);

            /** GrantFeatEffect featId. */
            public featId: string;

            /**
             * Creates a new GrantFeatEffect instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantFeatEffect instance
             */
            public static create(properties?: v2.CharacterEffectDbo.IGrantFeatEffect): v2.CharacterEffectDbo.GrantFeatEffect;

            /**
             * Encodes the specified GrantFeatEffect message. Does not implicitly {@link v2.CharacterEffectDbo.GrantFeatEffect.verify|verify} messages.
             * @param message GrantFeatEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterEffectDbo.GrantFeatEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantFeatEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.GrantFeatEffect.verify|verify} messages.
             * @param message GrantFeatEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterEffectDbo.GrantFeatEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantFeatEffect message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantFeatEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterEffectDbo.GrantFeatEffect;

            /**
             * Decodes a GrantFeatEffect message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantFeatEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterEffectDbo.GrantFeatEffect;

            /**
             * Verifies a GrantFeatEffect message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantFeatEffect message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantFeatEffect
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterEffectDbo.GrantFeatEffect;

            /**
             * Creates a plain object from a GrantFeatEffect message. Also converts values to other types if specified.
             * @param message GrantFeatEffect
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterEffectDbo.GrantFeatEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantFeatEffect to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantFeatEffect
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SpellDatabaseDbo. */
    interface ISpellDatabaseDbo {

        /** SpellDatabaseDbo spellSummaries */
        spellSummaries?: (v2.SpellSummaryDbo[]|null);
    }

    /** Represents a SpellDatabaseDbo. */
    class SpellDatabaseDbo implements ISpellDatabaseDbo {

        /**
         * Constructs a new SpellDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.ISpellDatabaseDbo);

        /** SpellDatabaseDbo spellSummaries. */
        public spellSummaries: v2.SpellSummaryDbo[];

        /**
         * Creates a new SpellDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpellDatabaseDbo instance
         */
        public static create(properties?: v2.ISpellDatabaseDbo): v2.SpellDatabaseDbo;

        /**
         * Encodes the specified SpellDatabaseDbo message. Does not implicitly {@link v2.SpellDatabaseDbo.verify|verify} messages.
         * @param message SpellDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.SpellDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpellDatabaseDbo message, length delimited. Does not implicitly {@link v2.SpellDatabaseDbo.verify|verify} messages.
         * @param message SpellDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.SpellDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpellDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpellDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.SpellDatabaseDbo;

        /**
         * Decodes a SpellDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpellDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.SpellDatabaseDbo;

        /**
         * Verifies a SpellDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpellDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpellDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.SpellDatabaseDbo;

        /**
         * Creates a plain object from a SpellDatabaseDbo message. Also converts values to other types if specified.
         * @param message SpellDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.SpellDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpellDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SpellDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SpellSummaryDbo. */
    interface ISpellSummaryDbo {

        /** SpellSummaryDbo id */
        id?: (string|null);

        /** SpellSummaryDbo name */
        name?: (string|null);

        /** SpellSummaryDbo type */
        type?: (v2.AbilityTypeDbo|null);

        /** SpellSummaryDbo prerequisitesFormula */
        prerequisitesFormula?: (string|null);

        /** SpellSummaryDbo level */
        level?: (v2.SpellLevelDbo[]|null);
    }

    /** Represents a SpellSummaryDbo. */
    class SpellSummaryDbo implements ISpellSummaryDbo {

        /**
         * Constructs a new SpellSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.ISpellSummaryDbo);

        /** SpellSummaryDbo id. */
        public id: string;

        /** SpellSummaryDbo name. */
        public name: string;

        /** SpellSummaryDbo type. */
        public type: v2.AbilityTypeDbo;

        /** SpellSummaryDbo prerequisitesFormula. */
        public prerequisitesFormula: string;

        /** SpellSummaryDbo level. */
        public level: v2.SpellLevelDbo[];

        /**
         * Creates a new SpellSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpellSummaryDbo instance
         */
        public static create(properties?: v2.ISpellSummaryDbo): v2.SpellSummaryDbo;

        /**
         * Encodes the specified SpellSummaryDbo message. Does not implicitly {@link v2.SpellSummaryDbo.verify|verify} messages.
         * @param message SpellSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.SpellSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpellSummaryDbo message, length delimited. Does not implicitly {@link v2.SpellSummaryDbo.verify|verify} messages.
         * @param message SpellSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.SpellSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpellSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpellSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.SpellSummaryDbo;

        /**
         * Decodes a SpellSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpellSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.SpellSummaryDbo;

        /**
         * Verifies a SpellSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpellSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpellSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.SpellSummaryDbo;

        /**
         * Creates a plain object from a SpellSummaryDbo message. Also converts values to other types if specified.
         * @param message SpellSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.SpellSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpellSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SpellSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SpellDataDbo. */
    interface ISpellDataDbo {

        /** SpellDataDbo id */
        id?: (string|null);

        /** SpellDataDbo name */
        name?: (string|null);

        /** SpellDataDbo type */
        type?: (v2.AbilityTypeDbo|null);

        /** SpellDataDbo school */
        school?: (string|null);

        /** SpellDataDbo castingTime */
        castingTime?: (ActionTypeDbo|null);

        /** SpellDataDbo range */
        range?: (RangeDbo|null);

        /** SpellDataDbo area */
        area?: (string|null);

        /** SpellDataDbo targets */
        targets?: (string|null);

        /** SpellDataDbo effect */
        effect?: (string|null);

        /** SpellDataDbo duration */
        duration?: (string|null);

        /** SpellDataDbo savingThrow */
        savingThrow?: (v2.SavingThrowDbo|null);

        /** SpellDataDbo description */
        description?: (string|null);

        /** SpellDataDbo notes */
        notes?: (string|null);

        /** SpellDataDbo prerequisitesFormula */
        prerequisitesFormula?: (string|null);

        /** SpellDataDbo level */
        level?: (v2.SpellLevelDbo[]|null);
    }

    /** Represents a SpellDataDbo. */
    class SpellDataDbo implements ISpellDataDbo {

        /**
         * Constructs a new SpellDataDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.ISpellDataDbo);

        /** SpellDataDbo id. */
        public id: string;

        /** SpellDataDbo name. */
        public name: string;

        /** SpellDataDbo type. */
        public type: v2.AbilityTypeDbo;

        /** SpellDataDbo school. */
        public school: string;

        /** SpellDataDbo castingTime. */
        public castingTime: ActionTypeDbo;

        /** SpellDataDbo range. */
        public range?: (RangeDbo|null);

        /** SpellDataDbo area. */
        public area: string;

        /** SpellDataDbo targets. */
        public targets: string;

        /** SpellDataDbo effect. */
        public effect: string;

        /** SpellDataDbo duration. */
        public duration: string;

        /** SpellDataDbo savingThrow. */
        public savingThrow?: (v2.SavingThrowDbo|null);

        /** SpellDataDbo description. */
        public description: string;

        /** SpellDataDbo notes. */
        public notes: string;

        /** SpellDataDbo prerequisitesFormula. */
        public prerequisitesFormula: string;

        /** SpellDataDbo level. */
        public level: v2.SpellLevelDbo[];

        /**
         * Creates a new SpellDataDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpellDataDbo instance
         */
        public static create(properties?: v2.ISpellDataDbo): v2.SpellDataDbo;

        /**
         * Encodes the specified SpellDataDbo message. Does not implicitly {@link v2.SpellDataDbo.verify|verify} messages.
         * @param message SpellDataDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.SpellDataDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpellDataDbo message, length delimited. Does not implicitly {@link v2.SpellDataDbo.verify|verify} messages.
         * @param message SpellDataDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.SpellDataDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpellDataDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpellDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.SpellDataDbo;

        /**
         * Decodes a SpellDataDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpellDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.SpellDataDbo;

        /**
         * Verifies a SpellDataDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpellDataDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpellDataDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.SpellDataDbo;

        /**
         * Creates a plain object from a SpellDataDbo message. Also converts values to other types if specified.
         * @param message SpellDataDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.SpellDataDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpellDataDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SpellDataDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SpellLevelDbo. */
    interface ISpellLevelDbo {

        /** SpellLevelDbo classId */
        classId?: (string|null);

        /** SpellLevelDbo level */
        level?: (number|null);
    }

    /** Represents a SpellLevelDbo. */
    class SpellLevelDbo implements ISpellLevelDbo {

        /**
         * Constructs a new SpellLevelDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.ISpellLevelDbo);

        /** SpellLevelDbo classId. */
        public classId: string;

        /** SpellLevelDbo level. */
        public level: number;

        /**
         * Creates a new SpellLevelDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpellLevelDbo instance
         */
        public static create(properties?: v2.ISpellLevelDbo): v2.SpellLevelDbo;

        /**
         * Encodes the specified SpellLevelDbo message. Does not implicitly {@link v2.SpellLevelDbo.verify|verify} messages.
         * @param message SpellLevelDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.SpellLevelDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpellLevelDbo message, length delimited. Does not implicitly {@link v2.SpellLevelDbo.verify|verify} messages.
         * @param message SpellLevelDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.SpellLevelDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpellLevelDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpellLevelDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.SpellLevelDbo;

        /**
         * Decodes a SpellLevelDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpellLevelDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.SpellLevelDbo;

        /**
         * Verifies a SpellLevelDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpellLevelDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpellLevelDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.SpellLevelDbo;

        /**
         * Creates a plain object from a SpellLevelDbo message. Also converts values to other types if specified.
         * @param message SpellLevelDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.SpellLevelDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpellLevelDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SpellLevelDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SavingThrowDbo. */
    interface ISavingThrowDbo {

        /** SavingThrowDbo ability */
        ability?: (AbilityScoreDbo|null);

        /** SavingThrowDbo dc */
        dc?: (number|null);
    }

    /** Represents a SavingThrowDbo. */
    class SavingThrowDbo implements ISavingThrowDbo {

        /**
         * Constructs a new SavingThrowDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.ISavingThrowDbo);

        /** SavingThrowDbo ability. */
        public ability: AbilityScoreDbo;

        /** SavingThrowDbo dc. */
        public dc: number;

        /**
         * Creates a new SavingThrowDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SavingThrowDbo instance
         */
        public static create(properties?: v2.ISavingThrowDbo): v2.SavingThrowDbo;

        /**
         * Encodes the specified SavingThrowDbo message. Does not implicitly {@link v2.SavingThrowDbo.verify|verify} messages.
         * @param message SavingThrowDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.SavingThrowDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SavingThrowDbo message, length delimited. Does not implicitly {@link v2.SavingThrowDbo.verify|verify} messages.
         * @param message SavingThrowDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.SavingThrowDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SavingThrowDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SavingThrowDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.SavingThrowDbo;

        /**
         * Decodes a SavingThrowDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SavingThrowDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.SavingThrowDbo;

        /**
         * Verifies a SavingThrowDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SavingThrowDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SavingThrowDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.SavingThrowDbo;

        /**
         * Creates a plain object from a SavingThrowDbo message. Also converts values to other types if specified.
         * @param message SavingThrowDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.SavingThrowDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SavingThrowDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SavingThrowDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SavingThrowDbo {

        /** Type enum. */
        enum Type {
            NEGATES = 0,
            PARTIAL = 1,
            HALF = 2,
            NONE = 3,
            DISBELIEF = 4
        }
    }

    /** Properties of a ClassDatabaseDbo. */
    interface IClassDatabaseDbo {

        /** ClassDatabaseDbo summaries */
        summaries?: (v2.ClassSummaryDbo[]|null);
    }

    /** Represents a ClassDatabaseDbo. */
    class ClassDatabaseDbo implements IClassDatabaseDbo {

        /**
         * Constructs a new ClassDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IClassDatabaseDbo);

        /** ClassDatabaseDbo summaries. */
        public summaries: v2.ClassSummaryDbo[];

        /**
         * Creates a new ClassDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClassDatabaseDbo instance
         */
        public static create(properties?: v2.IClassDatabaseDbo): v2.ClassDatabaseDbo;

        /**
         * Encodes the specified ClassDatabaseDbo message. Does not implicitly {@link v2.ClassDatabaseDbo.verify|verify} messages.
         * @param message ClassDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.ClassDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClassDatabaseDbo message, length delimited. Does not implicitly {@link v2.ClassDatabaseDbo.verify|verify} messages.
         * @param message ClassDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.ClassDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClassDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClassDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.ClassDatabaseDbo;

        /**
         * Decodes a ClassDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClassDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.ClassDatabaseDbo;

        /**
         * Verifies a ClassDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClassDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClassDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.ClassDatabaseDbo;

        /**
         * Creates a plain object from a ClassDatabaseDbo message. Also converts values to other types if specified.
         * @param message ClassDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.ClassDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClassDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClassDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClassSummaryDbo. */
    interface IClassSummaryDbo {

        /** ClassSummaryDbo id */
        id?: (string|null);

        /** ClassSummaryDbo name */
        name?: (string|null);

        /** ClassSummaryDbo category */
        category?: (v2.ClassCategoryDbo|null);
    }

    /** Represents a ClassSummaryDbo. */
    class ClassSummaryDbo implements IClassSummaryDbo {

        /**
         * Constructs a new ClassSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IClassSummaryDbo);

        /** ClassSummaryDbo id. */
        public id: string;

        /** ClassSummaryDbo name. */
        public name: string;

        /** ClassSummaryDbo category. */
        public category: v2.ClassCategoryDbo;

        /**
         * Creates a new ClassSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClassSummaryDbo instance
         */
        public static create(properties?: v2.IClassSummaryDbo): v2.ClassSummaryDbo;

        /**
         * Encodes the specified ClassSummaryDbo message. Does not implicitly {@link v2.ClassSummaryDbo.verify|verify} messages.
         * @param message ClassSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.ClassSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClassSummaryDbo message, length delimited. Does not implicitly {@link v2.ClassSummaryDbo.verify|verify} messages.
         * @param message ClassSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.ClassSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClassSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClassSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.ClassSummaryDbo;

        /**
         * Decodes a ClassSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClassSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.ClassSummaryDbo;

        /**
         * Verifies a ClassSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClassSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClassSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.ClassSummaryDbo;

        /**
         * Creates a plain object from a ClassSummaryDbo message. Also converts values to other types if specified.
         * @param message ClassSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.ClassSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClassSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClassSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClassDetailsDbo. */
    interface IClassDetailsDbo {

        /** ClassDetailsDbo id */
        id?: (string|null);

        /** ClassDetailsDbo name */
        name?: (string|null);

        /** ClassDetailsDbo category */
        category?: (v2.ClassCategoryDbo|null);

        /** ClassDetailsDbo shortDescription */
        shortDescription?: (string|null);

        /** ClassDetailsDbo effects */
        effects?: (v2.CharacterEffectDbo[]|null);
    }

    /** Represents a ClassDetailsDbo. */
    class ClassDetailsDbo implements IClassDetailsDbo {

        /**
         * Constructs a new ClassDetailsDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IClassDetailsDbo);

        /** ClassDetailsDbo id. */
        public id: string;

        /** ClassDetailsDbo name. */
        public name: string;

        /** ClassDetailsDbo category. */
        public category: v2.ClassCategoryDbo;

        /** ClassDetailsDbo shortDescription. */
        public shortDescription: string;

        /** ClassDetailsDbo effects. */
        public effects: v2.CharacterEffectDbo[];

        /**
         * Creates a new ClassDetailsDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClassDetailsDbo instance
         */
        public static create(properties?: v2.IClassDetailsDbo): v2.ClassDetailsDbo;

        /**
         * Encodes the specified ClassDetailsDbo message. Does not implicitly {@link v2.ClassDetailsDbo.verify|verify} messages.
         * @param message ClassDetailsDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.ClassDetailsDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClassDetailsDbo message, length delimited. Does not implicitly {@link v2.ClassDetailsDbo.verify|verify} messages.
         * @param message ClassDetailsDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.ClassDetailsDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClassDetailsDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClassDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.ClassDetailsDbo;

        /**
         * Decodes a ClassDetailsDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClassDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.ClassDetailsDbo;

        /**
         * Verifies a ClassDetailsDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClassDetailsDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClassDetailsDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.ClassDetailsDbo;

        /**
         * Creates a plain object from a ClassDetailsDbo message. Also converts values to other types if specified.
         * @param message ClassDetailsDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.ClassDetailsDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClassDetailsDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClassDetailsDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ClassCategoryDbo enum. */
    enum ClassCategoryDbo {
        UNKNOWN = 0,
        CORE = 1,
        BASE = 2,
        HYBRID = 3,
        UNCHAINED = 4
    }

    /** Properties of a ModifierDatabaseDbo. */
    interface IModifierDatabaseDbo {

        /** ModifierDatabaseDbo databaseId */
        databaseId?: (string|null);

        /** ModifierDatabaseDbo summaries */
        summaries?: (v2.ModifierSummaryDbo[]|null);
    }

    /** Represents a ModifierDatabaseDbo. */
    class ModifierDatabaseDbo implements IModifierDatabaseDbo {

        /**
         * Constructs a new ModifierDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IModifierDatabaseDbo);

        /** ModifierDatabaseDbo databaseId. */
        public databaseId: string;

        /** ModifierDatabaseDbo summaries. */
        public summaries: v2.ModifierSummaryDbo[];

        /**
         * Creates a new ModifierDatabaseDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifierDatabaseDbo instance
         */
        public static create(properties?: v2.IModifierDatabaseDbo): v2.ModifierDatabaseDbo;

        /**
         * Encodes the specified ModifierDatabaseDbo message. Does not implicitly {@link v2.ModifierDatabaseDbo.verify|verify} messages.
         * @param message ModifierDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.ModifierDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifierDatabaseDbo message, length delimited. Does not implicitly {@link v2.ModifierDatabaseDbo.verify|verify} messages.
         * @param message ModifierDatabaseDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.ModifierDatabaseDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifierDatabaseDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifierDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.ModifierDatabaseDbo;

        /**
         * Decodes a ModifierDatabaseDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifierDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.ModifierDatabaseDbo;

        /**
         * Verifies a ModifierDatabaseDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifierDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifierDatabaseDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.ModifierDatabaseDbo;

        /**
         * Creates a plain object from a ModifierDatabaseDbo message. Also converts values to other types if specified.
         * @param message ModifierDatabaseDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.ModifierDatabaseDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifierDatabaseDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ModifierDatabaseDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ModifierSummaryDbo. */
    interface IModifierSummaryDbo {

        /** ModifierSummaryDbo id */
        id?: (string|null);

        /** ModifierSummaryDbo name */
        name?: (string|null);
    }

    /** Represents a ModifierSummaryDbo. */
    class ModifierSummaryDbo implements IModifierSummaryDbo {

        /**
         * Constructs a new ModifierSummaryDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IModifierSummaryDbo);

        /** ModifierSummaryDbo id. */
        public id: string;

        /** ModifierSummaryDbo name. */
        public name: string;

        /**
         * Creates a new ModifierSummaryDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifierSummaryDbo instance
         */
        public static create(properties?: v2.IModifierSummaryDbo): v2.ModifierSummaryDbo;

        /**
         * Encodes the specified ModifierSummaryDbo message. Does not implicitly {@link v2.ModifierSummaryDbo.verify|verify} messages.
         * @param message ModifierSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.ModifierSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifierSummaryDbo message, length delimited. Does not implicitly {@link v2.ModifierSummaryDbo.verify|verify} messages.
         * @param message ModifierSummaryDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.ModifierSummaryDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifierSummaryDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifierSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.ModifierSummaryDbo;

        /**
         * Decodes a ModifierSummaryDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifierSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.ModifierSummaryDbo;

        /**
         * Verifies a ModifierSummaryDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifierSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifierSummaryDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.ModifierSummaryDbo;

        /**
         * Creates a plain object from a ModifierSummaryDbo message. Also converts values to other types if specified.
         * @param message ModifierSummaryDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.ModifierSummaryDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifierSummaryDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ModifierSummaryDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ModifierDetailsDbo. */
    interface IModifierDetailsDbo {

        /** ModifierDetailsDbo id */
        id?: (string|null);

        /** ModifierDetailsDbo name */
        name?: (string|null);

        /** ModifierDetailsDbo effects */
        effects?: (v2.CharacterEffectDbo[]|null);

        /** ModifierDetailsDbo descriptionText */
        descriptionText?: (string|null);

        /** ModifierDetailsDbo effectText */
        effectText?: (string|null);
    }

    /** Represents a ModifierDetailsDbo. */
    class ModifierDetailsDbo implements IModifierDetailsDbo {

        /**
         * Constructs a new ModifierDetailsDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IModifierDetailsDbo);

        /** ModifierDetailsDbo id. */
        public id: string;

        /** ModifierDetailsDbo name. */
        public name: string;

        /** ModifierDetailsDbo effects. */
        public effects: v2.CharacterEffectDbo[];

        /** ModifierDetailsDbo descriptionText. */
        public descriptionText: string;

        /** ModifierDetailsDbo effectText. */
        public effectText: string;

        /**
         * Creates a new ModifierDetailsDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifierDetailsDbo instance
         */
        public static create(properties?: v2.IModifierDetailsDbo): v2.ModifierDetailsDbo;

        /**
         * Encodes the specified ModifierDetailsDbo message. Does not implicitly {@link v2.ModifierDetailsDbo.verify|verify} messages.
         * @param message ModifierDetailsDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.ModifierDetailsDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifierDetailsDbo message, length delimited. Does not implicitly {@link v2.ModifierDetailsDbo.verify|verify} messages.
         * @param message ModifierDetailsDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.ModifierDetailsDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifierDetailsDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifierDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.ModifierDetailsDbo;

        /**
         * Decodes a ModifierDetailsDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifierDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.ModifierDetailsDbo;

        /**
         * Verifies a ModifierDetailsDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifierDetailsDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifierDetailsDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.ModifierDetailsDbo;

        /**
         * Creates a plain object from a ModifierDetailsDbo message. Also converts values to other types if specified.
         * @param message ModifierDetailsDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.ModifierDetailsDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifierDetailsDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ModifierDetailsDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CharacterChoiceDbo. */
    interface ICharacterChoiceDbo {

        /** CharacterChoiceDbo key */
        key?: (string|null);

        /** CharacterChoiceDbo label */
        label?: (string|null);

        /** CharacterChoiceDbo AbilityScoreIncrease */
        AbilityScoreIncrease?: (v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice|null);

        /** CharacterChoiceDbo Feat */
        Feat?: (v2.CharacterChoiceDbo.FeatChoice|null);

        /** CharacterChoiceDbo Ability */
        Ability?: (v2.CharacterChoiceDbo.AbilityChoice|null);

        /** CharacterChoiceDbo Modifier */
        Modifier?: (v2.CharacterChoiceDbo.ModifierChoice|null);
    }

    /** Represents a CharacterChoiceDbo. */
    class CharacterChoiceDbo implements ICharacterChoiceDbo {

        /**
         * Constructs a new CharacterChoiceDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.ICharacterChoiceDbo);

        /** CharacterChoiceDbo key. */
        public key: string;

        /** CharacterChoiceDbo label. */
        public label: string;

        /** CharacterChoiceDbo AbilityScoreIncrease. */
        public AbilityScoreIncrease?: (v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice|null);

        /** CharacterChoiceDbo Feat. */
        public Feat?: (v2.CharacterChoiceDbo.FeatChoice|null);

        /** CharacterChoiceDbo Ability. */
        public Ability?: (v2.CharacterChoiceDbo.AbilityChoice|null);

        /** CharacterChoiceDbo Modifier. */
        public Modifier?: (v2.CharacterChoiceDbo.ModifierChoice|null);

        /** CharacterChoiceDbo effect. */
        public effect?: ("AbilityScoreIncrease"|"Feat"|"Ability"|"Modifier");

        /**
         * Creates a new CharacterChoiceDbo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CharacterChoiceDbo instance
         */
        public static create(properties?: v2.ICharacterChoiceDbo): v2.CharacterChoiceDbo;

        /**
         * Encodes the specified CharacterChoiceDbo message. Does not implicitly {@link v2.CharacterChoiceDbo.verify|verify} messages.
         * @param message CharacterChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: v2.CharacterChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CharacterChoiceDbo message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.verify|verify} messages.
         * @param message CharacterChoiceDbo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: v2.CharacterChoiceDbo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CharacterChoiceDbo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CharacterChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterChoiceDbo;

        /**
         * Decodes a CharacterChoiceDbo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CharacterChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterChoiceDbo;

        /**
         * Verifies a CharacterChoiceDbo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CharacterChoiceDbo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CharacterChoiceDbo
         */
        public static fromObject(object: { [k: string]: any }): v2.CharacterChoiceDbo;

        /**
         * Creates a plain object from a CharacterChoiceDbo message. Also converts values to other types if specified.
         * @param message CharacterChoiceDbo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: v2.CharacterChoiceDbo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CharacterChoiceDbo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CharacterChoiceDbo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CharacterChoiceDbo {

        /** Properties of an AbilityScoreIncreaseChoice. */
        interface IAbilityScoreIncreaseChoice {

            /** AbilityScoreIncreaseChoice delta */
            delta?: (number|null);
        }

        /** Represents an AbilityScoreIncreaseChoice. */
        class AbilityScoreIncreaseChoice implements IAbilityScoreIncreaseChoice {

            /**
             * Constructs a new AbilityScoreIncreaseChoice.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterChoiceDbo.IAbilityScoreIncreaseChoice);

            /** AbilityScoreIncreaseChoice delta. */
            public delta: number;

            /**
             * Creates a new AbilityScoreIncreaseChoice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AbilityScoreIncreaseChoice instance
             */
            public static create(properties?: v2.CharacterChoiceDbo.IAbilityScoreIncreaseChoice): v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice;

            /**
             * Encodes the specified AbilityScoreIncreaseChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.verify|verify} messages.
             * @param message AbilityScoreIncreaseChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AbilityScoreIncreaseChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.verify|verify} messages.
             * @param message AbilityScoreIncreaseChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AbilityScoreIncreaseChoice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AbilityScoreIncreaseChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice;

            /**
             * Decodes an AbilityScoreIncreaseChoice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AbilityScoreIncreaseChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice;

            /**
             * Verifies an AbilityScoreIncreaseChoice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AbilityScoreIncreaseChoice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AbilityScoreIncreaseChoice
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice;

            /**
             * Creates a plain object from an AbilityScoreIncreaseChoice message. Also converts values to other types if specified.
             * @param message AbilityScoreIncreaseChoice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AbilityScoreIncreaseChoice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AbilityScoreIncreaseChoice
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FeatChoice. */
        interface IFeatChoice {

            /** FeatChoice featIds */
            featIds?: (string[]|null);
        }

        /** Represents a FeatChoice. */
        class FeatChoice implements IFeatChoice {

            /**
             * Constructs a new FeatChoice.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterChoiceDbo.IFeatChoice);

            /** FeatChoice featIds. */
            public featIds: string[];

            /**
             * Creates a new FeatChoice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatChoice instance
             */
            public static create(properties?: v2.CharacterChoiceDbo.IFeatChoice): v2.CharacterChoiceDbo.FeatChoice;

            /**
             * Encodes the specified FeatChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.FeatChoice.verify|verify} messages.
             * @param message FeatChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterChoiceDbo.FeatChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.FeatChoice.verify|verify} messages.
             * @param message FeatChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterChoiceDbo.FeatChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatChoice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterChoiceDbo.FeatChoice;

            /**
             * Decodes a FeatChoice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterChoiceDbo.FeatChoice;

            /**
             * Verifies a FeatChoice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatChoice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatChoice
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterChoiceDbo.FeatChoice;

            /**
             * Creates a plain object from a FeatChoice message. Also converts values to other types if specified.
             * @param message FeatChoice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterChoiceDbo.FeatChoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatChoice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatChoice
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AbilityChoice. */
        interface IAbilityChoice {

            /** AbilityChoice abilityIds */
            abilityIds?: (string[]|null);
        }

        /** Represents an AbilityChoice. */
        class AbilityChoice implements IAbilityChoice {

            /**
             * Constructs a new AbilityChoice.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterChoiceDbo.IAbilityChoice);

            /** AbilityChoice abilityIds. */
            public abilityIds: string[];

            /**
             * Creates a new AbilityChoice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AbilityChoice instance
             */
            public static create(properties?: v2.CharacterChoiceDbo.IAbilityChoice): v2.CharacterChoiceDbo.AbilityChoice;

            /**
             * Encodes the specified AbilityChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityChoice.verify|verify} messages.
             * @param message AbilityChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterChoiceDbo.AbilityChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AbilityChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityChoice.verify|verify} messages.
             * @param message AbilityChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterChoiceDbo.AbilityChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AbilityChoice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AbilityChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterChoiceDbo.AbilityChoice;

            /**
             * Decodes an AbilityChoice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AbilityChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterChoiceDbo.AbilityChoice;

            /**
             * Verifies an AbilityChoice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AbilityChoice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AbilityChoice
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterChoiceDbo.AbilityChoice;

            /**
             * Creates a plain object from an AbilityChoice message. Also converts values to other types if specified.
             * @param message AbilityChoice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterChoiceDbo.AbilityChoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AbilityChoice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AbilityChoice
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ModifierChoice. */
        interface IModifierChoice {

            /** ModifierChoice databaseId */
            databaseId?: (string|null);
        }

        /** Represents a ModifierChoice. */
        class ModifierChoice implements IModifierChoice {

            /**
             * Constructs a new ModifierChoice.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.CharacterChoiceDbo.IModifierChoice);

            /** ModifierChoice databaseId. */
            public databaseId: string;

            /**
             * Creates a new ModifierChoice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModifierChoice instance
             */
            public static create(properties?: v2.CharacterChoiceDbo.IModifierChoice): v2.CharacterChoiceDbo.ModifierChoice;

            /**
             * Encodes the specified ModifierChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.ModifierChoice.verify|verify} messages.
             * @param message ModifierChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.CharacterChoiceDbo.ModifierChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModifierChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.ModifierChoice.verify|verify} messages.
             * @param message ModifierChoice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2.CharacterChoiceDbo.ModifierChoice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModifierChoice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModifierChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.CharacterChoiceDbo.ModifierChoice;

            /**
             * Decodes a ModifierChoice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModifierChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2.CharacterChoiceDbo.ModifierChoice;

            /**
             * Verifies a ModifierChoice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModifierChoice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModifierChoice
             */
            public static fromObject(object: { [k: string]: any }): v2.CharacterChoiceDbo.ModifierChoice;

            /**
             * Creates a plain object from a ModifierChoice message. Also converts values to other types if specified.
             * @param message ModifierChoice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2.CharacterChoiceDbo.ModifierChoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModifierChoice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ModifierChoice
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a WeaponDatabaseDbo. */
    interface IWeaponDatabaseDbo {

        /** WeaponDatabaseDbo weaponTypes */
        weaponTypes?: (v2.WeaponTypeDbo[]|null);
    }

    /** Represents a WeaponDatabaseDbo. */
    class WeaponDatabaseDbo implements IWeaponDatabaseDbo {

        /**
         * Constructs a new WeaponDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IWeaponDatabaseDbo);

        /** WeaponDatabaseDbo weaponTypes. */
        public weaponTypes: v2.WeaponTypeDbo[];

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

        /** FeatDatabaseDbo featSummaries */
        featSummaries?: (v2.FeatSummaryDbo[]|null);
    }

    /** Represents a FeatDatabaseDbo. */
    class FeatDatabaseDbo implements IFeatDatabaseDbo {

        /**
         * Constructs a new FeatDatabaseDbo.
         * @param [properties] Properties to set
         */
        constructor(properties?: v2.IFeatDatabaseDbo);

        /** FeatDatabaseDbo featSummaries. */
        public featSummaries: v2.FeatSummaryDbo[];

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

        /** FeatDbo effects */
        effects?: (v2.CharacterEffectDbo[]|null);
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

        /** FeatDbo effects. */
        public effects: v2.CharacterEffectDbo[];

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
