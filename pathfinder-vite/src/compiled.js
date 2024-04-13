/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["/Users/knichol/dev/personal/pathfinder-app/pathfinder-vite/../pathfinder-generator/src/main/proto"] || ($protobuf.roots["/Users/knichol/dev/personal/pathfinder-app/pathfinder-vite/../pathfinder-generator/src/main/proto"] = {});

export const data = $root.data = (() => {

    /**
     * Namespace data.
     * @exports data
     * @namespace
     */
    const data = {};

    data.ChoiceDbo = (function() {

        /**
         * Properties of a ChoiceDbo.
         * @memberof data
         * @interface IChoiceDbo
         * @property {string|null} [choiceId] ChoiceDbo choiceId
         * @property {string|null} [label] ChoiceDbo label
         * @property {string|null} [type] ChoiceDbo type
         * @property {boolean|null} [repeating] ChoiceDbo repeating
         * @property {data.TextChoiceInputDbo|null} [text] ChoiceDbo text
         * @property {data.FeatureSelectChoiceInputDbo|null} [featureSelect] ChoiceDbo featureSelect
         */

        /**
         * Constructs a new ChoiceDbo.
         * @memberof data
         * @classdesc Represents a ChoiceDbo.
         * @implements IChoiceDbo
         * @constructor
         * @param {data.IChoiceDbo=} [properties] Properties to set
         */
        function ChoiceDbo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChoiceDbo choiceId.
         * @member {string} choiceId
         * @memberof data.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.choiceId = "";

        /**
         * ChoiceDbo label.
         * @member {string} label
         * @memberof data.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.label = "";

        /**
         * ChoiceDbo type.
         * @member {string} type
         * @memberof data.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.type = "";

        /**
         * ChoiceDbo repeating.
         * @member {boolean} repeating
         * @memberof data.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.repeating = false;

        /**
         * ChoiceDbo text.
         * @member {data.TextChoiceInputDbo|null|undefined} text
         * @memberof data.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.text = null;

        /**
         * ChoiceDbo featureSelect.
         * @member {data.FeatureSelectChoiceInputDbo|null|undefined} featureSelect
         * @memberof data.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.featureSelect = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ChoiceDbo input.
         * @member {"text"|"featureSelect"|undefined} input
         * @memberof data.ChoiceDbo
         * @instance
         */
        Object.defineProperty(ChoiceDbo.prototype, "input", {
            get: $util.oneOfGetter($oneOfFields = ["text", "featureSelect"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ChoiceDbo instance using the specified properties.
         * @function create
         * @memberof data.ChoiceDbo
         * @static
         * @param {data.IChoiceDbo=} [properties] Properties to set
         * @returns {data.ChoiceDbo} ChoiceDbo instance
         */
        ChoiceDbo.create = function create(properties) {
            return new ChoiceDbo(properties);
        };

        /**
         * Encodes the specified ChoiceDbo message. Does not implicitly {@link data.ChoiceDbo.verify|verify} messages.
         * @function encode
         * @memberof data.ChoiceDbo
         * @static
         * @param {data.ChoiceDbo} message ChoiceDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChoiceDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.choiceId != null && Object.hasOwnProperty.call(message, "choiceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.choiceId);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.repeating != null && Object.hasOwnProperty.call(message, "repeating"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.repeating);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                $root.data.TextChoiceInputDbo.encode(message.text, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.featureSelect != null && Object.hasOwnProperty.call(message, "featureSelect"))
                $root.data.FeatureSelectChoiceInputDbo.encode(message.featureSelect, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChoiceDbo message, length delimited. Does not implicitly {@link data.ChoiceDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.ChoiceDbo
         * @static
         * @param {data.ChoiceDbo} message ChoiceDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.ChoiceDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.ChoiceDbo} ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChoiceDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.ChoiceDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.choiceId = reader.string();
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                case 4: {
                        message.repeating = reader.bool();
                        break;
                    }
                case 100: {
                        message.text = $root.data.TextChoiceInputDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.featureSelect = $root.data.FeatureSelectChoiceInputDbo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.ChoiceDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.ChoiceDbo} ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChoiceDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChoiceDbo message.
         * @function verify
         * @memberof data.ChoiceDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChoiceDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.choiceId != null && message.hasOwnProperty("choiceId"))
                if (!$util.isString(message.choiceId))
                    return "choiceId: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.repeating != null && message.hasOwnProperty("repeating"))
                if (typeof message.repeating !== "boolean")
                    return "repeating: boolean expected";
            if (message.text != null && message.hasOwnProperty("text")) {
                properties.input = 1;
                {
                    let error = $root.data.TextChoiceInputDbo.verify(message.text);
                    if (error)
                        return "text." + error;
                }
            }
            if (message.featureSelect != null && message.hasOwnProperty("featureSelect")) {
                if (properties.input === 1)
                    return "input: multiple values";
                properties.input = 1;
                {
                    let error = $root.data.FeatureSelectChoiceInputDbo.verify(message.featureSelect);
                    if (error)
                        return "featureSelect." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChoiceDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.ChoiceDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.ChoiceDbo} ChoiceDbo
         */
        ChoiceDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.ChoiceDbo)
                return object;
            let message = new $root.data.ChoiceDbo();
            if (object.choiceId != null)
                message.choiceId = String(object.choiceId);
            if (object.label != null)
                message.label = String(object.label);
            if (object.type != null)
                message.type = String(object.type);
            if (object.repeating != null)
                message.repeating = Boolean(object.repeating);
            if (object.text != null) {
                if (typeof object.text !== "object")
                    throw TypeError(".data.ChoiceDbo.text: object expected");
                message.text = $root.data.TextChoiceInputDbo.fromObject(object.text);
            }
            if (object.featureSelect != null) {
                if (typeof object.featureSelect !== "object")
                    throw TypeError(".data.ChoiceDbo.featureSelect: object expected");
                message.featureSelect = $root.data.FeatureSelectChoiceInputDbo.fromObject(object.featureSelect);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChoiceDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.ChoiceDbo
         * @static
         * @param {data.ChoiceDbo} message ChoiceDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChoiceDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.choiceId = "";
                object.label = "";
                object.type = "";
                object.repeating = false;
            }
            if (message.choiceId != null && message.hasOwnProperty("choiceId"))
                object.choiceId = message.choiceId;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.repeating != null && message.hasOwnProperty("repeating"))
                object.repeating = message.repeating;
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = $root.data.TextChoiceInputDbo.toObject(message.text, options);
                if (options.oneofs)
                    object.input = "text";
            }
            if (message.featureSelect != null && message.hasOwnProperty("featureSelect")) {
                object.featureSelect = $root.data.FeatureSelectChoiceInputDbo.toObject(message.featureSelect, options);
                if (options.oneofs)
                    object.input = "featureSelect";
            }
            return object;
        };

        /**
         * Converts this ChoiceDbo to JSON.
         * @function toJSON
         * @memberof data.ChoiceDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChoiceDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChoiceDbo
         * @function getTypeUrl
         * @memberof data.ChoiceDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.ChoiceDbo";
        };

        return ChoiceDbo;
    })();

    data.TextChoiceInputDbo = (function() {

        /**
         * Properties of a TextChoiceInputDbo.
         * @memberof data
         * @interface ITextChoiceInputDbo
         */

        /**
         * Constructs a new TextChoiceInputDbo.
         * @memberof data
         * @classdesc Represents a TextChoiceInputDbo.
         * @implements ITextChoiceInputDbo
         * @constructor
         * @param {data.ITextChoiceInputDbo=} [properties] Properties to set
         */
        function TextChoiceInputDbo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TextChoiceInputDbo instance using the specified properties.
         * @function create
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {data.ITextChoiceInputDbo=} [properties] Properties to set
         * @returns {data.TextChoiceInputDbo} TextChoiceInputDbo instance
         */
        TextChoiceInputDbo.create = function create(properties) {
            return new TextChoiceInputDbo(properties);
        };

        /**
         * Encodes the specified TextChoiceInputDbo message. Does not implicitly {@link data.TextChoiceInputDbo.verify|verify} messages.
         * @function encode
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {data.TextChoiceInputDbo} message TextChoiceInputDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextChoiceInputDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TextChoiceInputDbo message, length delimited. Does not implicitly {@link data.TextChoiceInputDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {data.TextChoiceInputDbo} message TextChoiceInputDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextChoiceInputDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TextChoiceInputDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.TextChoiceInputDbo} TextChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextChoiceInputDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.TextChoiceInputDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TextChoiceInputDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.TextChoiceInputDbo} TextChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextChoiceInputDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TextChoiceInputDbo message.
         * @function verify
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TextChoiceInputDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TextChoiceInputDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.TextChoiceInputDbo} TextChoiceInputDbo
         */
        TextChoiceInputDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.TextChoiceInputDbo)
                return object;
            return new $root.data.TextChoiceInputDbo();
        };

        /**
         * Creates a plain object from a TextChoiceInputDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {data.TextChoiceInputDbo} message TextChoiceInputDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TextChoiceInputDbo.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TextChoiceInputDbo to JSON.
         * @function toJSON
         * @memberof data.TextChoiceInputDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TextChoiceInputDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TextChoiceInputDbo
         * @function getTypeUrl
         * @memberof data.TextChoiceInputDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TextChoiceInputDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.TextChoiceInputDbo";
        };

        return TextChoiceInputDbo;
    })();

    data.FeatureSelectChoiceInputDbo = (function() {

        /**
         * Properties of a FeatureSelectChoiceInputDbo.
         * @memberof data
         * @interface IFeatureSelectChoiceInputDbo
         * @property {Array.<string>|null} [optionTags] FeatureSelectChoiceInputDbo optionTags
         * @property {Array.<string>|null} [featureIds] FeatureSelectChoiceInputDbo featureIds
         * @property {Array.<data.FeatureSelectChoiceCategoryDbo>|null} [categories] FeatureSelectChoiceInputDbo categories
         * @property {data.FeatureSelectChoiceSortByDbo|null} [sortBy] FeatureSelectChoiceInputDbo sortBy
         */

        /**
         * Constructs a new FeatureSelectChoiceInputDbo.
         * @memberof data
         * @classdesc Represents a FeatureSelectChoiceInputDbo.
         * @implements IFeatureSelectChoiceInputDbo
         * @constructor
         * @param {data.IFeatureSelectChoiceInputDbo=} [properties] Properties to set
         */
        function FeatureSelectChoiceInputDbo(properties) {
            this.optionTags = [];
            this.featureIds = [];
            this.categories = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureSelectChoiceInputDbo optionTags.
         * @member {Array.<string>} optionTags
         * @memberof data.FeatureSelectChoiceInputDbo
         * @instance
         */
        FeatureSelectChoiceInputDbo.prototype.optionTags = $util.emptyArray;

        /**
         * FeatureSelectChoiceInputDbo featureIds.
         * @member {Array.<string>} featureIds
         * @memberof data.FeatureSelectChoiceInputDbo
         * @instance
         */
        FeatureSelectChoiceInputDbo.prototype.featureIds = $util.emptyArray;

        /**
         * FeatureSelectChoiceInputDbo categories.
         * @member {Array.<data.FeatureSelectChoiceCategoryDbo>} categories
         * @memberof data.FeatureSelectChoiceInputDbo
         * @instance
         */
        FeatureSelectChoiceInputDbo.prototype.categories = $util.emptyArray;

        /**
         * FeatureSelectChoiceInputDbo sortBy.
         * @member {data.FeatureSelectChoiceSortByDbo} sortBy
         * @memberof data.FeatureSelectChoiceInputDbo
         * @instance
         */
        FeatureSelectChoiceInputDbo.prototype.sortBy = 0;

        /**
         * Creates a new FeatureSelectChoiceInputDbo instance using the specified properties.
         * @function create
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {data.IFeatureSelectChoiceInputDbo=} [properties] Properties to set
         * @returns {data.FeatureSelectChoiceInputDbo} FeatureSelectChoiceInputDbo instance
         */
        FeatureSelectChoiceInputDbo.create = function create(properties) {
            return new FeatureSelectChoiceInputDbo(properties);
        };

        /**
         * Encodes the specified FeatureSelectChoiceInputDbo message. Does not implicitly {@link data.FeatureSelectChoiceInputDbo.verify|verify} messages.
         * @function encode
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {data.FeatureSelectChoiceInputDbo} message FeatureSelectChoiceInputDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureSelectChoiceInputDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.optionTags != null && message.optionTags.length)
                for (let i = 0; i < message.optionTags.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.optionTags[i]);
            if (message.featureIds != null && message.featureIds.length)
                for (let i = 0; i < message.featureIds.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.featureIds[i]);
            if (message.categories != null && message.categories.length)
                for (let i = 0; i < message.categories.length; ++i)
                    $root.data.FeatureSelectChoiceCategoryDbo.encode(message.categories[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.sortBy != null && Object.hasOwnProperty.call(message, "sortBy"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sortBy);
            return writer;
        };

        /**
         * Encodes the specified FeatureSelectChoiceInputDbo message, length delimited. Does not implicitly {@link data.FeatureSelectChoiceInputDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {data.FeatureSelectChoiceInputDbo} message FeatureSelectChoiceInputDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureSelectChoiceInputDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatureSelectChoiceInputDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.FeatureSelectChoiceInputDbo} FeatureSelectChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureSelectChoiceInputDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FeatureSelectChoiceInputDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.optionTags && message.optionTags.length))
                            message.optionTags = [];
                        message.optionTags.push(reader.string());
                        break;
                    }
                case 2: {
                        if (!(message.featureIds && message.featureIds.length))
                            message.featureIds = [];
                        message.featureIds.push(reader.string());
                        break;
                    }
                case 3: {
                        if (!(message.categories && message.categories.length))
                            message.categories = [];
                        message.categories.push($root.data.FeatureSelectChoiceCategoryDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.sortBy = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeatureSelectChoiceInputDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.FeatureSelectChoiceInputDbo} FeatureSelectChoiceInputDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureSelectChoiceInputDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatureSelectChoiceInputDbo message.
         * @function verify
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatureSelectChoiceInputDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.optionTags != null && message.hasOwnProperty("optionTags")) {
                if (!Array.isArray(message.optionTags))
                    return "optionTags: array expected";
                for (let i = 0; i < message.optionTags.length; ++i)
                    if (!$util.isString(message.optionTags[i]))
                        return "optionTags: string[] expected";
            }
            if (message.featureIds != null && message.hasOwnProperty("featureIds")) {
                if (!Array.isArray(message.featureIds))
                    return "featureIds: array expected";
                for (let i = 0; i < message.featureIds.length; ++i)
                    if (!$util.isString(message.featureIds[i]))
                        return "featureIds: string[] expected";
            }
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (let i = 0; i < message.categories.length; ++i) {
                    let error = $root.data.FeatureSelectChoiceCategoryDbo.verify(message.categories[i]);
                    if (error)
                        return "categories." + error;
                }
            }
            if (message.sortBy != null && message.hasOwnProperty("sortBy"))
                switch (message.sortBy) {
                default:
                    return "sortBy: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a FeatureSelectChoiceInputDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.FeatureSelectChoiceInputDbo} FeatureSelectChoiceInputDbo
         */
        FeatureSelectChoiceInputDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.FeatureSelectChoiceInputDbo)
                return object;
            let message = new $root.data.FeatureSelectChoiceInputDbo();
            if (object.optionTags) {
                if (!Array.isArray(object.optionTags))
                    throw TypeError(".data.FeatureSelectChoiceInputDbo.optionTags: array expected");
                message.optionTags = [];
                for (let i = 0; i < object.optionTags.length; ++i)
                    message.optionTags[i] = String(object.optionTags[i]);
            }
            if (object.featureIds) {
                if (!Array.isArray(object.featureIds))
                    throw TypeError(".data.FeatureSelectChoiceInputDbo.featureIds: array expected");
                message.featureIds = [];
                for (let i = 0; i < object.featureIds.length; ++i)
                    message.featureIds[i] = String(object.featureIds[i]);
            }
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".data.FeatureSelectChoiceInputDbo.categories: array expected");
                message.categories = [];
                for (let i = 0; i < object.categories.length; ++i) {
                    if (typeof object.categories[i] !== "object")
                        throw TypeError(".data.FeatureSelectChoiceInputDbo.categories: object expected");
                    message.categories[i] = $root.data.FeatureSelectChoiceCategoryDbo.fromObject(object.categories[i]);
                }
            }
            switch (object.sortBy) {
            default:
                if (typeof object.sortBy === "number") {
                    message.sortBy = object.sortBy;
                    break;
                }
                break;
            case "FEATURE_SELECT_CHOICE_SORTBY_NONE":
            case 0:
                message.sortBy = 0;
                break;
            case "FEATURE_SELECT_CHOICE_SORTBY_NAME":
            case 1:
                message.sortBy = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a FeatureSelectChoiceInputDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {data.FeatureSelectChoiceInputDbo} message FeatureSelectChoiceInputDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatureSelectChoiceInputDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.optionTags = [];
                object.featureIds = [];
                object.categories = [];
            }
            if (options.defaults)
                object.sortBy = options.enums === String ? "FEATURE_SELECT_CHOICE_SORTBY_NONE" : 0;
            if (message.optionTags && message.optionTags.length) {
                object.optionTags = [];
                for (let j = 0; j < message.optionTags.length; ++j)
                    object.optionTags[j] = message.optionTags[j];
            }
            if (message.featureIds && message.featureIds.length) {
                object.featureIds = [];
                for (let j = 0; j < message.featureIds.length; ++j)
                    object.featureIds[j] = message.featureIds[j];
            }
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (let j = 0; j < message.categories.length; ++j)
                    object.categories[j] = $root.data.FeatureSelectChoiceCategoryDbo.toObject(message.categories[j], options);
            }
            if (message.sortBy != null && message.hasOwnProperty("sortBy"))
                object.sortBy = options.enums === String ? $root.data.FeatureSelectChoiceSortByDbo[message.sortBy] === undefined ? message.sortBy : $root.data.FeatureSelectChoiceSortByDbo[message.sortBy] : message.sortBy;
            return object;
        };

        /**
         * Converts this FeatureSelectChoiceInputDbo to JSON.
         * @function toJSON
         * @memberof data.FeatureSelectChoiceInputDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatureSelectChoiceInputDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatureSelectChoiceInputDbo
         * @function getTypeUrl
         * @memberof data.FeatureSelectChoiceInputDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatureSelectChoiceInputDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.FeatureSelectChoiceInputDbo";
        };

        return FeatureSelectChoiceInputDbo;
    })();

    data.FeatureSelectChoiceCategoryDbo = (function() {

        /**
         * Properties of a FeatureSelectChoiceCategoryDbo.
         * @memberof data
         * @interface IFeatureSelectChoiceCategoryDbo
         * @property {string|null} [label] FeatureSelectChoiceCategoryDbo label
         * @property {string|null} [tag] FeatureSelectChoiceCategoryDbo tag
         */

        /**
         * Constructs a new FeatureSelectChoiceCategoryDbo.
         * @memberof data
         * @classdesc Represents a FeatureSelectChoiceCategoryDbo.
         * @implements IFeatureSelectChoiceCategoryDbo
         * @constructor
         * @param {data.IFeatureSelectChoiceCategoryDbo=} [properties] Properties to set
         */
        function FeatureSelectChoiceCategoryDbo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureSelectChoiceCategoryDbo label.
         * @member {string} label
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @instance
         */
        FeatureSelectChoiceCategoryDbo.prototype.label = "";

        /**
         * FeatureSelectChoiceCategoryDbo tag.
         * @member {string} tag
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @instance
         */
        FeatureSelectChoiceCategoryDbo.prototype.tag = "";

        /**
         * Creates a new FeatureSelectChoiceCategoryDbo instance using the specified properties.
         * @function create
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {data.IFeatureSelectChoiceCategoryDbo=} [properties] Properties to set
         * @returns {data.FeatureSelectChoiceCategoryDbo} FeatureSelectChoiceCategoryDbo instance
         */
        FeatureSelectChoiceCategoryDbo.create = function create(properties) {
            return new FeatureSelectChoiceCategoryDbo(properties);
        };

        /**
         * Encodes the specified FeatureSelectChoiceCategoryDbo message. Does not implicitly {@link data.FeatureSelectChoiceCategoryDbo.verify|verify} messages.
         * @function encode
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {data.FeatureSelectChoiceCategoryDbo} message FeatureSelectChoiceCategoryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureSelectChoiceCategoryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tag);
            return writer;
        };

        /**
         * Encodes the specified FeatureSelectChoiceCategoryDbo message, length delimited. Does not implicitly {@link data.FeatureSelectChoiceCategoryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {data.FeatureSelectChoiceCategoryDbo} message FeatureSelectChoiceCategoryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureSelectChoiceCategoryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatureSelectChoiceCategoryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.FeatureSelectChoiceCategoryDbo} FeatureSelectChoiceCategoryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureSelectChoiceCategoryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FeatureSelectChoiceCategoryDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.label = reader.string();
                        break;
                    }
                case 2: {
                        message.tag = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeatureSelectChoiceCategoryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.FeatureSelectChoiceCategoryDbo} FeatureSelectChoiceCategoryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureSelectChoiceCategoryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatureSelectChoiceCategoryDbo message.
         * @function verify
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatureSelectChoiceCategoryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            return null;
        };

        /**
         * Creates a FeatureSelectChoiceCategoryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.FeatureSelectChoiceCategoryDbo} FeatureSelectChoiceCategoryDbo
         */
        FeatureSelectChoiceCategoryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.FeatureSelectChoiceCategoryDbo)
                return object;
            let message = new $root.data.FeatureSelectChoiceCategoryDbo();
            if (object.label != null)
                message.label = String(object.label);
            if (object.tag != null)
                message.tag = String(object.tag);
            return message;
        };

        /**
         * Creates a plain object from a FeatureSelectChoiceCategoryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {data.FeatureSelectChoiceCategoryDbo} message FeatureSelectChoiceCategoryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatureSelectChoiceCategoryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.label = "";
                object.tag = "";
            }
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            return object;
        };

        /**
         * Converts this FeatureSelectChoiceCategoryDbo to JSON.
         * @function toJSON
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatureSelectChoiceCategoryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatureSelectChoiceCategoryDbo
         * @function getTypeUrl
         * @memberof data.FeatureSelectChoiceCategoryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatureSelectChoiceCategoryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.FeatureSelectChoiceCategoryDbo";
        };

        return FeatureSelectChoiceCategoryDbo;
    })();

    /**
     * FeatureSelectChoiceSortByDbo enum.
     * @name data.FeatureSelectChoiceSortByDbo
     * @enum {number}
     * @property {number} FEATURE_SELECT_CHOICE_SORTBY_NONE=0 FEATURE_SELECT_CHOICE_SORTBY_NONE value
     * @property {number} FEATURE_SELECT_CHOICE_SORTBY_NAME=1 FEATURE_SELECT_CHOICE_SORTBY_NAME value
     */
    data.FeatureSelectChoiceSortByDbo = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FEATURE_SELECT_CHOICE_SORTBY_NONE"] = 0;
        values[valuesById[1] = "FEATURE_SELECT_CHOICE_SORTBY_NAME"] = 1;
        return values;
    })();

    data.StacksDbo = (function() {

        /**
         * Properties of a StacksDbo.
         * @memberof data
         * @interface IStacksDbo
         * @property {data.FixedStackDbo|null} [fixedStack] StacksDbo fixedStack
         * @property {data.StackDbo|null} [repeatingStack] StacksDbo repeatingStack
         */

        /**
         * Constructs a new StacksDbo.
         * @memberof data
         * @classdesc Represents a StacksDbo.
         * @implements IStacksDbo
         * @constructor
         * @param {data.IStacksDbo=} [properties] Properties to set
         */
        function StacksDbo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StacksDbo fixedStack.
         * @member {data.FixedStackDbo|null|undefined} fixedStack
         * @memberof data.StacksDbo
         * @instance
         */
        StacksDbo.prototype.fixedStack = null;

        /**
         * StacksDbo repeatingStack.
         * @member {data.StackDbo|null|undefined} repeatingStack
         * @memberof data.StacksDbo
         * @instance
         */
        StacksDbo.prototype.repeatingStack = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * StacksDbo stackable.
         * @member {"fixedStack"|"repeatingStack"|undefined} stackable
         * @memberof data.StacksDbo
         * @instance
         */
        Object.defineProperty(StacksDbo.prototype, "stackable", {
            get: $util.oneOfGetter($oneOfFields = ["fixedStack", "repeatingStack"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new StacksDbo instance using the specified properties.
         * @function create
         * @memberof data.StacksDbo
         * @static
         * @param {data.IStacksDbo=} [properties] Properties to set
         * @returns {data.StacksDbo} StacksDbo instance
         */
        StacksDbo.create = function create(properties) {
            return new StacksDbo(properties);
        };

        /**
         * Encodes the specified StacksDbo message. Does not implicitly {@link data.StacksDbo.verify|verify} messages.
         * @function encode
         * @memberof data.StacksDbo
         * @static
         * @param {data.StacksDbo} message StacksDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StacksDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fixedStack != null && Object.hasOwnProperty.call(message, "fixedStack"))
                $root.data.FixedStackDbo.encode(message.fixedStack, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.repeatingStack != null && Object.hasOwnProperty.call(message, "repeatingStack"))
                $root.data.StackDbo.encode(message.repeatingStack, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StacksDbo message, length delimited. Does not implicitly {@link data.StacksDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.StacksDbo
         * @static
         * @param {data.StacksDbo} message StacksDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StacksDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StacksDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.StacksDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.StacksDbo} StacksDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StacksDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.StacksDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fixedStack = $root.data.FixedStackDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.repeatingStack = $root.data.StackDbo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StacksDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.StacksDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.StacksDbo} StacksDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StacksDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StacksDbo message.
         * @function verify
         * @memberof data.StacksDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StacksDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.fixedStack != null && message.hasOwnProperty("fixedStack")) {
                properties.stackable = 1;
                {
                    let error = $root.data.FixedStackDbo.verify(message.fixedStack);
                    if (error)
                        return "fixedStack." + error;
                }
            }
            if (message.repeatingStack != null && message.hasOwnProperty("repeatingStack")) {
                if (properties.stackable === 1)
                    return "stackable: multiple values";
                properties.stackable = 1;
                {
                    let error = $root.data.StackDbo.verify(message.repeatingStack);
                    if (error)
                        return "repeatingStack." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StacksDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.StacksDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.StacksDbo} StacksDbo
         */
        StacksDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.StacksDbo)
                return object;
            let message = new $root.data.StacksDbo();
            if (object.fixedStack != null) {
                if (typeof object.fixedStack !== "object")
                    throw TypeError(".data.StacksDbo.fixedStack: object expected");
                message.fixedStack = $root.data.FixedStackDbo.fromObject(object.fixedStack);
            }
            if (object.repeatingStack != null) {
                if (typeof object.repeatingStack !== "object")
                    throw TypeError(".data.StacksDbo.repeatingStack: object expected");
                message.repeatingStack = $root.data.StackDbo.fromObject(object.repeatingStack);
            }
            return message;
        };

        /**
         * Creates a plain object from a StacksDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.StacksDbo
         * @static
         * @param {data.StacksDbo} message StacksDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StacksDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.fixedStack != null && message.hasOwnProperty("fixedStack")) {
                object.fixedStack = $root.data.FixedStackDbo.toObject(message.fixedStack, options);
                if (options.oneofs)
                    object.stackable = "fixedStack";
            }
            if (message.repeatingStack != null && message.hasOwnProperty("repeatingStack")) {
                object.repeatingStack = $root.data.StackDbo.toObject(message.repeatingStack, options);
                if (options.oneofs)
                    object.stackable = "repeatingStack";
            }
            return object;
        };

        /**
         * Converts this StacksDbo to JSON.
         * @function toJSON
         * @memberof data.StacksDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StacksDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StacksDbo
         * @function getTypeUrl
         * @memberof data.StacksDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StacksDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.StacksDbo";
        };

        return StacksDbo;
    })();

    data.FixedStackDbo = (function() {

        /**
         * Properties of a FixedStackDbo.
         * @memberof data
         * @interface IFixedStackDbo
         * @property {Array.<data.StackDbo>|null} [stacks] FixedStackDbo stacks
         */

        /**
         * Constructs a new FixedStackDbo.
         * @memberof data
         * @classdesc Represents a FixedStackDbo.
         * @implements IFixedStackDbo
         * @constructor
         * @param {data.IFixedStackDbo=} [properties] Properties to set
         */
        function FixedStackDbo(properties) {
            this.stacks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FixedStackDbo stacks.
         * @member {Array.<data.StackDbo>} stacks
         * @memberof data.FixedStackDbo
         * @instance
         */
        FixedStackDbo.prototype.stacks = $util.emptyArray;

        /**
         * Creates a new FixedStackDbo instance using the specified properties.
         * @function create
         * @memberof data.FixedStackDbo
         * @static
         * @param {data.IFixedStackDbo=} [properties] Properties to set
         * @returns {data.FixedStackDbo} FixedStackDbo instance
         */
        FixedStackDbo.create = function create(properties) {
            return new FixedStackDbo(properties);
        };

        /**
         * Encodes the specified FixedStackDbo message. Does not implicitly {@link data.FixedStackDbo.verify|verify} messages.
         * @function encode
         * @memberof data.FixedStackDbo
         * @static
         * @param {data.FixedStackDbo} message FixedStackDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FixedStackDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stacks != null && message.stacks.length)
                for (let i = 0; i < message.stacks.length; ++i)
                    $root.data.StackDbo.encode(message.stacks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FixedStackDbo message, length delimited. Does not implicitly {@link data.FixedStackDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.FixedStackDbo
         * @static
         * @param {data.FixedStackDbo} message FixedStackDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FixedStackDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FixedStackDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.FixedStackDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.FixedStackDbo} FixedStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FixedStackDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FixedStackDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.stacks && message.stacks.length))
                            message.stacks = [];
                        message.stacks.push($root.data.StackDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FixedStackDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.FixedStackDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.FixedStackDbo} FixedStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FixedStackDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FixedStackDbo message.
         * @function verify
         * @memberof data.FixedStackDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FixedStackDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stacks != null && message.hasOwnProperty("stacks")) {
                if (!Array.isArray(message.stacks))
                    return "stacks: array expected";
                for (let i = 0; i < message.stacks.length; ++i) {
                    let error = $root.data.StackDbo.verify(message.stacks[i]);
                    if (error)
                        return "stacks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FixedStackDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.FixedStackDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.FixedStackDbo} FixedStackDbo
         */
        FixedStackDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.FixedStackDbo)
                return object;
            let message = new $root.data.FixedStackDbo();
            if (object.stacks) {
                if (!Array.isArray(object.stacks))
                    throw TypeError(".data.FixedStackDbo.stacks: array expected");
                message.stacks = [];
                for (let i = 0; i < object.stacks.length; ++i) {
                    if (typeof object.stacks[i] !== "object")
                        throw TypeError(".data.FixedStackDbo.stacks: object expected");
                    message.stacks[i] = $root.data.StackDbo.fromObject(object.stacks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FixedStackDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.FixedStackDbo
         * @static
         * @param {data.FixedStackDbo} message FixedStackDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FixedStackDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.stacks = [];
            if (message.stacks && message.stacks.length) {
                object.stacks = [];
                for (let j = 0; j < message.stacks.length; ++j)
                    object.stacks[j] = $root.data.StackDbo.toObject(message.stacks[j], options);
            }
            return object;
        };

        /**
         * Converts this FixedStackDbo to JSON.
         * @function toJSON
         * @memberof data.FixedStackDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FixedStackDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FixedStackDbo
         * @function getTypeUrl
         * @memberof data.FixedStackDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FixedStackDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.FixedStackDbo";
        };

        return FixedStackDbo;
    })();

    data.StackDbo = (function() {

        /**
         * Properties of a StackDbo.
         * @memberof data
         * @interface IStackDbo
         * @property {Array.<data.EffectDbo>|null} [effects] StackDbo effects
         * @property {Array.<string>|null} [links] StackDbo links
         * @property {Array.<data.ChoiceDbo>|null} [choices] StackDbo choices
         * @property {Array.<data.FeatureModificationDbo>|null} [featureModifications] StackDbo featureModifications
         */

        /**
         * Constructs a new StackDbo.
         * @memberof data
         * @classdesc Represents a StackDbo.
         * @implements IStackDbo
         * @constructor
         * @param {data.IStackDbo=} [properties] Properties to set
         */
        function StackDbo(properties) {
            this.effects = [];
            this.links = [];
            this.choices = [];
            this.featureModifications = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StackDbo effects.
         * @member {Array.<data.EffectDbo>} effects
         * @memberof data.StackDbo
         * @instance
         */
        StackDbo.prototype.effects = $util.emptyArray;

        /**
         * StackDbo links.
         * @member {Array.<string>} links
         * @memberof data.StackDbo
         * @instance
         */
        StackDbo.prototype.links = $util.emptyArray;

        /**
         * StackDbo choices.
         * @member {Array.<data.ChoiceDbo>} choices
         * @memberof data.StackDbo
         * @instance
         */
        StackDbo.prototype.choices = $util.emptyArray;

        /**
         * StackDbo featureModifications.
         * @member {Array.<data.FeatureModificationDbo>} featureModifications
         * @memberof data.StackDbo
         * @instance
         */
        StackDbo.prototype.featureModifications = $util.emptyArray;

        /**
         * Creates a new StackDbo instance using the specified properties.
         * @function create
         * @memberof data.StackDbo
         * @static
         * @param {data.IStackDbo=} [properties] Properties to set
         * @returns {data.StackDbo} StackDbo instance
         */
        StackDbo.create = function create(properties) {
            return new StackDbo(properties);
        };

        /**
         * Encodes the specified StackDbo message. Does not implicitly {@link data.StackDbo.verify|verify} messages.
         * @function encode
         * @memberof data.StackDbo
         * @static
         * @param {data.StackDbo} message StackDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.effects != null && message.effects.length)
                for (let i = 0; i < message.effects.length; ++i)
                    $root.data.EffectDbo.encode(message.effects[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.links != null && message.links.length)
                for (let i = 0; i < message.links.length; ++i)
                    writer.uint32(/* id 102, wireType 2 =*/818).string(message.links[i]);
            if (message.choices != null && message.choices.length)
                for (let i = 0; i < message.choices.length; ++i)
                    $root.data.ChoiceDbo.encode(message.choices[i], writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            if (message.featureModifications != null && message.featureModifications.length)
                for (let i = 0; i < message.featureModifications.length; ++i)
                    $root.data.FeatureModificationDbo.encode(message.featureModifications[i], writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StackDbo message, length delimited. Does not implicitly {@link data.StackDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.StackDbo
         * @static
         * @param {data.StackDbo} message StackDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StackDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.StackDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.StackDbo} StackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.StackDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 101: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.data.EffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 102: {
                        if (!(message.links && message.links.length))
                            message.links = [];
                        message.links.push(reader.string());
                        break;
                    }
                case 103: {
                        if (!(message.choices && message.choices.length))
                            message.choices = [];
                        message.choices.push($root.data.ChoiceDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 104: {
                        if (!(message.featureModifications && message.featureModifications.length))
                            message.featureModifications = [];
                        message.featureModifications.push($root.data.FeatureModificationDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StackDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.StackDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.StackDbo} StackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StackDbo message.
         * @function verify
         * @memberof data.StackDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StackDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (let i = 0; i < message.effects.length; ++i) {
                    let error = $root.data.EffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.links != null && message.hasOwnProperty("links")) {
                if (!Array.isArray(message.links))
                    return "links: array expected";
                for (let i = 0; i < message.links.length; ++i)
                    if (!$util.isString(message.links[i]))
                        return "links: string[] expected";
            }
            if (message.choices != null && message.hasOwnProperty("choices")) {
                if (!Array.isArray(message.choices))
                    return "choices: array expected";
                for (let i = 0; i < message.choices.length; ++i) {
                    let error = $root.data.ChoiceDbo.verify(message.choices[i]);
                    if (error)
                        return "choices." + error;
                }
            }
            if (message.featureModifications != null && message.hasOwnProperty("featureModifications")) {
                if (!Array.isArray(message.featureModifications))
                    return "featureModifications: array expected";
                for (let i = 0; i < message.featureModifications.length; ++i) {
                    let error = $root.data.FeatureModificationDbo.verify(message.featureModifications[i]);
                    if (error)
                        return "featureModifications." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StackDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.StackDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.StackDbo} StackDbo
         */
        StackDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.StackDbo)
                return object;
            let message = new $root.data.StackDbo();
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".data.StackDbo.effects: array expected");
                message.effects = [];
                for (let i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".data.StackDbo.effects: object expected");
                    message.effects[i] = $root.data.EffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.links) {
                if (!Array.isArray(object.links))
                    throw TypeError(".data.StackDbo.links: array expected");
                message.links = [];
                for (let i = 0; i < object.links.length; ++i)
                    message.links[i] = String(object.links[i]);
            }
            if (object.choices) {
                if (!Array.isArray(object.choices))
                    throw TypeError(".data.StackDbo.choices: array expected");
                message.choices = [];
                for (let i = 0; i < object.choices.length; ++i) {
                    if (typeof object.choices[i] !== "object")
                        throw TypeError(".data.StackDbo.choices: object expected");
                    message.choices[i] = $root.data.ChoiceDbo.fromObject(object.choices[i]);
                }
            }
            if (object.featureModifications) {
                if (!Array.isArray(object.featureModifications))
                    throw TypeError(".data.StackDbo.featureModifications: array expected");
                message.featureModifications = [];
                for (let i = 0; i < object.featureModifications.length; ++i) {
                    if (typeof object.featureModifications[i] !== "object")
                        throw TypeError(".data.StackDbo.featureModifications: object expected");
                    message.featureModifications[i] = $root.data.FeatureModificationDbo.fromObject(object.featureModifications[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StackDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.StackDbo
         * @static
         * @param {data.StackDbo} message StackDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StackDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.effects = [];
                object.links = [];
                object.choices = [];
                object.featureModifications = [];
            }
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (let j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.data.EffectDbo.toObject(message.effects[j], options);
            }
            if (message.links && message.links.length) {
                object.links = [];
                for (let j = 0; j < message.links.length; ++j)
                    object.links[j] = message.links[j];
            }
            if (message.choices && message.choices.length) {
                object.choices = [];
                for (let j = 0; j < message.choices.length; ++j)
                    object.choices[j] = $root.data.ChoiceDbo.toObject(message.choices[j], options);
            }
            if (message.featureModifications && message.featureModifications.length) {
                object.featureModifications = [];
                for (let j = 0; j < message.featureModifications.length; ++j)
                    object.featureModifications[j] = $root.data.FeatureModificationDbo.toObject(message.featureModifications[j], options);
            }
            return object;
        };

        /**
         * Converts this StackDbo to JSON.
         * @function toJSON
         * @memberof data.StackDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StackDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StackDbo
         * @function getTypeUrl
         * @memberof data.StackDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StackDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.StackDbo";
        };

        return StackDbo;
    })();

    data.ConditionalStackDbo = (function() {

        /**
         * Properties of a ConditionalStackDbo.
         * @memberof data
         * @interface IConditionalStackDbo
         * @property {string|null} [conditionFormula] ConditionalStackDbo conditionFormula
         * @property {Array.<data.EffectDbo>|null} [effects] ConditionalStackDbo effects
         * @property {Array.<string>|null} [links] ConditionalStackDbo links
         * @property {Array.<data.ChoiceDbo>|null} [choices] ConditionalStackDbo choices
         * @property {Array.<data.FeatureModificationDbo>|null} [featureModifications] ConditionalStackDbo featureModifications
         */

        /**
         * Constructs a new ConditionalStackDbo.
         * @memberof data
         * @classdesc Represents a ConditionalStackDbo.
         * @implements IConditionalStackDbo
         * @constructor
         * @param {data.IConditionalStackDbo=} [properties] Properties to set
         */
        function ConditionalStackDbo(properties) {
            this.effects = [];
            this.links = [];
            this.choices = [];
            this.featureModifications = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConditionalStackDbo conditionFormula.
         * @member {string} conditionFormula
         * @memberof data.ConditionalStackDbo
         * @instance
         */
        ConditionalStackDbo.prototype.conditionFormula = "";

        /**
         * ConditionalStackDbo effects.
         * @member {Array.<data.EffectDbo>} effects
         * @memberof data.ConditionalStackDbo
         * @instance
         */
        ConditionalStackDbo.prototype.effects = $util.emptyArray;

        /**
         * ConditionalStackDbo links.
         * @member {Array.<string>} links
         * @memberof data.ConditionalStackDbo
         * @instance
         */
        ConditionalStackDbo.prototype.links = $util.emptyArray;

        /**
         * ConditionalStackDbo choices.
         * @member {Array.<data.ChoiceDbo>} choices
         * @memberof data.ConditionalStackDbo
         * @instance
         */
        ConditionalStackDbo.prototype.choices = $util.emptyArray;

        /**
         * ConditionalStackDbo featureModifications.
         * @member {Array.<data.FeatureModificationDbo>} featureModifications
         * @memberof data.ConditionalStackDbo
         * @instance
         */
        ConditionalStackDbo.prototype.featureModifications = $util.emptyArray;

        /**
         * Creates a new ConditionalStackDbo instance using the specified properties.
         * @function create
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {data.IConditionalStackDbo=} [properties] Properties to set
         * @returns {data.ConditionalStackDbo} ConditionalStackDbo instance
         */
        ConditionalStackDbo.create = function create(properties) {
            return new ConditionalStackDbo(properties);
        };

        /**
         * Encodes the specified ConditionalStackDbo message. Does not implicitly {@link data.ConditionalStackDbo.verify|verify} messages.
         * @function encode
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {data.ConditionalStackDbo} message ConditionalStackDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConditionalStackDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conditionFormula != null && Object.hasOwnProperty.call(message, "conditionFormula"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conditionFormula);
            if (message.effects != null && message.effects.length)
                for (let i = 0; i < message.effects.length; ++i)
                    $root.data.EffectDbo.encode(message.effects[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.links != null && message.links.length)
                for (let i = 0; i < message.links.length; ++i)
                    writer.uint32(/* id 102, wireType 2 =*/818).string(message.links[i]);
            if (message.choices != null && message.choices.length)
                for (let i = 0; i < message.choices.length; ++i)
                    $root.data.ChoiceDbo.encode(message.choices[i], writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            if (message.featureModifications != null && message.featureModifications.length)
                for (let i = 0; i < message.featureModifications.length; ++i)
                    $root.data.FeatureModificationDbo.encode(message.featureModifications[i], writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConditionalStackDbo message, length delimited. Does not implicitly {@link data.ConditionalStackDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {data.ConditionalStackDbo} message ConditionalStackDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConditionalStackDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConditionalStackDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.ConditionalStackDbo} ConditionalStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConditionalStackDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.ConditionalStackDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conditionFormula = reader.string();
                        break;
                    }
                case 101: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.data.EffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 102: {
                        if (!(message.links && message.links.length))
                            message.links = [];
                        message.links.push(reader.string());
                        break;
                    }
                case 103: {
                        if (!(message.choices && message.choices.length))
                            message.choices = [];
                        message.choices.push($root.data.ChoiceDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 104: {
                        if (!(message.featureModifications && message.featureModifications.length))
                            message.featureModifications = [];
                        message.featureModifications.push($root.data.FeatureModificationDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConditionalStackDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.ConditionalStackDbo} ConditionalStackDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConditionalStackDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConditionalStackDbo message.
         * @function verify
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConditionalStackDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula"))
                if (!$util.isString(message.conditionFormula))
                    return "conditionFormula: string expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (let i = 0; i < message.effects.length; ++i) {
                    let error = $root.data.EffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.links != null && message.hasOwnProperty("links")) {
                if (!Array.isArray(message.links))
                    return "links: array expected";
                for (let i = 0; i < message.links.length; ++i)
                    if (!$util.isString(message.links[i]))
                        return "links: string[] expected";
            }
            if (message.choices != null && message.hasOwnProperty("choices")) {
                if (!Array.isArray(message.choices))
                    return "choices: array expected";
                for (let i = 0; i < message.choices.length; ++i) {
                    let error = $root.data.ChoiceDbo.verify(message.choices[i]);
                    if (error)
                        return "choices." + error;
                }
            }
            if (message.featureModifications != null && message.hasOwnProperty("featureModifications")) {
                if (!Array.isArray(message.featureModifications))
                    return "featureModifications: array expected";
                for (let i = 0; i < message.featureModifications.length; ++i) {
                    let error = $root.data.FeatureModificationDbo.verify(message.featureModifications[i]);
                    if (error)
                        return "featureModifications." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ConditionalStackDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.ConditionalStackDbo} ConditionalStackDbo
         */
        ConditionalStackDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.ConditionalStackDbo)
                return object;
            let message = new $root.data.ConditionalStackDbo();
            if (object.conditionFormula != null)
                message.conditionFormula = String(object.conditionFormula);
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".data.ConditionalStackDbo.effects: array expected");
                message.effects = [];
                for (let i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".data.ConditionalStackDbo.effects: object expected");
                    message.effects[i] = $root.data.EffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.links) {
                if (!Array.isArray(object.links))
                    throw TypeError(".data.ConditionalStackDbo.links: array expected");
                message.links = [];
                for (let i = 0; i < object.links.length; ++i)
                    message.links[i] = String(object.links[i]);
            }
            if (object.choices) {
                if (!Array.isArray(object.choices))
                    throw TypeError(".data.ConditionalStackDbo.choices: array expected");
                message.choices = [];
                for (let i = 0; i < object.choices.length; ++i) {
                    if (typeof object.choices[i] !== "object")
                        throw TypeError(".data.ConditionalStackDbo.choices: object expected");
                    message.choices[i] = $root.data.ChoiceDbo.fromObject(object.choices[i]);
                }
            }
            if (object.featureModifications) {
                if (!Array.isArray(object.featureModifications))
                    throw TypeError(".data.ConditionalStackDbo.featureModifications: array expected");
                message.featureModifications = [];
                for (let i = 0; i < object.featureModifications.length; ++i) {
                    if (typeof object.featureModifications[i] !== "object")
                        throw TypeError(".data.ConditionalStackDbo.featureModifications: object expected");
                    message.featureModifications[i] = $root.data.FeatureModificationDbo.fromObject(object.featureModifications[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ConditionalStackDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {data.ConditionalStackDbo} message ConditionalStackDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConditionalStackDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.effects = [];
                object.links = [];
                object.choices = [];
                object.featureModifications = [];
            }
            if (options.defaults)
                object.conditionFormula = "";
            if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula"))
                object.conditionFormula = message.conditionFormula;
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (let j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.data.EffectDbo.toObject(message.effects[j], options);
            }
            if (message.links && message.links.length) {
                object.links = [];
                for (let j = 0; j < message.links.length; ++j)
                    object.links[j] = message.links[j];
            }
            if (message.choices && message.choices.length) {
                object.choices = [];
                for (let j = 0; j < message.choices.length; ++j)
                    object.choices[j] = $root.data.ChoiceDbo.toObject(message.choices[j], options);
            }
            if (message.featureModifications && message.featureModifications.length) {
                object.featureModifications = [];
                for (let j = 0; j < message.featureModifications.length; ++j)
                    object.featureModifications[j] = $root.data.FeatureModificationDbo.toObject(message.featureModifications[j], options);
            }
            return object;
        };

        /**
         * Converts this ConditionalStackDbo to JSON.
         * @function toJSON
         * @memberof data.ConditionalStackDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConditionalStackDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConditionalStackDbo
         * @function getTypeUrl
         * @memberof data.ConditionalStackDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConditionalStackDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.ConditionalStackDbo";
        };

        return ConditionalStackDbo;
    })();

    data.EffectDbo = (function() {

        /**
         * Properties of an EffectDbo.
         * @memberof data
         * @interface IEffectDbo
         * @property {string|null} [conditionFormula] EffectDbo conditionFormula
         * @property {data.EffectDbo.SetActionDbo|null} [setAction] EffectDbo setAction
         * @property {data.EffectDbo.AddActionDbo|null} [addAction] EffectDbo addAction
         */

        /**
         * Constructs a new EffectDbo.
         * @memberof data
         * @classdesc Represents an EffectDbo.
         * @implements IEffectDbo
         * @constructor
         * @param {data.IEffectDbo=} [properties] Properties to set
         */
        function EffectDbo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EffectDbo conditionFormula.
         * @member {string|null|undefined} conditionFormula
         * @memberof data.EffectDbo
         * @instance
         */
        EffectDbo.prototype.conditionFormula = null;

        /**
         * EffectDbo setAction.
         * @member {data.EffectDbo.SetActionDbo|null|undefined} setAction
         * @memberof data.EffectDbo
         * @instance
         */
        EffectDbo.prototype.setAction = null;

        /**
         * EffectDbo addAction.
         * @member {data.EffectDbo.AddActionDbo|null|undefined} addAction
         * @memberof data.EffectDbo
         * @instance
         */
        EffectDbo.prototype.addAction = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * EffectDbo _conditionFormula.
         * @member {"conditionFormula"|undefined} _conditionFormula
         * @memberof data.EffectDbo
         * @instance
         */
        Object.defineProperty(EffectDbo.prototype, "_conditionFormula", {
            get: $util.oneOfGetter($oneOfFields = ["conditionFormula"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * EffectDbo action.
         * @member {"setAction"|"addAction"|undefined} action
         * @memberof data.EffectDbo
         * @instance
         */
        Object.defineProperty(EffectDbo.prototype, "action", {
            get: $util.oneOfGetter($oneOfFields = ["setAction", "addAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EffectDbo instance using the specified properties.
         * @function create
         * @memberof data.EffectDbo
         * @static
         * @param {data.IEffectDbo=} [properties] Properties to set
         * @returns {data.EffectDbo} EffectDbo instance
         */
        EffectDbo.create = function create(properties) {
            return new EffectDbo(properties);
        };

        /**
         * Encodes the specified EffectDbo message. Does not implicitly {@link data.EffectDbo.verify|verify} messages.
         * @function encode
         * @memberof data.EffectDbo
         * @static
         * @param {data.EffectDbo} message EffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EffectDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conditionFormula != null && Object.hasOwnProperty.call(message, "conditionFormula"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conditionFormula);
            if (message.setAction != null && Object.hasOwnProperty.call(message, "setAction"))
                $root.data.EffectDbo.SetActionDbo.encode(message.setAction, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.addAction != null && Object.hasOwnProperty.call(message, "addAction"))
                $root.data.EffectDbo.AddActionDbo.encode(message.addAction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EffectDbo message, length delimited. Does not implicitly {@link data.EffectDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.EffectDbo
         * @static
         * @param {data.EffectDbo} message EffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EffectDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.EffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.EffectDbo} EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EffectDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.EffectDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conditionFormula = reader.string();
                        break;
                    }
                case 2: {
                        message.setAction = $root.data.EffectDbo.SetActionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.addAction = $root.data.EffectDbo.AddActionDbo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EffectDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.EffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.EffectDbo} EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EffectDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EffectDbo message.
         * @function verify
         * @memberof data.EffectDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EffectDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula")) {
                properties._conditionFormula = 1;
                if (!$util.isString(message.conditionFormula))
                    return "conditionFormula: string expected";
            }
            if (message.setAction != null && message.hasOwnProperty("setAction")) {
                properties.action = 1;
                {
                    let error = $root.data.EffectDbo.SetActionDbo.verify(message.setAction);
                    if (error)
                        return "setAction." + error;
                }
            }
            if (message.addAction != null && message.hasOwnProperty("addAction")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.data.EffectDbo.AddActionDbo.verify(message.addAction);
                    if (error)
                        return "addAction." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EffectDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.EffectDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.EffectDbo} EffectDbo
         */
        EffectDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.EffectDbo)
                return object;
            let message = new $root.data.EffectDbo();
            if (object.conditionFormula != null)
                message.conditionFormula = String(object.conditionFormula);
            if (object.setAction != null) {
                if (typeof object.setAction !== "object")
                    throw TypeError(".data.EffectDbo.setAction: object expected");
                message.setAction = $root.data.EffectDbo.SetActionDbo.fromObject(object.setAction);
            }
            if (object.addAction != null) {
                if (typeof object.addAction !== "object")
                    throw TypeError(".data.EffectDbo.addAction: object expected");
                message.addAction = $root.data.EffectDbo.AddActionDbo.fromObject(object.addAction);
            }
            return message;
        };

        /**
         * Creates a plain object from an EffectDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.EffectDbo
         * @static
         * @param {data.EffectDbo} message EffectDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EffectDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula")) {
                object.conditionFormula = message.conditionFormula;
                if (options.oneofs)
                    object._conditionFormula = "conditionFormula";
            }
            if (message.setAction != null && message.hasOwnProperty("setAction")) {
                object.setAction = $root.data.EffectDbo.SetActionDbo.toObject(message.setAction, options);
                if (options.oneofs)
                    object.action = "setAction";
            }
            if (message.addAction != null && message.hasOwnProperty("addAction")) {
                object.addAction = $root.data.EffectDbo.AddActionDbo.toObject(message.addAction, options);
                if (options.oneofs)
                    object.action = "addAction";
            }
            return object;
        };

        /**
         * Converts this EffectDbo to JSON.
         * @function toJSON
         * @memberof data.EffectDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EffectDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EffectDbo
         * @function getTypeUrl
         * @memberof data.EffectDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.EffectDbo";
        };

        EffectDbo.SetActionDbo = (function() {

            /**
             * Properties of a SetActionDbo.
             * @memberof data.EffectDbo
             * @interface ISetActionDbo
             * @property {string|null} [targetKey] SetActionDbo targetKey
             * @property {string|null} [formula] SetActionDbo formula
             * @property {number|null} [numberValue] SetActionDbo numberValue
             */

            /**
             * Constructs a new SetActionDbo.
             * @memberof data.EffectDbo
             * @classdesc Represents a SetActionDbo.
             * @implements ISetActionDbo
             * @constructor
             * @param {data.EffectDbo.ISetActionDbo=} [properties] Properties to set
             */
            function SetActionDbo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetActionDbo targetKey.
             * @member {string} targetKey
             * @memberof data.EffectDbo.SetActionDbo
             * @instance
             */
            SetActionDbo.prototype.targetKey = "";

            /**
             * SetActionDbo formula.
             * @member {string|null|undefined} formula
             * @memberof data.EffectDbo.SetActionDbo
             * @instance
             */
            SetActionDbo.prototype.formula = null;

            /**
             * SetActionDbo numberValue.
             * @member {number|null|undefined} numberValue
             * @memberof data.EffectDbo.SetActionDbo
             * @instance
             */
            SetActionDbo.prototype.numberValue = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * SetActionDbo value.
             * @member {"formula"|"numberValue"|undefined} value
             * @memberof data.EffectDbo.SetActionDbo
             * @instance
             */
            Object.defineProperty(SetActionDbo.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["formula", "numberValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SetActionDbo instance using the specified properties.
             * @function create
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {data.EffectDbo.ISetActionDbo=} [properties] Properties to set
             * @returns {data.EffectDbo.SetActionDbo} SetActionDbo instance
             */
            SetActionDbo.create = function create(properties) {
                return new SetActionDbo(properties);
            };

            /**
             * Encodes the specified SetActionDbo message. Does not implicitly {@link data.EffectDbo.SetActionDbo.verify|verify} messages.
             * @function encode
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {data.EffectDbo.SetActionDbo} message SetActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetActionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.targetKey != null && Object.hasOwnProperty.call(message, "targetKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetKey);
                if (message.formula != null && Object.hasOwnProperty.call(message, "formula"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.formula);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.numberValue);
                return writer;
            };

            /**
             * Encodes the specified SetActionDbo message, length delimited. Does not implicitly {@link data.EffectDbo.SetActionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {data.EffectDbo.SetActionDbo} message SetActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetActionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {data.EffectDbo.SetActionDbo} SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetActionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.EffectDbo.SetActionDbo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.targetKey = reader.string();
                            break;
                        }
                    case 2: {
                            message.formula = reader.string();
                            break;
                        }
                    case 3: {
                            message.numberValue = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {data.EffectDbo.SetActionDbo} SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetActionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetActionDbo message.
             * @function verify
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetActionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.targetKey != null && message.hasOwnProperty("targetKey"))
                    if (!$util.isString(message.targetKey))
                        return "targetKey: string expected";
                if (message.formula != null && message.hasOwnProperty("formula")) {
                    properties.value = 1;
                    if (!$util.isString(message.formula))
                        return "formula: string expected";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.numberValue))
                        return "numberValue: integer expected";
                }
                return null;
            };

            /**
             * Creates a SetActionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {data.EffectDbo.SetActionDbo} SetActionDbo
             */
            SetActionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.data.EffectDbo.SetActionDbo)
                    return object;
                let message = new $root.data.EffectDbo.SetActionDbo();
                if (object.targetKey != null)
                    message.targetKey = String(object.targetKey);
                if (object.formula != null)
                    message.formula = String(object.formula);
                if (object.numberValue != null)
                    message.numberValue = object.numberValue | 0;
                return message;
            };

            /**
             * Creates a plain object from a SetActionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {data.EffectDbo.SetActionDbo} message SetActionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetActionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.targetKey = "";
                if (message.targetKey != null && message.hasOwnProperty("targetKey"))
                    object.targetKey = message.targetKey;
                if (message.formula != null && message.hasOwnProperty("formula")) {
                    object.formula = message.formula;
                    if (options.oneofs)
                        object.value = "formula";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = message.numberValue;
                    if (options.oneofs)
                        object.value = "numberValue";
                }
                return object;
            };

            /**
             * Converts this SetActionDbo to JSON.
             * @function toJSON
             * @memberof data.EffectDbo.SetActionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetActionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetActionDbo
             * @function getTypeUrl
             * @memberof data.EffectDbo.SetActionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetActionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/data.EffectDbo.SetActionDbo";
            };

            return SetActionDbo;
        })();

        EffectDbo.AddActionDbo = (function() {

            /**
             * Properties of an AddActionDbo.
             * @memberof data.EffectDbo
             * @interface IAddActionDbo
             * @property {string|null} [targetKey] AddActionDbo targetKey
             * @property {number|null} [numberDelta] AddActionDbo numberDelta
             */

            /**
             * Constructs a new AddActionDbo.
             * @memberof data.EffectDbo
             * @classdesc Represents an AddActionDbo.
             * @implements IAddActionDbo
             * @constructor
             * @param {data.EffectDbo.IAddActionDbo=} [properties] Properties to set
             */
            function AddActionDbo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddActionDbo targetKey.
             * @member {string} targetKey
             * @memberof data.EffectDbo.AddActionDbo
             * @instance
             */
            AddActionDbo.prototype.targetKey = "";

            /**
             * AddActionDbo numberDelta.
             * @member {number} numberDelta
             * @memberof data.EffectDbo.AddActionDbo
             * @instance
             */
            AddActionDbo.prototype.numberDelta = 0;

            /**
             * Creates a new AddActionDbo instance using the specified properties.
             * @function create
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {data.EffectDbo.IAddActionDbo=} [properties] Properties to set
             * @returns {data.EffectDbo.AddActionDbo} AddActionDbo instance
             */
            AddActionDbo.create = function create(properties) {
                return new AddActionDbo(properties);
            };

            /**
             * Encodes the specified AddActionDbo message. Does not implicitly {@link data.EffectDbo.AddActionDbo.verify|verify} messages.
             * @function encode
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {data.EffectDbo.AddActionDbo} message AddActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddActionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.targetKey != null && Object.hasOwnProperty.call(message, "targetKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetKey);
                if (message.numberDelta != null && Object.hasOwnProperty.call(message, "numberDelta"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numberDelta);
                return writer;
            };

            /**
             * Encodes the specified AddActionDbo message, length delimited. Does not implicitly {@link data.EffectDbo.AddActionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {data.EffectDbo.AddActionDbo} message AddActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddActionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {data.EffectDbo.AddActionDbo} AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddActionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.EffectDbo.AddActionDbo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.targetKey = reader.string();
                            break;
                        }
                    case 2: {
                            message.numberDelta = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {data.EffectDbo.AddActionDbo} AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddActionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddActionDbo message.
             * @function verify
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddActionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.targetKey != null && message.hasOwnProperty("targetKey"))
                    if (!$util.isString(message.targetKey))
                        return "targetKey: string expected";
                if (message.numberDelta != null && message.hasOwnProperty("numberDelta"))
                    if (!$util.isInteger(message.numberDelta))
                        return "numberDelta: integer expected";
                return null;
            };

            /**
             * Creates an AddActionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {data.EffectDbo.AddActionDbo} AddActionDbo
             */
            AddActionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.data.EffectDbo.AddActionDbo)
                    return object;
                let message = new $root.data.EffectDbo.AddActionDbo();
                if (object.targetKey != null)
                    message.targetKey = String(object.targetKey);
                if (object.numberDelta != null)
                    message.numberDelta = object.numberDelta | 0;
                return message;
            };

            /**
             * Creates a plain object from an AddActionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {data.EffectDbo.AddActionDbo} message AddActionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddActionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.targetKey = "";
                    object.numberDelta = 0;
                }
                if (message.targetKey != null && message.hasOwnProperty("targetKey"))
                    object.targetKey = message.targetKey;
                if (message.numberDelta != null && message.hasOwnProperty("numberDelta"))
                    object.numberDelta = message.numberDelta;
                return object;
            };

            /**
             * Converts this AddActionDbo to JSON.
             * @function toJSON
             * @memberof data.EffectDbo.AddActionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddActionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AddActionDbo
             * @function getTypeUrl
             * @memberof data.EffectDbo.AddActionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AddActionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/data.EffectDbo.AddActionDbo";
            };

            return AddActionDbo;
        })();

        return EffectDbo;
    })();

    data.FeatureModificationDbo = (function() {

        /**
         * Properties of a FeatureModificationDbo.
         * @memberof data
         * @interface IFeatureModificationDbo
         * @property {string|null} [targetFeatureId] FeatureModificationDbo targetFeatureId
         * @property {Array.<data.StackModificationDbo>|null} [stackModifications] FeatureModificationDbo stackModifications
         */

        /**
         * Constructs a new FeatureModificationDbo.
         * @memberof data
         * @classdesc Represents a FeatureModificationDbo.
         * @implements IFeatureModificationDbo
         * @constructor
         * @param {data.IFeatureModificationDbo=} [properties] Properties to set
         */
        function FeatureModificationDbo(properties) {
            this.stackModifications = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureModificationDbo targetFeatureId.
         * @member {string} targetFeatureId
         * @memberof data.FeatureModificationDbo
         * @instance
         */
        FeatureModificationDbo.prototype.targetFeatureId = "";

        /**
         * FeatureModificationDbo stackModifications.
         * @member {Array.<data.StackModificationDbo>} stackModifications
         * @memberof data.FeatureModificationDbo
         * @instance
         */
        FeatureModificationDbo.prototype.stackModifications = $util.emptyArray;

        /**
         * Creates a new FeatureModificationDbo instance using the specified properties.
         * @function create
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {data.IFeatureModificationDbo=} [properties] Properties to set
         * @returns {data.FeatureModificationDbo} FeatureModificationDbo instance
         */
        FeatureModificationDbo.create = function create(properties) {
            return new FeatureModificationDbo(properties);
        };

        /**
         * Encodes the specified FeatureModificationDbo message. Does not implicitly {@link data.FeatureModificationDbo.verify|verify} messages.
         * @function encode
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {data.FeatureModificationDbo} message FeatureModificationDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureModificationDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetFeatureId != null && Object.hasOwnProperty.call(message, "targetFeatureId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetFeatureId);
            if (message.stackModifications != null && message.stackModifications.length)
                for (let i = 0; i < message.stackModifications.length; ++i)
                    $root.data.StackModificationDbo.encode(message.stackModifications[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeatureModificationDbo message, length delimited. Does not implicitly {@link data.FeatureModificationDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {data.FeatureModificationDbo} message FeatureModificationDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureModificationDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatureModificationDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.FeatureModificationDbo} FeatureModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureModificationDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FeatureModificationDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.targetFeatureId = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.stackModifications && message.stackModifications.length))
                            message.stackModifications = [];
                        message.stackModifications.push($root.data.StackModificationDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeatureModificationDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.FeatureModificationDbo} FeatureModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureModificationDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatureModificationDbo message.
         * @function verify
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatureModificationDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetFeatureId != null && message.hasOwnProperty("targetFeatureId"))
                if (!$util.isString(message.targetFeatureId))
                    return "targetFeatureId: string expected";
            if (message.stackModifications != null && message.hasOwnProperty("stackModifications")) {
                if (!Array.isArray(message.stackModifications))
                    return "stackModifications: array expected";
                for (let i = 0; i < message.stackModifications.length; ++i) {
                    let error = $root.data.StackModificationDbo.verify(message.stackModifications[i]);
                    if (error)
                        return "stackModifications." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FeatureModificationDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.FeatureModificationDbo} FeatureModificationDbo
         */
        FeatureModificationDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.FeatureModificationDbo)
                return object;
            let message = new $root.data.FeatureModificationDbo();
            if (object.targetFeatureId != null)
                message.targetFeatureId = String(object.targetFeatureId);
            if (object.stackModifications) {
                if (!Array.isArray(object.stackModifications))
                    throw TypeError(".data.FeatureModificationDbo.stackModifications: array expected");
                message.stackModifications = [];
                for (let i = 0; i < object.stackModifications.length; ++i) {
                    if (typeof object.stackModifications[i] !== "object")
                        throw TypeError(".data.FeatureModificationDbo.stackModifications: object expected");
                    message.stackModifications[i] = $root.data.StackModificationDbo.fromObject(object.stackModifications[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FeatureModificationDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {data.FeatureModificationDbo} message FeatureModificationDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatureModificationDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.stackModifications = [];
            if (options.defaults)
                object.targetFeatureId = "";
            if (message.targetFeatureId != null && message.hasOwnProperty("targetFeatureId"))
                object.targetFeatureId = message.targetFeatureId;
            if (message.stackModifications && message.stackModifications.length) {
                object.stackModifications = [];
                for (let j = 0; j < message.stackModifications.length; ++j)
                    object.stackModifications[j] = $root.data.StackModificationDbo.toObject(message.stackModifications[j], options);
            }
            return object;
        };

        /**
         * Converts this FeatureModificationDbo to JSON.
         * @function toJSON
         * @memberof data.FeatureModificationDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatureModificationDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatureModificationDbo
         * @function getTypeUrl
         * @memberof data.FeatureModificationDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatureModificationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.FeatureModificationDbo";
        };

        return FeatureModificationDbo;
    })();

    data.StackModificationDbo = (function() {

        /**
         * Properties of a StackModificationDbo.
         * @memberof data
         * @interface IStackModificationDbo
         * @property {number|null} [targetStackCount] StackModificationDbo targetStackCount
         * @property {Array.<string>|null} [linksToAdd] StackModificationDbo linksToAdd
         * @property {Array.<string>|null} [linksToRemove] StackModificationDbo linksToRemove
         */

        /**
         * Constructs a new StackModificationDbo.
         * @memberof data
         * @classdesc Represents a StackModificationDbo.
         * @implements IStackModificationDbo
         * @constructor
         * @param {data.IStackModificationDbo=} [properties] Properties to set
         */
        function StackModificationDbo(properties) {
            this.linksToAdd = [];
            this.linksToRemove = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StackModificationDbo targetStackCount.
         * @member {number} targetStackCount
         * @memberof data.StackModificationDbo
         * @instance
         */
        StackModificationDbo.prototype.targetStackCount = 0;

        /**
         * StackModificationDbo linksToAdd.
         * @member {Array.<string>} linksToAdd
         * @memberof data.StackModificationDbo
         * @instance
         */
        StackModificationDbo.prototype.linksToAdd = $util.emptyArray;

        /**
         * StackModificationDbo linksToRemove.
         * @member {Array.<string>} linksToRemove
         * @memberof data.StackModificationDbo
         * @instance
         */
        StackModificationDbo.prototype.linksToRemove = $util.emptyArray;

        /**
         * Creates a new StackModificationDbo instance using the specified properties.
         * @function create
         * @memberof data.StackModificationDbo
         * @static
         * @param {data.IStackModificationDbo=} [properties] Properties to set
         * @returns {data.StackModificationDbo} StackModificationDbo instance
         */
        StackModificationDbo.create = function create(properties) {
            return new StackModificationDbo(properties);
        };

        /**
         * Encodes the specified StackModificationDbo message. Does not implicitly {@link data.StackModificationDbo.verify|verify} messages.
         * @function encode
         * @memberof data.StackModificationDbo
         * @static
         * @param {data.StackModificationDbo} message StackModificationDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackModificationDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetStackCount != null && Object.hasOwnProperty.call(message, "targetStackCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.targetStackCount);
            if (message.linksToAdd != null && message.linksToAdd.length)
                for (let i = 0; i < message.linksToAdd.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.linksToAdd[i]);
            if (message.linksToRemove != null && message.linksToRemove.length)
                for (let i = 0; i < message.linksToRemove.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.linksToRemove[i]);
            return writer;
        };

        /**
         * Encodes the specified StackModificationDbo message, length delimited. Does not implicitly {@link data.StackModificationDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.StackModificationDbo
         * @static
         * @param {data.StackModificationDbo} message StackModificationDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackModificationDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StackModificationDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.StackModificationDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.StackModificationDbo} StackModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackModificationDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.StackModificationDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.targetStackCount = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.linksToAdd && message.linksToAdd.length))
                            message.linksToAdd = [];
                        message.linksToAdd.push(reader.string());
                        break;
                    }
                case 3: {
                        if (!(message.linksToRemove && message.linksToRemove.length))
                            message.linksToRemove = [];
                        message.linksToRemove.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StackModificationDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.StackModificationDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.StackModificationDbo} StackModificationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackModificationDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StackModificationDbo message.
         * @function verify
         * @memberof data.StackModificationDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StackModificationDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetStackCount != null && message.hasOwnProperty("targetStackCount"))
                if (!$util.isInteger(message.targetStackCount))
                    return "targetStackCount: integer expected";
            if (message.linksToAdd != null && message.hasOwnProperty("linksToAdd")) {
                if (!Array.isArray(message.linksToAdd))
                    return "linksToAdd: array expected";
                for (let i = 0; i < message.linksToAdd.length; ++i)
                    if (!$util.isString(message.linksToAdd[i]))
                        return "linksToAdd: string[] expected";
            }
            if (message.linksToRemove != null && message.hasOwnProperty("linksToRemove")) {
                if (!Array.isArray(message.linksToRemove))
                    return "linksToRemove: array expected";
                for (let i = 0; i < message.linksToRemove.length; ++i)
                    if (!$util.isString(message.linksToRemove[i]))
                        return "linksToRemove: string[] expected";
            }
            return null;
        };

        /**
         * Creates a StackModificationDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.StackModificationDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.StackModificationDbo} StackModificationDbo
         */
        StackModificationDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.StackModificationDbo)
                return object;
            let message = new $root.data.StackModificationDbo();
            if (object.targetStackCount != null)
                message.targetStackCount = object.targetStackCount | 0;
            if (object.linksToAdd) {
                if (!Array.isArray(object.linksToAdd))
                    throw TypeError(".data.StackModificationDbo.linksToAdd: array expected");
                message.linksToAdd = [];
                for (let i = 0; i < object.linksToAdd.length; ++i)
                    message.linksToAdd[i] = String(object.linksToAdd[i]);
            }
            if (object.linksToRemove) {
                if (!Array.isArray(object.linksToRemove))
                    throw TypeError(".data.StackModificationDbo.linksToRemove: array expected");
                message.linksToRemove = [];
                for (let i = 0; i < object.linksToRemove.length; ++i)
                    message.linksToRemove[i] = String(object.linksToRemove[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StackModificationDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.StackModificationDbo
         * @static
         * @param {data.StackModificationDbo} message StackModificationDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StackModificationDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.linksToAdd = [];
                object.linksToRemove = [];
            }
            if (options.defaults)
                object.targetStackCount = 0;
            if (message.targetStackCount != null && message.hasOwnProperty("targetStackCount"))
                object.targetStackCount = message.targetStackCount;
            if (message.linksToAdd && message.linksToAdd.length) {
                object.linksToAdd = [];
                for (let j = 0; j < message.linksToAdd.length; ++j)
                    object.linksToAdd[j] = message.linksToAdd[j];
            }
            if (message.linksToRemove && message.linksToRemove.length) {
                object.linksToRemove = [];
                for (let j = 0; j < message.linksToRemove.length; ++j)
                    object.linksToRemove[j] = message.linksToRemove[j];
            }
            return object;
        };

        /**
         * Converts this StackModificationDbo to JSON.
         * @function toJSON
         * @memberof data.StackModificationDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StackModificationDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StackModificationDbo
         * @function getTypeUrl
         * @memberof data.StackModificationDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StackModificationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.StackModificationDbo";
        };

        return StackModificationDbo;
    })();

    data.DescriptionDbo = (function() {

        /**
         * Properties of a DescriptionDbo.
         * @memberof data
         * @interface IDescriptionDbo
         * @property {string|null} [text] DescriptionDbo text
         * @property {Object.<string,string>|null} [sections] DescriptionDbo sections
         */

        /**
         * Constructs a new DescriptionDbo.
         * @memberof data
         * @classdesc Represents a DescriptionDbo.
         * @implements IDescriptionDbo
         * @constructor
         * @param {data.IDescriptionDbo=} [properties] Properties to set
         */
        function DescriptionDbo(properties) {
            this.sections = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DescriptionDbo text.
         * @member {string} text
         * @memberof data.DescriptionDbo
         * @instance
         */
        DescriptionDbo.prototype.text = "";

        /**
         * DescriptionDbo sections.
         * @member {Object.<string,string>} sections
         * @memberof data.DescriptionDbo
         * @instance
         */
        DescriptionDbo.prototype.sections = $util.emptyObject;

        /**
         * Creates a new DescriptionDbo instance using the specified properties.
         * @function create
         * @memberof data.DescriptionDbo
         * @static
         * @param {data.IDescriptionDbo=} [properties] Properties to set
         * @returns {data.DescriptionDbo} DescriptionDbo instance
         */
        DescriptionDbo.create = function create(properties) {
            return new DescriptionDbo(properties);
        };

        /**
         * Encodes the specified DescriptionDbo message. Does not implicitly {@link data.DescriptionDbo.verify|verify} messages.
         * @function encode
         * @memberof data.DescriptionDbo
         * @static
         * @param {data.DescriptionDbo} message DescriptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescriptionDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            if (message.sections != null && Object.hasOwnProperty.call(message, "sections"))
                for (let keys = Object.keys(message.sections), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.sections[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DescriptionDbo message, length delimited. Does not implicitly {@link data.DescriptionDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.DescriptionDbo
         * @static
         * @param {data.DescriptionDbo} message DescriptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescriptionDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DescriptionDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.DescriptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.DescriptionDbo} DescriptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DescriptionDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.DescriptionDbo(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.text = reader.string();
                        break;
                    }
                case 2: {
                        if (message.sections === $util.emptyObject)
                            message.sections = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.sections[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DescriptionDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.DescriptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.DescriptionDbo} DescriptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DescriptionDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DescriptionDbo message.
         * @function verify
         * @memberof data.DescriptionDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DescriptionDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.sections != null && message.hasOwnProperty("sections")) {
                if (!$util.isObject(message.sections))
                    return "sections: object expected";
                let key = Object.keys(message.sections);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.sections[key[i]]))
                        return "sections: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a DescriptionDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.DescriptionDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.DescriptionDbo} DescriptionDbo
         */
        DescriptionDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.DescriptionDbo)
                return object;
            let message = new $root.data.DescriptionDbo();
            if (object.text != null)
                message.text = String(object.text);
            if (object.sections) {
                if (typeof object.sections !== "object")
                    throw TypeError(".data.DescriptionDbo.sections: object expected");
                message.sections = {};
                for (let keys = Object.keys(object.sections), i = 0; i < keys.length; ++i)
                    message.sections[keys[i]] = String(object.sections[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DescriptionDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.DescriptionDbo
         * @static
         * @param {data.DescriptionDbo} message DescriptionDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DescriptionDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.sections = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            let keys2;
            if (message.sections && (keys2 = Object.keys(message.sections)).length) {
                object.sections = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.sections[keys2[j]] = message.sections[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this DescriptionDbo to JSON.
         * @function toJSON
         * @memberof data.DescriptionDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DescriptionDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DescriptionDbo
         * @function getTypeUrl
         * @memberof data.DescriptionDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DescriptionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.DescriptionDbo";
        };

        return DescriptionDbo;
    })();

    data.FeatureSummaryDbo = (function() {

        /**
         * Properties of a FeatureSummaryDbo.
         * @memberof data
         * @interface IFeatureSummaryDbo
         * @property {string|null} [id] FeatureSummaryDbo id
         * @property {string|null} [name] FeatureSummaryDbo name
         * @property {Array.<string>|null} [tags] FeatureSummaryDbo tags
         * @property {string|null} [enabledFormula] FeatureSummaryDbo enabledFormula
         * @property {number|null} [maxStacks] FeatureSummaryDbo maxStacks
         * @property {string|null} [label] FeatureSummaryDbo label
         * @property {data.FeatureOptionsDbo|null} [options] FeatureSummaryDbo options
         * @property {string|null} [typeAlias] FeatureSummaryDbo typeAlias
         */

        /**
         * Constructs a new FeatureSummaryDbo.
         * @memberof data
         * @classdesc Represents a FeatureSummaryDbo.
         * @implements IFeatureSummaryDbo
         * @constructor
         * @param {data.IFeatureSummaryDbo=} [properties] Properties to set
         */
        function FeatureSummaryDbo(properties) {
            this.tags = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureSummaryDbo id.
         * @member {string} id
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.id = "";

        /**
         * FeatureSummaryDbo name.
         * @member {string} name
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.name = "";

        /**
         * FeatureSummaryDbo tags.
         * @member {Array.<string>} tags
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.tags = $util.emptyArray;

        /**
         * FeatureSummaryDbo enabledFormula.
         * @member {string} enabledFormula
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.enabledFormula = "";

        /**
         * FeatureSummaryDbo maxStacks.
         * @member {number|null|undefined} maxStacks
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.maxStacks = null;

        /**
         * FeatureSummaryDbo label.
         * @member {string|null|undefined} label
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.label = null;

        /**
         * FeatureSummaryDbo options.
         * @member {data.FeatureOptionsDbo|null|undefined} options
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.options = null;

        /**
         * FeatureSummaryDbo typeAlias.
         * @member {string} typeAlias
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        FeatureSummaryDbo.prototype.typeAlias = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * FeatureSummaryDbo _maxStacks.
         * @member {"maxStacks"|undefined} _maxStacks
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        Object.defineProperty(FeatureSummaryDbo.prototype, "_maxStacks", {
            get: $util.oneOfGetter($oneOfFields = ["maxStacks"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * FeatureSummaryDbo _label.
         * @member {"label"|undefined} _label
         * @memberof data.FeatureSummaryDbo
         * @instance
         */
        Object.defineProperty(FeatureSummaryDbo.prototype, "_label", {
            get: $util.oneOfGetter($oneOfFields = ["label"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FeatureSummaryDbo instance using the specified properties.
         * @function create
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {data.IFeatureSummaryDbo=} [properties] Properties to set
         * @returns {data.FeatureSummaryDbo} FeatureSummaryDbo instance
         */
        FeatureSummaryDbo.create = function create(properties) {
            return new FeatureSummaryDbo(properties);
        };

        /**
         * Encodes the specified FeatureSummaryDbo message. Does not implicitly {@link data.FeatureSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {data.FeatureSummaryDbo} message FeatureSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tags != null && message.tags.length)
                for (let i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.enabledFormula != null && Object.hasOwnProperty.call(message, "enabledFormula"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.enabledFormula);
            if (message.maxStacks != null && Object.hasOwnProperty.call(message, "maxStacks"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.maxStacks);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.label);
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                $root.data.FeatureOptionsDbo.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.typeAlias != null && Object.hasOwnProperty.call(message, "typeAlias"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.typeAlias);
            return writer;
        };

        /**
         * Encodes the specified FeatureSummaryDbo message, length delimited. Does not implicitly {@link data.FeatureSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {data.FeatureSummaryDbo} message FeatureSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatureSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.FeatureSummaryDbo} FeatureSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FeatureSummaryDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 4: {
                        message.enabledFormula = reader.string();
                        break;
                    }
                case 5: {
                        message.maxStacks = reader.uint32();
                        break;
                    }
                case 6: {
                        message.label = reader.string();
                        break;
                    }
                case 7: {
                        message.options = $root.data.FeatureOptionsDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.typeAlias = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeatureSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.FeatureSummaryDbo} FeatureSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatureSummaryDbo message.
         * @function verify
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatureSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (let i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.enabledFormula != null && message.hasOwnProperty("enabledFormula"))
                if (!$util.isString(message.enabledFormula))
                    return "enabledFormula: string expected";
            if (message.maxStacks != null && message.hasOwnProperty("maxStacks")) {
                properties._maxStacks = 1;
                if (!$util.isInteger(message.maxStacks))
                    return "maxStacks: integer expected";
            }
            if (message.label != null && message.hasOwnProperty("label")) {
                properties._label = 1;
                if (!$util.isString(message.label))
                    return "label: string expected";
            }
            if (message.options != null && message.hasOwnProperty("options")) {
                let error = $root.data.FeatureOptionsDbo.verify(message.options);
                if (error)
                    return "options." + error;
            }
            if (message.typeAlias != null && message.hasOwnProperty("typeAlias"))
                if (!$util.isString(message.typeAlias))
                    return "typeAlias: string expected";
            return null;
        };

        /**
         * Creates a FeatureSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.FeatureSummaryDbo} FeatureSummaryDbo
         */
        FeatureSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.FeatureSummaryDbo)
                return object;
            let message = new $root.data.FeatureSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".data.FeatureSummaryDbo.tags: array expected");
                message.tags = [];
                for (let i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.enabledFormula != null)
                message.enabledFormula = String(object.enabledFormula);
            if (object.maxStacks != null)
                message.maxStacks = object.maxStacks >>> 0;
            if (object.label != null)
                message.label = String(object.label);
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".data.FeatureSummaryDbo.options: object expected");
                message.options = $root.data.FeatureOptionsDbo.fromObject(object.options);
            }
            if (object.typeAlias != null)
                message.typeAlias = String(object.typeAlias);
            return message;
        };

        /**
         * Creates a plain object from a FeatureSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {data.FeatureSummaryDbo} message FeatureSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatureSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.enabledFormula = "";
                object.options = null;
                object.typeAlias = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (let j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.enabledFormula != null && message.hasOwnProperty("enabledFormula"))
                object.enabledFormula = message.enabledFormula;
            if (message.maxStacks != null && message.hasOwnProperty("maxStacks")) {
                object.maxStacks = message.maxStacks;
                if (options.oneofs)
                    object._maxStacks = "maxStacks";
            }
            if (message.label != null && message.hasOwnProperty("label")) {
                object.label = message.label;
                if (options.oneofs)
                    object._label = "label";
            }
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = $root.data.FeatureOptionsDbo.toObject(message.options, options);
            if (message.typeAlias != null && message.hasOwnProperty("typeAlias"))
                object.typeAlias = message.typeAlias;
            return object;
        };

        /**
         * Converts this FeatureSummaryDbo to JSON.
         * @function toJSON
         * @memberof data.FeatureSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatureSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatureSummaryDbo
         * @function getTypeUrl
         * @memberof data.FeatureSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatureSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.FeatureSummaryDbo";
        };

        return FeatureSummaryDbo;
    })();

    data.FeatureDbo = (function() {

        /**
         * Properties of a FeatureDbo.
         * @memberof data
         * @interface IFeatureDbo
         * @property {string|null} [id] FeatureDbo id
         * @property {string|null} [name] FeatureDbo name
         * @property {Array.<string>|null} [tags] FeatureDbo tags
         * @property {string|null} [enabledFormula] FeatureDbo enabledFormula
         * @property {number|null} [maxStacks] FeatureDbo maxStacks
         * @property {string|null} [label] FeatureDbo label
         * @property {data.FeatureOptionsDbo|null} [options] FeatureDbo options
         * @property {string|null} [typeAlias] FeatureDbo typeAlias
         * @property {data.DescriptionDbo|null} [description] FeatureDbo description
         * @property {data.StacksDbo|null} [stacks] FeatureDbo stacks
         * @property {Array.<data.ConditionalStackDbo>|null} [conditionalStacks] FeatureDbo conditionalStacks
         */

        /**
         * Constructs a new FeatureDbo.
         * @memberof data
         * @classdesc Represents a FeatureDbo.
         * @implements IFeatureDbo
         * @constructor
         * @param {data.IFeatureDbo=} [properties] Properties to set
         */
        function FeatureDbo(properties) {
            this.tags = [];
            this.conditionalStacks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureDbo id.
         * @member {string} id
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.id = "";

        /**
         * FeatureDbo name.
         * @member {string} name
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.name = "";

        /**
         * FeatureDbo tags.
         * @member {Array.<string>} tags
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.tags = $util.emptyArray;

        /**
         * FeatureDbo enabledFormula.
         * @member {string} enabledFormula
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.enabledFormula = "";

        /**
         * FeatureDbo maxStacks.
         * @member {number|null|undefined} maxStacks
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.maxStacks = null;

        /**
         * FeatureDbo label.
         * @member {string|null|undefined} label
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.label = null;

        /**
         * FeatureDbo options.
         * @member {data.FeatureOptionsDbo|null|undefined} options
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.options = null;

        /**
         * FeatureDbo typeAlias.
         * @member {string} typeAlias
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.typeAlias = "";

        /**
         * FeatureDbo description.
         * @member {data.DescriptionDbo|null|undefined} description
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.description = null;

        /**
         * FeatureDbo stacks.
         * @member {data.StacksDbo|null|undefined} stacks
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.stacks = null;

        /**
         * FeatureDbo conditionalStacks.
         * @member {Array.<data.ConditionalStackDbo>} conditionalStacks
         * @memberof data.FeatureDbo
         * @instance
         */
        FeatureDbo.prototype.conditionalStacks = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * FeatureDbo _maxStacks.
         * @member {"maxStacks"|undefined} _maxStacks
         * @memberof data.FeatureDbo
         * @instance
         */
        Object.defineProperty(FeatureDbo.prototype, "_maxStacks", {
            get: $util.oneOfGetter($oneOfFields = ["maxStacks"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * FeatureDbo _label.
         * @member {"label"|undefined} _label
         * @memberof data.FeatureDbo
         * @instance
         */
        Object.defineProperty(FeatureDbo.prototype, "_label", {
            get: $util.oneOfGetter($oneOfFields = ["label"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FeatureDbo instance using the specified properties.
         * @function create
         * @memberof data.FeatureDbo
         * @static
         * @param {data.IFeatureDbo=} [properties] Properties to set
         * @returns {data.FeatureDbo} FeatureDbo instance
         */
        FeatureDbo.create = function create(properties) {
            return new FeatureDbo(properties);
        };

        /**
         * Encodes the specified FeatureDbo message. Does not implicitly {@link data.FeatureDbo.verify|verify} messages.
         * @function encode
         * @memberof data.FeatureDbo
         * @static
         * @param {data.FeatureDbo} message FeatureDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tags != null && message.tags.length)
                for (let i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.enabledFormula != null && Object.hasOwnProperty.call(message, "enabledFormula"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.enabledFormula);
            if (message.maxStacks != null && Object.hasOwnProperty.call(message, "maxStacks"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.maxStacks);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.label);
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                $root.data.FeatureOptionsDbo.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.typeAlias != null && Object.hasOwnProperty.call(message, "typeAlias"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.typeAlias);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.data.DescriptionDbo.encode(message.description, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.stacks != null && Object.hasOwnProperty.call(message, "stacks"))
                $root.data.StacksDbo.encode(message.stacks, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.conditionalStacks != null && message.conditionalStacks.length)
                for (let i = 0; i < message.conditionalStacks.length; ++i)
                    $root.data.ConditionalStackDbo.encode(message.conditionalStacks[i], writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeatureDbo message, length delimited. Does not implicitly {@link data.FeatureDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.FeatureDbo
         * @static
         * @param {data.FeatureDbo} message FeatureDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatureDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.FeatureDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.FeatureDbo} FeatureDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FeatureDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 4: {
                        message.enabledFormula = reader.string();
                        break;
                    }
                case 5: {
                        message.maxStacks = reader.uint32();
                        break;
                    }
                case 6: {
                        message.label = reader.string();
                        break;
                    }
                case 7: {
                        message.options = $root.data.FeatureOptionsDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.typeAlias = reader.string();
                        break;
                    }
                case 100: {
                        message.description = $root.data.DescriptionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.stacks = $root.data.StacksDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 103: {
                        if (!(message.conditionalStacks && message.conditionalStacks.length))
                            message.conditionalStacks = [];
                        message.conditionalStacks.push($root.data.ConditionalStackDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeatureDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.FeatureDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.FeatureDbo} FeatureDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatureDbo message.
         * @function verify
         * @memberof data.FeatureDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatureDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (let i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.enabledFormula != null && message.hasOwnProperty("enabledFormula"))
                if (!$util.isString(message.enabledFormula))
                    return "enabledFormula: string expected";
            if (message.maxStacks != null && message.hasOwnProperty("maxStacks")) {
                properties._maxStacks = 1;
                if (!$util.isInteger(message.maxStacks))
                    return "maxStacks: integer expected";
            }
            if (message.label != null && message.hasOwnProperty("label")) {
                properties._label = 1;
                if (!$util.isString(message.label))
                    return "label: string expected";
            }
            if (message.options != null && message.hasOwnProperty("options")) {
                let error = $root.data.FeatureOptionsDbo.verify(message.options);
                if (error)
                    return "options." + error;
            }
            if (message.typeAlias != null && message.hasOwnProperty("typeAlias"))
                if (!$util.isString(message.typeAlias))
                    return "typeAlias: string expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                let error = $root.data.DescriptionDbo.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.stacks != null && message.hasOwnProperty("stacks")) {
                let error = $root.data.StacksDbo.verify(message.stacks);
                if (error)
                    return "stacks." + error;
            }
            if (message.conditionalStacks != null && message.hasOwnProperty("conditionalStacks")) {
                if (!Array.isArray(message.conditionalStacks))
                    return "conditionalStacks: array expected";
                for (let i = 0; i < message.conditionalStacks.length; ++i) {
                    let error = $root.data.ConditionalStackDbo.verify(message.conditionalStacks[i]);
                    if (error)
                        return "conditionalStacks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FeatureDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.FeatureDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.FeatureDbo} FeatureDbo
         */
        FeatureDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.FeatureDbo)
                return object;
            let message = new $root.data.FeatureDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".data.FeatureDbo.tags: array expected");
                message.tags = [];
                for (let i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.enabledFormula != null)
                message.enabledFormula = String(object.enabledFormula);
            if (object.maxStacks != null)
                message.maxStacks = object.maxStacks >>> 0;
            if (object.label != null)
                message.label = String(object.label);
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".data.FeatureDbo.options: object expected");
                message.options = $root.data.FeatureOptionsDbo.fromObject(object.options);
            }
            if (object.typeAlias != null)
                message.typeAlias = String(object.typeAlias);
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".data.FeatureDbo.description: object expected");
                message.description = $root.data.DescriptionDbo.fromObject(object.description);
            }
            if (object.stacks != null) {
                if (typeof object.stacks !== "object")
                    throw TypeError(".data.FeatureDbo.stacks: object expected");
                message.stacks = $root.data.StacksDbo.fromObject(object.stacks);
            }
            if (object.conditionalStacks) {
                if (!Array.isArray(object.conditionalStacks))
                    throw TypeError(".data.FeatureDbo.conditionalStacks: array expected");
                message.conditionalStacks = [];
                for (let i = 0; i < object.conditionalStacks.length; ++i) {
                    if (typeof object.conditionalStacks[i] !== "object")
                        throw TypeError(".data.FeatureDbo.conditionalStacks: object expected");
                    message.conditionalStacks[i] = $root.data.ConditionalStackDbo.fromObject(object.conditionalStacks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FeatureDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.FeatureDbo
         * @static
         * @param {data.FeatureDbo} message FeatureDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatureDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.tags = [];
                object.conditionalStacks = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.enabledFormula = "";
                object.options = null;
                object.typeAlias = "";
                object.description = null;
                object.stacks = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (let j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.enabledFormula != null && message.hasOwnProperty("enabledFormula"))
                object.enabledFormula = message.enabledFormula;
            if (message.maxStacks != null && message.hasOwnProperty("maxStacks")) {
                object.maxStacks = message.maxStacks;
                if (options.oneofs)
                    object._maxStacks = "maxStacks";
            }
            if (message.label != null && message.hasOwnProperty("label")) {
                object.label = message.label;
                if (options.oneofs)
                    object._label = "label";
            }
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = $root.data.FeatureOptionsDbo.toObject(message.options, options);
            if (message.typeAlias != null && message.hasOwnProperty("typeAlias"))
                object.typeAlias = message.typeAlias;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.data.DescriptionDbo.toObject(message.description, options);
            if (message.stacks != null && message.hasOwnProperty("stacks"))
                object.stacks = $root.data.StacksDbo.toObject(message.stacks, options);
            if (message.conditionalStacks && message.conditionalStacks.length) {
                object.conditionalStacks = [];
                for (let j = 0; j < message.conditionalStacks.length; ++j)
                    object.conditionalStacks[j] = $root.data.ConditionalStackDbo.toObject(message.conditionalStacks[j], options);
            }
            return object;
        };

        /**
         * Converts this FeatureDbo to JSON.
         * @function toJSON
         * @memberof data.FeatureDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatureDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatureDbo
         * @function getTypeUrl
         * @memberof data.FeatureDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatureDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.FeatureDbo";
        };

        return FeatureDbo;
    })();

    data.FeatureOptionsDbo = (function() {

        /**
         * Properties of a FeatureOptionsDbo.
         * @memberof data
         * @interface IFeatureOptionsDbo
         * @property {data.FeatureOptionsDbo.Select|null} [select] FeatureOptionsDbo select
         */

        /**
         * Constructs a new FeatureOptionsDbo.
         * @memberof data
         * @classdesc Represents a FeatureOptionsDbo.
         * @implements IFeatureOptionsDbo
         * @constructor
         * @param {data.IFeatureOptionsDbo=} [properties] Properties to set
         */
        function FeatureOptionsDbo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureOptionsDbo select.
         * @member {data.FeatureOptionsDbo.Select|null|undefined} select
         * @memberof data.FeatureOptionsDbo
         * @instance
         */
        FeatureOptionsDbo.prototype.select = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * FeatureOptionsDbo option.
         * @member {"select"|undefined} option
         * @memberof data.FeatureOptionsDbo
         * @instance
         */
        Object.defineProperty(FeatureOptionsDbo.prototype, "option", {
            get: $util.oneOfGetter($oneOfFields = ["select"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FeatureOptionsDbo instance using the specified properties.
         * @function create
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {data.IFeatureOptionsDbo=} [properties] Properties to set
         * @returns {data.FeatureOptionsDbo} FeatureOptionsDbo instance
         */
        FeatureOptionsDbo.create = function create(properties) {
            return new FeatureOptionsDbo(properties);
        };

        /**
         * Encodes the specified FeatureOptionsDbo message. Does not implicitly {@link data.FeatureOptionsDbo.verify|verify} messages.
         * @function encode
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {data.FeatureOptionsDbo} message FeatureOptionsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureOptionsDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.select != null && Object.hasOwnProperty.call(message, "select"))
                $root.data.FeatureOptionsDbo.Select.encode(message.select, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeatureOptionsDbo message, length delimited. Does not implicitly {@link data.FeatureOptionsDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {data.FeatureOptionsDbo} message FeatureOptionsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureOptionsDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatureOptionsDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.FeatureOptionsDbo} FeatureOptionsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureOptionsDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FeatureOptionsDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.select = $root.data.FeatureOptionsDbo.Select.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeatureOptionsDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.FeatureOptionsDbo} FeatureOptionsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureOptionsDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatureOptionsDbo message.
         * @function verify
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatureOptionsDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.select != null && message.hasOwnProperty("select")) {
                properties.option = 1;
                {
                    let error = $root.data.FeatureOptionsDbo.Select.verify(message.select);
                    if (error)
                        return "select." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FeatureOptionsDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.FeatureOptionsDbo} FeatureOptionsDbo
         */
        FeatureOptionsDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.FeatureOptionsDbo)
                return object;
            let message = new $root.data.FeatureOptionsDbo();
            if (object.select != null) {
                if (typeof object.select !== "object")
                    throw TypeError(".data.FeatureOptionsDbo.select: object expected");
                message.select = $root.data.FeatureOptionsDbo.Select.fromObject(object.select);
            }
            return message;
        };

        /**
         * Creates a plain object from a FeatureOptionsDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {data.FeatureOptionsDbo} message FeatureOptionsDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatureOptionsDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.select != null && message.hasOwnProperty("select")) {
                object.select = $root.data.FeatureOptionsDbo.Select.toObject(message.select, options);
                if (options.oneofs)
                    object.option = "select";
            }
            return object;
        };

        /**
         * Converts this FeatureOptionsDbo to JSON.
         * @function toJSON
         * @memberof data.FeatureOptionsDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatureOptionsDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatureOptionsDbo
         * @function getTypeUrl
         * @memberof data.FeatureOptionsDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatureOptionsDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.FeatureOptionsDbo";
        };

        FeatureOptionsDbo.Select = (function() {

            /**
             * Properties of a Select.
             * @memberof data.FeatureOptionsDbo
             * @interface ISelect
             * @property {string|null} [optionTag] Select optionTag
             * @property {string|null} [idTemplate] Select idTemplate
             * @property {string|null} [prerequisitesTemplate] Select prerequisitesTemplate
             */

            /**
             * Constructs a new Select.
             * @memberof data.FeatureOptionsDbo
             * @classdesc Represents a Select.
             * @implements ISelect
             * @constructor
             * @param {data.FeatureOptionsDbo.ISelect=} [properties] Properties to set
             */
            function Select(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Select optionTag.
             * @member {string} optionTag
             * @memberof data.FeatureOptionsDbo.Select
             * @instance
             */
            Select.prototype.optionTag = "";

            /**
             * Select idTemplate.
             * @member {string} idTemplate
             * @memberof data.FeatureOptionsDbo.Select
             * @instance
             */
            Select.prototype.idTemplate = "";

            /**
             * Select prerequisitesTemplate.
             * @member {string} prerequisitesTemplate
             * @memberof data.FeatureOptionsDbo.Select
             * @instance
             */
            Select.prototype.prerequisitesTemplate = "";

            /**
             * Creates a new Select instance using the specified properties.
             * @function create
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {data.FeatureOptionsDbo.ISelect=} [properties] Properties to set
             * @returns {data.FeatureOptionsDbo.Select} Select instance
             */
            Select.create = function create(properties) {
                return new Select(properties);
            };

            /**
             * Encodes the specified Select message. Does not implicitly {@link data.FeatureOptionsDbo.Select.verify|verify} messages.
             * @function encode
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {data.FeatureOptionsDbo.Select} message Select message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Select.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.optionTag != null && Object.hasOwnProperty.call(message, "optionTag"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.optionTag);
                if (message.idTemplate != null && Object.hasOwnProperty.call(message, "idTemplate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.idTemplate);
                if (message.prerequisitesTemplate != null && Object.hasOwnProperty.call(message, "prerequisitesTemplate"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.prerequisitesTemplate);
                return writer;
            };

            /**
             * Encodes the specified Select message, length delimited. Does not implicitly {@link data.FeatureOptionsDbo.Select.verify|verify} messages.
             * @function encodeDelimited
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {data.FeatureOptionsDbo.Select} message Select message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Select.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Select message from the specified reader or buffer.
             * @function decode
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {data.FeatureOptionsDbo.Select} Select
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Select.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.FeatureOptionsDbo.Select();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.optionTag = reader.string();
                            break;
                        }
                    case 2: {
                            message.idTemplate = reader.string();
                            break;
                        }
                    case 3: {
                            message.prerequisitesTemplate = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Select message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {data.FeatureOptionsDbo.Select} Select
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Select.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Select message.
             * @function verify
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Select.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.optionTag != null && message.hasOwnProperty("optionTag"))
                    if (!$util.isString(message.optionTag))
                        return "optionTag: string expected";
                if (message.idTemplate != null && message.hasOwnProperty("idTemplate"))
                    if (!$util.isString(message.idTemplate))
                        return "idTemplate: string expected";
                if (message.prerequisitesTemplate != null && message.hasOwnProperty("prerequisitesTemplate"))
                    if (!$util.isString(message.prerequisitesTemplate))
                        return "prerequisitesTemplate: string expected";
                return null;
            };

            /**
             * Creates a Select message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {data.FeatureOptionsDbo.Select} Select
             */
            Select.fromObject = function fromObject(object) {
                if (object instanceof $root.data.FeatureOptionsDbo.Select)
                    return object;
                let message = new $root.data.FeatureOptionsDbo.Select();
                if (object.optionTag != null)
                    message.optionTag = String(object.optionTag);
                if (object.idTemplate != null)
                    message.idTemplate = String(object.idTemplate);
                if (object.prerequisitesTemplate != null)
                    message.prerequisitesTemplate = String(object.prerequisitesTemplate);
                return message;
            };

            /**
             * Creates a plain object from a Select message. Also converts values to other types if specified.
             * @function toObject
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {data.FeatureOptionsDbo.Select} message Select
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Select.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.optionTag = "";
                    object.idTemplate = "";
                    object.prerequisitesTemplate = "";
                }
                if (message.optionTag != null && message.hasOwnProperty("optionTag"))
                    object.optionTag = message.optionTag;
                if (message.idTemplate != null && message.hasOwnProperty("idTemplate"))
                    object.idTemplate = message.idTemplate;
                if (message.prerequisitesTemplate != null && message.hasOwnProperty("prerequisitesTemplate"))
                    object.prerequisitesTemplate = message.prerequisitesTemplate;
                return object;
            };

            /**
             * Converts this Select to JSON.
             * @function toJSON
             * @memberof data.FeatureOptionsDbo.Select
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Select.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Select
             * @function getTypeUrl
             * @memberof data.FeatureOptionsDbo.Select
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Select.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/data.FeatureOptionsDbo.Select";
            };

            return Select;
        })();

        return FeatureOptionsDbo;
    })();

    data.CharacterTemplateDbo = (function() {

        /**
         * Properties of a CharacterTemplateDbo.
         * @memberof data
         * @interface ICharacterTemplateDbo
         * @property {Array.<data.CharacterLevelTemplateDbo>|null} [levels] CharacterTemplateDbo levels
         */

        /**
         * Constructs a new CharacterTemplateDbo.
         * @memberof data
         * @classdesc Represents a CharacterTemplateDbo.
         * @implements ICharacterTemplateDbo
         * @constructor
         * @param {data.ICharacterTemplateDbo=} [properties] Properties to set
         */
        function CharacterTemplateDbo(properties) {
            this.levels = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CharacterTemplateDbo levels.
         * @member {Array.<data.CharacterLevelTemplateDbo>} levels
         * @memberof data.CharacterTemplateDbo
         * @instance
         */
        CharacterTemplateDbo.prototype.levels = $util.emptyArray;

        /**
         * Creates a new CharacterTemplateDbo instance using the specified properties.
         * @function create
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {data.ICharacterTemplateDbo=} [properties] Properties to set
         * @returns {data.CharacterTemplateDbo} CharacterTemplateDbo instance
         */
        CharacterTemplateDbo.create = function create(properties) {
            return new CharacterTemplateDbo(properties);
        };

        /**
         * Encodes the specified CharacterTemplateDbo message. Does not implicitly {@link data.CharacterTemplateDbo.verify|verify} messages.
         * @function encode
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {data.CharacterTemplateDbo} message CharacterTemplateDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterTemplateDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.levels != null && message.levels.length)
                for (let i = 0; i < message.levels.length; ++i)
                    $root.data.CharacterLevelTemplateDbo.encode(message.levels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CharacterTemplateDbo message, length delimited. Does not implicitly {@link data.CharacterTemplateDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {data.CharacterTemplateDbo} message CharacterTemplateDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterTemplateDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CharacterTemplateDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.CharacterTemplateDbo} CharacterTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterTemplateDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.CharacterTemplateDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.levels && message.levels.length))
                            message.levels = [];
                        message.levels.push($root.data.CharacterLevelTemplateDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CharacterTemplateDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.CharacterTemplateDbo} CharacterTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterTemplateDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CharacterTemplateDbo message.
         * @function verify
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CharacterTemplateDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.levels != null && message.hasOwnProperty("levels")) {
                if (!Array.isArray(message.levels))
                    return "levels: array expected";
                for (let i = 0; i < message.levels.length; ++i) {
                    let error = $root.data.CharacterLevelTemplateDbo.verify(message.levels[i]);
                    if (error)
                        return "levels." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CharacterTemplateDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.CharacterTemplateDbo} CharacterTemplateDbo
         */
        CharacterTemplateDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.CharacterTemplateDbo)
                return object;
            let message = new $root.data.CharacterTemplateDbo();
            if (object.levels) {
                if (!Array.isArray(object.levels))
                    throw TypeError(".data.CharacterTemplateDbo.levels: array expected");
                message.levels = [];
                for (let i = 0; i < object.levels.length; ++i) {
                    if (typeof object.levels[i] !== "object")
                        throw TypeError(".data.CharacterTemplateDbo.levels: object expected");
                    message.levels[i] = $root.data.CharacterLevelTemplateDbo.fromObject(object.levels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CharacterTemplateDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {data.CharacterTemplateDbo} message CharacterTemplateDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CharacterTemplateDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.levels = [];
            if (message.levels && message.levels.length) {
                object.levels = [];
                for (let j = 0; j < message.levels.length; ++j)
                    object.levels[j] = $root.data.CharacterLevelTemplateDbo.toObject(message.levels[j], options);
            }
            return object;
        };

        /**
         * Converts this CharacterTemplateDbo to JSON.
         * @function toJSON
         * @memberof data.CharacterTemplateDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CharacterTemplateDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CharacterTemplateDbo
         * @function getTypeUrl
         * @memberof data.CharacterTemplateDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CharacterTemplateDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.CharacterTemplateDbo";
        };

        return CharacterTemplateDbo;
    })();

    data.CharacterLevelTemplateDbo = (function() {

        /**
         * Properties of a CharacterLevelTemplateDbo.
         * @memberof data
         * @interface ICharacterLevelTemplateDbo
         * @property {number|null} [levelNumber] CharacterLevelTemplateDbo levelNumber
         * @property {Array.<data.EffectDbo>|null} [effects] CharacterLevelTemplateDbo effects
         * @property {Array.<string>|null} [links] CharacterLevelTemplateDbo links
         * @property {Array.<data.ChoiceDbo>|null} [choices] CharacterLevelTemplateDbo choices
         */

        /**
         * Constructs a new CharacterLevelTemplateDbo.
         * @memberof data
         * @classdesc Represents a CharacterLevelTemplateDbo.
         * @implements ICharacterLevelTemplateDbo
         * @constructor
         * @param {data.ICharacterLevelTemplateDbo=} [properties] Properties to set
         */
        function CharacterLevelTemplateDbo(properties) {
            this.effects = [];
            this.links = [];
            this.choices = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CharacterLevelTemplateDbo levelNumber.
         * @member {number} levelNumber
         * @memberof data.CharacterLevelTemplateDbo
         * @instance
         */
        CharacterLevelTemplateDbo.prototype.levelNumber = 0;

        /**
         * CharacterLevelTemplateDbo effects.
         * @member {Array.<data.EffectDbo>} effects
         * @memberof data.CharacterLevelTemplateDbo
         * @instance
         */
        CharacterLevelTemplateDbo.prototype.effects = $util.emptyArray;

        /**
         * CharacterLevelTemplateDbo links.
         * @member {Array.<string>} links
         * @memberof data.CharacterLevelTemplateDbo
         * @instance
         */
        CharacterLevelTemplateDbo.prototype.links = $util.emptyArray;

        /**
         * CharacterLevelTemplateDbo choices.
         * @member {Array.<data.ChoiceDbo>} choices
         * @memberof data.CharacterLevelTemplateDbo
         * @instance
         */
        CharacterLevelTemplateDbo.prototype.choices = $util.emptyArray;

        /**
         * Creates a new CharacterLevelTemplateDbo instance using the specified properties.
         * @function create
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {data.ICharacterLevelTemplateDbo=} [properties] Properties to set
         * @returns {data.CharacterLevelTemplateDbo} CharacterLevelTemplateDbo instance
         */
        CharacterLevelTemplateDbo.create = function create(properties) {
            return new CharacterLevelTemplateDbo(properties);
        };

        /**
         * Encodes the specified CharacterLevelTemplateDbo message. Does not implicitly {@link data.CharacterLevelTemplateDbo.verify|verify} messages.
         * @function encode
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {data.CharacterLevelTemplateDbo} message CharacterLevelTemplateDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterLevelTemplateDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.levelNumber != null && Object.hasOwnProperty.call(message, "levelNumber"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.levelNumber);
            if (message.effects != null && message.effects.length)
                for (let i = 0; i < message.effects.length; ++i)
                    $root.data.EffectDbo.encode(message.effects[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.links != null && message.links.length)
                for (let i = 0; i < message.links.length; ++i)
                    writer.uint32(/* id 102, wireType 2 =*/818).string(message.links[i]);
            if (message.choices != null && message.choices.length)
                for (let i = 0; i < message.choices.length; ++i)
                    $root.data.ChoiceDbo.encode(message.choices[i], writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CharacterLevelTemplateDbo message, length delimited. Does not implicitly {@link data.CharacterLevelTemplateDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {data.CharacterLevelTemplateDbo} message CharacterLevelTemplateDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterLevelTemplateDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CharacterLevelTemplateDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.CharacterLevelTemplateDbo} CharacterLevelTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterLevelTemplateDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.CharacterLevelTemplateDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.levelNumber = reader.uint32();
                        break;
                    }
                case 101: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.data.EffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 102: {
                        if (!(message.links && message.links.length))
                            message.links = [];
                        message.links.push(reader.string());
                        break;
                    }
                case 103: {
                        if (!(message.choices && message.choices.length))
                            message.choices = [];
                        message.choices.push($root.data.ChoiceDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CharacterLevelTemplateDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.CharacterLevelTemplateDbo} CharacterLevelTemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterLevelTemplateDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CharacterLevelTemplateDbo message.
         * @function verify
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CharacterLevelTemplateDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.levelNumber != null && message.hasOwnProperty("levelNumber"))
                if (!$util.isInteger(message.levelNumber))
                    return "levelNumber: integer expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (let i = 0; i < message.effects.length; ++i) {
                    let error = $root.data.EffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.links != null && message.hasOwnProperty("links")) {
                if (!Array.isArray(message.links))
                    return "links: array expected";
                for (let i = 0; i < message.links.length; ++i)
                    if (!$util.isString(message.links[i]))
                        return "links: string[] expected";
            }
            if (message.choices != null && message.hasOwnProperty("choices")) {
                if (!Array.isArray(message.choices))
                    return "choices: array expected";
                for (let i = 0; i < message.choices.length; ++i) {
                    let error = $root.data.ChoiceDbo.verify(message.choices[i]);
                    if (error)
                        return "choices." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CharacterLevelTemplateDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.CharacterLevelTemplateDbo} CharacterLevelTemplateDbo
         */
        CharacterLevelTemplateDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.CharacterLevelTemplateDbo)
                return object;
            let message = new $root.data.CharacterLevelTemplateDbo();
            if (object.levelNumber != null)
                message.levelNumber = object.levelNumber >>> 0;
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".data.CharacterLevelTemplateDbo.effects: array expected");
                message.effects = [];
                for (let i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".data.CharacterLevelTemplateDbo.effects: object expected");
                    message.effects[i] = $root.data.EffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.links) {
                if (!Array.isArray(object.links))
                    throw TypeError(".data.CharacterLevelTemplateDbo.links: array expected");
                message.links = [];
                for (let i = 0; i < object.links.length; ++i)
                    message.links[i] = String(object.links[i]);
            }
            if (object.choices) {
                if (!Array.isArray(object.choices))
                    throw TypeError(".data.CharacterLevelTemplateDbo.choices: array expected");
                message.choices = [];
                for (let i = 0; i < object.choices.length; ++i) {
                    if (typeof object.choices[i] !== "object")
                        throw TypeError(".data.CharacterLevelTemplateDbo.choices: object expected");
                    message.choices[i] = $root.data.ChoiceDbo.fromObject(object.choices[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CharacterLevelTemplateDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {data.CharacterLevelTemplateDbo} message CharacterLevelTemplateDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CharacterLevelTemplateDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.effects = [];
                object.links = [];
                object.choices = [];
            }
            if (options.defaults)
                object.levelNumber = 0;
            if (message.levelNumber != null && message.hasOwnProperty("levelNumber"))
                object.levelNumber = message.levelNumber;
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (let j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.data.EffectDbo.toObject(message.effects[j], options);
            }
            if (message.links && message.links.length) {
                object.links = [];
                for (let j = 0; j < message.links.length; ++j)
                    object.links[j] = message.links[j];
            }
            if (message.choices && message.choices.length) {
                object.choices = [];
                for (let j = 0; j < message.choices.length; ++j)
                    object.choices[j] = $root.data.ChoiceDbo.toObject(message.choices[j], options);
            }
            return object;
        };

        /**
         * Converts this CharacterLevelTemplateDbo to JSON.
         * @function toJSON
         * @memberof data.CharacterLevelTemplateDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CharacterLevelTemplateDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CharacterLevelTemplateDbo
         * @function getTypeUrl
         * @memberof data.CharacterLevelTemplateDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CharacterLevelTemplateDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.CharacterLevelTemplateDbo";
        };

        return CharacterLevelTemplateDbo;
    })();

    data.SourceModuleDbo = (function() {

        /**
         * Properties of a SourceModuleDbo.
         * @memberof data
         * @interface ISourceModuleDbo
         * @property {string|null} [sourceId] SourceModuleDbo sourceId
         * @property {Array.<data.FeatureSummaryDbo>|null} [features] SourceModuleDbo features
         */

        /**
         * Constructs a new SourceModuleDbo.
         * @memberof data
         * @classdesc Represents a SourceModuleDbo.
         * @implements ISourceModuleDbo
         * @constructor
         * @param {data.ISourceModuleDbo=} [properties] Properties to set
         */
        function SourceModuleDbo(properties) {
            this.features = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SourceModuleDbo sourceId.
         * @member {string} sourceId
         * @memberof data.SourceModuleDbo
         * @instance
         */
        SourceModuleDbo.prototype.sourceId = "";

        /**
         * SourceModuleDbo features.
         * @member {Array.<data.FeatureSummaryDbo>} features
         * @memberof data.SourceModuleDbo
         * @instance
         */
        SourceModuleDbo.prototype.features = $util.emptyArray;

        /**
         * Creates a new SourceModuleDbo instance using the specified properties.
         * @function create
         * @memberof data.SourceModuleDbo
         * @static
         * @param {data.ISourceModuleDbo=} [properties] Properties to set
         * @returns {data.SourceModuleDbo} SourceModuleDbo instance
         */
        SourceModuleDbo.create = function create(properties) {
            return new SourceModuleDbo(properties);
        };

        /**
         * Encodes the specified SourceModuleDbo message. Does not implicitly {@link data.SourceModuleDbo.verify|verify} messages.
         * @function encode
         * @memberof data.SourceModuleDbo
         * @static
         * @param {data.SourceModuleDbo} message SourceModuleDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceModuleDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sourceId);
            if (message.features != null && message.features.length)
                for (let i = 0; i < message.features.length; ++i)
                    $root.data.FeatureSummaryDbo.encode(message.features[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SourceModuleDbo message, length delimited. Does not implicitly {@link data.SourceModuleDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.SourceModuleDbo
         * @static
         * @param {data.SourceModuleDbo} message SourceModuleDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceModuleDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SourceModuleDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.SourceModuleDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.SourceModuleDbo} SourceModuleDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceModuleDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.SourceModuleDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceId = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.features && message.features.length))
                            message.features = [];
                        message.features.push($root.data.FeatureSummaryDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SourceModuleDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.SourceModuleDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.SourceModuleDbo} SourceModuleDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceModuleDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SourceModuleDbo message.
         * @function verify
         * @memberof data.SourceModuleDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SourceModuleDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (!$util.isString(message.sourceId))
                    return "sourceId: string expected";
            if (message.features != null && message.hasOwnProperty("features")) {
                if (!Array.isArray(message.features))
                    return "features: array expected";
                for (let i = 0; i < message.features.length; ++i) {
                    let error = $root.data.FeatureSummaryDbo.verify(message.features[i]);
                    if (error)
                        return "features." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SourceModuleDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.SourceModuleDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.SourceModuleDbo} SourceModuleDbo
         */
        SourceModuleDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.SourceModuleDbo)
                return object;
            let message = new $root.data.SourceModuleDbo();
            if (object.sourceId != null)
                message.sourceId = String(object.sourceId);
            if (object.features) {
                if (!Array.isArray(object.features))
                    throw TypeError(".data.SourceModuleDbo.features: array expected");
                message.features = [];
                for (let i = 0; i < object.features.length; ++i) {
                    if (typeof object.features[i] !== "object")
                        throw TypeError(".data.SourceModuleDbo.features: object expected");
                    message.features[i] = $root.data.FeatureSummaryDbo.fromObject(object.features[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SourceModuleDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.SourceModuleDbo
         * @static
         * @param {data.SourceModuleDbo} message SourceModuleDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SourceModuleDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.features = [];
            if (options.defaults)
                object.sourceId = "";
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.features && message.features.length) {
                object.features = [];
                for (let j = 0; j < message.features.length; ++j)
                    object.features[j] = $root.data.FeatureSummaryDbo.toObject(message.features[j], options);
            }
            return object;
        };

        /**
         * Converts this SourceModuleDbo to JSON.
         * @function toJSON
         * @memberof data.SourceModuleDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SourceModuleDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SourceModuleDbo
         * @function getTypeUrl
         * @memberof data.SourceModuleDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SourceModuleDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.SourceModuleDbo";
        };

        return SourceModuleDbo;
    })();

    data.SourceModuleItemDatabaseDbo = (function() {

        /**
         * Properties of a SourceModuleItemDatabaseDbo.
         * @memberof data
         * @interface ISourceModuleItemDatabaseDbo
         * @property {number|null} [sourceId] SourceModuleItemDatabaseDbo sourceId
         * @property {string|null} [sourceCode] SourceModuleItemDatabaseDbo sourceCode
         * @property {Array.<data.ItemSummaryDbo>|null} [items] SourceModuleItemDatabaseDbo items
         * @property {Array.<data.ItemOptionSetDbo>|null} [optionSets] SourceModuleItemDatabaseDbo optionSets
         * @property {Array.<data.ItemOptionDbo>|null} [options] SourceModuleItemDatabaseDbo options
         */

        /**
         * Constructs a new SourceModuleItemDatabaseDbo.
         * @memberof data
         * @classdesc Represents a SourceModuleItemDatabaseDbo.
         * @implements ISourceModuleItemDatabaseDbo
         * @constructor
         * @param {data.ISourceModuleItemDatabaseDbo=} [properties] Properties to set
         */
        function SourceModuleItemDatabaseDbo(properties) {
            this.items = [];
            this.optionSets = [];
            this.options = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SourceModuleItemDatabaseDbo sourceId.
         * @member {number} sourceId
         * @memberof data.SourceModuleItemDatabaseDbo
         * @instance
         */
        SourceModuleItemDatabaseDbo.prototype.sourceId = 0;

        /**
         * SourceModuleItemDatabaseDbo sourceCode.
         * @member {string} sourceCode
         * @memberof data.SourceModuleItemDatabaseDbo
         * @instance
         */
        SourceModuleItemDatabaseDbo.prototype.sourceCode = "";

        /**
         * SourceModuleItemDatabaseDbo items.
         * @member {Array.<data.ItemSummaryDbo>} items
         * @memberof data.SourceModuleItemDatabaseDbo
         * @instance
         */
        SourceModuleItemDatabaseDbo.prototype.items = $util.emptyArray;

        /**
         * SourceModuleItemDatabaseDbo optionSets.
         * @member {Array.<data.ItemOptionSetDbo>} optionSets
         * @memberof data.SourceModuleItemDatabaseDbo
         * @instance
         */
        SourceModuleItemDatabaseDbo.prototype.optionSets = $util.emptyArray;

        /**
         * SourceModuleItemDatabaseDbo options.
         * @member {Array.<data.ItemOptionDbo>} options
         * @memberof data.SourceModuleItemDatabaseDbo
         * @instance
         */
        SourceModuleItemDatabaseDbo.prototype.options = $util.emptyArray;

        /**
         * Creates a new SourceModuleItemDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {data.ISourceModuleItemDatabaseDbo=} [properties] Properties to set
         * @returns {data.SourceModuleItemDatabaseDbo} SourceModuleItemDatabaseDbo instance
         */
        SourceModuleItemDatabaseDbo.create = function create(properties) {
            return new SourceModuleItemDatabaseDbo(properties);
        };

        /**
         * Encodes the specified SourceModuleItemDatabaseDbo message. Does not implicitly {@link data.SourceModuleItemDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {data.SourceModuleItemDatabaseDbo} message SourceModuleItemDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceModuleItemDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sourceId);
            if (message.sourceCode != null && Object.hasOwnProperty.call(message, "sourceCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceCode);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.data.ItemSummaryDbo.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.optionSets != null && message.optionSets.length)
                for (let i = 0; i < message.optionSets.length; ++i)
                    $root.data.ItemOptionSetDbo.encode(message.optionSets[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.options != null && message.options.length)
                for (let i = 0; i < message.options.length; ++i)
                    $root.data.ItemOptionDbo.encode(message.options[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SourceModuleItemDatabaseDbo message, length delimited. Does not implicitly {@link data.SourceModuleItemDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {data.SourceModuleItemDatabaseDbo} message SourceModuleItemDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceModuleItemDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SourceModuleItemDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.SourceModuleItemDatabaseDbo} SourceModuleItemDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceModuleItemDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.SourceModuleItemDatabaseDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.sourceCode = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.data.ItemSummaryDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.optionSets && message.optionSets.length))
                            message.optionSets = [];
                        message.optionSets.push($root.data.ItemOptionSetDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.data.ItemOptionDbo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SourceModuleItemDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.SourceModuleItemDatabaseDbo} SourceModuleItemDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceModuleItemDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SourceModuleItemDatabaseDbo message.
         * @function verify
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SourceModuleItemDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (!$util.isInteger(message.sourceId))
                    return "sourceId: integer expected";
            if (message.sourceCode != null && message.hasOwnProperty("sourceCode"))
                if (!$util.isString(message.sourceCode))
                    return "sourceCode: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.data.ItemSummaryDbo.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.optionSets != null && message.hasOwnProperty("optionSets")) {
                if (!Array.isArray(message.optionSets))
                    return "optionSets: array expected";
                for (let i = 0; i < message.optionSets.length; ++i) {
                    let error = $root.data.ItemOptionSetDbo.verify(message.optionSets[i]);
                    if (error)
                        return "optionSets." + error;
                }
            }
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (let i = 0; i < message.options.length; ++i) {
                    let error = $root.data.ItemOptionDbo.verify(message.options[i]);
                    if (error)
                        return "options." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SourceModuleItemDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.SourceModuleItemDatabaseDbo} SourceModuleItemDatabaseDbo
         */
        SourceModuleItemDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.SourceModuleItemDatabaseDbo)
                return object;
            let message = new $root.data.SourceModuleItemDatabaseDbo();
            if (object.sourceId != null)
                message.sourceId = object.sourceId >>> 0;
            if (object.sourceCode != null)
                message.sourceCode = String(object.sourceCode);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".data.SourceModuleItemDatabaseDbo.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".data.SourceModuleItemDatabaseDbo.items: object expected");
                    message.items[i] = $root.data.ItemSummaryDbo.fromObject(object.items[i]);
                }
            }
            if (object.optionSets) {
                if (!Array.isArray(object.optionSets))
                    throw TypeError(".data.SourceModuleItemDatabaseDbo.optionSets: array expected");
                message.optionSets = [];
                for (let i = 0; i < object.optionSets.length; ++i) {
                    if (typeof object.optionSets[i] !== "object")
                        throw TypeError(".data.SourceModuleItemDatabaseDbo.optionSets: object expected");
                    message.optionSets[i] = $root.data.ItemOptionSetDbo.fromObject(object.optionSets[i]);
                }
            }
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".data.SourceModuleItemDatabaseDbo.options: array expected");
                message.options = [];
                for (let i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".data.SourceModuleItemDatabaseDbo.options: object expected");
                    message.options[i] = $root.data.ItemOptionDbo.fromObject(object.options[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SourceModuleItemDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {data.SourceModuleItemDatabaseDbo} message SourceModuleItemDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SourceModuleItemDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.items = [];
                object.optionSets = [];
                object.options = [];
            }
            if (options.defaults) {
                object.sourceId = 0;
                object.sourceCode = "";
            }
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.sourceCode != null && message.hasOwnProperty("sourceCode"))
                object.sourceCode = message.sourceCode;
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.data.ItemSummaryDbo.toObject(message.items[j], options);
            }
            if (message.optionSets && message.optionSets.length) {
                object.optionSets = [];
                for (let j = 0; j < message.optionSets.length; ++j)
                    object.optionSets[j] = $root.data.ItemOptionSetDbo.toObject(message.optionSets[j], options);
            }
            if (message.options && message.options.length) {
                object.options = [];
                for (let j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.data.ItemOptionDbo.toObject(message.options[j], options);
            }
            return object;
        };

        /**
         * Converts this SourceModuleItemDatabaseDbo to JSON.
         * @function toJSON
         * @memberof data.SourceModuleItemDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SourceModuleItemDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SourceModuleItemDatabaseDbo
         * @function getTypeUrl
         * @memberof data.SourceModuleItemDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SourceModuleItemDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.SourceModuleItemDatabaseDbo";
        };

        return SourceModuleItemDatabaseDbo;
    })();

    data.ItemSummaryDbo = (function() {

        /**
         * Properties of an ItemSummaryDbo.
         * @memberof data
         * @interface IItemSummaryDbo
         * @property {number|null} [id] ItemSummaryDbo id
         * @property {string|null} [name] ItemSummaryDbo name
         * @property {Array.<string>|null} [tags] ItemSummaryDbo tags
         * @property {number|null} [cost] ItemSummaryDbo cost
         * @property {Array.<number>|null} [optionSets] ItemSummaryDbo optionSets
         * @property {number|null} [weight] ItemSummaryDbo weight
         */

        /**
         * Constructs a new ItemSummaryDbo.
         * @memberof data
         * @classdesc Represents an ItemSummaryDbo.
         * @implements IItemSummaryDbo
         * @constructor
         * @param {data.IItemSummaryDbo=} [properties] Properties to set
         */
        function ItemSummaryDbo(properties) {
            this.tags = [];
            this.optionSets = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemSummaryDbo id.
         * @member {number} id
         * @memberof data.ItemSummaryDbo
         * @instance
         */
        ItemSummaryDbo.prototype.id = 0;

        /**
         * ItemSummaryDbo name.
         * @member {string} name
         * @memberof data.ItemSummaryDbo
         * @instance
         */
        ItemSummaryDbo.prototype.name = "";

        /**
         * ItemSummaryDbo tags.
         * @member {Array.<string>} tags
         * @memberof data.ItemSummaryDbo
         * @instance
         */
        ItemSummaryDbo.prototype.tags = $util.emptyArray;

        /**
         * ItemSummaryDbo cost.
         * @member {number} cost
         * @memberof data.ItemSummaryDbo
         * @instance
         */
        ItemSummaryDbo.prototype.cost = 0;

        /**
         * ItemSummaryDbo optionSets.
         * @member {Array.<number>} optionSets
         * @memberof data.ItemSummaryDbo
         * @instance
         */
        ItemSummaryDbo.prototype.optionSets = $util.emptyArray;

        /**
         * ItemSummaryDbo weight.
         * @member {number} weight
         * @memberof data.ItemSummaryDbo
         * @instance
         */
        ItemSummaryDbo.prototype.weight = 0;

        /**
         * Creates a new ItemSummaryDbo instance using the specified properties.
         * @function create
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {data.IItemSummaryDbo=} [properties] Properties to set
         * @returns {data.ItemSummaryDbo} ItemSummaryDbo instance
         */
        ItemSummaryDbo.create = function create(properties) {
            return new ItemSummaryDbo(properties);
        };

        /**
         * Encodes the specified ItemSummaryDbo message. Does not implicitly {@link data.ItemSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {data.ItemSummaryDbo} message ItemSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tags != null && message.tags.length)
                for (let i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.cost);
            if (message.optionSets != null && message.optionSets.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.optionSets.length; ++i)
                    writer.uint32(message.optionSets[i]);
                writer.ldelim();
            }
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.weight);
            return writer;
        };

        /**
         * Encodes the specified ItemSummaryDbo message, length delimited. Does not implicitly {@link data.ItemSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {data.ItemSummaryDbo} message ItemSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.ItemSummaryDbo} ItemSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.ItemSummaryDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 4: {
                        message.cost = reader.double();
                        break;
                    }
                case 5: {
                        if (!(message.optionSets && message.optionSets.length))
                            message.optionSets = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.optionSets.push(reader.uint32());
                        } else
                            message.optionSets.push(reader.uint32());
                        break;
                    }
                case 6: {
                        message.weight = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.ItemSummaryDbo} ItemSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemSummaryDbo message.
         * @function verify
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (let i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.cost != null && message.hasOwnProperty("cost"))
                if (typeof message.cost !== "number")
                    return "cost: number expected";
            if (message.optionSets != null && message.hasOwnProperty("optionSets")) {
                if (!Array.isArray(message.optionSets))
                    return "optionSets: array expected";
                for (let i = 0; i < message.optionSets.length; ++i)
                    if (!$util.isInteger(message.optionSets[i]))
                        return "optionSets: integer[] expected";
            }
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (typeof message.weight !== "number")
                    return "weight: number expected";
            return null;
        };

        /**
         * Creates an ItemSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.ItemSummaryDbo} ItemSummaryDbo
         */
        ItemSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.ItemSummaryDbo)
                return object;
            let message = new $root.data.ItemSummaryDbo();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".data.ItemSummaryDbo.tags: array expected");
                message.tags = [];
                for (let i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.cost != null)
                message.cost = Number(object.cost);
            if (object.optionSets) {
                if (!Array.isArray(object.optionSets))
                    throw TypeError(".data.ItemSummaryDbo.optionSets: array expected");
                message.optionSets = [];
                for (let i = 0; i < object.optionSets.length; ++i)
                    message.optionSets[i] = object.optionSets[i] >>> 0;
            }
            if (object.weight != null)
                message.weight = Number(object.weight);
            return message;
        };

        /**
         * Creates a plain object from an ItemSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {data.ItemSummaryDbo} message ItemSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.tags = [];
                object.optionSets = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.cost = 0;
                object.weight = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (let j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.cost != null && message.hasOwnProperty("cost"))
                object.cost = options.json && !isFinite(message.cost) ? String(message.cost) : message.cost;
            if (message.optionSets && message.optionSets.length) {
                object.optionSets = [];
                for (let j = 0; j < message.optionSets.length; ++j)
                    object.optionSets[j] = message.optionSets[j];
            }
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = options.json && !isFinite(message.weight) ? String(message.weight) : message.weight;
            return object;
        };

        /**
         * Converts this ItemSummaryDbo to JSON.
         * @function toJSON
         * @memberof data.ItemSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ItemSummaryDbo
         * @function getTypeUrl
         * @memberof data.ItemSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.ItemSummaryDbo";
        };

        return ItemSummaryDbo;
    })();

    data.ItemDbo = (function() {

        /**
         * Properties of an ItemDbo.
         * @memberof data
         * @interface IItemDbo
         * @property {number|null} [id] ItemDbo id
         * @property {string|null} [name] ItemDbo name
         * @property {Array.<string>|null} [tags] ItemDbo tags
         * @property {number|null} [cost] ItemDbo cost
         * @property {Array.<number>|null} [optionSets] ItemDbo optionSets
         * @property {number|null} [weight] ItemDbo weight
         * @property {data.DescriptionDbo|null} [description] ItemDbo description
         */

        /**
         * Constructs a new ItemDbo.
         * @memberof data
         * @classdesc Represents an ItemDbo.
         * @implements IItemDbo
         * @constructor
         * @param {data.IItemDbo=} [properties] Properties to set
         */
        function ItemDbo(properties) {
            this.tags = [];
            this.optionSets = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemDbo id.
         * @member {number} id
         * @memberof data.ItemDbo
         * @instance
         */
        ItemDbo.prototype.id = 0;

        /**
         * ItemDbo name.
         * @member {string} name
         * @memberof data.ItemDbo
         * @instance
         */
        ItemDbo.prototype.name = "";

        /**
         * ItemDbo tags.
         * @member {Array.<string>} tags
         * @memberof data.ItemDbo
         * @instance
         */
        ItemDbo.prototype.tags = $util.emptyArray;

        /**
         * ItemDbo cost.
         * @member {number} cost
         * @memberof data.ItemDbo
         * @instance
         */
        ItemDbo.prototype.cost = 0;

        /**
         * ItemDbo optionSets.
         * @member {Array.<number>} optionSets
         * @memberof data.ItemDbo
         * @instance
         */
        ItemDbo.prototype.optionSets = $util.emptyArray;

        /**
         * ItemDbo weight.
         * @member {number} weight
         * @memberof data.ItemDbo
         * @instance
         */
        ItemDbo.prototype.weight = 0;

        /**
         * ItemDbo description.
         * @member {data.DescriptionDbo|null|undefined} description
         * @memberof data.ItemDbo
         * @instance
         */
        ItemDbo.prototype.description = null;

        /**
         * Creates a new ItemDbo instance using the specified properties.
         * @function create
         * @memberof data.ItemDbo
         * @static
         * @param {data.IItemDbo=} [properties] Properties to set
         * @returns {data.ItemDbo} ItemDbo instance
         */
        ItemDbo.create = function create(properties) {
            return new ItemDbo(properties);
        };

        /**
         * Encodes the specified ItemDbo message. Does not implicitly {@link data.ItemDbo.verify|verify} messages.
         * @function encode
         * @memberof data.ItemDbo
         * @static
         * @param {data.ItemDbo} message ItemDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tags != null && message.tags.length)
                for (let i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.cost);
            if (message.optionSets != null && message.optionSets.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.optionSets.length; ++i)
                    writer.uint32(message.optionSets[i]);
                writer.ldelim();
            }
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.weight);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.data.DescriptionDbo.encode(message.description, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemDbo message, length delimited. Does not implicitly {@link data.ItemDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.ItemDbo
         * @static
         * @param {data.ItemDbo} message ItemDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.ItemDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.ItemDbo} ItemDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.ItemDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 4: {
                        message.cost = reader.double();
                        break;
                    }
                case 5: {
                        if (!(message.optionSets && message.optionSets.length))
                            message.optionSets = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.optionSets.push(reader.uint32());
                        } else
                            message.optionSets.push(reader.uint32());
                        break;
                    }
                case 6: {
                        message.weight = reader.double();
                        break;
                    }
                case 100: {
                        message.description = $root.data.DescriptionDbo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.ItemDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.ItemDbo} ItemDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemDbo message.
         * @function verify
         * @memberof data.ItemDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (let i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.cost != null && message.hasOwnProperty("cost"))
                if (typeof message.cost !== "number")
                    return "cost: number expected";
            if (message.optionSets != null && message.hasOwnProperty("optionSets")) {
                if (!Array.isArray(message.optionSets))
                    return "optionSets: array expected";
                for (let i = 0; i < message.optionSets.length; ++i)
                    if (!$util.isInteger(message.optionSets[i]))
                        return "optionSets: integer[] expected";
            }
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (typeof message.weight !== "number")
                    return "weight: number expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                let error = $root.data.DescriptionDbo.verify(message.description);
                if (error)
                    return "description." + error;
            }
            return null;
        };

        /**
         * Creates an ItemDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.ItemDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.ItemDbo} ItemDbo
         */
        ItemDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.ItemDbo)
                return object;
            let message = new $root.data.ItemDbo();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".data.ItemDbo.tags: array expected");
                message.tags = [];
                for (let i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.cost != null)
                message.cost = Number(object.cost);
            if (object.optionSets) {
                if (!Array.isArray(object.optionSets))
                    throw TypeError(".data.ItemDbo.optionSets: array expected");
                message.optionSets = [];
                for (let i = 0; i < object.optionSets.length; ++i)
                    message.optionSets[i] = object.optionSets[i] >>> 0;
            }
            if (object.weight != null)
                message.weight = Number(object.weight);
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".data.ItemDbo.description: object expected");
                message.description = $root.data.DescriptionDbo.fromObject(object.description);
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.ItemDbo
         * @static
         * @param {data.ItemDbo} message ItemDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.tags = [];
                object.optionSets = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.cost = 0;
                object.weight = 0;
                object.description = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (let j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.cost != null && message.hasOwnProperty("cost"))
                object.cost = options.json && !isFinite(message.cost) ? String(message.cost) : message.cost;
            if (message.optionSets && message.optionSets.length) {
                object.optionSets = [];
                for (let j = 0; j < message.optionSets.length; ++j)
                    object.optionSets[j] = message.optionSets[j];
            }
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = options.json && !isFinite(message.weight) ? String(message.weight) : message.weight;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.data.DescriptionDbo.toObject(message.description, options);
            return object;
        };

        /**
         * Converts this ItemDbo to JSON.
         * @function toJSON
         * @memberof data.ItemDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ItemDbo
         * @function getTypeUrl
         * @memberof data.ItemDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.ItemDbo";
        };

        return ItemDbo;
    })();

    data.ItemOptionSetDbo = (function() {

        /**
         * Properties of an ItemOptionSetDbo.
         * @memberof data
         * @interface IItemOptionSetDbo
         * @property {number|null} [id] ItemOptionSetDbo id
         * @property {boolean|null} [hasPoints] ItemOptionSetDbo hasPoints
         * @property {boolean|null} [hasMaxPoints] ItemOptionSetDbo hasMaxPoints
         * @property {number|null} [maxPoints] ItemOptionSetDbo maxPoints
         * @property {Object.<string,number>|null} [pointCurrencyCost] ItemOptionSetDbo pointCurrencyCost
         * @property {Array.<number>|null} [optionTags] ItemOptionSetDbo optionTags
         */

        /**
         * Constructs a new ItemOptionSetDbo.
         * @memberof data
         * @classdesc Represents an ItemOptionSetDbo.
         * @implements IItemOptionSetDbo
         * @constructor
         * @param {data.IItemOptionSetDbo=} [properties] Properties to set
         */
        function ItemOptionSetDbo(properties) {
            this.pointCurrencyCost = {};
            this.optionTags = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemOptionSetDbo id.
         * @member {number} id
         * @memberof data.ItemOptionSetDbo
         * @instance
         */
        ItemOptionSetDbo.prototype.id = 0;

        /**
         * ItemOptionSetDbo hasPoints.
         * @member {boolean} hasPoints
         * @memberof data.ItemOptionSetDbo
         * @instance
         */
        ItemOptionSetDbo.prototype.hasPoints = false;

        /**
         * ItemOptionSetDbo hasMaxPoints.
         * @member {boolean} hasMaxPoints
         * @memberof data.ItemOptionSetDbo
         * @instance
         */
        ItemOptionSetDbo.prototype.hasMaxPoints = false;

        /**
         * ItemOptionSetDbo maxPoints.
         * @member {number} maxPoints
         * @memberof data.ItemOptionSetDbo
         * @instance
         */
        ItemOptionSetDbo.prototype.maxPoints = 0;

        /**
         * ItemOptionSetDbo pointCurrencyCost.
         * @member {Object.<string,number>} pointCurrencyCost
         * @memberof data.ItemOptionSetDbo
         * @instance
         */
        ItemOptionSetDbo.prototype.pointCurrencyCost = $util.emptyObject;

        /**
         * ItemOptionSetDbo optionTags.
         * @member {Array.<number>} optionTags
         * @memberof data.ItemOptionSetDbo
         * @instance
         */
        ItemOptionSetDbo.prototype.optionTags = $util.emptyArray;

        /**
         * Creates a new ItemOptionSetDbo instance using the specified properties.
         * @function create
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {data.IItemOptionSetDbo=} [properties] Properties to set
         * @returns {data.ItemOptionSetDbo} ItemOptionSetDbo instance
         */
        ItemOptionSetDbo.create = function create(properties) {
            return new ItemOptionSetDbo(properties);
        };

        /**
         * Encodes the specified ItemOptionSetDbo message. Does not implicitly {@link data.ItemOptionSetDbo.verify|verify} messages.
         * @function encode
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {data.ItemOptionSetDbo} message ItemOptionSetDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemOptionSetDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.hasPoints != null && Object.hasOwnProperty.call(message, "hasPoints"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasPoints);
            if (message.hasMaxPoints != null && Object.hasOwnProperty.call(message, "hasMaxPoints"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hasMaxPoints);
            if (message.maxPoints != null && Object.hasOwnProperty.call(message, "maxPoints"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maxPoints);
            if (message.pointCurrencyCost != null && Object.hasOwnProperty.call(message, "pointCurrencyCost"))
                for (let keys = Object.keys(message.pointCurrencyCost), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.pointCurrencyCost[keys[i]]).ldelim();
            if (message.optionTags != null && message.optionTags.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.optionTags.length; ++i)
                    writer.int32(message.optionTags[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ItemOptionSetDbo message, length delimited. Does not implicitly {@link data.ItemOptionSetDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {data.ItemOptionSetDbo} message ItemOptionSetDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemOptionSetDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemOptionSetDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.ItemOptionSetDbo} ItemOptionSetDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOptionSetDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.ItemOptionSetDbo(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.hasPoints = reader.bool();
                        break;
                    }
                case 3: {
                        message.hasMaxPoints = reader.bool();
                        break;
                    }
                case 4: {
                        message.maxPoints = reader.uint32();
                        break;
                    }
                case 5: {
                        if (message.pointCurrencyCost === $util.emptyObject)
                            message.pointCurrencyCost = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = reader.double();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.pointCurrencyCost[key] = value;
                        break;
                    }
                case 6: {
                        if (!(message.optionTags && message.optionTags.length))
                            message.optionTags = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.optionTags.push(reader.int32());
                        } else
                            message.optionTags.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemOptionSetDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.ItemOptionSetDbo} ItemOptionSetDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOptionSetDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemOptionSetDbo message.
         * @function verify
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemOptionSetDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.hasPoints != null && message.hasOwnProperty("hasPoints"))
                if (typeof message.hasPoints !== "boolean")
                    return "hasPoints: boolean expected";
            if (message.hasMaxPoints != null && message.hasOwnProperty("hasMaxPoints"))
                if (typeof message.hasMaxPoints !== "boolean")
                    return "hasMaxPoints: boolean expected";
            if (message.maxPoints != null && message.hasOwnProperty("maxPoints"))
                if (!$util.isInteger(message.maxPoints))
                    return "maxPoints: integer expected";
            if (message.pointCurrencyCost != null && message.hasOwnProperty("pointCurrencyCost")) {
                if (!$util.isObject(message.pointCurrencyCost))
                    return "pointCurrencyCost: object expected";
                let key = Object.keys(message.pointCurrencyCost);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "pointCurrencyCost: integer key{k:uint32} expected";
                    if (typeof message.pointCurrencyCost[key[i]] !== "number")
                        return "pointCurrencyCost: number{k:uint32} expected";
                }
            }
            if (message.optionTags != null && message.hasOwnProperty("optionTags")) {
                if (!Array.isArray(message.optionTags))
                    return "optionTags: array expected";
                for (let i = 0; i < message.optionTags.length; ++i)
                    if (!$util.isInteger(message.optionTags[i]))
                        return "optionTags: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an ItemOptionSetDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.ItemOptionSetDbo} ItemOptionSetDbo
         */
        ItemOptionSetDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.ItemOptionSetDbo)
                return object;
            let message = new $root.data.ItemOptionSetDbo();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.hasPoints != null)
                message.hasPoints = Boolean(object.hasPoints);
            if (object.hasMaxPoints != null)
                message.hasMaxPoints = Boolean(object.hasMaxPoints);
            if (object.maxPoints != null)
                message.maxPoints = object.maxPoints >>> 0;
            if (object.pointCurrencyCost) {
                if (typeof object.pointCurrencyCost !== "object")
                    throw TypeError(".data.ItemOptionSetDbo.pointCurrencyCost: object expected");
                message.pointCurrencyCost = {};
                for (let keys = Object.keys(object.pointCurrencyCost), i = 0; i < keys.length; ++i)
                    message.pointCurrencyCost[keys[i]] = Number(object.pointCurrencyCost[keys[i]]);
            }
            if (object.optionTags) {
                if (!Array.isArray(object.optionTags))
                    throw TypeError(".data.ItemOptionSetDbo.optionTags: array expected");
                message.optionTags = [];
                for (let i = 0; i < object.optionTags.length; ++i)
                    message.optionTags[i] = object.optionTags[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemOptionSetDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {data.ItemOptionSetDbo} message ItemOptionSetDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemOptionSetDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.optionTags = [];
            if (options.objects || options.defaults)
                object.pointCurrencyCost = {};
            if (options.defaults) {
                object.id = 0;
                object.hasPoints = false;
                object.hasMaxPoints = false;
                object.maxPoints = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.hasPoints != null && message.hasOwnProperty("hasPoints"))
                object.hasPoints = message.hasPoints;
            if (message.hasMaxPoints != null && message.hasOwnProperty("hasMaxPoints"))
                object.hasMaxPoints = message.hasMaxPoints;
            if (message.maxPoints != null && message.hasOwnProperty("maxPoints"))
                object.maxPoints = message.maxPoints;
            let keys2;
            if (message.pointCurrencyCost && (keys2 = Object.keys(message.pointCurrencyCost)).length) {
                object.pointCurrencyCost = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.pointCurrencyCost[keys2[j]] = options.json && !isFinite(message.pointCurrencyCost[keys2[j]]) ? String(message.pointCurrencyCost[keys2[j]]) : message.pointCurrencyCost[keys2[j]];
            }
            if (message.optionTags && message.optionTags.length) {
                object.optionTags = [];
                for (let j = 0; j < message.optionTags.length; ++j)
                    object.optionTags[j] = message.optionTags[j];
            }
            return object;
        };

        /**
         * Converts this ItemOptionSetDbo to JSON.
         * @function toJSON
         * @memberof data.ItemOptionSetDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemOptionSetDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ItemOptionSetDbo
         * @function getTypeUrl
         * @memberof data.ItemOptionSetDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemOptionSetDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.ItemOptionSetDbo";
        };

        return ItemOptionSetDbo;
    })();

    data.ItemOptionDbo = (function() {

        /**
         * Properties of an ItemOptionDbo.
         * @memberof data
         * @interface IItemOptionDbo
         * @property {number|null} [id] ItemOptionDbo id
         * @property {string|null} [name] ItemOptionDbo name
         * @property {string|null} [baseNamePrefix] ItemOptionDbo baseNamePrefix
         * @property {string|null} [baseNamePostfix] ItemOptionDbo baseNamePostfix
         * @property {number|null} [pointCost] ItemOptionDbo pointCost
         * @property {number|null} [currencyCost] ItemOptionDbo currencyCost
         * @property {Array.<number>|null} [tags] ItemOptionDbo tags
         * @property {number|null} [uniquenessTag] ItemOptionDbo uniquenessTag
         * @property {number|null} [currencyCostByWeight] ItemOptionDbo currencyCostByWeight
         */

        /**
         * Constructs a new ItemOptionDbo.
         * @memberof data
         * @classdesc Represents an ItemOptionDbo.
         * @implements IItemOptionDbo
         * @constructor
         * @param {data.IItemOptionDbo=} [properties] Properties to set
         */
        function ItemOptionDbo(properties) {
            this.tags = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemOptionDbo id.
         * @member {number} id
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.id = 0;

        /**
         * ItemOptionDbo name.
         * @member {string} name
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.name = "";

        /**
         * ItemOptionDbo baseNamePrefix.
         * @member {string} baseNamePrefix
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.baseNamePrefix = "";

        /**
         * ItemOptionDbo baseNamePostfix.
         * @member {string} baseNamePostfix
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.baseNamePostfix = "";

        /**
         * ItemOptionDbo pointCost.
         * @member {number} pointCost
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.pointCost = 0;

        /**
         * ItemOptionDbo currencyCost.
         * @member {number} currencyCost
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.currencyCost = 0;

        /**
         * ItemOptionDbo tags.
         * @member {Array.<number>} tags
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.tags = $util.emptyArray;

        /**
         * ItemOptionDbo uniquenessTag.
         * @member {number} uniquenessTag
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.uniquenessTag = 0;

        /**
         * ItemOptionDbo currencyCostByWeight.
         * @member {number} currencyCostByWeight
         * @memberof data.ItemOptionDbo
         * @instance
         */
        ItemOptionDbo.prototype.currencyCostByWeight = 0;

        /**
         * Creates a new ItemOptionDbo instance using the specified properties.
         * @function create
         * @memberof data.ItemOptionDbo
         * @static
         * @param {data.IItemOptionDbo=} [properties] Properties to set
         * @returns {data.ItemOptionDbo} ItemOptionDbo instance
         */
        ItemOptionDbo.create = function create(properties) {
            return new ItemOptionDbo(properties);
        };

        /**
         * Encodes the specified ItemOptionDbo message. Does not implicitly {@link data.ItemOptionDbo.verify|verify} messages.
         * @function encode
         * @memberof data.ItemOptionDbo
         * @static
         * @param {data.ItemOptionDbo} message ItemOptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemOptionDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.baseNamePrefix != null && Object.hasOwnProperty.call(message, "baseNamePrefix"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.baseNamePrefix);
            if (message.baseNamePostfix != null && Object.hasOwnProperty.call(message, "baseNamePostfix"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.baseNamePostfix);
            if (message.pointCost != null && Object.hasOwnProperty.call(message, "pointCost"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.pointCost);
            if (message.currencyCost != null && Object.hasOwnProperty.call(message, "currencyCost"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.currencyCost);
            if (message.tags != null && message.tags.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.tags.length; ++i)
                    writer.uint32(message.tags[i]);
                writer.ldelim();
            }
            if (message.uniquenessTag != null && Object.hasOwnProperty.call(message, "uniquenessTag"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.uniquenessTag);
            if (message.currencyCostByWeight != null && Object.hasOwnProperty.call(message, "currencyCostByWeight"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.currencyCostByWeight);
            return writer;
        };

        /**
         * Encodes the specified ItemOptionDbo message, length delimited. Does not implicitly {@link data.ItemOptionDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.ItemOptionDbo
         * @static
         * @param {data.ItemOptionDbo} message ItemOptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemOptionDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemOptionDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.ItemOptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.ItemOptionDbo} ItemOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOptionDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.ItemOptionDbo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.baseNamePrefix = reader.string();
                        break;
                    }
                case 4: {
                        message.baseNamePostfix = reader.string();
                        break;
                    }
                case 5: {
                        message.pointCost = reader.uint32();
                        break;
                    }
                case 6: {
                        message.currencyCost = reader.double();
                        break;
                    }
                case 7: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.tags.push(reader.uint32());
                        } else
                            message.tags.push(reader.uint32());
                        break;
                    }
                case 8: {
                        message.uniquenessTag = reader.uint32();
                        break;
                    }
                case 9: {
                        message.currencyCostByWeight = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemOptionDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.ItemOptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.ItemOptionDbo} ItemOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOptionDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemOptionDbo message.
         * @function verify
         * @memberof data.ItemOptionDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemOptionDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.baseNamePrefix != null && message.hasOwnProperty("baseNamePrefix"))
                if (!$util.isString(message.baseNamePrefix))
                    return "baseNamePrefix: string expected";
            if (message.baseNamePostfix != null && message.hasOwnProperty("baseNamePostfix"))
                if (!$util.isString(message.baseNamePostfix))
                    return "baseNamePostfix: string expected";
            if (message.pointCost != null && message.hasOwnProperty("pointCost"))
                if (!$util.isInteger(message.pointCost))
                    return "pointCost: integer expected";
            if (message.currencyCost != null && message.hasOwnProperty("currencyCost"))
                if (typeof message.currencyCost !== "number")
                    return "currencyCost: number expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (let i = 0; i < message.tags.length; ++i)
                    if (!$util.isInteger(message.tags[i]))
                        return "tags: integer[] expected";
            }
            if (message.uniquenessTag != null && message.hasOwnProperty("uniquenessTag"))
                if (!$util.isInteger(message.uniquenessTag))
                    return "uniquenessTag: integer expected";
            if (message.currencyCostByWeight != null && message.hasOwnProperty("currencyCostByWeight"))
                if (typeof message.currencyCostByWeight !== "number")
                    return "currencyCostByWeight: number expected";
            return null;
        };

        /**
         * Creates an ItemOptionDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.ItemOptionDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.ItemOptionDbo} ItemOptionDbo
         */
        ItemOptionDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.ItemOptionDbo)
                return object;
            let message = new $root.data.ItemOptionDbo();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.baseNamePrefix != null)
                message.baseNamePrefix = String(object.baseNamePrefix);
            if (object.baseNamePostfix != null)
                message.baseNamePostfix = String(object.baseNamePostfix);
            if (object.pointCost != null)
                message.pointCost = object.pointCost >>> 0;
            if (object.currencyCost != null)
                message.currencyCost = Number(object.currencyCost);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".data.ItemOptionDbo.tags: array expected");
                message.tags = [];
                for (let i = 0; i < object.tags.length; ++i)
                    message.tags[i] = object.tags[i] >>> 0;
            }
            if (object.uniquenessTag != null)
                message.uniquenessTag = object.uniquenessTag >>> 0;
            if (object.currencyCostByWeight != null)
                message.currencyCostByWeight = Number(object.currencyCostByWeight);
            return message;
        };

        /**
         * Creates a plain object from an ItemOptionDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.ItemOptionDbo
         * @static
         * @param {data.ItemOptionDbo} message ItemOptionDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemOptionDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.baseNamePrefix = "";
                object.baseNamePostfix = "";
                object.pointCost = 0;
                object.currencyCost = 0;
                object.uniquenessTag = 0;
                object.currencyCostByWeight = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.baseNamePrefix != null && message.hasOwnProperty("baseNamePrefix"))
                object.baseNamePrefix = message.baseNamePrefix;
            if (message.baseNamePostfix != null && message.hasOwnProperty("baseNamePostfix"))
                object.baseNamePostfix = message.baseNamePostfix;
            if (message.pointCost != null && message.hasOwnProperty("pointCost"))
                object.pointCost = message.pointCost;
            if (message.currencyCost != null && message.hasOwnProperty("currencyCost"))
                object.currencyCost = options.json && !isFinite(message.currencyCost) ? String(message.currencyCost) : message.currencyCost;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (let j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.uniquenessTag != null && message.hasOwnProperty("uniquenessTag"))
                object.uniquenessTag = message.uniquenessTag;
            if (message.currencyCostByWeight != null && message.hasOwnProperty("currencyCostByWeight"))
                object.currencyCostByWeight = options.json && !isFinite(message.currencyCostByWeight) ? String(message.currencyCostByWeight) : message.currencyCostByWeight;
            return object;
        };

        /**
         * Converts this ItemOptionDbo to JSON.
         * @function toJSON
         * @memberof data.ItemOptionDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemOptionDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ItemOptionDbo
         * @function getTypeUrl
         * @memberof data.ItemOptionDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemOptionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.ItemOptionDbo";
        };

        return ItemOptionDbo;
    })();

    data.IdDatabaseDbo = (function() {

        /**
         * Properties of an IdDatabaseDbo.
         * @memberof data
         * @interface IIdDatabaseDbo
         * @property {Object.<string,number>|null} [codeToId] IdDatabaseDbo codeToId
         */

        /**
         * Constructs a new IdDatabaseDbo.
         * @memberof data
         * @classdesc Represents an IdDatabaseDbo.
         * @implements IIdDatabaseDbo
         * @constructor
         * @param {data.IIdDatabaseDbo=} [properties] Properties to set
         */
        function IdDatabaseDbo(properties) {
            this.codeToId = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdDatabaseDbo codeToId.
         * @member {Object.<string,number>} codeToId
         * @memberof data.IdDatabaseDbo
         * @instance
         */
        IdDatabaseDbo.prototype.codeToId = $util.emptyObject;

        /**
         * Creates a new IdDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {data.IIdDatabaseDbo=} [properties] Properties to set
         * @returns {data.IdDatabaseDbo} IdDatabaseDbo instance
         */
        IdDatabaseDbo.create = function create(properties) {
            return new IdDatabaseDbo(properties);
        };

        /**
         * Encodes the specified IdDatabaseDbo message. Does not implicitly {@link data.IdDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {data.IdDatabaseDbo} message IdDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.codeToId != null && Object.hasOwnProperty.call(message, "codeToId"))
                for (let keys = Object.keys(message.codeToId), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.codeToId[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IdDatabaseDbo message, length delimited. Does not implicitly {@link data.IdDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {data.IdDatabaseDbo} message IdDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {data.IdDatabaseDbo} IdDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.data.IdDatabaseDbo(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.codeToId === $util.emptyObject)
                            message.codeToId = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.codeToId[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IdDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {data.IdDatabaseDbo} IdDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdDatabaseDbo message.
         * @function verify
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.codeToId != null && message.hasOwnProperty("codeToId")) {
                if (!$util.isObject(message.codeToId))
                    return "codeToId: object expected";
                let key = Object.keys(message.codeToId);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.codeToId[key[i]]))
                        return "codeToId: integer{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an IdDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {data.IdDatabaseDbo} IdDatabaseDbo
         */
        IdDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.data.IdDatabaseDbo)
                return object;
            let message = new $root.data.IdDatabaseDbo();
            if (object.codeToId) {
                if (typeof object.codeToId !== "object")
                    throw TypeError(".data.IdDatabaseDbo.codeToId: object expected");
                message.codeToId = {};
                for (let keys = Object.keys(object.codeToId), i = 0; i < keys.length; ++i)
                    message.codeToId[keys[i]] = object.codeToId[keys[i]] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an IdDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {data.IdDatabaseDbo} message IdDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.codeToId = {};
            let keys2;
            if (message.codeToId && (keys2 = Object.keys(message.codeToId)).length) {
                object.codeToId = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.codeToId[keys2[j]] = message.codeToId[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this IdDatabaseDbo to JSON.
         * @function toJSON
         * @memberof data.IdDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IdDatabaseDbo
         * @function getTypeUrl
         * @memberof data.IdDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IdDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/data.IdDatabaseDbo";
        };

        return IdDatabaseDbo;
    })();

    return data;
})();

export { $root as default };
