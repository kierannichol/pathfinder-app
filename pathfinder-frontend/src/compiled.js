/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["../pathfinder-generator/src/main/proto"] || ($protobuf.roots["../pathfinder-generator/src/main/proto"] = {});

$root.v4 = (function() {

    /**
     * Namespace v4.
     * @exports v4
     * @namespace
     */
    var v4 = {};

    v4.ChoiceDbo = (function() {

        /**
         * Properties of a ChoiceDbo.
         * @memberof v4
         * @interface IChoiceDbo
         * @property {string|null} [id] ChoiceDbo id
         * @property {string|null} [type] ChoiceDbo type
         * @property {string|null} [label] ChoiceDbo label
         * @property {string|null} [condition] ChoiceDbo condition
         * @property {boolean|null} [repeating] ChoiceDbo repeating
         * @property {v4.ChoiceDbo.TextChoiceDbo|null} [text] ChoiceDbo text
         * @property {v4.ChoiceDbo.SelectChoiceDbo|null} [select] ChoiceDbo select
         */

        /**
         * Constructs a new ChoiceDbo.
         * @memberof v4
         * @classdesc Represents a ChoiceDbo.
         * @implements IChoiceDbo
         * @constructor
         * @param {v4.IChoiceDbo=} [properties] Properties to set
         */
        function ChoiceDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChoiceDbo id.
         * @member {string} id
         * @memberof v4.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.id = "";

        /**
         * ChoiceDbo type.
         * @member {string} type
         * @memberof v4.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.type = "";

        /**
         * ChoiceDbo label.
         * @member {string} label
         * @memberof v4.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.label = "";

        /**
         * ChoiceDbo condition.
         * @member {string} condition
         * @memberof v4.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.condition = "";

        /**
         * ChoiceDbo repeating.
         * @member {boolean} repeating
         * @memberof v4.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.repeating = false;

        /**
         * ChoiceDbo text.
         * @member {v4.ChoiceDbo.TextChoiceDbo|null|undefined} text
         * @memberof v4.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.text = null;

        /**
         * ChoiceDbo select.
         * @member {v4.ChoiceDbo.SelectChoiceDbo|null|undefined} select
         * @memberof v4.ChoiceDbo
         * @instance
         */
        ChoiceDbo.prototype.select = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ChoiceDbo choice.
         * @member {"text"|"select"|undefined} choice
         * @memberof v4.ChoiceDbo
         * @instance
         */
        Object.defineProperty(ChoiceDbo.prototype, "choice", {
            get: $util.oneOfGetter($oneOfFields = ["text", "select"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ChoiceDbo instance using the specified properties.
         * @function create
         * @memberof v4.ChoiceDbo
         * @static
         * @param {v4.IChoiceDbo=} [properties] Properties to set
         * @returns {v4.ChoiceDbo} ChoiceDbo instance
         */
        ChoiceDbo.create = function create(properties) {
            return new ChoiceDbo(properties);
        };

        /**
         * Encodes the specified ChoiceDbo message. Does not implicitly {@link v4.ChoiceDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.ChoiceDbo
         * @static
         * @param {v4.ChoiceDbo} message ChoiceDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChoiceDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.label);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.condition);
            if (message.repeating != null && Object.hasOwnProperty.call(message, "repeating"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.repeating);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                $root.v4.ChoiceDbo.TextChoiceDbo.encode(message.text, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.select != null && Object.hasOwnProperty.call(message, "select"))
                $root.v4.ChoiceDbo.SelectChoiceDbo.encode(message.select, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChoiceDbo message, length delimited. Does not implicitly {@link v4.ChoiceDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.ChoiceDbo
         * @static
         * @param {v4.ChoiceDbo} message ChoiceDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChoiceDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.ChoiceDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.ChoiceDbo} ChoiceDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChoiceDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.ChoiceDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.label = reader.string();
                        break;
                    }
                case 4: {
                        message.condition = reader.string();
                        break;
                    }
                case 5: {
                        message.repeating = reader.bool();
                        break;
                    }
                case 100: {
                        message.text = $root.v4.ChoiceDbo.TextChoiceDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.select = $root.v4.ChoiceDbo.SelectChoiceDbo.decode(reader, reader.uint32());
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
         * @memberof v4.ChoiceDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.ChoiceDbo} ChoiceDbo
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
         * @memberof v4.ChoiceDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChoiceDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.condition != null && message.hasOwnProperty("condition"))
                if (!$util.isString(message.condition))
                    return "condition: string expected";
            if (message.repeating != null && message.hasOwnProperty("repeating"))
                if (typeof message.repeating !== "boolean")
                    return "repeating: boolean expected";
            if (message.text != null && message.hasOwnProperty("text")) {
                properties.choice = 1;
                {
                    var error = $root.v4.ChoiceDbo.TextChoiceDbo.verify(message.text);
                    if (error)
                        return "text." + error;
                }
            }
            if (message.select != null && message.hasOwnProperty("select")) {
                if (properties.choice === 1)
                    return "choice: multiple values";
                properties.choice = 1;
                {
                    var error = $root.v4.ChoiceDbo.SelectChoiceDbo.verify(message.select);
                    if (error)
                        return "select." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChoiceDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.ChoiceDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.ChoiceDbo} ChoiceDbo
         */
        ChoiceDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.ChoiceDbo)
                return object;
            var message = new $root.v4.ChoiceDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.type != null)
                message.type = String(object.type);
            if (object.label != null)
                message.label = String(object.label);
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.repeating != null)
                message.repeating = Boolean(object.repeating);
            if (object.text != null) {
                if (typeof object.text !== "object")
                    throw TypeError(".v4.ChoiceDbo.text: object expected");
                message.text = $root.v4.ChoiceDbo.TextChoiceDbo.fromObject(object.text);
            }
            if (object.select != null) {
                if (typeof object.select !== "object")
                    throw TypeError(".v4.ChoiceDbo.select: object expected");
                message.select = $root.v4.ChoiceDbo.SelectChoiceDbo.fromObject(object.select);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChoiceDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.ChoiceDbo
         * @static
         * @param {v4.ChoiceDbo} message ChoiceDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChoiceDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.type = "";
                object.label = "";
                object.condition = "";
                object.repeating = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = message.condition;
            if (message.repeating != null && message.hasOwnProperty("repeating"))
                object.repeating = message.repeating;
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = $root.v4.ChoiceDbo.TextChoiceDbo.toObject(message.text, options);
                if (options.oneofs)
                    object.choice = "text";
            }
            if (message.select != null && message.hasOwnProperty("select")) {
                object.select = $root.v4.ChoiceDbo.SelectChoiceDbo.toObject(message.select, options);
                if (options.oneofs)
                    object.choice = "select";
            }
            return object;
        };

        /**
         * Converts this ChoiceDbo to JSON.
         * @function toJSON
         * @memberof v4.ChoiceDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChoiceDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChoiceDbo
         * @function getTypeUrl
         * @memberof v4.ChoiceDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.ChoiceDbo";
        };

        ChoiceDbo.TextChoiceDbo = (function() {

            /**
             * Properties of a TextChoiceDbo.
             * @memberof v4.ChoiceDbo
             * @interface ITextChoiceDbo
             */

            /**
             * Constructs a new TextChoiceDbo.
             * @memberof v4.ChoiceDbo
             * @classdesc Represents a TextChoiceDbo.
             * @implements ITextChoiceDbo
             * @constructor
             * @param {v4.ChoiceDbo.ITextChoiceDbo=} [properties] Properties to set
             */
            function TextChoiceDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new TextChoiceDbo instance using the specified properties.
             * @function create
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.ITextChoiceDbo=} [properties] Properties to set
             * @returns {v4.ChoiceDbo.TextChoiceDbo} TextChoiceDbo instance
             */
            TextChoiceDbo.create = function create(properties) {
                return new TextChoiceDbo(properties);
            };

            /**
             * Encodes the specified TextChoiceDbo message. Does not implicitly {@link v4.ChoiceDbo.TextChoiceDbo.verify|verify} messages.
             * @function encode
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.TextChoiceDbo} message TextChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextChoiceDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified TextChoiceDbo message, length delimited. Does not implicitly {@link v4.ChoiceDbo.TextChoiceDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.TextChoiceDbo} message TextChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TextChoiceDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v4.ChoiceDbo.TextChoiceDbo} TextChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextChoiceDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.ChoiceDbo.TextChoiceDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
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
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v4.ChoiceDbo.TextChoiceDbo} TextChoiceDbo
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
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TextChoiceDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a TextChoiceDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v4.ChoiceDbo.TextChoiceDbo} TextChoiceDbo
             */
            TextChoiceDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v4.ChoiceDbo.TextChoiceDbo)
                    return object;
                return new $root.v4.ChoiceDbo.TextChoiceDbo();
            };

            /**
             * Creates a plain object from a TextChoiceDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.TextChoiceDbo} message TextChoiceDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TextChoiceDbo.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this TextChoiceDbo to JSON.
             * @function toJSON
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TextChoiceDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TextChoiceDbo
             * @function getTypeUrl
             * @memberof v4.ChoiceDbo.TextChoiceDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TextChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v4.ChoiceDbo.TextChoiceDbo";
            };

            return TextChoiceDbo;
        })();

        ChoiceDbo.SelectChoiceDbo = (function() {

            /**
             * Properties of a SelectChoiceDbo.
             * @memberof v4.ChoiceDbo
             * @interface ISelectChoiceDbo
             * @property {Array.<string>|null} [tags] SelectChoiceDbo tags
             * @property {Array.<string>|null} [ids] SelectChoiceDbo ids
             */

            /**
             * Constructs a new SelectChoiceDbo.
             * @memberof v4.ChoiceDbo
             * @classdesc Represents a SelectChoiceDbo.
             * @implements ISelectChoiceDbo
             * @constructor
             * @param {v4.ChoiceDbo.ISelectChoiceDbo=} [properties] Properties to set
             */
            function SelectChoiceDbo(properties) {
                this.tags = [];
                this.ids = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SelectChoiceDbo tags.
             * @member {Array.<string>} tags
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @instance
             */
            SelectChoiceDbo.prototype.tags = $util.emptyArray;

            /**
             * SelectChoiceDbo ids.
             * @member {Array.<string>} ids
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @instance
             */
            SelectChoiceDbo.prototype.ids = $util.emptyArray;

            /**
             * Creates a new SelectChoiceDbo instance using the specified properties.
             * @function create
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.ISelectChoiceDbo=} [properties] Properties to set
             * @returns {v4.ChoiceDbo.SelectChoiceDbo} SelectChoiceDbo instance
             */
            SelectChoiceDbo.create = function create(properties) {
                return new SelectChoiceDbo(properties);
            };

            /**
             * Encodes the specified SelectChoiceDbo message. Does not implicitly {@link v4.ChoiceDbo.SelectChoiceDbo.verify|verify} messages.
             * @function encode
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.SelectChoiceDbo} message SelectChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectChoiceDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tags[i]);
                if (message.ids != null && message.ids.length)
                    for (var i = 0; i < message.ids.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.ids[i]);
                return writer;
            };

            /**
             * Encodes the specified SelectChoiceDbo message, length delimited. Does not implicitly {@link v4.ChoiceDbo.SelectChoiceDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.SelectChoiceDbo} message SelectChoiceDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SelectChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SelectChoiceDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v4.ChoiceDbo.SelectChoiceDbo} SelectChoiceDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectChoiceDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.ChoiceDbo.SelectChoiceDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        }
                    case 2: {
                            if (!(message.ids && message.ids.length))
                                message.ids = [];
                            message.ids.push(reader.string());
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
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v4.ChoiceDbo.SelectChoiceDbo} SelectChoiceDbo
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
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SelectChoiceDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.ids != null && message.hasOwnProperty("ids")) {
                    if (!Array.isArray(message.ids))
                        return "ids: array expected";
                    for (var i = 0; i < message.ids.length; ++i)
                        if (!$util.isString(message.ids[i]))
                            return "ids: string[] expected";
                }
                return null;
            };

            /**
             * Creates a SelectChoiceDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v4.ChoiceDbo.SelectChoiceDbo} SelectChoiceDbo
             */
            SelectChoiceDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v4.ChoiceDbo.SelectChoiceDbo)
                    return object;
                var message = new $root.v4.ChoiceDbo.SelectChoiceDbo();
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".v4.ChoiceDbo.SelectChoiceDbo.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.ids) {
                    if (!Array.isArray(object.ids))
                        throw TypeError(".v4.ChoiceDbo.SelectChoiceDbo.ids: array expected");
                    message.ids = [];
                    for (var i = 0; i < object.ids.length; ++i)
                        message.ids[i] = String(object.ids[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a SelectChoiceDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {v4.ChoiceDbo.SelectChoiceDbo} message SelectChoiceDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SelectChoiceDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.tags = [];
                    object.ids = [];
                }
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.ids && message.ids.length) {
                    object.ids = [];
                    for (var j = 0; j < message.ids.length; ++j)
                        object.ids[j] = message.ids[j];
                }
                return object;
            };

            /**
             * Converts this SelectChoiceDbo to JSON.
             * @function toJSON
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SelectChoiceDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SelectChoiceDbo
             * @function getTypeUrl
             * @memberof v4.ChoiceDbo.SelectChoiceDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SelectChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v4.ChoiceDbo.SelectChoiceDbo";
            };

            return SelectChoiceDbo;
        })();

        return ChoiceDbo;
    })();

    v4.DescriptionDbo = (function() {

        /**
         * Properties of a DescriptionDbo.
         * @memberof v4
         * @interface IDescriptionDbo
         * @property {string|null} [text] DescriptionDbo text
         * @property {Object.<string,string>|null} [sections] DescriptionDbo sections
         */

        /**
         * Constructs a new DescriptionDbo.
         * @memberof v4
         * @classdesc Represents a DescriptionDbo.
         * @implements IDescriptionDbo
         * @constructor
         * @param {v4.IDescriptionDbo=} [properties] Properties to set
         */
        function DescriptionDbo(properties) {
            this.sections = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DescriptionDbo text.
         * @member {string} text
         * @memberof v4.DescriptionDbo
         * @instance
         */
        DescriptionDbo.prototype.text = "";

        /**
         * DescriptionDbo sections.
         * @member {Object.<string,string>} sections
         * @memberof v4.DescriptionDbo
         * @instance
         */
        DescriptionDbo.prototype.sections = $util.emptyObject;

        /**
         * Creates a new DescriptionDbo instance using the specified properties.
         * @function create
         * @memberof v4.DescriptionDbo
         * @static
         * @param {v4.IDescriptionDbo=} [properties] Properties to set
         * @returns {v4.DescriptionDbo} DescriptionDbo instance
         */
        DescriptionDbo.create = function create(properties) {
            return new DescriptionDbo(properties);
        };

        /**
         * Encodes the specified DescriptionDbo message. Does not implicitly {@link v4.DescriptionDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.DescriptionDbo
         * @static
         * @param {v4.DescriptionDbo} message DescriptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescriptionDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            if (message.sections != null && Object.hasOwnProperty.call(message, "sections"))
                for (var keys = Object.keys(message.sections), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.sections[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DescriptionDbo message, length delimited. Does not implicitly {@link v4.DescriptionDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.DescriptionDbo
         * @static
         * @param {v4.DescriptionDbo} message DescriptionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescriptionDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DescriptionDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.DescriptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.DescriptionDbo} DescriptionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DescriptionDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.DescriptionDbo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.text = reader.string();
                        break;
                    }
                case 2: {
                        if (message.sections === $util.emptyObject)
                            message.sections = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
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
         * @memberof v4.DescriptionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.DescriptionDbo} DescriptionDbo
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
         * @memberof v4.DescriptionDbo
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
                var key = Object.keys(message.sections);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.sections[key[i]]))
                        return "sections: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a DescriptionDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.DescriptionDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.DescriptionDbo} DescriptionDbo
         */
        DescriptionDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.DescriptionDbo)
                return object;
            var message = new $root.v4.DescriptionDbo();
            if (object.text != null)
                message.text = String(object.text);
            if (object.sections) {
                if (typeof object.sections !== "object")
                    throw TypeError(".v4.DescriptionDbo.sections: object expected");
                message.sections = {};
                for (var keys = Object.keys(object.sections), i = 0; i < keys.length; ++i)
                    message.sections[keys[i]] = String(object.sections[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DescriptionDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.DescriptionDbo
         * @static
         * @param {v4.DescriptionDbo} message DescriptionDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DescriptionDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.sections = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            var keys2;
            if (message.sections && (keys2 = Object.keys(message.sections)).length) {
                object.sections = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.sections[keys2[j]] = message.sections[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this DescriptionDbo to JSON.
         * @function toJSON
         * @memberof v4.DescriptionDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DescriptionDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DescriptionDbo
         * @function getTypeUrl
         * @memberof v4.DescriptionDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DescriptionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.DescriptionDbo";
        };

        return DescriptionDbo;
    })();

    v4.EntitySummaryDbo = (function() {

        /**
         * Properties of an EntitySummaryDbo.
         * @memberof v4
         * @interface IEntitySummaryDbo
         * @property {string|null} [id] EntitySummaryDbo id
         * @property {string|null} [name] EntitySummaryDbo name
         * @property {Array.<string>|null} [tags] EntitySummaryDbo tags
         * @property {string|null} [prerequisiteFormula] EntitySummaryDbo prerequisiteFormula
         * @property {Array.<v4.ChildEntitySummaryDbo>|null} [children] EntitySummaryDbo children
         */

        /**
         * Constructs a new EntitySummaryDbo.
         * @memberof v4
         * @classdesc Represents an EntitySummaryDbo.
         * @implements IEntitySummaryDbo
         * @constructor
         * @param {v4.IEntitySummaryDbo=} [properties] Properties to set
         */
        function EntitySummaryDbo(properties) {
            this.tags = [];
            this.children = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntitySummaryDbo id.
         * @member {string} id
         * @memberof v4.EntitySummaryDbo
         * @instance
         */
        EntitySummaryDbo.prototype.id = "";

        /**
         * EntitySummaryDbo name.
         * @member {string} name
         * @memberof v4.EntitySummaryDbo
         * @instance
         */
        EntitySummaryDbo.prototype.name = "";

        /**
         * EntitySummaryDbo tags.
         * @member {Array.<string>} tags
         * @memberof v4.EntitySummaryDbo
         * @instance
         */
        EntitySummaryDbo.prototype.tags = $util.emptyArray;

        /**
         * EntitySummaryDbo prerequisiteFormula.
         * @member {string} prerequisiteFormula
         * @memberof v4.EntitySummaryDbo
         * @instance
         */
        EntitySummaryDbo.prototype.prerequisiteFormula = "";

        /**
         * EntitySummaryDbo children.
         * @member {Array.<v4.ChildEntitySummaryDbo>} children
         * @memberof v4.EntitySummaryDbo
         * @instance
         */
        EntitySummaryDbo.prototype.children = $util.emptyArray;

        /**
         * Creates a new EntitySummaryDbo instance using the specified properties.
         * @function create
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {v4.IEntitySummaryDbo=} [properties] Properties to set
         * @returns {v4.EntitySummaryDbo} EntitySummaryDbo instance
         */
        EntitySummaryDbo.create = function create(properties) {
            return new EntitySummaryDbo(properties);
        };

        /**
         * Encodes the specified EntitySummaryDbo message. Does not implicitly {@link v4.EntitySummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {v4.EntitySummaryDbo} message EntitySummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntitySummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.prerequisiteFormula != null && Object.hasOwnProperty.call(message, "prerequisiteFormula"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.prerequisiteFormula);
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.v4.ChildEntitySummaryDbo.encode(message.children[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EntitySummaryDbo message, length delimited. Does not implicitly {@link v4.EntitySummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {v4.EntitySummaryDbo} message EntitySummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntitySummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntitySummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.EntitySummaryDbo} EntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntitySummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.EntitySummaryDbo();
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
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 4: {
                        message.prerequisiteFormula = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.v4.ChildEntitySummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes an EntitySummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.EntitySummaryDbo} EntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntitySummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntitySummaryDbo message.
         * @function verify
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntitySummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                if (!$util.isString(message.prerequisiteFormula))
                    return "prerequisiteFormula: string expected";
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.v4.ChildEntitySummaryDbo.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EntitySummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.EntitySummaryDbo} EntitySummaryDbo
         */
        EntitySummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.EntitySummaryDbo)
                return object;
            var message = new $root.v4.EntitySummaryDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".v4.EntitySummaryDbo.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.prerequisiteFormula != null)
                message.prerequisiteFormula = String(object.prerequisiteFormula);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".v4.EntitySummaryDbo.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".v4.EntitySummaryDbo.children: object expected");
                    message.children[i] = $root.v4.ChildEntitySummaryDbo.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EntitySummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {v4.EntitySummaryDbo} message EntitySummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntitySummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tags = [];
                object.children = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.prerequisiteFormula = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                object.prerequisiteFormula = message.prerequisiteFormula;
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.v4.ChildEntitySummaryDbo.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this EntitySummaryDbo to JSON.
         * @function toJSON
         * @memberof v4.EntitySummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntitySummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntitySummaryDbo
         * @function getTypeUrl
         * @memberof v4.EntitySummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntitySummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.EntitySummaryDbo";
        };

        return EntitySummaryDbo;
    })();

    v4.EntityDbo = (function() {

        /**
         * Properties of an EntityDbo.
         * @memberof v4
         * @interface IEntityDbo
         * @property {string|null} [id] EntityDbo id
         * @property {string|null} [name] EntityDbo name
         * @property {Array.<string>|null} [tags] EntityDbo tags
         * @property {string|null} [prerequisiteFormula] EntityDbo prerequisiteFormula
         * @property {Array.<v4.ChildEntityDbo>|null} [children] EntityDbo children
         * @property {v4.DescriptionDbo|null} [description] EntityDbo description
         * @property {Array.<v4.EffectDbo>|null} [effects] EntityDbo effects
         * @property {Array.<v4.ChoiceDbo>|null} [choices] EntityDbo choices
         * @property {v4.TemplateDbo|null} [template] EntityDbo template
         */

        /**
         * Constructs a new EntityDbo.
         * @memberof v4
         * @classdesc Represents an EntityDbo.
         * @implements IEntityDbo
         * @constructor
         * @param {v4.IEntityDbo=} [properties] Properties to set
         */
        function EntityDbo(properties) {
            this.tags = [];
            this.children = [];
            this.effects = [];
            this.choices = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityDbo id.
         * @member {string} id
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.id = "";

        /**
         * EntityDbo name.
         * @member {string} name
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.name = "";

        /**
         * EntityDbo tags.
         * @member {Array.<string>} tags
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.tags = $util.emptyArray;

        /**
         * EntityDbo prerequisiteFormula.
         * @member {string} prerequisiteFormula
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.prerequisiteFormula = "";

        /**
         * EntityDbo children.
         * @member {Array.<v4.ChildEntityDbo>} children
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.children = $util.emptyArray;

        /**
         * EntityDbo description.
         * @member {v4.DescriptionDbo|null|undefined} description
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.description = null;

        /**
         * EntityDbo effects.
         * @member {Array.<v4.EffectDbo>} effects
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.effects = $util.emptyArray;

        /**
         * EntityDbo choices.
         * @member {Array.<v4.ChoiceDbo>} choices
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.choices = $util.emptyArray;

        /**
         * EntityDbo template.
         * @member {v4.TemplateDbo|null|undefined} template
         * @memberof v4.EntityDbo
         * @instance
         */
        EntityDbo.prototype.template = null;

        /**
         * Creates a new EntityDbo instance using the specified properties.
         * @function create
         * @memberof v4.EntityDbo
         * @static
         * @param {v4.IEntityDbo=} [properties] Properties to set
         * @returns {v4.EntityDbo} EntityDbo instance
         */
        EntityDbo.create = function create(properties) {
            return new EntityDbo(properties);
        };

        /**
         * Encodes the specified EntityDbo message. Does not implicitly {@link v4.EntityDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.EntityDbo
         * @static
         * @param {v4.EntityDbo} message EntityDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.prerequisiteFormula != null && Object.hasOwnProperty.call(message, "prerequisiteFormula"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.prerequisiteFormula);
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.v4.ChildEntityDbo.encode(message.children[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.v4.DescriptionDbo.encode(message.description, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.effects != null && message.effects.length)
                for (var i = 0; i < message.effects.length; ++i)
                    $root.v4.EffectDbo.encode(message.effects[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.choices != null && message.choices.length)
                for (var i = 0; i < message.choices.length; ++i)
                    $root.v4.ChoiceDbo.encode(message.choices[i], writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.template != null && Object.hasOwnProperty.call(message, "template"))
                $root.v4.TemplateDbo.encode(message.template, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EntityDbo message, length delimited. Does not implicitly {@link v4.EntityDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.EntityDbo
         * @static
         * @param {v4.EntityDbo} message EntityDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.EntityDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.EntityDbo} EntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.EntityDbo();
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
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 4: {
                        message.prerequisiteFormula = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.v4.ChildEntityDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 100: {
                        message.description = $root.v4.DescriptionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.v4.EffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 102: {
                        if (!(message.choices && message.choices.length))
                            message.choices = [];
                        message.choices.push($root.v4.ChoiceDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 103: {
                        message.template = $root.v4.TemplateDbo.decode(reader, reader.uint32());
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
         * Decodes an EntityDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v4.EntityDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.EntityDbo} EntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityDbo message.
         * @function verify
         * @memberof v4.EntityDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                if (!$util.isString(message.prerequisiteFormula))
                    return "prerequisiteFormula: string expected";
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.v4.ChildEntityDbo.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                var error = $root.v4.DescriptionDbo.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (var i = 0; i < message.effects.length; ++i) {
                    var error = $root.v4.EffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.choices != null && message.hasOwnProperty("choices")) {
                if (!Array.isArray(message.choices))
                    return "choices: array expected";
                for (var i = 0; i < message.choices.length; ++i) {
                    var error = $root.v4.ChoiceDbo.verify(message.choices[i]);
                    if (error)
                        return "choices." + error;
                }
            }
            if (message.template != null && message.hasOwnProperty("template")) {
                var error = $root.v4.TemplateDbo.verify(message.template);
                if (error)
                    return "template." + error;
            }
            return null;
        };

        /**
         * Creates an EntityDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.EntityDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.EntityDbo} EntityDbo
         */
        EntityDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.EntityDbo)
                return object;
            var message = new $root.v4.EntityDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".v4.EntityDbo.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.prerequisiteFormula != null)
                message.prerequisiteFormula = String(object.prerequisiteFormula);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".v4.EntityDbo.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".v4.EntityDbo.children: object expected");
                    message.children[i] = $root.v4.ChildEntityDbo.fromObject(object.children[i]);
                }
            }
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".v4.EntityDbo.description: object expected");
                message.description = $root.v4.DescriptionDbo.fromObject(object.description);
            }
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".v4.EntityDbo.effects: array expected");
                message.effects = [];
                for (var i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".v4.EntityDbo.effects: object expected");
                    message.effects[i] = $root.v4.EffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.choices) {
                if (!Array.isArray(object.choices))
                    throw TypeError(".v4.EntityDbo.choices: array expected");
                message.choices = [];
                for (var i = 0; i < object.choices.length; ++i) {
                    if (typeof object.choices[i] !== "object")
                        throw TypeError(".v4.EntityDbo.choices: object expected");
                    message.choices[i] = $root.v4.ChoiceDbo.fromObject(object.choices[i]);
                }
            }
            if (object.template != null) {
                if (typeof object.template !== "object")
                    throw TypeError(".v4.EntityDbo.template: object expected");
                message.template = $root.v4.TemplateDbo.fromObject(object.template);
            }
            return message;
        };

        /**
         * Creates a plain object from an EntityDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.EntityDbo
         * @static
         * @param {v4.EntityDbo} message EntityDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tags = [];
                object.children = [];
                object.effects = [];
                object.choices = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.prerequisiteFormula = "";
                object.description = null;
                object.template = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.prerequisiteFormula != null && message.hasOwnProperty("prerequisiteFormula"))
                object.prerequisiteFormula = message.prerequisiteFormula;
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.v4.ChildEntityDbo.toObject(message.children[j], options);
            }
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.v4.DescriptionDbo.toObject(message.description, options);
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (var j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.v4.EffectDbo.toObject(message.effects[j], options);
            }
            if (message.choices && message.choices.length) {
                object.choices = [];
                for (var j = 0; j < message.choices.length; ++j)
                    object.choices[j] = $root.v4.ChoiceDbo.toObject(message.choices[j], options);
            }
            if (message.template != null && message.hasOwnProperty("template"))
                object.template = $root.v4.TemplateDbo.toObject(message.template, options);
            return object;
        };

        /**
         * Converts this EntityDbo to JSON.
         * @function toJSON
         * @memberof v4.EntityDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityDbo
         * @function getTypeUrl
         * @memberof v4.EntityDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.EntityDbo";
        };

        return EntityDbo;
    })();

    v4.ChildEntitySummaryDbo = (function() {

        /**
         * Properties of a ChildEntitySummaryDbo.
         * @memberof v4
         * @interface IChildEntitySummaryDbo
         * @property {string|null} [optionId] ChildEntitySummaryDbo optionId
         * @property {string|null} [condition] ChildEntitySummaryDbo condition
         * @property {string|null} [name] ChildEntitySummaryDbo name
         * @property {Array.<string>|null} [additionalTags] ChildEntitySummaryDbo additionalTags
         */

        /**
         * Constructs a new ChildEntitySummaryDbo.
         * @memberof v4
         * @classdesc Represents a ChildEntitySummaryDbo.
         * @implements IChildEntitySummaryDbo
         * @constructor
         * @param {v4.IChildEntitySummaryDbo=} [properties] Properties to set
         */
        function ChildEntitySummaryDbo(properties) {
            this.additionalTags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChildEntitySummaryDbo optionId.
         * @member {string} optionId
         * @memberof v4.ChildEntitySummaryDbo
         * @instance
         */
        ChildEntitySummaryDbo.prototype.optionId = "";

        /**
         * ChildEntitySummaryDbo condition.
         * @member {string} condition
         * @memberof v4.ChildEntitySummaryDbo
         * @instance
         */
        ChildEntitySummaryDbo.prototype.condition = "";

        /**
         * ChildEntitySummaryDbo name.
         * @member {string} name
         * @memberof v4.ChildEntitySummaryDbo
         * @instance
         */
        ChildEntitySummaryDbo.prototype.name = "";

        /**
         * ChildEntitySummaryDbo additionalTags.
         * @member {Array.<string>} additionalTags
         * @memberof v4.ChildEntitySummaryDbo
         * @instance
         */
        ChildEntitySummaryDbo.prototype.additionalTags = $util.emptyArray;

        /**
         * Creates a new ChildEntitySummaryDbo instance using the specified properties.
         * @function create
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {v4.IChildEntitySummaryDbo=} [properties] Properties to set
         * @returns {v4.ChildEntitySummaryDbo} ChildEntitySummaryDbo instance
         */
        ChildEntitySummaryDbo.create = function create(properties) {
            return new ChildEntitySummaryDbo(properties);
        };

        /**
         * Encodes the specified ChildEntitySummaryDbo message. Does not implicitly {@link v4.ChildEntitySummaryDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {v4.ChildEntitySummaryDbo} message ChildEntitySummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChildEntitySummaryDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.optionId != null && Object.hasOwnProperty.call(message, "optionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.optionId);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.condition);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.additionalTags != null && message.additionalTags.length)
                for (var i = 0; i < message.additionalTags.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.additionalTags[i]);
            return writer;
        };

        /**
         * Encodes the specified ChildEntitySummaryDbo message, length delimited. Does not implicitly {@link v4.ChildEntitySummaryDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {v4.ChildEntitySummaryDbo} message ChildEntitySummaryDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChildEntitySummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChildEntitySummaryDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.ChildEntitySummaryDbo} ChildEntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChildEntitySummaryDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.ChildEntitySummaryDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.optionId = reader.string();
                        break;
                    }
                case 2: {
                        message.condition = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.additionalTags && message.additionalTags.length))
                            message.additionalTags = [];
                        message.additionalTags.push(reader.string());
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
         * Decodes a ChildEntitySummaryDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.ChildEntitySummaryDbo} ChildEntitySummaryDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChildEntitySummaryDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChildEntitySummaryDbo message.
         * @function verify
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChildEntitySummaryDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.optionId != null && message.hasOwnProperty("optionId"))
                if (!$util.isString(message.optionId))
                    return "optionId: string expected";
            if (message.condition != null && message.hasOwnProperty("condition"))
                if (!$util.isString(message.condition))
                    return "condition: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.additionalTags != null && message.hasOwnProperty("additionalTags")) {
                if (!Array.isArray(message.additionalTags))
                    return "additionalTags: array expected";
                for (var i = 0; i < message.additionalTags.length; ++i)
                    if (!$util.isString(message.additionalTags[i]))
                        return "additionalTags: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ChildEntitySummaryDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.ChildEntitySummaryDbo} ChildEntitySummaryDbo
         */
        ChildEntitySummaryDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.ChildEntitySummaryDbo)
                return object;
            var message = new $root.v4.ChildEntitySummaryDbo();
            if (object.optionId != null)
                message.optionId = String(object.optionId);
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.name != null)
                message.name = String(object.name);
            if (object.additionalTags) {
                if (!Array.isArray(object.additionalTags))
                    throw TypeError(".v4.ChildEntitySummaryDbo.additionalTags: array expected");
                message.additionalTags = [];
                for (var i = 0; i < object.additionalTags.length; ++i)
                    message.additionalTags[i] = String(object.additionalTags[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChildEntitySummaryDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {v4.ChildEntitySummaryDbo} message ChildEntitySummaryDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChildEntitySummaryDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.additionalTags = [];
            if (options.defaults) {
                object.optionId = "";
                object.condition = "";
                object.name = "";
            }
            if (message.optionId != null && message.hasOwnProperty("optionId"))
                object.optionId = message.optionId;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = message.condition;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.additionalTags && message.additionalTags.length) {
                object.additionalTags = [];
                for (var j = 0; j < message.additionalTags.length; ++j)
                    object.additionalTags[j] = message.additionalTags[j];
            }
            return object;
        };

        /**
         * Converts this ChildEntitySummaryDbo to JSON.
         * @function toJSON
         * @memberof v4.ChildEntitySummaryDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChildEntitySummaryDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChildEntitySummaryDbo
         * @function getTypeUrl
         * @memberof v4.ChildEntitySummaryDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChildEntitySummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.ChildEntitySummaryDbo";
        };

        return ChildEntitySummaryDbo;
    })();

    v4.ChildEntityDbo = (function() {

        /**
         * Properties of a ChildEntityDbo.
         * @memberof v4
         * @interface IChildEntityDbo
         * @property {string|null} [optionId] ChildEntityDbo optionId
         * @property {string|null} [condition] ChildEntityDbo condition
         * @property {string|null} [name] ChildEntityDbo name
         * @property {Array.<string>|null} [additionalTags] ChildEntityDbo additionalTags
         * @property {Array.<v4.EffectDbo>|null} [effects] ChildEntityDbo effects
         * @property {Array.<v4.ChoiceDbo>|null} [choices] ChildEntityDbo choices
         * @property {v4.TemplateDbo|null} [template] ChildEntityDbo template
         */

        /**
         * Constructs a new ChildEntityDbo.
         * @memberof v4
         * @classdesc Represents a ChildEntityDbo.
         * @implements IChildEntityDbo
         * @constructor
         * @param {v4.IChildEntityDbo=} [properties] Properties to set
         */
        function ChildEntityDbo(properties) {
            this.additionalTags = [];
            this.effects = [];
            this.choices = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChildEntityDbo optionId.
         * @member {string} optionId
         * @memberof v4.ChildEntityDbo
         * @instance
         */
        ChildEntityDbo.prototype.optionId = "";

        /**
         * ChildEntityDbo condition.
         * @member {string} condition
         * @memberof v4.ChildEntityDbo
         * @instance
         */
        ChildEntityDbo.prototype.condition = "";

        /**
         * ChildEntityDbo name.
         * @member {string} name
         * @memberof v4.ChildEntityDbo
         * @instance
         */
        ChildEntityDbo.prototype.name = "";

        /**
         * ChildEntityDbo additionalTags.
         * @member {Array.<string>} additionalTags
         * @memberof v4.ChildEntityDbo
         * @instance
         */
        ChildEntityDbo.prototype.additionalTags = $util.emptyArray;

        /**
         * ChildEntityDbo effects.
         * @member {Array.<v4.EffectDbo>} effects
         * @memberof v4.ChildEntityDbo
         * @instance
         */
        ChildEntityDbo.prototype.effects = $util.emptyArray;

        /**
         * ChildEntityDbo choices.
         * @member {Array.<v4.ChoiceDbo>} choices
         * @memberof v4.ChildEntityDbo
         * @instance
         */
        ChildEntityDbo.prototype.choices = $util.emptyArray;

        /**
         * ChildEntityDbo template.
         * @member {v4.TemplateDbo|null|undefined} template
         * @memberof v4.ChildEntityDbo
         * @instance
         */
        ChildEntityDbo.prototype.template = null;

        /**
         * Creates a new ChildEntityDbo instance using the specified properties.
         * @function create
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {v4.IChildEntityDbo=} [properties] Properties to set
         * @returns {v4.ChildEntityDbo} ChildEntityDbo instance
         */
        ChildEntityDbo.create = function create(properties) {
            return new ChildEntityDbo(properties);
        };

        /**
         * Encodes the specified ChildEntityDbo message. Does not implicitly {@link v4.ChildEntityDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {v4.ChildEntityDbo} message ChildEntityDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChildEntityDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.optionId != null && Object.hasOwnProperty.call(message, "optionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.optionId);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.condition);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.additionalTags != null && message.additionalTags.length)
                for (var i = 0; i < message.additionalTags.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.additionalTags[i]);
            if (message.effects != null && message.effects.length)
                for (var i = 0; i < message.effects.length; ++i)
                    $root.v4.EffectDbo.encode(message.effects[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.choices != null && message.choices.length)
                for (var i = 0; i < message.choices.length; ++i)
                    $root.v4.ChoiceDbo.encode(message.choices[i], writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.template != null && Object.hasOwnProperty.call(message, "template"))
                $root.v4.TemplateDbo.encode(message.template, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChildEntityDbo message, length delimited. Does not implicitly {@link v4.ChildEntityDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {v4.ChildEntityDbo} message ChildEntityDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChildEntityDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChildEntityDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.ChildEntityDbo} ChildEntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChildEntityDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.ChildEntityDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.optionId = reader.string();
                        break;
                    }
                case 2: {
                        message.condition = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.additionalTags && message.additionalTags.length))
                            message.additionalTags = [];
                        message.additionalTags.push(reader.string());
                        break;
                    }
                case 101: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.v4.EffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 102: {
                        if (!(message.choices && message.choices.length))
                            message.choices = [];
                        message.choices.push($root.v4.ChoiceDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 103: {
                        message.template = $root.v4.TemplateDbo.decode(reader, reader.uint32());
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
         * Decodes a ChildEntityDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.ChildEntityDbo} ChildEntityDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChildEntityDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChildEntityDbo message.
         * @function verify
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChildEntityDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.optionId != null && message.hasOwnProperty("optionId"))
                if (!$util.isString(message.optionId))
                    return "optionId: string expected";
            if (message.condition != null && message.hasOwnProperty("condition"))
                if (!$util.isString(message.condition))
                    return "condition: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.additionalTags != null && message.hasOwnProperty("additionalTags")) {
                if (!Array.isArray(message.additionalTags))
                    return "additionalTags: array expected";
                for (var i = 0; i < message.additionalTags.length; ++i)
                    if (!$util.isString(message.additionalTags[i]))
                        return "additionalTags: string[] expected";
            }
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (var i = 0; i < message.effects.length; ++i) {
                    var error = $root.v4.EffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.choices != null && message.hasOwnProperty("choices")) {
                if (!Array.isArray(message.choices))
                    return "choices: array expected";
                for (var i = 0; i < message.choices.length; ++i) {
                    var error = $root.v4.ChoiceDbo.verify(message.choices[i]);
                    if (error)
                        return "choices." + error;
                }
            }
            if (message.template != null && message.hasOwnProperty("template")) {
                var error = $root.v4.TemplateDbo.verify(message.template);
                if (error)
                    return "template." + error;
            }
            return null;
        };

        /**
         * Creates a ChildEntityDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.ChildEntityDbo} ChildEntityDbo
         */
        ChildEntityDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.ChildEntityDbo)
                return object;
            var message = new $root.v4.ChildEntityDbo();
            if (object.optionId != null)
                message.optionId = String(object.optionId);
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.name != null)
                message.name = String(object.name);
            if (object.additionalTags) {
                if (!Array.isArray(object.additionalTags))
                    throw TypeError(".v4.ChildEntityDbo.additionalTags: array expected");
                message.additionalTags = [];
                for (var i = 0; i < object.additionalTags.length; ++i)
                    message.additionalTags[i] = String(object.additionalTags[i]);
            }
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".v4.ChildEntityDbo.effects: array expected");
                message.effects = [];
                for (var i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".v4.ChildEntityDbo.effects: object expected");
                    message.effects[i] = $root.v4.EffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.choices) {
                if (!Array.isArray(object.choices))
                    throw TypeError(".v4.ChildEntityDbo.choices: array expected");
                message.choices = [];
                for (var i = 0; i < object.choices.length; ++i) {
                    if (typeof object.choices[i] !== "object")
                        throw TypeError(".v4.ChildEntityDbo.choices: object expected");
                    message.choices[i] = $root.v4.ChoiceDbo.fromObject(object.choices[i]);
                }
            }
            if (object.template != null) {
                if (typeof object.template !== "object")
                    throw TypeError(".v4.ChildEntityDbo.template: object expected");
                message.template = $root.v4.TemplateDbo.fromObject(object.template);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChildEntityDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {v4.ChildEntityDbo} message ChildEntityDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChildEntityDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.additionalTags = [];
                object.effects = [];
                object.choices = [];
            }
            if (options.defaults) {
                object.optionId = "";
                object.condition = "";
                object.name = "";
                object.template = null;
            }
            if (message.optionId != null && message.hasOwnProperty("optionId"))
                object.optionId = message.optionId;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = message.condition;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.additionalTags && message.additionalTags.length) {
                object.additionalTags = [];
                for (var j = 0; j < message.additionalTags.length; ++j)
                    object.additionalTags[j] = message.additionalTags[j];
            }
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (var j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.v4.EffectDbo.toObject(message.effects[j], options);
            }
            if (message.choices && message.choices.length) {
                object.choices = [];
                for (var j = 0; j < message.choices.length; ++j)
                    object.choices[j] = $root.v4.ChoiceDbo.toObject(message.choices[j], options);
            }
            if (message.template != null && message.hasOwnProperty("template"))
                object.template = $root.v4.TemplateDbo.toObject(message.template, options);
            return object;
        };

        /**
         * Converts this ChildEntityDbo to JSON.
         * @function toJSON
         * @memberof v4.ChildEntityDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChildEntityDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChildEntityDbo
         * @function getTypeUrl
         * @memberof v4.ChildEntityDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChildEntityDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.ChildEntityDbo";
        };

        return ChildEntityDbo;
    })();

    v4.EntityDatabaseDbo = (function() {

        /**
         * Properties of an EntityDatabaseDbo.
         * @memberof v4
         * @interface IEntityDatabaseDbo
         * @property {string|null} [databaseId] EntityDatabaseDbo databaseId
         * @property {Array.<v4.EntitySummaryDbo>|null} [summaries] EntityDatabaseDbo summaries
         */

        /**
         * Constructs a new EntityDatabaseDbo.
         * @memberof v4
         * @classdesc Represents an EntityDatabaseDbo.
         * @implements IEntityDatabaseDbo
         * @constructor
         * @param {v4.IEntityDatabaseDbo=} [properties] Properties to set
         */
        function EntityDatabaseDbo(properties) {
            this.summaries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityDatabaseDbo databaseId.
         * @member {string} databaseId
         * @memberof v4.EntityDatabaseDbo
         * @instance
         */
        EntityDatabaseDbo.prototype.databaseId = "";

        /**
         * EntityDatabaseDbo summaries.
         * @member {Array.<v4.EntitySummaryDbo>} summaries
         * @memberof v4.EntityDatabaseDbo
         * @instance
         */
        EntityDatabaseDbo.prototype.summaries = $util.emptyArray;

        /**
         * Creates a new EntityDatabaseDbo instance using the specified properties.
         * @function create
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {v4.IEntityDatabaseDbo=} [properties] Properties to set
         * @returns {v4.EntityDatabaseDbo} EntityDatabaseDbo instance
         */
        EntityDatabaseDbo.create = function create(properties) {
            return new EntityDatabaseDbo(properties);
        };

        /**
         * Encodes the specified EntityDatabaseDbo message. Does not implicitly {@link v4.EntityDatabaseDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {v4.EntityDatabaseDbo} message EntityDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityDatabaseDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.databaseId != null && Object.hasOwnProperty.call(message, "databaseId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.databaseId);
            if (message.summaries != null && message.summaries.length)
                for (var i = 0; i < message.summaries.length; ++i)
                    $root.v4.EntitySummaryDbo.encode(message.summaries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EntityDatabaseDbo message, length delimited. Does not implicitly {@link v4.EntityDatabaseDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {v4.EntityDatabaseDbo} message EntityDatabaseDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityDatabaseDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityDatabaseDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.EntityDatabaseDbo} EntityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityDatabaseDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.EntityDatabaseDbo();
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
                        message.summaries.push($root.v4.EntitySummaryDbo.decode(reader, reader.uint32()));
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
         * Decodes an EntityDatabaseDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.EntityDatabaseDbo} EntityDatabaseDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityDatabaseDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityDatabaseDbo message.
         * @function verify
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityDatabaseDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.databaseId != null && message.hasOwnProperty("databaseId"))
                if (!$util.isString(message.databaseId))
                    return "databaseId: string expected";
            if (message.summaries != null && message.hasOwnProperty("summaries")) {
                if (!Array.isArray(message.summaries))
                    return "summaries: array expected";
                for (var i = 0; i < message.summaries.length; ++i) {
                    var error = $root.v4.EntitySummaryDbo.verify(message.summaries[i]);
                    if (error)
                        return "summaries." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EntityDatabaseDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.EntityDatabaseDbo} EntityDatabaseDbo
         */
        EntityDatabaseDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.EntityDatabaseDbo)
                return object;
            var message = new $root.v4.EntityDatabaseDbo();
            if (object.databaseId != null)
                message.databaseId = String(object.databaseId);
            if (object.summaries) {
                if (!Array.isArray(object.summaries))
                    throw TypeError(".v4.EntityDatabaseDbo.summaries: array expected");
                message.summaries = [];
                for (var i = 0; i < object.summaries.length; ++i) {
                    if (typeof object.summaries[i] !== "object")
                        throw TypeError(".v4.EntityDatabaseDbo.summaries: object expected");
                    message.summaries[i] = $root.v4.EntitySummaryDbo.fromObject(object.summaries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EntityDatabaseDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {v4.EntityDatabaseDbo} message EntityDatabaseDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityDatabaseDbo.toObject = function toObject(message, options) {
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
                    object.summaries[j] = $root.v4.EntitySummaryDbo.toObject(message.summaries[j], options);
            }
            return object;
        };

        /**
         * Converts this EntityDatabaseDbo to JSON.
         * @function toJSON
         * @memberof v4.EntityDatabaseDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityDatabaseDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityDatabaseDbo
         * @function getTypeUrl
         * @memberof v4.EntityDatabaseDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityDatabaseDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.EntityDatabaseDbo";
        };

        return EntityDatabaseDbo;
    })();

    v4.TemplateDbo = (function() {

        /**
         * Properties of a TemplateDbo.
         * @memberof v4
         * @interface ITemplateDbo
         * @property {string|null} [id] TemplateDbo id
         * @property {Array.<v4.TemplateSectionDbo>|null} [sections] TemplateDbo sections
         */

        /**
         * Constructs a new TemplateDbo.
         * @memberof v4
         * @classdesc Represents a TemplateDbo.
         * @implements ITemplateDbo
         * @constructor
         * @param {v4.ITemplateDbo=} [properties] Properties to set
         */
        function TemplateDbo(properties) {
            this.sections = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TemplateDbo id.
         * @member {string} id
         * @memberof v4.TemplateDbo
         * @instance
         */
        TemplateDbo.prototype.id = "";

        /**
         * TemplateDbo sections.
         * @member {Array.<v4.TemplateSectionDbo>} sections
         * @memberof v4.TemplateDbo
         * @instance
         */
        TemplateDbo.prototype.sections = $util.emptyArray;

        /**
         * Creates a new TemplateDbo instance using the specified properties.
         * @function create
         * @memberof v4.TemplateDbo
         * @static
         * @param {v4.ITemplateDbo=} [properties] Properties to set
         * @returns {v4.TemplateDbo} TemplateDbo instance
         */
        TemplateDbo.create = function create(properties) {
            return new TemplateDbo(properties);
        };

        /**
         * Encodes the specified TemplateDbo message. Does not implicitly {@link v4.TemplateDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.TemplateDbo
         * @static
         * @param {v4.TemplateDbo} message TemplateDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemplateDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.sections != null && message.sections.length)
                for (var i = 0; i < message.sections.length; ++i)
                    $root.v4.TemplateSectionDbo.encode(message.sections[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TemplateDbo message, length delimited. Does not implicitly {@link v4.TemplateDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.TemplateDbo
         * @static
         * @param {v4.TemplateDbo} message TemplateDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemplateDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TemplateDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.TemplateDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.TemplateDbo} TemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemplateDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.TemplateDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.sections && message.sections.length))
                            message.sections = [];
                        message.sections.push($root.v4.TemplateSectionDbo.decode(reader, reader.uint32()));
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
         * Decodes a TemplateDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v4.TemplateDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.TemplateDbo} TemplateDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemplateDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TemplateDbo message.
         * @function verify
         * @memberof v4.TemplateDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TemplateDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.sections != null && message.hasOwnProperty("sections")) {
                if (!Array.isArray(message.sections))
                    return "sections: array expected";
                for (var i = 0; i < message.sections.length; ++i) {
                    var error = $root.v4.TemplateSectionDbo.verify(message.sections[i]);
                    if (error)
                        return "sections." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TemplateDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.TemplateDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.TemplateDbo} TemplateDbo
         */
        TemplateDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.TemplateDbo)
                return object;
            var message = new $root.v4.TemplateDbo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.sections) {
                if (!Array.isArray(object.sections))
                    throw TypeError(".v4.TemplateDbo.sections: array expected");
                message.sections = [];
                for (var i = 0; i < object.sections.length; ++i) {
                    if (typeof object.sections[i] !== "object")
                        throw TypeError(".v4.TemplateDbo.sections: object expected");
                    message.sections[i] = $root.v4.TemplateSectionDbo.fromObject(object.sections[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TemplateDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.TemplateDbo
         * @static
         * @param {v4.TemplateDbo} message TemplateDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TemplateDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sections = [];
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.sections && message.sections.length) {
                object.sections = [];
                for (var j = 0; j < message.sections.length; ++j)
                    object.sections[j] = $root.v4.TemplateSectionDbo.toObject(message.sections[j], options);
            }
            return object;
        };

        /**
         * Converts this TemplateDbo to JSON.
         * @function toJSON
         * @memberof v4.TemplateDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TemplateDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TemplateDbo
         * @function getTypeUrl
         * @memberof v4.TemplateDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TemplateDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.TemplateDbo";
        };

        return TemplateDbo;
    })();

    v4.TemplateSectionDbo = (function() {

        /**
         * Properties of a TemplateSectionDbo.
         * @memberof v4
         * @interface ITemplateSectionDbo
         * @property {string|null} [condition] TemplateSectionDbo condition
         * @property {Array.<v4.EffectDbo>|null} [effects] TemplateSectionDbo effects
         * @property {Array.<v4.ChoiceDbo>|null} [choices] TemplateSectionDbo choices
         */

        /**
         * Constructs a new TemplateSectionDbo.
         * @memberof v4
         * @classdesc Represents a TemplateSectionDbo.
         * @implements ITemplateSectionDbo
         * @constructor
         * @param {v4.ITemplateSectionDbo=} [properties] Properties to set
         */
        function TemplateSectionDbo(properties) {
            this.effects = [];
            this.choices = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TemplateSectionDbo condition.
         * @member {string} condition
         * @memberof v4.TemplateSectionDbo
         * @instance
         */
        TemplateSectionDbo.prototype.condition = "";

        /**
         * TemplateSectionDbo effects.
         * @member {Array.<v4.EffectDbo>} effects
         * @memberof v4.TemplateSectionDbo
         * @instance
         */
        TemplateSectionDbo.prototype.effects = $util.emptyArray;

        /**
         * TemplateSectionDbo choices.
         * @member {Array.<v4.ChoiceDbo>} choices
         * @memberof v4.TemplateSectionDbo
         * @instance
         */
        TemplateSectionDbo.prototype.choices = $util.emptyArray;

        /**
         * Creates a new TemplateSectionDbo instance using the specified properties.
         * @function create
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {v4.ITemplateSectionDbo=} [properties] Properties to set
         * @returns {v4.TemplateSectionDbo} TemplateSectionDbo instance
         */
        TemplateSectionDbo.create = function create(properties) {
            return new TemplateSectionDbo(properties);
        };

        /**
         * Encodes the specified TemplateSectionDbo message. Does not implicitly {@link v4.TemplateSectionDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {v4.TemplateSectionDbo} message TemplateSectionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemplateSectionDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.condition);
            if (message.effects != null && message.effects.length)
                for (var i = 0; i < message.effects.length; ++i)
                    $root.v4.EffectDbo.encode(message.effects[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.choices != null && message.choices.length)
                for (var i = 0; i < message.choices.length; ++i)
                    $root.v4.ChoiceDbo.encode(message.choices[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TemplateSectionDbo message, length delimited. Does not implicitly {@link v4.TemplateSectionDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {v4.TemplateSectionDbo} message TemplateSectionDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemplateSectionDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TemplateSectionDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.TemplateSectionDbo} TemplateSectionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemplateSectionDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.TemplateSectionDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.condition = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.v4.EffectDbo.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.choices && message.choices.length))
                            message.choices = [];
                        message.choices.push($root.v4.ChoiceDbo.decode(reader, reader.uint32()));
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
         * Decodes a TemplateSectionDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.TemplateSectionDbo} TemplateSectionDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemplateSectionDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TemplateSectionDbo message.
         * @function verify
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TemplateSectionDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.condition != null && message.hasOwnProperty("condition"))
                if (!$util.isString(message.condition))
                    return "condition: string expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (var i = 0; i < message.effects.length; ++i) {
                    var error = $root.v4.EffectDbo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.choices != null && message.hasOwnProperty("choices")) {
                if (!Array.isArray(message.choices))
                    return "choices: array expected";
                for (var i = 0; i < message.choices.length; ++i) {
                    var error = $root.v4.ChoiceDbo.verify(message.choices[i]);
                    if (error)
                        return "choices." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TemplateSectionDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.TemplateSectionDbo} TemplateSectionDbo
         */
        TemplateSectionDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.TemplateSectionDbo)
                return object;
            var message = new $root.v4.TemplateSectionDbo();
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".v4.TemplateSectionDbo.effects: array expected");
                message.effects = [];
                for (var i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".v4.TemplateSectionDbo.effects: object expected");
                    message.effects[i] = $root.v4.EffectDbo.fromObject(object.effects[i]);
                }
            }
            if (object.choices) {
                if (!Array.isArray(object.choices))
                    throw TypeError(".v4.TemplateSectionDbo.choices: array expected");
                message.choices = [];
                for (var i = 0; i < object.choices.length; ++i) {
                    if (typeof object.choices[i] !== "object")
                        throw TypeError(".v4.TemplateSectionDbo.choices: object expected");
                    message.choices[i] = $root.v4.ChoiceDbo.fromObject(object.choices[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TemplateSectionDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {v4.TemplateSectionDbo} message TemplateSectionDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TemplateSectionDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.effects = [];
                object.choices = [];
            }
            if (options.defaults)
                object.condition = "";
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = message.condition;
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (var j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.v4.EffectDbo.toObject(message.effects[j], options);
            }
            if (message.choices && message.choices.length) {
                object.choices = [];
                for (var j = 0; j < message.choices.length; ++j)
                    object.choices[j] = $root.v4.ChoiceDbo.toObject(message.choices[j], options);
            }
            return object;
        };

        /**
         * Converts this TemplateSectionDbo to JSON.
         * @function toJSON
         * @memberof v4.TemplateSectionDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TemplateSectionDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TemplateSectionDbo
         * @function getTypeUrl
         * @memberof v4.TemplateSectionDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TemplateSectionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.TemplateSectionDbo";
        };

        return TemplateSectionDbo;
    })();

    v4.EffectDbo = (function() {

        /**
         * Properties of an EffectDbo.
         * @memberof v4
         * @interface IEffectDbo
         * @property {string|null} [targetKey] EffectDbo targetKey
         * @property {string|null} [condition] EffectDbo condition
         * @property {v4.EffectDbo.SetActionDbo|null} [setAction] EffectDbo setAction
         * @property {v4.EffectDbo.AddActionDbo|null} [addAction] EffectDbo addAction
         * @property {v4.EffectDbo.RenameKeyDbo|null} [renameAction] EffectDbo renameAction
         */

        /**
         * Constructs a new EffectDbo.
         * @memberof v4
         * @classdesc Represents an EffectDbo.
         * @implements IEffectDbo
         * @constructor
         * @param {v4.IEffectDbo=} [properties] Properties to set
         */
        function EffectDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EffectDbo targetKey.
         * @member {string} targetKey
         * @memberof v4.EffectDbo
         * @instance
         */
        EffectDbo.prototype.targetKey = "";

        /**
         * EffectDbo condition.
         * @member {string} condition
         * @memberof v4.EffectDbo
         * @instance
         */
        EffectDbo.prototype.condition = "";

        /**
         * EffectDbo setAction.
         * @member {v4.EffectDbo.SetActionDbo|null|undefined} setAction
         * @memberof v4.EffectDbo
         * @instance
         */
        EffectDbo.prototype.setAction = null;

        /**
         * EffectDbo addAction.
         * @member {v4.EffectDbo.AddActionDbo|null|undefined} addAction
         * @memberof v4.EffectDbo
         * @instance
         */
        EffectDbo.prototype.addAction = null;

        /**
         * EffectDbo renameAction.
         * @member {v4.EffectDbo.RenameKeyDbo|null|undefined} renameAction
         * @memberof v4.EffectDbo
         * @instance
         */
        EffectDbo.prototype.renameAction = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * EffectDbo action.
         * @member {"setAction"|"addAction"|"renameAction"|undefined} action
         * @memberof v4.EffectDbo
         * @instance
         */
        Object.defineProperty(EffectDbo.prototype, "action", {
            get: $util.oneOfGetter($oneOfFields = ["setAction", "addAction", "renameAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EffectDbo instance using the specified properties.
         * @function create
         * @memberof v4.EffectDbo
         * @static
         * @param {v4.IEffectDbo=} [properties] Properties to set
         * @returns {v4.EffectDbo} EffectDbo instance
         */
        EffectDbo.create = function create(properties) {
            return new EffectDbo(properties);
        };

        /**
         * Encodes the specified EffectDbo message. Does not implicitly {@link v4.EffectDbo.verify|verify} messages.
         * @function encode
         * @memberof v4.EffectDbo
         * @static
         * @param {v4.EffectDbo} message EffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EffectDbo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetKey != null && Object.hasOwnProperty.call(message, "targetKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetKey);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.condition);
            if (message.setAction != null && Object.hasOwnProperty.call(message, "setAction"))
                $root.v4.EffectDbo.SetActionDbo.encode(message.setAction, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.addAction != null && Object.hasOwnProperty.call(message, "addAction"))
                $root.v4.EffectDbo.AddActionDbo.encode(message.addAction, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.renameAction != null && Object.hasOwnProperty.call(message, "renameAction"))
                $root.v4.EffectDbo.RenameKeyDbo.encode(message.renameAction, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EffectDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v4.EffectDbo
         * @static
         * @param {v4.EffectDbo} message EffectDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EffectDbo message from the specified reader or buffer.
         * @function decode
         * @memberof v4.EffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v4.EffectDbo} EffectDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EffectDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.EffectDbo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.targetKey = reader.string();
                        break;
                    }
                case 2: {
                        message.condition = reader.string();
                        break;
                    }
                case 100: {
                        message.setAction = $root.v4.EffectDbo.SetActionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.addAction = $root.v4.EffectDbo.AddActionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 102: {
                        message.renameAction = $root.v4.EffectDbo.RenameKeyDbo.decode(reader, reader.uint32());
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
         * @memberof v4.EffectDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v4.EffectDbo} EffectDbo
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
         * @memberof v4.EffectDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EffectDbo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.targetKey != null && message.hasOwnProperty("targetKey"))
                if (!$util.isString(message.targetKey))
                    return "targetKey: string expected";
            if (message.condition != null && message.hasOwnProperty("condition"))
                if (!$util.isString(message.condition))
                    return "condition: string expected";
            if (message.setAction != null && message.hasOwnProperty("setAction")) {
                properties.action = 1;
                {
                    var error = $root.v4.EffectDbo.SetActionDbo.verify(message.setAction);
                    if (error)
                        return "setAction." + error;
                }
            }
            if (message.addAction != null && message.hasOwnProperty("addAction")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    var error = $root.v4.EffectDbo.AddActionDbo.verify(message.addAction);
                    if (error)
                        return "addAction." + error;
                }
            }
            if (message.renameAction != null && message.hasOwnProperty("renameAction")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    var error = $root.v4.EffectDbo.RenameKeyDbo.verify(message.renameAction);
                    if (error)
                        return "renameAction." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EffectDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v4.EffectDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v4.EffectDbo} EffectDbo
         */
        EffectDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.v4.EffectDbo)
                return object;
            var message = new $root.v4.EffectDbo();
            if (object.targetKey != null)
                message.targetKey = String(object.targetKey);
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.setAction != null) {
                if (typeof object.setAction !== "object")
                    throw TypeError(".v4.EffectDbo.setAction: object expected");
                message.setAction = $root.v4.EffectDbo.SetActionDbo.fromObject(object.setAction);
            }
            if (object.addAction != null) {
                if (typeof object.addAction !== "object")
                    throw TypeError(".v4.EffectDbo.addAction: object expected");
                message.addAction = $root.v4.EffectDbo.AddActionDbo.fromObject(object.addAction);
            }
            if (object.renameAction != null) {
                if (typeof object.renameAction !== "object")
                    throw TypeError(".v4.EffectDbo.renameAction: object expected");
                message.renameAction = $root.v4.EffectDbo.RenameKeyDbo.fromObject(object.renameAction);
            }
            return message;
        };

        /**
         * Creates a plain object from an EffectDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v4.EffectDbo
         * @static
         * @param {v4.EffectDbo} message EffectDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EffectDbo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.targetKey = "";
                object.condition = "";
            }
            if (message.targetKey != null && message.hasOwnProperty("targetKey"))
                object.targetKey = message.targetKey;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = message.condition;
            if (message.setAction != null && message.hasOwnProperty("setAction")) {
                object.setAction = $root.v4.EffectDbo.SetActionDbo.toObject(message.setAction, options);
                if (options.oneofs)
                    object.action = "setAction";
            }
            if (message.addAction != null && message.hasOwnProperty("addAction")) {
                object.addAction = $root.v4.EffectDbo.AddActionDbo.toObject(message.addAction, options);
                if (options.oneofs)
                    object.action = "addAction";
            }
            if (message.renameAction != null && message.hasOwnProperty("renameAction")) {
                object.renameAction = $root.v4.EffectDbo.RenameKeyDbo.toObject(message.renameAction, options);
                if (options.oneofs)
                    object.action = "renameAction";
            }
            return object;
        };

        /**
         * Converts this EffectDbo to JSON.
         * @function toJSON
         * @memberof v4.EffectDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EffectDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EffectDbo
         * @function getTypeUrl
         * @memberof v4.EffectDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/v4.EffectDbo";
        };

        EffectDbo.SetActionDbo = (function() {

            /**
             * Properties of a SetActionDbo.
             * @memberof v4.EffectDbo
             * @interface ISetActionDbo
             * @property {string|null} [formula] SetActionDbo formula
             * @property {number|null} [numberValue] SetActionDbo numberValue
             */

            /**
             * Constructs a new SetActionDbo.
             * @memberof v4.EffectDbo
             * @classdesc Represents a SetActionDbo.
             * @implements ISetActionDbo
             * @constructor
             * @param {v4.EffectDbo.ISetActionDbo=} [properties] Properties to set
             */
            function SetActionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetActionDbo formula.
             * @member {string|null|undefined} formula
             * @memberof v4.EffectDbo.SetActionDbo
             * @instance
             */
            SetActionDbo.prototype.formula = null;

            /**
             * SetActionDbo numberValue.
             * @member {number|null|undefined} numberValue
             * @memberof v4.EffectDbo.SetActionDbo
             * @instance
             */
            SetActionDbo.prototype.numberValue = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * SetActionDbo value.
             * @member {"formula"|"numberValue"|undefined} value
             * @memberof v4.EffectDbo.SetActionDbo
             * @instance
             */
            Object.defineProperty(SetActionDbo.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["formula", "numberValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SetActionDbo instance using the specified properties.
             * @function create
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {v4.EffectDbo.ISetActionDbo=} [properties] Properties to set
             * @returns {v4.EffectDbo.SetActionDbo} SetActionDbo instance
             */
            SetActionDbo.create = function create(properties) {
                return new SetActionDbo(properties);
            };

            /**
             * Encodes the specified SetActionDbo message. Does not implicitly {@link v4.EffectDbo.SetActionDbo.verify|verify} messages.
             * @function encode
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {v4.EffectDbo.SetActionDbo} message SetActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetActionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.formula != null && Object.hasOwnProperty.call(message, "formula"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.formula);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numberValue);
                return writer;
            };

            /**
             * Encodes the specified SetActionDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.SetActionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {v4.EffectDbo.SetActionDbo} message SetActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetActionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetActionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v4.EffectDbo.SetActionDbo} SetActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetActionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.EffectDbo.SetActionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.formula = reader.string();
                            break;
                        }
                    case 2: {
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
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v4.EffectDbo.SetActionDbo} SetActionDbo
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
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetActionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
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
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v4.EffectDbo.SetActionDbo} SetActionDbo
             */
            SetActionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v4.EffectDbo.SetActionDbo)
                    return object;
                var message = new $root.v4.EffectDbo.SetActionDbo();
                if (object.formula != null)
                    message.formula = String(object.formula);
                if (object.numberValue != null)
                    message.numberValue = object.numberValue | 0;
                return message;
            };

            /**
             * Creates a plain object from a SetActionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {v4.EffectDbo.SetActionDbo} message SetActionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetActionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
             * @memberof v4.EffectDbo.SetActionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetActionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SetActionDbo
             * @function getTypeUrl
             * @memberof v4.EffectDbo.SetActionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetActionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v4.EffectDbo.SetActionDbo";
            };

            return SetActionDbo;
        })();

        EffectDbo.AddActionDbo = (function() {

            /**
             * Properties of an AddActionDbo.
             * @memberof v4.EffectDbo
             * @interface IAddActionDbo
             * @property {number|null} [numberDelta] AddActionDbo numberDelta
             */

            /**
             * Constructs a new AddActionDbo.
             * @memberof v4.EffectDbo
             * @classdesc Represents an AddActionDbo.
             * @implements IAddActionDbo
             * @constructor
             * @param {v4.EffectDbo.IAddActionDbo=} [properties] Properties to set
             */
            function AddActionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddActionDbo numberDelta.
             * @member {number} numberDelta
             * @memberof v4.EffectDbo.AddActionDbo
             * @instance
             */
            AddActionDbo.prototype.numberDelta = 0;

            /**
             * Creates a new AddActionDbo instance using the specified properties.
             * @function create
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {v4.EffectDbo.IAddActionDbo=} [properties] Properties to set
             * @returns {v4.EffectDbo.AddActionDbo} AddActionDbo instance
             */
            AddActionDbo.create = function create(properties) {
                return new AddActionDbo(properties);
            };

            /**
             * Encodes the specified AddActionDbo message. Does not implicitly {@link v4.EffectDbo.AddActionDbo.verify|verify} messages.
             * @function encode
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {v4.EffectDbo.AddActionDbo} message AddActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddActionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.numberDelta != null && Object.hasOwnProperty.call(message, "numberDelta"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.numberDelta);
                return writer;
            };

            /**
             * Encodes the specified AddActionDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.AddActionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {v4.EffectDbo.AddActionDbo} message AddActionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddActionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AddActionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v4.EffectDbo.AddActionDbo} AddActionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddActionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.EffectDbo.AddActionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
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
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v4.EffectDbo.AddActionDbo} AddActionDbo
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
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddActionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.numberDelta != null && message.hasOwnProperty("numberDelta"))
                    if (!$util.isInteger(message.numberDelta))
                        return "numberDelta: integer expected";
                return null;
            };

            /**
             * Creates an AddActionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v4.EffectDbo.AddActionDbo} AddActionDbo
             */
            AddActionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v4.EffectDbo.AddActionDbo)
                    return object;
                var message = new $root.v4.EffectDbo.AddActionDbo();
                if (object.numberDelta != null)
                    message.numberDelta = object.numberDelta | 0;
                return message;
            };

            /**
             * Creates a plain object from an AddActionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {v4.EffectDbo.AddActionDbo} message AddActionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddActionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.numberDelta = 0;
                if (message.numberDelta != null && message.hasOwnProperty("numberDelta"))
                    object.numberDelta = message.numberDelta;
                return object;
            };

            /**
             * Converts this AddActionDbo to JSON.
             * @function toJSON
             * @memberof v4.EffectDbo.AddActionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddActionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AddActionDbo
             * @function getTypeUrl
             * @memberof v4.EffectDbo.AddActionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AddActionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v4.EffectDbo.AddActionDbo";
            };

            return AddActionDbo;
        })();

        EffectDbo.RenameKeyDbo = (function() {

            /**
             * Properties of a RenameKeyDbo.
             * @memberof v4.EffectDbo
             * @interface IRenameKeyDbo
             * @property {string|null} [renamedKey] RenameKeyDbo renamedKey
             */

            /**
             * Constructs a new RenameKeyDbo.
             * @memberof v4.EffectDbo
             * @classdesc Represents a RenameKeyDbo.
             * @implements IRenameKeyDbo
             * @constructor
             * @param {v4.EffectDbo.IRenameKeyDbo=} [properties] Properties to set
             */
            function RenameKeyDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RenameKeyDbo renamedKey.
             * @member {string} renamedKey
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @instance
             */
            RenameKeyDbo.prototype.renamedKey = "";

            /**
             * Creates a new RenameKeyDbo instance using the specified properties.
             * @function create
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {v4.EffectDbo.IRenameKeyDbo=} [properties] Properties to set
             * @returns {v4.EffectDbo.RenameKeyDbo} RenameKeyDbo instance
             */
            RenameKeyDbo.create = function create(properties) {
                return new RenameKeyDbo(properties);
            };

            /**
             * Encodes the specified RenameKeyDbo message. Does not implicitly {@link v4.EffectDbo.RenameKeyDbo.verify|verify} messages.
             * @function encode
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {v4.EffectDbo.RenameKeyDbo} message RenameKeyDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenameKeyDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.renamedKey != null && Object.hasOwnProperty.call(message, "renamedKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.renamedKey);
                return writer;
            };

            /**
             * Encodes the specified RenameKeyDbo message, length delimited. Does not implicitly {@link v4.EffectDbo.RenameKeyDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {v4.EffectDbo.RenameKeyDbo} message RenameKeyDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenameKeyDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RenameKeyDbo message from the specified reader or buffer.
             * @function decode
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v4.EffectDbo.RenameKeyDbo} RenameKeyDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenameKeyDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v4.EffectDbo.RenameKeyDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.renamedKey = reader.string();
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
             * Decodes a RenameKeyDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {v4.EffectDbo.RenameKeyDbo} RenameKeyDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenameKeyDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RenameKeyDbo message.
             * @function verify
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenameKeyDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.renamedKey != null && message.hasOwnProperty("renamedKey"))
                    if (!$util.isString(message.renamedKey))
                        return "renamedKey: string expected";
                return null;
            };

            /**
             * Creates a RenameKeyDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {v4.EffectDbo.RenameKeyDbo} RenameKeyDbo
             */
            RenameKeyDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.v4.EffectDbo.RenameKeyDbo)
                    return object;
                var message = new $root.v4.EffectDbo.RenameKeyDbo();
                if (object.renamedKey != null)
                    message.renamedKey = String(object.renamedKey);
                return message;
            };

            /**
             * Creates a plain object from a RenameKeyDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {v4.EffectDbo.RenameKeyDbo} message RenameKeyDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenameKeyDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.renamedKey = "";
                if (message.renamedKey != null && message.hasOwnProperty("renamedKey"))
                    object.renamedKey = message.renamedKey;
                return object;
            };

            /**
             * Converts this RenameKeyDbo to JSON.
             * @function toJSON
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenameKeyDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RenameKeyDbo
             * @function getTypeUrl
             * @memberof v4.EffectDbo.RenameKeyDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RenameKeyDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/v4.EffectDbo.RenameKeyDbo";
            };

            return RenameKeyDbo;
        })();

        return EffectDbo;
    })();

    return v4;
})();

$root.FormulaDbo = (function() {

    /**
     * Properties of a FormulaDbo.
     * @exports IFormulaDbo
     * @interface IFormulaDbo
     * @property {FormulaDbo.OperationDbo|null} [operation] FormulaDbo operation
     */

    /**
     * Constructs a new FormulaDbo.
     * @exports FormulaDbo
     * @classdesc Represents a FormulaDbo.
     * @implements IFormulaDbo
     * @constructor
     * @param {IFormulaDbo=} [properties] Properties to set
     */
    function FormulaDbo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FormulaDbo operation.
     * @member {FormulaDbo.OperationDbo|null|undefined} operation
     * @memberof FormulaDbo
     * @instance
     */
    FormulaDbo.prototype.operation = null;

    /**
     * Creates a new FormulaDbo instance using the specified properties.
     * @function create
     * @memberof FormulaDbo
     * @static
     * @param {IFormulaDbo=} [properties] Properties to set
     * @returns {FormulaDbo} FormulaDbo instance
     */
    FormulaDbo.create = function create(properties) {
        return new FormulaDbo(properties);
    };

    /**
     * Encodes the specified FormulaDbo message. Does not implicitly {@link FormulaDbo.verify|verify} messages.
     * @function encode
     * @memberof FormulaDbo
     * @static
     * @param {FormulaDbo} message FormulaDbo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FormulaDbo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
            $root.FormulaDbo.OperationDbo.encode(message.operation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FormulaDbo message, length delimited. Does not implicitly {@link FormulaDbo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FormulaDbo
     * @static
     * @param {FormulaDbo} message FormulaDbo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FormulaDbo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FormulaDbo message from the specified reader or buffer.
     * @function decode
     * @memberof FormulaDbo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FormulaDbo} FormulaDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FormulaDbo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.operation = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
     * Decodes a FormulaDbo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FormulaDbo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FormulaDbo} FormulaDbo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FormulaDbo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FormulaDbo message.
     * @function verify
     * @memberof FormulaDbo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FormulaDbo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.operation != null && message.hasOwnProperty("operation")) {
            var error = $root.FormulaDbo.OperationDbo.verify(message.operation);
            if (error)
                return "operation." + error;
        }
        return null;
    };

    /**
     * Creates a FormulaDbo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FormulaDbo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FormulaDbo} FormulaDbo
     */
    FormulaDbo.fromObject = function fromObject(object) {
        if (object instanceof $root.FormulaDbo)
            return object;
        var message = new $root.FormulaDbo();
        if (object.operation != null) {
            if (typeof object.operation !== "object")
                throw TypeError(".FormulaDbo.operation: object expected");
            message.operation = $root.FormulaDbo.OperationDbo.fromObject(object.operation);
        }
        return message;
    };

    /**
     * Creates a plain object from a FormulaDbo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FormulaDbo
     * @static
     * @param {FormulaDbo} message FormulaDbo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FormulaDbo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.operation = null;
        if (message.operation != null && message.hasOwnProperty("operation"))
            object.operation = $root.FormulaDbo.OperationDbo.toObject(message.operation, options);
        return object;
    };

    /**
     * Converts this FormulaDbo to JSON.
     * @function toJSON
     * @memberof FormulaDbo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FormulaDbo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FormulaDbo
     * @function getTypeUrl
     * @memberof FormulaDbo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FormulaDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FormulaDbo";
    };

    FormulaDbo.OperationDbo = (function() {

        /**
         * Properties of an OperationDbo.
         * @memberof FormulaDbo
         * @interface IOperationDbo
         * @property {number|null} [integerValue] OperationDbo integerValue
         * @property {number|null} [decimalValue] OperationDbo decimalValue
         * @property {boolean|null} [booleanValue] OperationDbo booleanValue
         * @property {string|null} [stringValue] OperationDbo stringValue
         * @property {FormulaDbo.OperationDbo.VariableValueDbo|null} [variableValue] OperationDbo variableValue
         * @property {FormulaDbo.OperationDbo.AddOperationDbo|null} [addOperation] OperationDbo addOperation
         * @property {FormulaDbo.OperationDbo.SubtractOperationDbo|null} [subtractOperation] OperationDbo subtractOperation
         * @property {FormulaDbo.OperationDbo.MultiplyOperationDbo|null} [multiplyOperation] OperationDbo multiplyOperation
         * @property {FormulaDbo.OperationDbo.DivideOperationDbo|null} [divideOperation] OperationDbo divideOperation
         * @property {FormulaDbo.OperationDbo.EqualsOperationDbo|null} [equalsOperation] OperationDbo equalsOperation
         * @property {FormulaDbo.OperationDbo.NotEqualsOperationDbo|null} [notEqualsOperation] OperationDbo notEqualsOperation
         * @property {FormulaDbo.OperationDbo.GreaterThanOperationDbo|null} [greaterThanOperation] OperationDbo greaterThanOperation
         * @property {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo|null} [greaterThanOrEqualsOperation] OperationDbo greaterThanOrEqualsOperation
         * @property {FormulaDbo.OperationDbo.LessThanOperationDbo|null} [lessThanOperation] OperationDbo lessThanOperation
         * @property {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo|null} [lessThanOrEqualsOperation] OperationDbo lessThanOrEqualsOperation
         * @property {FormulaDbo.OperationDbo.AndOperationDbo|null} [andOperation] OperationDbo andOperation
         * @property {FormulaDbo.OperationDbo.OrOperationDbo|null} [orOperation] OperationDbo orOperation
         * @property {FormulaDbo.OperationDbo.NotOperationDbo|null} [notOperation] OperationDbo notOperation
         * @property {FormulaDbo.OperationDbo.AbsFunctionDbo|null} [absFunction] OperationDbo absFunction
         * @property {FormulaDbo.OperationDbo.MinFunctionDbo|null} [minFunction] OperationDbo minFunction
         * @property {FormulaDbo.OperationDbo.MaxFunctionDbo|null} [maxFunction] OperationDbo maxFunction
         * @property {FormulaDbo.OperationDbo.FloorFunctionDbo|null} [floorFunction] OperationDbo floorFunction
         * @property {FormulaDbo.OperationDbo.CeilFunctionDbo|null} [ceilFunction] OperationDbo ceilFunction
         * @property {FormulaDbo.OperationDbo.SignedFunctionDbo|null} [signedFunction] OperationDbo signedFunction
         * @property {FormulaDbo.OperationDbo.ConcatFunctionDbo|null} [concatFunction] OperationDbo concatFunction
         * @property {FormulaDbo.OperationDbo.IfFunctionDbo|null} [ifFunction] OperationDbo ifFunction
         */

        /**
         * Constructs a new OperationDbo.
         * @memberof FormulaDbo
         * @classdesc Represents an OperationDbo.
         * @implements IOperationDbo
         * @constructor
         * @param {FormulaDbo.IOperationDbo=} [properties] Properties to set
         */
        function OperationDbo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperationDbo integerValue.
         * @member {number|null|undefined} integerValue
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.integerValue = null;

        /**
         * OperationDbo decimalValue.
         * @member {number|null|undefined} decimalValue
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.decimalValue = null;

        /**
         * OperationDbo booleanValue.
         * @member {boolean|null|undefined} booleanValue
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.booleanValue = null;

        /**
         * OperationDbo stringValue.
         * @member {string|null|undefined} stringValue
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.stringValue = null;

        /**
         * OperationDbo variableValue.
         * @member {FormulaDbo.OperationDbo.VariableValueDbo|null|undefined} variableValue
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.variableValue = null;

        /**
         * OperationDbo addOperation.
         * @member {FormulaDbo.OperationDbo.AddOperationDbo|null|undefined} addOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.addOperation = null;

        /**
         * OperationDbo subtractOperation.
         * @member {FormulaDbo.OperationDbo.SubtractOperationDbo|null|undefined} subtractOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.subtractOperation = null;

        /**
         * OperationDbo multiplyOperation.
         * @member {FormulaDbo.OperationDbo.MultiplyOperationDbo|null|undefined} multiplyOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.multiplyOperation = null;

        /**
         * OperationDbo divideOperation.
         * @member {FormulaDbo.OperationDbo.DivideOperationDbo|null|undefined} divideOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.divideOperation = null;

        /**
         * OperationDbo equalsOperation.
         * @member {FormulaDbo.OperationDbo.EqualsOperationDbo|null|undefined} equalsOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.equalsOperation = null;

        /**
         * OperationDbo notEqualsOperation.
         * @member {FormulaDbo.OperationDbo.NotEqualsOperationDbo|null|undefined} notEqualsOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.notEqualsOperation = null;

        /**
         * OperationDbo greaterThanOperation.
         * @member {FormulaDbo.OperationDbo.GreaterThanOperationDbo|null|undefined} greaterThanOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.greaterThanOperation = null;

        /**
         * OperationDbo greaterThanOrEqualsOperation.
         * @member {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo|null|undefined} greaterThanOrEqualsOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.greaterThanOrEqualsOperation = null;

        /**
         * OperationDbo lessThanOperation.
         * @member {FormulaDbo.OperationDbo.LessThanOperationDbo|null|undefined} lessThanOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.lessThanOperation = null;

        /**
         * OperationDbo lessThanOrEqualsOperation.
         * @member {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo|null|undefined} lessThanOrEqualsOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.lessThanOrEqualsOperation = null;

        /**
         * OperationDbo andOperation.
         * @member {FormulaDbo.OperationDbo.AndOperationDbo|null|undefined} andOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.andOperation = null;

        /**
         * OperationDbo orOperation.
         * @member {FormulaDbo.OperationDbo.OrOperationDbo|null|undefined} orOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.orOperation = null;

        /**
         * OperationDbo notOperation.
         * @member {FormulaDbo.OperationDbo.NotOperationDbo|null|undefined} notOperation
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.notOperation = null;

        /**
         * OperationDbo absFunction.
         * @member {FormulaDbo.OperationDbo.AbsFunctionDbo|null|undefined} absFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.absFunction = null;

        /**
         * OperationDbo minFunction.
         * @member {FormulaDbo.OperationDbo.MinFunctionDbo|null|undefined} minFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.minFunction = null;

        /**
         * OperationDbo maxFunction.
         * @member {FormulaDbo.OperationDbo.MaxFunctionDbo|null|undefined} maxFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.maxFunction = null;

        /**
         * OperationDbo floorFunction.
         * @member {FormulaDbo.OperationDbo.FloorFunctionDbo|null|undefined} floorFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.floorFunction = null;

        /**
         * OperationDbo ceilFunction.
         * @member {FormulaDbo.OperationDbo.CeilFunctionDbo|null|undefined} ceilFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.ceilFunction = null;

        /**
         * OperationDbo signedFunction.
         * @member {FormulaDbo.OperationDbo.SignedFunctionDbo|null|undefined} signedFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.signedFunction = null;

        /**
         * OperationDbo concatFunction.
         * @member {FormulaDbo.OperationDbo.ConcatFunctionDbo|null|undefined} concatFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.concatFunction = null;

        /**
         * OperationDbo ifFunction.
         * @member {FormulaDbo.OperationDbo.IfFunctionDbo|null|undefined} ifFunction
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        OperationDbo.prototype.ifFunction = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * OperationDbo op.
         * @member {"integerValue"|"decimalValue"|"booleanValue"|"stringValue"|"variableValue"|"addOperation"|"subtractOperation"|"multiplyOperation"|"divideOperation"|"equalsOperation"|"notEqualsOperation"|"greaterThanOperation"|"greaterThanOrEqualsOperation"|"lessThanOperation"|"lessThanOrEqualsOperation"|"andOperation"|"orOperation"|"notOperation"|"absFunction"|"minFunction"|"maxFunction"|"floorFunction"|"ceilFunction"|"signedFunction"|"concatFunction"|"ifFunction"|undefined} op
         * @memberof FormulaDbo.OperationDbo
         * @instance
         */
        Object.defineProperty(OperationDbo.prototype, "op", {
            get: $util.oneOfGetter($oneOfFields = ["integerValue", "decimalValue", "booleanValue", "stringValue", "variableValue", "addOperation", "subtractOperation", "multiplyOperation", "divideOperation", "equalsOperation", "notEqualsOperation", "greaterThanOperation", "greaterThanOrEqualsOperation", "lessThanOperation", "lessThanOrEqualsOperation", "andOperation", "orOperation", "notOperation", "absFunction", "minFunction", "maxFunction", "floorFunction", "ceilFunction", "signedFunction", "concatFunction", "ifFunction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new OperationDbo instance using the specified properties.
         * @function create
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {FormulaDbo.IOperationDbo=} [properties] Properties to set
         * @returns {FormulaDbo.OperationDbo} OperationDbo instance
         */
        OperationDbo.create = function create(properties) {
            return new OperationDbo(properties);
        };

        /**
         * Encodes the specified OperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.verify|verify} messages.
         * @function encode
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {FormulaDbo.OperationDbo} message OperationDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationDbo.encode = function encode(message, writer) {
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
                $root.FormulaDbo.OperationDbo.VariableValueDbo.encode(message.variableValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.addOperation != null && Object.hasOwnProperty.call(message, "addOperation"))
                $root.FormulaDbo.OperationDbo.AddOperationDbo.encode(message.addOperation, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.subtractOperation != null && Object.hasOwnProperty.call(message, "subtractOperation"))
                $root.FormulaDbo.OperationDbo.SubtractOperationDbo.encode(message.subtractOperation, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.multiplyOperation != null && Object.hasOwnProperty.call(message, "multiplyOperation"))
                $root.FormulaDbo.OperationDbo.MultiplyOperationDbo.encode(message.multiplyOperation, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.divideOperation != null && Object.hasOwnProperty.call(message, "divideOperation"))
                $root.FormulaDbo.OperationDbo.DivideOperationDbo.encode(message.divideOperation, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.equalsOperation != null && Object.hasOwnProperty.call(message, "equalsOperation"))
                $root.FormulaDbo.OperationDbo.EqualsOperationDbo.encode(message.equalsOperation, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.notEqualsOperation != null && Object.hasOwnProperty.call(message, "notEqualsOperation"))
                $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo.encode(message.notEqualsOperation, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.greaterThanOperation != null && Object.hasOwnProperty.call(message, "greaterThanOperation"))
                $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo.encode(message.greaterThanOperation, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.greaterThanOrEqualsOperation != null && Object.hasOwnProperty.call(message, "greaterThanOrEqualsOperation"))
                $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.encode(message.greaterThanOrEqualsOperation, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.lessThanOperation != null && Object.hasOwnProperty.call(message, "lessThanOperation"))
                $root.FormulaDbo.OperationDbo.LessThanOperationDbo.encode(message.lessThanOperation, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.lessThanOrEqualsOperation != null && Object.hasOwnProperty.call(message, "lessThanOrEqualsOperation"))
                $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.encode(message.lessThanOrEqualsOperation, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.andOperation != null && Object.hasOwnProperty.call(message, "andOperation"))
                $root.FormulaDbo.OperationDbo.AndOperationDbo.encode(message.andOperation, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.orOperation != null && Object.hasOwnProperty.call(message, "orOperation"))
                $root.FormulaDbo.OperationDbo.OrOperationDbo.encode(message.orOperation, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.notOperation != null && Object.hasOwnProperty.call(message, "notOperation"))
                $root.FormulaDbo.OperationDbo.NotOperationDbo.encode(message.notOperation, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.absFunction != null && Object.hasOwnProperty.call(message, "absFunction"))
                $root.FormulaDbo.OperationDbo.AbsFunctionDbo.encode(message.absFunction, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.minFunction != null && Object.hasOwnProperty.call(message, "minFunction"))
                $root.FormulaDbo.OperationDbo.MinFunctionDbo.encode(message.minFunction, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.maxFunction != null && Object.hasOwnProperty.call(message, "maxFunction"))
                $root.FormulaDbo.OperationDbo.MaxFunctionDbo.encode(message.maxFunction, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.floorFunction != null && Object.hasOwnProperty.call(message, "floorFunction"))
                $root.FormulaDbo.OperationDbo.FloorFunctionDbo.encode(message.floorFunction, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.ceilFunction != null && Object.hasOwnProperty.call(message, "ceilFunction"))
                $root.FormulaDbo.OperationDbo.CeilFunctionDbo.encode(message.ceilFunction, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.signedFunction != null && Object.hasOwnProperty.call(message, "signedFunction"))
                $root.FormulaDbo.OperationDbo.SignedFunctionDbo.encode(message.signedFunction, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.concatFunction != null && Object.hasOwnProperty.call(message, "concatFunction"))
                $root.FormulaDbo.OperationDbo.ConcatFunctionDbo.encode(message.concatFunction, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.ifFunction != null && Object.hasOwnProperty.call(message, "ifFunction"))
                $root.FormulaDbo.OperationDbo.IfFunctionDbo.encode(message.ifFunction, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {FormulaDbo.OperationDbo} message OperationDbo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperationDbo message from the specified reader or buffer.
         * @function decode
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FormulaDbo.OperationDbo} OperationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationDbo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo();
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
                        message.variableValue = $root.FormulaDbo.OperationDbo.VariableValueDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.addOperation = $root.FormulaDbo.OperationDbo.AddOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.subtractOperation = $root.FormulaDbo.OperationDbo.SubtractOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.multiplyOperation = $root.FormulaDbo.OperationDbo.MultiplyOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.divideOperation = $root.FormulaDbo.OperationDbo.DivideOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.equalsOperation = $root.FormulaDbo.OperationDbo.EqualsOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.notEqualsOperation = $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.greaterThanOperation = $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.greaterThanOrEqualsOperation = $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.lessThanOperation = $root.FormulaDbo.OperationDbo.LessThanOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.lessThanOrEqualsOperation = $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.andOperation = $root.FormulaDbo.OperationDbo.AndOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.orOperation = $root.FormulaDbo.OperationDbo.OrOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.notOperation = $root.FormulaDbo.OperationDbo.NotOperationDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.absFunction = $root.FormulaDbo.OperationDbo.AbsFunctionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.minFunction = $root.FormulaDbo.OperationDbo.MinFunctionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.maxFunction = $root.FormulaDbo.OperationDbo.MaxFunctionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.floorFunction = $root.FormulaDbo.OperationDbo.FloorFunctionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.ceilFunction = $root.FormulaDbo.OperationDbo.CeilFunctionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.signedFunction = $root.FormulaDbo.OperationDbo.SignedFunctionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 25: {
                        message.concatFunction = $root.FormulaDbo.OperationDbo.ConcatFunctionDbo.decode(reader, reader.uint32());
                        break;
                    }
                case 26: {
                        message.ifFunction = $root.FormulaDbo.OperationDbo.IfFunctionDbo.decode(reader, reader.uint32());
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
         * Decodes an OperationDbo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FormulaDbo.OperationDbo} OperationDbo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationDbo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperationDbo message.
         * @function verify
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperationDbo.verify = function verify(message) {
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
                    var error = $root.FormulaDbo.OperationDbo.VariableValueDbo.verify(message.variableValue);
                    if (error)
                        return "variableValue." + error;
                }
            }
            if (message.addOperation != null && message.hasOwnProperty("addOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.AddOperationDbo.verify(message.addOperation);
                    if (error)
                        return "addOperation." + error;
                }
            }
            if (message.subtractOperation != null && message.hasOwnProperty("subtractOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.SubtractOperationDbo.verify(message.subtractOperation);
                    if (error)
                        return "subtractOperation." + error;
                }
            }
            if (message.multiplyOperation != null && message.hasOwnProperty("multiplyOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.MultiplyOperationDbo.verify(message.multiplyOperation);
                    if (error)
                        return "multiplyOperation." + error;
                }
            }
            if (message.divideOperation != null && message.hasOwnProperty("divideOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.DivideOperationDbo.verify(message.divideOperation);
                    if (error)
                        return "divideOperation." + error;
                }
            }
            if (message.equalsOperation != null && message.hasOwnProperty("equalsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.EqualsOperationDbo.verify(message.equalsOperation);
                    if (error)
                        return "equalsOperation." + error;
                }
            }
            if (message.notEqualsOperation != null && message.hasOwnProperty("notEqualsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo.verify(message.notEqualsOperation);
                    if (error)
                        return "notEqualsOperation." + error;
                }
            }
            if (message.greaterThanOperation != null && message.hasOwnProperty("greaterThanOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo.verify(message.greaterThanOperation);
                    if (error)
                        return "greaterThanOperation." + error;
                }
            }
            if (message.greaterThanOrEqualsOperation != null && message.hasOwnProperty("greaterThanOrEqualsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.verify(message.greaterThanOrEqualsOperation);
                    if (error)
                        return "greaterThanOrEqualsOperation." + error;
                }
            }
            if (message.lessThanOperation != null && message.hasOwnProperty("lessThanOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.LessThanOperationDbo.verify(message.lessThanOperation);
                    if (error)
                        return "lessThanOperation." + error;
                }
            }
            if (message.lessThanOrEqualsOperation != null && message.hasOwnProperty("lessThanOrEqualsOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.verify(message.lessThanOrEqualsOperation);
                    if (error)
                        return "lessThanOrEqualsOperation." + error;
                }
            }
            if (message.andOperation != null && message.hasOwnProperty("andOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.AndOperationDbo.verify(message.andOperation);
                    if (error)
                        return "andOperation." + error;
                }
            }
            if (message.orOperation != null && message.hasOwnProperty("orOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.OrOperationDbo.verify(message.orOperation);
                    if (error)
                        return "orOperation." + error;
                }
            }
            if (message.notOperation != null && message.hasOwnProperty("notOperation")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.NotOperationDbo.verify(message.notOperation);
                    if (error)
                        return "notOperation." + error;
                }
            }
            if (message.absFunction != null && message.hasOwnProperty("absFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.AbsFunctionDbo.verify(message.absFunction);
                    if (error)
                        return "absFunction." + error;
                }
            }
            if (message.minFunction != null && message.hasOwnProperty("minFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.MinFunctionDbo.verify(message.minFunction);
                    if (error)
                        return "minFunction." + error;
                }
            }
            if (message.maxFunction != null && message.hasOwnProperty("maxFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.MaxFunctionDbo.verify(message.maxFunction);
                    if (error)
                        return "maxFunction." + error;
                }
            }
            if (message.floorFunction != null && message.hasOwnProperty("floorFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.FloorFunctionDbo.verify(message.floorFunction);
                    if (error)
                        return "floorFunction." + error;
                }
            }
            if (message.ceilFunction != null && message.hasOwnProperty("ceilFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.CeilFunctionDbo.verify(message.ceilFunction);
                    if (error)
                        return "ceilFunction." + error;
                }
            }
            if (message.signedFunction != null && message.hasOwnProperty("signedFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.SignedFunctionDbo.verify(message.signedFunction);
                    if (error)
                        return "signedFunction." + error;
                }
            }
            if (message.concatFunction != null && message.hasOwnProperty("concatFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.ConcatFunctionDbo.verify(message.concatFunction);
                    if (error)
                        return "concatFunction." + error;
                }
            }
            if (message.ifFunction != null && message.hasOwnProperty("ifFunction")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.FormulaDbo.OperationDbo.IfFunctionDbo.verify(message.ifFunction);
                    if (error)
                        return "ifFunction." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OperationDbo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FormulaDbo.OperationDbo} OperationDbo
         */
        OperationDbo.fromObject = function fromObject(object) {
            if (object instanceof $root.FormulaDbo.OperationDbo)
                return object;
            var message = new $root.FormulaDbo.OperationDbo();
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
                    throw TypeError(".FormulaDbo.OperationDbo.variableValue: object expected");
                message.variableValue = $root.FormulaDbo.OperationDbo.VariableValueDbo.fromObject(object.variableValue);
            }
            if (object.addOperation != null) {
                if (typeof object.addOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.addOperation: object expected");
                message.addOperation = $root.FormulaDbo.OperationDbo.AddOperationDbo.fromObject(object.addOperation);
            }
            if (object.subtractOperation != null) {
                if (typeof object.subtractOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.subtractOperation: object expected");
                message.subtractOperation = $root.FormulaDbo.OperationDbo.SubtractOperationDbo.fromObject(object.subtractOperation);
            }
            if (object.multiplyOperation != null) {
                if (typeof object.multiplyOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.multiplyOperation: object expected");
                message.multiplyOperation = $root.FormulaDbo.OperationDbo.MultiplyOperationDbo.fromObject(object.multiplyOperation);
            }
            if (object.divideOperation != null) {
                if (typeof object.divideOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.divideOperation: object expected");
                message.divideOperation = $root.FormulaDbo.OperationDbo.DivideOperationDbo.fromObject(object.divideOperation);
            }
            if (object.equalsOperation != null) {
                if (typeof object.equalsOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.equalsOperation: object expected");
                message.equalsOperation = $root.FormulaDbo.OperationDbo.EqualsOperationDbo.fromObject(object.equalsOperation);
            }
            if (object.notEqualsOperation != null) {
                if (typeof object.notEqualsOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.notEqualsOperation: object expected");
                message.notEqualsOperation = $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo.fromObject(object.notEqualsOperation);
            }
            if (object.greaterThanOperation != null) {
                if (typeof object.greaterThanOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.greaterThanOperation: object expected");
                message.greaterThanOperation = $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo.fromObject(object.greaterThanOperation);
            }
            if (object.greaterThanOrEqualsOperation != null) {
                if (typeof object.greaterThanOrEqualsOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.greaterThanOrEqualsOperation: object expected");
                message.greaterThanOrEqualsOperation = $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.fromObject(object.greaterThanOrEqualsOperation);
            }
            if (object.lessThanOperation != null) {
                if (typeof object.lessThanOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.lessThanOperation: object expected");
                message.lessThanOperation = $root.FormulaDbo.OperationDbo.LessThanOperationDbo.fromObject(object.lessThanOperation);
            }
            if (object.lessThanOrEqualsOperation != null) {
                if (typeof object.lessThanOrEqualsOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.lessThanOrEqualsOperation: object expected");
                message.lessThanOrEqualsOperation = $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.fromObject(object.lessThanOrEqualsOperation);
            }
            if (object.andOperation != null) {
                if (typeof object.andOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.andOperation: object expected");
                message.andOperation = $root.FormulaDbo.OperationDbo.AndOperationDbo.fromObject(object.andOperation);
            }
            if (object.orOperation != null) {
                if (typeof object.orOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.orOperation: object expected");
                message.orOperation = $root.FormulaDbo.OperationDbo.OrOperationDbo.fromObject(object.orOperation);
            }
            if (object.notOperation != null) {
                if (typeof object.notOperation !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.notOperation: object expected");
                message.notOperation = $root.FormulaDbo.OperationDbo.NotOperationDbo.fromObject(object.notOperation);
            }
            if (object.absFunction != null) {
                if (typeof object.absFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.absFunction: object expected");
                message.absFunction = $root.FormulaDbo.OperationDbo.AbsFunctionDbo.fromObject(object.absFunction);
            }
            if (object.minFunction != null) {
                if (typeof object.minFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.minFunction: object expected");
                message.minFunction = $root.FormulaDbo.OperationDbo.MinFunctionDbo.fromObject(object.minFunction);
            }
            if (object.maxFunction != null) {
                if (typeof object.maxFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.maxFunction: object expected");
                message.maxFunction = $root.FormulaDbo.OperationDbo.MaxFunctionDbo.fromObject(object.maxFunction);
            }
            if (object.floorFunction != null) {
                if (typeof object.floorFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.floorFunction: object expected");
                message.floorFunction = $root.FormulaDbo.OperationDbo.FloorFunctionDbo.fromObject(object.floorFunction);
            }
            if (object.ceilFunction != null) {
                if (typeof object.ceilFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.ceilFunction: object expected");
                message.ceilFunction = $root.FormulaDbo.OperationDbo.CeilFunctionDbo.fromObject(object.ceilFunction);
            }
            if (object.signedFunction != null) {
                if (typeof object.signedFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.signedFunction: object expected");
                message.signedFunction = $root.FormulaDbo.OperationDbo.SignedFunctionDbo.fromObject(object.signedFunction);
            }
            if (object.concatFunction != null) {
                if (typeof object.concatFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.concatFunction: object expected");
                message.concatFunction = $root.FormulaDbo.OperationDbo.ConcatFunctionDbo.fromObject(object.concatFunction);
            }
            if (object.ifFunction != null) {
                if (typeof object.ifFunction !== "object")
                    throw TypeError(".FormulaDbo.OperationDbo.ifFunction: object expected");
                message.ifFunction = $root.FormulaDbo.OperationDbo.IfFunctionDbo.fromObject(object.ifFunction);
            }
            return message;
        };

        /**
         * Creates a plain object from an OperationDbo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {FormulaDbo.OperationDbo} message OperationDbo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperationDbo.toObject = function toObject(message, options) {
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
                object.variableValue = $root.FormulaDbo.OperationDbo.VariableValueDbo.toObject(message.variableValue, options);
                if (options.oneofs)
                    object.op = "variableValue";
            }
            if (message.addOperation != null && message.hasOwnProperty("addOperation")) {
                object.addOperation = $root.FormulaDbo.OperationDbo.AddOperationDbo.toObject(message.addOperation, options);
                if (options.oneofs)
                    object.op = "addOperation";
            }
            if (message.subtractOperation != null && message.hasOwnProperty("subtractOperation")) {
                object.subtractOperation = $root.FormulaDbo.OperationDbo.SubtractOperationDbo.toObject(message.subtractOperation, options);
                if (options.oneofs)
                    object.op = "subtractOperation";
            }
            if (message.multiplyOperation != null && message.hasOwnProperty("multiplyOperation")) {
                object.multiplyOperation = $root.FormulaDbo.OperationDbo.MultiplyOperationDbo.toObject(message.multiplyOperation, options);
                if (options.oneofs)
                    object.op = "multiplyOperation";
            }
            if (message.divideOperation != null && message.hasOwnProperty("divideOperation")) {
                object.divideOperation = $root.FormulaDbo.OperationDbo.DivideOperationDbo.toObject(message.divideOperation, options);
                if (options.oneofs)
                    object.op = "divideOperation";
            }
            if (message.equalsOperation != null && message.hasOwnProperty("equalsOperation")) {
                object.equalsOperation = $root.FormulaDbo.OperationDbo.EqualsOperationDbo.toObject(message.equalsOperation, options);
                if (options.oneofs)
                    object.op = "equalsOperation";
            }
            if (message.notEqualsOperation != null && message.hasOwnProperty("notEqualsOperation")) {
                object.notEqualsOperation = $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo.toObject(message.notEqualsOperation, options);
                if (options.oneofs)
                    object.op = "notEqualsOperation";
            }
            if (message.greaterThanOperation != null && message.hasOwnProperty("greaterThanOperation")) {
                object.greaterThanOperation = $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo.toObject(message.greaterThanOperation, options);
                if (options.oneofs)
                    object.op = "greaterThanOperation";
            }
            if (message.greaterThanOrEqualsOperation != null && message.hasOwnProperty("greaterThanOrEqualsOperation")) {
                object.greaterThanOrEqualsOperation = $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.toObject(message.greaterThanOrEqualsOperation, options);
                if (options.oneofs)
                    object.op = "greaterThanOrEqualsOperation";
            }
            if (message.lessThanOperation != null && message.hasOwnProperty("lessThanOperation")) {
                object.lessThanOperation = $root.FormulaDbo.OperationDbo.LessThanOperationDbo.toObject(message.lessThanOperation, options);
                if (options.oneofs)
                    object.op = "lessThanOperation";
            }
            if (message.lessThanOrEqualsOperation != null && message.hasOwnProperty("lessThanOrEqualsOperation")) {
                object.lessThanOrEqualsOperation = $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.toObject(message.lessThanOrEqualsOperation, options);
                if (options.oneofs)
                    object.op = "lessThanOrEqualsOperation";
            }
            if (message.andOperation != null && message.hasOwnProperty("andOperation")) {
                object.andOperation = $root.FormulaDbo.OperationDbo.AndOperationDbo.toObject(message.andOperation, options);
                if (options.oneofs)
                    object.op = "andOperation";
            }
            if (message.orOperation != null && message.hasOwnProperty("orOperation")) {
                object.orOperation = $root.FormulaDbo.OperationDbo.OrOperationDbo.toObject(message.orOperation, options);
                if (options.oneofs)
                    object.op = "orOperation";
            }
            if (message.notOperation != null && message.hasOwnProperty("notOperation")) {
                object.notOperation = $root.FormulaDbo.OperationDbo.NotOperationDbo.toObject(message.notOperation, options);
                if (options.oneofs)
                    object.op = "notOperation";
            }
            if (message.absFunction != null && message.hasOwnProperty("absFunction")) {
                object.absFunction = $root.FormulaDbo.OperationDbo.AbsFunctionDbo.toObject(message.absFunction, options);
                if (options.oneofs)
                    object.op = "absFunction";
            }
            if (message.minFunction != null && message.hasOwnProperty("minFunction")) {
                object.minFunction = $root.FormulaDbo.OperationDbo.MinFunctionDbo.toObject(message.minFunction, options);
                if (options.oneofs)
                    object.op = "minFunction";
            }
            if (message.maxFunction != null && message.hasOwnProperty("maxFunction")) {
                object.maxFunction = $root.FormulaDbo.OperationDbo.MaxFunctionDbo.toObject(message.maxFunction, options);
                if (options.oneofs)
                    object.op = "maxFunction";
            }
            if (message.floorFunction != null && message.hasOwnProperty("floorFunction")) {
                object.floorFunction = $root.FormulaDbo.OperationDbo.FloorFunctionDbo.toObject(message.floorFunction, options);
                if (options.oneofs)
                    object.op = "floorFunction";
            }
            if (message.ceilFunction != null && message.hasOwnProperty("ceilFunction")) {
                object.ceilFunction = $root.FormulaDbo.OperationDbo.CeilFunctionDbo.toObject(message.ceilFunction, options);
                if (options.oneofs)
                    object.op = "ceilFunction";
            }
            if (message.signedFunction != null && message.hasOwnProperty("signedFunction")) {
                object.signedFunction = $root.FormulaDbo.OperationDbo.SignedFunctionDbo.toObject(message.signedFunction, options);
                if (options.oneofs)
                    object.op = "signedFunction";
            }
            if (message.concatFunction != null && message.hasOwnProperty("concatFunction")) {
                object.concatFunction = $root.FormulaDbo.OperationDbo.ConcatFunctionDbo.toObject(message.concatFunction, options);
                if (options.oneofs)
                    object.op = "concatFunction";
            }
            if (message.ifFunction != null && message.hasOwnProperty("ifFunction")) {
                object.ifFunction = $root.FormulaDbo.OperationDbo.IfFunctionDbo.toObject(message.ifFunction, options);
                if (options.oneofs)
                    object.op = "ifFunction";
            }
            return object;
        };

        /**
         * Converts this OperationDbo to JSON.
         * @function toJSON
         * @memberof FormulaDbo.OperationDbo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperationDbo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperationDbo
         * @function getTypeUrl
         * @memberof FormulaDbo.OperationDbo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FormulaDbo.OperationDbo";
        };

        OperationDbo.VariableValueDbo = (function() {

            /**
             * Properties of a VariableValueDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IVariableValueDbo
             * @property {string|null} [variableId] VariableValueDbo variableId
             */

            /**
             * Constructs a new VariableValueDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a VariableValueDbo.
             * @implements IVariableValueDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IVariableValueDbo=} [properties] Properties to set
             */
            function VariableValueDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VariableValueDbo variableId.
             * @member {string} variableId
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @instance
             */
            VariableValueDbo.prototype.variableId = "";

            /**
             * Creates a new VariableValueDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IVariableValueDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.VariableValueDbo} VariableValueDbo instance
             */
            VariableValueDbo.create = function create(properties) {
                return new VariableValueDbo(properties);
            };

            /**
             * Encodes the specified VariableValueDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.VariableValueDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {FormulaDbo.OperationDbo.VariableValueDbo} message VariableValueDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VariableValueDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.variableId != null && Object.hasOwnProperty.call(message, "variableId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.variableId);
                return writer;
            };

            /**
             * Encodes the specified VariableValueDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.VariableValueDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {FormulaDbo.OperationDbo.VariableValueDbo} message VariableValueDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VariableValueDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VariableValueDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.VariableValueDbo} VariableValueDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VariableValueDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.VariableValueDbo();
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
             * Decodes a VariableValueDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.VariableValueDbo} VariableValueDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VariableValueDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VariableValueDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VariableValueDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.variableId != null && message.hasOwnProperty("variableId"))
                    if (!$util.isString(message.variableId))
                        return "variableId: string expected";
                return null;
            };

            /**
             * Creates a VariableValueDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.VariableValueDbo} VariableValueDbo
             */
            VariableValueDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.VariableValueDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.VariableValueDbo();
                if (object.variableId != null)
                    message.variableId = String(object.variableId);
                return message;
            };

            /**
             * Creates a plain object from a VariableValueDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {FormulaDbo.OperationDbo.VariableValueDbo} message VariableValueDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VariableValueDbo.toObject = function toObject(message, options) {
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
             * Converts this VariableValueDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VariableValueDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VariableValueDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.VariableValueDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VariableValueDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.VariableValueDbo";
            };

            return VariableValueDbo;
        })();

        OperationDbo.AddOperationDbo = (function() {

            /**
             * Properties of an AddOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IAddOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] AddOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] AddOperationDbo b
             */

            /**
             * Constructs a new AddOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents an AddOperationDbo.
             * @implements IAddOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IAddOperationDbo=} [properties] Properties to set
             */
            function AddOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @instance
             */
            AddOperationDbo.prototype.a = null;

            /**
             * AddOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @instance
             */
            AddOperationDbo.prototype.b = null;

            /**
             * Creates a new AddOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IAddOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.AddOperationDbo} AddOperationDbo instance
             */
            AddOperationDbo.create = function create(properties) {
                return new AddOperationDbo(properties);
            };

            /**
             * Encodes the specified AddOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.AddOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AddOperationDbo} message AddOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AddOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.AddOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AddOperationDbo} message AddOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AddOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.AddOperationDbo} AddOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.AddOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes an AddOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.AddOperationDbo} AddOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an AddOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.AddOperationDbo} AddOperationDbo
             */
            AddOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.AddOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.AddOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.AddOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.AddOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an AddOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AddOperationDbo} message AddOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this AddOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AddOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.AddOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AddOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.AddOperationDbo";
            };

            return AddOperationDbo;
        })();

        OperationDbo.SubtractOperationDbo = (function() {

            /**
             * Properties of a SubtractOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface ISubtractOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] SubtractOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] SubtractOperationDbo b
             */

            /**
             * Constructs a new SubtractOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a SubtractOperationDbo.
             * @implements ISubtractOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.ISubtractOperationDbo=} [properties] Properties to set
             */
            function SubtractOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SubtractOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @instance
             */
            SubtractOperationDbo.prototype.a = null;

            /**
             * SubtractOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @instance
             */
            SubtractOperationDbo.prototype.b = null;

            /**
             * Creates a new SubtractOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ISubtractOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.SubtractOperationDbo} SubtractOperationDbo instance
             */
            SubtractOperationDbo.create = function create(properties) {
                return new SubtractOperationDbo(properties);
            };

            /**
             * Encodes the specified SubtractOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.SubtractOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.SubtractOperationDbo} message SubtractOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubtractOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SubtractOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.SubtractOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.SubtractOperationDbo} message SubtractOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubtractOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubtractOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.SubtractOperationDbo} SubtractOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubtractOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.SubtractOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a SubtractOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.SubtractOperationDbo} SubtractOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubtractOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SubtractOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubtractOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a SubtractOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.SubtractOperationDbo} SubtractOperationDbo
             */
            SubtractOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.SubtractOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.SubtractOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.SubtractOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.SubtractOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a SubtractOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.SubtractOperationDbo} message SubtractOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubtractOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this SubtractOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubtractOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SubtractOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.SubtractOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubtractOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.SubtractOperationDbo";
            };

            return SubtractOperationDbo;
        })();

        OperationDbo.MultiplyOperationDbo = (function() {

            /**
             * Properties of a MultiplyOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IMultiplyOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] MultiplyOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] MultiplyOperationDbo b
             */

            /**
             * Constructs a new MultiplyOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a MultiplyOperationDbo.
             * @implements IMultiplyOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IMultiplyOperationDbo=} [properties] Properties to set
             */
            function MultiplyOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiplyOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @instance
             */
            MultiplyOperationDbo.prototype.a = null;

            /**
             * MultiplyOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @instance
             */
            MultiplyOperationDbo.prototype.b = null;

            /**
             * Creates a new MultiplyOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IMultiplyOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.MultiplyOperationDbo} MultiplyOperationDbo instance
             */
            MultiplyOperationDbo.create = function create(properties) {
                return new MultiplyOperationDbo(properties);
            };

            /**
             * Encodes the specified MultiplyOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.MultiplyOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MultiplyOperationDbo} message MultiplyOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiplyOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MultiplyOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.MultiplyOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MultiplyOperationDbo} message MultiplyOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiplyOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiplyOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.MultiplyOperationDbo} MultiplyOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiplyOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.MultiplyOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a MultiplyOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.MultiplyOperationDbo} MultiplyOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiplyOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiplyOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiplyOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a MultiplyOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.MultiplyOperationDbo} MultiplyOperationDbo
             */
            MultiplyOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.MultiplyOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.MultiplyOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.MultiplyOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.MultiplyOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a MultiplyOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MultiplyOperationDbo} message MultiplyOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiplyOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this MultiplyOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiplyOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MultiplyOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.MultiplyOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MultiplyOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.MultiplyOperationDbo";
            };

            return MultiplyOperationDbo;
        })();

        OperationDbo.DivideOperationDbo = (function() {

            /**
             * Properties of a DivideOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IDivideOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] DivideOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] DivideOperationDbo b
             */

            /**
             * Constructs a new DivideOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a DivideOperationDbo.
             * @implements IDivideOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IDivideOperationDbo=} [properties] Properties to set
             */
            function DivideOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DivideOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @instance
             */
            DivideOperationDbo.prototype.a = null;

            /**
             * DivideOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @instance
             */
            DivideOperationDbo.prototype.b = null;

            /**
             * Creates a new DivideOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IDivideOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.DivideOperationDbo} DivideOperationDbo instance
             */
            DivideOperationDbo.create = function create(properties) {
                return new DivideOperationDbo(properties);
            };

            /**
             * Encodes the specified DivideOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.DivideOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.DivideOperationDbo} message DivideOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DivideOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DivideOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.DivideOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.DivideOperationDbo} message DivideOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DivideOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DivideOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.DivideOperationDbo} DivideOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DivideOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.DivideOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a DivideOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.DivideOperationDbo} DivideOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DivideOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DivideOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DivideOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a DivideOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.DivideOperationDbo} DivideOperationDbo
             */
            DivideOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.DivideOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.DivideOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.DivideOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.DivideOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a DivideOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.DivideOperationDbo} message DivideOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DivideOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this DivideOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DivideOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DivideOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.DivideOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DivideOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.DivideOperationDbo";
            };

            return DivideOperationDbo;
        })();

        OperationDbo.EqualsOperationDbo = (function() {

            /**
             * Properties of an EqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IEqualsOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] EqualsOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] EqualsOperationDbo b
             */

            /**
             * Constructs a new EqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents an EqualsOperationDbo.
             * @implements IEqualsOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IEqualsOperationDbo=} [properties] Properties to set
             */
            function EqualsOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EqualsOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @instance
             */
            EqualsOperationDbo.prototype.a = null;

            /**
             * EqualsOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @instance
             */
            EqualsOperationDbo.prototype.b = null;

            /**
             * Creates a new EqualsOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IEqualsOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.EqualsOperationDbo} EqualsOperationDbo instance
             */
            EqualsOperationDbo.create = function create(properties) {
                return new EqualsOperationDbo(properties);
            };

            /**
             * Encodes the specified EqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.EqualsOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.EqualsOperationDbo} message EqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EqualsOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.EqualsOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.EqualsOperationDbo} message EqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EqualsOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EqualsOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.EqualsOperationDbo} EqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EqualsOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.EqualsOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes an EqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.EqualsOperationDbo} EqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EqualsOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EqualsOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EqualsOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an EqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.EqualsOperationDbo} EqualsOperationDbo
             */
            EqualsOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.EqualsOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.EqualsOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.EqualsOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.EqualsOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an EqualsOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.EqualsOperationDbo} message EqualsOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EqualsOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this EqualsOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EqualsOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EqualsOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.EqualsOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EqualsOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.EqualsOperationDbo";
            };

            return EqualsOperationDbo;
        })();

        OperationDbo.NotEqualsOperationDbo = (function() {

            /**
             * Properties of a NotEqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface INotEqualsOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] NotEqualsOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] NotEqualsOperationDbo b
             */

            /**
             * Constructs a new NotEqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a NotEqualsOperationDbo.
             * @implements INotEqualsOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.INotEqualsOperationDbo=} [properties] Properties to set
             */
            function NotEqualsOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotEqualsOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @instance
             */
            NotEqualsOperationDbo.prototype.a = null;

            /**
             * NotEqualsOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @instance
             */
            NotEqualsOperationDbo.prototype.b = null;

            /**
             * Creates a new NotEqualsOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.INotEqualsOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.NotEqualsOperationDbo} NotEqualsOperationDbo instance
             */
            NotEqualsOperationDbo.create = function create(properties) {
                return new NotEqualsOperationDbo(properties);
            };

            /**
             * Encodes the specified NotEqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.NotEqualsOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.NotEqualsOperationDbo} message NotEqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotEqualsOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NotEqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.NotEqualsOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.NotEqualsOperationDbo} message NotEqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotEqualsOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotEqualsOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.NotEqualsOperationDbo} NotEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotEqualsOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a NotEqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.NotEqualsOperationDbo} NotEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotEqualsOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotEqualsOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotEqualsOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a NotEqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.NotEqualsOperationDbo} NotEqualsOperationDbo
             */
            NotEqualsOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.NotEqualsOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.NotEqualsOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.NotEqualsOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a NotEqualsOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.NotEqualsOperationDbo} message NotEqualsOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotEqualsOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this NotEqualsOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotEqualsOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NotEqualsOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.NotEqualsOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NotEqualsOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.NotEqualsOperationDbo";
            };

            return NotEqualsOperationDbo;
        })();

        OperationDbo.GreaterThanOperationDbo = (function() {

            /**
             * Properties of a GreaterThanOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IGreaterThanOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] GreaterThanOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] GreaterThanOperationDbo b
             */

            /**
             * Constructs a new GreaterThanOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a GreaterThanOperationDbo.
             * @implements IGreaterThanOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IGreaterThanOperationDbo=} [properties] Properties to set
             */
            function GreaterThanOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GreaterThanOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @instance
             */
            GreaterThanOperationDbo.prototype.a = null;

            /**
             * GreaterThanOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @instance
             */
            GreaterThanOperationDbo.prototype.b = null;

            /**
             * Creates a new GreaterThanOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IGreaterThanOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.GreaterThanOperationDbo} GreaterThanOperationDbo instance
             */
            GreaterThanOperationDbo.create = function create(properties) {
                return new GreaterThanOperationDbo(properties);
            };

            /**
             * Encodes the specified GreaterThanOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.GreaterThanOperationDbo} message GreaterThanOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GreaterThanOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.GreaterThanOperationDbo} message GreaterThanOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GreaterThanOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.GreaterThanOperationDbo} GreaterThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a GreaterThanOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.GreaterThanOperationDbo} GreaterThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GreaterThanOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GreaterThanOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a GreaterThanOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.GreaterThanOperationDbo} GreaterThanOperationDbo
             */
            GreaterThanOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.GreaterThanOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.GreaterThanOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.GreaterThanOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a GreaterThanOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.GreaterThanOperationDbo} message GreaterThanOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GreaterThanOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this GreaterThanOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GreaterThanOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GreaterThanOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.GreaterThanOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GreaterThanOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.GreaterThanOperationDbo";
            };

            return GreaterThanOperationDbo;
        })();

        OperationDbo.GreaterThanOrEqualsOperationDbo = (function() {

            /**
             * Properties of a GreaterThanOrEqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IGreaterThanOrEqualsOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] GreaterThanOrEqualsOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] GreaterThanOrEqualsOperationDbo b
             */

            /**
             * Constructs a new GreaterThanOrEqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a GreaterThanOrEqualsOperationDbo.
             * @implements IGreaterThanOrEqualsOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IGreaterThanOrEqualsOperationDbo=} [properties] Properties to set
             */
            function GreaterThanOrEqualsOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GreaterThanOrEqualsOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @instance
             */
            GreaterThanOrEqualsOperationDbo.prototype.a = null;

            /**
             * GreaterThanOrEqualsOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @instance
             */
            GreaterThanOrEqualsOperationDbo.prototype.b = null;

            /**
             * Creates a new GreaterThanOrEqualsOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IGreaterThanOrEqualsOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo} GreaterThanOrEqualsOperationDbo instance
             */
            GreaterThanOrEqualsOperationDbo.create = function create(properties) {
                return new GreaterThanOrEqualsOperationDbo(properties);
            };

            /**
             * Encodes the specified GreaterThanOrEqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo} message GreaterThanOrEqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOrEqualsOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GreaterThanOrEqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo} message GreaterThanOrEqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GreaterThanOrEqualsOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GreaterThanOrEqualsOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo} GreaterThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOrEqualsOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a GreaterThanOrEqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo} GreaterThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GreaterThanOrEqualsOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GreaterThanOrEqualsOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GreaterThanOrEqualsOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a GreaterThanOrEqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo} GreaterThanOrEqualsOperationDbo
             */
            GreaterThanOrEqualsOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a GreaterThanOrEqualsOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo} message GreaterThanOrEqualsOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GreaterThanOrEqualsOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this GreaterThanOrEqualsOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GreaterThanOrEqualsOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GreaterThanOrEqualsOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GreaterThanOrEqualsOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.GreaterThanOrEqualsOperationDbo";
            };

            return GreaterThanOrEqualsOperationDbo;
        })();

        OperationDbo.LessThanOperationDbo = (function() {

            /**
             * Properties of a LessThanOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface ILessThanOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] LessThanOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] LessThanOperationDbo b
             */

            /**
             * Constructs a new LessThanOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a LessThanOperationDbo.
             * @implements ILessThanOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.ILessThanOperationDbo=} [properties] Properties to set
             */
            function LessThanOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LessThanOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @instance
             */
            LessThanOperationDbo.prototype.a = null;

            /**
             * LessThanOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @instance
             */
            LessThanOperationDbo.prototype.b = null;

            /**
             * Creates a new LessThanOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ILessThanOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.LessThanOperationDbo} LessThanOperationDbo instance
             */
            LessThanOperationDbo.create = function create(properties) {
                return new LessThanOperationDbo(properties);
            };

            /**
             * Encodes the specified LessThanOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.LessThanOperationDbo} message LessThanOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LessThanOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.LessThanOperationDbo} message LessThanOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LessThanOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.LessThanOperationDbo} LessThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.LessThanOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a LessThanOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.LessThanOperationDbo} LessThanOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LessThanOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LessThanOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a LessThanOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.LessThanOperationDbo} LessThanOperationDbo
             */
            LessThanOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.LessThanOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.LessThanOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.LessThanOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.LessThanOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a LessThanOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.LessThanOperationDbo} message LessThanOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LessThanOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this LessThanOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LessThanOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LessThanOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.LessThanOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LessThanOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.LessThanOperationDbo";
            };

            return LessThanOperationDbo;
        })();

        OperationDbo.LessThanOrEqualsOperationDbo = (function() {

            /**
             * Properties of a LessThanOrEqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface ILessThanOrEqualsOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] LessThanOrEqualsOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] LessThanOrEqualsOperationDbo b
             */

            /**
             * Constructs a new LessThanOrEqualsOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a LessThanOrEqualsOperationDbo.
             * @implements ILessThanOrEqualsOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.ILessThanOrEqualsOperationDbo=} [properties] Properties to set
             */
            function LessThanOrEqualsOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LessThanOrEqualsOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @instance
             */
            LessThanOrEqualsOperationDbo.prototype.a = null;

            /**
             * LessThanOrEqualsOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @instance
             */
            LessThanOrEqualsOperationDbo.prototype.b = null;

            /**
             * Creates a new LessThanOrEqualsOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ILessThanOrEqualsOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo} LessThanOrEqualsOperationDbo instance
             */
            LessThanOrEqualsOperationDbo.create = function create(properties) {
                return new LessThanOrEqualsOperationDbo(properties);
            };

            /**
             * Encodes the specified LessThanOrEqualsOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo} message LessThanOrEqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOrEqualsOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LessThanOrEqualsOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo} message LessThanOrEqualsOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LessThanOrEqualsOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LessThanOrEqualsOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo} LessThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOrEqualsOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a LessThanOrEqualsOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo} LessThanOrEqualsOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LessThanOrEqualsOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LessThanOrEqualsOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LessThanOrEqualsOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates a LessThanOrEqualsOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo} LessThanOrEqualsOperationDbo
             */
            LessThanOrEqualsOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from a LessThanOrEqualsOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo} message LessThanOrEqualsOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LessThanOrEqualsOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this LessThanOrEqualsOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LessThanOrEqualsOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LessThanOrEqualsOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LessThanOrEqualsOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.LessThanOrEqualsOperationDbo";
            };

            return LessThanOrEqualsOperationDbo;
        })();

        OperationDbo.AndOperationDbo = (function() {

            /**
             * Properties of an AndOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IAndOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] AndOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] AndOperationDbo b
             */

            /**
             * Constructs a new AndOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents an AndOperationDbo.
             * @implements IAndOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IAndOperationDbo=} [properties] Properties to set
             */
            function AndOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AndOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @instance
             */
            AndOperationDbo.prototype.a = null;

            /**
             * AndOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @instance
             */
            AndOperationDbo.prototype.b = null;

            /**
             * Creates a new AndOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IAndOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.AndOperationDbo} AndOperationDbo instance
             */
            AndOperationDbo.create = function create(properties) {
                return new AndOperationDbo(properties);
            };

            /**
             * Encodes the specified AndOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.AndOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AndOperationDbo} message AndOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AndOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AndOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.AndOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AndOperationDbo} message AndOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AndOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AndOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.AndOperationDbo} AndOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AndOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.AndOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes an AndOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.AndOperationDbo} AndOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AndOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AndOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AndOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an AndOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.AndOperationDbo} AndOperationDbo
             */
            AndOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.AndOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.AndOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.AndOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.AndOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an AndOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AndOperationDbo} message AndOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AndOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this AndOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AndOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AndOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.AndOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AndOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.AndOperationDbo";
            };

            return AndOperationDbo;
        })();

        OperationDbo.OrOperationDbo = (function() {

            /**
             * Properties of an OrOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IOrOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] OrOperationDbo a
             * @property {FormulaDbo.OperationDbo|null} [b] OrOperationDbo b
             */

            /**
             * Constructs a new OrOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents an OrOperationDbo.
             * @implements IOrOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IOrOperationDbo=} [properties] Properties to set
             */
            function OrOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OrOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @instance
             */
            OrOperationDbo.prototype.a = null;

            /**
             * OrOperationDbo b.
             * @member {FormulaDbo.OperationDbo|null|undefined} b
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @instance
             */
            OrOperationDbo.prototype.b = null;

            /**
             * Creates a new OrOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IOrOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.OrOperationDbo} OrOperationDbo instance
             */
            OrOperationDbo.create = function create(properties) {
                return new OrOperationDbo(properties);
            };

            /**
             * Encodes the specified OrOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.OrOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.OrOperationDbo} message OrOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                    $root.FormulaDbo.OperationDbo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OrOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.OrOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.OrOperationDbo} message OrOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OrOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.OrOperationDbo} OrOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.OrOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.b = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes an OrOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.OrOperationDbo} OrOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OrOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OrOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                if (message.b != null && message.hasOwnProperty("b")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.b);
                    if (error)
                        return "b." + error;
                }
                return null;
            };

            /**
             * Creates an OrOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.OrOperationDbo} OrOperationDbo
             */
            OrOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.OrOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.OrOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.OrOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                if (object.b != null) {
                    if (typeof object.b !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.OrOperationDbo.b: object expected");
                    message.b = $root.FormulaDbo.OperationDbo.fromObject(object.b);
                }
                return message;
            };

            /**
             * Creates a plain object from an OrOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.OrOperationDbo} message OrOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OrOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.a = null;
                    object.b = null;
                }
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = $root.FormulaDbo.OperationDbo.toObject(message.b, options);
                return object;
            };

            /**
             * Converts this OrOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OrOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OrOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.OrOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OrOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.OrOperationDbo";
            };

            return OrOperationDbo;
        })();

        OperationDbo.NotOperationDbo = (function() {

            /**
             * Properties of a NotOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface INotOperationDbo
             * @property {FormulaDbo.OperationDbo|null} [a] NotOperationDbo a
             */

            /**
             * Constructs a new NotOperationDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a NotOperationDbo.
             * @implements INotOperationDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.INotOperationDbo=} [properties] Properties to set
             */
            function NotOperationDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotOperationDbo a.
             * @member {FormulaDbo.OperationDbo|null|undefined} a
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @instance
             */
            NotOperationDbo.prototype.a = null;

            /**
             * Creates a new NotOperationDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.INotOperationDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.NotOperationDbo} NotOperationDbo instance
             */
            NotOperationDbo.create = function create(properties) {
                return new NotOperationDbo(properties);
            };

            /**
             * Encodes the specified NotOperationDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.NotOperationDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.NotOperationDbo} message NotOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotOperationDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                    $root.FormulaDbo.OperationDbo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NotOperationDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.NotOperationDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.NotOperationDbo} message NotOperationDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotOperationDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotOperationDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.NotOperationDbo} NotOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotOperationDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.NotOperationDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.a = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a NotOperationDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.NotOperationDbo} NotOperationDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotOperationDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotOperationDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotOperationDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.a);
                    if (error)
                        return "a." + error;
                }
                return null;
            };

            /**
             * Creates a NotOperationDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.NotOperationDbo} NotOperationDbo
             */
            NotOperationDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.NotOperationDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.NotOperationDbo();
                if (object.a != null) {
                    if (typeof object.a !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.NotOperationDbo.a: object expected");
                    message.a = $root.FormulaDbo.OperationDbo.fromObject(object.a);
                }
                return message;
            };

            /**
             * Creates a plain object from a NotOperationDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {FormulaDbo.OperationDbo.NotOperationDbo} message NotOperationDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotOperationDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.a = null;
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = $root.FormulaDbo.OperationDbo.toObject(message.a, options);
                return object;
            };

            /**
             * Converts this NotOperationDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotOperationDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NotOperationDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.NotOperationDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NotOperationDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.NotOperationDbo";
            };

            return NotOperationDbo;
        })();

        OperationDbo.AbsFunctionDbo = (function() {

            /**
             * Properties of an AbsFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IAbsFunctionDbo
             * @property {FormulaDbo.OperationDbo|null} [param] AbsFunctionDbo param
             */

            /**
             * Constructs a new AbsFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents an AbsFunctionDbo.
             * @implements IAbsFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IAbsFunctionDbo=} [properties] Properties to set
             */
            function AbsFunctionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AbsFunctionDbo param.
             * @member {FormulaDbo.OperationDbo|null|undefined} param
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @instance
             */
            AbsFunctionDbo.prototype.param = null;

            /**
             * Creates a new AbsFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IAbsFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.AbsFunctionDbo} AbsFunctionDbo instance
             */
            AbsFunctionDbo.create = function create(properties) {
                return new AbsFunctionDbo(properties);
            };

            /**
             * Encodes the specified AbsFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.AbsFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AbsFunctionDbo} message AbsFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbsFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.FormulaDbo.OperationDbo.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AbsFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.AbsFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AbsFunctionDbo} message AbsFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbsFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AbsFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.AbsFunctionDbo} AbsFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbsFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.AbsFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes an AbsFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.AbsFunctionDbo} AbsFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbsFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AbsFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AbsFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates an AbsFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.AbsFunctionDbo} AbsFunctionDbo
             */
            AbsFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.AbsFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.AbsFunctionDbo();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.AbsFunctionDbo.param: object expected");
                    message.param = $root.FormulaDbo.OperationDbo.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from an AbsFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.AbsFunctionDbo} message AbsFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AbsFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.FormulaDbo.OperationDbo.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this AbsFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AbsFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AbsFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.AbsFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AbsFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.AbsFunctionDbo";
            };

            return AbsFunctionDbo;
        })();

        OperationDbo.MinFunctionDbo = (function() {

            /**
             * Properties of a MinFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IMinFunctionDbo
             * @property {FormulaDbo.OperationDbo|null} [param] MinFunctionDbo param
             */

            /**
             * Constructs a new MinFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a MinFunctionDbo.
             * @implements IMinFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IMinFunctionDbo=} [properties] Properties to set
             */
            function MinFunctionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MinFunctionDbo param.
             * @member {FormulaDbo.OperationDbo|null|undefined} param
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @instance
             */
            MinFunctionDbo.prototype.param = null;

            /**
             * Creates a new MinFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IMinFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.MinFunctionDbo} MinFunctionDbo instance
             */
            MinFunctionDbo.create = function create(properties) {
                return new MinFunctionDbo(properties);
            };

            /**
             * Encodes the specified MinFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.MinFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MinFunctionDbo} message MinFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.FormulaDbo.OperationDbo.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MinFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.MinFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MinFunctionDbo} message MinFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MinFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MinFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.MinFunctionDbo} MinFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.MinFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a MinFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.MinFunctionDbo} MinFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MinFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MinFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MinFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a MinFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.MinFunctionDbo} MinFunctionDbo
             */
            MinFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.MinFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.MinFunctionDbo();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.MinFunctionDbo.param: object expected");
                    message.param = $root.FormulaDbo.OperationDbo.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a MinFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MinFunctionDbo} message MinFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MinFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.FormulaDbo.OperationDbo.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this MinFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MinFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MinFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.MinFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MinFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.MinFunctionDbo";
            };

            return MinFunctionDbo;
        })();

        OperationDbo.MaxFunctionDbo = (function() {

            /**
             * Properties of a MaxFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IMaxFunctionDbo
             * @property {FormulaDbo.OperationDbo|null} [param] MaxFunctionDbo param
             */

            /**
             * Constructs a new MaxFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a MaxFunctionDbo.
             * @implements IMaxFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IMaxFunctionDbo=} [properties] Properties to set
             */
            function MaxFunctionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MaxFunctionDbo param.
             * @member {FormulaDbo.OperationDbo|null|undefined} param
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @instance
             */
            MaxFunctionDbo.prototype.param = null;

            /**
             * Creates a new MaxFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IMaxFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.MaxFunctionDbo} MaxFunctionDbo instance
             */
            MaxFunctionDbo.create = function create(properties) {
                return new MaxFunctionDbo(properties);
            };

            /**
             * Encodes the specified MaxFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.MaxFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MaxFunctionDbo} message MaxFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MaxFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.FormulaDbo.OperationDbo.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MaxFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.MaxFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MaxFunctionDbo} message MaxFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MaxFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MaxFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.MaxFunctionDbo} MaxFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MaxFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.MaxFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a MaxFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.MaxFunctionDbo} MaxFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MaxFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MaxFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MaxFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a MaxFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.MaxFunctionDbo} MaxFunctionDbo
             */
            MaxFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.MaxFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.MaxFunctionDbo();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.MaxFunctionDbo.param: object expected");
                    message.param = $root.FormulaDbo.OperationDbo.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a MaxFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.MaxFunctionDbo} message MaxFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MaxFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.FormulaDbo.OperationDbo.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this MaxFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MaxFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MaxFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.MaxFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MaxFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.MaxFunctionDbo";
            };

            return MaxFunctionDbo;
        })();

        OperationDbo.FloorFunctionDbo = (function() {

            /**
             * Properties of a FloorFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IFloorFunctionDbo
             * @property {FormulaDbo.OperationDbo|null} [param] FloorFunctionDbo param
             */

            /**
             * Constructs a new FloorFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a FloorFunctionDbo.
             * @implements IFloorFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IFloorFunctionDbo=} [properties] Properties to set
             */
            function FloorFunctionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloorFunctionDbo param.
             * @member {FormulaDbo.OperationDbo|null|undefined} param
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @instance
             */
            FloorFunctionDbo.prototype.param = null;

            /**
             * Creates a new FloorFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IFloorFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.FloorFunctionDbo} FloorFunctionDbo instance
             */
            FloorFunctionDbo.create = function create(properties) {
                return new FloorFunctionDbo(properties);
            };

            /**
             * Encodes the specified FloorFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.FloorFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.FloorFunctionDbo} message FloorFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloorFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.FormulaDbo.OperationDbo.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FloorFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.FloorFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.FloorFunctionDbo} message FloorFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloorFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloorFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.FloorFunctionDbo} FloorFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloorFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.FloorFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a FloorFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.FloorFunctionDbo} FloorFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloorFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloorFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloorFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a FloorFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.FloorFunctionDbo} FloorFunctionDbo
             */
            FloorFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.FloorFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.FloorFunctionDbo();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.FloorFunctionDbo.param: object expected");
                    message.param = $root.FormulaDbo.OperationDbo.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a FloorFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.FloorFunctionDbo} message FloorFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloorFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.FormulaDbo.OperationDbo.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this FloorFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloorFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloorFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.FloorFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloorFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.FloorFunctionDbo";
            };

            return FloorFunctionDbo;
        })();

        OperationDbo.CeilFunctionDbo = (function() {

            /**
             * Properties of a CeilFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface ICeilFunctionDbo
             * @property {FormulaDbo.OperationDbo|null} [param] CeilFunctionDbo param
             */

            /**
             * Constructs a new CeilFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a CeilFunctionDbo.
             * @implements ICeilFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.ICeilFunctionDbo=} [properties] Properties to set
             */
            function CeilFunctionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CeilFunctionDbo param.
             * @member {FormulaDbo.OperationDbo|null|undefined} param
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @instance
             */
            CeilFunctionDbo.prototype.param = null;

            /**
             * Creates a new CeilFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ICeilFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.CeilFunctionDbo} CeilFunctionDbo instance
             */
            CeilFunctionDbo.create = function create(properties) {
                return new CeilFunctionDbo(properties);
            };

            /**
             * Encodes the specified CeilFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.CeilFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.CeilFunctionDbo} message CeilFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CeilFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.FormulaDbo.OperationDbo.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CeilFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.CeilFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.CeilFunctionDbo} message CeilFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CeilFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CeilFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.CeilFunctionDbo} CeilFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CeilFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.CeilFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a CeilFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.CeilFunctionDbo} CeilFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CeilFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CeilFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CeilFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a CeilFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.CeilFunctionDbo} CeilFunctionDbo
             */
            CeilFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.CeilFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.CeilFunctionDbo();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.CeilFunctionDbo.param: object expected");
                    message.param = $root.FormulaDbo.OperationDbo.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a CeilFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.CeilFunctionDbo} message CeilFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CeilFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.FormulaDbo.OperationDbo.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this CeilFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CeilFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CeilFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.CeilFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CeilFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.CeilFunctionDbo";
            };

            return CeilFunctionDbo;
        })();

        OperationDbo.SignedFunctionDbo = (function() {

            /**
             * Properties of a SignedFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface ISignedFunctionDbo
             * @property {FormulaDbo.OperationDbo|null} [param] SignedFunctionDbo param
             */

            /**
             * Constructs a new SignedFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a SignedFunctionDbo.
             * @implements ISignedFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.ISignedFunctionDbo=} [properties] Properties to set
             */
            function SignedFunctionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignedFunctionDbo param.
             * @member {FormulaDbo.OperationDbo|null|undefined} param
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @instance
             */
            SignedFunctionDbo.prototype.param = null;

            /**
             * Creates a new SignedFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ISignedFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.SignedFunctionDbo} SignedFunctionDbo instance
             */
            SignedFunctionDbo.create = function create(properties) {
                return new SignedFunctionDbo(properties);
            };

            /**
             * Encodes the specified SignedFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.SignedFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.SignedFunctionDbo} message SignedFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    $root.FormulaDbo.OperationDbo.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SignedFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.SignedFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.SignedFunctionDbo} message SignedFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignedFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.SignedFunctionDbo} SignedFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.SignedFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes a SignedFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.SignedFunctionDbo} SignedFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignedFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignedFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.param);
                    if (error)
                        return "param." + error;
                }
                return null;
            };

            /**
             * Creates a SignedFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.SignedFunctionDbo} SignedFunctionDbo
             */
            SignedFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.SignedFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.SignedFunctionDbo();
                if (object.param != null) {
                    if (typeof object.param !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.SignedFunctionDbo.param: object expected");
                    message.param = $root.FormulaDbo.OperationDbo.fromObject(object.param);
                }
                return message;
            };

            /**
             * Creates a plain object from a SignedFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.SignedFunctionDbo} message SignedFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignedFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.param = null;
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = $root.FormulaDbo.OperationDbo.toObject(message.param, options);
                return object;
            };

            /**
             * Converts this SignedFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignedFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignedFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.SignedFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignedFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.SignedFunctionDbo";
            };

            return SignedFunctionDbo;
        })();

        OperationDbo.ConcatFunctionDbo = (function() {

            /**
             * Properties of a ConcatFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IConcatFunctionDbo
             * @property {Array.<FormulaDbo.OperationDbo>|null} [params] ConcatFunctionDbo params
             */

            /**
             * Constructs a new ConcatFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents a ConcatFunctionDbo.
             * @implements IConcatFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IConcatFunctionDbo=} [properties] Properties to set
             */
            function ConcatFunctionDbo(properties) {
                this.params = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConcatFunctionDbo params.
             * @member {Array.<FormulaDbo.OperationDbo>} params
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @instance
             */
            ConcatFunctionDbo.prototype.params = $util.emptyArray;

            /**
             * Creates a new ConcatFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IConcatFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.ConcatFunctionDbo} ConcatFunctionDbo instance
             */
            ConcatFunctionDbo.create = function create(properties) {
                return new ConcatFunctionDbo(properties);
            };

            /**
             * Encodes the specified ConcatFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.ConcatFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ConcatFunctionDbo} message ConcatFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConcatFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.params != null && message.params.length)
                    for (var i = 0; i < message.params.length; ++i)
                        $root.FormulaDbo.OperationDbo.encode(message.params[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ConcatFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.ConcatFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ConcatFunctionDbo} message ConcatFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConcatFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConcatFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.ConcatFunctionDbo} ConcatFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConcatFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.ConcatFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.params && message.params.length))
                                message.params = [];
                            message.params.push($root.FormulaDbo.OperationDbo.decode(reader, reader.uint32()));
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
             * Decodes a ConcatFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.ConcatFunctionDbo} ConcatFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConcatFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConcatFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConcatFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.params != null && message.hasOwnProperty("params")) {
                    if (!Array.isArray(message.params))
                        return "params: array expected";
                    for (var i = 0; i < message.params.length; ++i) {
                        var error = $root.FormulaDbo.OperationDbo.verify(message.params[i]);
                        if (error)
                            return "params." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ConcatFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.ConcatFunctionDbo} ConcatFunctionDbo
             */
            ConcatFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.ConcatFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.ConcatFunctionDbo();
                if (object.params) {
                    if (!Array.isArray(object.params))
                        throw TypeError(".FormulaDbo.OperationDbo.ConcatFunctionDbo.params: array expected");
                    message.params = [];
                    for (var i = 0; i < object.params.length; ++i) {
                        if (typeof object.params[i] !== "object")
                            throw TypeError(".FormulaDbo.OperationDbo.ConcatFunctionDbo.params: object expected");
                        message.params[i] = $root.FormulaDbo.OperationDbo.fromObject(object.params[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ConcatFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.ConcatFunctionDbo} message ConcatFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConcatFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.params = [];
                if (message.params && message.params.length) {
                    object.params = [];
                    for (var j = 0; j < message.params.length; ++j)
                        object.params[j] = $root.FormulaDbo.OperationDbo.toObject(message.params[j], options);
                }
                return object;
            };

            /**
             * Converts this ConcatFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConcatFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConcatFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.ConcatFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConcatFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.ConcatFunctionDbo";
            };

            return ConcatFunctionDbo;
        })();

        OperationDbo.IfFunctionDbo = (function() {

            /**
             * Properties of an IfFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @interface IIfFunctionDbo
             * @property {FormulaDbo.OperationDbo|null} [condition] IfFunctionDbo condition
             * @property {FormulaDbo.OperationDbo|null} [whenTrue] IfFunctionDbo whenTrue
             * @property {FormulaDbo.OperationDbo|null} [whenFalse] IfFunctionDbo whenFalse
             */

            /**
             * Constructs a new IfFunctionDbo.
             * @memberof FormulaDbo.OperationDbo
             * @classdesc Represents an IfFunctionDbo.
             * @implements IIfFunctionDbo
             * @constructor
             * @param {FormulaDbo.OperationDbo.IIfFunctionDbo=} [properties] Properties to set
             */
            function IfFunctionDbo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IfFunctionDbo condition.
             * @member {FormulaDbo.OperationDbo|null|undefined} condition
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @instance
             */
            IfFunctionDbo.prototype.condition = null;

            /**
             * IfFunctionDbo whenTrue.
             * @member {FormulaDbo.OperationDbo|null|undefined} whenTrue
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @instance
             */
            IfFunctionDbo.prototype.whenTrue = null;

            /**
             * IfFunctionDbo whenFalse.
             * @member {FormulaDbo.OperationDbo|null|undefined} whenFalse
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @instance
             */
            IfFunctionDbo.prototype.whenFalse = null;

            /**
             * Creates a new IfFunctionDbo instance using the specified properties.
             * @function create
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IIfFunctionDbo=} [properties] Properties to set
             * @returns {FormulaDbo.OperationDbo.IfFunctionDbo} IfFunctionDbo instance
             */
            IfFunctionDbo.create = function create(properties) {
                return new IfFunctionDbo(properties);
            };

            /**
             * Encodes the specified IfFunctionDbo message. Does not implicitly {@link FormulaDbo.OperationDbo.IfFunctionDbo.verify|verify} messages.
             * @function encode
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IfFunctionDbo} message IfFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IfFunctionDbo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                    $root.FormulaDbo.OperationDbo.encode(message.condition, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.whenTrue != null && Object.hasOwnProperty.call(message, "whenTrue"))
                    $root.FormulaDbo.OperationDbo.encode(message.whenTrue, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.whenFalse != null && Object.hasOwnProperty.call(message, "whenFalse"))
                    $root.FormulaDbo.OperationDbo.encode(message.whenFalse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified IfFunctionDbo message, length delimited. Does not implicitly {@link FormulaDbo.OperationDbo.IfFunctionDbo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IfFunctionDbo} message IfFunctionDbo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IfFunctionDbo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IfFunctionDbo message from the specified reader or buffer.
             * @function decode
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FormulaDbo.OperationDbo.IfFunctionDbo} IfFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IfFunctionDbo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FormulaDbo.OperationDbo.IfFunctionDbo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.condition = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.whenTrue = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.whenFalse = $root.FormulaDbo.OperationDbo.decode(reader, reader.uint32());
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
             * Decodes an IfFunctionDbo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FormulaDbo.OperationDbo.IfFunctionDbo} IfFunctionDbo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IfFunctionDbo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IfFunctionDbo message.
             * @function verify
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IfFunctionDbo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.condition != null && message.hasOwnProperty("condition")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.condition);
                    if (error)
                        return "condition." + error;
                }
                if (message.whenTrue != null && message.hasOwnProperty("whenTrue")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.whenTrue);
                    if (error)
                        return "whenTrue." + error;
                }
                if (message.whenFalse != null && message.hasOwnProperty("whenFalse")) {
                    var error = $root.FormulaDbo.OperationDbo.verify(message.whenFalse);
                    if (error)
                        return "whenFalse." + error;
                }
                return null;
            };

            /**
             * Creates an IfFunctionDbo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FormulaDbo.OperationDbo.IfFunctionDbo} IfFunctionDbo
             */
            IfFunctionDbo.fromObject = function fromObject(object) {
                if (object instanceof $root.FormulaDbo.OperationDbo.IfFunctionDbo)
                    return object;
                var message = new $root.FormulaDbo.OperationDbo.IfFunctionDbo();
                if (object.condition != null) {
                    if (typeof object.condition !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.IfFunctionDbo.condition: object expected");
                    message.condition = $root.FormulaDbo.OperationDbo.fromObject(object.condition);
                }
                if (object.whenTrue != null) {
                    if (typeof object.whenTrue !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.IfFunctionDbo.whenTrue: object expected");
                    message.whenTrue = $root.FormulaDbo.OperationDbo.fromObject(object.whenTrue);
                }
                if (object.whenFalse != null) {
                    if (typeof object.whenFalse !== "object")
                        throw TypeError(".FormulaDbo.OperationDbo.IfFunctionDbo.whenFalse: object expected");
                    message.whenFalse = $root.FormulaDbo.OperationDbo.fromObject(object.whenFalse);
                }
                return message;
            };

            /**
             * Creates a plain object from an IfFunctionDbo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {FormulaDbo.OperationDbo.IfFunctionDbo} message IfFunctionDbo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IfFunctionDbo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.condition = null;
                    object.whenTrue = null;
                    object.whenFalse = null;
                }
                if (message.condition != null && message.hasOwnProperty("condition"))
                    object.condition = $root.FormulaDbo.OperationDbo.toObject(message.condition, options);
                if (message.whenTrue != null && message.hasOwnProperty("whenTrue"))
                    object.whenTrue = $root.FormulaDbo.OperationDbo.toObject(message.whenTrue, options);
                if (message.whenFalse != null && message.hasOwnProperty("whenFalse"))
                    object.whenFalse = $root.FormulaDbo.OperationDbo.toObject(message.whenFalse, options);
                return object;
            };

            /**
             * Converts this IfFunctionDbo to JSON.
             * @function toJSON
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IfFunctionDbo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IfFunctionDbo
             * @function getTypeUrl
             * @memberof FormulaDbo.OperationDbo.IfFunctionDbo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IfFunctionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FormulaDbo.OperationDbo.IfFunctionDbo";
            };

            return IfFunctionDbo;
        })();

        return OperationDbo;
    })();

    return FormulaDbo;
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
