/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["../pathfinder-generator/src/main/proto"] || ($protobuf.roots["../pathfinder-generator/src/main/proto"] = {});

$root.v2 = (function() {

    /**
     * Namespace v2.
     * @exports v2
     * @namespace
     */
    var v2 = {};

    v2.RaceDatabaseDbo = (function() {

        /**
         * Properties of a RaceDatabaseDbo.
         * @memberof v2
         * @interface IRaceDatabaseDbo
         * @property {Array.<v2.RaceSummaryDbo>|null} [raceSummaries] RaceDatabaseDbo raceSummaries
         */

        /**
         * Constructs a new RaceDatabaseDbo.
         * @memberof v2
         * @classdesc Represents a RaceDatabaseDbo.
         * @implements IRaceDatabaseDbo
         * @constructor
         * @param {v2.IRaceDatabaseDbo=} [properties] Properties to set
         */
        function RaceDatabaseDbo(properties) {
            this.raceSummaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RaceDatabaseDbo raceSummaries.
         * @member {Array.<v2.RaceSummaryDbo>} raceSummaries
         * @memberof v2.RaceDatabaseDbo
         * @instance
         */
        RaceDatabaseDbo.prototype.raceSummaries = $util.emptyArray;

        /**
         * Creates a new RaceDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {v2.IRaceDatabaseDbo=} [properties] Properties to set
         * @returns {v2.RaceDatabaseDbo} RaceDatabaseDbo instance
         */
        RaceDatabaseDbo.create = function create(properties) {
            return new RaceDatabaseDbo(properties);
        };

        /**
         * Encodes the specified RaceDatabaseDbo message. Does not implicitly {@link v2.RaceDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {v2.RaceDatabaseDbo} message RaceDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.raceSummaries != null && message.raceSummaries.length)
                for (var i = 0; i < message.raceSummaries.length; ++i)
                    $root.v2.RaceSummaryDbo.encode(message.raceSummaries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RaceDatabaseDbo message, length delimited. Does not implicitly {@link v2.RaceDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {v2.RaceDatabaseDbo} message RaceDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RaceDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.RaceDatabaseDbo} RaceDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.RaceDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.raceSummaries && message.raceSummaries.length))
                            message.raceSummaries = [];
                        message.raceSummaries.push($root.v2.RaceSummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes a RaceDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.RaceDatabaseDbo} RaceDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RaceDatabaseDbo message.
         * @function verify
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RaceDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.raceSummaries != null && message.hasOwnProperty("raceSummaries")) {
                if (!Array.isArray(message.raceSummaries))
                    return "raceSummaries: array expected";
                for (var i = 0; i < message.raceSummaries.length; ++i) {
                    var error = $root.v2.RaceSummaryDbo.verify(message.raceSummaries[i]);
                    if (error)
                        return "raceSummaries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RaceDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.RaceDatabaseDbo} RaceDatabaseDbo
         */
        RaceDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.RaceDatabaseDbo)
                return object;
            var message = new $root.v2.RaceDatabaseDbo();
            if (object.raceSummaries) {
                if (!Array.isArray(object.raceSummaries))
                    throw TypeError(".v2.RaceDatabaseDbo.raceSummaries: array expected");
                message.raceSummaries = [];
                for (var i = 0; i < object.raceSummaries.length; ++i) {
                    if (typeof object.raceSummaries[i] !== "object")
                        throw TypeError(".v2.RaceDatabaseDbo.raceSummaries: object expected");
                    message.raceSummaries[i] = $root.v2.RaceSummaryDbo.fromObject(object.raceSummaries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RaceDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {v2.RaceDatabaseDbo} message RaceDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaceDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.raceSummaries = [];
            if (message.raceSummaries && message.raceSummaries.length) {
                object.raceSummaries = [];
                for (var j = 0; j < message.raceSummaries.length; ++j)
                    object.raceSummaries[j] = $root.v2.RaceSummaryDbo.toObject(message.raceSummaries[j], options);
            }
            return object;
        };

        /**
         * Converts this RaceDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v2.RaceDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RaceDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RaceDatabaseDbo
         * @function getTypeUrl
         * @memberof v2.RaceDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RaceDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.RaceDatabaseDbo";
        };

        return RaceDatabaseDbo;
    })();

    v2.RaceSummaryDbo = (function() {

        /**
         * Properties of a RaceSummaryDbo.
         * @memberof v2
         * @interface IRaceSummaryDbo
         * @property {string|null} [id] RaceSummaryDbo id
         * @property {string|null} [name] RaceSummaryDbo name
         * @property {number|null} [size] RaceSummaryDbo size
         * @property {string|null} [type] RaceSummaryDbo type
         * @property {number|null} [speed] RaceSummaryDbo speed
         * @property {Array.<string>|null} [languages] RaceSummaryDbo languages
         * @property {Array.<string>|null} [traits] RaceSummaryDbo traits
         */

        /**
         * Constructs a new RaceSummaryDbo.
         * @memberof v2
         * @classdesc Represents a RaceSummaryDbo.
         * @implements IRaceSummaryDbo
         * @constructor
         * @param {v2.IRaceSummaryDbo=} [properties] Properties to set
         */
        function RaceSummaryDbo(properties) {
            this.languages = [];
            this.traits = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RaceSummaryDbo id.
         * @member {string} id
         * @memberof v2.RaceSummaryDbo
         * @instance
         */
        RaceSummaryDbo.prototype.id = "";

        /**
         * RaceSummaryDbo name.
         * @member {string} name
         * @memberof v2.RaceSummaryDbo
         * @instance
         */
        RaceSummaryDbo.prototype.name = "";

        /**
         * RaceSummaryDbo size.
         * @member {number} size
         * @memberof v2.RaceSummaryDbo
         * @instance
         */
        RaceSummaryDbo.prototype.size = 0;

        /**
         * RaceSummaryDbo type.
         * @member {string} type
         * @memberof v2.RaceSummaryDbo
         * @instance
         */
        RaceSummaryDbo.prototype.type = "";

        /**
         * RaceSummaryDbo speed.
         * @member {number} speed
         * @memberof v2.RaceSummaryDbo
         * @instance
         */
        RaceSummaryDbo.prototype.speed = 0;

        /**
         * RaceSummaryDbo languages.
         * @member {Array.<string>} languages
         * @memberof v2.RaceSummaryDbo
         * @instance
         */
        RaceSummaryDbo.prototype.languages = $util.emptyArray;

        /**
         * RaceSummaryDbo traits.
         * @member {Array.<string>} traits
         * @memberof v2.RaceSummaryDbo
         * @instance
         */
        RaceSummaryDbo.prototype.traits = $util.emptyArray;

        /**
         * Creates a new RaceSummaryDbo instance using the specified properties.
         * @function create
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {v2.IRaceSummaryDbo=} [properties] Properties to set
         * @returns {v2.RaceSummaryDbo} RaceSummaryDbo instance
         */
        RaceSummaryDbo.create = function create(properties) {
            return new RaceSummaryDbo(properties);
        };

        /**
         * Encodes the specified RaceSummaryDbo message. Does not implicitly {@link v2.RaceSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {v2.RaceSummaryDbo} message RaceSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.speed);
            if (message.languages != null && message.languages.length)
                for (var i = 0; i < message.languages.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.languages[i]);
            if (message.traits != null && message.traits.length)
                for (var i = 0; i < message.traits.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.traits[i]);
            return writer;
        };

        /**
         * Encodes the specified RaceSummaryDbo message, length delimited. Does not implicitly {@link v2.RaceSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {v2.RaceSummaryDbo} message RaceSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RaceSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.RaceSummaryDbo} RaceSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.RaceSummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.size = reader.uint32();
                        break;
                    }
                case 4: {
                        message.type = reader.string();
                        break;
                    }
                case 5: {
                        message.speed = reader.uint32();
                        break;
                    }
                case 6: {
                        if (!(message.languages && message.languages.length))
                            message.languages = [];
                        message.languages.push(reader.string());
                        break;
                    }
                case 7: {
                        if (!(message.traits && message.traits.length))
                            message.traits = [];
                        message.traits.push(reader.string());
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
         * Decodes a RaceSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.RaceSummaryDbo} RaceSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RaceSummaryDbo message.
         * @function verify
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RaceSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.languages != null && message.hasOwnProperty("languages")) {
                if (!Array.isArray(message.languages))
                    return "languages: array expected";
                for (var i = 0; i < message.languages.length; ++i)
                    if (!$util.isString(message.languages[i]))
                        return "languages: string[] expected";
            }
            if (message.traits != null && message.hasOwnProperty("traits")) {
                if (!Array.isArray(message.traits))
                    return "traits: array expected";
                for (var i = 0; i < message.traits.length; ++i)
                    if (!$util.isString(message.traits[i]))
                        return "traits: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RaceSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.RaceSummaryDbo} RaceSummaryDbo
         */
        RaceSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.RaceSummaryDbo)
                return object;
            var message = new $root.v2.RaceSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.size != null)
                message.size = object.size >>> 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.speed != null)
                message.speed = object.speed >>> 0;
            if (object.languages) {
                if (!Array.isArray(object.languages))
                    throw TypeError(".v2.RaceSummaryDbo.languages: array expected");
                message.languages = [];
                for (var i = 0; i < object.languages.length; ++i)
                    message.languages[i] = String(object.languages[i]);
            }
            if (object.traits) {
                if (!Array.isArray(object.traits))
                    throw TypeError(".v2.RaceSummaryDbo.traits: array expected");
                message.traits = [];
                for (var i = 0; i < object.traits.length; ++i)
                    message.traits[i] = String(object.traits[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RaceSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {v2.RaceSummaryDbo} message RaceSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaceSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.languages = [];
                object.traits = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.size = 0;
                object.type = "";
                object.speed = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = message.speed;
            if (message.languages && message.languages.length) {
                object.languages = [];
                for (var j = 0; j < message.languages.length; ++j)
                    object.languages[j] = message.languages[j];
            }
            if (message.traits && message.traits.length) {
                object.traits = [];
                for (var j = 0; j < message.traits.length; ++j)
                    object.traits[j] = message.traits[j];
            }
            return object;
        };

        /**
         * Converts this RaceSummaryDbo to JSON.
         * @function toJSON
         * @memberof v2.RaceSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RaceSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RaceSummaryDbo
         * @function getTypeUrl
         * @memberof v2.RaceSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RaceSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.RaceSummaryDbo";
        };

        return RaceSummaryDbo;
    })();

    v2.RaceDataDbo = (function() {

        /**
         * Properties of a RaceDataDbo.
         * @memberof v2
         * @interface IRaceDataDbo
         * @property {string|null} [id] RaceDataDbo id
         * @property {string|null} [name] RaceDataDbo name
         * @property {number|null} [size] RaceDataDbo size
         * @property {string|null} [type] RaceDataDbo type
         * @property {number|null} [speed] RaceDataDbo speed
         * @property {Array.<string>|null} [languages] RaceDataDbo languages
         * @property {Array.<string>|null} [traits] RaceDataDbo traits
         */

        /**
         * Constructs a new RaceDataDbo.
         * @memberof v2
         * @classdesc Represents a RaceDataDbo.
         * @implements IRaceDataDbo
         * @constructor
         * @param {v2.IRaceDataDbo=} [properties] Properties to set
         */
        function RaceDataDbo(properties) {
            this.languages = [];
            this.traits = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RaceDataDbo id.
         * @member {string} id
         * @memberof v2.RaceDataDbo
         * @instance
         */
        RaceDataDbo.prototype.id = "";

        /**
         * RaceDataDbo name.
         * @member {string} name
         * @memberof v2.RaceDataDbo
         * @instance
         */
        RaceDataDbo.prototype.name = "";

        /**
         * RaceDataDbo size.
         * @member {number} size
         * @memberof v2.RaceDataDbo
         * @instance
         */
        RaceDataDbo.prototype.size = 0;

        /**
         * RaceDataDbo type.
         * @member {string} type
         * @memberof v2.RaceDataDbo
         * @instance
         */
        RaceDataDbo.prototype.type = "";

        /**
         * RaceDataDbo speed.
         * @member {number} speed
         * @memberof v2.RaceDataDbo
         * @instance
         */
        RaceDataDbo.prototype.speed = 0;

        /**
         * RaceDataDbo languages.
         * @member {Array.<string>} languages
         * @memberof v2.RaceDataDbo
         * @instance
         */
        RaceDataDbo.prototype.languages = $util.emptyArray;

        /**
         * RaceDataDbo traits.
         * @member {Array.<string>} traits
         * @memberof v2.RaceDataDbo
         * @instance
         */
        RaceDataDbo.prototype.traits = $util.emptyArray;

        /**
         * Creates a new RaceDataDbo instance using the specified properties.
         * @function create
         * @memberof v2.RaceDataDbo
         * @static
         * @param {v2.IRaceDataDbo=} [properties] Properties to set
         * @returns {v2.RaceDataDbo} RaceDataDbo instance
         */
        RaceDataDbo.create = function create(properties) {
            return new RaceDataDbo(properties);
        };

        /**
         * Encodes the specified RaceDataDbo message. Does not implicitly {@link v2.RaceDataDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.RaceDataDbo
         * @static
         * @param {v2.RaceDataDbo} message RaceDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceDataDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.speed);
            if (message.languages != null && message.languages.length)
                for (var i = 0; i < message.languages.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.languages[i]);
            if (message.traits != null && message.traits.length)
                for (var i = 0; i < message.traits.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.traits[i]);
            return writer;
        };

        /**
         * Encodes the specified RaceDataDbo message, length delimited. Does not implicitly {@link v2.RaceDataDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.RaceDataDbo
         * @static
         * @param {v2.RaceDataDbo} message RaceDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceDataDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RaceDataDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.RaceDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.RaceDataDbo} RaceDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceDataDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.RaceDataDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.size = reader.uint32();
                        break;
                    }
                case 4: {
                        message.type = reader.string();
                        break;
                    }
                case 5: {
                        message.speed = reader.uint32();
                        break;
                    }
                case 6: {
                        if (!(message.languages && message.languages.length))
                            message.languages = [];
                        message.languages.push(reader.string());
                        break;
                    }
                case 7: {
                        if (!(message.traits && message.traits.length))
                            message.traits = [];
                        message.traits.push(reader.string());
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
         * Decodes a RaceDataDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.RaceDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.RaceDataDbo} RaceDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceDataDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RaceDataDbo message.
         * @function verify
         * @memberof v2.RaceDataDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RaceDataDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.languages != null && message.hasOwnProperty("languages")) {
                if (!Array.isArray(message.languages))
                    return "languages: array expected";
                for (var i = 0; i < message.languages.length; ++i)
                    if (!$util.isString(message.languages[i]))
                        return "languages: string[] expected";
            }
            if (message.traits != null && message.hasOwnProperty("traits")) {
                if (!Array.isArray(message.traits))
                    return "traits: array expected";
                for (var i = 0; i < message.traits.length; ++i)
                    if (!$util.isString(message.traits[i]))
                        return "traits: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RaceDataDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.RaceDataDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.RaceDataDbo} RaceDataDbo
         */
        RaceDataDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.RaceDataDbo)
                return object;
            var message = new $root.v2.RaceDataDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.size != null)
                message.size = object.size >>> 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.speed != null)
                message.speed = object.speed >>> 0;
            if (object.languages) {
                if (!Array.isArray(object.languages))
                    throw TypeError(".v2.RaceDataDbo.languages: array expected");
                message.languages = [];
                for (var i = 0; i < object.languages.length; ++i)
                    message.languages[i] = String(object.languages[i]);
            }
            if (object.traits) {
                if (!Array.isArray(object.traits))
                    throw TypeError(".v2.RaceDataDbo.traits: array expected");
                message.traits = [];
                for (var i = 0; i < object.traits.length; ++i)
                    message.traits[i] = String(object.traits[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RaceDataDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.RaceDataDbo
         * @static
         * @param {v2.RaceDataDbo} message RaceDataDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RaceDataDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.languages = [];
                object.traits = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.size = 0;
                object.type = "";
                object.speed = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = message.speed;
            if (message.languages && message.languages.length) {
                object.languages = [];
                for (var j = 0; j < message.languages.length; ++j)
                    object.languages[j] = message.languages[j];
            }
            if (message.traits && message.traits.length) {
                object.traits = [];
                for (var j = 0; j < message.traits.length; ++j)
                    object.traits[j] = message.traits[j];
            }
            return object;
        };

        /**
         * Converts this RaceDataDbo to JSON.
         * @function toJSON
         * @memberof v2.RaceDataDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RaceDataDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RaceDataDbo
         * @function getTypeUrl
         * @memberof v2.RaceDataDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RaceDataDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.RaceDataDbo";
        };

        return RaceDataDbo;
    })();

    v2.AbilityDatabaseDbo = (function() {

        /**
         * Properties of an AbilityDatabaseDbo.
         * @memberof v2
         * @interface IAbilityDatabaseDbo
         * @property {Array.<v2.AbilitySummaryDbo>|null} [abilitySummaries] AbilityDatabaseDbo abilitySummaries
         */

        /**
         * Constructs a new AbilityDatabaseDbo.
         * @memberof v2
         * @classdesc Represents an AbilityDatabaseDbo.
         * @implements IAbilityDatabaseDbo
         * @constructor
         * @param {v2.IAbilityDatabaseDbo=} [properties] Properties to set
         */
        function AbilityDatabaseDbo(properties) {
            this.abilitySummaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AbilityDatabaseDbo abilitySummaries.
         * @member {Array.<v2.AbilitySummaryDbo>} abilitySummaries
         * @memberof v2.AbilityDatabaseDbo
         * @instance
         */
        AbilityDatabaseDbo.prototype.abilitySummaries = $util.emptyArray;

        /**
         * Creates a new AbilityDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {v2.IAbilityDatabaseDbo=} [properties] Properties to set
         * @returns {v2.AbilityDatabaseDbo} AbilityDatabaseDbo instance
         */
        AbilityDatabaseDbo.create = function create(properties) {
            return new AbilityDatabaseDbo(properties);
        };

        /**
         * Encodes the specified AbilityDatabaseDbo message. Does not implicitly {@link v2.AbilityDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {v2.AbilityDatabaseDbo} message AbilityDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AbilityDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.abilitySummaries != null && message.abilitySummaries.length)
                for (var i = 0; i < message.abilitySummaries.length; ++i)
                    $root.v2.AbilitySummaryDbo.encode(message.abilitySummaries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AbilityDatabaseDbo message, length delimited. Does not implicitly {@link v2.AbilityDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {v2.AbilityDatabaseDbo} message AbilityDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AbilityDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AbilityDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.AbilityDatabaseDbo} AbilityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AbilityDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.AbilityDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.abilitySummaries && message.abilitySummaries.length))
                            message.abilitySummaries = [];
                        message.abilitySummaries.push($root.v2.AbilitySummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes an AbilityDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.AbilityDatabaseDbo} AbilityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AbilityDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AbilityDatabaseDbo message.
         * @function verify
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AbilityDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.abilitySummaries != null && message.hasOwnProperty("abilitySummaries")) {
                if (!Array.isArray(message.abilitySummaries))
                    return "abilitySummaries: array expected";
                for (var i = 0; i < message.abilitySummaries.length; ++i) {
                    var error = $root.v2.AbilitySummaryDbo.verify(message.abilitySummaries[i]);
                    if (error)
                        return "abilitySummaries." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AbilityDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.AbilityDatabaseDbo} AbilityDatabaseDbo
         */
        AbilityDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.AbilityDatabaseDbo)
                return object;
            var message = new $root.v2.AbilityDatabaseDbo();
            if (object.abilitySummaries) {
                if (!Array.isArray(object.abilitySummaries))
                    throw TypeError(".v2.AbilityDatabaseDbo.abilitySummaries: array expected");
                message.abilitySummaries = [];
                for (var i = 0; i < object.abilitySummaries.length; ++i) {
                    if (typeof object.abilitySummaries[i] !== "object")
                        throw TypeError(".v2.AbilityDatabaseDbo.abilitySummaries: object expected");
                    message.abilitySummaries[i] = $root.v2.AbilitySummaryDbo.fromObject(object.abilitySummaries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AbilityDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {v2.AbilityDatabaseDbo} message AbilityDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AbilityDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.abilitySummaries = [];
            if (message.abilitySummaries && message.abilitySummaries.length) {
                object.abilitySummaries = [];
                for (var j = 0; j < message.abilitySummaries.length; ++j)
                    object.abilitySummaries[j] = $root.v2.AbilitySummaryDbo.toObject(message.abilitySummaries[j], options);
            }
            return object;
        };

        /**
         * Converts this AbilityDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v2.AbilityDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AbilityDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AbilityDatabaseDbo
         * @function getTypeUrl
         * @memberof v2.AbilityDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AbilityDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.AbilityDatabaseDbo";
        };

        return AbilityDatabaseDbo;
    })();

    v2.AbilitySummaryDbo = (function() {

        /**
         * Properties of an AbilitySummaryDbo.
         * @memberof v2
         * @interface IAbilitySummaryDbo
         * @property {string|null} [id] AbilitySummaryDbo id
         * @property {string|null} [name] AbilitySummaryDbo name
         * @property {v2.AbilityTypeDbo|null} [type] AbilitySummaryDbo type
         * @property {string|null} [prerequisitesFormula] AbilitySummaryDbo prerequisitesFormula
         * @property {string|null} [benefit] AbilitySummaryDbo benefit
         */

        /**
         * Constructs a new AbilitySummaryDbo.
         * @memberof v2
         * @classdesc Represents an AbilitySummaryDbo.
         * @implements IAbilitySummaryDbo
         * @constructor
         * @param {v2.IAbilitySummaryDbo=} [properties] Properties to set
         */
        function AbilitySummaryDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AbilitySummaryDbo id.
         * @member {string} id
         * @memberof v2.AbilitySummaryDbo
         * @instance
         */
        AbilitySummaryDbo.prototype.id = "";

        /**
         * AbilitySummaryDbo name.
         * @member {string} name
         * @memberof v2.AbilitySummaryDbo
         * @instance
         */
        AbilitySummaryDbo.prototype.name = "";

        /**
         * AbilitySummaryDbo type.
         * @member {v2.AbilityTypeDbo} type
         * @memberof v2.AbilitySummaryDbo
         * @instance
         */
        AbilitySummaryDbo.prototype.type = 0;

        /**
         * AbilitySummaryDbo prerequisitesFormula.
         * @member {string} prerequisitesFormula
         * @memberof v2.AbilitySummaryDbo
         * @instance
         */
        AbilitySummaryDbo.prototype.prerequisitesFormula = "";

        /**
         * AbilitySummaryDbo benefit.
         * @member {string} benefit
         * @memberof v2.AbilitySummaryDbo
         * @instance
         */
        AbilitySummaryDbo.prototype.benefit = "";

        /**
         * Creates a new AbilitySummaryDbo instance using the specified properties.
         * @function create
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {v2.IAbilitySummaryDbo=} [properties] Properties to set
         * @returns {v2.AbilitySummaryDbo} AbilitySummaryDbo instance
         */
        AbilitySummaryDbo.create = function create(properties) {
            return new AbilitySummaryDbo(properties);
        };

        /**
         * Encodes the specified AbilitySummaryDbo message. Does not implicitly {@link v2.AbilitySummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {v2.AbilitySummaryDbo} message AbilitySummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AbilitySummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.prerequisitesFormula != null && Object.hasOwnProperty.call(message, "prerequisitesFormula"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.prerequisitesFormula);
            if (message.benefit != null && Object.hasOwnProperty.call(message, "benefit"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.benefit);
            return writer;
        };

        /**
         * Encodes the specified AbilitySummaryDbo message, length delimited. Does not implicitly {@link v2.AbilitySummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {v2.AbilitySummaryDbo} message AbilitySummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AbilitySummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AbilitySummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.AbilitySummaryDbo} AbilitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AbilitySummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.AbilitySummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.prerequisitesFormula = reader.string();
                        break;
                    }
                case 5: {
                        message.benefit = reader.string();
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
         * Decodes an AbilitySummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.AbilitySummaryDbo} AbilitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AbilitySummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AbilitySummaryDbo message.
         * @function verify
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AbilitySummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                if (!$util.isString(message.prerequisitesFormula))
                    return "prerequisitesFormula: string expected";
            if (message.benefit != null && message.hasOwnProperty("benefit"))
                if (!$util.isString(message.benefit))
                    return "benefit: string expected";
            return null;
        };

        /**
         * Creates an AbilitySummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.AbilitySummaryDbo} AbilitySummaryDbo
         */
        AbilitySummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.AbilitySummaryDbo)
                return object;
            var message = new $root.v2.AbilitySummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ABILITY_TYPE_NONE":
            case 0:
                message.type = 0;
                break;
            case "ABILITY_TYPE_EX":
            case 1:
                message.type = 1;
                break;
            case "ABILITY_TYPE_SP":
            case 2:
                message.type = 2;
                break;
            case "ABILITY_TYPE_SU":
            case 3:
                message.type = 3;
                break;
            }
            if (object.prerequisitesFormula != null)
                message.prerequisitesFormula = String(object.prerequisitesFormula);
            if (object.benefit != null)
                message.benefit = String(object.benefit);
            return message;
        };

        /**
         * Creates a plain object from an AbilitySummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {v2.AbilitySummaryDbo} message AbilitySummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AbilitySummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.type = options.enums === String ? "ABILITY_TYPE_NONE" : 0;
                object.prerequisitesFormula = "";
                object.benefit = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.v2.AbilityTypeDbo[message.type] === undefined ? message.type : $root.v2.AbilityTypeDbo[message.type] : message.type;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
            if (message.benefit != null && message.hasOwnProperty("benefit"))
                object.benefit = message.benefit;
            return object;
        };

        /**
         * Converts this AbilitySummaryDbo to JSON.
         * @function toJSON
         * @memberof v2.AbilitySummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AbilitySummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AbilitySummaryDbo
         * @function getTypeUrl
         * @memberof v2.AbilitySummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AbilitySummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.AbilitySummaryDbo";
        };

        return AbilitySummaryDbo;
    })();

    /**
     * AbilityTypeDbo enum.
     * @name v2.AbilityTypeDbo
     * @enum {number}
     * @property {number} ABILITY_TYPE_NONE=0 ABILITY_TYPE_NONE value
     * @property {number} ABILITY_TYPE_EX=1 ABILITY_TYPE_EX value
     * @property {number} ABILITY_TYPE_SP=2 ABILITY_TYPE_SP value
     * @property {number} ABILITY_TYPE_SU=3 ABILITY_TYPE_SU value
     */
    v2.AbilityTypeDbo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ABILITY_TYPE_NONE"] = 0;
        values[valuesById[1] = "ABILITY_TYPE_EX"] = 1;
        values[valuesById[2] = "ABILITY_TYPE_SP"] = 2;
        values[valuesById[3] = "ABILITY_TYPE_SU"] = 3;
        return values;
    })();

    v2.AbilityDataDbo = (function() {

        /**
         * Properties of an AbilityDataDbo.
         * @memberof v2
         * @interface IAbilityDataDbo
         * @property {string|null} [id] AbilityDataDbo id
         * @property {string|null} [name] AbilityDataDbo name
         * @property {v2.AbilityTypeDbo|null} [type] AbilityDataDbo type
         * @property {string|null} [prerequisitesFormula] AbilityDataDbo prerequisitesFormula
         * @property {string|null} [description] AbilityDataDbo description
         * @property {string|null} [benefit] AbilityDataDbo benefit
         */

        /**
         * Constructs a new AbilityDataDbo.
         * @memberof v2
         * @classdesc Represents an AbilityDataDbo.
         * @implements IAbilityDataDbo
         * @constructor
         * @param {v2.IAbilityDataDbo=} [properties] Properties to set
         */
        function AbilityDataDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AbilityDataDbo id.
         * @member {string} id
         * @memberof v2.AbilityDataDbo
         * @instance
         */
        AbilityDataDbo.prototype.id = "";

        /**
         * AbilityDataDbo name.
         * @member {string} name
         * @memberof v2.AbilityDataDbo
         * @instance
         */
        AbilityDataDbo.prototype.name = "";

        /**
         * AbilityDataDbo type.
         * @member {v2.AbilityTypeDbo} type
         * @memberof v2.AbilityDataDbo
         * @instance
         */
        AbilityDataDbo.prototype.type = 0;

        /**
         * AbilityDataDbo prerequisitesFormula.
         * @member {string} prerequisitesFormula
         * @memberof v2.AbilityDataDbo
         * @instance
         */
        AbilityDataDbo.prototype.prerequisitesFormula = "";

        /**
         * AbilityDataDbo description.
         * @member {string} description
         * @memberof v2.AbilityDataDbo
         * @instance
         */
        AbilityDataDbo.prototype.description = "";

        /**
         * AbilityDataDbo benefit.
         * @member {string} benefit
         * @memberof v2.AbilityDataDbo
         * @instance
         */
        AbilityDataDbo.prototype.benefit = "";

        /**
         * Creates a new AbilityDataDbo instance using the specified properties.
         * @function create
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {v2.IAbilityDataDbo=} [properties] Properties to set
         * @returns {v2.AbilityDataDbo} AbilityDataDbo instance
         */
        AbilityDataDbo.create = function create(properties) {
            return new AbilityDataDbo(properties);
        };

        /**
         * Encodes the specified AbilityDataDbo message. Does not implicitly {@link v2.AbilityDataDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {v2.AbilityDataDbo} message AbilityDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AbilityDataDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.prerequisitesFormula != null && Object.hasOwnProperty.call(message, "prerequisitesFormula"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.prerequisitesFormula);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.benefit != null && Object.hasOwnProperty.call(message, "benefit"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.benefit);
            return writer;
        };

        /**
         * Encodes the specified AbilityDataDbo message, length delimited. Does not implicitly {@link v2.AbilityDataDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {v2.AbilityDataDbo} message AbilityDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AbilityDataDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AbilityDataDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.AbilityDataDbo} AbilityDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AbilityDataDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.AbilityDataDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.prerequisitesFormula = reader.string();
                        break;
                    }
                case 5: {
                        message.description = reader.string();
                        break;
                    }
                case 6: {
                        message.benefit = reader.string();
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
         * Decodes an AbilityDataDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.AbilityDataDbo} AbilityDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AbilityDataDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AbilityDataDbo message.
         * @function verify
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AbilityDataDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                if (!$util.isString(message.prerequisitesFormula))
                    return "prerequisitesFormula: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.benefit != null && message.hasOwnProperty("benefit"))
                if (!$util.isString(message.benefit))
                    return "benefit: string expected";
            return null;
        };

        /**
         * Creates an AbilityDataDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.AbilityDataDbo} AbilityDataDbo
         */
        AbilityDataDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.AbilityDataDbo)
                return object;
            var message = new $root.v2.AbilityDataDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ABILITY_TYPE_NONE":
            case 0:
                message.type = 0;
                break;
            case "ABILITY_TYPE_EX":
            case 1:
                message.type = 1;
                break;
            case "ABILITY_TYPE_SP":
            case 2:
                message.type = 2;
                break;
            case "ABILITY_TYPE_SU":
            case 3:
                message.type = 3;
                break;
            }
            if (object.prerequisitesFormula != null)
                message.prerequisitesFormula = String(object.prerequisitesFormula);
            if (object.description != null)
                message.description = String(object.description);
            if (object.benefit != null)
                message.benefit = String(object.benefit);
            return message;
        };

        /**
         * Creates a plain object from an AbilityDataDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {v2.AbilityDataDbo} message AbilityDataDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AbilityDataDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.type = options.enums === String ? "ABILITY_TYPE_NONE" : 0;
                object.prerequisitesFormula = "";
                object.description = "";
                object.benefit = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.v2.AbilityTypeDbo[message.type] === undefined ? message.type : $root.v2.AbilityTypeDbo[message.type] : message.type;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.benefit != null && message.hasOwnProperty("benefit"))
                object.benefit = message.benefit;
            return object;
        };

        /**
         * Converts this AbilityDataDbo to JSON.
         * @function toJSON
         * @memberof v2.AbilityDataDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AbilityDataDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AbilityDataDbo
         * @function getTypeUrl
         * @memberof v2.AbilityDataDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AbilityDataDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.AbilityDataDbo";
        };

        return AbilityDataDbo;
    })();

    v2.CharacterEffectDbo = (function() {

        /**
         * Properties of a CharacterEffectDbo.
         * @memberof v2
         * @interface ICharacterEffectDbo
         * @property {number|null} [level] CharacterEffectDbo level
         * @property {v2.CharacterEffectDbo.ModifyFeatureEffect|null} [modifyFeature] CharacterEffectDbo modifyFeature
         * @property {v2.CharacterEffectDbo.SetFeatureEffect|null} [setFeature] CharacterEffectDbo setFeature
         * @property {v2.CharacterEffectDbo.GrantChoiceEffect|null} [grantChoice] CharacterEffectDbo grantChoice
         * @property {v2.CharacterEffectDbo.GrantAbilityEffect|null} [grantAbility] CharacterEffectDbo grantAbility
         * @property {v2.CharacterEffectDbo.GrantFeatEffect|null} [grantFeat] CharacterEffectDbo grantFeat
         * @property {v2.CharacterEffectDbo.AddChoiceOptionsEffect|null} [addChoiceOptions] CharacterEffectDbo addChoiceOptions
         */

        /**
         * Constructs a new CharacterEffectDbo.
         * @memberof v2
         * @classdesc Represents a CharacterEffectDbo.
         * @implements ICharacterEffectDbo
         * @constructor
         * @param {v2.ICharacterEffectDbo=} [properties] Properties to set
         */
        function CharacterEffectDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CharacterEffectDbo level.
         * @member {number} level
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        CharacterEffectDbo.prototype.level = 0;

        /**
         * CharacterEffectDbo modifyFeature.
         * @member {v2.CharacterEffectDbo.ModifyFeatureEffect|null|undefined} modifyFeature
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        CharacterEffectDbo.prototype.modifyFeature = null;

        /**
         * CharacterEffectDbo setFeature.
         * @member {v2.CharacterEffectDbo.SetFeatureEffect|null|undefined} setFeature
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        CharacterEffectDbo.prototype.setFeature = null;

        /**
         * CharacterEffectDbo grantChoice.
         * @member {v2.CharacterEffectDbo.GrantChoiceEffect|null|undefined} grantChoice
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        CharacterEffectDbo.prototype.grantChoice = null;

        /**
         * CharacterEffectDbo grantAbility.
         * @member {v2.CharacterEffectDbo.GrantAbilityEffect|null|undefined} grantAbility
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        CharacterEffectDbo.prototype.grantAbility = null;

        /**
         * CharacterEffectDbo grantFeat.
         * @member {v2.CharacterEffectDbo.GrantFeatEffect|null|undefined} grantFeat
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        CharacterEffectDbo.prototype.grantFeat = null;

        /**
         * CharacterEffectDbo addChoiceOptions.
         * @member {v2.CharacterEffectDbo.AddChoiceOptionsEffect|null|undefined} addChoiceOptions
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        CharacterEffectDbo.prototype.addChoiceOptions = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CharacterEffectDbo effect.
         * @member {"modifyFeature"|"setFeature"|"grantChoice"|"grantAbility"|"grantFeat"|"addChoiceOptions"|undefined} effect
         * @memberof v2.CharacterEffectDbo
         * @instance
         */
        Object.defineProperty(CharacterEffectDbo.prototype, "effect", {
            get: $util.oneOfGetter($oneOfFields = ["modifyFeature", "setFeature", "grantChoice", "grantAbility", "grantFeat", "addChoiceOptions"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CharacterEffectDbo instance using the specified properties.
         * @function create
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {v2.ICharacterEffectDbo=} [properties] Properties to set
         * @returns {v2.CharacterEffectDbo} CharacterEffectDbo instance
         */
        CharacterEffectDbo.create = function create(properties) {
            return new CharacterEffectDbo(properties);
        };

        /**
         * Encodes the specified CharacterEffectDbo message. Does not implicitly {@link v2.CharacterEffectDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {v2.CharacterEffectDbo} message CharacterEffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterEffectDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.level);
            if (message.modifyFeature != null && Object.hasOwnProperty.call(message, "modifyFeature"))
                $root.v2.CharacterEffectDbo.ModifyFeatureEffect.encode(message.modifyFeature, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.setFeature != null && Object.hasOwnProperty.call(message, "setFeature"))
                $root.v2.CharacterEffectDbo.SetFeatureEffect.encode(message.setFeature, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.grantChoice != null && Object.hasOwnProperty.call(message, "grantChoice"))
                $root.v2.CharacterEffectDbo.GrantChoiceEffect.encode(message.grantChoice, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.grantAbility != null && Object.hasOwnProperty.call(message, "grantAbility"))
                $root.v2.CharacterEffectDbo.GrantAbilityEffect.encode(message.grantAbility, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            if (message.grantFeat != null && Object.hasOwnProperty.call(message, "grantFeat"))
                $root.v2.CharacterEffectDbo.GrantFeatEffect.encode(message.grantFeat, writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
            if (message.addChoiceOptions != null && Object.hasOwnProperty.call(message, "addChoiceOptions"))
                $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect.encode(message.addChoiceOptions, writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CharacterEffectDbo message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {v2.CharacterEffectDbo} message CharacterEffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterEffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CharacterEffectDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.CharacterEffectDbo} CharacterEffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterEffectDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterEffectDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.level = reader.uint32();
                        break;
                    }
                case 100: {
                        message.modifyFeature = $root.v2.CharacterEffectDbo.ModifyFeatureEffect.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.setFeature = $root.v2.CharacterEffectDbo.SetFeatureEffect.decode(reader, reader.uint32());
                        break;
                    }
                case 102: {
                        message.grantChoice = $root.v2.CharacterEffectDbo.GrantChoiceEffect.decode(reader, reader.uint32());
                        break;
                    }
                case 103: {
                        message.grantAbility = $root.v2.CharacterEffectDbo.GrantAbilityEffect.decode(reader, reader.uint32());
                        break;
                    }
                case 104: {
                        message.grantFeat = $root.v2.CharacterEffectDbo.GrantFeatEffect.decode(reader, reader.uint32());
                        break;
                    }
                case 105: {
                        message.addChoiceOptions = $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect.decode(reader, reader.uint32());
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
         * Decodes a CharacterEffectDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.CharacterEffectDbo} CharacterEffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterEffectDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CharacterEffectDbo message.
         * @function verify
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CharacterEffectDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.modifyFeature != null && message.hasOwnProperty("modifyFeature")) {
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterEffectDbo.ModifyFeatureEffect.verify(message.modifyFeature);
                    if (error)
                        return "modifyFeature." + error;
                }
            }
            if (message.setFeature != null && message.hasOwnProperty("setFeature")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterEffectDbo.SetFeatureEffect.verify(message.setFeature);
                    if (error)
                        return "setFeature." + error;
                }
            }
            if (message.grantChoice != null && message.hasOwnProperty("grantChoice")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterEffectDbo.GrantChoiceEffect.verify(message.grantChoice);
                    if (error)
                        return "grantChoice." + error;
                }
            }
            if (message.grantAbility != null && message.hasOwnProperty("grantAbility")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterEffectDbo.GrantAbilityEffect.verify(message.grantAbility);
                    if (error)
                        return "grantAbility." + error;
                }
            }
            if (message.grantFeat != null && message.hasOwnProperty("grantFeat")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterEffectDbo.GrantFeatEffect.verify(message.grantFeat);
                    if (error)
                        return "grantFeat." + error;
                }
            }
            if (message.addChoiceOptions != null && message.hasOwnProperty("addChoiceOptions")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect.verify(message.addChoiceOptions);
                    if (error)
                        return "addChoiceOptions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CharacterEffectDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.CharacterEffectDbo} CharacterEffectDbo
         */
        CharacterEffectDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.CharacterEffectDbo)
                return object;
            var message = new $root.v2.CharacterEffectDbo();
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.modifyFeature != null) {
                if (typeof object.modifyFeature !== "object")
                    throw TypeError(".v2.CharacterEffectDbo.modifyFeature: object expected");
                message.modifyFeature = $root.v2.CharacterEffectDbo.ModifyFeatureEffect.fromObject(object.modifyFeature);
            }
            if (object.setFeature != null) {
                if (typeof object.setFeature !== "object")
                    throw TypeError(".v2.CharacterEffectDbo.setFeature: object expected");
                message.setFeature = $root.v2.CharacterEffectDbo.SetFeatureEffect.fromObject(object.setFeature);
            }
            if (object.grantChoice != null) {
                if (typeof object.grantChoice !== "object")
                    throw TypeError(".v2.CharacterEffectDbo.grantChoice: object expected");
                message.grantChoice = $root.v2.CharacterEffectDbo.GrantChoiceEffect.fromObject(object.grantChoice);
            }
            if (object.grantAbility != null) {
                if (typeof object.grantAbility !== "object")
                    throw TypeError(".v2.CharacterEffectDbo.grantAbility: object expected");
                message.grantAbility = $root.v2.CharacterEffectDbo.GrantAbilityEffect.fromObject(object.grantAbility);
            }
            if (object.grantFeat != null) {
                if (typeof object.grantFeat !== "object")
                    throw TypeError(".v2.CharacterEffectDbo.grantFeat: object expected");
                message.grantFeat = $root.v2.CharacterEffectDbo.GrantFeatEffect.fromObject(object.grantFeat);
            }
            if (object.addChoiceOptions != null) {
                if (typeof object.addChoiceOptions !== "object")
                    throw TypeError(".v2.CharacterEffectDbo.addChoiceOptions: object expected");
                message.addChoiceOptions = $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect.fromObject(object.addChoiceOptions);
            }
            return message;
        };

        /**
         * Creates a plain object from a CharacterEffectDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {v2.CharacterEffectDbo} message CharacterEffectDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CharacterEffectDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.level = 0;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.modifyFeature != null && message.hasOwnProperty("modifyFeature")) {
                object.modifyFeature = $root.v2.CharacterEffectDbo.ModifyFeatureEffect.toObject(message.modifyFeature, options);
                if (options.oneofs)
                    object.effect = "modifyFeature";
            }
            if (message.setFeature != null && message.hasOwnProperty("setFeature")) {
                object.setFeature = $root.v2.CharacterEffectDbo.SetFeatureEffect.toObject(message.setFeature, options);
                if (options.oneofs)
                    object.effect = "setFeature";
            }
            if (message.grantChoice != null && message.hasOwnProperty("grantChoice")) {
                object.grantChoice = $root.v2.CharacterEffectDbo.GrantChoiceEffect.toObject(message.grantChoice, options);
                if (options.oneofs)
                    object.effect = "grantChoice";
            }
            if (message.grantAbility != null && message.hasOwnProperty("grantAbility")) {
                object.grantAbility = $root.v2.CharacterEffectDbo.GrantAbilityEffect.toObject(message.grantAbility, options);
                if (options.oneofs)
                    object.effect = "grantAbility";
            }
            if (message.grantFeat != null && message.hasOwnProperty("grantFeat")) {
                object.grantFeat = $root.v2.CharacterEffectDbo.GrantFeatEffect.toObject(message.grantFeat, options);
                if (options.oneofs)
                    object.effect = "grantFeat";
            }
            if (message.addChoiceOptions != null && message.hasOwnProperty("addChoiceOptions")) {
                object.addChoiceOptions = $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect.toObject(message.addChoiceOptions, options);
                if (options.oneofs)
                    object.effect = "addChoiceOptions";
            }
            return object;
        };

        /**
         * Converts this CharacterEffectDbo to JSON.
         * @function toJSON
         * @memberof v2.CharacterEffectDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CharacterEffectDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CharacterEffectDbo
         * @function getTypeUrl
         * @memberof v2.CharacterEffectDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CharacterEffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.CharacterEffectDbo";
        };

        CharacterEffectDbo.ModifyFeatureEffect = (function() {

            /**
             * Properties of a ModifyFeatureEffect.
             * @memberof v2.CharacterEffectDbo
             * @interface IModifyFeatureEffect
             * @property {string|null} [featureId] ModifyFeatureEffect featureId
             * @property {number|null} [delta] ModifyFeatureEffect delta
             */

            /**
             * Constructs a new ModifyFeatureEffect.
             * @memberof v2.CharacterEffectDbo
             * @classdesc Represents a ModifyFeatureEffect.
             * @implements IModifyFeatureEffect
             * @constructor
             * @param {v2.CharacterEffectDbo.IModifyFeatureEffect=} [properties] Properties to set
             */
            function ModifyFeatureEffect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ModifyFeatureEffect featureId.
             * @member {string} featureId
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @instance
             */
            ModifyFeatureEffect.prototype.featureId = "";

            /**
             * ModifyFeatureEffect delta.
             * @member {number} delta
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @instance
             */
            ModifyFeatureEffect.prototype.delta = 0;

            /**
             * Creates a new ModifyFeatureEffect instance using the specified properties.
             * @function create
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.IModifyFeatureEffect=} [properties] Properties to set
             * @returns {v2.CharacterEffectDbo.ModifyFeatureEffect} ModifyFeatureEffect instance
             */
            ModifyFeatureEffect.create = function create(properties) {
                return new ModifyFeatureEffect(properties);
            };

            /**
             * Encodes the specified ModifyFeatureEffect message. Does not implicitly {@link v2.CharacterEffectDbo.ModifyFeatureEffect.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.ModifyFeatureEffect} message ModifyFeatureEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModifyFeatureEffect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.featureId != null && Object.hasOwnProperty.call(message, "featureId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.featureId);
                if (message.delta != null && Object.hasOwnProperty.call(message, "delta"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.delta);
                return writer;
            };

            /**
             * Encodes the specified ModifyFeatureEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.ModifyFeatureEffect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.ModifyFeatureEffect} message ModifyFeatureEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModifyFeatureEffect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ModifyFeatureEffect message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterEffectDbo.ModifyFeatureEffect} ModifyFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModifyFeatureEffect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterEffectDbo.ModifyFeatureEffect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.featureId = reader.string();
                            break;
                        }
                    case 2: {
                            message.delta = reader.int32();
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
             * Decodes a ModifyFeatureEffect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterEffectDbo.ModifyFeatureEffect} ModifyFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModifyFeatureEffect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ModifyFeatureEffect message.
             * @function verify
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ModifyFeatureEffect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.featureId != null && message.hasOwnProperty("featureId"))
                    if (!$util.isString(message.featureId))
                        return "featureId: string expected";
                if (message.delta != null && message.hasOwnProperty("delta"))
                    if (!$util.isInteger(message.delta))
                        return "delta: integer expected";
                return null;
            };

            /**
             * Creates a ModifyFeatureEffect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterEffectDbo.ModifyFeatureEffect} ModifyFeatureEffect
             */
            ModifyFeatureEffect.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterEffectDbo.ModifyFeatureEffect)
                    return object;
                var message = new $root.v2.CharacterEffectDbo.ModifyFeatureEffect();
                if (object.featureId != null)
                    message.featureId = String(object.featureId);
                if (object.delta != null)
                    message.delta = object.delta | 0;
                return message;
            };

            /**
             * Creates a plain object from a ModifyFeatureEffect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.ModifyFeatureEffect} message ModifyFeatureEffect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ModifyFeatureEffect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.featureId = "";
                    object.delta = 0;
                }
                if (message.featureId != null && message.hasOwnProperty("featureId"))
                    object.featureId = message.featureId;
                if (message.delta != null && message.hasOwnProperty("delta"))
                    object.delta = message.delta;
                return object;
            };

            /**
             * Converts this ModifyFeatureEffect to JSON.
             * @function toJSON
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ModifyFeatureEffect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ModifyFeatureEffect
             * @function getTypeUrl
             * @memberof v2.CharacterEffectDbo.ModifyFeatureEffect
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ModifyFeatureEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterEffectDbo.ModifyFeatureEffect";
            };

            return ModifyFeatureEffect;
        })();

        CharacterEffectDbo.SetFeatureEffect = (function() {

            /**
             * Properties of a SetFeatureEffect.
             * @memberof v2.CharacterEffectDbo
             * @interface ISetFeatureEffect
             * @property {string|null} [featureId] SetFeatureEffect featureId
             * @property {number|null} [value] SetFeatureEffect value
             */

            /**
             * Constructs a new SetFeatureEffect.
             * @memberof v2.CharacterEffectDbo
             * @classdesc Represents a SetFeatureEffect.
             * @implements ISetFeatureEffect
             * @constructor
             * @param {v2.CharacterEffectDbo.ISetFeatureEffect=} [properties] Properties to set
             */
            function SetFeatureEffect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetFeatureEffect featureId.
             * @member {string} featureId
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @instance
             */
            SetFeatureEffect.prototype.featureId = "";

            /**
             * SetFeatureEffect value.
             * @member {number} value
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @instance
             */
            SetFeatureEffect.prototype.value = 0;

            /**
             * Creates a new SetFeatureEffect instance using the specified properties.
             * @function create
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.ISetFeatureEffect=} [properties] Properties to set
             * @returns {v2.CharacterEffectDbo.SetFeatureEffect} SetFeatureEffect instance
             */
            SetFeatureEffect.create = function create(properties) {
                return new SetFeatureEffect(properties);
            };

            /**
             * Encodes the specified SetFeatureEffect message. Does not implicitly {@link v2.CharacterEffectDbo.SetFeatureEffect.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.SetFeatureEffect} message SetFeatureEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetFeatureEffect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.featureId != null && Object.hasOwnProperty.call(message, "featureId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.featureId);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified SetFeatureEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.SetFeatureEffect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.SetFeatureEffect} message SetFeatureEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetFeatureEffect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetFeatureEffect message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterEffectDbo.SetFeatureEffect} SetFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetFeatureEffect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterEffectDbo.SetFeatureEffect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.featureId = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.int32();
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
             * Decodes a SetFeatureEffect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterEffectDbo.SetFeatureEffect} SetFeatureEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetFeatureEffect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetFeatureEffect message.
             * @function verify
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetFeatureEffect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.featureId != null && message.hasOwnProperty("featureId"))
                    if (!$util.isString(message.featureId))
                        return "featureId: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a SetFeatureEffect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterEffectDbo.SetFeatureEffect} SetFeatureEffect
             */
            SetFeatureEffect.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterEffectDbo.SetFeatureEffect)
                    return object;
                var message = new $root.v2.CharacterEffectDbo.SetFeatureEffect();
                if (object.featureId != null)
                    message.featureId = String(object.featureId);
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from a SetFeatureEffect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {v2.CharacterEffectDbo.SetFeatureEffect} message SetFeatureEffect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetFeatureEffect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.featureId = "";
                    object.value = 0;
                }
                if (message.featureId != null && message.hasOwnProperty("featureId"))
                    object.featureId = message.featureId;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this SetFeatureEffect to JSON.
             * @function toJSON
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetFeatureEffect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetFeatureEffect
             * @function getTypeUrl
             * @memberof v2.CharacterEffectDbo.SetFeatureEffect
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetFeatureEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterEffectDbo.SetFeatureEffect";
            };

            return SetFeatureEffect;
        })();

        CharacterEffectDbo.GrantChoiceEffect = (function() {

            /**
             * Properties of a GrantChoiceEffect.
             * @memberof v2.CharacterEffectDbo
             * @interface IGrantChoiceEffect
             * @property {v2.CharacterChoiceDbo|null} [choice] GrantChoiceEffect choice
             */

            /**
             * Constructs a new GrantChoiceEffect.
             * @memberof v2.CharacterEffectDbo
             * @classdesc Represents a GrantChoiceEffect.
             * @implements IGrantChoiceEffect
             * @constructor
             * @param {v2.CharacterEffectDbo.IGrantChoiceEffect=} [properties] Properties to set
             */
            function GrantChoiceEffect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GrantChoiceEffect choice.
             * @member {v2.CharacterChoiceDbo|null|undefined} choice
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @instance
             */
            GrantChoiceEffect.prototype.choice = null;

            /**
             * Creates a new GrantChoiceEffect instance using the specified properties.
             * @function create
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {v2.CharacterEffectDbo.IGrantChoiceEffect=} [properties] Properties to set
             * @returns {v2.CharacterEffectDbo.GrantChoiceEffect} GrantChoiceEffect instance
             */
            GrantChoiceEffect.create = function create(properties) {
                return new GrantChoiceEffect(properties);
            };

            /**
             * Encodes the specified GrantChoiceEffect message. Does not implicitly {@link v2.CharacterEffectDbo.GrantChoiceEffect.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantChoiceEffect} message GrantChoiceEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GrantChoiceEffect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.choice != null && Object.hasOwnProperty.call(message, "choice"))
                    $root.v2.CharacterChoiceDbo.encode(message.choice, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GrantChoiceEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.GrantChoiceEffect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantChoiceEffect} message GrantChoiceEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GrantChoiceEffect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GrantChoiceEffect message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterEffectDbo.GrantChoiceEffect} GrantChoiceEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GrantChoiceEffect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterEffectDbo.GrantChoiceEffect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.choice = $root.v2.CharacterChoiceDbo.decode(reader, reader.uint32());
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
             * Decodes a GrantChoiceEffect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterEffectDbo.GrantChoiceEffect} GrantChoiceEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GrantChoiceEffect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GrantChoiceEffect message.
             * @function verify
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GrantChoiceEffect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.choice != null && message.hasOwnProperty("choice")) {
                    var error = $root.v2.CharacterChoiceDbo.verify(message.choice);
                    if (error)
                        return "choice." + error;
                }
                return null;
            };

            /**
             * Creates a GrantChoiceEffect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterEffectDbo.GrantChoiceEffect} GrantChoiceEffect
             */
            GrantChoiceEffect.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterEffectDbo.GrantChoiceEffect)
                    return object;
                var message = new $root.v2.CharacterEffectDbo.GrantChoiceEffect();
                if (object.choice != null) {
                    if (typeof object.choice !== "object")
                        throw TypeError(".v2.CharacterEffectDbo.GrantChoiceEffect.choice: object expected");
                    message.choice = $root.v2.CharacterChoiceDbo.fromObject(object.choice);
                }
                return message;
            };

            /**
             * Creates a plain object from a GrantChoiceEffect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantChoiceEffect} message GrantChoiceEffect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GrantChoiceEffect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.choice = null;
                if (message.choice != null && message.hasOwnProperty("choice"))
                    object.choice = $root.v2.CharacterChoiceDbo.toObject(message.choice, options);
                return object;
            };

            /**
             * Converts this GrantChoiceEffect to JSON.
             * @function toJSON
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GrantChoiceEffect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GrantChoiceEffect
             * @function getTypeUrl
             * @memberof v2.CharacterEffectDbo.GrantChoiceEffect
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GrantChoiceEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterEffectDbo.GrantChoiceEffect";
            };

            return GrantChoiceEffect;
        })();

        CharacterEffectDbo.GrantAbilityEffect = (function() {

            /**
             * Properties of a GrantAbilityEffect.
             * @memberof v2.CharacterEffectDbo
             * @interface IGrantAbilityEffect
             * @property {string|null} [abilityId] GrantAbilityEffect abilityId
             */

            /**
             * Constructs a new GrantAbilityEffect.
             * @memberof v2.CharacterEffectDbo
             * @classdesc Represents a GrantAbilityEffect.
             * @implements IGrantAbilityEffect
             * @constructor
             * @param {v2.CharacterEffectDbo.IGrantAbilityEffect=} [properties] Properties to set
             */
            function GrantAbilityEffect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GrantAbilityEffect abilityId.
             * @member {string} abilityId
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @instance
             */
            GrantAbilityEffect.prototype.abilityId = "";

            /**
             * Creates a new GrantAbilityEffect instance using the specified properties.
             * @function create
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {v2.CharacterEffectDbo.IGrantAbilityEffect=} [properties] Properties to set
             * @returns {v2.CharacterEffectDbo.GrantAbilityEffect} GrantAbilityEffect instance
             */
            GrantAbilityEffect.create = function create(properties) {
                return new GrantAbilityEffect(properties);
            };

            /**
             * Encodes the specified GrantAbilityEffect message. Does not implicitly {@link v2.CharacterEffectDbo.GrantAbilityEffect.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantAbilityEffect} message GrantAbilityEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GrantAbilityEffect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.abilityId != null && Object.hasOwnProperty.call(message, "abilityId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.abilityId);
                return writer;
            };

            /**
             * Encodes the specified GrantAbilityEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.GrantAbilityEffect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantAbilityEffect} message GrantAbilityEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GrantAbilityEffect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GrantAbilityEffect message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterEffectDbo.GrantAbilityEffect} GrantAbilityEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GrantAbilityEffect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterEffectDbo.GrantAbilityEffect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.abilityId = reader.string();
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
             * Decodes a GrantAbilityEffect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterEffectDbo.GrantAbilityEffect} GrantAbilityEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GrantAbilityEffect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GrantAbilityEffect message.
             * @function verify
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GrantAbilityEffect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.abilityId != null && message.hasOwnProperty("abilityId"))
                    if (!$util.isString(message.abilityId))
                        return "abilityId: string expected";
                return null;
            };

            /**
             * Creates a GrantAbilityEffect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterEffectDbo.GrantAbilityEffect} GrantAbilityEffect
             */
            GrantAbilityEffect.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterEffectDbo.GrantAbilityEffect)
                    return object;
                var message = new $root.v2.CharacterEffectDbo.GrantAbilityEffect();
                if (object.abilityId != null)
                    message.abilityId = String(object.abilityId);
                return message;
            };

            /**
             * Creates a plain object from a GrantAbilityEffect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantAbilityEffect} message GrantAbilityEffect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GrantAbilityEffect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.abilityId = "";
                if (message.abilityId != null && message.hasOwnProperty("abilityId"))
                    object.abilityId = message.abilityId;
                return object;
            };

            /**
             * Converts this GrantAbilityEffect to JSON.
             * @function toJSON
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GrantAbilityEffect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GrantAbilityEffect
             * @function getTypeUrl
             * @memberof v2.CharacterEffectDbo.GrantAbilityEffect
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GrantAbilityEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterEffectDbo.GrantAbilityEffect";
            };

            return GrantAbilityEffect;
        })();

        CharacterEffectDbo.GrantFeatEffect = (function() {

            /**
             * Properties of a GrantFeatEffect.
             * @memberof v2.CharacterEffectDbo
             * @interface IGrantFeatEffect
             * @property {string|null} [featId] GrantFeatEffect featId
             */

            /**
             * Constructs a new GrantFeatEffect.
             * @memberof v2.CharacterEffectDbo
             * @classdesc Represents a GrantFeatEffect.
             * @implements IGrantFeatEffect
             * @constructor
             * @param {v2.CharacterEffectDbo.IGrantFeatEffect=} [properties] Properties to set
             */
            function GrantFeatEffect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GrantFeatEffect featId.
             * @member {string} featId
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @instance
             */
            GrantFeatEffect.prototype.featId = "";

            /**
             * Creates a new GrantFeatEffect instance using the specified properties.
             * @function create
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {v2.CharacterEffectDbo.IGrantFeatEffect=} [properties] Properties to set
             * @returns {v2.CharacterEffectDbo.GrantFeatEffect} GrantFeatEffect instance
             */
            GrantFeatEffect.create = function create(properties) {
                return new GrantFeatEffect(properties);
            };

            /**
             * Encodes the specified GrantFeatEffect message. Does not implicitly {@link v2.CharacterEffectDbo.GrantFeatEffect.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantFeatEffect} message GrantFeatEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GrantFeatEffect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.featId != null && Object.hasOwnProperty.call(message, "featId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.featId);
                return writer;
            };

            /**
             * Encodes the specified GrantFeatEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.GrantFeatEffect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantFeatEffect} message GrantFeatEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GrantFeatEffect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GrantFeatEffect message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterEffectDbo.GrantFeatEffect} GrantFeatEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GrantFeatEffect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterEffectDbo.GrantFeatEffect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.featId = reader.string();
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
             * Decodes a GrantFeatEffect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterEffectDbo.GrantFeatEffect} GrantFeatEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GrantFeatEffect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GrantFeatEffect message.
             * @function verify
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GrantFeatEffect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.featId != null && message.hasOwnProperty("featId"))
                    if (!$util.isString(message.featId))
                        return "featId: string expected";
                return null;
            };

            /**
             * Creates a GrantFeatEffect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterEffectDbo.GrantFeatEffect} GrantFeatEffect
             */
            GrantFeatEffect.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterEffectDbo.GrantFeatEffect)
                    return object;
                var message = new $root.v2.CharacterEffectDbo.GrantFeatEffect();
                if (object.featId != null)
                    message.featId = String(object.featId);
                return message;
            };

            /**
             * Creates a plain object from a GrantFeatEffect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {v2.CharacterEffectDbo.GrantFeatEffect} message GrantFeatEffect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GrantFeatEffect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.featId = "";
                if (message.featId != null && message.hasOwnProperty("featId"))
                    object.featId = message.featId;
                return object;
            };

            /**
             * Converts this GrantFeatEffect to JSON.
             * @function toJSON
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GrantFeatEffect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GrantFeatEffect
             * @function getTypeUrl
             * @memberof v2.CharacterEffectDbo.GrantFeatEffect
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GrantFeatEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterEffectDbo.GrantFeatEffect";
            };

            return GrantFeatEffect;
        })();

        CharacterEffectDbo.AddChoiceOptionsEffect = (function() {

            /**
             * Properties of an AddChoiceOptionsEffect.
             * @memberof v2.CharacterEffectDbo
             * @interface IAddChoiceOptionsEffect
             * @property {string|null} [choiceType] AddChoiceOptionsEffect choiceType
             * @property {string|null} [databaseId] AddChoiceOptionsEffect databaseId
             * @property {Array.<string>|null} [optionIds] AddChoiceOptionsEffect optionIds
             */

            /**
             * Constructs a new AddChoiceOptionsEffect.
             * @memberof v2.CharacterEffectDbo
             * @classdesc Represents an AddChoiceOptionsEffect.
             * @implements IAddChoiceOptionsEffect
             * @constructor
             * @param {v2.CharacterEffectDbo.IAddChoiceOptionsEffect=} [properties] Properties to set
             */
            function AddChoiceOptionsEffect(properties) {
                this.optionIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddChoiceOptionsEffect choiceType.
             * @member {string} choiceType
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @instance
             */
            AddChoiceOptionsEffect.prototype.choiceType = "";

            /**
             * AddChoiceOptionsEffect databaseId.
             * @member {string} databaseId
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @instance
             */
            AddChoiceOptionsEffect.prototype.databaseId = "";

            /**
             * AddChoiceOptionsEffect optionIds.
             * @member {Array.<string>} optionIds
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @instance
             */
            AddChoiceOptionsEffect.prototype.optionIds = $util.emptyArray;

            /**
             * Creates a new AddChoiceOptionsEffect instance using the specified properties.
             * @function create
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {v2.CharacterEffectDbo.IAddChoiceOptionsEffect=} [properties] Properties to set
             * @returns {v2.CharacterEffectDbo.AddChoiceOptionsEffect} AddChoiceOptionsEffect instance
             */
            AddChoiceOptionsEffect.create = function create(properties) {
                return new AddChoiceOptionsEffect(properties);
            };

            /**
             * Encodes the specified AddChoiceOptionsEffect message. Does not implicitly {@link v2.CharacterEffectDbo.AddChoiceOptionsEffect.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {v2.CharacterEffectDbo.AddChoiceOptionsEffect} message AddChoiceOptionsEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddChoiceOptionsEffect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.choiceType != null && Object.hasOwnProperty.call(message, "choiceType"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.choiceType);
                if (message.databaseId != null && Object.hasOwnProperty.call(message, "databaseId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.databaseId);
                if (message.optionIds != null && message.optionIds.length)
                    for (var i = 0; i < message.optionIds.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.optionIds[i]);
                return writer;
            };

            /**
             * Encodes the specified AddChoiceOptionsEffect message, length delimited. Does not implicitly {@link v2.CharacterEffectDbo.AddChoiceOptionsEffect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {v2.CharacterEffectDbo.AddChoiceOptionsEffect} message AddChoiceOptionsEffect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddChoiceOptionsEffect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AddChoiceOptionsEffect message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterEffectDbo.AddChoiceOptionsEffect} AddChoiceOptionsEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddChoiceOptionsEffect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.choiceType = reader.string();
                            break;
                        }
                    case 2: {
                            message.databaseId = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.optionIds && message.optionIds.length))
                                message.optionIds = [];
                            message.optionIds.push(reader.string());
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
             * Decodes an AddChoiceOptionsEffect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterEffectDbo.AddChoiceOptionsEffect} AddChoiceOptionsEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddChoiceOptionsEffect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddChoiceOptionsEffect message.
             * @function verify
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddChoiceOptionsEffect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.choiceType != null && message.hasOwnProperty("choiceType"))
                    if (!$util.isString(message.choiceType))
                        return "choiceType: string expected";
                if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                    if (!$util.isString(message.databaseId))
                        return "databaseId: string expected";
                if (message.optionIds != null && message.hasOwnProperty("optionIds")) {
                    if (!Array.isArray(message.optionIds))
                        return "optionIds: array expected";
                    for (var i = 0; i < message.optionIds.length; ++i)
                        if (!$util.isString(message.optionIds[i]))
                            return "optionIds: string[] expected";
                }
                return null;
            };

            /**
             * Creates an AddChoiceOptionsEffect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterEffectDbo.AddChoiceOptionsEffect} AddChoiceOptionsEffect
             */
            AddChoiceOptionsEffect.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect)
                    return object;
                var message = new $root.v2.CharacterEffectDbo.AddChoiceOptionsEffect();
                if (object.choiceType != null)
                    message.choiceType = String(object.choiceType);
                if (object.databaseId != null)
                    message.databaseId = String(object.databaseId);
                if (object.optionIds) {
                    if (!Array.isArray(object.optionIds))
                        throw TypeError(".v2.CharacterEffectDbo.AddChoiceOptionsEffect.optionIds: array expected");
                    message.optionIds = [];
                    for (var i = 0; i < object.optionIds.length; ++i)
                        message.optionIds[i] = String(object.optionIds[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an AddChoiceOptionsEffect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {v2.CharacterEffectDbo.AddChoiceOptionsEffect} message AddChoiceOptionsEffect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddChoiceOptionsEffect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.optionIds = [];
                if (options.defaults) {
                    object.choiceType = "";
                    object.databaseId = "";
                }
                if (message.choiceType != null && message.hasOwnProperty("choiceType"))
                    object.choiceType = message.choiceType;
                if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                    object.databaseId = message.databaseId;
                if (message.optionIds && message.optionIds.length) {
                    object.optionIds = [];
                    for (var j = 0; j < message.optionIds.length; ++j)
                        object.optionIds[j] = message.optionIds[j];
                }
                return object;
            };

            /**
             * Converts this AddChoiceOptionsEffect to JSON.
             * @function toJSON
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddChoiceOptionsEffect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AddChoiceOptionsEffect
             * @function getTypeUrl
             * @memberof v2.CharacterEffectDbo.AddChoiceOptionsEffect
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AddChoiceOptionsEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterEffectDbo.AddChoiceOptionsEffect";
            };

            return AddChoiceOptionsEffect;
        })();

        return CharacterEffectDbo;
    })();

    v2.SpellDatabaseDbo = (function() {

        /**
         * Properties of a SpellDatabaseDbo.
         * @memberof v2
         * @interface ISpellDatabaseDbo
         * @property {Array.<v2.SpellSummaryDbo>|null} [spellSummaries] SpellDatabaseDbo spellSummaries
         */

        /**
         * Constructs a new SpellDatabaseDbo.
         * @memberof v2
         * @classdesc Represents a SpellDatabaseDbo.
         * @implements ISpellDatabaseDbo
         * @constructor
         * @param {v2.ISpellDatabaseDbo=} [properties] Properties to set
         */
        function SpellDatabaseDbo(properties) {
            this.spellSummaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpellDatabaseDbo spellSummaries.
         * @member {Array.<v2.SpellSummaryDbo>} spellSummaries
         * @memberof v2.SpellDatabaseDbo
         * @instance
         */
        SpellDatabaseDbo.prototype.spellSummaries = $util.emptyArray;

        /**
         * Creates a new SpellDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {v2.ISpellDatabaseDbo=} [properties] Properties to set
         * @returns {v2.SpellDatabaseDbo} SpellDatabaseDbo instance
         */
        SpellDatabaseDbo.create = function create(properties) {
            return new SpellDatabaseDbo(properties);
        };

        /**
         * Encodes the specified SpellDatabaseDbo message. Does not implicitly {@link v2.SpellDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {v2.SpellDatabaseDbo} message SpellDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spellSummaries != null && message.spellSummaries.length)
                for (var i = 0; i < message.spellSummaries.length; ++i)
                    $root.v2.SpellSummaryDbo.encode(message.spellSummaries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpellDatabaseDbo message, length delimited. Does not implicitly {@link v2.SpellDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {v2.SpellDatabaseDbo} message SpellDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpellDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.SpellDatabaseDbo} SpellDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.SpellDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.spellSummaries && message.spellSummaries.length))
                            message.spellSummaries = [];
                        message.spellSummaries.push($root.v2.SpellSummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes a SpellDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.SpellDatabaseDbo} SpellDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpellDatabaseDbo message.
         * @function verify
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpellDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spellSummaries != null && message.hasOwnProperty("spellSummaries")) {
                if (!Array.isArray(message.spellSummaries))
                    return "spellSummaries: array expected";
                for (var i = 0; i < message.spellSummaries.length; ++i) {
                    var error = $root.v2.SpellSummaryDbo.verify(message.spellSummaries[i]);
                    if (error)
                        return "spellSummaries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SpellDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.SpellDatabaseDbo} SpellDatabaseDbo
         */
        SpellDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.SpellDatabaseDbo)
                return object;
            var message = new $root.v2.SpellDatabaseDbo();
            if (object.spellSummaries) {
                if (!Array.isArray(object.spellSummaries))
                    throw TypeError(".v2.SpellDatabaseDbo.spellSummaries: array expected");
                message.spellSummaries = [];
                for (var i = 0; i < object.spellSummaries.length; ++i) {
                    if (typeof object.spellSummaries[i] !== "object")
                        throw TypeError(".v2.SpellDatabaseDbo.spellSummaries: object expected");
                    message.spellSummaries[i] = $root.v2.SpellSummaryDbo.fromObject(object.spellSummaries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SpellDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {v2.SpellDatabaseDbo} message SpellDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpellDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.spellSummaries = [];
            if (message.spellSummaries && message.spellSummaries.length) {
                object.spellSummaries = [];
                for (var j = 0; j < message.spellSummaries.length; ++j)
                    object.spellSummaries[j] = $root.v2.SpellSummaryDbo.toObject(message.spellSummaries[j], options);
            }
            return object;
        };

        /**
         * Converts this SpellDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v2.SpellDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpellDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpellDatabaseDbo
         * @function getTypeUrl
         * @memberof v2.SpellDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpellDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.SpellDatabaseDbo";
        };

        return SpellDatabaseDbo;
    })();

    v2.SpellSummaryDbo = (function() {

        /**
         * Properties of a SpellSummaryDbo.
         * @memberof v2
         * @interface ISpellSummaryDbo
         * @property {string|null} [id] SpellSummaryDbo id
         * @property {string|null} [name] SpellSummaryDbo name
         * @property {v2.AbilityTypeDbo|null} [type] SpellSummaryDbo type
         * @property {string|null} [prerequisitesFormula] SpellSummaryDbo prerequisitesFormula
         * @property {Array.<v2.SpellLevelDbo>|null} [level] SpellSummaryDbo level
         */

        /**
         * Constructs a new SpellSummaryDbo.
         * @memberof v2
         * @classdesc Represents a SpellSummaryDbo.
         * @implements ISpellSummaryDbo
         * @constructor
         * @param {v2.ISpellSummaryDbo=} [properties] Properties to set
         */
        function SpellSummaryDbo(properties) {
            this.level = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpellSummaryDbo id.
         * @member {string} id
         * @memberof v2.SpellSummaryDbo
         * @instance
         */
        SpellSummaryDbo.prototype.id = "";

        /**
         * SpellSummaryDbo name.
         * @member {string} name
         * @memberof v2.SpellSummaryDbo
         * @instance
         */
        SpellSummaryDbo.prototype.name = "";

        /**
         * SpellSummaryDbo type.
         * @member {v2.AbilityTypeDbo} type
         * @memberof v2.SpellSummaryDbo
         * @instance
         */
        SpellSummaryDbo.prototype.type = 0;

        /**
         * SpellSummaryDbo prerequisitesFormula.
         * @member {string} prerequisitesFormula
         * @memberof v2.SpellSummaryDbo
         * @instance
         */
        SpellSummaryDbo.prototype.prerequisitesFormula = "";

        /**
         * SpellSummaryDbo level.
         * @member {Array.<v2.SpellLevelDbo>} level
         * @memberof v2.SpellSummaryDbo
         * @instance
         */
        SpellSummaryDbo.prototype.level = $util.emptyArray;

        /**
         * Creates a new SpellSummaryDbo instance using the specified properties.
         * @function create
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {v2.ISpellSummaryDbo=} [properties] Properties to set
         * @returns {v2.SpellSummaryDbo} SpellSummaryDbo instance
         */
        SpellSummaryDbo.create = function create(properties) {
            return new SpellSummaryDbo(properties);
        };

        /**
         * Encodes the specified SpellSummaryDbo message. Does not implicitly {@link v2.SpellSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {v2.SpellSummaryDbo} message SpellSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.prerequisitesFormula != null && Object.hasOwnProperty.call(message, "prerequisitesFormula"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.prerequisitesFormula);
            if (message.level != null && message.level.length)
                for (var i = 0; i < message.level.length; ++i)
                    $root.v2.SpellLevelDbo.encode(message.level[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpellSummaryDbo message, length delimited. Does not implicitly {@link v2.SpellSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {v2.SpellSummaryDbo} message SpellSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpellSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.SpellSummaryDbo} SpellSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.SpellSummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.prerequisitesFormula = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.level && message.level.length))
                            message.level = [];
                        message.level.push($root.v2.SpellLevelDbo.decode(reader, reader.uint32()));
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
         * Decodes a SpellSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.SpellSummaryDbo} SpellSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpellSummaryDbo message.
         * @function verify
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpellSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                if (!$util.isString(message.prerequisitesFormula))
                    return "prerequisitesFormula: string expected";
            if (message.level != null && message.hasOwnProperty("level")) {
                if (!Array.isArray(message.level))
                    return "level: array expected";
                for (var i = 0; i < message.level.length; ++i) {
                    var error = $root.v2.SpellLevelDbo.verify(message.level[i]);
                    if (error)
                        return "level." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SpellSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.SpellSummaryDbo} SpellSummaryDbo
         */
        SpellSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.SpellSummaryDbo)
                return object;
            var message = new $root.v2.SpellSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ABILITY_TYPE_NONE":
            case 0:
                message.type = 0;
                break;
            case "ABILITY_TYPE_EX":
            case 1:
                message.type = 1;
                break;
            case "ABILITY_TYPE_SP":
            case 2:
                message.type = 2;
                break;
            case "ABILITY_TYPE_SU":
            case 3:
                message.type = 3;
                break;
            }
            if (object.prerequisitesFormula != null)
                message.prerequisitesFormula = String(object.prerequisitesFormula);
            if (object.level) {
                if (!Array.isArray(object.level))
                    throw TypeError(".v2.SpellSummaryDbo.level: array expected");
                message.level = [];
                for (var i = 0; i < object.level.length; ++i) {
                    if (typeof object.level[i] !== "object")
                        throw TypeError(".v2.SpellSummaryDbo.level: object expected");
                    message.level[i] = $root.v2.SpellLevelDbo.fromObject(object.level[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SpellSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {v2.SpellSummaryDbo} message SpellSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpellSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.level = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.type = options.enums === String ? "ABILITY_TYPE_NONE" : 0;
                object.prerequisitesFormula = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.v2.AbilityTypeDbo[message.type] === undefined ? message.type : $root.v2.AbilityTypeDbo[message.type] : message.type;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
            if (message.level && message.level.length) {
                object.level = [];
                for (var j = 0; j < message.level.length; ++j)
                    object.level[j] = $root.v2.SpellLevelDbo.toObject(message.level[j], options);
            }
            return object;
        };

        /**
         * Converts this SpellSummaryDbo to JSON.
         * @function toJSON
         * @memberof v2.SpellSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpellSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpellSummaryDbo
         * @function getTypeUrl
         * @memberof v2.SpellSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpellSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.SpellSummaryDbo";
        };

        return SpellSummaryDbo;
    })();

    v2.SpellDataDbo = (function() {

        /**
         * Properties of a SpellDataDbo.
         * @memberof v2
         * @interface ISpellDataDbo
         * @property {string|null} [id] SpellDataDbo id
         * @property {string|null} [name] SpellDataDbo name
         * @property {v2.AbilityTypeDbo|null} [type] SpellDataDbo type
         * @property {string|null} [school] SpellDataDbo school
         * @property {ActionTypeDbo|null} [castingTime] SpellDataDbo castingTime
         * @property {RangeDbo|null} [range] SpellDataDbo range
         * @property {string|null} [area] SpellDataDbo area
         * @property {string|null} [targets] SpellDataDbo targets
         * @property {string|null} [effect] SpellDataDbo effect
         * @property {string|null} [duration] SpellDataDbo duration
         * @property {v2.SavingThrowDbo|null} [savingThrow] SpellDataDbo savingThrow
         * @property {string|null} [description] SpellDataDbo description
         * @property {string|null} [notes] SpellDataDbo notes
         * @property {string|null} [prerequisitesFormula] SpellDataDbo prerequisitesFormula
         * @property {Array.<v2.SpellLevelDbo>|null} [level] SpellDataDbo level
         */

        /**
         * Constructs a new SpellDataDbo.
         * @memberof v2
         * @classdesc Represents a SpellDataDbo.
         * @implements ISpellDataDbo
         * @constructor
         * @param {v2.ISpellDataDbo=} [properties] Properties to set
         */
        function SpellDataDbo(properties) {
            this.level = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpellDataDbo id.
         * @member {string} id
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.id = "";

        /**
         * SpellDataDbo name.
         * @member {string} name
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.name = "";

        /**
         * SpellDataDbo type.
         * @member {v2.AbilityTypeDbo} type
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.type = 0;

        /**
         * SpellDataDbo school.
         * @member {string} school
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.school = "";

        /**
         * SpellDataDbo castingTime.
         * @member {ActionTypeDbo} castingTime
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.castingTime = 0;

        /**
         * SpellDataDbo range.
         * @member {RangeDbo|null|undefined} range
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.range = null;

        /**
         * SpellDataDbo area.
         * @member {string} area
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.area = "";

        /**
         * SpellDataDbo targets.
         * @member {string} targets
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.targets = "";

        /**
         * SpellDataDbo effect.
         * @member {string} effect
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.effect = "";

        /**
         * SpellDataDbo duration.
         * @member {string} duration
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.duration = "";

        /**
         * SpellDataDbo savingThrow.
         * @member {v2.SavingThrowDbo|null|undefined} savingThrow
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.savingThrow = null;

        /**
         * SpellDataDbo description.
         * @member {string} description
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.description = "";

        /**
         * SpellDataDbo notes.
         * @member {string} notes
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.notes = "";

        /**
         * SpellDataDbo prerequisitesFormula.
         * @member {string} prerequisitesFormula
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.prerequisitesFormula = "";

        /**
         * SpellDataDbo level.
         * @member {Array.<v2.SpellLevelDbo>} level
         * @memberof v2.SpellDataDbo
         * @instance
         */
        SpellDataDbo.prototype.level = $util.emptyArray;

        /**
         * Creates a new SpellDataDbo instance using the specified properties.
         * @function create
         * @memberof v2.SpellDataDbo
         * @static
         * @param {v2.ISpellDataDbo=} [properties] Properties to set
         * @returns {v2.SpellDataDbo} SpellDataDbo instance
         */
        SpellDataDbo.create = function create(properties) {
            return new SpellDataDbo(properties);
        };

        /**
         * Encodes the specified SpellDataDbo message. Does not implicitly {@link v2.SpellDataDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.SpellDataDbo
         * @static
         * @param {v2.SpellDataDbo} message SpellDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellDataDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.school != null && Object.hasOwnProperty.call(message, "school"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.school);
            if (message.castingTime != null && Object.hasOwnProperty.call(message, "castingTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.castingTime);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                $root.RangeDbo.encode(message.range, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.area);
            if (message.targets != null && Object.hasOwnProperty.call(message, "targets"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.targets);
            if (message.effect != null && Object.hasOwnProperty.call(message, "effect"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.effect);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.duration);
            if (message.savingThrow != null && Object.hasOwnProperty.call(message, "savingThrow"))
                $root.v2.SavingThrowDbo.encode(message.savingThrow, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.description);
            if (message.notes != null && Object.hasOwnProperty.call(message, "notes"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.notes);
            if (message.prerequisitesFormula != null && Object.hasOwnProperty.call(message, "prerequisitesFormula"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.prerequisitesFormula);
            if (message.level != null && message.level.length)
                for (var i = 0; i < message.level.length; ++i)
                    $root.v2.SpellLevelDbo.encode(message.level[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpellDataDbo message, length delimited. Does not implicitly {@link v2.SpellDataDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.SpellDataDbo
         * @static
         * @param {v2.SpellDataDbo} message SpellDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellDataDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpellDataDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.SpellDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.SpellDataDbo} SpellDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellDataDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.SpellDataDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.school = reader.string();
                        break;
                    }
                case 5: {
                        message.castingTime = reader.int32();
                        break;
                    }
                case 6: {
                        message.range = $root.RangeDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.area = reader.string();
                        break;
                    }
                case 8: {
                        message.targets = reader.string();
                        break;
                    }
                case 9: {
                        message.effect = reader.string();
                        break;
                    }
                case 10: {
                        message.duration = reader.string();
                        break;
                    }
                case 11: {
                        message.savingThrow = $root.v2.SavingThrowDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.description = reader.string();
                        break;
                    }
                case 13: {
                        message.notes = reader.string();
                        break;
                    }
                case 14: {
                        message.prerequisitesFormula = reader.string();
                        break;
                    }
                case 15: {
                        if (!(message.level && message.level.length))
                            message.level = [];
                        message.level.push($root.v2.SpellLevelDbo.decode(reader, reader.uint32()));
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
         * Decodes a SpellDataDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.SpellDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.SpellDataDbo} SpellDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellDataDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpellDataDbo message.
         * @function verify
         * @memberof v2.SpellDataDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpellDataDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.school != null && message.hasOwnProperty("school"))
                if (!$util.isString(message.school))
                    return "school: string expected";
            if (message.castingTime != null && message.hasOwnProperty("castingTime"))
                switch (message.castingTime) {
                default:
                    return "castingTime: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.range != null && message.hasOwnProperty("range")) {
                var error = $root.RangeDbo.verify(message.range);
                if (error)
                    return "range." + error;
            }
            if (message.area != null && message.hasOwnProperty("area"))
                if (!$util.isString(message.area))
                    return "area: string expected";
            if (message.targets != null && message.hasOwnProperty("targets"))
                if (!$util.isString(message.targets))
                    return "targets: string expected";
            if (message.effect != null && message.hasOwnProperty("effect"))
                if (!$util.isString(message.effect))
                    return "effect: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isString(message.duration))
                    return "duration: string expected";
            if (message.savingThrow != null && message.hasOwnProperty("savingThrow")) {
                var error = $root.v2.SavingThrowDbo.verify(message.savingThrow);
                if (error)
                    return "savingThrow." + error;
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.notes != null && message.hasOwnProperty("notes"))
                if (!$util.isString(message.notes))
                    return "notes: string expected";
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                if (!$util.isString(message.prerequisitesFormula))
                    return "prerequisitesFormula: string expected";
            if (message.level != null && message.hasOwnProperty("level")) {
                if (!Array.isArray(message.level))
                    return "level: array expected";
                for (var i = 0; i < message.level.length; ++i) {
                    var error = $root.v2.SpellLevelDbo.verify(message.level[i]);
                    if (error)
                        return "level." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SpellDataDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.SpellDataDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.SpellDataDbo} SpellDataDbo
         */
        SpellDataDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.SpellDataDbo)
                return object;
            var message = new $root.v2.SpellDataDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ABILITY_TYPE_NONE":
            case 0:
                message.type = 0;
                break;
            case "ABILITY_TYPE_EX":
            case 1:
                message.type = 1;
                break;
            case "ABILITY_TYPE_SP":
            case 2:
                message.type = 2;
                break;
            case "ABILITY_TYPE_SU":
            case 3:
                message.type = 3;
                break;
            }
            if (object.school != null)
                message.school = String(object.school);
            switch (object.castingTime) {
            default:
                if (typeof object.castingTime === "number") {
                    message.castingTime = object.castingTime;
                    break;
                }
                break;
            case "ACTION_TYPE_UNKNOWN":
            case 0:
                message.castingTime = 0;
                break;
            case "ACTION_TYPE_IMMEDIATE":
            case 1:
                message.castingTime = 1;
                break;
            case "ACTION_TYPE_FREE":
            case 2:
                message.castingTime = 2;
                break;
            case "ACTION_TYPE_SWIFT":
            case 3:
                message.castingTime = 3;
                break;
            case "ACTION_TYPE_MOVE":
            case 4:
                message.castingTime = 4;
                break;
            case "ACTION_TYPE_STANDARD":
            case 5:
                message.castingTime = 5;
                break;
            case "ACTION_TYPE_FULL_ROUND":
            case 6:
                message.castingTime = 6;
                break;
            }
            if (object.range != null) {
                if (typeof object.range !== "object")
                    throw TypeError(".v2.SpellDataDbo.range: object expected");
                message.range = $root.RangeDbo.fromObject(object.range);
            }
            if (object.area != null)
                message.area = String(object.area);
            if (object.targets != null)
                message.targets = String(object.targets);
            if (object.effect != null)
                message.effect = String(object.effect);
            if (object.duration != null)
                message.duration = String(object.duration);
            if (object.savingThrow != null) {
                if (typeof object.savingThrow !== "object")
                    throw TypeError(".v2.SpellDataDbo.savingThrow: object expected");
                message.savingThrow = $root.v2.SavingThrowDbo.fromObject(object.savingThrow);
            }
            if (object.description != null)
                message.description = String(object.description);
            if (object.notes != null)
                message.notes = String(object.notes);
            if (object.prerequisitesFormula != null)
                message.prerequisitesFormula = String(object.prerequisitesFormula);
            if (object.level) {
                if (!Array.isArray(object.level))
                    throw TypeError(".v2.SpellDataDbo.level: array expected");
                message.level = [];
                for (var i = 0; i < object.level.length; ++i) {
                    if (typeof object.level[i] !== "object")
                        throw TypeError(".v2.SpellDataDbo.level: object expected");
                    message.level[i] = $root.v2.SpellLevelDbo.fromObject(object.level[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SpellDataDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.SpellDataDbo
         * @static
         * @param {v2.SpellDataDbo} message SpellDataDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpellDataDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.level = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.type = options.enums === String ? "ABILITY_TYPE_NONE" : 0;
                object.school = "";
                object.castingTime = options.enums === String ? "ACTION_TYPE_UNKNOWN" : 0;
                object.range = null;
                object.area = "";
                object.targets = "";
                object.effect = "";
                object.duration = "";
                object.savingThrow = null;
                object.description = "";
                object.notes = "";
                object.prerequisitesFormula = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.v2.AbilityTypeDbo[message.type] === undefined ? message.type : $root.v2.AbilityTypeDbo[message.type] : message.type;
            if (message.school != null && message.hasOwnProperty("school"))
                object.school = message.school;
            if (message.castingTime != null && message.hasOwnProperty("castingTime"))
                object.castingTime = options.enums === String ? $root.ActionTypeDbo[message.castingTime] === undefined ? message.castingTime : $root.ActionTypeDbo[message.castingTime] : message.castingTime;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = $root.RangeDbo.toObject(message.range, options);
            if (message.area != null && message.hasOwnProperty("area"))
                object.area = message.area;
            if (message.targets != null && message.hasOwnProperty("targets"))
                object.targets = message.targets;
            if (message.effect != null && message.hasOwnProperty("effect"))
                object.effect = message.effect;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.savingThrow != null && message.hasOwnProperty("savingThrow"))
                object.savingThrow = $root.v2.SavingThrowDbo.toObject(message.savingThrow, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.notes != null && message.hasOwnProperty("notes"))
                object.notes = message.notes;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
            if (message.level && message.level.length) {
                object.level = [];
                for (var j = 0; j < message.level.length; ++j)
                    object.level[j] = $root.v2.SpellLevelDbo.toObject(message.level[j], options);
            }
            return object;
        };

        /**
         * Converts this SpellDataDbo to JSON.
         * @function toJSON
         * @memberof v2.SpellDataDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpellDataDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpellDataDbo
         * @function getTypeUrl
         * @memberof v2.SpellDataDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpellDataDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.SpellDataDbo";
        };

        return SpellDataDbo;
    })();

    v2.SpellLevelDbo = (function() {

        /**
         * Properties of a SpellLevelDbo.
         * @memberof v2
         * @interface ISpellLevelDbo
         * @property {string|null} [classId] SpellLevelDbo classId
         * @property {number|null} [level] SpellLevelDbo level
         */

        /**
         * Constructs a new SpellLevelDbo.
         * @memberof v2
         * @classdesc Represents a SpellLevelDbo.
         * @implements ISpellLevelDbo
         * @constructor
         * @param {v2.ISpellLevelDbo=} [properties] Properties to set
         */
        function SpellLevelDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpellLevelDbo classId.
         * @member {string} classId
         * @memberof v2.SpellLevelDbo
         * @instance
         */
        SpellLevelDbo.prototype.classId = "";

        /**
         * SpellLevelDbo level.
         * @member {number} level
         * @memberof v2.SpellLevelDbo
         * @instance
         */
        SpellLevelDbo.prototype.level = 0;

        /**
         * Creates a new SpellLevelDbo instance using the specified properties.
         * @function create
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {v2.ISpellLevelDbo=} [properties] Properties to set
         * @returns {v2.SpellLevelDbo} SpellLevelDbo instance
         */
        SpellLevelDbo.create = function create(properties) {
            return new SpellLevelDbo(properties);
        };

        /**
         * Encodes the specified SpellLevelDbo message. Does not implicitly {@link v2.SpellLevelDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {v2.SpellLevelDbo} message SpellLevelDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellLevelDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.classId != null && Object.hasOwnProperty.call(message, "classId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.classId);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.level);
            return writer;
        };

        /**
         * Encodes the specified SpellLevelDbo message, length delimited. Does not implicitly {@link v2.SpellLevelDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {v2.SpellLevelDbo} message SpellLevelDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpellLevelDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpellLevelDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.SpellLevelDbo} SpellLevelDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellLevelDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.SpellLevelDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.classId = reader.string();
                        break;
                    }
                case 2: {
                        message.level = reader.uint32();
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
         * Decodes a SpellLevelDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.SpellLevelDbo} SpellLevelDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpellLevelDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpellLevelDbo message.
         * @function verify
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpellLevelDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.classId != null && message.hasOwnProperty("classId"))
                if (!$util.isString(message.classId))
                    return "classId: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            return null;
        };

        /**
         * Creates a SpellLevelDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.SpellLevelDbo} SpellLevelDbo
         */
        SpellLevelDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.SpellLevelDbo)
                return object;
            var message = new $root.v2.SpellLevelDbo();
            if (object.classId != null)
                message.classId = String(object.classId);
            if (object.level != null)
                message.level = object.level >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SpellLevelDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {v2.SpellLevelDbo} message SpellLevelDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpellLevelDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.classId = "";
                object.level = 0;
            }
            if (message.classId != null && message.hasOwnProperty("classId"))
                object.classId = message.classId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        /**
         * Converts this SpellLevelDbo to JSON.
         * @function toJSON
         * @memberof v2.SpellLevelDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpellLevelDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpellLevelDbo
         * @function getTypeUrl
         * @memberof v2.SpellLevelDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpellLevelDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.SpellLevelDbo";
        };

        return SpellLevelDbo;
    })();

    v2.SavingThrowDbo = (function() {

        /**
         * Properties of a SavingThrowDbo.
         * @memberof v2
         * @interface ISavingThrowDbo
         * @property {AbilityScoreDbo|null} [ability] SavingThrowDbo ability
         * @property {number|null} [dc] SavingThrowDbo dc
         */

        /**
         * Constructs a new SavingThrowDbo.
         * @memberof v2
         * @classdesc Represents a SavingThrowDbo.
         * @implements ISavingThrowDbo
         * @constructor
         * @param {v2.ISavingThrowDbo=} [properties] Properties to set
         */
        function SavingThrowDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SavingThrowDbo ability.
         * @member {AbilityScoreDbo} ability
         * @memberof v2.SavingThrowDbo
         * @instance
         */
        SavingThrowDbo.prototype.ability = 0;

        /**
         * SavingThrowDbo dc.
         * @member {number} dc
         * @memberof v2.SavingThrowDbo
         * @instance
         */
        SavingThrowDbo.prototype.dc = 0;

        /**
         * Creates a new SavingThrowDbo instance using the specified properties.
         * @function create
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {v2.ISavingThrowDbo=} [properties] Properties to set
         * @returns {v2.SavingThrowDbo} SavingThrowDbo instance
         */
        SavingThrowDbo.create = function create(properties) {
            return new SavingThrowDbo(properties);
        };

        /**
         * Encodes the specified SavingThrowDbo message. Does not implicitly {@link v2.SavingThrowDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {v2.SavingThrowDbo} message SavingThrowDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SavingThrowDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ability != null && Object.hasOwnProperty.call(message, "ability"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ability);
            if (message.dc != null && Object.hasOwnProperty.call(message, "dc"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dc);
            return writer;
        };

        /**
         * Encodes the specified SavingThrowDbo message, length delimited. Does not implicitly {@link v2.SavingThrowDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {v2.SavingThrowDbo} message SavingThrowDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SavingThrowDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SavingThrowDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.SavingThrowDbo} SavingThrowDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SavingThrowDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.SavingThrowDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ability = reader.int32();
                        break;
                    }
                case 2: {
                        message.dc = reader.uint32();
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
         * Decodes a SavingThrowDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.SavingThrowDbo} SavingThrowDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SavingThrowDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SavingThrowDbo message.
         * @function verify
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SavingThrowDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ability != null && message.hasOwnProperty("ability"))
                switch (message.ability) {
                default:
                    return "ability: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.dc != null && message.hasOwnProperty("dc"))
                if (!$util.isInteger(message.dc))
                    return "dc: integer expected";
            return null;
        };

        /**
         * Creates a SavingThrowDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.SavingThrowDbo} SavingThrowDbo
         */
        SavingThrowDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.SavingThrowDbo)
                return object;
            var message = new $root.v2.SavingThrowDbo();
            switch (object.ability) {
            default:
                if (typeof object.ability === "number") {
                    message.ability = object.ability;
                    break;
                }
                break;
            case "ABILITY_SCORE_UNKNOWN":
            case 0:
                message.ability = 0;
                break;
            case "ABILITY_SCORE_STR":
            case 1:
                message.ability = 1;
                break;
            case "ABILITY_SCORE_DEX":
            case 2:
                message.ability = 2;
                break;
            case "ABILITY_SCORE_CON":
            case 3:
                message.ability = 3;
                break;
            case "ABILITY_SCORE_INT":
            case 4:
                message.ability = 4;
                break;
            case "ABILITY_SCORE_WIS":
            case 5:
                message.ability = 5;
                break;
            case "ABILITY_SCORE_CHA":
            case 6:
                message.ability = 6;
                break;
            }
            if (object.dc != null)
                message.dc = object.dc >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SavingThrowDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {v2.SavingThrowDbo} message SavingThrowDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SavingThrowDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ability = options.enums === String ? "ABILITY_SCORE_UNKNOWN" : 0;
                object.dc = 0;
            }
            if (message.ability != null && message.hasOwnProperty("ability"))
                object.ability = options.enums === String ? $root.AbilityScoreDbo[message.ability] === undefined ? message.ability : $root.AbilityScoreDbo[message.ability] : message.ability;
            if (message.dc != null && message.hasOwnProperty("dc"))
                object.dc = message.dc;
            return object;
        };

        /**
         * Converts this SavingThrowDbo to JSON.
         * @function toJSON
         * @memberof v2.SavingThrowDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SavingThrowDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SavingThrowDbo
         * @function getTypeUrl
         * @memberof v2.SavingThrowDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SavingThrowDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.SavingThrowDbo";
        };

        /**
         * Type enum.
         * @name v2.SavingThrowDbo.Type
         * @enum {number}
         * @property {number} NEGATES=0 NEGATES value
         * @property {number} PARTIAL=1 PARTIAL value
         * @property {number} HALF=2 HALF value
         * @property {number} NONE=3 NONE value
         * @property {number} DISBELIEF=4 DISBELIEF value
         */
        SavingThrowDbo.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NEGATES"] = 0;
            values[valuesById[1] = "PARTIAL"] = 1;
            values[valuesById[2] = "HALF"] = 2;
            values[valuesById[3] = "NONE"] = 3;
            values[valuesById[4] = "DISBELIEF"] = 4;
            return values;
        })();

        return SavingThrowDbo;
    })();

    v2.ClassDatabaseDbo = (function() {

        /**
         * Properties of a ClassDatabaseDbo.
         * @memberof v2
         * @interface IClassDatabaseDbo
         * @property {Array.<v2.ClassSummaryDbo>|null} [summaries] ClassDatabaseDbo summaries
         */

        /**
         * Constructs a new ClassDatabaseDbo.
         * @memberof v2
         * @classdesc Represents a ClassDatabaseDbo.
         * @implements IClassDatabaseDbo
         * @constructor
         * @param {v2.IClassDatabaseDbo=} [properties] Properties to set
         */
        function ClassDatabaseDbo(properties) {
            this.summaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClassDatabaseDbo summaries.
         * @member {Array.<v2.ClassSummaryDbo>} summaries
         * @memberof v2.ClassDatabaseDbo
         * @instance
         */
        ClassDatabaseDbo.prototype.summaries = $util.emptyArray;

        /**
         * Creates a new ClassDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {v2.IClassDatabaseDbo=} [properties] Properties to set
         * @returns {v2.ClassDatabaseDbo} ClassDatabaseDbo instance
         */
        ClassDatabaseDbo.create = function create(properties) {
            return new ClassDatabaseDbo(properties);
        };

        /**
         * Encodes the specified ClassDatabaseDbo message. Does not implicitly {@link v2.ClassDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {v2.ClassDatabaseDbo} message ClassDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.summaries != null && message.summaries.length)
                for (var i = 0; i < message.summaries.length; ++i)
                    $root.v2.ClassSummaryDbo.encode(message.summaries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClassDatabaseDbo message, length delimited. Does not implicitly {@link v2.ClassDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {v2.ClassDatabaseDbo} message ClassDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClassDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ClassDatabaseDbo} ClassDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ClassDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.summaries && message.summaries.length))
                            message.summaries = [];
                        message.summaries.push($root.v2.ClassSummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes a ClassDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ClassDatabaseDbo} ClassDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClassDatabaseDbo message.
         * @function verify
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClassDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.summaries != null && message.hasOwnProperty("summaries")) {
                if (!Array.isArray(message.summaries))
                    return "summaries: array expected";
                for (var i = 0; i < message.summaries.length; ++i) {
                    var error = $root.v2.ClassSummaryDbo.verify(message.summaries[i]);
                    if (error)
                        return "summaries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClassDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ClassDatabaseDbo} ClassDatabaseDbo
         */
        ClassDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ClassDatabaseDbo)
                return object;
            var message = new $root.v2.ClassDatabaseDbo();
            if (object.summaries) {
                if (!Array.isArray(object.summaries))
                    throw TypeError(".v2.ClassDatabaseDbo.summaries: array expected");
                message.summaries = [];
                for (var i = 0; i < object.summaries.length; ++i) {
                    if (typeof object.summaries[i] !== "object")
                        throw TypeError(".v2.ClassDatabaseDbo.summaries: object expected");
                    message.summaries[i] = $root.v2.ClassSummaryDbo.fromObject(object.summaries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ClassDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {v2.ClassDatabaseDbo} message ClassDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClassDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.summaries = [];
            if (message.summaries && message.summaries.length) {
                object.summaries = [];
                for (var j = 0; j < message.summaries.length; ++j)
                    object.summaries[j] = $root.v2.ClassSummaryDbo.toObject(message.summaries[j], options);
            }
            return object;
        };

        /**
         * Converts this ClassDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v2.ClassDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClassDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClassDatabaseDbo
         * @function getTypeUrl
         * @memberof v2.ClassDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClassDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ClassDatabaseDbo";
        };

        return ClassDatabaseDbo;
    })();

    v2.ClassSummaryDbo = (function() {

        /**
         * Properties of a ClassSummaryDbo.
         * @memberof v2
         * @interface IClassSummaryDbo
         * @property {string|null} [id] ClassSummaryDbo id
         * @property {string|null} [name] ClassSummaryDbo name
         * @property {v2.ClassCategoryDbo|null} [category] ClassSummaryDbo category
         */

        /**
         * Constructs a new ClassSummaryDbo.
         * @memberof v2
         * @classdesc Represents a ClassSummaryDbo.
         * @implements IClassSummaryDbo
         * @constructor
         * @param {v2.IClassSummaryDbo=} [properties] Properties to set
         */
        function ClassSummaryDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClassSummaryDbo id.
         * @member {string} id
         * @memberof v2.ClassSummaryDbo
         * @instance
         */
        ClassSummaryDbo.prototype.id = "";

        /**
         * ClassSummaryDbo name.
         * @member {string} name
         * @memberof v2.ClassSummaryDbo
         * @instance
         */
        ClassSummaryDbo.prototype.name = "";

        /**
         * ClassSummaryDbo category.
         * @member {v2.ClassCategoryDbo} category
         * @memberof v2.ClassSummaryDbo
         * @instance
         */
        ClassSummaryDbo.prototype.category = 0;

        /**
         * Creates a new ClassSummaryDbo instance using the specified properties.
         * @function create
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {v2.IClassSummaryDbo=} [properties] Properties to set
         * @returns {v2.ClassSummaryDbo} ClassSummaryDbo instance
         */
        ClassSummaryDbo.create = function create(properties) {
            return new ClassSummaryDbo(properties);
        };

        /**
         * Encodes the specified ClassSummaryDbo message. Does not implicitly {@link v2.ClassSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {v2.ClassSummaryDbo} message ClassSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.category);
            return writer;
        };

        /**
         * Encodes the specified ClassSummaryDbo message, length delimited. Does not implicitly {@link v2.ClassSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {v2.ClassSummaryDbo} message ClassSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClassSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ClassSummaryDbo} ClassSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ClassSummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.category = reader.int32();
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
         * Decodes a ClassSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ClassSummaryDbo} ClassSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClassSummaryDbo message.
         * @function verify
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClassSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                switch (message.category) {
                default:
                    return "category: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a ClassSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ClassSummaryDbo} ClassSummaryDbo
         */
        ClassSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ClassSummaryDbo)
                return object;
            var message = new $root.v2.ClassSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.category) {
            default:
                if (typeof object.category === "number") {
                    message.category = object.category;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.category = 0;
                break;
            case "CORE":
            case 1:
                message.category = 1;
                break;
            case "BASE":
            case 2:
                message.category = 2;
                break;
            case "HYBRID":
            case 3:
                message.category = 3;
                break;
            case "UNCHAINED":
            case 4:
                message.category = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ClassSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {v2.ClassSummaryDbo} message ClassSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClassSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.category = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = options.enums === String ? $root.v2.ClassCategoryDbo[message.category] === undefined ? message.category : $root.v2.ClassCategoryDbo[message.category] : message.category;
            return object;
        };

        /**
         * Converts this ClassSummaryDbo to JSON.
         * @function toJSON
         * @memberof v2.ClassSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClassSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClassSummaryDbo
         * @function getTypeUrl
         * @memberof v2.ClassSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClassSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ClassSummaryDbo";
        };

        return ClassSummaryDbo;
    })();

    v2.ClassDetailsDbo = (function() {

        /**
         * Properties of a ClassDetailsDbo.
         * @memberof v2
         * @interface IClassDetailsDbo
         * @property {string|null} [id] ClassDetailsDbo id
         * @property {string|null} [name] ClassDetailsDbo name
         * @property {v2.ClassCategoryDbo|null} [category] ClassDetailsDbo category
         * @property {string|null} [shortDescription] ClassDetailsDbo shortDescription
         * @property {Array.<v2.CharacterEffectDbo>|null} [effects] ClassDetailsDbo effects
         */

        /**
         * Constructs a new ClassDetailsDbo.
         * @memberof v2
         * @classdesc Represents a ClassDetailsDbo.
         * @implements IClassDetailsDbo
         * @constructor
         * @param {v2.IClassDetailsDbo=} [properties] Properties to set
         */
        function ClassDetailsDbo(properties) {
            this.effects = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClassDetailsDbo id.
         * @member {string} id
         * @memberof v2.ClassDetailsDbo
         * @instance
         */
        ClassDetailsDbo.prototype.id = "";

        /**
         * ClassDetailsDbo name.
         * @member {string} name
         * @memberof v2.ClassDetailsDbo
         * @instance
         */
        ClassDetailsDbo.prototype.name = "";

        /**
         * ClassDetailsDbo category.
         * @member {v2.ClassCategoryDbo} category
         * @memberof v2.ClassDetailsDbo
         * @instance
         */
        ClassDetailsDbo.prototype.category = 0;

        /**
         * ClassDetailsDbo shortDescription.
         * @member {string} shortDescription
         * @memberof v2.ClassDetailsDbo
         * @instance
         */
        ClassDetailsDbo.prototype.shortDescription = "";

        /**
         * ClassDetailsDbo effects.
         * @member {Array.<v2.CharacterEffectDbo>} effects
         * @memberof v2.ClassDetailsDbo
         * @instance
         */
        ClassDetailsDbo.prototype.effects = $util.emptyArray;

        /**
         * Creates a new ClassDetailsDbo instance using the specified properties.
         * @function create
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {v2.IClassDetailsDbo=} [properties] Properties to set
         * @returns {v2.ClassDetailsDbo} ClassDetailsDbo instance
         */
        ClassDetailsDbo.create = function create(properties) {
            return new ClassDetailsDbo(properties);
        };

        /**
         * Encodes the specified ClassDetailsDbo message. Does not implicitly {@link v2.ClassDetailsDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {v2.ClassDetailsDbo} message ClassDetailsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassDetailsDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.category);
            if (message.shortDescription != null && Object.hasOwnProperty.call(message, "shortDescription"))
                writer.uint32(/* id 50, wireType 2 =*/402).string(message.shortDescription);
            if (message.effects != null && message.effects.length)
                for (var i = 0; i < message.effects.length; ++i)
                    $root.v2.CharacterEffectDbo.encode(message.effects[i], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClassDetailsDbo message, length delimited. Does not implicitly {@link v2.ClassDetailsDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {v2.ClassDetailsDbo} message ClassDetailsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassDetailsDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClassDetailsDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ClassDetailsDbo} ClassDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassDetailsDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ClassDetailsDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.category = reader.int32();
                        break;
                    }
                case 50: {
                        message.shortDescription = reader.string();
                        break;
                    }
                case 100: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.v2.CharacterEffectDbo.decode(reader, reader.uint32()));
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
         * Decodes a ClassDetailsDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ClassDetailsDbo} ClassDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassDetailsDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClassDetailsDbo message.
         * @function verify
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClassDetailsDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                switch (message.category) {
                default:
                    return "category: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.shortDescription != null && message.hasOwnProperty("shortDescription"))
                if (!$util.isString(message.shortDescription))
                    return "shortDescription: string expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (var i = 0; i < message.effects.length; ++i) {
                    var error = $root.v2.CharacterEffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClassDetailsDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ClassDetailsDbo} ClassDetailsDbo
         */
        ClassDetailsDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ClassDetailsDbo)
                return object;
            var message = new $root.v2.ClassDetailsDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.category) {
            default:
                if (typeof object.category === "number") {
                    message.category = object.category;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.category = 0;
                break;
            case "CORE":
            case 1:
                message.category = 1;
                break;
            case "BASE":
            case 2:
                message.category = 2;
                break;
            case "HYBRID":
            case 3:
                message.category = 3;
                break;
            case "UNCHAINED":
            case 4:
                message.category = 4;
                break;
            }
            if (object.shortDescription != null)
                message.shortDescription = String(object.shortDescription);
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".v2.ClassDetailsDbo.effects: array expected");
                message.effects = [];
                for (var i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".v2.ClassDetailsDbo.effects: object expected");
                    message.effects[i] = $root.v2.CharacterEffectDbo.fromObject(object.effects[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ClassDetailsDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {v2.ClassDetailsDbo} message ClassDetailsDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClassDetailsDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.effects = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.category = options.enums === String ? "UNKNOWN" : 0;
                object.shortDescription = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = options.enums === String ? $root.v2.ClassCategoryDbo[message.category] === undefined ? message.category : $root.v2.ClassCategoryDbo[message.category] : message.category;
            if (message.shortDescription != null && message.hasOwnProperty("shortDescription"))
                object.shortDescription = message.shortDescription;
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (var j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.v2.CharacterEffectDbo.toObject(message.effects[j], options);
            }
            return object;
        };

        /**
         * Converts this ClassDetailsDbo to JSON.
         * @function toJSON
         * @memberof v2.ClassDetailsDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClassDetailsDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClassDetailsDbo
         * @function getTypeUrl
         * @memberof v2.ClassDetailsDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClassDetailsDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ClassDetailsDbo";
        };

        return ClassDetailsDbo;
    })();

    /**
     * ClassCategoryDbo enum.
     * @name v2.ClassCategoryDbo
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} CORE=1 CORE value
     * @property {number} BASE=2 BASE value
     * @property {number} HYBRID=3 HYBRID value
     * @property {number} UNCHAINED=4 UNCHAINED value
     */
    v2.ClassCategoryDbo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "CORE"] = 1;
        values[valuesById[2] = "BASE"] = 2;
        values[valuesById[3] = "HYBRID"] = 3;
        values[valuesById[4] = "UNCHAINED"] = 4;
        return values;
    })();

    v2.ModifierDatabaseDbo = (function() {

        /**
         * Properties of a ModifierDatabaseDbo.
         * @memberof v2
         * @interface IModifierDatabaseDbo
         * @property {string|null} [databaseId] ModifierDatabaseDbo databaseId
         * @property {Array.<v2.ModifierSummaryDbo>|null} [summaries] ModifierDatabaseDbo summaries
         */

        /**
         * Constructs a new ModifierDatabaseDbo.
         * @memberof v2
         * @classdesc Represents a ModifierDatabaseDbo.
         * @implements IModifierDatabaseDbo
         * @constructor
         * @param {v2.IModifierDatabaseDbo=} [properties] Properties to set
         */
        function ModifierDatabaseDbo(properties) {
            this.summaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifierDatabaseDbo databaseId.
         * @member {string} databaseId
         * @memberof v2.ModifierDatabaseDbo
         * @instance
         */
        ModifierDatabaseDbo.prototype.databaseId = "";

        /**
         * ModifierDatabaseDbo summaries.
         * @member {Array.<v2.ModifierSummaryDbo>} summaries
         * @memberof v2.ModifierDatabaseDbo
         * @instance
         */
        ModifierDatabaseDbo.prototype.summaries = $util.emptyArray;

        /**
         * Creates a new ModifierDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {v2.IModifierDatabaseDbo=} [properties] Properties to set
         * @returns {v2.ModifierDatabaseDbo} ModifierDatabaseDbo instance
         */
        ModifierDatabaseDbo.create = function create(properties) {
            return new ModifierDatabaseDbo(properties);
        };

        /**
         * Encodes the specified ModifierDatabaseDbo message. Does not implicitly {@link v2.ModifierDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {v2.ModifierDatabaseDbo} message ModifierDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifierDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.databaseId != null && Object.hasOwnProperty.call(message, "databaseId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.databaseId);
            if (message.summaries != null && message.summaries.length)
                for (var i = 0; i < message.summaries.length; ++i)
                    $root.v2.ModifierSummaryDbo.encode(message.summaries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ModifierDatabaseDbo message, length delimited. Does not implicitly {@link v2.ModifierDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {v2.ModifierDatabaseDbo} message ModifierDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifierDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifierDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ModifierDatabaseDbo} ModifierDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifierDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ModifierDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.databaseId = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.summaries && message.summaries.length))
                            message.summaries = [];
                        message.summaries.push($root.v2.ModifierSummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes a ModifierDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ModifierDatabaseDbo} ModifierDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifierDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifierDatabaseDbo message.
         * @function verify
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifierDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                if (!$util.isString(message.databaseId))
                    return "databaseId: string expected";
            if (message.summaries != null && message.hasOwnProperty("summaries")) {
                if (!Array.isArray(message.summaries))
                    return "summaries: array expected";
                for (var i = 0; i < message.summaries.length; ++i) {
                    var error = $root.v2.ModifierSummaryDbo.verify(message.summaries[i]);
                    if (error)
                        return "summaries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ModifierDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ModifierDatabaseDbo} ModifierDatabaseDbo
         */
        ModifierDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ModifierDatabaseDbo)
                return object;
            var message = new $root.v2.ModifierDatabaseDbo();
            if (object.databaseId != null)
                message.databaseId = String(object.databaseId);
            if (object.summaries) {
                if (!Array.isArray(object.summaries))
                    throw TypeError(".v2.ModifierDatabaseDbo.summaries: array expected");
                message.summaries = [];
                for (var i = 0; i < object.summaries.length; ++i) {
                    if (typeof object.summaries[i] !== "object")
                        throw TypeError(".v2.ModifierDatabaseDbo.summaries: object expected");
                    message.summaries[i] = $root.v2.ModifierSummaryDbo.fromObject(object.summaries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ModifierDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {v2.ModifierDatabaseDbo} message ModifierDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifierDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.summaries = [];
            if (options.defaults)
                object.databaseId = "";
            if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                object.databaseId = message.databaseId;
            if (message.summaries && message.summaries.length) {
                object.summaries = [];
                for (var j = 0; j < message.summaries.length; ++j)
                    object.summaries[j] = $root.v2.ModifierSummaryDbo.toObject(message.summaries[j], options);
            }
            return object;
        };

        /**
         * Converts this ModifierDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v2.ModifierDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifierDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModifierDatabaseDbo
         * @function getTypeUrl
         * @memberof v2.ModifierDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModifierDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ModifierDatabaseDbo";
        };

        return ModifierDatabaseDbo;
    })();

    v2.ModifierSummaryDbo = (function() {

        /**
         * Properties of a ModifierSummaryDbo.
         * @memberof v2
         * @interface IModifierSummaryDbo
         * @property {string|null} [id] ModifierSummaryDbo id
         * @property {string|null} [name] ModifierSummaryDbo name
         */

        /**
         * Constructs a new ModifierSummaryDbo.
         * @memberof v2
         * @classdesc Represents a ModifierSummaryDbo.
         * @implements IModifierSummaryDbo
         * @constructor
         * @param {v2.IModifierSummaryDbo=} [properties] Properties to set
         */
        function ModifierSummaryDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifierSummaryDbo id.
         * @member {string} id
         * @memberof v2.ModifierSummaryDbo
         * @instance
         */
        ModifierSummaryDbo.prototype.id = "";

        /**
         * ModifierSummaryDbo name.
         * @member {string} name
         * @memberof v2.ModifierSummaryDbo
         * @instance
         */
        ModifierSummaryDbo.prototype.name = "";

        /**
         * Creates a new ModifierSummaryDbo instance using the specified properties.
         * @function create
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {v2.IModifierSummaryDbo=} [properties] Properties to set
         * @returns {v2.ModifierSummaryDbo} ModifierSummaryDbo instance
         */
        ModifierSummaryDbo.create = function create(properties) {
            return new ModifierSummaryDbo(properties);
        };

        /**
         * Encodes the specified ModifierSummaryDbo message. Does not implicitly {@link v2.ModifierSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {v2.ModifierSummaryDbo} message ModifierSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifierSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ModifierSummaryDbo message, length delimited. Does not implicitly {@link v2.ModifierSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {v2.ModifierSummaryDbo} message ModifierSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifierSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifierSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ModifierSummaryDbo} ModifierSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifierSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ModifierSummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
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
         * Decodes a ModifierSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ModifierSummaryDbo} ModifierSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifierSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifierSummaryDbo message.
         * @function verify
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifierSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a ModifierSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ModifierSummaryDbo} ModifierSummaryDbo
         */
        ModifierSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ModifierSummaryDbo)
                return object;
            var message = new $root.v2.ModifierSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ModifierSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {v2.ModifierSummaryDbo} message ModifierSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifierSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ModifierSummaryDbo to JSON.
         * @function toJSON
         * @memberof v2.ModifierSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifierSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModifierSummaryDbo
         * @function getTypeUrl
         * @memberof v2.ModifierSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModifierSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ModifierSummaryDbo";
        };

        return ModifierSummaryDbo;
    })();

    v2.ModifierDetailsDbo = (function() {

        /**
         * Properties of a ModifierDetailsDbo.
         * @memberof v2
         * @interface IModifierDetailsDbo
         * @property {string|null} [id] ModifierDetailsDbo id
         * @property {string|null} [name] ModifierDetailsDbo name
         * @property {Array.<v2.CharacterEffectDbo>|null} [effects] ModifierDetailsDbo effects
         * @property {string|null} [descriptionText] ModifierDetailsDbo descriptionText
         * @property {string|null} [effectText] ModifierDetailsDbo effectText
         */

        /**
         * Constructs a new ModifierDetailsDbo.
         * @memberof v2
         * @classdesc Represents a ModifierDetailsDbo.
         * @implements IModifierDetailsDbo
         * @constructor
         * @param {v2.IModifierDetailsDbo=} [properties] Properties to set
         */
        function ModifierDetailsDbo(properties) {
            this.effects = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifierDetailsDbo id.
         * @member {string} id
         * @memberof v2.ModifierDetailsDbo
         * @instance
         */
        ModifierDetailsDbo.prototype.id = "";

        /**
         * ModifierDetailsDbo name.
         * @member {string} name
         * @memberof v2.ModifierDetailsDbo
         * @instance
         */
        ModifierDetailsDbo.prototype.name = "";

        /**
         * ModifierDetailsDbo effects.
         * @member {Array.<v2.CharacterEffectDbo>} effects
         * @memberof v2.ModifierDetailsDbo
         * @instance
         */
        ModifierDetailsDbo.prototype.effects = $util.emptyArray;

        /**
         * ModifierDetailsDbo descriptionText.
         * @member {string} descriptionText
         * @memberof v2.ModifierDetailsDbo
         * @instance
         */
        ModifierDetailsDbo.prototype.descriptionText = "";

        /**
         * ModifierDetailsDbo effectText.
         * @member {string} effectText
         * @memberof v2.ModifierDetailsDbo
         * @instance
         */
        ModifierDetailsDbo.prototype.effectText = "";

        /**
         * Creates a new ModifierDetailsDbo instance using the specified properties.
         * @function create
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {v2.IModifierDetailsDbo=} [properties] Properties to set
         * @returns {v2.ModifierDetailsDbo} ModifierDetailsDbo instance
         */
        ModifierDetailsDbo.create = function create(properties) {
            return new ModifierDetailsDbo(properties);
        };

        /**
         * Encodes the specified ModifierDetailsDbo message. Does not implicitly {@link v2.ModifierDetailsDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {v2.ModifierDetailsDbo} message ModifierDetailsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifierDetailsDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.effects != null && message.effects.length)
                for (var i = 0; i < message.effects.length; ++i)
                    $root.v2.CharacterEffectDbo.encode(message.effects[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.descriptionText != null && Object.hasOwnProperty.call(message, "descriptionText"))
                writer.uint32(/* id 100, wireType 2 =*/802).string(message.descriptionText);
            if (message.effectText != null && Object.hasOwnProperty.call(message, "effectText"))
                writer.uint32(/* id 101, wireType 2 =*/810).string(message.effectText);
            return writer;
        };

        /**
         * Encodes the specified ModifierDetailsDbo message, length delimited. Does not implicitly {@link v2.ModifierDetailsDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {v2.ModifierDetailsDbo} message ModifierDetailsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifierDetailsDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifierDetailsDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ModifierDetailsDbo} ModifierDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifierDetailsDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ModifierDetailsDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.v2.CharacterEffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 100: {
                        message.descriptionText = reader.string();
                        break;
                    }
                case 101: {
                        message.effectText = reader.string();
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
         * Decodes a ModifierDetailsDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ModifierDetailsDbo} ModifierDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifierDetailsDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifierDetailsDbo message.
         * @function verify
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifierDetailsDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (var i = 0; i < message.effects.length; ++i) {
                    var error = $root.v2.CharacterEffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                if (!$util.isString(message.descriptionText))
                    return "descriptionText: string expected";
            if (message.effectText != null && message.hasOwnProperty("effectText"))
                if (!$util.isString(message.effectText))
                    return "effectText: string expected";
            return null;
        };

        /**
         * Creates a ModifierDetailsDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ModifierDetailsDbo} ModifierDetailsDbo
         */
        ModifierDetailsDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ModifierDetailsDbo)
                return object;
            var message = new $root.v2.ModifierDetailsDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".v2.ModifierDetailsDbo.effects: array expected");
                message.effects = [];
                for (var i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".v2.ModifierDetailsDbo.effects: object expected");
                    message.effects[i] = $root.v2.CharacterEffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.descriptionText != null)
                message.descriptionText = String(object.descriptionText);
            if (object.effectText != null)
                message.effectText = String(object.effectText);
            return message;
        };

        /**
         * Creates a plain object from a ModifierDetailsDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {v2.ModifierDetailsDbo} message ModifierDetailsDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifierDetailsDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.effects = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.descriptionText = "";
                object.effectText = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (var j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.v2.CharacterEffectDbo.toObject(message.effects[j], options);
            }
            if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                object.descriptionText = message.descriptionText;
            if (message.effectText != null && message.hasOwnProperty("effectText"))
                object.effectText = message.effectText;
            return object;
        };

        /**
         * Converts this ModifierDetailsDbo to JSON.
         * @function toJSON
         * @memberof v2.ModifierDetailsDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifierDetailsDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModifierDetailsDbo
         * @function getTypeUrl
         * @memberof v2.ModifierDetailsDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModifierDetailsDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ModifierDetailsDbo";
        };

        return ModifierDetailsDbo;
    })();

    v2.CharacterChoiceDbo = (function() {

        /**
         * Properties of a CharacterChoiceDbo.
         * @memberof v2
         * @interface ICharacterChoiceDbo
         * @property {string|null} [key] CharacterChoiceDbo key
         * @property {string|null} [label] CharacterChoiceDbo label
         * @property {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice|null} [abilityScoreIncrease] CharacterChoiceDbo abilityScoreIncrease
         * @property {v2.CharacterChoiceDbo.FeatChoice|null} [feat] CharacterChoiceDbo feat
         * @property {v2.CharacterChoiceDbo.AbilityChoice|null} [ability] CharacterChoiceDbo ability
         * @property {v2.CharacterChoiceDbo.ModifierChoice|null} [modifier] CharacterChoiceDbo modifier
         */

        /**
         * Constructs a new CharacterChoiceDbo.
         * @memberof v2
         * @classdesc Represents a CharacterChoiceDbo.
         * @implements ICharacterChoiceDbo
         * @constructor
         * @param {v2.ICharacterChoiceDbo=} [properties] Properties to set
         */
        function CharacterChoiceDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CharacterChoiceDbo key.
         * @member {string} key
         * @memberof v2.CharacterChoiceDbo
         * @instance
         */
        CharacterChoiceDbo.prototype.key = "";

        /**
         * CharacterChoiceDbo label.
         * @member {string} label
         * @memberof v2.CharacterChoiceDbo
         * @instance
         */
        CharacterChoiceDbo.prototype.label = "";

        /**
         * CharacterChoiceDbo abilityScoreIncrease.
         * @member {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice|null|undefined} abilityScoreIncrease
         * @memberof v2.CharacterChoiceDbo
         * @instance
         */
        CharacterChoiceDbo.prototype.abilityScoreIncrease = null;

        /**
         * CharacterChoiceDbo feat.
         * @member {v2.CharacterChoiceDbo.FeatChoice|null|undefined} feat
         * @memberof v2.CharacterChoiceDbo
         * @instance
         */
        CharacterChoiceDbo.prototype.feat = null;

        /**
         * CharacterChoiceDbo ability.
         * @member {v2.CharacterChoiceDbo.AbilityChoice|null|undefined} ability
         * @memberof v2.CharacterChoiceDbo
         * @instance
         */
        CharacterChoiceDbo.prototype.ability = null;

        /**
         * CharacterChoiceDbo modifier.
         * @member {v2.CharacterChoiceDbo.ModifierChoice|null|undefined} modifier
         * @memberof v2.CharacterChoiceDbo
         * @instance
         */
        CharacterChoiceDbo.prototype.modifier = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CharacterChoiceDbo effect.
         * @member {"abilityScoreIncrease"|"feat"|"ability"|"modifier"|undefined} effect
         * @memberof v2.CharacterChoiceDbo
         * @instance
         */
        Object.defineProperty(CharacterChoiceDbo.prototype, "effect", {
            get: $util.oneOfGetter($oneOfFields = ["abilityScoreIncrease", "feat", "ability", "modifier"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CharacterChoiceDbo instance using the specified properties.
         * @function create
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {v2.ICharacterChoiceDbo=} [properties] Properties to set
         * @returns {v2.CharacterChoiceDbo} CharacterChoiceDbo instance
         */
        CharacterChoiceDbo.create = function create(properties) {
            return new CharacterChoiceDbo(properties);
        };

        /**
         * Encodes the specified CharacterChoiceDbo message. Does not implicitly {@link v2.CharacterChoiceDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {v2.CharacterChoiceDbo} message CharacterChoiceDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterChoiceDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.abilityScoreIncrease != null && Object.hasOwnProperty.call(message, "abilityScoreIncrease"))
                $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.encode(message.abilityScoreIncrease, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.feat != null && Object.hasOwnProperty.call(message, "feat"))
                $root.v2.CharacterChoiceDbo.FeatChoice.encode(message.feat, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.ability != null && Object.hasOwnProperty.call(message, "ability"))
                $root.v2.CharacterChoiceDbo.AbilityChoice.encode(message.ability, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.modifier != null && Object.hasOwnProperty.call(message, "modifier"))
                $root.v2.CharacterChoiceDbo.ModifierChoice.encode(message.modifier, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CharacterChoiceDbo message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {v2.CharacterChoiceDbo} message CharacterChoiceDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CharacterChoiceDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.CharacterChoiceDbo} CharacterChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterChoiceDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterChoiceDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 100: {
                        message.abilityScoreIncrease = $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.feat = $root.v2.CharacterChoiceDbo.FeatChoice.decode(reader, reader.uint32());
                        break;
                    }
                case 102: {
                        message.ability = $root.v2.CharacterChoiceDbo.AbilityChoice.decode(reader, reader.uint32());
                        break;
                    }
                case 103: {
                        message.modifier = $root.v2.CharacterChoiceDbo.ModifierChoice.decode(reader, reader.uint32());
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
         * Decodes a CharacterChoiceDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.CharacterChoiceDbo} CharacterChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterChoiceDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CharacterChoiceDbo message.
         * @function verify
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CharacterChoiceDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.abilityScoreIncrease != null && message.hasOwnProperty("abilityScoreIncrease")) {
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.verify(message.abilityScoreIncrease);
                    if (error)
                        return "abilityScoreIncrease." + error;
                }
            }
            if (message.feat != null && message.hasOwnProperty("feat")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterChoiceDbo.FeatChoice.verify(message.feat);
                    if (error)
                        return "feat." + error;
                }
            }
            if (message.ability != null && message.hasOwnProperty("ability")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterChoiceDbo.AbilityChoice.verify(message.ability);
                    if (error)
                        return "ability." + error;
                }
            }
            if (message.modifier != null && message.hasOwnProperty("modifier")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v2.CharacterChoiceDbo.ModifierChoice.verify(message.modifier);
                    if (error)
                        return "modifier." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CharacterChoiceDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.CharacterChoiceDbo} CharacterChoiceDbo
         */
        CharacterChoiceDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.CharacterChoiceDbo)
                return object;
            var message = new $root.v2.CharacterChoiceDbo();
            if (object.key != null)
                message.key = String(object.key);
            if (object.label != null)
                message.label = String(object.label);
            if (object.abilityScoreIncrease != null) {
                if (typeof object.abilityScoreIncrease !== "object")
                    throw TypeError(".v2.CharacterChoiceDbo.abilityScoreIncrease: object expected");
                message.abilityScoreIncrease = $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.fromObject(object.abilityScoreIncrease);
            }
            if (object.feat != null) {
                if (typeof object.feat !== "object")
                    throw TypeError(".v2.CharacterChoiceDbo.feat: object expected");
                message.feat = $root.v2.CharacterChoiceDbo.FeatChoice.fromObject(object.feat);
            }
            if (object.ability != null) {
                if (typeof object.ability !== "object")
                    throw TypeError(".v2.CharacterChoiceDbo.ability: object expected");
                message.ability = $root.v2.CharacterChoiceDbo.AbilityChoice.fromObject(object.ability);
            }
            if (object.modifier != null) {
                if (typeof object.modifier !== "object")
                    throw TypeError(".v2.CharacterChoiceDbo.modifier: object expected");
                message.modifier = $root.v2.CharacterChoiceDbo.ModifierChoice.fromObject(object.modifier);
            }
            return message;
        };

        /**
         * Creates a plain object from a CharacterChoiceDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {v2.CharacterChoiceDbo} message CharacterChoiceDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CharacterChoiceDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.label = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.abilityScoreIncrease != null && message.hasOwnProperty("abilityScoreIncrease")) {
                object.abilityScoreIncrease = $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.toObject(message.abilityScoreIncrease, options);
                if (options.oneofs)
                    object.effect = "abilityScoreIncrease";
            }
            if (message.feat != null && message.hasOwnProperty("feat")) {
                object.feat = $root.v2.CharacterChoiceDbo.FeatChoice.toObject(message.feat, options);
                if (options.oneofs)
                    object.effect = "feat";
            }
            if (message.ability != null && message.hasOwnProperty("ability")) {
                object.ability = $root.v2.CharacterChoiceDbo.AbilityChoice.toObject(message.ability, options);
                if (options.oneofs)
                    object.effect = "ability";
            }
            if (message.modifier != null && message.hasOwnProperty("modifier")) {
                object.modifier = $root.v2.CharacterChoiceDbo.ModifierChoice.toObject(message.modifier, options);
                if (options.oneofs)
                    object.effect = "modifier";
            }
            return object;
        };

        /**
         * Converts this CharacterChoiceDbo to JSON.
         * @function toJSON
         * @memberof v2.CharacterChoiceDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CharacterChoiceDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CharacterChoiceDbo
         * @function getTypeUrl
         * @memberof v2.CharacterChoiceDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CharacterChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.CharacterChoiceDbo";
        };

        CharacterChoiceDbo.AbilityScoreIncreaseChoice = (function() {

            /**
             * Properties of an AbilityScoreIncreaseChoice.
             * @memberof v2.CharacterChoiceDbo
             * @interface IAbilityScoreIncreaseChoice
             * @property {number|null} [delta] AbilityScoreIncreaseChoice delta
             */

            /**
             * Constructs a new AbilityScoreIncreaseChoice.
             * @memberof v2.CharacterChoiceDbo
             * @classdesc Represents an AbilityScoreIncreaseChoice.
             * @implements IAbilityScoreIncreaseChoice
             * @constructor
             * @param {v2.CharacterChoiceDbo.IAbilityScoreIncreaseChoice=} [properties] Properties to set
             */
            function AbilityScoreIncreaseChoice(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AbilityScoreIncreaseChoice delta.
             * @member {number} delta
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @instance
             */
            AbilityScoreIncreaseChoice.prototype.delta = 0;

            /**
             * Creates a new AbilityScoreIncreaseChoice instance using the specified properties.
             * @function create
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {v2.CharacterChoiceDbo.IAbilityScoreIncreaseChoice=} [properties] Properties to set
             * @returns {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice} AbilityScoreIncreaseChoice instance
             */
            AbilityScoreIncreaseChoice.create = function create(properties) {
                return new AbilityScoreIncreaseChoice(properties);
            };

            /**
             * Encodes the specified AbilityScoreIncreaseChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice} message AbilityScoreIncreaseChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbilityScoreIncreaseChoice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.delta != null && Object.hasOwnProperty.call(message, "delta"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.delta);
                return writer;
            };

            /**
             * Encodes the specified AbilityScoreIncreaseChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice} message AbilityScoreIncreaseChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbilityScoreIncreaseChoice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AbilityScoreIncreaseChoice message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice} AbilityScoreIncreaseChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbilityScoreIncreaseChoice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.delta = reader.int32();
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
             * Decodes an AbilityScoreIncreaseChoice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice} AbilityScoreIncreaseChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbilityScoreIncreaseChoice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AbilityScoreIncreaseChoice message.
             * @function verify
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AbilityScoreIncreaseChoice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.delta != null && message.hasOwnProperty("delta"))
                    if (!$util.isInteger(message.delta))
                        return "delta: integer expected";
                return null;
            };

            /**
             * Creates an AbilityScoreIncreaseChoice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice} AbilityScoreIncreaseChoice
             */
            AbilityScoreIncreaseChoice.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice)
                    return object;
                var message = new $root.v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice();
                if (object.delta != null)
                    message.delta = object.delta | 0;
                return message;
            };

            /**
             * Creates a plain object from an AbilityScoreIncreaseChoice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice} message AbilityScoreIncreaseChoice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AbilityScoreIncreaseChoice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.delta = 0;
                if (message.delta != null && message.hasOwnProperty("delta"))
                    object.delta = message.delta;
                return object;
            };

            /**
             * Converts this AbilityScoreIncreaseChoice to JSON.
             * @function toJSON
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AbilityScoreIncreaseChoice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AbilityScoreIncreaseChoice
             * @function getTypeUrl
             * @memberof v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AbilityScoreIncreaseChoice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterChoiceDbo.AbilityScoreIncreaseChoice";
            };

            return AbilityScoreIncreaseChoice;
        })();

        CharacterChoiceDbo.FeatChoice = (function() {

            /**
             * Properties of a FeatChoice.
             * @memberof v2.CharacterChoiceDbo
             * @interface IFeatChoice
             * @property {Array.<string>|null} [featIds] FeatChoice featIds
             */

            /**
             * Constructs a new FeatChoice.
             * @memberof v2.CharacterChoiceDbo
             * @classdesc Represents a FeatChoice.
             * @implements IFeatChoice
             * @constructor
             * @param {v2.CharacterChoiceDbo.IFeatChoice=} [properties] Properties to set
             */
            function FeatChoice(properties) {
                this.featIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FeatChoice featIds.
             * @member {Array.<string>} featIds
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @instance
             */
            FeatChoice.prototype.featIds = $util.emptyArray;

            /**
             * Creates a new FeatChoice instance using the specified properties.
             * @function create
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {v2.CharacterChoiceDbo.IFeatChoice=} [properties] Properties to set
             * @returns {v2.CharacterChoiceDbo.FeatChoice} FeatChoice instance
             */
            FeatChoice.create = function create(properties) {
                return new FeatChoice(properties);
            };

            /**
             * Encodes the specified FeatChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.FeatChoice.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {v2.CharacterChoiceDbo.FeatChoice} message FeatChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeatChoice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.featIds != null && message.featIds.length)
                    for (var i = 0; i < message.featIds.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.featIds[i]);
                return writer;
            };

            /**
             * Encodes the specified FeatChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.FeatChoice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {v2.CharacterChoiceDbo.FeatChoice} message FeatChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeatChoice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FeatChoice message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterChoiceDbo.FeatChoice} FeatChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeatChoice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterChoiceDbo.FeatChoice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.featIds && message.featIds.length))
                                message.featIds = [];
                            message.featIds.push(reader.string());
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
             * Decodes a FeatChoice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterChoiceDbo.FeatChoice} FeatChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeatChoice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FeatChoice message.
             * @function verify
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeatChoice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.featIds != null && message.hasOwnProperty("featIds")) {
                    if (!Array.isArray(message.featIds))
                        return "featIds: array expected";
                    for (var i = 0; i < message.featIds.length; ++i)
                        if (!$util.isString(message.featIds[i]))
                            return "featIds: string[] expected";
                }
                return null;
            };

            /**
             * Creates a FeatChoice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterChoiceDbo.FeatChoice} FeatChoice
             */
            FeatChoice.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterChoiceDbo.FeatChoice)
                    return object;
                var message = new $root.v2.CharacterChoiceDbo.FeatChoice();
                if (object.featIds) {
                    if (!Array.isArray(object.featIds))
                        throw TypeError(".v2.CharacterChoiceDbo.FeatChoice.featIds: array expected");
                    message.featIds = [];
                    for (var i = 0; i < object.featIds.length; ++i)
                        message.featIds[i] = String(object.featIds[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FeatChoice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {v2.CharacterChoiceDbo.FeatChoice} message FeatChoice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FeatChoice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.featIds = [];
                if (message.featIds && message.featIds.length) {
                    object.featIds = [];
                    for (var j = 0; j < message.featIds.length; ++j)
                        object.featIds[j] = message.featIds[j];
                }
                return object;
            };

            /**
             * Converts this FeatChoice to JSON.
             * @function toJSON
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FeatChoice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FeatChoice
             * @function getTypeUrl
             * @memberof v2.CharacterChoiceDbo.FeatChoice
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FeatChoice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterChoiceDbo.FeatChoice";
            };

            return FeatChoice;
        })();

        CharacterChoiceDbo.AbilityChoice = (function() {

            /**
             * Properties of an AbilityChoice.
             * @memberof v2.CharacterChoiceDbo
             * @interface IAbilityChoice
             * @property {Array.<string>|null} [abilityIds] AbilityChoice abilityIds
             */

            /**
             * Constructs a new AbilityChoice.
             * @memberof v2.CharacterChoiceDbo
             * @classdesc Represents an AbilityChoice.
             * @implements IAbilityChoice
             * @constructor
             * @param {v2.CharacterChoiceDbo.IAbilityChoice=} [properties] Properties to set
             */
            function AbilityChoice(properties) {
                this.abilityIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AbilityChoice abilityIds.
             * @member {Array.<string>} abilityIds
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @instance
             */
            AbilityChoice.prototype.abilityIds = $util.emptyArray;

            /**
             * Creates a new AbilityChoice instance using the specified properties.
             * @function create
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {v2.CharacterChoiceDbo.IAbilityChoice=} [properties] Properties to set
             * @returns {v2.CharacterChoiceDbo.AbilityChoice} AbilityChoice instance
             */
            AbilityChoice.create = function create(properties) {
                return new AbilityChoice(properties);
            };

            /**
             * Encodes the specified AbilityChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityChoice.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {v2.CharacterChoiceDbo.AbilityChoice} message AbilityChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbilityChoice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.abilityIds != null && message.abilityIds.length)
                    for (var i = 0; i < message.abilityIds.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.abilityIds[i]);
                return writer;
            };

            /**
             * Encodes the specified AbilityChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.AbilityChoice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {v2.CharacterChoiceDbo.AbilityChoice} message AbilityChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbilityChoice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AbilityChoice message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterChoiceDbo.AbilityChoice} AbilityChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbilityChoice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterChoiceDbo.AbilityChoice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.abilityIds && message.abilityIds.length))
                                message.abilityIds = [];
                            message.abilityIds.push(reader.string());
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
             * Decodes an AbilityChoice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterChoiceDbo.AbilityChoice} AbilityChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbilityChoice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AbilityChoice message.
             * @function verify
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AbilityChoice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.abilityIds != null && message.hasOwnProperty("abilityIds")) {
                    if (!Array.isArray(message.abilityIds))
                        return "abilityIds: array expected";
                    for (var i = 0; i < message.abilityIds.length; ++i)
                        if (!$util.isString(message.abilityIds[i]))
                            return "abilityIds: string[] expected";
                }
                return null;
            };

            /**
             * Creates an AbilityChoice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterChoiceDbo.AbilityChoice} AbilityChoice
             */
            AbilityChoice.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterChoiceDbo.AbilityChoice)
                    return object;
                var message = new $root.v2.CharacterChoiceDbo.AbilityChoice();
                if (object.abilityIds) {
                    if (!Array.isArray(object.abilityIds))
                        throw TypeError(".v2.CharacterChoiceDbo.AbilityChoice.abilityIds: array expected");
                    message.abilityIds = [];
                    for (var i = 0; i < object.abilityIds.length; ++i)
                        message.abilityIds[i] = String(object.abilityIds[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an AbilityChoice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {v2.CharacterChoiceDbo.AbilityChoice} message AbilityChoice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AbilityChoice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.abilityIds = [];
                if (message.abilityIds && message.abilityIds.length) {
                    object.abilityIds = [];
                    for (var j = 0; j < message.abilityIds.length; ++j)
                        object.abilityIds[j] = message.abilityIds[j];
                }
                return object;
            };

            /**
             * Converts this AbilityChoice to JSON.
             * @function toJSON
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AbilityChoice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AbilityChoice
             * @function getTypeUrl
             * @memberof v2.CharacterChoiceDbo.AbilityChoice
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AbilityChoice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterChoiceDbo.AbilityChoice";
            };

            return AbilityChoice;
        })();

        CharacterChoiceDbo.ModifierChoice = (function() {

            /**
             * Properties of a ModifierChoice.
             * @memberof v2.CharacterChoiceDbo
             * @interface IModifierChoice
             * @property {string|null} [databaseId] ModifierChoice databaseId
             */

            /**
             * Constructs a new ModifierChoice.
             * @memberof v2.CharacterChoiceDbo
             * @classdesc Represents a ModifierChoice.
             * @implements IModifierChoice
             * @constructor
             * @param {v2.CharacterChoiceDbo.IModifierChoice=} [properties] Properties to set
             */
            function ModifierChoice(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ModifierChoice databaseId.
             * @member {string} databaseId
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @instance
             */
            ModifierChoice.prototype.databaseId = "";

            /**
             * Creates a new ModifierChoice instance using the specified properties.
             * @function create
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {v2.CharacterChoiceDbo.IModifierChoice=} [properties] Properties to set
             * @returns {v2.CharacterChoiceDbo.ModifierChoice} ModifierChoice instance
             */
            ModifierChoice.create = function create(properties) {
                return new ModifierChoice(properties);
            };

            /**
             * Encodes the specified ModifierChoice message. Does not implicitly {@link v2.CharacterChoiceDbo.ModifierChoice.verify|verify} messages.
             * @function encode
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {v2.CharacterChoiceDbo.ModifierChoice} message ModifierChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModifierChoice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.databaseId != null && Object.hasOwnProperty.call(message, "databaseId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.databaseId);
                return writer;
            };

            /**
             * Encodes the specified ModifierChoice message, length delimited. Does not implicitly {@link v2.CharacterChoiceDbo.ModifierChoice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {v2.CharacterChoiceDbo.ModifierChoice} message ModifierChoice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModifierChoice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ModifierChoice message from the specified reader or buffer.
             * @function decode
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.CharacterChoiceDbo.ModifierChoice} ModifierChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModifierChoice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.CharacterChoiceDbo.ModifierChoice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.databaseId = reader.string();
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
             * Decodes a ModifierChoice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v2.CharacterChoiceDbo.ModifierChoice} ModifierChoice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModifierChoice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ModifierChoice message.
             * @function verify
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ModifierChoice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                    if (!$util.isString(message.databaseId))
                        return "databaseId: string expected";
                return null;
            };

            /**
             * Creates a ModifierChoice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v2.CharacterChoiceDbo.ModifierChoice} ModifierChoice
             */
            ModifierChoice.fromObject = function fromObject(object) {
                if (object instanceof $root.v2.CharacterChoiceDbo.ModifierChoice)
                    return object;
                var message = new $root.v2.CharacterChoiceDbo.ModifierChoice();
                if (object.databaseId != null)
                    message.databaseId = String(object.databaseId);
                return message;
            };

            /**
             * Creates a plain object from a ModifierChoice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {v2.CharacterChoiceDbo.ModifierChoice} message ModifierChoice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ModifierChoice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.databaseId = "";
                if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                    object.databaseId = message.databaseId;
                return object;
            };

            /**
             * Converts this ModifierChoice to JSON.
             * @function toJSON
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ModifierChoice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ModifierChoice
             * @function getTypeUrl
             * @memberof v2.CharacterChoiceDbo.ModifierChoice
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ModifierChoice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v2.CharacterChoiceDbo.ModifierChoice";
            };

            return ModifierChoice;
        })();

        return CharacterChoiceDbo;
    })();

    v2.WeaponDatabaseDbo = (function() {

        /**
         * Properties of a WeaponDatabaseDbo.
         * @memberof v2
         * @interface IWeaponDatabaseDbo
         * @property {Array.<v2.WeaponTypeDbo>|null} [weaponTypes] WeaponDatabaseDbo weaponTypes
         */

        /**
         * Constructs a new WeaponDatabaseDbo.
         * @memberof v2
         * @classdesc Represents a WeaponDatabaseDbo.
         * @implements IWeaponDatabaseDbo
         * @constructor
         * @param {v2.IWeaponDatabaseDbo=} [properties] Properties to set
         */
        function WeaponDatabaseDbo(properties) {
            this.weaponTypes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeaponDatabaseDbo weaponTypes.
         * @member {Array.<v2.WeaponTypeDbo>} weaponTypes
         * @memberof v2.WeaponDatabaseDbo
         * @instance
         */
        WeaponDatabaseDbo.prototype.weaponTypes = $util.emptyArray;

        /**
         * Creates a new WeaponDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {v2.IWeaponDatabaseDbo=} [properties] Properties to set
         * @returns {v2.WeaponDatabaseDbo} WeaponDatabaseDbo instance
         */
        WeaponDatabaseDbo.create = function create(properties) {
            return new WeaponDatabaseDbo(properties);
        };

        /**
         * Encodes the specified WeaponDatabaseDbo message. Does not implicitly {@link v2.WeaponDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {v2.WeaponDatabaseDbo} message WeaponDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weaponTypes != null && message.weaponTypes.length)
                for (var i = 0; i < message.weaponTypes.length; ++i)
                    $root.v2.WeaponTypeDbo.encode(message.weaponTypes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WeaponDatabaseDbo message, length delimited. Does not implicitly {@link v2.WeaponDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {v2.WeaponDatabaseDbo} message WeaponDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeaponDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.WeaponDatabaseDbo} WeaponDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.WeaponDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.weaponTypes && message.weaponTypes.length))
                            message.weaponTypes = [];
                        message.weaponTypes.push($root.v2.WeaponTypeDbo.decode(reader, reader.uint32()));
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
         * Decodes a WeaponDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.WeaponDatabaseDbo} WeaponDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeaponDatabaseDbo message.
         * @function verify
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeaponDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weaponTypes != null && message.hasOwnProperty("weaponTypes")) {
                if (!Array.isArray(message.weaponTypes))
                    return "weaponTypes: array expected";
                for (var i = 0; i < message.weaponTypes.length; ++i) {
                    var error = $root.v2.WeaponTypeDbo.verify(message.weaponTypes[i]);
                    if (error)
                        return "weaponTypes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WeaponDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.WeaponDatabaseDbo} WeaponDatabaseDbo
         */
        WeaponDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.WeaponDatabaseDbo)
                return object;
            var message = new $root.v2.WeaponDatabaseDbo();
            if (object.weaponTypes) {
                if (!Array.isArray(object.weaponTypes))
                    throw TypeError(".v2.WeaponDatabaseDbo.weaponTypes: array expected");
                message.weaponTypes = [];
                for (var i = 0; i < object.weaponTypes.length; ++i) {
                    if (typeof object.weaponTypes[i] !== "object")
                        throw TypeError(".v2.WeaponDatabaseDbo.weaponTypes: object expected");
                    message.weaponTypes[i] = $root.v2.WeaponTypeDbo.fromObject(object.weaponTypes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WeaponDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {v2.WeaponDatabaseDbo} message WeaponDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeaponDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.weaponTypes = [];
            if (message.weaponTypes && message.weaponTypes.length) {
                object.weaponTypes = [];
                for (var j = 0; j < message.weaponTypes.length; ++j)
                    object.weaponTypes[j] = $root.v2.WeaponTypeDbo.toObject(message.weaponTypes[j], options);
            }
            return object;
        };

        /**
         * Converts this WeaponDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v2.WeaponDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeaponDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WeaponDatabaseDbo
         * @function getTypeUrl
         * @memberof v2.WeaponDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WeaponDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.WeaponDatabaseDbo";
        };

        return WeaponDatabaseDbo;
    })();

    v2.WeaponTypeDbo = (function() {

        /**
         * Properties of a WeaponTypeDbo.
         * @memberof v2
         * @interface IWeaponTypeDbo
         * @property {string|null} [id] WeaponTypeDbo id
         * @property {string|null} [name] WeaponTypeDbo name
         * @property {v2.WeaponProficiencyDbo|null} [proficiency] WeaponTypeDbo proficiency
         * @property {v2.WeaponRangeDbo|null} [range] WeaponTypeDbo range
         * @property {v2.WeaponGripDbo|null} [grip] WeaponTypeDbo grip
         */

        /**
         * Constructs a new WeaponTypeDbo.
         * @memberof v2
         * @classdesc Represents a WeaponTypeDbo.
         * @implements IWeaponTypeDbo
         * @constructor
         * @param {v2.IWeaponTypeDbo=} [properties] Properties to set
         */
        function WeaponTypeDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeaponTypeDbo id.
         * @member {string} id
         * @memberof v2.WeaponTypeDbo
         * @instance
         */
        WeaponTypeDbo.prototype.id = "";

        /**
         * WeaponTypeDbo name.
         * @member {string} name
         * @memberof v2.WeaponTypeDbo
         * @instance
         */
        WeaponTypeDbo.prototype.name = "";

        /**
         * WeaponTypeDbo proficiency.
         * @member {v2.WeaponProficiencyDbo} proficiency
         * @memberof v2.WeaponTypeDbo
         * @instance
         */
        WeaponTypeDbo.prototype.proficiency = 0;

        /**
         * WeaponTypeDbo range.
         * @member {v2.WeaponRangeDbo} range
         * @memberof v2.WeaponTypeDbo
         * @instance
         */
        WeaponTypeDbo.prototype.range = 0;

        /**
         * WeaponTypeDbo grip.
         * @member {v2.WeaponGripDbo} grip
         * @memberof v2.WeaponTypeDbo
         * @instance
         */
        WeaponTypeDbo.prototype.grip = 0;

        /**
         * Creates a new WeaponTypeDbo instance using the specified properties.
         * @function create
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {v2.IWeaponTypeDbo=} [properties] Properties to set
         * @returns {v2.WeaponTypeDbo} WeaponTypeDbo instance
         */
        WeaponTypeDbo.create = function create(properties) {
            return new WeaponTypeDbo(properties);
        };

        /**
         * Encodes the specified WeaponTypeDbo message. Does not implicitly {@link v2.WeaponTypeDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {v2.WeaponTypeDbo} message WeaponTypeDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponTypeDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.proficiency != null && Object.hasOwnProperty.call(message, "proficiency"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.proficiency);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.range);
            if (message.grip != null && Object.hasOwnProperty.call(message, "grip"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.grip);
            return writer;
        };

        /**
         * Encodes the specified WeaponTypeDbo message, length delimited. Does not implicitly {@link v2.WeaponTypeDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {v2.WeaponTypeDbo} message WeaponTypeDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponTypeDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeaponTypeDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.WeaponTypeDbo} WeaponTypeDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponTypeDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.WeaponTypeDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.proficiency = reader.int32();
                        break;
                    }
                case 4: {
                        message.range = reader.int32();
                        break;
                    }
                case 5: {
                        message.grip = reader.int32();
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
         * Decodes a WeaponTypeDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.WeaponTypeDbo} WeaponTypeDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponTypeDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeaponTypeDbo message.
         * @function verify
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeaponTypeDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.proficiency != null && message.hasOwnProperty("proficiency"))
                switch (message.proficiency) {
                default:
                    return "proficiency: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.range != null && message.hasOwnProperty("range"))
                switch (message.range) {
                default:
                    return "range: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.grip != null && message.hasOwnProperty("grip"))
                switch (message.grip) {
                default:
                    return "grip: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a WeaponTypeDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.WeaponTypeDbo} WeaponTypeDbo
         */
        WeaponTypeDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.WeaponTypeDbo)
                return object;
            var message = new $root.v2.WeaponTypeDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.proficiency) {
            default:
                if (typeof object.proficiency === "number") {
                    message.proficiency = object.proficiency;
                    break;
                }
                break;
            case "WEAPON_PROFICIENCY_OTHER":
            case 0:
                message.proficiency = 0;
                break;
            case "WEAPON_PROFICIENCY_SIMPLE":
            case 1:
                message.proficiency = 1;
                break;
            case "WEAPON_PROFICIENCY_MARTIAL":
            case 2:
                message.proficiency = 2;
                break;
            case "WEAPON_PROFICIENCY_EXOTIC":
            case 3:
                message.proficiency = 3;
                break;
            }
            switch (object.range) {
            default:
                if (typeof object.range === "number") {
                    message.range = object.range;
                    break;
                }
                break;
            case "WEAPON_RANGE_NONE":
            case 0:
                message.range = 0;
                break;
            case "WEAPON_RANGE_MELEE":
            case 1:
                message.range = 1;
                break;
            case "WEAPON_RANGE_REACH":
            case 2:
                message.range = 2;
                break;
            case "WEAPON_RANGE_RANGED":
            case 3:
                message.range = 3;
                break;
            }
            switch (object.grip) {
            default:
                if (typeof object.grip === "number") {
                    message.grip = object.grip;
                    break;
                }
                break;
            case "WEAPON_GRIP_UNARMED":
            case 0:
                message.grip = 0;
                break;
            case "WEAPON_GRIP_LIGHT":
            case 1:
                message.grip = 1;
                break;
            case "WEAPON_GRIP_ONE_HANDED":
            case 2:
                message.grip = 2;
                break;
            case "WEAPON_GRIP_TWO_HANDED":
            case 3:
                message.grip = 3;
                break;
            case "WEAPON_GRIP_RANGED":
            case 4:
                message.grip = 4;
                break;
            case "WEAPON_GRIP_AMMO":
            case 5:
                message.grip = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a WeaponTypeDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {v2.WeaponTypeDbo} message WeaponTypeDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeaponTypeDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.proficiency = options.enums === String ? "WEAPON_PROFICIENCY_OTHER" : 0;
                object.range = options.enums === String ? "WEAPON_RANGE_NONE" : 0;
                object.grip = options.enums === String ? "WEAPON_GRIP_UNARMED" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.proficiency != null && message.hasOwnProperty("proficiency"))
                object.proficiency = options.enums === String ? $root.v2.WeaponProficiencyDbo[message.proficiency] === undefined ? message.proficiency : $root.v2.WeaponProficiencyDbo[message.proficiency] : message.proficiency;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = options.enums === String ? $root.v2.WeaponRangeDbo[message.range] === undefined ? message.range : $root.v2.WeaponRangeDbo[message.range] : message.range;
            if (message.grip != null && message.hasOwnProperty("grip"))
                object.grip = options.enums === String ? $root.v2.WeaponGripDbo[message.grip] === undefined ? message.grip : $root.v2.WeaponGripDbo[message.grip] : message.grip;
            return object;
        };

        /**
         * Converts this WeaponTypeDbo to JSON.
         * @function toJSON
         * @memberof v2.WeaponTypeDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeaponTypeDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WeaponTypeDbo
         * @function getTypeUrl
         * @memberof v2.WeaponTypeDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WeaponTypeDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.WeaponTypeDbo";
        };

        return WeaponTypeDbo;
    })();

    v2.WeaponSummaryDbo = (function() {

        /**
         * Properties of a WeaponSummaryDbo.
         * @memberof v2
         * @interface IWeaponSummaryDbo
         * @property {string|null} [id] WeaponSummaryDbo id
         * @property {string|null} [name] WeaponSummaryDbo name
         * @property {v2.WeaponProficiencyDbo|null} [proficiency] WeaponSummaryDbo proficiency
         * @property {Array.<v2.WeaponSpecialDbo>|null} [special] WeaponSummaryDbo special
         * @property {v2.WeaponGripDbo|null} [grip] WeaponSummaryDbo grip
         */

        /**
         * Constructs a new WeaponSummaryDbo.
         * @memberof v2
         * @classdesc Represents a WeaponSummaryDbo.
         * @implements IWeaponSummaryDbo
         * @constructor
         * @param {v2.IWeaponSummaryDbo=} [properties] Properties to set
         */
        function WeaponSummaryDbo(properties) {
            this.special = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeaponSummaryDbo id.
         * @member {string} id
         * @memberof v2.WeaponSummaryDbo
         * @instance
         */
        WeaponSummaryDbo.prototype.id = "";

        /**
         * WeaponSummaryDbo name.
         * @member {string} name
         * @memberof v2.WeaponSummaryDbo
         * @instance
         */
        WeaponSummaryDbo.prototype.name = "";

        /**
         * WeaponSummaryDbo proficiency.
         * @member {v2.WeaponProficiencyDbo} proficiency
         * @memberof v2.WeaponSummaryDbo
         * @instance
         */
        WeaponSummaryDbo.prototype.proficiency = 0;

        /**
         * WeaponSummaryDbo special.
         * @member {Array.<v2.WeaponSpecialDbo>} special
         * @memberof v2.WeaponSummaryDbo
         * @instance
         */
        WeaponSummaryDbo.prototype.special = $util.emptyArray;

        /**
         * WeaponSummaryDbo grip.
         * @member {v2.WeaponGripDbo} grip
         * @memberof v2.WeaponSummaryDbo
         * @instance
         */
        WeaponSummaryDbo.prototype.grip = 0;

        /**
         * Creates a new WeaponSummaryDbo instance using the specified properties.
         * @function create
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {v2.IWeaponSummaryDbo=} [properties] Properties to set
         * @returns {v2.WeaponSummaryDbo} WeaponSummaryDbo instance
         */
        WeaponSummaryDbo.create = function create(properties) {
            return new WeaponSummaryDbo(properties);
        };

        /**
         * Encodes the specified WeaponSummaryDbo message. Does not implicitly {@link v2.WeaponSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {v2.WeaponSummaryDbo} message WeaponSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.proficiency != null && Object.hasOwnProperty.call(message, "proficiency"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.proficiency);
            if (message.special != null && message.special.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.special.length; ++i)
                    writer.int32(message.special[i]);
                writer.ldelim();
            }
            if (message.grip != null && Object.hasOwnProperty.call(message, "grip"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.grip);
            return writer;
        };

        /**
         * Encodes the specified WeaponSummaryDbo message, length delimited. Does not implicitly {@link v2.WeaponSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {v2.WeaponSummaryDbo} message WeaponSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeaponSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.WeaponSummaryDbo} WeaponSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.WeaponSummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.proficiency = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.special && message.special.length))
                            message.special = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.special.push(reader.int32());
                        } else
                            message.special.push(reader.int32());
                        break;
                    }
                case 5: {
                        message.grip = reader.int32();
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
         * Decodes a WeaponSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.WeaponSummaryDbo} WeaponSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeaponSummaryDbo message.
         * @function verify
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeaponSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.proficiency != null && message.hasOwnProperty("proficiency"))
                switch (message.proficiency) {
                default:
                    return "proficiency: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.special != null && message.hasOwnProperty("special")) {
                if (!Array.isArray(message.special))
                    return "special: array expected";
                for (var i = 0; i < message.special.length; ++i)
                    switch (message.special[i]) {
                    default:
                        return "special: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        break;
                    }
            }
            if (message.grip != null && message.hasOwnProperty("grip"))
                switch (message.grip) {
                default:
                    return "grip: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a WeaponSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.WeaponSummaryDbo} WeaponSummaryDbo
         */
        WeaponSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.WeaponSummaryDbo)
                return object;
            var message = new $root.v2.WeaponSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.proficiency) {
            default:
                if (typeof object.proficiency === "number") {
                    message.proficiency = object.proficiency;
                    break;
                }
                break;
            case "WEAPON_PROFICIENCY_OTHER":
            case 0:
                message.proficiency = 0;
                break;
            case "WEAPON_PROFICIENCY_SIMPLE":
            case 1:
                message.proficiency = 1;
                break;
            case "WEAPON_PROFICIENCY_MARTIAL":
            case 2:
                message.proficiency = 2;
                break;
            case "WEAPON_PROFICIENCY_EXOTIC":
            case 3:
                message.proficiency = 3;
                break;
            }
            if (object.special) {
                if (!Array.isArray(object.special))
                    throw TypeError(".v2.WeaponSummaryDbo.special: array expected");
                message.special = [];
                for (var i = 0; i < object.special.length; ++i)
                    switch (object.special[i]) {
                    default:
                        if (typeof object.special[i] === "number") {
                            message.special[i] = object.special[i];
                            break;
                        }
                    case "WEAPON_SPECIAL_DISARM":
                    case 0:
                        message.special[i] = 0;
                        break;
                    case "WEAPON_SPECIAL_TRIP":
                    case 1:
                        message.special[i] = 1;
                        break;
                    case "WEAPON_SPECIAL_IMPROVISED":
                    case 2:
                        message.special[i] = 2;
                        break;
                    case "WEAPON_SPECIAL_BLOCKING":
                    case 3:
                        message.special[i] = 3;
                        break;
                    case "WEAPON_SPECIAL_FINESSE":
                    case 4:
                        message.special[i] = 4;
                        break;
                    case "WEAPON_SPECIAL_FRAGILE":
                    case 5:
                        message.special[i] = 5;
                        break;
                    case "WEAPON_SPECIAL_BRACE":
                    case 6:
                        message.special[i] = 6;
                        break;
                    case "WEAPON_SPECIAL_REACH":
                    case 7:
                        message.special[i] = 7;
                        break;
                    case "WEAPON_SPECIAL_PERFORMANCE":
                    case 8:
                        message.special[i] = 8;
                        break;
                    case "WEAPON_SPECIAL_GRAPPLE":
                    case 9:
                        message.special[i] = 9;
                        break;
                    case "WEAPON_SPECIAL_MONK":
                    case 10:
                        message.special[i] = 10;
                        break;
                    case "WEAPON_SPECIAL_SUNDER":
                    case 11:
                        message.special[i] = 11;
                        break;
                    case "WEAPON_SPECIAL_DISTRACTING":
                    case 12:
                        message.special[i] = 12;
                        break;
                    case "WEAPON_SPECIAL_NONLETHAL":
                    case 13:
                        message.special[i] = 13;
                        break;
                    case "WEAPON_SPECIAL_DOUBLE":
                    case 14:
                        message.special[i] = 14;
                        break;
                    case "WEAPON_SPECIAL_ATTACHED":
                    case 15:
                        message.special[i] = 15;
                        break;
                    case "WEAPON_SPECIAL_TOOL":
                    case 16:
                        message.special[i] = 16;
                        break;
                    case "WEAPON_SPECIAL_STRENGTH":
                    case 17:
                        message.special[i] = 17;
                        break;
                    }
            }
            switch (object.grip) {
            default:
                if (typeof object.grip === "number") {
                    message.grip = object.grip;
                    break;
                }
                break;
            case "WEAPON_GRIP_UNARMED":
            case 0:
                message.grip = 0;
                break;
            case "WEAPON_GRIP_LIGHT":
            case 1:
                message.grip = 1;
                break;
            case "WEAPON_GRIP_ONE_HANDED":
            case 2:
                message.grip = 2;
                break;
            case "WEAPON_GRIP_TWO_HANDED":
            case 3:
                message.grip = 3;
                break;
            case "WEAPON_GRIP_RANGED":
            case 4:
                message.grip = 4;
                break;
            case "WEAPON_GRIP_AMMO":
            case 5:
                message.grip = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a WeaponSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {v2.WeaponSummaryDbo} message WeaponSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeaponSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.special = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.proficiency = options.enums === String ? "WEAPON_PROFICIENCY_OTHER" : 0;
                object.grip = options.enums === String ? "WEAPON_GRIP_UNARMED" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.proficiency != null && message.hasOwnProperty("proficiency"))
                object.proficiency = options.enums === String ? $root.v2.WeaponProficiencyDbo[message.proficiency] === undefined ? message.proficiency : $root.v2.WeaponProficiencyDbo[message.proficiency] : message.proficiency;
            if (message.special && message.special.length) {
                object.special = [];
                for (var j = 0; j < message.special.length; ++j)
                    object.special[j] = options.enums === String ? $root.v2.WeaponSpecialDbo[message.special[j]] === undefined ? message.special[j] : $root.v2.WeaponSpecialDbo[message.special[j]] : message.special[j];
            }
            if (message.grip != null && message.hasOwnProperty("grip"))
                object.grip = options.enums === String ? $root.v2.WeaponGripDbo[message.grip] === undefined ? message.grip : $root.v2.WeaponGripDbo[message.grip] : message.grip;
            return object;
        };

        /**
         * Converts this WeaponSummaryDbo to JSON.
         * @function toJSON
         * @memberof v2.WeaponSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeaponSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WeaponSummaryDbo
         * @function getTypeUrl
         * @memberof v2.WeaponSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WeaponSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.WeaponSummaryDbo";
        };

        return WeaponSummaryDbo;
    })();

    v2.WeaponDbo = (function() {

        /**
         * Properties of a WeaponDbo.
         * @memberof v2
         * @interface IWeaponDbo
         * @property {string|null} [id] WeaponDbo id
         * @property {string|null} [name] WeaponDbo name
         * @property {v2.WeaponProficiencyDbo|null} [proficiency] WeaponDbo proficiency
         * @property {Array.<v2.WeaponSpecialDbo>|null} [special] WeaponDbo special
         * @property {v2.WeaponGripDbo|null} [grip] WeaponDbo grip
         */

        /**
         * Constructs a new WeaponDbo.
         * @memberof v2
         * @classdesc Represents a WeaponDbo.
         * @implements IWeaponDbo
         * @constructor
         * @param {v2.IWeaponDbo=} [properties] Properties to set
         */
        function WeaponDbo(properties) {
            this.special = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeaponDbo id.
         * @member {string} id
         * @memberof v2.WeaponDbo
         * @instance
         */
        WeaponDbo.prototype.id = "";

        /**
         * WeaponDbo name.
         * @member {string} name
         * @memberof v2.WeaponDbo
         * @instance
         */
        WeaponDbo.prototype.name = "";

        /**
         * WeaponDbo proficiency.
         * @member {v2.WeaponProficiencyDbo} proficiency
         * @memberof v2.WeaponDbo
         * @instance
         */
        WeaponDbo.prototype.proficiency = 0;

        /**
         * WeaponDbo special.
         * @member {Array.<v2.WeaponSpecialDbo>} special
         * @memberof v2.WeaponDbo
         * @instance
         */
        WeaponDbo.prototype.special = $util.emptyArray;

        /**
         * WeaponDbo grip.
         * @member {v2.WeaponGripDbo} grip
         * @memberof v2.WeaponDbo
         * @instance
         */
        WeaponDbo.prototype.grip = 0;

        /**
         * Creates a new WeaponDbo instance using the specified properties.
         * @function create
         * @memberof v2.WeaponDbo
         * @static
         * @param {v2.IWeaponDbo=} [properties] Properties to set
         * @returns {v2.WeaponDbo} WeaponDbo instance
         */
        WeaponDbo.create = function create(properties) {
            return new WeaponDbo(properties);
        };

        /**
         * Encodes the specified WeaponDbo message. Does not implicitly {@link v2.WeaponDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.WeaponDbo
         * @static
         * @param {v2.WeaponDbo} message WeaponDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.proficiency != null && Object.hasOwnProperty.call(message, "proficiency"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.proficiency);
            if (message.special != null && message.special.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.special.length; ++i)
                    writer.int32(message.special[i]);
                writer.ldelim();
            }
            if (message.grip != null && Object.hasOwnProperty.call(message, "grip"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.grip);
            return writer;
        };

        /**
         * Encodes the specified WeaponDbo message, length delimited. Does not implicitly {@link v2.WeaponDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.WeaponDbo
         * @static
         * @param {v2.WeaponDbo} message WeaponDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeaponDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeaponDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.WeaponDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.WeaponDbo} WeaponDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.WeaponDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.proficiency = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.special && message.special.length))
                            message.special = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.special.push(reader.int32());
                        } else
                            message.special.push(reader.int32());
                        break;
                    }
                case 5: {
                        message.grip = reader.int32();
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
         * Decodes a WeaponDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.WeaponDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.WeaponDbo} WeaponDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeaponDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeaponDbo message.
         * @function verify
         * @memberof v2.WeaponDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeaponDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.proficiency != null && message.hasOwnProperty("proficiency"))
                switch (message.proficiency) {
                default:
                    return "proficiency: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.special != null && message.hasOwnProperty("special")) {
                if (!Array.isArray(message.special))
                    return "special: array expected";
                for (var i = 0; i < message.special.length; ++i)
                    switch (message.special[i]) {
                    default:
                        return "special: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        break;
                    }
            }
            if (message.grip != null && message.hasOwnProperty("grip"))
                switch (message.grip) {
                default:
                    return "grip: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a WeaponDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.WeaponDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.WeaponDbo} WeaponDbo
         */
        WeaponDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.WeaponDbo)
                return object;
            var message = new $root.v2.WeaponDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.proficiency) {
            default:
                if (typeof object.proficiency === "number") {
                    message.proficiency = object.proficiency;
                    break;
                }
                break;
            case "WEAPON_PROFICIENCY_OTHER":
            case 0:
                message.proficiency = 0;
                break;
            case "WEAPON_PROFICIENCY_SIMPLE":
            case 1:
                message.proficiency = 1;
                break;
            case "WEAPON_PROFICIENCY_MARTIAL":
            case 2:
                message.proficiency = 2;
                break;
            case "WEAPON_PROFICIENCY_EXOTIC":
            case 3:
                message.proficiency = 3;
                break;
            }
            if (object.special) {
                if (!Array.isArray(object.special))
                    throw TypeError(".v2.WeaponDbo.special: array expected");
                message.special = [];
                for (var i = 0; i < object.special.length; ++i)
                    switch (object.special[i]) {
                    default:
                        if (typeof object.special[i] === "number") {
                            message.special[i] = object.special[i];
                            break;
                        }
                    case "WEAPON_SPECIAL_DISARM":
                    case 0:
                        message.special[i] = 0;
                        break;
                    case "WEAPON_SPECIAL_TRIP":
                    case 1:
                        message.special[i] = 1;
                        break;
                    case "WEAPON_SPECIAL_IMPROVISED":
                    case 2:
                        message.special[i] = 2;
                        break;
                    case "WEAPON_SPECIAL_BLOCKING":
                    case 3:
                        message.special[i] = 3;
                        break;
                    case "WEAPON_SPECIAL_FINESSE":
                    case 4:
                        message.special[i] = 4;
                        break;
                    case "WEAPON_SPECIAL_FRAGILE":
                    case 5:
                        message.special[i] = 5;
                        break;
                    case "WEAPON_SPECIAL_BRACE":
                    case 6:
                        message.special[i] = 6;
                        break;
                    case "WEAPON_SPECIAL_REACH":
                    case 7:
                        message.special[i] = 7;
                        break;
                    case "WEAPON_SPECIAL_PERFORMANCE":
                    case 8:
                        message.special[i] = 8;
                        break;
                    case "WEAPON_SPECIAL_GRAPPLE":
                    case 9:
                        message.special[i] = 9;
                        break;
                    case "WEAPON_SPECIAL_MONK":
                    case 10:
                        message.special[i] = 10;
                        break;
                    case "WEAPON_SPECIAL_SUNDER":
                    case 11:
                        message.special[i] = 11;
                        break;
                    case "WEAPON_SPECIAL_DISTRACTING":
                    case 12:
                        message.special[i] = 12;
                        break;
                    case "WEAPON_SPECIAL_NONLETHAL":
                    case 13:
                        message.special[i] = 13;
                        break;
                    case "WEAPON_SPECIAL_DOUBLE":
                    case 14:
                        message.special[i] = 14;
                        break;
                    case "WEAPON_SPECIAL_ATTACHED":
                    case 15:
                        message.special[i] = 15;
                        break;
                    case "WEAPON_SPECIAL_TOOL":
                    case 16:
                        message.special[i] = 16;
                        break;
                    case "WEAPON_SPECIAL_STRENGTH":
                    case 17:
                        message.special[i] = 17;
                        break;
                    }
            }
            switch (object.grip) {
            default:
                if (typeof object.grip === "number") {
                    message.grip = object.grip;
                    break;
                }
                break;
            case "WEAPON_GRIP_UNARMED":
            case 0:
                message.grip = 0;
                break;
            case "WEAPON_GRIP_LIGHT":
            case 1:
                message.grip = 1;
                break;
            case "WEAPON_GRIP_ONE_HANDED":
            case 2:
                message.grip = 2;
                break;
            case "WEAPON_GRIP_TWO_HANDED":
            case 3:
                message.grip = 3;
                break;
            case "WEAPON_GRIP_RANGED":
            case 4:
                message.grip = 4;
                break;
            case "WEAPON_GRIP_AMMO":
            case 5:
                message.grip = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a WeaponDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.WeaponDbo
         * @static
         * @param {v2.WeaponDbo} message WeaponDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeaponDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.special = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.proficiency = options.enums === String ? "WEAPON_PROFICIENCY_OTHER" : 0;
                object.grip = options.enums === String ? "WEAPON_GRIP_UNARMED" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.proficiency != null && message.hasOwnProperty("proficiency"))
                object.proficiency = options.enums === String ? $root.v2.WeaponProficiencyDbo[message.proficiency] === undefined ? message.proficiency : $root.v2.WeaponProficiencyDbo[message.proficiency] : message.proficiency;
            if (message.special && message.special.length) {
                object.special = [];
                for (var j = 0; j < message.special.length; ++j)
                    object.special[j] = options.enums === String ? $root.v2.WeaponSpecialDbo[message.special[j]] === undefined ? message.special[j] : $root.v2.WeaponSpecialDbo[message.special[j]] : message.special[j];
            }
            if (message.grip != null && message.hasOwnProperty("grip"))
                object.grip = options.enums === String ? $root.v2.WeaponGripDbo[message.grip] === undefined ? message.grip : $root.v2.WeaponGripDbo[message.grip] : message.grip;
            return object;
        };

        /**
         * Converts this WeaponDbo to JSON.
         * @function toJSON
         * @memberof v2.WeaponDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeaponDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WeaponDbo
         * @function getTypeUrl
         * @memberof v2.WeaponDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WeaponDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.WeaponDbo";
        };

        return WeaponDbo;
    })();

    /**
     * WeaponGripDbo enum.
     * @name v2.WeaponGripDbo
     * @enum {number}
     * @property {number} WEAPON_GRIP_UNARMED=0 WEAPON_GRIP_UNARMED value
     * @property {number} WEAPON_GRIP_LIGHT=1 WEAPON_GRIP_LIGHT value
     * @property {number} WEAPON_GRIP_ONE_HANDED=2 WEAPON_GRIP_ONE_HANDED value
     * @property {number} WEAPON_GRIP_TWO_HANDED=3 WEAPON_GRIP_TWO_HANDED value
     * @property {number} WEAPON_GRIP_RANGED=4 WEAPON_GRIP_RANGED value
     * @property {number} WEAPON_GRIP_AMMO=5 WEAPON_GRIP_AMMO value
     */
    v2.WeaponGripDbo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEAPON_GRIP_UNARMED"] = 0;
        values[valuesById[1] = "WEAPON_GRIP_LIGHT"] = 1;
        values[valuesById[2] = "WEAPON_GRIP_ONE_HANDED"] = 2;
        values[valuesById[3] = "WEAPON_GRIP_TWO_HANDED"] = 3;
        values[valuesById[4] = "WEAPON_GRIP_RANGED"] = 4;
        values[valuesById[5] = "WEAPON_GRIP_AMMO"] = 5;
        return values;
    })();

    /**
     * WeaponProficiencyDbo enum.
     * @name v2.WeaponProficiencyDbo
     * @enum {number}
     * @property {number} WEAPON_PROFICIENCY_OTHER=0 WEAPON_PROFICIENCY_OTHER value
     * @property {number} WEAPON_PROFICIENCY_SIMPLE=1 WEAPON_PROFICIENCY_SIMPLE value
     * @property {number} WEAPON_PROFICIENCY_MARTIAL=2 WEAPON_PROFICIENCY_MARTIAL value
     * @property {number} WEAPON_PROFICIENCY_EXOTIC=3 WEAPON_PROFICIENCY_EXOTIC value
     */
    v2.WeaponProficiencyDbo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEAPON_PROFICIENCY_OTHER"] = 0;
        values[valuesById[1] = "WEAPON_PROFICIENCY_SIMPLE"] = 1;
        values[valuesById[2] = "WEAPON_PROFICIENCY_MARTIAL"] = 2;
        values[valuesById[3] = "WEAPON_PROFICIENCY_EXOTIC"] = 3;
        return values;
    })();

    /**
     * WeaponRangeDbo enum.
     * @name v2.WeaponRangeDbo
     * @enum {number}
     * @property {number} WEAPON_RANGE_NONE=0 WEAPON_RANGE_NONE value
     * @property {number} WEAPON_RANGE_MELEE=1 WEAPON_RANGE_MELEE value
     * @property {number} WEAPON_RANGE_REACH=2 WEAPON_RANGE_REACH value
     * @property {number} WEAPON_RANGE_RANGED=3 WEAPON_RANGE_RANGED value
     */
    v2.WeaponRangeDbo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEAPON_RANGE_NONE"] = 0;
        values[valuesById[1] = "WEAPON_RANGE_MELEE"] = 1;
        values[valuesById[2] = "WEAPON_RANGE_REACH"] = 2;
        values[valuesById[3] = "WEAPON_RANGE_RANGED"] = 3;
        return values;
    })();

    /**
     * WeaponSpecialDbo enum.
     * @name v2.WeaponSpecialDbo
     * @enum {number}
     * @property {number} WEAPON_SPECIAL_DISARM=0 WEAPON_SPECIAL_DISARM value
     * @property {number} WEAPON_SPECIAL_TRIP=1 WEAPON_SPECIAL_TRIP value
     * @property {number} WEAPON_SPECIAL_IMPROVISED=2 WEAPON_SPECIAL_IMPROVISED value
     * @property {number} WEAPON_SPECIAL_BLOCKING=3 WEAPON_SPECIAL_BLOCKING value
     * @property {number} WEAPON_SPECIAL_FINESSE=4 WEAPON_SPECIAL_FINESSE value
     * @property {number} WEAPON_SPECIAL_FRAGILE=5 WEAPON_SPECIAL_FRAGILE value
     * @property {number} WEAPON_SPECIAL_BRACE=6 WEAPON_SPECIAL_BRACE value
     * @property {number} WEAPON_SPECIAL_REACH=7 WEAPON_SPECIAL_REACH value
     * @property {number} WEAPON_SPECIAL_PERFORMANCE=8 WEAPON_SPECIAL_PERFORMANCE value
     * @property {number} WEAPON_SPECIAL_GRAPPLE=9 WEAPON_SPECIAL_GRAPPLE value
     * @property {number} WEAPON_SPECIAL_MONK=10 WEAPON_SPECIAL_MONK value
     * @property {number} WEAPON_SPECIAL_SUNDER=11 WEAPON_SPECIAL_SUNDER value
     * @property {number} WEAPON_SPECIAL_DISTRACTING=12 WEAPON_SPECIAL_DISTRACTING value
     * @property {number} WEAPON_SPECIAL_NONLETHAL=13 WEAPON_SPECIAL_NONLETHAL value
     * @property {number} WEAPON_SPECIAL_DOUBLE=14 WEAPON_SPECIAL_DOUBLE value
     * @property {number} WEAPON_SPECIAL_ATTACHED=15 WEAPON_SPECIAL_ATTACHED value
     * @property {number} WEAPON_SPECIAL_TOOL=16 WEAPON_SPECIAL_TOOL value
     * @property {number} WEAPON_SPECIAL_STRENGTH=17 WEAPON_SPECIAL_STRENGTH value
     */
    v2.WeaponSpecialDbo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEAPON_SPECIAL_DISARM"] = 0;
        values[valuesById[1] = "WEAPON_SPECIAL_TRIP"] = 1;
        values[valuesById[2] = "WEAPON_SPECIAL_IMPROVISED"] = 2;
        values[valuesById[3] = "WEAPON_SPECIAL_BLOCKING"] = 3;
        values[valuesById[4] = "WEAPON_SPECIAL_FINESSE"] = 4;
        values[valuesById[5] = "WEAPON_SPECIAL_FRAGILE"] = 5;
        values[valuesById[6] = "WEAPON_SPECIAL_BRACE"] = 6;
        values[valuesById[7] = "WEAPON_SPECIAL_REACH"] = 7;
        values[valuesById[8] = "WEAPON_SPECIAL_PERFORMANCE"] = 8;
        values[valuesById[9] = "WEAPON_SPECIAL_GRAPPLE"] = 9;
        values[valuesById[10] = "WEAPON_SPECIAL_MONK"] = 10;
        values[valuesById[11] = "WEAPON_SPECIAL_SUNDER"] = 11;
        values[valuesById[12] = "WEAPON_SPECIAL_DISTRACTING"] = 12;
        values[valuesById[13] = "WEAPON_SPECIAL_NONLETHAL"] = 13;
        values[valuesById[14] = "WEAPON_SPECIAL_DOUBLE"] = 14;
        values[valuesById[15] = "WEAPON_SPECIAL_ATTACHED"] = 15;
        values[valuesById[16] = "WEAPON_SPECIAL_TOOL"] = 16;
        values[valuesById[17] = "WEAPON_SPECIAL_STRENGTH"] = 17;
        return values;
    })();

    v2.FeatDatabaseDbo = (function() {

        /**
         * Properties of a FeatDatabaseDbo.
         * @memberof v2
         * @interface IFeatDatabaseDbo
         * @property {Array.<v2.FeatSummaryDbo>|null} [featSummaries] FeatDatabaseDbo featSummaries
         */

        /**
         * Constructs a new FeatDatabaseDbo.
         * @memberof v2
         * @classdesc Represents a FeatDatabaseDbo.
         * @implements IFeatDatabaseDbo
         * @constructor
         * @param {v2.IFeatDatabaseDbo=} [properties] Properties to set
         */
        function FeatDatabaseDbo(properties) {
            this.featSummaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatDatabaseDbo featSummaries.
         * @member {Array.<v2.FeatSummaryDbo>} featSummaries
         * @memberof v2.FeatDatabaseDbo
         * @instance
         */
        FeatDatabaseDbo.prototype.featSummaries = $util.emptyArray;

        /**
         * Creates a new FeatDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {v2.IFeatDatabaseDbo=} [properties] Properties to set
         * @returns {v2.FeatDatabaseDbo} FeatDatabaseDbo instance
         */
        FeatDatabaseDbo.create = function create(properties) {
            return new FeatDatabaseDbo(properties);
        };

        /**
         * Encodes the specified FeatDatabaseDbo message. Does not implicitly {@link v2.FeatDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {v2.FeatDatabaseDbo} message FeatDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.featSummaries != null && message.featSummaries.length)
                for (var i = 0; i < message.featSummaries.length; ++i)
                    $root.v2.FeatSummaryDbo.encode(message.featSummaries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeatDatabaseDbo message, length delimited. Does not implicitly {@link v2.FeatDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {v2.FeatDatabaseDbo} message FeatDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.FeatDatabaseDbo} FeatDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.FeatDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.featSummaries && message.featSummaries.length))
                            message.featSummaries = [];
                        message.featSummaries.push($root.v2.FeatSummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes a FeatDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.FeatDatabaseDbo} FeatDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatDatabaseDbo message.
         * @function verify
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.featSummaries != null && message.hasOwnProperty("featSummaries")) {
                if (!Array.isArray(message.featSummaries))
                    return "featSummaries: array expected";
                for (var i = 0; i < message.featSummaries.length; ++i) {
                    var error = $root.v2.FeatSummaryDbo.verify(message.featSummaries[i]);
                    if (error)
                        return "featSummaries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FeatDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.FeatDatabaseDbo} FeatDatabaseDbo
         */
        FeatDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.FeatDatabaseDbo)
                return object;
            var message = new $root.v2.FeatDatabaseDbo();
            if (object.featSummaries) {
                if (!Array.isArray(object.featSummaries))
                    throw TypeError(".v2.FeatDatabaseDbo.featSummaries: array expected");
                message.featSummaries = [];
                for (var i = 0; i < object.featSummaries.length; ++i) {
                    if (typeof object.featSummaries[i] !== "object")
                        throw TypeError(".v2.FeatDatabaseDbo.featSummaries: object expected");
                    message.featSummaries[i] = $root.v2.FeatSummaryDbo.fromObject(object.featSummaries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FeatDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {v2.FeatDatabaseDbo} message FeatDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.featSummaries = [];
            if (message.featSummaries && message.featSummaries.length) {
                object.featSummaries = [];
                for (var j = 0; j < message.featSummaries.length; ++j)
                    object.featSummaries[j] = $root.v2.FeatSummaryDbo.toObject(message.featSummaries[j], options);
            }
            return object;
        };

        /**
         * Converts this FeatDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v2.FeatDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatDatabaseDbo
         * @function getTypeUrl
         * @memberof v2.FeatDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.FeatDatabaseDbo";
        };

        return FeatDatabaseDbo;
    })();

    v2.FeatSummaryDbo = (function() {

        /**
         * Properties of a FeatSummaryDbo.
         * @memberof v2
         * @interface IFeatSummaryDbo
         * @property {string|null} [id] FeatSummaryDbo id
         * @property {string|null} [name] FeatSummaryDbo name
         * @property {Array.<v2.FeatTypeDbo>|null} [types] FeatSummaryDbo types
         * @property {string|null} [prerequisites] FeatSummaryDbo prerequisites
         * @property {string|null} [prerequisitesFormula] FeatSummaryDbo prerequisitesFormula
         * @property {boolean|null} [teamwork] FeatSummaryDbo teamwork
         * @property {Array.<v2.FeatOptionDbo>|null} [options] FeatSummaryDbo options
         */

        /**
         * Constructs a new FeatSummaryDbo.
         * @memberof v2
         * @classdesc Represents a FeatSummaryDbo.
         * @implements IFeatSummaryDbo
         * @constructor
         * @param {v2.IFeatSummaryDbo=} [properties] Properties to set
         */
        function FeatSummaryDbo(properties) {
            this.types = [];
            this.options = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatSummaryDbo id.
         * @member {string} id
         * @memberof v2.FeatSummaryDbo
         * @instance
         */
        FeatSummaryDbo.prototype.id = "";

        /**
         * FeatSummaryDbo name.
         * @member {string} name
         * @memberof v2.FeatSummaryDbo
         * @instance
         */
        FeatSummaryDbo.prototype.name = "";

        /**
         * FeatSummaryDbo types.
         * @member {Array.<v2.FeatTypeDbo>} types
         * @memberof v2.FeatSummaryDbo
         * @instance
         */
        FeatSummaryDbo.prototype.types = $util.emptyArray;

        /**
         * FeatSummaryDbo prerequisites.
         * @member {string} prerequisites
         * @memberof v2.FeatSummaryDbo
         * @instance
         */
        FeatSummaryDbo.prototype.prerequisites = "";

        /**
         * FeatSummaryDbo prerequisitesFormula.
         * @member {string} prerequisitesFormula
         * @memberof v2.FeatSummaryDbo
         * @instance
         */
        FeatSummaryDbo.prototype.prerequisitesFormula = "";

        /**
         * FeatSummaryDbo teamwork.
         * @member {boolean} teamwork
         * @memberof v2.FeatSummaryDbo
         * @instance
         */
        FeatSummaryDbo.prototype.teamwork = false;

        /**
         * FeatSummaryDbo options.
         * @member {Array.<v2.FeatOptionDbo>} options
         * @memberof v2.FeatSummaryDbo
         * @instance
         */
        FeatSummaryDbo.prototype.options = $util.emptyArray;

        /**
         * Creates a new FeatSummaryDbo instance using the specified properties.
         * @function create
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {v2.IFeatSummaryDbo=} [properties] Properties to set
         * @returns {v2.FeatSummaryDbo} FeatSummaryDbo instance
         */
        FeatSummaryDbo.create = function create(properties) {
            return new FeatSummaryDbo(properties);
        };

        /**
         * Encodes the specified FeatSummaryDbo message. Does not implicitly {@link v2.FeatSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {v2.FeatSummaryDbo} message FeatSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.types != null && message.types.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.types.length; ++i)
                    writer.int32(message.types[i]);
                writer.ldelim();
            }
            if (message.prerequisites != null && Object.hasOwnProperty.call(message, "prerequisites"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.prerequisites);
            if (message.prerequisitesFormula != null && Object.hasOwnProperty.call(message, "prerequisitesFormula"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.prerequisitesFormula);
            if (message.teamwork != null && Object.hasOwnProperty.call(message, "teamwork"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.teamwork);
            if (message.options != null && message.options.length)
                for (var i = 0; i < message.options.length; ++i)
                    $root.v2.FeatOptionDbo.encode(message.options[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeatSummaryDbo message, length delimited. Does not implicitly {@link v2.FeatSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {v2.FeatSummaryDbo} message FeatSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.FeatSummaryDbo} FeatSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.FeatSummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        if (!(message.types && message.types.length))
                            message.types = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.types.push(reader.int32());
                        } else
                            message.types.push(reader.int32());
                        break;
                    }
                case 4: {
                        message.prerequisites = reader.string();
                        break;
                    }
                case 5: {
                        message.prerequisitesFormula = reader.string();
                        break;
                    }
                case 6: {
                        message.teamwork = reader.bool();
                        break;
                    }
                case 7: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.v2.FeatOptionDbo.decode(reader, reader.uint32()));
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
         * Decodes a FeatSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.FeatSummaryDbo} FeatSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatSummaryDbo message.
         * @function verify
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.types != null && message.hasOwnProperty("types")) {
                if (!Array.isArray(message.types))
                    return "types: array expected";
                for (var i = 0; i < message.types.length; ++i)
                    switch (message.types[i]) {
                    default:
                        return "types: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        break;
                    }
            }
            if (message.prerequisites != null && message.hasOwnProperty("prerequisites"))
                if (!$util.isString(message.prerequisites))
                    return "prerequisites: string expected";
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                if (!$util.isString(message.prerequisitesFormula))
                    return "prerequisitesFormula: string expected";
            if (message.teamwork != null && message.hasOwnProperty("teamwork"))
                if (typeof message.teamwork !== "boolean")
                    return "teamwork: boolean expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (var i = 0; i < message.options.length; ++i) {
                    var error = $root.v2.FeatOptionDbo.verify(message.options[i]);
                    if (error)
                        return "options." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FeatSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.FeatSummaryDbo} FeatSummaryDbo
         */
        FeatSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.FeatSummaryDbo)
                return object;
            var message = new $root.v2.FeatSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.types) {
                if (!Array.isArray(object.types))
                    throw TypeError(".v2.FeatSummaryDbo.types: array expected");
                message.types = [];
                for (var i = 0; i < object.types.length; ++i)
                    switch (object.types[i]) {
                    default:
                        if (typeof object.types[i] === "number") {
                            message.types[i] = object.types[i];
                            break;
                        }
                    case "FEAT_TYPE_GENERAL":
                    case 0:
                        message.types[i] = 0;
                        break;
                    case "FEAT_TYPE_COMBAT":
                    case 1:
                        message.types[i] = 1;
                        break;
                    case "FEAT_TYPE_CRITICAL":
                    case 2:
                        message.types[i] = 2;
                        break;
                    case "FEAT_TYPE_ITEM_CREATION":
                    case 3:
                        message.types[i] = 3;
                        break;
                    case "FEAT_TYPE_METAMAGIC":
                    case 4:
                        message.types[i] = 4;
                        break;
                    case "FEAT_TYPE_ACHIEVEMENT":
                    case 5:
                        message.types[i] = 5;
                        break;
                    case "FEAT_TYPE_BLOODHEX":
                    case 6:
                        message.types[i] = 6;
                        break;
                    case "FEAT_TYPE_FACTION":
                    case 7:
                        message.types[i] = 7;
                        break;
                    case "FEAT_TYPE_GRIT":
                    case 8:
                        message.types[i] = 8;
                        break;
                    case "FEAT_TYPE_PANACHE":
                    case 9:
                        message.types[i] = 9;
                        break;
                    case "FEAT_TYPE_MYTHIC":
                    case 10:
                        message.types[i] = 10;
                        break;
                    case "FEAT_TYPE_TEAMWORK":
                    case 11:
                        message.types[i] = 11;
                        break;
                    case "FEAT_TYPE_MONSTER":
                    case 12:
                        message.types[i] = 12;
                        break;
                    }
            }
            if (object.prerequisites != null)
                message.prerequisites = String(object.prerequisites);
            if (object.prerequisitesFormula != null)
                message.prerequisitesFormula = String(object.prerequisitesFormula);
            if (object.teamwork != null)
                message.teamwork = Boolean(object.teamwork);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".v2.FeatSummaryDbo.options: array expected");
                message.options = [];
                for (var i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".v2.FeatSummaryDbo.options: object expected");
                    message.options[i] = $root.v2.FeatOptionDbo.fromObject(object.options[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FeatSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {v2.FeatSummaryDbo} message FeatSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.types = [];
                object.options = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.prerequisites = "";
                object.prerequisitesFormula = "";
                object.teamwork = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.types && message.types.length) {
                object.types = [];
                for (var j = 0; j < message.types.length; ++j)
                    object.types[j] = options.enums === String ? $root.v2.FeatTypeDbo[message.types[j]] === undefined ? message.types[j] : $root.v2.FeatTypeDbo[message.types[j]] : message.types[j];
            }
            if (message.prerequisites != null && message.hasOwnProperty("prerequisites"))
                object.prerequisites = message.prerequisites;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
            if (message.teamwork != null && message.hasOwnProperty("teamwork"))
                object.teamwork = message.teamwork;
            if (message.options && message.options.length) {
                object.options = [];
                for (var j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.v2.FeatOptionDbo.toObject(message.options[j], options);
            }
            return object;
        };

        /**
         * Converts this FeatSummaryDbo to JSON.
         * @function toJSON
         * @memberof v2.FeatSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatSummaryDbo
         * @function getTypeUrl
         * @memberof v2.FeatSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.FeatSummaryDbo";
        };

        return FeatSummaryDbo;
    })();

    v2.FeatOptionDbo = (function() {

        /**
         * Properties of a FeatOptionDbo.
         * @memberof v2
         * @interface IFeatOptionDbo
         * @property {string|null} [id] FeatOptionDbo id
         * @property {string|null} [name] FeatOptionDbo name
         * @property {string|null} [prerequisitesFormula] FeatOptionDbo prerequisitesFormula
         */

        /**
         * Constructs a new FeatOptionDbo.
         * @memberof v2
         * @classdesc Represents a FeatOptionDbo.
         * @implements IFeatOptionDbo
         * @constructor
         * @param {v2.IFeatOptionDbo=} [properties] Properties to set
         */
        function FeatOptionDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatOptionDbo id.
         * @member {string} id
         * @memberof v2.FeatOptionDbo
         * @instance
         */
        FeatOptionDbo.prototype.id = "";

        /**
         * FeatOptionDbo name.
         * @member {string} name
         * @memberof v2.FeatOptionDbo
         * @instance
         */
        FeatOptionDbo.prototype.name = "";

        /**
         * FeatOptionDbo prerequisitesFormula.
         * @member {string} prerequisitesFormula
         * @memberof v2.FeatOptionDbo
         * @instance
         */
        FeatOptionDbo.prototype.prerequisitesFormula = "";

        /**
         * Creates a new FeatOptionDbo instance using the specified properties.
         * @function create
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {v2.IFeatOptionDbo=} [properties] Properties to set
         * @returns {v2.FeatOptionDbo} FeatOptionDbo instance
         */
        FeatOptionDbo.create = function create(properties) {
            return new FeatOptionDbo(properties);
        };

        /**
         * Encodes the specified FeatOptionDbo message. Does not implicitly {@link v2.FeatOptionDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {v2.FeatOptionDbo} message FeatOptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatOptionDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.prerequisitesFormula != null && Object.hasOwnProperty.call(message, "prerequisitesFormula"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.prerequisitesFormula);
            return writer;
        };

        /**
         * Encodes the specified FeatOptionDbo message, length delimited. Does not implicitly {@link v2.FeatOptionDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {v2.FeatOptionDbo} message FeatOptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatOptionDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatOptionDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.FeatOptionDbo} FeatOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatOptionDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.FeatOptionDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.prerequisitesFormula = reader.string();
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
         * Decodes a FeatOptionDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.FeatOptionDbo} FeatOptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatOptionDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatOptionDbo message.
         * @function verify
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatOptionDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                if (!$util.isString(message.prerequisitesFormula))
                    return "prerequisitesFormula: string expected";
            return null;
        };

        /**
         * Creates a FeatOptionDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.FeatOptionDbo} FeatOptionDbo
         */
        FeatOptionDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.FeatOptionDbo)
                return object;
            var message = new $root.v2.FeatOptionDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.prerequisitesFormula != null)
                message.prerequisitesFormula = String(object.prerequisitesFormula);
            return message;
        };

        /**
         * Creates a plain object from a FeatOptionDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {v2.FeatOptionDbo} message FeatOptionDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatOptionDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.prerequisitesFormula = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
            return object;
        };

        /**
         * Converts this FeatOptionDbo to JSON.
         * @function toJSON
         * @memberof v2.FeatOptionDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatOptionDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatOptionDbo
         * @function getTypeUrl
         * @memberof v2.FeatOptionDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatOptionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.FeatOptionDbo";
        };

        return FeatOptionDbo;
    })();

    /**
     * FeatTypeDbo enum.
     * @name v2.FeatTypeDbo
     * @enum {number}
     * @property {number} FEAT_TYPE_GENERAL=0 FEAT_TYPE_GENERAL value
     * @property {number} FEAT_TYPE_COMBAT=1 FEAT_TYPE_COMBAT value
     * @property {number} FEAT_TYPE_CRITICAL=2 FEAT_TYPE_CRITICAL value
     * @property {number} FEAT_TYPE_ITEM_CREATION=3 FEAT_TYPE_ITEM_CREATION value
     * @property {number} FEAT_TYPE_METAMAGIC=4 FEAT_TYPE_METAMAGIC value
     * @property {number} FEAT_TYPE_ACHIEVEMENT=5 FEAT_TYPE_ACHIEVEMENT value
     * @property {number} FEAT_TYPE_BLOODHEX=6 FEAT_TYPE_BLOODHEX value
     * @property {number} FEAT_TYPE_FACTION=7 FEAT_TYPE_FACTION value
     * @property {number} FEAT_TYPE_GRIT=8 FEAT_TYPE_GRIT value
     * @property {number} FEAT_TYPE_PANACHE=9 FEAT_TYPE_PANACHE value
     * @property {number} FEAT_TYPE_MYTHIC=10 FEAT_TYPE_MYTHIC value
     * @property {number} FEAT_TYPE_TEAMWORK=11 FEAT_TYPE_TEAMWORK value
     * @property {number} FEAT_TYPE_MONSTER=12 FEAT_TYPE_MONSTER value
     */
    v2.FeatTypeDbo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FEAT_TYPE_GENERAL"] = 0;
        values[valuesById[1] = "FEAT_TYPE_COMBAT"] = 1;
        values[valuesById[2] = "FEAT_TYPE_CRITICAL"] = 2;
        values[valuesById[3] = "FEAT_TYPE_ITEM_CREATION"] = 3;
        values[valuesById[4] = "FEAT_TYPE_METAMAGIC"] = 4;
        values[valuesById[5] = "FEAT_TYPE_ACHIEVEMENT"] = 5;
        values[valuesById[6] = "FEAT_TYPE_BLOODHEX"] = 6;
        values[valuesById[7] = "FEAT_TYPE_FACTION"] = 7;
        values[valuesById[8] = "FEAT_TYPE_GRIT"] = 8;
        values[valuesById[9] = "FEAT_TYPE_PANACHE"] = 9;
        values[valuesById[10] = "FEAT_TYPE_MYTHIC"] = 10;
        values[valuesById[11] = "FEAT_TYPE_TEAMWORK"] = 11;
        values[valuesById[12] = "FEAT_TYPE_MONSTER"] = 12;
        return values;
    })();

    v2.FeatDbo = (function() {

        /**
         * Properties of a FeatDbo.
         * @memberof v2
         * @interface IFeatDbo
         * @property {string|null} [id] FeatDbo id
         * @property {string|null} [name] FeatDbo name
         * @property {Array.<v2.FeatTypeDbo>|null} [types] FeatDbo types
         * @property {string|null} [description] FeatDbo description
         * @property {string|null} [prerequisites] FeatDbo prerequisites
         * @property {string|null} [prerequisitesFormula] FeatDbo prerequisitesFormula
         * @property {string|null} [benefit] FeatDbo benefit
         * @property {string|null} [normal] FeatDbo normal
         * @property {string|null} [special] FeatDbo special
         * @property {string|null} [source] FeatDbo source
         * @property {boolean|null} [teamwork] FeatDbo teamwork
         * @property {string|null} [note] FeatDbo note
         * @property {Array.<v2.FeatOptionDbo>|null} [options] FeatDbo options
         * @property {Array.<v2.CharacterEffectDbo>|null} [effects] FeatDbo effects
         */

        /**
         * Constructs a new FeatDbo.
         * @memberof v2
         * @classdesc Represents a FeatDbo.
         * @implements IFeatDbo
         * @constructor
         * @param {v2.IFeatDbo=} [properties] Properties to set
         */
        function FeatDbo(properties) {
            this.types = [];
            this.options = [];
            this.effects = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatDbo id.
         * @member {string} id
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.id = "";

        /**
         * FeatDbo name.
         * @member {string} name
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.name = "";

        /**
         * FeatDbo types.
         * @member {Array.<v2.FeatTypeDbo>} types
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.types = $util.emptyArray;

        /**
         * FeatDbo description.
         * @member {string} description
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.description = "";

        /**
         * FeatDbo prerequisites.
         * @member {string} prerequisites
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.prerequisites = "";

        /**
         * FeatDbo prerequisitesFormula.
         * @member {string} prerequisitesFormula
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.prerequisitesFormula = "";

        /**
         * FeatDbo benefit.
         * @member {string} benefit
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.benefit = "";

        /**
         * FeatDbo normal.
         * @member {string} normal
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.normal = "";

        /**
         * FeatDbo special.
         * @member {string} special
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.special = "";

        /**
         * FeatDbo source.
         * @member {string} source
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.source = "";

        /**
         * FeatDbo teamwork.
         * @member {boolean} teamwork
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.teamwork = false;

        /**
         * FeatDbo note.
         * @member {string} note
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.note = "";

        /**
         * FeatDbo options.
         * @member {Array.<v2.FeatOptionDbo>} options
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.options = $util.emptyArray;

        /**
         * FeatDbo effects.
         * @member {Array.<v2.CharacterEffectDbo>} effects
         * @memberof v2.FeatDbo
         * @instance
         */
        FeatDbo.prototype.effects = $util.emptyArray;

        /**
         * Creates a new FeatDbo instance using the specified properties.
         * @function create
         * @memberof v2.FeatDbo
         * @static
         * @param {v2.IFeatDbo=} [properties] Properties to set
         * @returns {v2.FeatDbo} FeatDbo instance
         */
        FeatDbo.create = function create(properties) {
            return new FeatDbo(properties);
        };

        /**
         * Encodes the specified FeatDbo message. Does not implicitly {@link v2.FeatDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.FeatDbo
         * @static
         * @param {v2.FeatDbo} message FeatDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.types != null && message.types.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.types.length; ++i)
                    writer.int32(message.types[i]);
                writer.ldelim();
            }
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.prerequisites != null && Object.hasOwnProperty.call(message, "prerequisites"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.prerequisites);
            if (message.prerequisitesFormula != null && Object.hasOwnProperty.call(message, "prerequisitesFormula"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.prerequisitesFormula);
            if (message.benefit != null && Object.hasOwnProperty.call(message, "benefit"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.benefit);
            if (message.normal != null && Object.hasOwnProperty.call(message, "normal"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.normal);
            if (message.special != null && Object.hasOwnProperty.call(message, "special"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.special);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.source);
            if (message.teamwork != null && Object.hasOwnProperty.call(message, "teamwork"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.teamwork);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.note);
            if (message.options != null && message.options.length)
                for (var i = 0; i < message.options.length; ++i)
                    $root.v2.FeatOptionDbo.encode(message.options[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.effects != null && message.effects.length)
                for (var i = 0; i < message.effects.length; ++i)
                    $root.v2.CharacterEffectDbo.encode(message.effects[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeatDbo message, length delimited. Does not implicitly {@link v2.FeatDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.FeatDbo
         * @static
         * @param {v2.FeatDbo} message FeatDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeatDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.FeatDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.FeatDbo} FeatDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.FeatDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        if (!(message.types && message.types.length))
                            message.types = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.types.push(reader.int32());
                        } else
                            message.types.push(reader.int32());
                        break;
                    }
                case 4: {
                        message.description = reader.string();
                        break;
                    }
                case 5: {
                        message.prerequisites = reader.string();
                        break;
                    }
                case 6: {
                        message.prerequisitesFormula = reader.string();
                        break;
                    }
                case 7: {
                        message.benefit = reader.string();
                        break;
                    }
                case 8: {
                        message.normal = reader.string();
                        break;
                    }
                case 9: {
                        message.special = reader.string();
                        break;
                    }
                case 10: {
                        message.source = reader.string();
                        break;
                    }
                case 11: {
                        message.teamwork = reader.bool();
                        break;
                    }
                case 12: {
                        message.note = reader.string();
                        break;
                    }
                case 13: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.v2.FeatOptionDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 14: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.v2.CharacterEffectDbo.decode(reader, reader.uint32()));
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
         * Decodes a FeatDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.FeatDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.FeatDbo} FeatDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeatDbo message.
         * @function verify
         * @memberof v2.FeatDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.types != null && message.hasOwnProperty("types")) {
                if (!Array.isArray(message.types))
                    return "types: array expected";
                for (var i = 0; i < message.types.length; ++i)
                    switch (message.types[i]) {
                    default:
                        return "types: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        break;
                    }
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.prerequisites != null && message.hasOwnProperty("prerequisites"))
                if (!$util.isString(message.prerequisites))
                    return "prerequisites: string expected";
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                if (!$util.isString(message.prerequisitesFormula))
                    return "prerequisitesFormula: string expected";
            if (message.benefit != null && message.hasOwnProperty("benefit"))
                if (!$util.isString(message.benefit))
                    return "benefit: string expected";
            if (message.normal != null && message.hasOwnProperty("normal"))
                if (!$util.isString(message.normal))
                    return "normal: string expected";
            if (message.special != null && message.hasOwnProperty("special"))
                if (!$util.isString(message.special))
                    return "special: string expected";
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isString(message.source))
                    return "source: string expected";
            if (message.teamwork != null && message.hasOwnProperty("teamwork"))
                if (typeof message.teamwork !== "boolean")
                    return "teamwork: boolean expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (var i = 0; i < message.options.length; ++i) {
                    var error = $root.v2.FeatOptionDbo.verify(message.options[i]);
                    if (error)
                        return "options." + error;
                }
            }
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (var i = 0; i < message.effects.length; ++i) {
                    var error = $root.v2.CharacterEffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FeatDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.FeatDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.FeatDbo} FeatDbo
         */
        FeatDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.FeatDbo)
                return object;
            var message = new $root.v2.FeatDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.types) {
                if (!Array.isArray(object.types))
                    throw TypeError(".v2.FeatDbo.types: array expected");
                message.types = [];
                for (var i = 0; i < object.types.length; ++i)
                    switch (object.types[i]) {
                    default:
                        if (typeof object.types[i] === "number") {
                            message.types[i] = object.types[i];
                            break;
                        }
                    case "FEAT_TYPE_GENERAL":
                    case 0:
                        message.types[i] = 0;
                        break;
                    case "FEAT_TYPE_COMBAT":
                    case 1:
                        message.types[i] = 1;
                        break;
                    case "FEAT_TYPE_CRITICAL":
                    case 2:
                        message.types[i] = 2;
                        break;
                    case "FEAT_TYPE_ITEM_CREATION":
                    case 3:
                        message.types[i] = 3;
                        break;
                    case "FEAT_TYPE_METAMAGIC":
                    case 4:
                        message.types[i] = 4;
                        break;
                    case "FEAT_TYPE_ACHIEVEMENT":
                    case 5:
                        message.types[i] = 5;
                        break;
                    case "FEAT_TYPE_BLOODHEX":
                    case 6:
                        message.types[i] = 6;
                        break;
                    case "FEAT_TYPE_FACTION":
                    case 7:
                        message.types[i] = 7;
                        break;
                    case "FEAT_TYPE_GRIT":
                    case 8:
                        message.types[i] = 8;
                        break;
                    case "FEAT_TYPE_PANACHE":
                    case 9:
                        message.types[i] = 9;
                        break;
                    case "FEAT_TYPE_MYTHIC":
                    case 10:
                        message.types[i] = 10;
                        break;
                    case "FEAT_TYPE_TEAMWORK":
                    case 11:
                        message.types[i] = 11;
                        break;
                    case "FEAT_TYPE_MONSTER":
                    case 12:
                        message.types[i] = 12;
                        break;
                    }
            }
            if (object.description != null)
                message.description = String(object.description);
            if (object.prerequisites != null)
                message.prerequisites = String(object.prerequisites);
            if (object.prerequisitesFormula != null)
                message.prerequisitesFormula = String(object.prerequisitesFormula);
            if (object.benefit != null)
                message.benefit = String(object.benefit);
            if (object.normal != null)
                message.normal = String(object.normal);
            if (object.special != null)
                message.special = String(object.special);
            if (object.source != null)
                message.source = String(object.source);
            if (object.teamwork != null)
                message.teamwork = Boolean(object.teamwork);
            if (object.note != null)
                message.note = String(object.note);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".v2.FeatDbo.options: array expected");
                message.options = [];
                for (var i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".v2.FeatDbo.options: object expected");
                    message.options[i] = $root.v2.FeatOptionDbo.fromObject(object.options[i]);
                }
            }
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".v2.FeatDbo.effects: array expected");
                message.effects = [];
                for (var i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".v2.FeatDbo.effects: object expected");
                    message.effects[i] = $root.v2.CharacterEffectDbo.fromObject(object.effects[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FeatDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.FeatDbo
         * @static
         * @param {v2.FeatDbo} message FeatDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeatDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.types = [];
                object.options = [];
                object.effects = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.description = "";
                object.prerequisites = "";
                object.prerequisitesFormula = "";
                object.benefit = "";
                object.normal = "";
                object.special = "";
                object.source = "";
                object.teamwork = false;
                object.note = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.types && message.types.length) {
                object.types = [];
                for (var j = 0; j < message.types.length; ++j)
                    object.types[j] = options.enums === String ? $root.v2.FeatTypeDbo[message.types[j]] === undefined ? message.types[j] : $root.v2.FeatTypeDbo[message.types[j]] : message.types[j];
            }
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.prerequisites != null && message.hasOwnProperty("prerequisites"))
                object.prerequisites = message.prerequisites;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
            if (message.benefit != null && message.hasOwnProperty("benefit"))
                object.benefit = message.benefit;
            if (message.normal != null && message.hasOwnProperty("normal"))
                object.normal = message.normal;
            if (message.special != null && message.hasOwnProperty("special"))
                object.special = message.special;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.teamwork != null && message.hasOwnProperty("teamwork"))
                object.teamwork = message.teamwork;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.options && message.options.length) {
                object.options = [];
                for (var j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.v2.FeatOptionDbo.toObject(message.options[j], options);
            }
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (var j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.v2.CharacterEffectDbo.toObject(message.effects[j], options);
            }
            return object;
        };

        /**
         * Converts this FeatDbo to JSON.
         * @function toJSON
         * @memberof v2.FeatDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeatDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeatDbo
         * @function getTypeUrl
         * @memberof v2.FeatDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeatDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.FeatDbo";
        };

        return FeatDbo;
    })();

    return v2;
})();

$root.v3 = (function() {

    /**
     * Namespace v3.
     * @exports v3
     * @namespace
     */
    var v3 = {};

    v3.ModificationDatabaseDbo = (function() {

        /**
         * Properties of a ModificationDatabaseDbo.
         * @memberof v3
         * @interface IModificationDatabaseDbo
         * @property {string|null} [databaseId] ModificationDatabaseDbo databaseId
         * @property {Array.<v3.ModificationSummaryDbo>|null} [summaries] ModificationDatabaseDbo summaries
         * @property {Array.<v3.CategoryDbo>|null} [categories] ModificationDatabaseDbo categories
         */

        /**
         * Constructs a new ModificationDatabaseDbo.
         * @memberof v3
         * @classdesc Represents a ModificationDatabaseDbo.
         * @implements IModificationDatabaseDbo
         * @constructor
         * @param {v3.IModificationDatabaseDbo=} [properties] Properties to set
         */
        function ModificationDatabaseDbo(properties) {
            this.summaries = [];
            this.categories = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModificationDatabaseDbo databaseId.
         * @member {string} databaseId
         * @memberof v3.ModificationDatabaseDbo
         * @instance
         */
        ModificationDatabaseDbo.prototype.databaseId = "";

        /**
         * ModificationDatabaseDbo summaries.
         * @member {Array.<v3.ModificationSummaryDbo>} summaries
         * @memberof v3.ModificationDatabaseDbo
         * @instance
         */
        ModificationDatabaseDbo.prototype.summaries = $util.emptyArray;

        /**
         * ModificationDatabaseDbo categories.
         * @member {Array.<v3.CategoryDbo>} categories
         * @memberof v3.ModificationDatabaseDbo
         * @instance
         */
        ModificationDatabaseDbo.prototype.categories = $util.emptyArray;

        /**
         * Creates a new ModificationDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {v3.IModificationDatabaseDbo=} [properties] Properties to set
         * @returns {v3.ModificationDatabaseDbo} ModificationDatabaseDbo instance
         */
        ModificationDatabaseDbo.create = function create(properties) {
            return new ModificationDatabaseDbo(properties);
        };

        /**
         * Encodes the specified ModificationDatabaseDbo message. Does not implicitly {@link v3.ModificationDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {v3.ModificationDatabaseDbo} message ModificationDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModificationDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.databaseId != null && Object.hasOwnProperty.call(message, "databaseId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.databaseId);
            if (message.summaries != null && message.summaries.length)
                for (var i = 0; i < message.summaries.length; ++i)
                    $root.v3.ModificationSummaryDbo.encode(message.summaries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.categories != null && message.categories.length)
                for (var i = 0; i < message.categories.length; ++i)
                    $root.v3.CategoryDbo.encode(message.categories[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ModificationDatabaseDbo message, length delimited. Does not implicitly {@link v3.ModificationDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {v3.ModificationDatabaseDbo} message ModificationDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModificationDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModificationDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v3.ModificationDatabaseDbo} ModificationDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModificationDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.ModificationDatabaseDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.databaseId = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.summaries && message.summaries.length))
                            message.summaries = [];
                        message.summaries.push($root.v3.ModificationSummaryDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.categories && message.categories.length))
                            message.categories = [];
                        message.categories.push($root.v3.CategoryDbo.decode(reader, reader.uint32()));
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
         * Decodes a ModificationDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v3.ModificationDatabaseDbo} ModificationDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModificationDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModificationDatabaseDbo message.
         * @function verify
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModificationDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                if (!$util.isString(message.databaseId))
                    return "databaseId: string expected";
            if (message.summaries != null && message.hasOwnProperty("summaries")) {
                if (!Array.isArray(message.summaries))
                    return "summaries: array expected";
                for (var i = 0; i < message.summaries.length; ++i) {
                    var error = $root.v3.ModificationSummaryDbo.verify(message.summaries[i]);
                    if (error)
                        return "summaries." + error;
                }
            }
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (var i = 0; i < message.categories.length; ++i) {
                    var error = $root.v3.CategoryDbo.verify(message.categories[i]);
                    if (error)
                        return "categories." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ModificationDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v3.ModificationDatabaseDbo} ModificationDatabaseDbo
         */
        ModificationDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v3.ModificationDatabaseDbo)
                return object;
            var message = new $root.v3.ModificationDatabaseDbo();
            if (object.databaseId != null)
                message.databaseId = String(object.databaseId);
            if (object.summaries) {
                if (!Array.isArray(object.summaries))
                    throw TypeError(".v3.ModificationDatabaseDbo.summaries: array expected");
                message.summaries = [];
                for (var i = 0; i < object.summaries.length; ++i) {
                    if (typeof object.summaries[i] !== "object")
                        throw TypeError(".v3.ModificationDatabaseDbo.summaries: object expected");
                    message.summaries[i] = $root.v3.ModificationSummaryDbo.fromObject(object.summaries[i]);
                }
            }
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".v3.ModificationDatabaseDbo.categories: array expected");
                message.categories = [];
                for (var i = 0; i < object.categories.length; ++i) {
                    if (typeof object.categories[i] !== "object")
                        throw TypeError(".v3.ModificationDatabaseDbo.categories: object expected");
                    message.categories[i] = $root.v3.CategoryDbo.fromObject(object.categories[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ModificationDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {v3.ModificationDatabaseDbo} message ModificationDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModificationDatabaseDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.summaries = [];
                object.categories = [];
            }
            if (options.defaults)
                object.databaseId = "";
            if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                object.databaseId = message.databaseId;
            if (message.summaries && message.summaries.length) {
                object.summaries = [];
                for (var j = 0; j < message.summaries.length; ++j)
                    object.summaries[j] = $root.v3.ModificationSummaryDbo.toObject(message.summaries[j], options);
            }
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (var j = 0; j < message.categories.length; ++j)
                    object.categories[j] = $root.v3.CategoryDbo.toObject(message.categories[j], options);
            }
            return object;
        };

        /**
         * Converts this ModificationDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v3.ModificationDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModificationDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModificationDatabaseDbo
         * @function getTypeUrl
         * @memberof v3.ModificationDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModificationDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v3.ModificationDatabaseDbo";
        };

        return ModificationDatabaseDbo;
    })();

    v3.CategoryDbo = (function() {

        /**
         * Properties of a CategoryDbo.
         * @memberof v3
         * @interface ICategoryDbo
         * @property {number|null} [id] CategoryDbo id
         * @property {string|null} [name] CategoryDbo name
         */

        /**
         * Constructs a new CategoryDbo.
         * @memberof v3
         * @classdesc Represents a CategoryDbo.
         * @implements ICategoryDbo
         * @constructor
         * @param {v3.ICategoryDbo=} [properties] Properties to set
         */
        function CategoryDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CategoryDbo id.
         * @member {number} id
         * @memberof v3.CategoryDbo
         * @instance
         */
        CategoryDbo.prototype.id = 0;

        /**
         * CategoryDbo name.
         * @member {string} name
         * @memberof v3.CategoryDbo
         * @instance
         */
        CategoryDbo.prototype.name = "";

        /**
         * Creates a new CategoryDbo instance using the specified properties.
         * @function create
         * @memberof v3.CategoryDbo
         * @static
         * @param {v3.ICategoryDbo=} [properties] Properties to set
         * @returns {v3.CategoryDbo} CategoryDbo instance
         */
        CategoryDbo.create = function create(properties) {
            return new CategoryDbo(properties);
        };

        /**
         * Encodes the specified CategoryDbo message. Does not implicitly {@link v3.CategoryDbo.verify|verify} messages.
         * @function encode
         * @memberof v3.CategoryDbo
         * @static
         * @param {v3.CategoryDbo} message CategoryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CategoryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified CategoryDbo message, length delimited. Does not implicitly {@link v3.CategoryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v3.CategoryDbo
         * @static
         * @param {v3.CategoryDbo} message CategoryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CategoryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CategoryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v3.CategoryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v3.CategoryDbo} CategoryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CategoryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.CategoryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
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
         * Decodes a CategoryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v3.CategoryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v3.CategoryDbo} CategoryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CategoryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CategoryDbo message.
         * @function verify
         * @memberof v3.CategoryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CategoryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a CategoryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v3.CategoryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v3.CategoryDbo} CategoryDbo
         */
        CategoryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v3.CategoryDbo)
                return object;
            var message = new $root.v3.CategoryDbo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CategoryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v3.CategoryDbo
         * @static
         * @param {v3.CategoryDbo} message CategoryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CategoryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CategoryDbo to JSON.
         * @function toJSON
         * @memberof v3.CategoryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CategoryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CategoryDbo
         * @function getTypeUrl
         * @memberof v3.CategoryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CategoryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v3.CategoryDbo";
        };

        return CategoryDbo;
    })();

    v3.ModificationSummaryDbo = (function() {

        /**
         * Properties of a ModificationSummaryDbo.
         * @memberof v3
         * @interface IModificationSummaryDbo
         * @property {string|null} [id] ModificationSummaryDbo id
         * @property {string|null} [name] ModificationSummaryDbo name
         * @property {string|null} [prerequisiteFormula] ModificationSummaryDbo prerequisiteFormula
         * @property {Array.<v3.ModificationSummaryDbo>|null} [children] ModificationSummaryDbo children
         * @property {string|null} [type] ModificationSummaryDbo type
         * @property {number|null} [categoryId] ModificationSummaryDbo categoryId
         */

        /**
         * Constructs a new ModificationSummaryDbo.
         * @memberof v3
         * @classdesc Represents a ModificationSummaryDbo.
         * @implements IModificationSummaryDbo
         * @constructor
         * @param {v3.IModificationSummaryDbo=} [properties] Properties to set
         */
        function ModificationSummaryDbo(properties) {
            this.children = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModificationSummaryDbo id.
         * @member {string} id
         * @memberof v3.ModificationSummaryDbo
         * @instance
         */
        ModificationSummaryDbo.prototype.id = "";

        /**
         * ModificationSummaryDbo name.
         * @member {string} name
         * @memberof v3.ModificationSummaryDbo
         * @instance
         */
        ModificationSummaryDbo.prototype.name = "";

        /**
         * ModificationSummaryDbo prerequisiteFormula.
         * @member {string} prerequisiteFormula
         * @memberof v3.ModificationSummaryDbo
         * @instance
         */
        ModificationSummaryDbo.prototype.prerequisiteFormula = "";

        /**
         * ModificationSummaryDbo children.
         * @member {Array.<v3.ModificationSummaryDbo>} children
         * @memberof v3.ModificationSummaryDbo
         * @instance
         */
        ModificationSummaryDbo.prototype.children = $util.emptyArray;

        /**
         * ModificationSummaryDbo type.
         * @member {string} type
         * @memberof v3.ModificationSummaryDbo
         * @instance
         */
        ModificationSummaryDbo.prototype.type = "";

        /**
         * ModificationSummaryDbo categoryId.
         * @member {number} categoryId
         * @memberof v3.ModificationSummaryDbo
         * @instance
         */
        ModificationSummaryDbo.prototype.categoryId = 0;

        /**
         * Creates a new ModificationSummaryDbo instance using the specified properties.
         * @function create
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {v3.IModificationSummaryDbo=} [properties] Properties to set
         * @returns {v3.ModificationSummaryDbo} ModificationSummaryDbo instance
         */
        ModificationSummaryDbo.create = function create(properties) {
            return new ModificationSummaryDbo(properties);
        };

        /**
         * Encodes the specified ModificationSummaryDbo message. Does not implicitly {@link v3.ModificationSummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {v3.ModificationSummaryDbo} message ModificationSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModificationSummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.prerequisiteFormula != null && Object.hasOwnProperty.call(message, "prerequisiteFormula"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.prerequisiteFormula);
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.v3.ModificationSummaryDbo.encode(message.children[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
            if (message.categoryId != null && Object.hasOwnProperty.call(message, "categoryId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.categoryId);
            return writer;
        };

        /**
         * Encodes the specified ModificationSummaryDbo message, length delimited. Does not implicitly {@link v3.ModificationSummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {v3.ModificationSummaryDbo} message ModificationSummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModificationSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModificationSummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v3.ModificationSummaryDbo} ModificationSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModificationSummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.ModificationSummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.prerequisiteFormula = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.v3.ModificationSummaryDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.type = reader.string();
                        break;
                    }
                case 6: {
                        message.categoryId = reader.int32();
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
         * Decodes a ModificationSummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v3.ModificationSummaryDbo} ModificationSummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModificationSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModificationSummaryDbo message.
         * @function verify
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModificationSummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                if (!$util.isString(message.prerequisiteFormula))
                    return "prerequisiteFormula: string expected";
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.v3.ModificationSummaryDbo.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.categoryId != null && message.hasOwnProperty("categoryId"))
                if (!$util.isInteger(message.categoryId))
                    return "categoryId: integer expected";
            return null;
        };

        /**
         * Creates a ModificationSummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v3.ModificationSummaryDbo} ModificationSummaryDbo
         */
        ModificationSummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v3.ModificationSummaryDbo)
                return object;
            var message = new $root.v3.ModificationSummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.prerequisiteFormula != null)
                message.prerequisiteFormula = String(object.prerequisiteFormula);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".v3.ModificationSummaryDbo.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".v3.ModificationSummaryDbo.children: object expected");
                    message.children[i] = $root.v3.ModificationSummaryDbo.fromObject(object.children[i]);
                }
            }
            if (object.type != null)
                message.type = String(object.type);
            if (object.categoryId != null)
                message.categoryId = object.categoryId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ModificationSummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {v3.ModificationSummaryDbo} message ModificationSummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModificationSummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.prerequisiteFormula = "";
                object.type = "";
                object.categoryId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                object.prerequisiteFormula = message.prerequisiteFormula;
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.v3.ModificationSummaryDbo.toObject(message.children[j], options);
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.categoryId != null && message.hasOwnProperty("categoryId"))
                object.categoryId = message.categoryId;
            return object;
        };

        /**
         * Converts this ModificationSummaryDbo to JSON.
         * @function toJSON
         * @memberof v3.ModificationSummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModificationSummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModificationSummaryDbo
         * @function getTypeUrl
         * @memberof v3.ModificationSummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModificationSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v3.ModificationSummaryDbo";
        };

        return ModificationSummaryDbo;
    })();

    v3.ModificationDetailsDbo = (function() {

        /**
         * Properties of a ModificationDetailsDbo.
         * @memberof v3
         * @interface IModificationDetailsDbo
         * @property {string|null} [id] ModificationDetailsDbo id
         * @property {string|null} [name] ModificationDetailsDbo name
         * @property {string|null} [prerequisiteFormula] ModificationDetailsDbo prerequisiteFormula
         * @property {Array.<v3.ModificationDetailsDbo>|null} [children] ModificationDetailsDbo children
         * @property {string|null} [type] ModificationDetailsDbo type
         * @property {number|null} [categoryId] ModificationDetailsDbo categoryId
         * @property {string|null} [descriptionText] ModificationDetailsDbo descriptionText
         * @property {Array.<v3.EffectDbo>|null} [effects] ModificationDetailsDbo effects
         * @property {string|null} [benefitText] ModificationDetailsDbo benefitText
         * @property {string|null} [normalText] ModificationDetailsDbo normalText
         * @property {string|null} [specialText] ModificationDetailsDbo specialText
         * @property {string|null} [noteText] ModificationDetailsDbo noteText
         */

        /**
         * Constructs a new ModificationDetailsDbo.
         * @memberof v3
         * @classdesc Represents a ModificationDetailsDbo.
         * @implements IModificationDetailsDbo
         * @constructor
         * @param {v3.IModificationDetailsDbo=} [properties] Properties to set
         */
        function ModificationDetailsDbo(properties) {
            this.children = [];
            this.effects = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModificationDetailsDbo id.
         * @member {string} id
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.id = "";

        /**
         * ModificationDetailsDbo name.
         * @member {string} name
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.name = "";

        /**
         * ModificationDetailsDbo prerequisiteFormula.
         * @member {string} prerequisiteFormula
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.prerequisiteFormula = "";

        /**
         * ModificationDetailsDbo children.
         * @member {Array.<v3.ModificationDetailsDbo>} children
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.children = $util.emptyArray;

        /**
         * ModificationDetailsDbo type.
         * @member {string} type
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.type = "";

        /**
         * ModificationDetailsDbo categoryId.
         * @member {number} categoryId
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.categoryId = 0;

        /**
         * ModificationDetailsDbo descriptionText.
         * @member {string} descriptionText
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.descriptionText = "";

        /**
         * ModificationDetailsDbo effects.
         * @member {Array.<v3.EffectDbo>} effects
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.effects = $util.emptyArray;

        /**
         * ModificationDetailsDbo benefitText.
         * @member {string} benefitText
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.benefitText = "";

        /**
         * ModificationDetailsDbo normalText.
         * @member {string} normalText
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.normalText = "";

        /**
         * ModificationDetailsDbo specialText.
         * @member {string} specialText
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.specialText = "";

        /**
         * ModificationDetailsDbo noteText.
         * @member {string} noteText
         * @memberof v3.ModificationDetailsDbo
         * @instance
         */
        ModificationDetailsDbo.prototype.noteText = "";

        /**
         * Creates a new ModificationDetailsDbo instance using the specified properties.
         * @function create
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {v3.IModificationDetailsDbo=} [properties] Properties to set
         * @returns {v3.ModificationDetailsDbo} ModificationDetailsDbo instance
         */
        ModificationDetailsDbo.create = function create(properties) {
            return new ModificationDetailsDbo(properties);
        };

        /**
         * Encodes the specified ModificationDetailsDbo message. Does not implicitly {@link v3.ModificationDetailsDbo.verify|verify} messages.
         * @function encode
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {v3.ModificationDetailsDbo} message ModificationDetailsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModificationDetailsDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.prerequisiteFormula != null && Object.hasOwnProperty.call(message, "prerequisiteFormula"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.prerequisiteFormula);
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.v3.ModificationDetailsDbo.encode(message.children[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
            if (message.categoryId != null && Object.hasOwnProperty.call(message, "categoryId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.categoryId);
            if (message.descriptionText != null && Object.hasOwnProperty.call(message, "descriptionText"))
                writer.uint32(/* id 100, wireType 2 =*/802).string(message.descriptionText);
            if (message.effects != null && message.effects.length)
                for (var i = 0; i < message.effects.length; ++i)
                    $root.v3.EffectDbo.encode(message.effects[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.benefitText != null && Object.hasOwnProperty.call(message, "benefitText"))
                writer.uint32(/* id 102, wireType 2 =*/818).string(message.benefitText);
            if (message.normalText != null && Object.hasOwnProperty.call(message, "normalText"))
                writer.uint32(/* id 103, wireType 2 =*/826).string(message.normalText);
            if (message.specialText != null && Object.hasOwnProperty.call(message, "specialText"))
                writer.uint32(/* id 104, wireType 2 =*/834).string(message.specialText);
            if (message.noteText != null && Object.hasOwnProperty.call(message, "noteText"))
                writer.uint32(/* id 105, wireType 2 =*/842).string(message.noteText);
            return writer;
        };

        /**
         * Encodes the specified ModificationDetailsDbo message, length delimited. Does not implicitly {@link v3.ModificationDetailsDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {v3.ModificationDetailsDbo} message ModificationDetailsDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModificationDetailsDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModificationDetailsDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v3.ModificationDetailsDbo} ModificationDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModificationDetailsDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.ModificationDetailsDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.prerequisiteFormula = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.v3.ModificationDetailsDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.type = reader.string();
                        break;
                    }
                case 6: {
                        message.categoryId = reader.int32();
                        break;
                    }
                case 100: {
                        message.descriptionText = reader.string();
                        break;
                    }
                case 101: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.v3.EffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 102: {
                        message.benefitText = reader.string();
                        break;
                    }
                case 103: {
                        message.normalText = reader.string();
                        break;
                    }
                case 104: {
                        message.specialText = reader.string();
                        break;
                    }
                case 105: {
                        message.noteText = reader.string();
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
         * Decodes a ModificationDetailsDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v3.ModificationDetailsDbo} ModificationDetailsDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModificationDetailsDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModificationDetailsDbo message.
         * @function verify
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModificationDetailsDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                if (!$util.isString(message.prerequisiteFormula))
                    return "prerequisiteFormula: string expected";
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.v3.ModificationDetailsDbo.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.categoryId != null && message.hasOwnProperty("categoryId"))
                if (!$util.isInteger(message.categoryId))
                    return "categoryId: integer expected";
            if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                if (!$util.isString(message.descriptionText))
                    return "descriptionText: string expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (var i = 0; i < message.effects.length; ++i) {
                    var error = $root.v3.EffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.benefitText != null && message.hasOwnProperty("benefitText"))
                if (!$util.isString(message.benefitText))
                    return "benefitText: string expected";
            if (message.normalText != null && message.hasOwnProperty("normalText"))
                if (!$util.isString(message.normalText))
                    return "normalText: string expected";
            if (message.specialText != null && message.hasOwnProperty("specialText"))
                if (!$util.isString(message.specialText))
                    return "specialText: string expected";
            if (message.noteText != null && message.hasOwnProperty("noteText"))
                if (!$util.isString(message.noteText))
                    return "noteText: string expected";
            return null;
        };

        /**
         * Creates a ModificationDetailsDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v3.ModificationDetailsDbo} ModificationDetailsDbo
         */
        ModificationDetailsDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v3.ModificationDetailsDbo)
                return object;
            var message = new $root.v3.ModificationDetailsDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.prerequisiteFormula != null)
                message.prerequisiteFormula = String(object.prerequisiteFormula);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".v3.ModificationDetailsDbo.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".v3.ModificationDetailsDbo.children: object expected");
                    message.children[i] = $root.v3.ModificationDetailsDbo.fromObject(object.children[i]);
                }
            }
            if (object.type != null)
                message.type = String(object.type);
            if (object.categoryId != null)
                message.categoryId = object.categoryId | 0;
            if (object.descriptionText != null)
                message.descriptionText = String(object.descriptionText);
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".v3.ModificationDetailsDbo.effects: array expected");
                message.effects = [];
                for (var i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".v3.ModificationDetailsDbo.effects: object expected");
                    message.effects[i] = $root.v3.EffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.benefitText != null)
                message.benefitText = String(object.benefitText);
            if (object.normalText != null)
                message.normalText = String(object.normalText);
            if (object.specialText != null)
                message.specialText = String(object.specialText);
            if (object.noteText != null)
                message.noteText = String(object.noteText);
            return message;
        };

        /**
         * Creates a plain object from a ModificationDetailsDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {v3.ModificationDetailsDbo} message ModificationDetailsDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModificationDetailsDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.children = [];
                object.effects = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.prerequisiteFormula = "";
                object.type = "";
                object.categoryId = 0;
                object.descriptionText = "";
                object.benefitText = "";
                object.normalText = "";
                object.specialText = "";
                object.noteText = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                object.prerequisiteFormula = message.prerequisiteFormula;
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.v3.ModificationDetailsDbo.toObject(message.children[j], options);
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.categoryId != null && message.hasOwnProperty("categoryId"))
                object.categoryId = message.categoryId;
            if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                object.descriptionText = message.descriptionText;
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (var j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.v3.EffectDbo.toObject(message.effects[j], options);
            }
            if (message.benefitText != null && message.hasOwnProperty("benefitText"))
                object.benefitText = message.benefitText;
            if (message.normalText != null && message.hasOwnProperty("normalText"))
                object.normalText = message.normalText;
            if (message.specialText != null && message.hasOwnProperty("specialText"))
                object.specialText = message.specialText;
            if (message.noteText != null && message.hasOwnProperty("noteText"))
                object.noteText = message.noteText;
            return object;
        };

        /**
         * Converts this ModificationDetailsDbo to JSON.
         * @function toJSON
         * @memberof v3.ModificationDetailsDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModificationDetailsDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModificationDetailsDbo
         * @function getTypeUrl
         * @memberof v3.ModificationDetailsDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModificationDetailsDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v3.ModificationDetailsDbo";
        };

        return ModificationDetailsDbo;
    })();

    v3.EffectDbo = (function() {

        /**
         * Properties of an EffectDbo.
         * @memberof v3
         * @interface IEffectDbo
         * @property {v3.EffectDbo.SetStateEffectDbo|null} [setState] EffectDbo setState
         * @property {v3.EffectDbo.AdjustStateEffectDbo|null} [adjustState] EffectDbo adjustState
         * @property {v3.EffectDbo.TextChoiceDbo|null} [textChoice] EffectDbo textChoice
         * @property {v3.EffectDbo.SelectChoiceDbo|null} [selectChoice] EffectDbo selectChoice
         * @property {v3.EffectDbo.AddChoicesToTypeEffectDbo|null} [addChoicesToType] EffectDbo addChoicesToType
         */

        /**
         * Constructs a new EffectDbo.
         * @memberof v3
         * @classdesc Represents an EffectDbo.
         * @implements IEffectDbo
         * @constructor
         * @param {v3.IEffectDbo=} [properties] Properties to set
         */
        function EffectDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EffectDbo setState.
         * @member {v3.EffectDbo.SetStateEffectDbo|null|undefined} setState
         * @memberof v3.EffectDbo
         * @instance
         */
        EffectDbo.prototype.setState = null;

        /**
         * EffectDbo adjustState.
         * @member {v3.EffectDbo.AdjustStateEffectDbo|null|undefined} adjustState
         * @memberof v3.EffectDbo
         * @instance
         */
        EffectDbo.prototype.adjustState = null;

        /**
         * EffectDbo textChoice.
         * @member {v3.EffectDbo.TextChoiceDbo|null|undefined} textChoice
         * @memberof v3.EffectDbo
         * @instance
         */
        EffectDbo.prototype.textChoice = null;

        /**
         * EffectDbo selectChoice.
         * @member {v3.EffectDbo.SelectChoiceDbo|null|undefined} selectChoice
         * @memberof v3.EffectDbo
         * @instance
         */
        EffectDbo.prototype.selectChoice = null;

        /**
         * EffectDbo addChoicesToType.
         * @member {v3.EffectDbo.AddChoicesToTypeEffectDbo|null|undefined} addChoicesToType
         * @memberof v3.EffectDbo
         * @instance
         */
        EffectDbo.prototype.addChoicesToType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * EffectDbo effect.
         * @member {"setState"|"adjustState"|"textChoice"|"selectChoice"|"addChoicesToType"|undefined} effect
         * @memberof v3.EffectDbo
         * @instance
         */
        Object.defineProperty(EffectDbo.prototype, "effect", {
            get: $util.oneOfGetter($oneOfFields = ["setState", "adjustState", "textChoice", "selectChoice", "addChoicesToType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EffectDbo instance using the specified properties.
         * @function create
         * @memberof v3.EffectDbo
         * @static
         * @param {v3.IEffectDbo=} [properties] Properties to set
         * @returns {v3.EffectDbo} EffectDbo instance
         */
        EffectDbo.create = function create(properties) {
            return new EffectDbo(properties);
        };

        /**
         * Encodes the specified EffectDbo message. Does not implicitly {@link v3.EffectDbo.verify|verify} messages.
         * @function encode
         * @memberof v3.EffectDbo
         * @static
         * @param {v3.EffectDbo} message EffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EffectDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.setState != null && Object.hasOwnProperty.call(message, "setState"))
                $root.v3.EffectDbo.SetStateEffectDbo.encode(message.setState, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.adjustState != null && Object.hasOwnProperty.call(message, "adjustState"))
                $root.v3.EffectDbo.AdjustStateEffectDbo.encode(message.adjustState, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.textChoice != null && Object.hasOwnProperty.call(message, "textChoice"))
                $root.v3.EffectDbo.TextChoiceDbo.encode(message.textChoice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.selectChoice != null && Object.hasOwnProperty.call(message, "selectChoice"))
                $root.v3.EffectDbo.SelectChoiceDbo.encode(message.selectChoice, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.addChoicesToType != null && Object.hasOwnProperty.call(message, "addChoicesToType"))
                $root.v3.EffectDbo.AddChoicesToTypeEffectDbo.encode(message.addChoicesToType, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EffectDbo message, length delimited. Does not implicitly {@link v3.EffectDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v3.EffectDbo
         * @static
         * @param {v3.EffectDbo} message EffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EffectDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v3.EffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v3.EffectDbo} EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EffectDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.EffectDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.setState = $root.v3.EffectDbo.SetStateEffectDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.adjustState = $root.v3.EffectDbo.AdjustStateEffectDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.textChoice = $root.v3.EffectDbo.TextChoiceDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.selectChoice = $root.v3.EffectDbo.SelectChoiceDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.addChoicesToType = $root.v3.EffectDbo.AddChoicesToTypeEffectDbo.decode(reader, reader.uint32());
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
         * @memberof v3.EffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v3.EffectDbo} EffectDbo
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
         * @memberof v3.EffectDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EffectDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.setState != null && message.hasOwnProperty("setState")) {
                properties.effect = 1;
                {
                    var error = $root.v3.EffectDbo.SetStateEffectDbo.verify(message.setState);
                    if (error)
                        return "setState." + error;
                }
            }
            if (message.adjustState != null && message.hasOwnProperty("adjustState")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v3.EffectDbo.AdjustStateEffectDbo.verify(message.adjustState);
                    if (error)
                        return "adjustState." + error;
                }
            }
            if (message.textChoice != null && message.hasOwnProperty("textChoice")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v3.EffectDbo.TextChoiceDbo.verify(message.textChoice);
                    if (error)
                        return "textChoice." + error;
                }
            }
            if (message.selectChoice != null && message.hasOwnProperty("selectChoice")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v3.EffectDbo.SelectChoiceDbo.verify(message.selectChoice);
                    if (error)
                        return "selectChoice." + error;
                }
            }
            if (message.addChoicesToType != null && message.hasOwnProperty("addChoicesToType")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    var error = $root.v3.EffectDbo.AddChoicesToTypeEffectDbo.verify(message.addChoicesToType);
                    if (error)
                        return "addChoicesToType." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EffectDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v3.EffectDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v3.EffectDbo} EffectDbo
         */
        EffectDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v3.EffectDbo)
                return object;
            var message = new $root.v3.EffectDbo();
            if (object.setState != null) {
                if (typeof object.setState !== "object")
                    throw TypeError(".v3.EffectDbo.setState: object expected");
                message.setState = $root.v3.EffectDbo.SetStateEffectDbo.fromObject(object.setState);
            }
            if (object.adjustState != null) {
                if (typeof object.adjustState !== "object")
                    throw TypeError(".v3.EffectDbo.adjustState: object expected");
                message.adjustState = $root.v3.EffectDbo.AdjustStateEffectDbo.fromObject(object.adjustState);
            }
            if (object.textChoice != null) {
                if (typeof object.textChoice !== "object")
                    throw TypeError(".v3.EffectDbo.textChoice: object expected");
                message.textChoice = $root.v3.EffectDbo.TextChoiceDbo.fromObject(object.textChoice);
            }
            if (object.selectChoice != null) {
                if (typeof object.selectChoice !== "object")
                    throw TypeError(".v3.EffectDbo.selectChoice: object expected");
                message.selectChoice = $root.v3.EffectDbo.SelectChoiceDbo.fromObject(object.selectChoice);
            }
            if (object.addChoicesToType != null) {
                if (typeof object.addChoicesToType !== "object")
                    throw TypeError(".v3.EffectDbo.addChoicesToType: object expected");
                message.addChoicesToType = $root.v3.EffectDbo.AddChoicesToTypeEffectDbo.fromObject(object.addChoicesToType);
            }
            return message;
        };

        /**
         * Creates a plain object from an EffectDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v3.EffectDbo
         * @static
         * @param {v3.EffectDbo} message EffectDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EffectDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.setState != null && message.hasOwnProperty("setState")) {
                object.setState = $root.v3.EffectDbo.SetStateEffectDbo.toObject(message.setState, options);
                if (options.oneofs)
                    object.effect = "setState";
            }
            if (message.adjustState != null && message.hasOwnProperty("adjustState")) {
                object.adjustState = $root.v3.EffectDbo.AdjustStateEffectDbo.toObject(message.adjustState, options);
                if (options.oneofs)
                    object.effect = "adjustState";
            }
            if (message.textChoice != null && message.hasOwnProperty("textChoice")) {
                object.textChoice = $root.v3.EffectDbo.TextChoiceDbo.toObject(message.textChoice, options);
                if (options.oneofs)
                    object.effect = "textChoice";
            }
            if (message.selectChoice != null && message.hasOwnProperty("selectChoice")) {
                object.selectChoice = $root.v3.EffectDbo.SelectChoiceDbo.toObject(message.selectChoice, options);
                if (options.oneofs)
                    object.effect = "selectChoice";
            }
            if (message.addChoicesToType != null && message.hasOwnProperty("addChoicesToType")) {
                object.addChoicesToType = $root.v3.EffectDbo.AddChoicesToTypeEffectDbo.toObject(message.addChoicesToType, options);
                if (options.oneofs)
                    object.effect = "addChoicesToType";
            }
            return object;
        };

        /**
         * Converts this EffectDbo to JSON.
         * @function toJSON
         * @memberof v3.EffectDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EffectDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EffectDbo
         * @function getTypeUrl
         * @memberof v3.EffectDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v3.EffectDbo";
        };

        EffectDbo.SetStateEffectDbo = (function() {

            /**
             * Properties of a SetStateEffectDbo.
             * @memberof v3.EffectDbo
             * @interface ISetStateEffectDbo
             * @property {number|null} [level] SetStateEffectDbo level
             * @property {string|null} [key] SetStateEffectDbo key
             * @property {number|null} [numericValue] SetStateEffectDbo numericValue
             * @property {string|null} [textValue] SetStateEffectDbo textValue
             * @property {boolean|null} [booleanValue] SetStateEffectDbo booleanValue
             */

            /**
             * Constructs a new SetStateEffectDbo.
             * @memberof v3.EffectDbo
             * @classdesc Represents a SetStateEffectDbo.
             * @implements ISetStateEffectDbo
             * @constructor
             * @param {v3.EffectDbo.ISetStateEffectDbo=} [properties] Properties to set
             */
            function SetStateEffectDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetStateEffectDbo level.
             * @member {number} level
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @instance
             */
            SetStateEffectDbo.prototype.level = 0;

            /**
             * SetStateEffectDbo key.
             * @member {string} key
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @instance
             */
            SetStateEffectDbo.prototype.key = "";

            /**
             * SetStateEffectDbo numericValue.
             * @member {number|null|undefined} numericValue
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @instance
             */
            SetStateEffectDbo.prototype.numericValue = null;

            /**
             * SetStateEffectDbo textValue.
             * @member {string|null|undefined} textValue
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @instance
             */
            SetStateEffectDbo.prototype.textValue = null;

            /**
             * SetStateEffectDbo booleanValue.
             * @member {boolean|null|undefined} booleanValue
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @instance
             */
            SetStateEffectDbo.prototype.booleanValue = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * SetStateEffectDbo value.
             * @member {"numericValue"|"textValue"|"booleanValue"|undefined} value
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @instance
             */
            Object.defineProperty(SetStateEffectDbo.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["numericValue", "textValue", "booleanValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SetStateEffectDbo instance using the specified properties.
             * @function create
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {v3.EffectDbo.ISetStateEffectDbo=} [properties] Properties to set
             * @returns {v3.EffectDbo.SetStateEffectDbo} SetStateEffectDbo instance
             */
            SetStateEffectDbo.create = function create(properties) {
                return new SetStateEffectDbo(properties);
            };

            /**
             * Encodes the specified SetStateEffectDbo message. Does not implicitly {@link v3.EffectDbo.SetStateEffectDbo.verify|verify} messages.
             * @function encode
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {v3.EffectDbo.SetStateEffectDbo} message SetStateEffectDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetStateEffectDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
                if (message.numericValue != null && Object.hasOwnProperty.call(message, "numericValue"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.numericValue);
                if (message.textValue != null && Object.hasOwnProperty.call(message, "textValue"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.textValue);
                if (message.booleanValue != null && Object.hasOwnProperty.call(message, "booleanValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.booleanValue);
                return writer;
            };

            /**
             * Encodes the specified SetStateEffectDbo message, length delimited. Does not implicitly {@link v3.EffectDbo.SetStateEffectDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {v3.EffectDbo.SetStateEffectDbo} message SetStateEffectDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetStateEffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetStateEffectDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v3.EffectDbo.SetStateEffectDbo} SetStateEffectDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetStateEffectDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.EffectDbo.SetStateEffectDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.key = reader.string();
                            break;
                        }
                    case 3: {
                            message.numericValue = reader.int32();
                            break;
                        }
                    case 4: {
                            message.textValue = reader.string();
                            break;
                        }
                    case 5: {
                            message.booleanValue = reader.bool();
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
             * Decodes a SetStateEffectDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v3.EffectDbo.SetStateEffectDbo} SetStateEffectDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetStateEffectDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetStateEffectDbo message.
             * @function verify
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetStateEffectDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.numericValue != null && message.hasOwnProperty("numericValue")) {
                    properties.value = 1;
                    if (!$util.isInteger(message.numericValue))
                        return "numericValue: integer expected";
                }
                if (message.textValue != null && message.hasOwnProperty("textValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isString(message.textValue))
                        return "textValue: string expected";
                }
                if (message.booleanValue != null && message.hasOwnProperty("booleanValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.booleanValue !== "boolean")
                        return "booleanValue: boolean expected";
                }
                return null;
            };

            /**
             * Creates a SetStateEffectDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v3.EffectDbo.SetStateEffectDbo} SetStateEffectDbo
             */
            SetStateEffectDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v3.EffectDbo.SetStateEffectDbo)
                    return object;
                var message = new $root.v3.EffectDbo.SetStateEffectDbo();
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.key != null)
                    message.key = String(object.key);
                if (object.numericValue != null)
                    message.numericValue = object.numericValue | 0;
                if (object.textValue != null)
                    message.textValue = String(object.textValue);
                if (object.booleanValue != null)
                    message.booleanValue = Boolean(object.booleanValue);
                return message;
            };

            /**
             * Creates a plain object from a SetStateEffectDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {v3.EffectDbo.SetStateEffectDbo} message SetStateEffectDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetStateEffectDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.level = 0;
                    object.key = "";
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.numericValue != null && message.hasOwnProperty("numericValue")) {
                    object.numericValue = message.numericValue;
                    if (options.oneofs)
                        object.value = "numericValue";
                }
                if (message.textValue != null && message.hasOwnProperty("textValue")) {
                    object.textValue = message.textValue;
                    if (options.oneofs)
                        object.value = "textValue";
                }
                if (message.booleanValue != null && message.hasOwnProperty("booleanValue")) {
                    object.booleanValue = message.booleanValue;
                    if (options.oneofs)
                        object.value = "booleanValue";
                }
                return object;
            };

            /**
             * Converts this SetStateEffectDbo to JSON.
             * @function toJSON
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetStateEffectDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetStateEffectDbo
             * @function getTypeUrl
             * @memberof v3.EffectDbo.SetStateEffectDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetStateEffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v3.EffectDbo.SetStateEffectDbo";
            };

            return SetStateEffectDbo;
        })();

        EffectDbo.AdjustStateEffectDbo = (function() {

            /**
             * Properties of an AdjustStateEffectDbo.
             * @memberof v3.EffectDbo
             * @interface IAdjustStateEffectDbo
             * @property {number|null} [level] AdjustStateEffectDbo level
             * @property {string|null} [key] AdjustStateEffectDbo key
             * @property {number|null} [delta] AdjustStateEffectDbo delta
             */

            /**
             * Constructs a new AdjustStateEffectDbo.
             * @memberof v3.EffectDbo
             * @classdesc Represents an AdjustStateEffectDbo.
             * @implements IAdjustStateEffectDbo
             * @constructor
             * @param {v3.EffectDbo.IAdjustStateEffectDbo=} [properties] Properties to set
             */
            function AdjustStateEffectDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AdjustStateEffectDbo level.
             * @member {number} level
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @instance
             */
            AdjustStateEffectDbo.prototype.level = 0;

            /**
             * AdjustStateEffectDbo key.
             * @member {string} key
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @instance
             */
            AdjustStateEffectDbo.prototype.key = "";

            /**
             * AdjustStateEffectDbo delta.
             * @member {number} delta
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @instance
             */
            AdjustStateEffectDbo.prototype.delta = 0;

            /**
             * Creates a new AdjustStateEffectDbo instance using the specified properties.
             * @function create
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {v3.EffectDbo.IAdjustStateEffectDbo=} [properties] Properties to set
             * @returns {v3.EffectDbo.AdjustStateEffectDbo} AdjustStateEffectDbo instance
             */
            AdjustStateEffectDbo.create = function create(properties) {
                return new AdjustStateEffectDbo(properties);
            };

            /**
             * Encodes the specified AdjustStateEffectDbo message. Does not implicitly {@link v3.EffectDbo.AdjustStateEffectDbo.verify|verify} messages.
             * @function encode
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {v3.EffectDbo.AdjustStateEffectDbo} message AdjustStateEffectDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AdjustStateEffectDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
                if (message.delta != null && Object.hasOwnProperty.call(message, "delta"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.delta);
                return writer;
            };

            /**
             * Encodes the specified AdjustStateEffectDbo message, length delimited. Does not implicitly {@link v3.EffectDbo.AdjustStateEffectDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {v3.EffectDbo.AdjustStateEffectDbo} message AdjustStateEffectDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AdjustStateEffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AdjustStateEffectDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v3.EffectDbo.AdjustStateEffectDbo} AdjustStateEffectDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AdjustStateEffectDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.EffectDbo.AdjustStateEffectDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.key = reader.string();
                            break;
                        }
                    case 3: {
                            message.delta = reader.int32();
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
             * Decodes an AdjustStateEffectDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v3.EffectDbo.AdjustStateEffectDbo} AdjustStateEffectDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AdjustStateEffectDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AdjustStateEffectDbo message.
             * @function verify
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AdjustStateEffectDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.delta != null && message.hasOwnProperty("delta"))
                    if (!$util.isInteger(message.delta))
                        return "delta: integer expected";
                return null;
            };

            /**
             * Creates an AdjustStateEffectDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v3.EffectDbo.AdjustStateEffectDbo} AdjustStateEffectDbo
             */
            AdjustStateEffectDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v3.EffectDbo.AdjustStateEffectDbo)
                    return object;
                var message = new $root.v3.EffectDbo.AdjustStateEffectDbo();
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.key != null)
                    message.key = String(object.key);
                if (object.delta != null)
                    message.delta = object.delta | 0;
                return message;
            };

            /**
             * Creates a plain object from an AdjustStateEffectDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {v3.EffectDbo.AdjustStateEffectDbo} message AdjustStateEffectDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AdjustStateEffectDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.level = 0;
                    object.key = "";
                    object.delta = 0;
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.delta != null && message.hasOwnProperty("delta"))
                    object.delta = message.delta;
                return object;
            };

            /**
             * Converts this AdjustStateEffectDbo to JSON.
             * @function toJSON
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AdjustStateEffectDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AdjustStateEffectDbo
             * @function getTypeUrl
             * @memberof v3.EffectDbo.AdjustStateEffectDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AdjustStateEffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v3.EffectDbo.AdjustStateEffectDbo";
            };

            return AdjustStateEffectDbo;
        })();

        EffectDbo.AddChoicesToTypeEffectDbo = (function() {

            /**
             * Properties of an AddChoicesToTypeEffectDbo.
             * @memberof v3.EffectDbo
             * @interface IAddChoicesToTypeEffectDbo
             * @property {string|null} [type] AddChoicesToTypeEffectDbo type
             * @property {Array.<string>|null} [additionalReferences] AddChoicesToTypeEffectDbo additionalReferences
             */

            /**
             * Constructs a new AddChoicesToTypeEffectDbo.
             * @memberof v3.EffectDbo
             * @classdesc Represents an AddChoicesToTypeEffectDbo.
             * @implements IAddChoicesToTypeEffectDbo
             * @constructor
             * @param {v3.EffectDbo.IAddChoicesToTypeEffectDbo=} [properties] Properties to set
             */
            function AddChoicesToTypeEffectDbo(properties) {
                this.additionalReferences = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddChoicesToTypeEffectDbo type.
             * @member {string} type
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @instance
             */
            AddChoicesToTypeEffectDbo.prototype.type = "";

            /**
             * AddChoicesToTypeEffectDbo additionalReferences.
             * @member {Array.<string>} additionalReferences
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @instance
             */
            AddChoicesToTypeEffectDbo.prototype.additionalReferences = $util.emptyArray;

            /**
             * Creates a new AddChoicesToTypeEffectDbo instance using the specified properties.
             * @function create
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {v3.EffectDbo.IAddChoicesToTypeEffectDbo=} [properties] Properties to set
             * @returns {v3.EffectDbo.AddChoicesToTypeEffectDbo} AddChoicesToTypeEffectDbo instance
             */
            AddChoicesToTypeEffectDbo.create = function create(properties) {
                return new AddChoicesToTypeEffectDbo(properties);
            };

            /**
             * Encodes the specified AddChoicesToTypeEffectDbo message. Does not implicitly {@link v3.EffectDbo.AddChoicesToTypeEffectDbo.verify|verify} messages.
             * @function encode
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {v3.EffectDbo.AddChoicesToTypeEffectDbo} message AddChoicesToTypeEffectDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddChoicesToTypeEffectDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.additionalReferences != null && message.additionalReferences.length)
                    for (var i = 0; i < message.additionalReferences.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.additionalReferences[i]);
                return writer;
            };

            /**
             * Encodes the specified AddChoicesToTypeEffectDbo message, length delimited. Does not implicitly {@link v3.EffectDbo.AddChoicesToTypeEffectDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {v3.EffectDbo.AddChoicesToTypeEffectDbo} message AddChoicesToTypeEffectDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddChoicesToTypeEffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AddChoicesToTypeEffectDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v3.EffectDbo.AddChoicesToTypeEffectDbo} AddChoicesToTypeEffectDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddChoicesToTypeEffectDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.EffectDbo.AddChoicesToTypeEffectDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.additionalReferences && message.additionalReferences.length))
                                message.additionalReferences = [];
                            message.additionalReferences.push(reader.string());
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
             * Decodes an AddChoicesToTypeEffectDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v3.EffectDbo.AddChoicesToTypeEffectDbo} AddChoicesToTypeEffectDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddChoicesToTypeEffectDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddChoicesToTypeEffectDbo message.
             * @function verify
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddChoicesToTypeEffectDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.additionalReferences != null && message.hasOwnProperty("additionalReferences")) {
                    if (!Array.isArray(message.additionalReferences))
                        return "additionalReferences: array expected";
                    for (var i = 0; i < message.additionalReferences.length; ++i)
                        if (!$util.isString(message.additionalReferences[i]))
                            return "additionalReferences: string[] expected";
                }
                return null;
            };

            /**
             * Creates an AddChoicesToTypeEffectDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v3.EffectDbo.AddChoicesToTypeEffectDbo} AddChoicesToTypeEffectDbo
             */
            AddChoicesToTypeEffectDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v3.EffectDbo.AddChoicesToTypeEffectDbo)
                    return object;
                var message = new $root.v3.EffectDbo.AddChoicesToTypeEffectDbo();
                if (object.type != null)
                    message.type = String(object.type);
                if (object.additionalReferences) {
                    if (!Array.isArray(object.additionalReferences))
                        throw TypeError(".v3.EffectDbo.AddChoicesToTypeEffectDbo.additionalReferences: array expected");
                    message.additionalReferences = [];
                    for (var i = 0; i < object.additionalReferences.length; ++i)
                        message.additionalReferences[i] = String(object.additionalReferences[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an AddChoicesToTypeEffectDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {v3.EffectDbo.AddChoicesToTypeEffectDbo} message AddChoicesToTypeEffectDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddChoicesToTypeEffectDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.additionalReferences = [];
                if (options.defaults)
                    object.type = "";
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.additionalReferences && message.additionalReferences.length) {
                    object.additionalReferences = [];
                    for (var j = 0; j < message.additionalReferences.length; ++j)
                        object.additionalReferences[j] = message.additionalReferences[j];
                }
                return object;
            };

            /**
             * Converts this AddChoicesToTypeEffectDbo to JSON.
             * @function toJSON
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddChoicesToTypeEffectDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AddChoicesToTypeEffectDbo
             * @function getTypeUrl
             * @memberof v3.EffectDbo.AddChoicesToTypeEffectDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AddChoicesToTypeEffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v3.EffectDbo.AddChoicesToTypeEffectDbo";
            };

            return AddChoicesToTypeEffectDbo;
        })();

        EffectDbo.TextChoiceDbo = (function() {

            /**
             * Properties of a TextChoiceDbo.
             * @memberof v3.EffectDbo
             * @interface ITextChoiceDbo
             * @property {string|null} [id] TextChoiceDbo id
             * @property {number|null} [level] TextChoiceDbo level
             * @property {string|null} [key] TextChoiceDbo key
             * @property {string|null} [label] TextChoiceDbo label
             * @property {string|null} [type] TextChoiceDbo type
             */

            /**
             * Constructs a new TextChoiceDbo.
             * @memberof v3.EffectDbo
             * @classdesc Represents a TextChoiceDbo.
             * @implements ITextChoiceDbo
             * @constructor
             * @param {v3.EffectDbo.ITextChoiceDbo=} [properties] Properties to set
             */
            function TextChoiceDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TextChoiceDbo id.
             * @member {string} id
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @instance
             */
            TextChoiceDbo.prototype.id = "";

            /**
             * TextChoiceDbo level.
             * @member {number} level
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @instance
             */
            TextChoiceDbo.prototype.level = 0;

            /**
             * TextChoiceDbo key.
             * @member {string} key
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @instance
             */
            TextChoiceDbo.prototype.key = "";

            /**
             * TextChoiceDbo label.
             * @member {string} label
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @instance
             */
            TextChoiceDbo.prototype.label = "";

            /**
             * TextChoiceDbo type.
             * @member {string} type
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @instance
             */
            TextChoiceDbo.prototype.type = "";

            /**
             * Creates a new TextChoiceDbo instance using the specified properties.
             * @function create
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {v3.EffectDbo.ITextChoiceDbo=} [properties] Properties to set
             * @returns {v3.EffectDbo.TextChoiceDbo} TextChoiceDbo instance
             */
            TextChoiceDbo.create = function create(properties) {
                return new TextChoiceDbo(properties);
            };

            /**
             * Encodes the specified TextChoiceDbo message. Does not implicitly {@link v3.EffectDbo.TextChoiceDbo.verify|verify} messages.
             * @function encode
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {v3.EffectDbo.TextChoiceDbo} message TextChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextChoiceDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
                return writer;
            };

            /**
             * Encodes the specified TextChoiceDbo message, length delimited. Does not implicitly {@link v3.EffectDbo.TextChoiceDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {v3.EffectDbo.TextChoiceDbo} message TextChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TextChoiceDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v3.EffectDbo.TextChoiceDbo} TextChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextChoiceDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.EffectDbo.TextChoiceDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.level = reader.int32();
                            break;
                        }
                    case 3: {
                            message.key = reader.string();
                            break;
                        }
                    case 4: {
                            message.label = reader.string();
                            break;
                        }
                    case 5: {
                            message.type = reader.string();
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
             * Decodes a TextChoiceDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v3.EffectDbo.TextChoiceDbo} TextChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextChoiceDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TextChoiceDbo message.
             * @function verify
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TextChoiceDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                return null;
            };

            /**
             * Creates a TextChoiceDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v3.EffectDbo.TextChoiceDbo} TextChoiceDbo
             */
            TextChoiceDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v3.EffectDbo.TextChoiceDbo)
                    return object;
                var message = new $root.v3.EffectDbo.TextChoiceDbo();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.key != null)
                    message.key = String(object.key);
                if (object.label != null)
                    message.label = String(object.label);
                if (object.type != null)
                    message.type = String(object.type);
                return message;
            };

            /**
             * Creates a plain object from a TextChoiceDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {v3.EffectDbo.TextChoiceDbo} message TextChoiceDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TextChoiceDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.level = 0;
                    object.key = "";
                    object.label = "";
                    object.type = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                return object;
            };

            /**
             * Converts this TextChoiceDbo to JSON.
             * @function toJSON
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TextChoiceDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TextChoiceDbo
             * @function getTypeUrl
             * @memberof v3.EffectDbo.TextChoiceDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TextChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v3.EffectDbo.TextChoiceDbo";
            };

            return TextChoiceDbo;
        })();

        EffectDbo.SelectChoiceDbo = (function() {

            /**
             * Properties of a SelectChoiceDbo.
             * @memberof v3.EffectDbo
             * @interface ISelectChoiceDbo
             * @property {string|null} [id] SelectChoiceDbo id
             * @property {number|null} [level] SelectChoiceDbo level
             * @property {string|null} [label] SelectChoiceDbo label
             * @property {Array.<string>|null} [references] SelectChoiceDbo references
             * @property {string|null} [type] SelectChoiceDbo type
             */

            /**
             * Constructs a new SelectChoiceDbo.
             * @memberof v3.EffectDbo
             * @classdesc Represents a SelectChoiceDbo.
             * @implements ISelectChoiceDbo
             * @constructor
             * @param {v3.EffectDbo.ISelectChoiceDbo=} [properties] Properties to set
             */
            function SelectChoiceDbo(properties) {
                this.references = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SelectChoiceDbo id.
             * @member {string} id
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @instance
             */
            SelectChoiceDbo.prototype.id = "";

            /**
             * SelectChoiceDbo level.
             * @member {number} level
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @instance
             */
            SelectChoiceDbo.prototype.level = 0;

            /**
             * SelectChoiceDbo label.
             * @member {string} label
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @instance
             */
            SelectChoiceDbo.prototype.label = "";

            /**
             * SelectChoiceDbo references.
             * @member {Array.<string>} references
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @instance
             */
            SelectChoiceDbo.prototype.references = $util.emptyArray;

            /**
             * SelectChoiceDbo type.
             * @member {string} type
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @instance
             */
            SelectChoiceDbo.prototype.type = "";

            /**
             * Creates a new SelectChoiceDbo instance using the specified properties.
             * @function create
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {v3.EffectDbo.ISelectChoiceDbo=} [properties] Properties to set
             * @returns {v3.EffectDbo.SelectChoiceDbo} SelectChoiceDbo instance
             */
            SelectChoiceDbo.create = function create(properties) {
                return new SelectChoiceDbo(properties);
            };

            /**
             * Encodes the specified SelectChoiceDbo message. Does not implicitly {@link v3.EffectDbo.SelectChoiceDbo.verify|verify} messages.
             * @function encode
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {v3.EffectDbo.SelectChoiceDbo} message SelectChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectChoiceDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.label);
                if (message.references != null && message.references.length)
                    for (var i = 0; i < message.references.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.references[i]);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
                return writer;
            };

            /**
             * Encodes the specified SelectChoiceDbo message, length delimited. Does not implicitly {@link v3.EffectDbo.SelectChoiceDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {v3.EffectDbo.SelectChoiceDbo} message SelectChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SelectChoiceDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v3.EffectDbo.SelectChoiceDbo} SelectChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectChoiceDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v3.EffectDbo.SelectChoiceDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.level = reader.int32();
                            break;
                        }
                    case 3: {
                            message.label = reader.string();
                            break;
                        }
                    case 4: {
                            if (!(message.references && message.references.length))
                                message.references = [];
                            message.references.push(reader.string());
                            break;
                        }
                    case 5: {
                            message.type = reader.string();
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
             * Decodes a SelectChoiceDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v3.EffectDbo.SelectChoiceDbo} SelectChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectChoiceDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SelectChoiceDbo message.
             * @function verify
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SelectChoiceDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.references != null && message.hasOwnProperty("references")) {
                    if (!Array.isArray(message.references))
                        return "references: array expected";
                    for (var i = 0; i < message.references.length; ++i)
                        if (!$util.isString(message.references[i]))
                            return "references: string[] expected";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                return null;
            };

            /**
             * Creates a SelectChoiceDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v3.EffectDbo.SelectChoiceDbo} SelectChoiceDbo
             */
            SelectChoiceDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v3.EffectDbo.SelectChoiceDbo)
                    return object;
                var message = new $root.v3.EffectDbo.SelectChoiceDbo();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.label != null)
                    message.label = String(object.label);
                if (object.references) {
                    if (!Array.isArray(object.references))
                        throw TypeError(".v3.EffectDbo.SelectChoiceDbo.references: array expected");
                    message.references = [];
                    for (var i = 0; i < object.references.length; ++i)
                        message.references[i] = String(object.references[i]);
                }
                if (object.type != null)
                    message.type = String(object.type);
                return message;
            };

            /**
             * Creates a plain object from a SelectChoiceDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {v3.EffectDbo.SelectChoiceDbo} message SelectChoiceDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SelectChoiceDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.references = [];
                if (options.defaults) {
                    object.id = "";
                    object.level = 0;
                    object.label = "";
                    object.type = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.references && message.references.length) {
                    object.references = [];
                    for (var j = 0; j < message.references.length; ++j)
                        object.references[j] = message.references[j];
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                return object;
            };

            /**
             * Converts this SelectChoiceDbo to JSON.
             * @function toJSON
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SelectChoiceDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SelectChoiceDbo
             * @function getTypeUrl
             * @memberof v3.EffectDbo.SelectChoiceDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SelectChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v3.EffectDbo.SelectChoiceDbo";
            };

            return SelectChoiceDbo;
        })();

        return EffectDbo;
    })();

    return v3;
})();

$root.Formula = (function() {

    /**
     * Properties of a Formula.
     * @exports IFormula
     * @interface IFormula
     * @property {Formula.Operation|null} [operation] Formula operation
     */

    /**
     * Constructs a new Formula.
     * @exports Formula
     * @classdesc Represents a Formula.
     * @implements IFormula
     * @constructor
     * @param {IFormula=} [properties] Properties to set
     */
    function Formula(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Formula operation.
     * @member {Formula.Operation|null|undefined} operation
     * @memberof Formula
     * @instance
     */
    Formula.prototype.operation = null;

    /**
     * Creates a new Formula instance using the specified properties.
     * @function create
     * @memberof Formula
     * @static
     * @param {IFormula=} [properties] Properties to set
     * @returns {Formula} Formula instance
     */
    Formula.create = function create(properties) {
        return new Formula(properties);
    };

    /**
     * Encodes the specified Formula message. Does not implicitly {@link Formula.verify|verify} messages.
     * @function encode
     * @memberof Formula
     * @static
     * @param {Formula} message Formula message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Formula.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
            $root.Formula.Operation.encode(message.operation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Formula message, length delimited. Does not implicitly {@link Formula.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Formula
     * @static
     * @param {Formula} message Formula message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Formula.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Formula message from the specified reader or buffer.
     * @function decode
     * @memberof Formula
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Formula} Formula
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Formula.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.operation = $root.Formula.Operation.decode(reader, reader.uint32());
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
     * Decodes a Formula message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Formula
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Formula} Formula
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Formula.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Formula message.
     * @function verify
     * @memberof Formula
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Formula.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.operation != null && message.hasOwnProperty("operation")) {
            var error = $root.Formula.Operation.verify(message.operation);
            if (error)
                return "operation." + error;
        }
        return null;
    };

    /**
     * Creates a Formula message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Formula
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Formula} Formula
     */
    Formula.fromObject = function fromObject(object) {
        if (object instanceof $root.Formula)
            return object;
        var message = new $root.Formula();
        if (object.operation != null) {
            if (typeof object.operation !== "object")
                throw TypeError(".Formula.operation: object expected");
            message.operation = $root.Formula.Operation.fromObject(object.operation);
        }
        return message;
    };

    /**
     * Creates a plain object from a Formula message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Formula
     * @static
     * @param {Formula} message Formula
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Formula.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.operation = null;
        if (message.operation != null && message.hasOwnProperty("operation"))
            object.operation = $root.Formula.Operation.toObject(message.operation, options);
        return object;
    };

    /**
     * Converts this Formula to JSON.
     * @function toJSON
     * @memberof Formula
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Formula.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Formula
     * @function getTypeUrl
     * @memberof Formula
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Formula.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Formula";
    };

    Formula.Operation = (function() {

        /**
         * Properties of an Operation.
         * @memberof Formula
         * @interface IOperation
         * @property {number|null} [integerValue] Operation integerValue
         * @property {number|null} [decimalValue] Operation decimalValue
         * @property {boolean|null} [booleanValue] Operation booleanValue
         * @property {string|null} [stringValue] Operation stringValue
         * @property {Formula.Operation.VariableValue|null} [variableValue] Operation variableValue
         * @property {Formula.Operation.AddOperation|null} [addOperation] Operation addOperation
         * @property {Formula.Operation.SubtractOperation|null} [subtractOperation] Operation subtractOperation
         * @property {Formula.Operation.MultiplyOperation|null} [multiplyOperation] Operation multiplyOperation
         * @property {Formula.Operation.DivideOperation|null} [divideOperation] Operation divideOperation
         * @property {Formula.Operation.EqualsOperation|null} [equalsOperation] Operation equalsOperation
         * @property {Formula.Operation.NotEqualsOperation|null} [notEqualsOperation] Operation notEqualsOperation
         * @property {Formula.Operation.GreaterThanOperation|null} [greaterThanOperation] Operation greaterThanOperation
         * @property {Formula.Operation.GreaterThanOrEqualsOperation|null} [greaterThanOrEqualsOperation] Operation greaterThanOrEqualsOperation
         * @property {Formula.Operation.LessThanOperation|null} [lessThanOperation] Operation lessThanOperation
         * @property {Formula.Operation.LessThanOrEqualsOperation|null} [lessThanOrEqualsOperation] Operation lessThanOrEqualsOperation
         * @property {Formula.Operation.AndOperation|null} [andOperation] Operation andOperation
         * @property {Formula.Operation.OrOperation|null} [orOperation] Operation orOperation
         * @property {Formula.Operation.NotOperation|null} [notOperation] Operation notOperation
         * @property {Formula.Operation.AbsFunction|null} [absFunction] Operation absFunction
         * @property {Formula.Operation.MinFunction|null} [minFunction] Operation minFunction
         * @property {Formula.Operation.MaxFunction|null} [maxFunction] Operation maxFunction
         * @property {Formula.Operation.FloorFunction|null} [floorFunction] Operation floorFunction
         * @property {Formula.Operation.CeilFunction|null} [ceilFunction] Operation ceilFunction
         * @property {Formula.Operation.SignedFunction|null} [signedFunction] Operation signedFunction
         * @property {Formula.Operation.ConcatFunction|null} [concatFunction] Operation concatFunction
         * @property {Formula.Operation.IfFunction|null} [ifFunction] Operation ifFunction
         */

        /**
         * Constructs a new Operation.
         * @memberof Formula
         * @classdesc Represents an Operation.
         * @implements IOperation
         * @constructor
         * @param {Formula.IOperation=} [properties] Properties to set
         */
        function Operation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Operation integerValue.
         * @member {number|null|undefined} integerValue
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.integerValue = null;

        /**
         * Operation decimalValue.
         * @member {number|null|undefined} decimalValue
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.decimalValue = null;

        /**
         * Operation booleanValue.
         * @member {boolean|null|undefined} booleanValue
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.booleanValue = null;

        /**
         * Operation stringValue.
         * @member {string|null|undefined} stringValue
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.stringValue = null;

        /**
         * Operation variableValue.
         * @member {Formula.Operation.VariableValue|null|undefined} variableValue
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.variableValue = null;

        /**
         * Operation addOperation.
         * @member {Formula.Operation.AddOperation|null|undefined} addOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.addOperation = null;

        /**
         * Operation subtractOperation.
         * @member {Formula.Operation.SubtractOperation|null|undefined} subtractOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.subtractOperation = null;

        /**
         * Operation multiplyOperation.
         * @member {Formula.Operation.MultiplyOperation|null|undefined} multiplyOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.multiplyOperation = null;

        /**
         * Operation divideOperation.
         * @member {Formula.Operation.DivideOperation|null|undefined} divideOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.divideOperation = null;

        /**
         * Operation equalsOperation.
         * @member {Formula.Operation.EqualsOperation|null|undefined} equalsOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.equalsOperation = null;

        /**
         * Operation notEqualsOperation.
         * @member {Formula.Operation.NotEqualsOperation|null|undefined} notEqualsOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.notEqualsOperation = null;

        /**
         * Operation greaterThanOperation.
         * @member {Formula.Operation.GreaterThanOperation|null|undefined} greaterThanOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.greaterThanOperation = null;

        /**
         * Operation greaterThanOrEqualsOperation.
         * @member {Formula.Operation.GreaterThanOrEqualsOperation|null|undefined} greaterThanOrEqualsOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.greaterThanOrEqualsOperation = null;

        /**
         * Operation lessThanOperation.
         * @member {Formula.Operation.LessThanOperation|null|undefined} lessThanOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.lessThanOperation = null;

        /**
         * Operation lessThanOrEqualsOperation.
         * @member {Formula.Operation.LessThanOrEqualsOperation|null|undefined} lessThanOrEqualsOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.lessThanOrEqualsOperation = null;

        /**
         * Operation andOperation.
         * @member {Formula.Operation.AndOperation|null|undefined} andOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.andOperation = null;

        /**
         * Operation orOperation.
         * @member {Formula.Operation.OrOperation|null|undefined} orOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.orOperation = null;

        /**
         * Operation notOperation.
         * @member {Formula.Operation.NotOperation|null|undefined} notOperation
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.notOperation = null;

        /**
         * Operation absFunction.
         * @member {Formula.Operation.AbsFunction|null|undefined} absFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.absFunction = null;

        /**
         * Operation minFunction.
         * @member {Formula.Operation.MinFunction|null|undefined} minFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.minFunction = null;

        /**
         * Operation maxFunction.
         * @member {Formula.Operation.MaxFunction|null|undefined} maxFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.maxFunction = null;

        /**
         * Operation floorFunction.
         * @member {Formula.Operation.FloorFunction|null|undefined} floorFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.floorFunction = null;

        /**
         * Operation ceilFunction.
         * @member {Formula.Operation.CeilFunction|null|undefined} ceilFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.ceilFunction = null;

        /**
         * Operation signedFunction.
         * @member {Formula.Operation.SignedFunction|null|undefined} signedFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.signedFunction = null;

        /**
         * Operation concatFunction.
         * @member {Formula.Operation.ConcatFunction|null|undefined} concatFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.concatFunction = null;

        /**
         * Operation ifFunction.
         * @member {Formula.Operation.IfFunction|null|undefined} ifFunction
         * @memberof Formula.Operation
         * @instance
         */
        Operation.prototype.ifFunction = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Operation op.
         * @member {"integerValue"|"decimalValue"|"booleanValue"|"stringValue"|"variableValue"|"addOperation"|"subtractOperation"|"multiplyOperation"|"divideOperation"|"equalsOperation"|"notEqualsOperation"|"greaterThanOperation"|"greaterThanOrEqualsOperation"|"lessThanOperation"|"lessThanOrEqualsOperation"|"andOperation"|"orOperation"|"notOperation"|"absFunction"|"minFunction"|"maxFunction"|"floorFunction"|"ceilFunction"|"signedFunction"|"concatFunction"|"ifFunction"|undefined} op
         * @memberof Formula.Operation
         * @instance
         */
        Object.defineProperty(Operation.prototype, "op", {
            get: $util.oneOfGetter($oneOfFields = ["integerValue", "decimalValue", "booleanValue", "stringValue", "variableValue", "addOperation", "subtractOperation", "multiplyOperation", "divideOperation", "equalsOperation", "notEqualsOperation", "greaterThanOperation", "greaterThanOrEqualsOperation", "lessThanOperation", "lessThanOrEqualsOperation", "andOperation", "orOperation", "notOperation", "absFunction", "minFunction", "maxFunction", "floorFunction", "ceilFunction", "signedFunction", "concatFunction", "ifFunction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Operation instance using the specified properties.
         * @function create
         * @memberof Formula.Operation
         * @static
         * @param {Formula.IOperation=} [properties] Properties to set
         * @returns {Formula.Operation} Operation instance
         */
        Operation.create = function create(properties) {
            return new Operation(properties);
        };

        /**
         * Encodes the specified Operation message. Does not implicitly {@link Formula.Operation.verify|verify} messages.
         * @function encode
         * @memberof Formula.Operation
         * @static
         * @param {Formula.Operation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.integerValue != null && Object.hasOwnProperty.call(message, "integerValue"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.integerValue);
            if (message.decimalValue != null && Object.hasOwnProperty.call(message, "decimalValue"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.decimalValue);
            if (message.booleanValue != null && Object.hasOwnProperty.call(message, "booleanValue"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.booleanValue);
            if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.stringValue);
            if (message.variableValue != null && Object.hasOwnProperty.call(message, "variableValue"))
                $root.Formula.Operation.VariableValue.encode(message.variableValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.addOperation != null && Object.hasOwnProperty.call(message, "addOperation"))
                $root.Formula.Operation.AddOperation.encode(message.addOperation, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.subtractOperation != null && Object.hasOwnProperty.call(message, "subtractOperation"))
                $root.Formula.Operation.SubtractOperation.encode(message.subtractOperation, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.multiplyOperation != null && Object.hasOwnProperty.call(message, "multiplyOperation"))
                $root.Formula.Operation.MultiplyOperation.encode(message.multiplyOperation, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.divideOperation != null && Object.hasOwnProperty.call(message, "divideOperation"))
                $root.Formula.Operation.DivideOperation.encode(message.divideOperation, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.equalsOperation != null && Object.hasOwnProperty.call(message, "equalsOperation"))
                $root.Formula.Operation.EqualsOperation.encode(message.equalsOperation, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.notEqualsOperation != null && Object.hasOwnProperty.call(message, "notEqualsOperation"))
                $root.Formula.Operation.NotEqualsOperation.encode(message.notEqualsOperation, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.greaterThanOperation != null && Object.hasOwnProperty.call(message, "greaterThanOperation"))
                $root.Formula.Operation.GreaterThanOperation.encode(message.greaterThanOperation, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.greaterThanOrEqualsOperation != null && Object.hasOwnProperty.call(message, "greaterThanOrEqualsOperation"))
                $root.Formula.Operation.GreaterThanOrEqualsOperation.encode(message.greaterThanOrEqualsOperation, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.lessThanOperation != null && Object.hasOwnProperty.call(message, "lessThanOperation"))
                $root.Formula.Operation.LessThanOperation.encode(message.lessThanOperation, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.lessThanOrEqualsOperation != null && Object.hasOwnProperty.call(message, "lessThanOrEqualsOperation"))
                $root.Formula.Operation.LessThanOrEqualsOperation.encode(message.lessThanOrEqualsOperation, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.andOperation != null && Object.hasOwnProperty.call(message, "andOperation"))
                $root.Formula.Operation.AndOperation.encode(message.andOperation, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.orOperation != null && Object.hasOwnProperty.call(message, "orOperation"))
                $root.Formula.Operation.OrOperation.encode(message.orOperation, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.notOperation != null && Object.hasOwnProperty.call(message, "notOperation"))
                $root.Formula.Operation.NotOperation.encode(message.notOperation, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.absFunction != null && Object.hasOwnProperty.call(message, "absFunction"))
                $root.Formula.Operation.AbsFunction.encode(message.absFunction, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.minFunction != null && Object.hasOwnProperty.call(message, "minFunction"))
                $root.Formula.Operation.MinFunction.encode(message.minFunction, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.maxFunction != null && Object.hasOwnProperty.call(message, "maxFunction"))
                $root.Formula.Operation.MaxFunction.encode(message.maxFunction, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.floorFunction != null && Object.hasOwnProperty.call(message, "floorFunction"))
                $root.Formula.Operation.FloorFunction.encode(message.floorFunction, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.ceilFunction != null && Object.hasOwnProperty.call(message, "ceilFunction"))
                $root.Formula.Operation.CeilFunction.encode(message.ceilFunction, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.signedFunction != null && Object.hasOwnProperty.call(message, "signedFunction"))
                $root.Formula.Operation.SignedFunction.encode(message.signedFunction, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.concatFunction != null && Object.hasOwnProperty.call(message, "concatFunction"))
                $root.Formula.Operation.ConcatFunction.encode(message.concatFunction, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.ifFunction != null && Object.hasOwnProperty.call(message, "ifFunction"))
                $root.Formula.Operation.IfFunction.encode(message.ifFunction, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link Formula.Operation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Formula.Operation
         * @static
         * @param {Formula.Operation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @function decode
         * @memberof Formula.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Formula.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.integerValue = reader.uint32();
                        break;
                    }
                case 2: {
                        message.decimalValue = reader.double();
                        break;
                    }
                case 3: {
                        message.booleanValue = reader.bool();
                        break;
                    }
                case 4: {
                        message.stringValue = reader.string();
                        break;
                    }
                case 5: {
                        message.variableValue = $root.Formula.Operation.VariableValue.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.addOperation = $root.Formula.Operation.AddOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.subtractOperation = $root.Formula.Operation.SubtractOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.multiplyOperation = $root.Formula.Operation.MultiplyOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.divideOperation = $root.Formula.Operation.DivideOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.equalsOperation = $root.Formula.Operation.EqualsOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.notEqualsOperation = $root.Formula.Operation.NotEqualsOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.greaterThanOperation = $root.Formula.Operation.GreaterThanOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.greaterThanOrEqualsOperation = $root.Formula.Operation.GreaterThanOrEqualsOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.lessThanOperation = $root.Formula.Operation.LessThanOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.lessThanOrEqualsOperation = $root.Formula.Operation.LessThanOrEqualsOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.andOperation = $root.Formula.Operation.AndOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.orOperation = $root.Formula.Operation.OrOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.notOperation = $root.Formula.Operation.NotOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.absFunction = $root.Formula.Operation.AbsFunction.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.minFunction = $root.Formula.Operation.MinFunction.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.maxFunction = $root.Formula.Operation.MaxFunction.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.floorFunction = $root.Formula.Operation.FloorFunction.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.ceilFunction = $root.Formula.Operation.CeilFunction.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.signedFunction = $root.Formula.Operation.SignedFunction.decode(reader, reader.uint32());
                        break;
                    }
                case 25: {
                        message.concatFunction = $root.Formula.Operation.ConcatFunction.decode(reader, reader.uint32());
                        break;
                    }
                case 26: {
                        message.ifFunction = $root.Formula.Operation.IfFunction.decode(reader, reader.uint32());
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
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Formula.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Formula.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Operation message.
         * @function verify
         * @memberof Formula.Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.integerValue != null && message.hasOwnProperty("integerValue")) {
                properties.op = 1;
                if (!$util.isInteger(message.integerValue))
                    return "integerValue: integer expected";
            }
            if (message.decimalValue != null && message.hasOwnProperty("decimalValue")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                if (typeof message.decimalValue !== "number")
                    return "decimalValue: number expected";
            }
            if (message.booleanValue != null && message.hasOwnProperty("booleanValue")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                if (typeof message.booleanValue !== "boolean")
                    return "booleanValue: boolean expected";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            }
            if (message.variableValue != null && message.hasOwnProperty("variableValue")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.VariableValue.verify(message.variableValue);
                    if (error)
                        return "variableValue." + error;
                }
            }
            if (message.addOperation != null && message.hasOwnProperty("addOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.AddOperation.verify(message.addOperation);
                    if (error)
                        return "addOperation." + error;
                }
            }
            if (message.subtractOperation != null && message.hasOwnProperty("subtractOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.SubtractOperation.verify(message.subtractOperation);
                    if (error)
                        return "subtractOperation." + error;
                }
            }
            if (message.multiplyOperation != null && message.hasOwnProperty("multiplyOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.MultiplyOperation.verify(message.multiplyOperation);
                    if (error)
                        return "multiplyOperation." + error;
                }
            }
            if (message.divideOperation != null && message.hasOwnProperty("divideOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.DivideOperation.verify(message.divideOperation);
                    if (error)
                        return "divideOperation." + error;
                }
            }
            if (message.equalsOperation != null && message.hasOwnProperty("equalsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.EqualsOperation.verify(message.equalsOperation);
                    if (error)
                        return "equalsOperation." + error;
                }
            }
            if (message.notEqualsOperation != null && message.hasOwnProperty("notEqualsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.NotEqualsOperation.verify(message.notEqualsOperation);
                    if (error)
                        return "notEqualsOperation." + error;
                }
            }
            if (message.greaterThanOperation != null && message.hasOwnProperty("greaterThanOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.GreaterThanOperation.verify(message.greaterThanOperation);
                    if (error)
                        return "greaterThanOperation." + error;
                }
            }
            if (message.greaterThanOrEqualsOperation != null && message.hasOwnProperty("greaterThanOrEqualsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.GreaterThanOrEqualsOperation.verify(message.greaterThanOrEqualsOperation);
                    if (error)
                        return "greaterThanOrEqualsOperation." + error;
                }
            }
            if (message.lessThanOperation != null && message.hasOwnProperty("lessThanOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.LessThanOperation.verify(message.lessThanOperation);
                    if (error)
                        return "lessThanOperation." + error;
                }
            }
            if (message.lessThanOrEqualsOperation != null && message.hasOwnProperty("lessThanOrEqualsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.LessThanOrEqualsOperation.verify(message.lessThanOrEqualsOperation);
                    if (error)
                        return "lessThanOrEqualsOperation." + error;
                }
            }
            if (message.andOperation != null && message.hasOwnProperty("andOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.AndOperation.verify(message.andOperation);
                    if (error)
                        return "andOperation." + error;
                }
            }
            if (message.orOperation != null && message.hasOwnProperty("orOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.OrOperation.verify(message.orOperation);
                    if (error)
                        return "orOperation." + error;
                }
            }
            if (message.notOperation != null && message.hasOwnProperty("notOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.NotOperation.verify(message.notOperation);
                    if (error)
                        return "notOperation." + error;
                }
            }
            if (message.absFunction != null && message.hasOwnProperty("absFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.AbsFunction.verify(message.absFunction);
                    if (error)
                        return "absFunction." + error;
                }
            }
            if (message.minFunction != null && message.hasOwnProperty("minFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.MinFunction.verify(message.minFunction);
                    if (error)
                        return "minFunction." + error;
                }
            }
            if (message.maxFunction != null && message.hasOwnProperty("maxFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.MaxFunction.verify(message.maxFunction);
                    if (error)
                        return "maxFunction." + error;
                }
            }
            if (message.floorFunction != null && message.hasOwnProperty("floorFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.FloorFunction.verify(message.floorFunction);
                    if (error)
                        return "floorFunction." + error;
                }
            }
            if (message.ceilFunction != null && message.hasOwnProperty("ceilFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.CeilFunction.verify(message.ceilFunction);
                    if (error)
                        return "ceilFunction." + error;
                }
            }
            if (message.signedFunction != null && message.hasOwnProperty("signedFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.SignedFunction.verify(message.signedFunction);
                    if (error)
                        return "signedFunction." + error;
                }
            }
            if (message.concatFunction != null && message.hasOwnProperty("concatFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.ConcatFunction.verify(message.concatFunction);
                    if (error)
                        return "concatFunction." + error;
                }
            }
            if (message.ifFunction != null && message.hasOwnProperty("ifFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Formula.Operation.IfFunction.verify(message.ifFunction);
                    if (error)
                        return "ifFunction." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Formula.Operation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Formula.Operation} Operation
         */
        Operation.fromObject = function fromObject(object) {
            if (object instanceof $root.Formula.Operation)
                return object;
            var message = new $root.Formula.Operation();
            if (object.integerValue != null)
                message.integerValue = object.integerValue >>> 0;
            if (object.decimalValue != null)
                message.decimalValue = Number(object.decimalValue);
            if (object.booleanValue != null)
                message.booleanValue = Boolean(object.booleanValue);
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            if (object.variableValue != null) {
                if (typeof object.variableValue !== "object")
                    throw TypeError(".Formula.Operation.variableValue: object expected");
                message.variableValue = $root.Formula.Operation.VariableValue.fromObject(object.variableValue);
            }
            if (object.addOperation != null) {
                if (typeof object.addOperation !== "object")
                    throw TypeError(".Formula.Operation.addOperation: object expected");
                message.addOperation = $root.Formula.Operation.AddOperation.fromObject(object.addOperation);
            }
            if (object.subtractOperation != null) {
                if (typeof object.subtractOperation !== "object")
                    throw TypeError(".Formula.Operation.subtractOperation: object expected");
                message.subtractOperation = $root.Formula.Operation.SubtractOperation.fromObject(object.subtractOperation);
            }
            if (object.multiplyOperation != null) {
                if (typeof object.multiplyOperation !== "object")
                    throw TypeError(".Formula.Operation.multiplyOperation: object expected");
                message.multiplyOperation = $root.Formula.Operation.MultiplyOperation.fromObject(object.multiplyOperation);
            }
            if (object.divideOperation != null) {
                if (typeof object.divideOperation !== "object")
                    throw TypeError(".Formula.Operation.divideOperation: object expected");
                message.divideOperation = $root.Formula.Operation.DivideOperation.fromObject(object.divideOperation);
            }
            if (object.equalsOperation != null) {
                if (typeof object.equalsOperation !== "object")
                    throw TypeError(".Formula.Operation.equalsOperation: object expected");
                message.equalsOperation = $root.Formula.Operation.EqualsOperation.fromObject(object.equalsOperation);
            }
            if (object.notEqualsOperation != null) {
                if (typeof object.notEqualsOperation !== "object")
                    throw TypeError(".Formula.Operation.notEqualsOperation: object expected");
                message.notEqualsOperation = $root.Formula.Operation.NotEqualsOperation.fromObject(object.notEqualsOperation);
            }
            if (object.greaterThanOperation != null) {
                if (typeof object.greaterThanOperation !== "object")
                    throw TypeError(".Formula.Operation.greaterThanOperation: object expected");
                message.greaterThanOperation = $root.Formula.Operation.GreaterThanOperation.fromObject(object.greaterThanOperation);
            }
            if (object.greaterThanOrEqualsOperation != null) {
                if (typeof object.greaterThanOrEqualsOperation !== "object")
                    throw TypeError(".Formula.Operation.greaterThanOrEqualsOperation: object expected");
                message.greaterThanOrEqualsOperation = $root.Formula.Operation.GreaterThanOrEqualsOperation.fromObject(object.greaterThanOrEqualsOperation);
            }
            if (object.lessThanOperation != null) {
                if (typeof object.lessThanOperation !== "object")
                    throw TypeError(".Formula.Operation.lessThanOperation: object expected");
                message.lessThanOperation = $root.Formula.Operation.LessThanOperation.fromObject(object.lessThanOperation);
            }
            if (object.lessThanOrEqualsOperation != null) {
                if (typeof object.lessThanOrEqualsOperation !== "object")
                    throw TypeError(".Formula.Operation.lessThanOrEqualsOperation: object expected");
                message.lessThanOrEqualsOperation = $root.Formula.Operation.LessThanOrEqualsOperation.fromObject(object.lessThanOrEqualsOperation);
            }
            if (object.andOperation != null) {
                if (typeof object.andOperation !== "object")
                    throw TypeError(".Formula.Operation.andOperation: object expected");
                message.andOperation = $root.Formula.Operation.AndOperation.fromObject(object.andOperation);
            }
            if (object.orOperation != null) {
                if (typeof object.orOperation !== "object")
                    throw TypeError(".Formula.Operation.orOperation: object expected");
                message.orOperation = $root.Formula.Operation.OrOperation.fromObject(object.orOperation);
            }
            if (object.notOperation != null) {
                if (typeof object.notOperation !== "object")
                    throw TypeError(".Formula.Operation.notOperation: object expected");
                message.notOperation = $root.Formula.Operation.NotOperation.fromObject(object.notOperation);
            }
            if (object.absFunction != null) {
                if (typeof object.absFunction !== "object")
                    throw TypeError(".Formula.Operation.absFunction: object expected");
                message.absFunction = $root.Formula.Operation.AbsFunction.fromObject(object.absFunction);
            }
            if (object.minFunction != null) {
                if (typeof object.minFunction !== "object")
                    throw TypeError(".Formula.Operation.minFunction: object expected");
                message.minFunction = $root.Formula.Operation.MinFunction.fromObject(object.minFunction);
            }
            if (object.maxFunction != null) {
                if (typeof object.maxFunction !== "object")
                    throw TypeError(".Formula.Operation.maxFunction: object expected");
                message.maxFunction = $root.Formula.Operation.MaxFunction.fromObject(object.maxFunction);
            }
            if (object.floorFunction != null) {
                if (typeof object.floorFunction !== "object")
                    throw TypeError(".Formula.Operation.floorFunction: object expected");
                message.floorFunction = $root.Formula.Operation.FloorFunction.fromObject(object.floorFunction);
            }
            if (object.ceilFunction != null) {
                if (typeof object.ceilFunction !== "object")
                    throw TypeError(".Formula.Operation.ceilFunction: object expected");
                message.ceilFunction = $root.Formula.Operation.CeilFunction.fromObject(object.ceilFunction);
            }
            if (object.signedFunction != null) {
                if (typeof object.signedFunction !== "object")
                    throw TypeError(".Formula.Operation.signedFunction: object expected");
                message.signedFunction = $root.Formula.Operation.SignedFunction.fromObject(object.signedFunction);
            }
            if (object.concatFunction != null) {
                if (typeof object.concatFunction !== "object")
                    throw TypeError(".Formula.Operation.concatFunction: object expected");
                message.concatFunction = $root.Formula.Operation.ConcatFunction.fromObject(object.concatFunction);
            }
            if (object.ifFunction != null) {
                if (typeof object.ifFunction !== "object")
                    throw TypeError(".Formula.Operation.ifFunction: object expected");
                message.ifFunction = $root.Formula.Operation.IfFunction.fromObject(object.ifFunction);
            }
            return message;
        };

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Formula.Operation
         * @static
         * @param {Formula.Operation} message Operation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.integerValue != null && message.hasOwnProperty("integerValue")) {
                object.integerValue = message.integerValue;
                if (options.oneofs)
                    object.op = "integerValue";
            }
            if (message.decimalValue != null && message.hasOwnProperty("decimalValue")) {
                object.decimalValue = options.json && !isFinite(message.decimalValue) ? String(message.decimalValue) : message.decimalValue;
                if (options.oneofs)
                    object.op = "decimalValue";
            }
            if (message.booleanValue != null && message.hasOwnProperty("booleanValue")) {
                object.booleanValue = message.booleanValue;
                if (options.oneofs)
                    object.op = "booleanValue";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                object.stringValue = message.stringValue;
                if (options.oneofs)
                    object.op = "stringValue";
            }
            if (message.variableValue != null && message.hasOwnProperty("variableValue")) {
                object.variableValue = $root.Formula.Operation.VariableValue.toObject(message.variableValue, options);
                if (options.oneofs)
                    object.op = "variableValue";
            }
            if (message.addOperation != null && message.hasOwnProperty("addOperation")) {
                object.addOperation = $root.Formula.Operation.AddOperation.toObject(message.addOperation, options);
                if (options.oneofs)
                    object.op = "addOperation";
            }
            if (message.subtractOperation != null && message.hasOwnProperty("subtractOperation")) {
                object.subtractOperation = $root.Formula.Operation.SubtractOperation.toObject(message.subtractOperation, options);
                if (options.oneofs)
                    object.op = "subtractOperation";
            }
            if (message.multiplyOperation != null && message.hasOwnProperty("multiplyOperation")) {
                object.multiplyOperation = $root.Formula.Operation.MultiplyOperation.toObject(message.multiplyOperation, options);
                if (options.oneofs)
                    object.op = "multiplyOperation";
            }
            if (message.divideOperation != null && message.hasOwnProperty("divideOperation")) {
                object.divideOperation = $root.Formula.Operation.DivideOperation.toObject(message.divideOperation, options);
                if (options.oneofs)
                    object.op = "divideOperation";
            }
            if (message.equalsOperation != null && message.hasOwnProperty("equalsOperation")) {
                object.equalsOperation = $root.Formula.Operation.EqualsOperation.toObject(message.equalsOperation, options);
                if (options.oneofs)
                    object.op = "equalsOperation";
            }
            if (message.notEqualsOperation != null && message.hasOwnProperty("notEqualsOperation")) {
                object.notEqualsOperation = $root.Formula.Operation.NotEqualsOperation.toObject(message.notEqualsOperation, options);
                if (options.oneofs)
                    object.op = "notEqualsOperation";
            }
            if (message.greaterThanOperation != null && message.hasOwnProperty("greaterThanOperation")) {
                object.greaterThanOperation = $root.Formula.Operation.GreaterThanOperation.toObject(message.greaterThanOperation, options);
                if (options.oneofs)
                    object.op = "greaterThanOperation";
            }
            if (message.greaterThanOrEqualsOperation != null && message.hasOwnProperty("greaterThanOrEqualsOperation")) {
                object.greaterThanOrEqualsOperation = $root.Formula.Operation.GreaterThanOrEqualsOperation.toObject(message.greaterThanOrEqualsOperation, options);
                if (options.oneofs)
                    object.op = "greaterThanOrEqualsOperation";
            }
            if (message.lessThanOperation != null && message.hasOwnProperty("lessThanOperation")) {
                object.lessThanOperation = $root.Formula.Operation.LessThanOperation.toObject(message.lessThanOperation, options);
                if (options.oneofs)
                    object.op = "lessThanOperation";
            }
            if (message.lessThanOrEqualsOperation != null && message.hasOwnProperty("lessThanOrEqualsOperation")) {
                object.lessThanOrEqualsOperation = $root.Formula.Operation.LessThanOrEqualsOperation.toObject(message.lessThanOrEqualsOperation, options);
                if (options.oneofs)
                    object.op = "lessThanOrEqualsOperation";
            }
            if (message.andOperation != null && message.hasOwnProperty("andOperation")) {
                object.andOperation = $root.Formula.Operation.AndOperation.toObject(message.andOperation, options);
                if (options.oneofs)
                    object.op = "andOperation";
            }
            if (message.orOperation != null && message.hasOwnProperty("orOperation")) {
                object.orOperation = $root.Formula.Operation.OrOperation.toObject(message.orOperation, options);
                if (options.oneofs)
                    object.op = "orOperation";
            }
            if (message.notOperation != null && message.hasOwnProperty("notOperation")) {
                object.notOperation = $root.Formula.Operation.NotOperation.toObject(message.notOperation, options);
                if (options.oneofs)
                    object.op = "notOperation";
            }
            if (message.absFunction != null && message.hasOwnProperty("absFunction")) {
                object.absFunction = $root.Formula.Operation.AbsFunction.toObject(message.absFunction, options);
                if (options.oneofs)
                    object.op = "absFunction";
            }
            if (message.minFunction != null && message.hasOwnProperty("minFunction")) {
                object.minFunction = $root.Formula.Operation.MinFunction.toObject(message.minFunction, options);
                if (options.oneofs)
                    object.op = "minFunction";
            }
            if (message.maxFunction != null && message.hasOwnProperty("maxFunction")) {
                object.maxFunction = $root.Formula.Operation.MaxFunction.toObject(message.maxFunction, options);
                if (options.oneofs)
                    object.op = "maxFunction";
            }
            if (message.floorFunction != null && message.hasOwnProperty("floorFunction")) {
                object.floorFunction = $root.Formula.Operation.FloorFunction.toObject(message.floorFunction, options);
                if (options.oneofs)
                    object.op = "floorFunction";
            }
            if (message.ceilFunction != null && message.hasOwnProperty("ceilFunction")) {
                object.ceilFunction = $root.Formula.Operation.CeilFunction.toObject(message.ceilFunction, options);
                if (options.oneofs)
                    object.op = "ceilFunction";
            }
            if (message.signedFunction != null && message.hasOwnProperty("signedFunction")) {
                object.signedFunction = $root.Formula.Operation.SignedFunction.toObject(message.signedFunction, options);
                if (options.oneofs)
                    object.op = "signedFunction";
            }
            if (message.concatFunction != null && message.hasOwnProperty("concatFunction")) {
                object.concatFunction = $root.Formula.Operation.ConcatFunction.toObject(message.concatFunction, options);
                if (options.oneofs)
                    object.op = "concatFunction";
            }
            if (message.ifFunction != null && message.hasOwnProperty("ifFunction")) {
                object.ifFunction = $root.Formula.Operation.IfFunction.toObject(message.ifFunction, options);
                if (options.oneofs)
                    object.op = "ifFunction";
            }
            return object;
        };

        /**
         * Converts this Operation to JSON.
         * @function toJSON
         * @memberof Formula.Operation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Operation
         * @function getTypeUrl
         * @memberof Formula.Operation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Operation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Formula.Operation";
        };

        Operation.VariableValue = (function() {

            /**
             * Properties of a VariableValue.
             * @memberof Formula.Operation
             * @interface IVariableValue
             * @property {string|null} [variableId] VariableValue variableId
             */

            /**
             * Constructs a new VariableValue.
             * @memberof Formula.Operation
             * @classdesc Represents a VariableValue.
             * @implements IVariableValue
             * @constructor
             * @param {Formula.Operation.IVariableValue=} [properties] Properties to set
             */
            function VariableValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VariableValue variableId.
             * @member {string} variableId
             * @memberof Formula.Operation.VariableValue
             * @instance
             */
            VariableValue.prototype.variableId = "";

            /**
             * Creates a new VariableValue instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {Formula.Operation.IVariableValue=} [properties] Properties to set
             * @returns {Formula.Operation.VariableValue} VariableValue instance
             */
            VariableValue.create = function create(properties) {
                return new VariableValue(properties);
            };

            /**
             * Encodes the specified VariableValue message. Does not implicitly {@link Formula.Operation.VariableValue.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {Formula.Operation.VariableValue} message VariableValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VariableValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.variableId != null && Object.hasOwnProperty.call(message, "variableId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.variableId);
                return writer;
            };

            /**
             * Encodes the specified VariableValue message, length delimited. Does not implicitly {@link Formula.Operation.VariableValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {Formula.Operation.VariableValue} message VariableValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VariableValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VariableValue message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.VariableValue} VariableValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VariableValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.VariableValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.variableId = reader.string();
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
             * Decodes a VariableValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.VariableValue} VariableValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VariableValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VariableValue message.
             * @function verify
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VariableValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.variableId != null && message.hasOwnProperty("variableId"))
                    if (!$util.isString(message.variableId))
                        return "variableId: string expected";
                return null;
            };

            /**
             * Creates a VariableValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.VariableValue} VariableValue
             */
            VariableValue.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.VariableValue)
                    return object;
                var message = new $root.Formula.Operation.VariableValue();
                if (object.variableId != null)
                    message.variableId = String(object.variableId);
                return message;
            };

            /**
             * Creates a plain object from a VariableValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {Formula.Operation.VariableValue} message VariableValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VariableValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.variableId = "";
                if (message.variableId != null && message.hasOwnProperty("variableId"))
                    object.variableId = message.variableId;
                return object;
            };

            /**
             * Converts this VariableValue to JSON.
             * @function toJSON
             * @memberof Formula.Operation.VariableValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VariableValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VariableValue
             * @function getTypeUrl
             * @memberof Formula.Operation.VariableValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VariableValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.VariableValue";
            };

            return VariableValue;
        })();

        Operation.AddOperation = (function() {

            /**
             * Properties of an AddOperation.
             * @memberof Formula.Operation
             * @interface IAddOperation
             * @property {Formula.Operation|null} [a] AddOperation a
             * @property {Formula.Operation|null} [b] AddOperation b
             */

            /**
             * Constructs a new AddOperation.
             * @memberof Formula.Operation
             * @classdesc Represents an AddOperation.
             * @implements IAddOperation
             * @constructor
             * @param {Formula.Operation.IAddOperation=} [properties] Properties to set
             */
            function AddOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.AddOperation
             * @instance
             */
            AddOperation.prototype.a = null;

            /**
             * AddOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.AddOperation
             * @instance
             */
            AddOperation.prototype.b = null;

            /**
             * Creates a new AddOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {Formula.Operation.IAddOperation=} [properties] Properties to set
             * @returns {Formula.Operation.AddOperation} AddOperation instance
             */
            AddOperation.create = function create(properties) {
                return new AddOperation(properties);
            };

            /**
             * Encodes the specified AddOperation message. Does not implicitly {@link Formula.Operation.AddOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {Formula.Operation.AddOperation} message AddOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AddOperation message, length delimited. Does not implicitly {@link Formula.Operation.AddOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {Formula.Operation.AddOperation} message AddOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AddOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.AddOperation} AddOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.AddOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes an AddOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.AddOperation} AddOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddOperation message.
             * @function verify
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an AddOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.AddOperation} AddOperation
             */
            AddOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.AddOperation)
                    return object;
                var message = new $root.Formula.Operation.AddOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.AddOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.AddOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an AddOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {Formula.Operation.AddOperation} message AddOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this AddOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.AddOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AddOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.AddOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AddOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.AddOperation";
            };

            return AddOperation;
        })();

        Operation.SubtractOperation = (function() {

            /**
             * Properties of a SubtractOperation.
             * @memberof Formula.Operation
             * @interface ISubtractOperation
             * @property {Formula.Operation|null} [a] SubtractOperation a
             * @property {Formula.Operation|null} [b] SubtractOperation b
             */

            /**
             * Constructs a new SubtractOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a SubtractOperation.
             * @implements ISubtractOperation
             * @constructor
             * @param {Formula.Operation.ISubtractOperation=} [properties] Properties to set
             */
            function SubtractOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SubtractOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.SubtractOperation
             * @instance
             */
            SubtractOperation.prototype.a = null;

            /**
             * SubtractOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.SubtractOperation
             * @instance
             */
            SubtractOperation.prototype.b = null;

            /**
             * Creates a new SubtractOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {Formula.Operation.ISubtractOperation=} [properties] Properties to set
             * @returns {Formula.Operation.SubtractOperation} SubtractOperation instance
             */
            SubtractOperation.create = function create(properties) {
                return new SubtractOperation(properties);
            };

            /**
             * Encodes the specified SubtractOperation message. Does not implicitly {@link Formula.Operation.SubtractOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {Formula.Operation.SubtractOperation} message SubtractOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubtractOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SubtractOperation message, length delimited. Does not implicitly {@link Formula.Operation.SubtractOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {Formula.Operation.SubtractOperation} message SubtractOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubtractOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubtractOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.SubtractOperation} SubtractOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubtractOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.SubtractOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a SubtractOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.SubtractOperation} SubtractOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubtractOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SubtractOperation message.
             * @function verify
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubtractOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a SubtractOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.SubtractOperation} SubtractOperation
             */
            SubtractOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.SubtractOperation)
                    return object;
                var message = new $root.Formula.Operation.SubtractOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.SubtractOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.SubtractOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a SubtractOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {Formula.Operation.SubtractOperation} message SubtractOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubtractOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this SubtractOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.SubtractOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubtractOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SubtractOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.SubtractOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubtractOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.SubtractOperation";
            };

            return SubtractOperation;
        })();

        Operation.MultiplyOperation = (function() {

            /**
             * Properties of a MultiplyOperation.
             * @memberof Formula.Operation
             * @interface IMultiplyOperation
             * @property {Formula.Operation|null} [a] MultiplyOperation a
             * @property {Formula.Operation|null} [b] MultiplyOperation b
             */

            /**
             * Constructs a new MultiplyOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a MultiplyOperation.
             * @implements IMultiplyOperation
             * @constructor
             * @param {Formula.Operation.IMultiplyOperation=} [properties] Properties to set
             */
            function MultiplyOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiplyOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.MultiplyOperation
             * @instance
             */
            MultiplyOperation.prototype.a = null;

            /**
             * MultiplyOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.MultiplyOperation
             * @instance
             */
            MultiplyOperation.prototype.b = null;

            /**
             * Creates a new MultiplyOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {Formula.Operation.IMultiplyOperation=} [properties] Properties to set
             * @returns {Formula.Operation.MultiplyOperation} MultiplyOperation instance
             */
            MultiplyOperation.create = function create(properties) {
                return new MultiplyOperation(properties);
            };

            /**
             * Encodes the specified MultiplyOperation message. Does not implicitly {@link Formula.Operation.MultiplyOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {Formula.Operation.MultiplyOperation} message MultiplyOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiplyOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MultiplyOperation message, length delimited. Does not implicitly {@link Formula.Operation.MultiplyOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {Formula.Operation.MultiplyOperation} message MultiplyOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiplyOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiplyOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.MultiplyOperation} MultiplyOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiplyOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.MultiplyOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a MultiplyOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.MultiplyOperation} MultiplyOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiplyOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiplyOperation message.
             * @function verify
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiplyOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a MultiplyOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.MultiplyOperation} MultiplyOperation
             */
            MultiplyOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.MultiplyOperation)
                    return object;
                var message = new $root.Formula.Operation.MultiplyOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.MultiplyOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.MultiplyOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a MultiplyOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {Formula.Operation.MultiplyOperation} message MultiplyOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiplyOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this MultiplyOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.MultiplyOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiplyOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MultiplyOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.MultiplyOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MultiplyOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.MultiplyOperation";
            };

            return MultiplyOperation;
        })();

        Operation.DivideOperation = (function() {

            /**
             * Properties of a DivideOperation.
             * @memberof Formula.Operation
             * @interface IDivideOperation
             * @property {Formula.Operation|null} [a] DivideOperation a
             * @property {Formula.Operation|null} [b] DivideOperation b
             */

            /**
             * Constructs a new DivideOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a DivideOperation.
             * @implements IDivideOperation
             * @constructor
             * @param {Formula.Operation.IDivideOperation=} [properties] Properties to set
             */
            function DivideOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DivideOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.DivideOperation
             * @instance
             */
            DivideOperation.prototype.a = null;

            /**
             * DivideOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.DivideOperation
             * @instance
             */
            DivideOperation.prototype.b = null;

            /**
             * Creates a new DivideOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {Formula.Operation.IDivideOperation=} [properties] Properties to set
             * @returns {Formula.Operation.DivideOperation} DivideOperation instance
             */
            DivideOperation.create = function create(properties) {
                return new DivideOperation(properties);
            };

            /**
             * Encodes the specified DivideOperation message. Does not implicitly {@link Formula.Operation.DivideOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {Formula.Operation.DivideOperation} message DivideOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DivideOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DivideOperation message, length delimited. Does not implicitly {@link Formula.Operation.DivideOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {Formula.Operation.DivideOperation} message DivideOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DivideOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DivideOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.DivideOperation} DivideOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DivideOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.DivideOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a DivideOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.DivideOperation} DivideOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DivideOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DivideOperation message.
             * @function verify
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DivideOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a DivideOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.DivideOperation} DivideOperation
             */
            DivideOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.DivideOperation)
                    return object;
                var message = new $root.Formula.Operation.DivideOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.DivideOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.DivideOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a DivideOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {Formula.Operation.DivideOperation} message DivideOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DivideOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this DivideOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.DivideOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DivideOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DivideOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.DivideOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DivideOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.DivideOperation";
            };

            return DivideOperation;
        })();

        Operation.EqualsOperation = (function() {

            /**
             * Properties of an EqualsOperation.
             * @memberof Formula.Operation
             * @interface IEqualsOperation
             * @property {Formula.Operation|null} [a] EqualsOperation a
             * @property {Formula.Operation|null} [b] EqualsOperation b
             */

            /**
             * Constructs a new EqualsOperation.
             * @memberof Formula.Operation
             * @classdesc Represents an EqualsOperation.
             * @implements IEqualsOperation
             * @constructor
             * @param {Formula.Operation.IEqualsOperation=} [properties] Properties to set
             */
            function EqualsOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EqualsOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.EqualsOperation
             * @instance
             */
            EqualsOperation.prototype.a = null;

            /**
             * EqualsOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.EqualsOperation
             * @instance
             */
            EqualsOperation.prototype.b = null;

            /**
             * Creates a new EqualsOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {Formula.Operation.IEqualsOperation=} [properties] Properties to set
             * @returns {Formula.Operation.EqualsOperation} EqualsOperation instance
             */
            EqualsOperation.create = function create(properties) {
                return new EqualsOperation(properties);
            };

            /**
             * Encodes the specified EqualsOperation message. Does not implicitly {@link Formula.Operation.EqualsOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {Formula.Operation.EqualsOperation} message EqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EqualsOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.EqualsOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {Formula.Operation.EqualsOperation} message EqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EqualsOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EqualsOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.EqualsOperation} EqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EqualsOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.EqualsOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes an EqualsOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.EqualsOperation} EqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EqualsOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EqualsOperation message.
             * @function verify
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EqualsOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an EqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.EqualsOperation} EqualsOperation
             */
            EqualsOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.EqualsOperation)
                    return object;
                var message = new $root.Formula.Operation.EqualsOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.EqualsOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.EqualsOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an EqualsOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {Formula.Operation.EqualsOperation} message EqualsOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EqualsOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this EqualsOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.EqualsOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EqualsOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EqualsOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.EqualsOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EqualsOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.EqualsOperation";
            };

            return EqualsOperation;
        })();

        Operation.NotEqualsOperation = (function() {

            /**
             * Properties of a NotEqualsOperation.
             * @memberof Formula.Operation
             * @interface INotEqualsOperation
             * @property {Formula.Operation|null} [a] NotEqualsOperation a
             * @property {Formula.Operation|null} [b] NotEqualsOperation b
             */

            /**
             * Constructs a new NotEqualsOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a NotEqualsOperation.
             * @implements INotEqualsOperation
             * @constructor
             * @param {Formula.Operation.INotEqualsOperation=} [properties] Properties to set
             */
            function NotEqualsOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotEqualsOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.NotEqualsOperation
             * @instance
             */
            NotEqualsOperation.prototype.a = null;

            /**
             * NotEqualsOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.NotEqualsOperation
             * @instance
             */
            NotEqualsOperation.prototype.b = null;

            /**
             * Creates a new NotEqualsOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {Formula.Operation.INotEqualsOperation=} [properties] Properties to set
             * @returns {Formula.Operation.NotEqualsOperation} NotEqualsOperation instance
             */
            NotEqualsOperation.create = function create(properties) {
                return new NotEqualsOperation(properties);
            };

            /**
             * Encodes the specified NotEqualsOperation message. Does not implicitly {@link Formula.Operation.NotEqualsOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {Formula.Operation.NotEqualsOperation} message NotEqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotEqualsOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NotEqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.NotEqualsOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {Formula.Operation.NotEqualsOperation} message NotEqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotEqualsOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotEqualsOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.NotEqualsOperation} NotEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotEqualsOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.NotEqualsOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a NotEqualsOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.NotEqualsOperation} NotEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotEqualsOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotEqualsOperation message.
             * @function verify
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotEqualsOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a NotEqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.NotEqualsOperation} NotEqualsOperation
             */
            NotEqualsOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.NotEqualsOperation)
                    return object;
                var message = new $root.Formula.Operation.NotEqualsOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.NotEqualsOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.NotEqualsOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a NotEqualsOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {Formula.Operation.NotEqualsOperation} message NotEqualsOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotEqualsOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this NotEqualsOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.NotEqualsOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotEqualsOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NotEqualsOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.NotEqualsOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NotEqualsOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.NotEqualsOperation";
            };

            return NotEqualsOperation;
        })();

        Operation.GreaterThanOperation = (function() {

            /**
             * Properties of a GreaterThanOperation.
             * @memberof Formula.Operation
             * @interface IGreaterThanOperation
             * @property {Formula.Operation|null} [a] GreaterThanOperation a
             * @property {Formula.Operation|null} [b] GreaterThanOperation b
             */

            /**
             * Constructs a new GreaterThanOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a GreaterThanOperation.
             * @implements IGreaterThanOperation
             * @constructor
             * @param {Formula.Operation.IGreaterThanOperation=} [properties] Properties to set
             */
            function GreaterThanOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GreaterThanOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.GreaterThanOperation
             * @instance
             */
            GreaterThanOperation.prototype.a = null;

            /**
             * GreaterThanOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.GreaterThanOperation
             * @instance
             */
            GreaterThanOperation.prototype.b = null;

            /**
             * Creates a new GreaterThanOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {Formula.Operation.IGreaterThanOperation=} [properties] Properties to set
             * @returns {Formula.Operation.GreaterThanOperation} GreaterThanOperation instance
             */
            GreaterThanOperation.create = function create(properties) {
                return new GreaterThanOperation(properties);
            };

            /**
             * Encodes the specified GreaterThanOperation message. Does not implicitly {@link Formula.Operation.GreaterThanOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {Formula.Operation.GreaterThanOperation} message GreaterThanOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GreaterThanOperation message, length delimited. Does not implicitly {@link Formula.Operation.GreaterThanOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {Formula.Operation.GreaterThanOperation} message GreaterThanOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GreaterThanOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.GreaterThanOperation} GreaterThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.GreaterThanOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a GreaterThanOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.GreaterThanOperation} GreaterThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GreaterThanOperation message.
             * @function verify
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GreaterThanOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a GreaterThanOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.GreaterThanOperation} GreaterThanOperation
             */
            GreaterThanOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.GreaterThanOperation)
                    return object;
                var message = new $root.Formula.Operation.GreaterThanOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.GreaterThanOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.GreaterThanOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a GreaterThanOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {Formula.Operation.GreaterThanOperation} message GreaterThanOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GreaterThanOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this GreaterThanOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.GreaterThanOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GreaterThanOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GreaterThanOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.GreaterThanOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GreaterThanOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.GreaterThanOperation";
            };

            return GreaterThanOperation;
        })();

        Operation.GreaterThanOrEqualsOperation = (function() {

            /**
             * Properties of a GreaterThanOrEqualsOperation.
             * @memberof Formula.Operation
             * @interface IGreaterThanOrEqualsOperation
             * @property {Formula.Operation|null} [a] GreaterThanOrEqualsOperation a
             * @property {Formula.Operation|null} [b] GreaterThanOrEqualsOperation b
             */

            /**
             * Constructs a new GreaterThanOrEqualsOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a GreaterThanOrEqualsOperation.
             * @implements IGreaterThanOrEqualsOperation
             * @constructor
             * @param {Formula.Operation.IGreaterThanOrEqualsOperation=} [properties] Properties to set
             */
            function GreaterThanOrEqualsOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GreaterThanOrEqualsOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @instance
             */
            GreaterThanOrEqualsOperation.prototype.a = null;

            /**
             * GreaterThanOrEqualsOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @instance
             */
            GreaterThanOrEqualsOperation.prototype.b = null;

            /**
             * Creates a new GreaterThanOrEqualsOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.IGreaterThanOrEqualsOperation=} [properties] Properties to set
             * @returns {Formula.Operation.GreaterThanOrEqualsOperation} GreaterThanOrEqualsOperation instance
             */
            GreaterThanOrEqualsOperation.create = function create(properties) {
                return new GreaterThanOrEqualsOperation(properties);
            };

            /**
             * Encodes the specified GreaterThanOrEqualsOperation message. Does not implicitly {@link Formula.Operation.GreaterThanOrEqualsOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.GreaterThanOrEqualsOperation} message GreaterThanOrEqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOrEqualsOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GreaterThanOrEqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.GreaterThanOrEqualsOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.GreaterThanOrEqualsOperation} message GreaterThanOrEqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOrEqualsOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GreaterThanOrEqualsOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.GreaterThanOrEqualsOperation} GreaterThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOrEqualsOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.GreaterThanOrEqualsOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a GreaterThanOrEqualsOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.GreaterThanOrEqualsOperation} GreaterThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOrEqualsOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GreaterThanOrEqualsOperation message.
             * @function verify
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GreaterThanOrEqualsOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a GreaterThanOrEqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.GreaterThanOrEqualsOperation} GreaterThanOrEqualsOperation
             */
            GreaterThanOrEqualsOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.GreaterThanOrEqualsOperation)
                    return object;
                var message = new $root.Formula.Operation.GreaterThanOrEqualsOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.GreaterThanOrEqualsOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.GreaterThanOrEqualsOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a GreaterThanOrEqualsOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.GreaterThanOrEqualsOperation} message GreaterThanOrEqualsOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GreaterThanOrEqualsOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this GreaterThanOrEqualsOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GreaterThanOrEqualsOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GreaterThanOrEqualsOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.GreaterThanOrEqualsOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GreaterThanOrEqualsOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.GreaterThanOrEqualsOperation";
            };

            return GreaterThanOrEqualsOperation;
        })();

        Operation.LessThanOperation = (function() {

            /**
             * Properties of a LessThanOperation.
             * @memberof Formula.Operation
             * @interface ILessThanOperation
             * @property {Formula.Operation|null} [a] LessThanOperation a
             * @property {Formula.Operation|null} [b] LessThanOperation b
             */

            /**
             * Constructs a new LessThanOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a LessThanOperation.
             * @implements ILessThanOperation
             * @constructor
             * @param {Formula.Operation.ILessThanOperation=} [properties] Properties to set
             */
            function LessThanOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LessThanOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.LessThanOperation
             * @instance
             */
            LessThanOperation.prototype.a = null;

            /**
             * LessThanOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.LessThanOperation
             * @instance
             */
            LessThanOperation.prototype.b = null;

            /**
             * Creates a new LessThanOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {Formula.Operation.ILessThanOperation=} [properties] Properties to set
             * @returns {Formula.Operation.LessThanOperation} LessThanOperation instance
             */
            LessThanOperation.create = function create(properties) {
                return new LessThanOperation(properties);
            };

            /**
             * Encodes the specified LessThanOperation message. Does not implicitly {@link Formula.Operation.LessThanOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {Formula.Operation.LessThanOperation} message LessThanOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LessThanOperation message, length delimited. Does not implicitly {@link Formula.Operation.LessThanOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {Formula.Operation.LessThanOperation} message LessThanOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LessThanOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.LessThanOperation} LessThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.LessThanOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a LessThanOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.LessThanOperation} LessThanOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LessThanOperation message.
             * @function verify
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LessThanOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a LessThanOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.LessThanOperation} LessThanOperation
             */
            LessThanOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.LessThanOperation)
                    return object;
                var message = new $root.Formula.Operation.LessThanOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.LessThanOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.LessThanOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a LessThanOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {Formula.Operation.LessThanOperation} message LessThanOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LessThanOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this LessThanOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.LessThanOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LessThanOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LessThanOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.LessThanOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LessThanOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.LessThanOperation";
            };

            return LessThanOperation;
        })();

        Operation.LessThanOrEqualsOperation = (function() {

            /**
             * Properties of a LessThanOrEqualsOperation.
             * @memberof Formula.Operation
             * @interface ILessThanOrEqualsOperation
             * @property {Formula.Operation|null} [a] LessThanOrEqualsOperation a
             * @property {Formula.Operation|null} [b] LessThanOrEqualsOperation b
             */

            /**
             * Constructs a new LessThanOrEqualsOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a LessThanOrEqualsOperation.
             * @implements ILessThanOrEqualsOperation
             * @constructor
             * @param {Formula.Operation.ILessThanOrEqualsOperation=} [properties] Properties to set
             */
            function LessThanOrEqualsOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LessThanOrEqualsOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @instance
             */
            LessThanOrEqualsOperation.prototype.a = null;

            /**
             * LessThanOrEqualsOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @instance
             */
            LessThanOrEqualsOperation.prototype.b = null;

            /**
             * Creates a new LessThanOrEqualsOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.ILessThanOrEqualsOperation=} [properties] Properties to set
             * @returns {Formula.Operation.LessThanOrEqualsOperation} LessThanOrEqualsOperation instance
             */
            LessThanOrEqualsOperation.create = function create(properties) {
                return new LessThanOrEqualsOperation(properties);
            };

            /**
             * Encodes the specified LessThanOrEqualsOperation message. Does not implicitly {@link Formula.Operation.LessThanOrEqualsOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.LessThanOrEqualsOperation} message LessThanOrEqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOrEqualsOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LessThanOrEqualsOperation message, length delimited. Does not implicitly {@link Formula.Operation.LessThanOrEqualsOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.LessThanOrEqualsOperation} message LessThanOrEqualsOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOrEqualsOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LessThanOrEqualsOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.LessThanOrEqualsOperation} LessThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOrEqualsOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.LessThanOrEqualsOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a LessThanOrEqualsOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.LessThanOrEqualsOperation} LessThanOrEqualsOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOrEqualsOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LessThanOrEqualsOperation message.
             * @function verify
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LessThanOrEqualsOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a LessThanOrEqualsOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.LessThanOrEqualsOperation} LessThanOrEqualsOperation
             */
            LessThanOrEqualsOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.LessThanOrEqualsOperation)
                    return object;
                var message = new $root.Formula.Operation.LessThanOrEqualsOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.LessThanOrEqualsOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.LessThanOrEqualsOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a LessThanOrEqualsOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {Formula.Operation.LessThanOrEqualsOperation} message LessThanOrEqualsOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LessThanOrEqualsOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this LessThanOrEqualsOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LessThanOrEqualsOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LessThanOrEqualsOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.LessThanOrEqualsOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LessThanOrEqualsOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.LessThanOrEqualsOperation";
            };

            return LessThanOrEqualsOperation;
        })();

        Operation.AndOperation = (function() {

            /**
             * Properties of an AndOperation.
             * @memberof Formula.Operation
             * @interface IAndOperation
             * @property {Formula.Operation|null} [a] AndOperation a
             * @property {Formula.Operation|null} [b] AndOperation b
             */

            /**
             * Constructs a new AndOperation.
             * @memberof Formula.Operation
             * @classdesc Represents an AndOperation.
             * @implements IAndOperation
             * @constructor
             * @param {Formula.Operation.IAndOperation=} [properties] Properties to set
             */
            function AndOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AndOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.AndOperation
             * @instance
             */
            AndOperation.prototype.a = null;

            /**
             * AndOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.AndOperation
             * @instance
             */
            AndOperation.prototype.b = null;

            /**
             * Creates a new AndOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {Formula.Operation.IAndOperation=} [properties] Properties to set
             * @returns {Formula.Operation.AndOperation} AndOperation instance
             */
            AndOperation.create = function create(properties) {
                return new AndOperation(properties);
            };

            /**
             * Encodes the specified AndOperation message. Does not implicitly {@link Formula.Operation.AndOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {Formula.Operation.AndOperation} message AndOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AndOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AndOperation message, length delimited. Does not implicitly {@link Formula.Operation.AndOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {Formula.Operation.AndOperation} message AndOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AndOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AndOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.AndOperation} AndOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AndOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.AndOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes an AndOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.AndOperation} AndOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AndOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AndOperation message.
             * @function verify
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AndOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an AndOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.AndOperation} AndOperation
             */
            AndOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.AndOperation)
                    return object;
                var message = new $root.Formula.Operation.AndOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.AndOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.AndOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an AndOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {Formula.Operation.AndOperation} message AndOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AndOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this AndOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.AndOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AndOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AndOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.AndOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AndOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.AndOperation";
            };

            return AndOperation;
        })();

        Operation.OrOperation = (function() {

            /**
             * Properties of an OrOperation.
             * @memberof Formula.Operation
             * @interface IOrOperation
             * @property {Formula.Operation|null} [a] OrOperation a
             * @property {Formula.Operation|null} [b] OrOperation b
             */

            /**
             * Constructs a new OrOperation.
             * @memberof Formula.Operation
             * @classdesc Represents an OrOperation.
             * @implements IOrOperation
             * @constructor
             * @param {Formula.Operation.IOrOperation=} [properties] Properties to set
             */
            function OrOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OrOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.OrOperation
             * @instance
             */
            OrOperation.prototype.a = null;

            /**
             * OrOperation b.
             * @member {Formula.Operation|null|undefined} b
             * @memberof Formula.Operation.OrOperation
             * @instance
             */
            OrOperation.prototype.b = null;

            /**
             * Creates a new OrOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {Formula.Operation.IOrOperation=} [properties] Properties to set
             * @returns {Formula.Operation.OrOperation} OrOperation instance
             */
            OrOperation.create = function create(properties) {
                return new OrOperation(properties);
            };

            /**
             * Encodes the specified OrOperation message. Does not implicitly {@link Formula.Operation.OrOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {Formula.Operation.OrOperation} message OrOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.Formula.Operation.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OrOperation message, length delimited. Does not implicitly {@link Formula.Operation.OrOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {Formula.Operation.OrOperation} message OrOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OrOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.OrOperation} OrOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.OrOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes an OrOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.OrOperation} OrOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OrOperation message.
             * @function verify
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OrOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.Formula.Operation.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an OrOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.OrOperation} OrOperation
             */
            OrOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.OrOperation)
                    return object;
                var message = new $root.Formula.Operation.OrOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.OrOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".Formula.Operation.OrOperation.b: object expected");
                    message.b = $root.Formula.Operation.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an OrOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {Formula.Operation.OrOperation} message OrOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OrOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.Formula.Operation.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this OrOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.OrOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OrOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OrOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.OrOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OrOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.OrOperation";
            };

            return OrOperation;
        })();

        Operation.NotOperation = (function() {

            /**
             * Properties of a NotOperation.
             * @memberof Formula.Operation
             * @interface INotOperation
             * @property {Formula.Operation|null} [a] NotOperation a
             */

            /**
             * Constructs a new NotOperation.
             * @memberof Formula.Operation
             * @classdesc Represents a NotOperation.
             * @implements INotOperation
             * @constructor
             * @param {Formula.Operation.INotOperation=} [properties] Properties to set
             */
            function NotOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotOperation a.
             * @member {Formula.Operation|null|undefined} a
             * @memberof Formula.Operation.NotOperation
             * @instance
             */
            NotOperation.prototype.a = null;

            /**
             * Creates a new NotOperation instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {Formula.Operation.INotOperation=} [properties] Properties to set
             * @returns {Formula.Operation.NotOperation} NotOperation instance
             */
            NotOperation.create = function create(properties) {
                return new NotOperation(properties);
            };

            /**
             * Encodes the specified NotOperation message. Does not implicitly {@link Formula.Operation.NotOperation.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {Formula.Operation.NotOperation} message NotOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.Formula.Operation.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NotOperation message, length delimited. Does not implicitly {@link Formula.Operation.NotOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {Formula.Operation.NotOperation} message NotOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.NotOperation} NotOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.NotOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a NotOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.NotOperation} NotOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotOperation message.
             * @function verify
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.Formula.Operation.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                return null;
            };

            /**
             * Creates a NotOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.NotOperation} NotOperation
             */
            NotOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.NotOperation)
                    return object;
                var message = new $root.Formula.Operation.NotOperation();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".Formula.Operation.NotOperation.a: object expected");
                    message.a = $root.Formula.Operation.fromObject(object.a);
                }
                return message;
            };

            /**
             * Creates a plain object from a NotOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {Formula.Operation.NotOperation} message NotOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.a = null;
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.Formula.Operation.toObject(message.a, options);
                return object;
            };

            /**
             * Converts this NotOperation to JSON.
             * @function toJSON
             * @memberof Formula.Operation.NotOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NotOperation
             * @function getTypeUrl
             * @memberof Formula.Operation.NotOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NotOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.NotOperation";
            };

            return NotOperation;
        })();

        Operation.AbsFunction = (function() {

            /**
             * Properties of an AbsFunction.
             * @memberof Formula.Operation
             * @interface IAbsFunction
             * @property {Formula.Operation|null} [param] AbsFunction param
             */

            /**
             * Constructs a new AbsFunction.
             * @memberof Formula.Operation
             * @classdesc Represents an AbsFunction.
             * @implements IAbsFunction
             * @constructor
             * @param {Formula.Operation.IAbsFunction=} [properties] Properties to set
             */
            function AbsFunction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AbsFunction param.
             * @member {Formula.Operation|null|undefined} param
             * @memberof Formula.Operation.AbsFunction
             * @instance
             */
            AbsFunction.prototype.param = null;

            /**
             * Creates a new AbsFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {Formula.Operation.IAbsFunction=} [properties] Properties to set
             * @returns {Formula.Operation.AbsFunction} AbsFunction instance
             */
            AbsFunction.create = function create(properties) {
                return new AbsFunction(properties);
            };

            /**
             * Encodes the specified AbsFunction message. Does not implicitly {@link Formula.Operation.AbsFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {Formula.Operation.AbsFunction} message AbsFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbsFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.Formula.Operation.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AbsFunction message, length delimited. Does not implicitly {@link Formula.Operation.AbsFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {Formula.Operation.AbsFunction} message AbsFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbsFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AbsFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.AbsFunction} AbsFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbsFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.AbsFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes an AbsFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.AbsFunction} AbsFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbsFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AbsFunction message.
             * @function verify
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AbsFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.Formula.Operation.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates an AbsFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.AbsFunction} AbsFunction
             */
            AbsFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.AbsFunction)
                    return object;
                var message = new $root.Formula.Operation.AbsFunction();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".Formula.Operation.AbsFunction.param: object expected");
                    message.param = $root.Formula.Operation.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from an AbsFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {Formula.Operation.AbsFunction} message AbsFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AbsFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.Formula.Operation.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this AbsFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.AbsFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AbsFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AbsFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.AbsFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AbsFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.AbsFunction";
            };

            return AbsFunction;
        })();

        Operation.MinFunction = (function() {

            /**
             * Properties of a MinFunction.
             * @memberof Formula.Operation
             * @interface IMinFunction
             * @property {Formula.Operation|null} [param] MinFunction param
             */

            /**
             * Constructs a new MinFunction.
             * @memberof Formula.Operation
             * @classdesc Represents a MinFunction.
             * @implements IMinFunction
             * @constructor
             * @param {Formula.Operation.IMinFunction=} [properties] Properties to set
             */
            function MinFunction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MinFunction param.
             * @member {Formula.Operation|null|undefined} param
             * @memberof Formula.Operation.MinFunction
             * @instance
             */
            MinFunction.prototype.param = null;

            /**
             * Creates a new MinFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {Formula.Operation.IMinFunction=} [properties] Properties to set
             * @returns {Formula.Operation.MinFunction} MinFunction instance
             */
            MinFunction.create = function create(properties) {
                return new MinFunction(properties);
            };

            /**
             * Encodes the specified MinFunction message. Does not implicitly {@link Formula.Operation.MinFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {Formula.Operation.MinFunction} message MinFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.Formula.Operation.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MinFunction message, length delimited. Does not implicitly {@link Formula.Operation.MinFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {Formula.Operation.MinFunction} message MinFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MinFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.MinFunction} MinFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.MinFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a MinFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.MinFunction} MinFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MinFunction message.
             * @function verify
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MinFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.Formula.Operation.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a MinFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.MinFunction} MinFunction
             */
            MinFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.MinFunction)
                    return object;
                var message = new $root.Formula.Operation.MinFunction();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".Formula.Operation.MinFunction.param: object expected");
                    message.param = $root.Formula.Operation.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a MinFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {Formula.Operation.MinFunction} message MinFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MinFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.Formula.Operation.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this MinFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.MinFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MinFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MinFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.MinFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MinFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.MinFunction";
            };

            return MinFunction;
        })();

        Operation.MaxFunction = (function() {

            /**
             * Properties of a MaxFunction.
             * @memberof Formula.Operation
             * @interface IMaxFunction
             * @property {Formula.Operation|null} [param] MaxFunction param
             */

            /**
             * Constructs a new MaxFunction.
             * @memberof Formula.Operation
             * @classdesc Represents a MaxFunction.
             * @implements IMaxFunction
             * @constructor
             * @param {Formula.Operation.IMaxFunction=} [properties] Properties to set
             */
            function MaxFunction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MaxFunction param.
             * @member {Formula.Operation|null|undefined} param
             * @memberof Formula.Operation.MaxFunction
             * @instance
             */
            MaxFunction.prototype.param = null;

            /**
             * Creates a new MaxFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {Formula.Operation.IMaxFunction=} [properties] Properties to set
             * @returns {Formula.Operation.MaxFunction} MaxFunction instance
             */
            MaxFunction.create = function create(properties) {
                return new MaxFunction(properties);
            };

            /**
             * Encodes the specified MaxFunction message. Does not implicitly {@link Formula.Operation.MaxFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {Formula.Operation.MaxFunction} message MaxFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MaxFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.Formula.Operation.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MaxFunction message, length delimited. Does not implicitly {@link Formula.Operation.MaxFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {Formula.Operation.MaxFunction} message MaxFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MaxFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MaxFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.MaxFunction} MaxFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MaxFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.MaxFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a MaxFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.MaxFunction} MaxFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MaxFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MaxFunction message.
             * @function verify
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MaxFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.Formula.Operation.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a MaxFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.MaxFunction} MaxFunction
             */
            MaxFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.MaxFunction)
                    return object;
                var message = new $root.Formula.Operation.MaxFunction();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".Formula.Operation.MaxFunction.param: object expected");
                    message.param = $root.Formula.Operation.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a MaxFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {Formula.Operation.MaxFunction} message MaxFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MaxFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.Formula.Operation.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this MaxFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.MaxFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MaxFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MaxFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.MaxFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MaxFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.MaxFunction";
            };

            return MaxFunction;
        })();

        Operation.FloorFunction = (function() {

            /**
             * Properties of a FloorFunction.
             * @memberof Formula.Operation
             * @interface IFloorFunction
             * @property {Formula.Operation|null} [param] FloorFunction param
             */

            /**
             * Constructs a new FloorFunction.
             * @memberof Formula.Operation
             * @classdesc Represents a FloorFunction.
             * @implements IFloorFunction
             * @constructor
             * @param {Formula.Operation.IFloorFunction=} [properties] Properties to set
             */
            function FloorFunction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloorFunction param.
             * @member {Formula.Operation|null|undefined} param
             * @memberof Formula.Operation.FloorFunction
             * @instance
             */
            FloorFunction.prototype.param = null;

            /**
             * Creates a new FloorFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {Formula.Operation.IFloorFunction=} [properties] Properties to set
             * @returns {Formula.Operation.FloorFunction} FloorFunction instance
             */
            FloorFunction.create = function create(properties) {
                return new FloorFunction(properties);
            };

            /**
             * Encodes the specified FloorFunction message. Does not implicitly {@link Formula.Operation.FloorFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {Formula.Operation.FloorFunction} message FloorFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloorFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.Formula.Operation.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FloorFunction message, length delimited. Does not implicitly {@link Formula.Operation.FloorFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {Formula.Operation.FloorFunction} message FloorFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloorFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloorFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.FloorFunction} FloorFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloorFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.FloorFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a FloorFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.FloorFunction} FloorFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloorFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloorFunction message.
             * @function verify
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloorFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.Formula.Operation.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a FloorFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.FloorFunction} FloorFunction
             */
            FloorFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.FloorFunction)
                    return object;
                var message = new $root.Formula.Operation.FloorFunction();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".Formula.Operation.FloorFunction.param: object expected");
                    message.param = $root.Formula.Operation.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a FloorFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {Formula.Operation.FloorFunction} message FloorFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloorFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.Formula.Operation.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this FloorFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.FloorFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloorFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloorFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.FloorFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloorFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.FloorFunction";
            };

            return FloorFunction;
        })();

        Operation.CeilFunction = (function() {

            /**
             * Properties of a CeilFunction.
             * @memberof Formula.Operation
             * @interface ICeilFunction
             * @property {Formula.Operation|null} [param] CeilFunction param
             */

            /**
             * Constructs a new CeilFunction.
             * @memberof Formula.Operation
             * @classdesc Represents a CeilFunction.
             * @implements ICeilFunction
             * @constructor
             * @param {Formula.Operation.ICeilFunction=} [properties] Properties to set
             */
            function CeilFunction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CeilFunction param.
             * @member {Formula.Operation|null|undefined} param
             * @memberof Formula.Operation.CeilFunction
             * @instance
             */
            CeilFunction.prototype.param = null;

            /**
             * Creates a new CeilFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {Formula.Operation.ICeilFunction=} [properties] Properties to set
             * @returns {Formula.Operation.CeilFunction} CeilFunction instance
             */
            CeilFunction.create = function create(properties) {
                return new CeilFunction(properties);
            };

            /**
             * Encodes the specified CeilFunction message. Does not implicitly {@link Formula.Operation.CeilFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {Formula.Operation.CeilFunction} message CeilFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CeilFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.Formula.Operation.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CeilFunction message, length delimited. Does not implicitly {@link Formula.Operation.CeilFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {Formula.Operation.CeilFunction} message CeilFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CeilFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CeilFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.CeilFunction} CeilFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CeilFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.CeilFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a CeilFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.CeilFunction} CeilFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CeilFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CeilFunction message.
             * @function verify
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CeilFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.Formula.Operation.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a CeilFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.CeilFunction} CeilFunction
             */
            CeilFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.CeilFunction)
                    return object;
                var message = new $root.Formula.Operation.CeilFunction();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".Formula.Operation.CeilFunction.param: object expected");
                    message.param = $root.Formula.Operation.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a CeilFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {Formula.Operation.CeilFunction} message CeilFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CeilFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.Formula.Operation.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this CeilFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.CeilFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CeilFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CeilFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.CeilFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CeilFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.CeilFunction";
            };

            return CeilFunction;
        })();

        Operation.SignedFunction = (function() {

            /**
             * Properties of a SignedFunction.
             * @memberof Formula.Operation
             * @interface ISignedFunction
             * @property {Formula.Operation|null} [param] SignedFunction param
             */

            /**
             * Constructs a new SignedFunction.
             * @memberof Formula.Operation
             * @classdesc Represents a SignedFunction.
             * @implements ISignedFunction
             * @constructor
             * @param {Formula.Operation.ISignedFunction=} [properties] Properties to set
             */
            function SignedFunction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignedFunction param.
             * @member {Formula.Operation|null|undefined} param
             * @memberof Formula.Operation.SignedFunction
             * @instance
             */
            SignedFunction.prototype.param = null;

            /**
             * Creates a new SignedFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {Formula.Operation.ISignedFunction=} [properties] Properties to set
             * @returns {Formula.Operation.SignedFunction} SignedFunction instance
             */
            SignedFunction.create = function create(properties) {
                return new SignedFunction(properties);
            };

            /**
             * Encodes the specified SignedFunction message. Does not implicitly {@link Formula.Operation.SignedFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {Formula.Operation.SignedFunction} message SignedFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.Formula.Operation.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SignedFunction message, length delimited. Does not implicitly {@link Formula.Operation.SignedFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {Formula.Operation.SignedFunction} message SignedFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignedFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.SignedFunction} SignedFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.SignedFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes a SignedFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.SignedFunction} SignedFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignedFunction message.
             * @function verify
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignedFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.Formula.Operation.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a SignedFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.SignedFunction} SignedFunction
             */
            SignedFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.SignedFunction)
                    return object;
                var message = new $root.Formula.Operation.SignedFunction();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".Formula.Operation.SignedFunction.param: object expected");
                    message.param = $root.Formula.Operation.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a SignedFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {Formula.Operation.SignedFunction} message SignedFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignedFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.Formula.Operation.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this SignedFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.SignedFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignedFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignedFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.SignedFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignedFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.SignedFunction";
            };

            return SignedFunction;
        })();

        Operation.ConcatFunction = (function() {

            /**
             * Properties of a ConcatFunction.
             * @memberof Formula.Operation
             * @interface IConcatFunction
             * @property {Array.<Formula.Operation>|null} [params] ConcatFunction params
             */

            /**
             * Constructs a new ConcatFunction.
             * @memberof Formula.Operation
             * @classdesc Represents a ConcatFunction.
             * @implements IConcatFunction
             * @constructor
             * @param {Formula.Operation.IConcatFunction=} [properties] Properties to set
             */
            function ConcatFunction(properties) {
                this.params = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConcatFunction params.
             * @member {Array.<Formula.Operation>} params
             * @memberof Formula.Operation.ConcatFunction
             * @instance
             */
            ConcatFunction.prototype.params = $util.emptyArray;

            /**
             * Creates a new ConcatFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {Formula.Operation.IConcatFunction=} [properties] Properties to set
             * @returns {Formula.Operation.ConcatFunction} ConcatFunction instance
             */
            ConcatFunction.create = function create(properties) {
                return new ConcatFunction(properties);
            };

            /**
             * Encodes the specified ConcatFunction message. Does not implicitly {@link Formula.Operation.ConcatFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {Formula.Operation.ConcatFunction} message ConcatFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConcatFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.params != null && message.params.length)
                    for (var i = 0; i < message.params.length; ++i)
                        $root.Formula.Operation.encode(message.params[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ConcatFunction message, length delimited. Does not implicitly {@link Formula.Operation.ConcatFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {Formula.Operation.ConcatFunction} message ConcatFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConcatFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConcatFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.ConcatFunction} ConcatFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConcatFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.ConcatFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.params && message.params.length))
                                message.params = [];
                            message.params.push($root.Formula.Operation.decode(reader, reader.uint32()));
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
             * Decodes a ConcatFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.ConcatFunction} ConcatFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConcatFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConcatFunction message.
             * @function verify
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConcatFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.params != null && message.hasOwnProperty("params")) {
                    if (!Array.isArray(message.params))
                        return "params: array expected";
                    for (var i = 0; i < message.params.length; ++i) {
                        var error = $root.Formula.Operation.verify(message.params[i]);
                        if (error)
                            return "params." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ConcatFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.ConcatFunction} ConcatFunction
             */
            ConcatFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.ConcatFunction)
                    return object;
                var message = new $root.Formula.Operation.ConcatFunction();
                if (object.params) {
                    if (!Array.isArray(object.params))
                        throw TypeError(".Formula.Operation.ConcatFunction.params: array expected");
                    message.params = [];
                    for (var i = 0; i < object.params.length; ++i) {
                        if (typeof object.params[i] !== "object")
                            throw TypeError(".Formula.Operation.ConcatFunction.params: object expected");
                        message.params[i] = $root.Formula.Operation.fromObject(object.params[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ConcatFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {Formula.Operation.ConcatFunction} message ConcatFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConcatFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.params = [];
                if (message.params && message.params.length) {
                    object.params = [];
                    for (var j = 0; j < message.params.length; ++j)
                        object.params[j] = $root.Formula.Operation.toObject(message.params[j], options);
                }
                return object;
            };

            /**
             * Converts this ConcatFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.ConcatFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConcatFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConcatFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.ConcatFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConcatFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.ConcatFunction";
            };

            return ConcatFunction;
        })();

        Operation.IfFunction = (function() {

            /**
             * Properties of an IfFunction.
             * @memberof Formula.Operation
             * @interface IIfFunction
             * @property {Formula.Operation|null} [condition] IfFunction condition
             * @property {Formula.Operation|null} [whenTrue] IfFunction whenTrue
             * @property {Formula.Operation|null} [whenFalse] IfFunction whenFalse
             */

            /**
             * Constructs a new IfFunction.
             * @memberof Formula.Operation
             * @classdesc Represents an IfFunction.
             * @implements IIfFunction
             * @constructor
             * @param {Formula.Operation.IIfFunction=} [properties] Properties to set
             */
            function IfFunction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IfFunction condition.
             * @member {Formula.Operation|null|undefined} condition
             * @memberof Formula.Operation.IfFunction
             * @instance
             */
            IfFunction.prototype.condition = null;

            /**
             * IfFunction whenTrue.
             * @member {Formula.Operation|null|undefined} whenTrue
             * @memberof Formula.Operation.IfFunction
             * @instance
             */
            IfFunction.prototype.whenTrue = null;

            /**
             * IfFunction whenFalse.
             * @member {Formula.Operation|null|undefined} whenFalse
             * @memberof Formula.Operation.IfFunction
             * @instance
             */
            IfFunction.prototype.whenFalse = null;

            /**
             * Creates a new IfFunction instance using the specified properties.
             * @function create
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {Formula.Operation.IIfFunction=} [properties] Properties to set
             * @returns {Formula.Operation.IfFunction} IfFunction instance
             */
            IfFunction.create = function create(properties) {
                return new IfFunction(properties);
            };

            /**
             * Encodes the specified IfFunction message. Does not implicitly {@link Formula.Operation.IfFunction.verify|verify} messages.
             * @function encode
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {Formula.Operation.IfFunction} message IfFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IfFunction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                    $root.Formula.Operation.encode(message.condition, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.whenTrue != null && Object.hasOwnProperty.call(message, "whenTrue"))
                    $root.Formula.Operation.encode(message.whenTrue, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.whenFalse != null && Object.hasOwnProperty.call(message, "whenFalse"))
                    $root.Formula.Operation.encode(message.whenFalse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified IfFunction message, length delimited. Does not implicitly {@link Formula.Operation.IfFunction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {Formula.Operation.IfFunction} message IfFunction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IfFunction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IfFunction message from the specified reader or buffer.
             * @function decode
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Formula.Operation.IfFunction} IfFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IfFunction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Formula.Operation.IfFunction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.condition = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.whenTrue = $root.Formula.Operation.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.whenFalse = $root.Formula.Operation.decode(reader, reader.uint32());
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
             * Decodes an IfFunction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Formula.Operation.IfFunction} IfFunction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IfFunction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IfFunction message.
             * @function verify
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IfFunction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.condition != null && message.hasOwnProperty("condition")) {
                    var error = $root.Formula.Operation.verify(message.condition);
                    if (error)
                        return "condition." + error;
                }
                if (message.whenTrue != null && message.hasOwnProperty("whenTrue")) {
                    var error = $root.Formula.Operation.verify(message.whenTrue);
                    if (error)
                        return "whenTrue." + error;
                }
                if (message.whenFalse != null && message.hasOwnProperty("whenFalse")) {
                    var error = $root.Formula.Operation.verify(message.whenFalse);
                    if (error)
                        return "whenFalse." + error;
                }
                return null;
            };

            /**
             * Creates an IfFunction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Formula.Operation.IfFunction} IfFunction
             */
            IfFunction.fromObject = function fromObject(object) {
                if (object instanceof $root.Formula.Operation.IfFunction)
                    return object;
                var message = new $root.Formula.Operation.IfFunction();
                if (object.condition != null) {
                    if (typeof object.condition !== "object")
                        throw TypeError(".Formula.Operation.IfFunction.condition: object expected");
                    message.condition = $root.Formula.Operation.fromObject(object.condition);
                }
                if (object.whenTrue != null) {
                    if (typeof object.whenTrue !== "object")
                        throw TypeError(".Formula.Operation.IfFunction.whenTrue: object expected");
                    message.whenTrue = $root.Formula.Operation.fromObject(object.whenTrue);
                }
                if (object.whenFalse != null) {
                    if (typeof object.whenFalse !== "object")
                        throw TypeError(".Formula.Operation.IfFunction.whenFalse: object expected");
                    message.whenFalse = $root.Formula.Operation.fromObject(object.whenFalse);
                }
                return message;
            };

            /**
             * Creates a plain object from an IfFunction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {Formula.Operation.IfFunction} message IfFunction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IfFunction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.condition = null;
                    object.whenTrue = null;
                    object.whenFalse = null;
                }
                if (message.condition != null && message.hasOwnProperty("condition"))
                    object.condition = $root.Formula.Operation.toObject(message.condition, options);
                if (message.whenTrue != null && message.hasOwnProperty("whenTrue"))
                    object.whenTrue = $root.Formula.Operation.toObject(message.whenTrue, options);
                if (message.whenFalse != null && message.hasOwnProperty("whenFalse"))
                    object.whenFalse = $root.Formula.Operation.toObject(message.whenFalse, options);
                return object;
            };

            /**
             * Converts this IfFunction to JSON.
             * @function toJSON
             * @memberof Formula.Operation.IfFunction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IfFunction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IfFunction
             * @function getTypeUrl
             * @memberof Formula.Operation.IfFunction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IfFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Formula.Operation.IfFunction";
            };

            return IfFunction;
        })();

        return Operation;
    })();

    return Formula;
})();

/**
 * AbilityScoreDbo enum.
 * @exports AbilityScoreDbo
 * @enum {number}
 * @property {number} ABILITY_SCORE_UNKNOWN=0 ABILITY_SCORE_UNKNOWN value
 * @property {number} ABILITY_SCORE_STR=1 ABILITY_SCORE_STR value
 * @property {number} ABILITY_SCORE_DEX=2 ABILITY_SCORE_DEX value
 * @property {number} ABILITY_SCORE_CON=3 ABILITY_SCORE_CON value
 * @property {number} ABILITY_SCORE_INT=4 ABILITY_SCORE_INT value
 * @property {number} ABILITY_SCORE_WIS=5 ABILITY_SCORE_WIS value
 * @property {number} ABILITY_SCORE_CHA=6 ABILITY_SCORE_CHA value
 */
$root.AbilityScoreDbo = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ABILITY_SCORE_UNKNOWN"] = 0;
    values[valuesById[1] = "ABILITY_SCORE_STR"] = 1;
    values[valuesById[2] = "ABILITY_SCORE_DEX"] = 2;
    values[valuesById[3] = "ABILITY_SCORE_CON"] = 3;
    values[valuesById[4] = "ABILITY_SCORE_INT"] = 4;
    values[valuesById[5] = "ABILITY_SCORE_WIS"] = 5;
    values[valuesById[6] = "ABILITY_SCORE_CHA"] = 6;
    return values;
})();

/**
 * ActionTypeDbo enum.
 * @exports ActionTypeDbo
 * @enum {number}
 * @property {number} ACTION_TYPE_UNKNOWN=0 ACTION_TYPE_UNKNOWN value
 * @property {number} ACTION_TYPE_IMMEDIATE=1 ACTION_TYPE_IMMEDIATE value
 * @property {number} ACTION_TYPE_FREE=2 ACTION_TYPE_FREE value
 * @property {number} ACTION_TYPE_SWIFT=3 ACTION_TYPE_SWIFT value
 * @property {number} ACTION_TYPE_MOVE=4 ACTION_TYPE_MOVE value
 * @property {number} ACTION_TYPE_STANDARD=5 ACTION_TYPE_STANDARD value
 * @property {number} ACTION_TYPE_FULL_ROUND=6 ACTION_TYPE_FULL_ROUND value
 */
$root.ActionTypeDbo = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ACTION_TYPE_UNKNOWN"] = 0;
    values[valuesById[1] = "ACTION_TYPE_IMMEDIATE"] = 1;
    values[valuesById[2] = "ACTION_TYPE_FREE"] = 2;
    values[valuesById[3] = "ACTION_TYPE_SWIFT"] = 3;
    values[valuesById[4] = "ACTION_TYPE_MOVE"] = 4;
    values[valuesById[5] = "ACTION_TYPE_STANDARD"] = 5;
    values[valuesById[6] = "ACTION_TYPE_FULL_ROUND"] = 6;
    return values;
})();

$root.RangeDbo = (function() {

    /**
     * Properties of a RangeDbo.
     * @exports IRangeDbo
     * @interface IRangeDbo
     * @property {RangeDbo.Category|null} [category] RangeDbo category
     * @property {number|null} [feet] RangeDbo feet
     */

    /**
     * Constructs a new RangeDbo.
     * @exports RangeDbo
     * @classdesc Represents a RangeDbo.
     * @implements IRangeDbo
     * @constructor
     * @param {IRangeDbo=} [properties] Properties to set
     */
    function RangeDbo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RangeDbo category.
     * @member {RangeDbo.Category|null|undefined} category
     * @memberof RangeDbo
     * @instance
     */
    RangeDbo.prototype.category = null;

    /**
     * RangeDbo feet.
     * @member {number|null|undefined} feet
     * @memberof RangeDbo
     * @instance
     */
    RangeDbo.prototype.feet = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * RangeDbo Distance.
     * @member {"category"|"feet"|undefined} Distance
     * @memberof RangeDbo
     * @instance
     */
    Object.defineProperty(RangeDbo.prototype, "Distance", {
        get: $util.oneOfGetter($oneOfFields = ["category", "feet"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new RangeDbo instance using the specified properties.
     * @function create
     * @memberof RangeDbo
     * @static
     * @param {IRangeDbo=} [properties] Properties to set
     * @returns {RangeDbo} RangeDbo instance
     */
    RangeDbo.create = function create(properties) {
        return new RangeDbo(properties);
    };

    /**
     * Encodes the specified RangeDbo message. Does not implicitly {@link RangeDbo.verify|verify} messages.
     * @function encode
     * @memberof RangeDbo
     * @static
     * @param {RangeDbo} message RangeDbo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RangeDbo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.category != null && Object.hasOwnProperty.call(message, "category"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.category);
        if (message.feet != null && Object.hasOwnProperty.call(message, "feet"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.feet);
        return writer;
    };

    /**
     * Encodes the specified RangeDbo message, length delimited. Does not implicitly {@link RangeDbo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RangeDbo
     * @static
     * @param {RangeDbo} message RangeDbo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RangeDbo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RangeDbo message from the specified reader or buffer.
     * @function decode
     * @memberof RangeDbo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RangeDbo} RangeDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RangeDbo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RangeDbo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.category = reader.int32();
                    break;
                }
            case 2: {
                    message.feet = reader.uint32();
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
     * Decodes a RangeDbo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RangeDbo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RangeDbo} RangeDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RangeDbo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RangeDbo message.
     * @function verify
     * @memberof RangeDbo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RangeDbo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.category != null && message.hasOwnProperty("category")) {
            properties.Distance = 1;
            switch (message.category) {
            default:
                return "category: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        }
        if (message.feet != null && message.hasOwnProperty("feet")) {
            if (properties.Distance === 1)
                return "Distance: multiple values";
            properties.Distance = 1;
            if (!$util.isInteger(message.feet))
                return "feet: integer expected";
        }
        return null;
    };

    /**
     * Creates a RangeDbo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RangeDbo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RangeDbo} RangeDbo
     */
    RangeDbo.fromObject = function fromObject(object) {
        if (object instanceof $root.RangeDbo)
            return object;
        var message = new $root.RangeDbo();
        switch (object.category) {
        default:
            if (typeof object.category === "number") {
                message.category = object.category;
                break;
            }
            break;
        case "PERSONAL":
        case 0:
            message.category = 0;
            break;
        case "TOUCH":
        case 1:
            message.category = 1;
            break;
        case "CLOSE":
        case 2:
            message.category = 2;
            break;
        case "MEDIUM":
        case 3:
            message.category = 3;
            break;
        case "LONG":
        case 4:
            message.category = 4;
            break;
        case "UNLIMITED":
        case 5:
            message.category = 5;
            break;
        }
        if (object.feet != null)
            message.feet = object.feet >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RangeDbo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RangeDbo
     * @static
     * @param {RangeDbo} message RangeDbo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RangeDbo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.category != null && message.hasOwnProperty("category")) {
            object.category = options.enums === String ? $root.RangeDbo.Category[message.category] === undefined ? message.category : $root.RangeDbo.Category[message.category] : message.category;
            if (options.oneofs)
                object.Distance = "category";
        }
        if (message.feet != null && message.hasOwnProperty("feet")) {
            object.feet = message.feet;
            if (options.oneofs)
                object.Distance = "feet";
        }
        return object;
    };

    /**
     * Converts this RangeDbo to JSON.
     * @function toJSON
     * @memberof RangeDbo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RangeDbo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RangeDbo
     * @function getTypeUrl
     * @memberof RangeDbo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RangeDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RangeDbo";
    };

    /**
     * Category enum.
     * @name RangeDbo.Category
     * @enum {number}
     * @property {number} PERSONAL=0 PERSONAL value
     * @property {number} TOUCH=1 TOUCH value
     * @property {number} CLOSE=2 CLOSE value
     * @property {number} MEDIUM=3 MEDIUM value
     * @property {number} LONG=4 LONG value
     * @property {number} UNLIMITED=5 UNLIMITED value
     */
    RangeDbo.Category = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PERSONAL"] = 0;
        values[valuesById[1] = "TOUCH"] = 1;
        values[valuesById[2] = "CLOSE"] = 2;
        values[valuesById[3] = "MEDIUM"] = 3;
        values[valuesById[4] = "LONG"] = 4;
        values[valuesById[5] = "UNLIMITED"] = 5;
        return values;
    })();

    return RangeDbo;
})();

$root.Die = (function() {

    /**
     * Properties of a Die.
     * @exports IDie
     * @interface IDie
     * @property {number|null} [count] Die count
     * @property {number|null} [sides] Die sides
     */

    /**
     * Constructs a new Die.
     * @exports Die
     * @classdesc Represents a Die.
     * @implements IDie
     * @constructor
     * @param {IDie=} [properties] Properties to set
     */
    function Die(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Die count.
     * @member {number} count
     * @memberof Die
     * @instance
     */
    Die.prototype.count = 0;

    /**
     * Die sides.
     * @member {number} sides
     * @memberof Die
     * @instance
     */
    Die.prototype.sides = 0;

    /**
     * Creates a new Die instance using the specified properties.
     * @function create
     * @memberof Die
     * @static
     * @param {IDie=} [properties] Properties to set
     * @returns {Die} Die instance
     */
    Die.create = function create(properties) {
        return new Die(properties);
    };

    /**
     * Encodes the specified Die message. Does not implicitly {@link Die.verify|verify} messages.
     * @function encode
     * @memberof Die
     * @static
     * @param {Die} message Die message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Die.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
        if (message.sides != null && Object.hasOwnProperty.call(message, "sides"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sides);
        return writer;
    };

    /**
     * Encodes the specified Die message, length delimited. Does not implicitly {@link Die.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Die
     * @static
     * @param {Die} message Die message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Die.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Die message from the specified reader or buffer.
     * @function decode
     * @memberof Die
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Die} Die
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Die.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Die();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.count = reader.int32();
                    break;
                }
            case 2: {
                    message.sides = reader.int32();
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
     * Decodes a Die message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Die
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Die} Die
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Die.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Die message.
     * @function verify
     * @memberof Die
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Die.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        if (message.sides != null && message.hasOwnProperty("sides"))
            if (!$util.isInteger(message.sides))
                return "sides: integer expected";
        return null;
    };

    /**
     * Creates a Die message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Die
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Die} Die
     */
    Die.fromObject = function fromObject(object) {
        if (object instanceof $root.Die)
            return object;
        var message = new $root.Die();
        if (object.count != null)
            message.count = object.count | 0;
        if (object.sides != null)
            message.sides = object.sides | 0;
        return message;
    };

    /**
     * Creates a plain object from a Die message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Die
     * @static
     * @param {Die} message Die
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Die.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.count = 0;
            object.sides = 0;
        }
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        if (message.sides != null && message.hasOwnProperty("sides"))
            object.sides = message.sides;
        return object;
    };

    /**
     * Converts this Die to JSON.
     * @function toJSON
     * @memberof Die
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Die.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Die
     * @function getTypeUrl
     * @memberof Die
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Die.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Die";
    };

    return Die;
})();

module.exports = $root;
