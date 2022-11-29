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
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.v2.AbilityTypeDbo[message.type] === undefined ? message.type : $root.v2.AbilityTypeDbo[message.type] : message.type;
            if (message.prerequisitesFormula != null && message.hasOwnProperty("prerequisitesFormula"))
                object.prerequisitesFormula = message.prerequisitesFormula;
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

    v2.ClassDatabaseDbo = (function() {

        /**
         * Properties of a ClassDatabaseDbo.
         * @memberof v2
         * @interface IClassDatabaseDbo
         * @property {Array.<v2.ClassSummaryDbo>|null} [classSummaries] ClassDatabaseDbo classSummaries
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
            this.classSummaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClassDatabaseDbo classSummaries.
         * @member {Array.<v2.ClassSummaryDbo>} classSummaries
         * @memberof v2.ClassDatabaseDbo
         * @instance
         */
        ClassDatabaseDbo.prototype.classSummaries = $util.emptyArray;

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
            if (message.classSummaries != null && message.classSummaries.length)
                for (var i = 0; i < message.classSummaries.length; ++i)
                    $root.v2.ClassSummaryDbo.encode(message.classSummaries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        if (!(message.classSummaries && message.classSummaries.length))
                            message.classSummaries = [];
                        message.classSummaries.push($root.v2.ClassSummaryDbo.decode(reader, reader.uint32()));
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
            if (message.classSummaries != null && message.hasOwnProperty("classSummaries")) {
                if (!Array.isArray(message.classSummaries))
                    return "classSummaries: array expected";
                for (var i = 0; i < message.classSummaries.length; ++i) {
                    var error = $root.v2.ClassSummaryDbo.verify(message.classSummaries[i]);
                    if (error)
                        return "classSummaries." + error;
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
            if (object.classSummaries) {
                if (!Array.isArray(object.classSummaries))
                    throw TypeError(".v2.ClassDatabaseDbo.classSummaries: array expected");
                message.classSummaries = [];
                for (var i = 0; i < object.classSummaries.length; ++i) {
                    if (typeof object.classSummaries[i] !== "object")
                        throw TypeError(".v2.ClassDatabaseDbo.classSummaries: object expected");
                    message.classSummaries[i] = $root.v2.ClassSummaryDbo.fromObject(object.classSummaries[i]);
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
                object.classSummaries = [];
            if (message.classSummaries && message.classSummaries.length) {
                object.classSummaries = [];
                for (var j = 0; j < message.classSummaries.length; ++j)
                    object.classSummaries[j] = $root.v2.ClassSummaryDbo.toObject(message.classSummaries[j], options);
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

    v2.ClassDataDbo = (function() {

        /**
         * Properties of a ClassDataDbo.
         * @memberof v2
         * @interface IClassDataDbo
         * @property {string|null} [id] ClassDataDbo id
         * @property {string|null} [name] ClassDataDbo name
         * @property {v2.ClassCategoryDbo|null} [category] ClassDataDbo category
         * @property {string|null} [shortDescription] ClassDataDbo shortDescription
         * @property {Array.<v2.ClassLevelDbo>|null} [levels] ClassDataDbo levels
         * @property {Array.<string>|null} [skills] ClassDataDbo skills
         */

        /**
         * Constructs a new ClassDataDbo.
         * @memberof v2
         * @classdesc Represents a ClassDataDbo.
         * @implements IClassDataDbo
         * @constructor
         * @param {v2.IClassDataDbo=} [properties] Properties to set
         */
        function ClassDataDbo(properties) {
            this.levels = [];
            this.skills = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClassDataDbo id.
         * @member {string} id
         * @memberof v2.ClassDataDbo
         * @instance
         */
        ClassDataDbo.prototype.id = "";

        /**
         * ClassDataDbo name.
         * @member {string} name
         * @memberof v2.ClassDataDbo
         * @instance
         */
        ClassDataDbo.prototype.name = "";

        /**
         * ClassDataDbo category.
         * @member {v2.ClassCategoryDbo} category
         * @memberof v2.ClassDataDbo
         * @instance
         */
        ClassDataDbo.prototype.category = 0;

        /**
         * ClassDataDbo shortDescription.
         * @member {string} shortDescription
         * @memberof v2.ClassDataDbo
         * @instance
         */
        ClassDataDbo.prototype.shortDescription = "";

        /**
         * ClassDataDbo levels.
         * @member {Array.<v2.ClassLevelDbo>} levels
         * @memberof v2.ClassDataDbo
         * @instance
         */
        ClassDataDbo.prototype.levels = $util.emptyArray;

        /**
         * ClassDataDbo skills.
         * @member {Array.<string>} skills
         * @memberof v2.ClassDataDbo
         * @instance
         */
        ClassDataDbo.prototype.skills = $util.emptyArray;

        /**
         * Creates a new ClassDataDbo instance using the specified properties.
         * @function create
         * @memberof v2.ClassDataDbo
         * @static
         * @param {v2.IClassDataDbo=} [properties] Properties to set
         * @returns {v2.ClassDataDbo} ClassDataDbo instance
         */
        ClassDataDbo.create = function create(properties) {
            return new ClassDataDbo(properties);
        };

        /**
         * Encodes the specified ClassDataDbo message. Does not implicitly {@link v2.ClassDataDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ClassDataDbo
         * @static
         * @param {v2.ClassDataDbo} message ClassDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassDataDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.category);
            if (message.shortDescription != null && Object.hasOwnProperty.call(message, "shortDescription"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.shortDescription);
            if (message.levels != null && message.levels.length)
                for (var i = 0; i < message.levels.length; ++i)
                    $root.v2.ClassLevelDbo.encode(message.levels[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.skills != null && message.skills.length)
                for (var i = 0; i < message.skills.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.skills[i]);
            return writer;
        };

        /**
         * Encodes the specified ClassDataDbo message, length delimited. Does not implicitly {@link v2.ClassDataDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ClassDataDbo
         * @static
         * @param {v2.ClassDataDbo} message ClassDataDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassDataDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClassDataDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ClassDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ClassDataDbo} ClassDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassDataDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ClassDataDbo();
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
                case 4: {
                        message.shortDescription = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.levels && message.levels.length))
                            message.levels = [];
                        message.levels.push($root.v2.ClassLevelDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.skills && message.skills.length))
                            message.skills = [];
                        message.skills.push(reader.string());
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
         * Decodes a ClassDataDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ClassDataDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ClassDataDbo} ClassDataDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassDataDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClassDataDbo message.
         * @function verify
         * @memberof v2.ClassDataDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClassDataDbo.verify = function verify(message) {
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
            if (message.levels != null && message.hasOwnProperty("levels")) {
                if (!Array.isArray(message.levels))
                    return "levels: array expected";
                for (var i = 0; i < message.levels.length; ++i) {
                    var error = $root.v2.ClassLevelDbo.verify(message.levels[i]);
                    if (error)
                        return "levels." + error;
                }
            }
            if (message.skills != null && message.hasOwnProperty("skills")) {
                if (!Array.isArray(message.skills))
                    return "skills: array expected";
                for (var i = 0; i < message.skills.length; ++i)
                    if (!$util.isString(message.skills[i]))
                        return "skills: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ClassDataDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ClassDataDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ClassDataDbo} ClassDataDbo
         */
        ClassDataDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ClassDataDbo)
                return object;
            var message = new $root.v2.ClassDataDbo();
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
            if (object.levels) {
                if (!Array.isArray(object.levels))
                    throw TypeError(".v2.ClassDataDbo.levels: array expected");
                message.levels = [];
                for (var i = 0; i < object.levels.length; ++i) {
                    if (typeof object.levels[i] !== "object")
                        throw TypeError(".v2.ClassDataDbo.levels: object expected");
                    message.levels[i] = $root.v2.ClassLevelDbo.fromObject(object.levels[i]);
                }
            }
            if (object.skills) {
                if (!Array.isArray(object.skills))
                    throw TypeError(".v2.ClassDataDbo.skills: array expected");
                message.skills = [];
                for (var i = 0; i < object.skills.length; ++i)
                    message.skills[i] = String(object.skills[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClassDataDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ClassDataDbo
         * @static
         * @param {v2.ClassDataDbo} message ClassDataDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClassDataDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.levels = [];
                object.skills = [];
            }
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
            if (message.levels && message.levels.length) {
                object.levels = [];
                for (var j = 0; j < message.levels.length; ++j)
                    object.levels[j] = $root.v2.ClassLevelDbo.toObject(message.levels[j], options);
            }
            if (message.skills && message.skills.length) {
                object.skills = [];
                for (var j = 0; j < message.skills.length; ++j)
                    object.skills[j] = message.skills[j];
            }
            return object;
        };

        /**
         * Converts this ClassDataDbo to JSON.
         * @function toJSON
         * @memberof v2.ClassDataDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClassDataDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClassDataDbo
         * @function getTypeUrl
         * @memberof v2.ClassDataDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClassDataDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ClassDataDbo";
        };

        return ClassDataDbo;
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

    v2.ClassLevelDbo = (function() {

        /**
         * Properties of a ClassLevelDbo.
         * @memberof v2
         * @interface IClassLevelDbo
         * @property {number|null} [levelNumber] ClassLevelDbo levelNumber
         * @property {number|null} [bab] ClassLevelDbo bab
         * @property {number|null} [fortSave] ClassLevelDbo fortSave
         * @property {number|null} [refSave] ClassLevelDbo refSave
         * @property {number|null} [willSave] ClassLevelDbo willSave
         * @property {Array.<v2.SpecialDbo>|null} [specials] ClassLevelDbo specials
         */

        /**
         * Constructs a new ClassLevelDbo.
         * @memberof v2
         * @classdesc Represents a ClassLevelDbo.
         * @implements IClassLevelDbo
         * @constructor
         * @param {v2.IClassLevelDbo=} [properties] Properties to set
         */
        function ClassLevelDbo(properties) {
            this.specials = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClassLevelDbo levelNumber.
         * @member {number} levelNumber
         * @memberof v2.ClassLevelDbo
         * @instance
         */
        ClassLevelDbo.prototype.levelNumber = 0;

        /**
         * ClassLevelDbo bab.
         * @member {number} bab
         * @memberof v2.ClassLevelDbo
         * @instance
         */
        ClassLevelDbo.prototype.bab = 0;

        /**
         * ClassLevelDbo fortSave.
         * @member {number} fortSave
         * @memberof v2.ClassLevelDbo
         * @instance
         */
        ClassLevelDbo.prototype.fortSave = 0;

        /**
         * ClassLevelDbo refSave.
         * @member {number} refSave
         * @memberof v2.ClassLevelDbo
         * @instance
         */
        ClassLevelDbo.prototype.refSave = 0;

        /**
         * ClassLevelDbo willSave.
         * @member {number} willSave
         * @memberof v2.ClassLevelDbo
         * @instance
         */
        ClassLevelDbo.prototype.willSave = 0;

        /**
         * ClassLevelDbo specials.
         * @member {Array.<v2.SpecialDbo>} specials
         * @memberof v2.ClassLevelDbo
         * @instance
         */
        ClassLevelDbo.prototype.specials = $util.emptyArray;

        /**
         * Creates a new ClassLevelDbo instance using the specified properties.
         * @function create
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {v2.IClassLevelDbo=} [properties] Properties to set
         * @returns {v2.ClassLevelDbo} ClassLevelDbo instance
         */
        ClassLevelDbo.create = function create(properties) {
            return new ClassLevelDbo(properties);
        };

        /**
         * Encodes the specified ClassLevelDbo message. Does not implicitly {@link v2.ClassLevelDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {v2.ClassLevelDbo} message ClassLevelDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassLevelDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.levelNumber != null && Object.hasOwnProperty.call(message, "levelNumber"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.levelNumber);
            if (message.bab != null && Object.hasOwnProperty.call(message, "bab"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bab);
            if (message.fortSave != null && Object.hasOwnProperty.call(message, "fortSave"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fortSave);
            if (message.refSave != null && Object.hasOwnProperty.call(message, "refSave"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.refSave);
            if (message.willSave != null && Object.hasOwnProperty.call(message, "willSave"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.willSave);
            if (message.specials != null && message.specials.length)
                for (var i = 0; i < message.specials.length; ++i)
                    $root.v2.SpecialDbo.encode(message.specials[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClassLevelDbo message, length delimited. Does not implicitly {@link v2.ClassLevelDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {v2.ClassLevelDbo} message ClassLevelDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClassLevelDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClassLevelDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.ClassLevelDbo} ClassLevelDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassLevelDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.ClassLevelDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.levelNumber = reader.uint32();
                        break;
                    }
                case 2: {
                        message.bab = reader.uint32();
                        break;
                    }
                case 3: {
                        message.fortSave = reader.uint32();
                        break;
                    }
                case 4: {
                        message.refSave = reader.uint32();
                        break;
                    }
                case 5: {
                        message.willSave = reader.uint32();
                        break;
                    }
                case 6: {
                        if (!(message.specials && message.specials.length))
                            message.specials = [];
                        message.specials.push($root.v2.SpecialDbo.decode(reader, reader.uint32()));
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
         * Decodes a ClassLevelDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.ClassLevelDbo} ClassLevelDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClassLevelDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClassLevelDbo message.
         * @function verify
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClassLevelDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.levelNumber != null && message.hasOwnProperty("levelNumber"))
                if (!$util.isInteger(message.levelNumber))
                    return "levelNumber: integer expected";
            if (message.bab != null && message.hasOwnProperty("bab"))
                if (!$util.isInteger(message.bab))
                    return "bab: integer expected";
            if (message.fortSave != null && message.hasOwnProperty("fortSave"))
                if (!$util.isInteger(message.fortSave))
                    return "fortSave: integer expected";
            if (message.refSave != null && message.hasOwnProperty("refSave"))
                if (!$util.isInteger(message.refSave))
                    return "refSave: integer expected";
            if (message.willSave != null && message.hasOwnProperty("willSave"))
                if (!$util.isInteger(message.willSave))
                    return "willSave: integer expected";
            if (message.specials != null && message.hasOwnProperty("specials")) {
                if (!Array.isArray(message.specials))
                    return "specials: array expected";
                for (var i = 0; i < message.specials.length; ++i) {
                    var error = $root.v2.SpecialDbo.verify(message.specials[i]);
                    if (error)
                        return "specials." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClassLevelDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.ClassLevelDbo} ClassLevelDbo
         */
        ClassLevelDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.ClassLevelDbo)
                return object;
            var message = new $root.v2.ClassLevelDbo();
            if (object.levelNumber != null)
                message.levelNumber = object.levelNumber >>> 0;
            if (object.bab != null)
                message.bab = object.bab >>> 0;
            if (object.fortSave != null)
                message.fortSave = object.fortSave >>> 0;
            if (object.refSave != null)
                message.refSave = object.refSave >>> 0;
            if (object.willSave != null)
                message.willSave = object.willSave >>> 0;
            if (object.specials) {
                if (!Array.isArray(object.specials))
                    throw TypeError(".v2.ClassLevelDbo.specials: array expected");
                message.specials = [];
                for (var i = 0; i < object.specials.length; ++i) {
                    if (typeof object.specials[i] !== "object")
                        throw TypeError(".v2.ClassLevelDbo.specials: object expected");
                    message.specials[i] = $root.v2.SpecialDbo.fromObject(object.specials[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ClassLevelDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {v2.ClassLevelDbo} message ClassLevelDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClassLevelDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.specials = [];
            if (options.defaults) {
                object.levelNumber = 0;
                object.bab = 0;
                object.fortSave = 0;
                object.refSave = 0;
                object.willSave = 0;
            }
            if (message.levelNumber != null && message.hasOwnProperty("levelNumber"))
                object.levelNumber = message.levelNumber;
            if (message.bab != null && message.hasOwnProperty("bab"))
                object.bab = message.bab;
            if (message.fortSave != null && message.hasOwnProperty("fortSave"))
                object.fortSave = message.fortSave;
            if (message.refSave != null && message.hasOwnProperty("refSave"))
                object.refSave = message.refSave;
            if (message.willSave != null && message.hasOwnProperty("willSave"))
                object.willSave = message.willSave;
            if (message.specials && message.specials.length) {
                object.specials = [];
                for (var j = 0; j < message.specials.length; ++j)
                    object.specials[j] = $root.v2.SpecialDbo.toObject(message.specials[j], options);
            }
            return object;
        };

        /**
         * Converts this ClassLevelDbo to JSON.
         * @function toJSON
         * @memberof v2.ClassLevelDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClassLevelDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClassLevelDbo
         * @function getTypeUrl
         * @memberof v2.ClassLevelDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClassLevelDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.ClassLevelDbo";
        };

        return ClassLevelDbo;
    })();

    v2.SpecialDbo = (function() {

        /**
         * Properties of a SpecialDbo.
         * @memberof v2
         * @interface ISpecialDbo
         * @property {string|null} [id] SpecialDbo id
         * @property {string|null} [name] SpecialDbo name
         * @property {string|null} [description] SpecialDbo description
         */

        /**
         * Constructs a new SpecialDbo.
         * @memberof v2
         * @classdesc Represents a SpecialDbo.
         * @implements ISpecialDbo
         * @constructor
         * @param {v2.ISpecialDbo=} [properties] Properties to set
         */
        function SpecialDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpecialDbo id.
         * @member {string} id
         * @memberof v2.SpecialDbo
         * @instance
         */
        SpecialDbo.prototype.id = "";

        /**
         * SpecialDbo name.
         * @member {string} name
         * @memberof v2.SpecialDbo
         * @instance
         */
        SpecialDbo.prototype.name = "";

        /**
         * SpecialDbo description.
         * @member {string} description
         * @memberof v2.SpecialDbo
         * @instance
         */
        SpecialDbo.prototype.description = "";

        /**
         * Creates a new SpecialDbo instance using the specified properties.
         * @function create
         * @memberof v2.SpecialDbo
         * @static
         * @param {v2.ISpecialDbo=} [properties] Properties to set
         * @returns {v2.SpecialDbo} SpecialDbo instance
         */
        SpecialDbo.create = function create(properties) {
            return new SpecialDbo(properties);
        };

        /**
         * Encodes the specified SpecialDbo message. Does not implicitly {@link v2.SpecialDbo.verify|verify} messages.
         * @function encode
         * @memberof v2.SpecialDbo
         * @static
         * @param {v2.SpecialDbo} message SpecialDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecialDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified SpecialDbo message, length delimited. Does not implicitly {@link v2.SpecialDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v2.SpecialDbo
         * @static
         * @param {v2.SpecialDbo} message SpecialDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpecialDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpecialDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v2.SpecialDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v2.SpecialDbo} SpecialDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecialDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.SpecialDbo();
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
                        message.description = reader.string();
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
         * Decodes a SpecialDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v2.SpecialDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v2.SpecialDbo} SpecialDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpecialDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpecialDbo message.
         * @function verify
         * @memberof v2.SpecialDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpecialDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a SpecialDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v2.SpecialDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v2.SpecialDbo} SpecialDbo
         */
        SpecialDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v2.SpecialDbo)
                return object;
            var message = new $root.v2.SpecialDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a SpecialDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v2.SpecialDbo
         * @static
         * @param {v2.SpecialDbo} message SpecialDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpecialDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.description = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this SpecialDbo to JSON.
         * @function toJSON
         * @memberof v2.SpecialDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpecialDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpecialDbo
         * @function getTypeUrl
         * @memberof v2.SpecialDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpecialDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v2.SpecialDbo";
        };

        return SpecialDbo;
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
