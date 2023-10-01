"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const $protobuf = require("protobufjs/minimal");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const $protobuf__namespace = /* @__PURE__ */ _interopNamespaceDefault($protobuf);
const $Reader = $protobuf__namespace.Reader, $Writer = $protobuf__namespace.Writer, $util = $protobuf__namespace.util;
const $root = $protobuf__namespace.roots["/Users/knichol/dev/personal/pathfinder-app/pathfinder-editor/../pathfinder-generator/src/main/proto"] || ($protobuf__namespace.roots["/Users/knichol/dev/personal/pathfinder-app/pathfinder-editor/../pathfinder-generator/src/main/proto"] = {});
$root.data = (() => {
  const data = {};
  data.ChoiceDbo = function() {
    function ChoiceDbo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    ChoiceDbo.prototype.choiceId = "";
    ChoiceDbo.prototype.label = "";
    ChoiceDbo.prototype.type = "";
    ChoiceDbo.prototype.repeating = false;
    ChoiceDbo.prototype.text = null;
    ChoiceDbo.prototype.featureSelect = null;
    let $oneOfFields;
    Object.defineProperty(ChoiceDbo.prototype, "input", {
      get: $util.oneOfGetter($oneOfFields = ["text", "featureSelect"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    ChoiceDbo.create = function create(properties) {
      return new ChoiceDbo(properties);
    };
    ChoiceDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.choiceId != null && Object.hasOwnProperty.call(message, "choiceId"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.choiceId);
      if (message.label != null && Object.hasOwnProperty.call(message, "label"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.label);
      if (message.type != null && Object.hasOwnProperty.call(message, "type"))
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(message.type);
      if (message.repeating != null && Object.hasOwnProperty.call(message, "repeating"))
        writer.uint32(
          /* id 4, wireType 0 =*/
          32
        ).bool(message.repeating);
      if (message.text != null && Object.hasOwnProperty.call(message, "text"))
        $root.data.TextChoiceInputDbo.encode(message.text, writer.uint32(
          /* id 100, wireType 2 =*/
          802
        ).fork()).ldelim();
      if (message.featureSelect != null && Object.hasOwnProperty.call(message, "featureSelect"))
        $root.data.FeatureSelectChoiceInputDbo.encode(message.featureSelect, writer.uint32(
          /* id 101, wireType 2 =*/
          810
        ).fork()).ldelim();
      return writer;
    };
    ChoiceDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    ChoiceDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.ChoiceDbo();
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
    ChoiceDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    ChoiceDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      let properties = {};
      if (message.choiceId != null && message.hasOwnProperty("choiceId")) {
        if (!$util.isString(message.choiceId))
          return "choiceId: string expected";
      }
      if (message.label != null && message.hasOwnProperty("label")) {
        if (!$util.isString(message.label))
          return "label: string expected";
      }
      if (message.type != null && message.hasOwnProperty("type")) {
        if (!$util.isString(message.type))
          return "type: string expected";
      }
      if (message.repeating != null && message.hasOwnProperty("repeating")) {
        if (typeof message.repeating !== "boolean")
          return "repeating: boolean expected";
      }
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
    ChoiceDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    ChoiceDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.ChoiceDbo";
    };
    return ChoiceDbo;
  }();
  data.TextChoiceInputDbo = function() {
    function TextChoiceInputDbo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    TextChoiceInputDbo.create = function create(properties) {
      return new TextChoiceInputDbo(properties);
    };
    TextChoiceInputDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      return writer;
    };
    TextChoiceInputDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    TextChoiceInputDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.TextChoiceInputDbo();
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
    TextChoiceInputDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    TextChoiceInputDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };
    TextChoiceInputDbo.fromObject = function fromObject(object) {
      if (object instanceof $root.data.TextChoiceInputDbo)
        return object;
      return new $root.data.TextChoiceInputDbo();
    };
    TextChoiceInputDbo.toObject = function toObject() {
      return {};
    };
    TextChoiceInputDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    TextChoiceInputDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.TextChoiceInputDbo";
    };
    return TextChoiceInputDbo;
  }();
  data.FeatureSelectChoiceInputDbo = function() {
    function FeatureSelectChoiceInputDbo(properties) {
      this.optionTags = [];
      this.featureIds = [];
      this.categories = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    FeatureSelectChoiceInputDbo.prototype.optionTags = $util.emptyArray;
    FeatureSelectChoiceInputDbo.prototype.featureIds = $util.emptyArray;
    FeatureSelectChoiceInputDbo.prototype.categories = $util.emptyArray;
    FeatureSelectChoiceInputDbo.prototype.sortBy = 0;
    FeatureSelectChoiceInputDbo.create = function create(properties) {
      return new FeatureSelectChoiceInputDbo(properties);
    };
    FeatureSelectChoiceInputDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.optionTags != null && message.optionTags.length)
        for (let i = 0; i < message.optionTags.length; ++i)
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.optionTags[i]);
      if (message.featureIds != null && message.featureIds.length)
        for (let i = 0; i < message.featureIds.length; ++i)
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).string(message.featureIds[i]);
      if (message.categories != null && message.categories.length)
        for (let i = 0; i < message.categories.length; ++i)
          $root.data.FeatureSelectChoiceCategoryDbo.encode(message.categories[i], writer.uint32(
            /* id 3, wireType 2 =*/
            26
          ).fork()).ldelim();
      if (message.sortBy != null && Object.hasOwnProperty.call(message, "sortBy"))
        writer.uint32(
          /* id 4, wireType 0 =*/
          32
        ).int32(message.sortBy);
      return writer;
    };
    FeatureSelectChoiceInputDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    FeatureSelectChoiceInputDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.FeatureSelectChoiceInputDbo();
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
    FeatureSelectChoiceInputDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
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
        object.sortBy = options.enums === String ? $root.data.FeatureSelectChoiceSortByDbo[message.sortBy] === void 0 ? message.sortBy : $root.data.FeatureSelectChoiceSortByDbo[message.sortBy] : message.sortBy;
      return object;
    };
    FeatureSelectChoiceInputDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    FeatureSelectChoiceInputDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.FeatureSelectChoiceInputDbo";
    };
    return FeatureSelectChoiceInputDbo;
  }();
  data.FeatureSelectChoiceCategoryDbo = function() {
    function FeatureSelectChoiceCategoryDbo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    FeatureSelectChoiceCategoryDbo.prototype.label = "";
    FeatureSelectChoiceCategoryDbo.prototype.tag = "";
    FeatureSelectChoiceCategoryDbo.create = function create(properties) {
      return new FeatureSelectChoiceCategoryDbo(properties);
    };
    FeatureSelectChoiceCategoryDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.label != null && Object.hasOwnProperty.call(message, "label"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.label);
      if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.tag);
      return writer;
    };
    FeatureSelectChoiceCategoryDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    FeatureSelectChoiceCategoryDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.FeatureSelectChoiceCategoryDbo();
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
    FeatureSelectChoiceCategoryDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    FeatureSelectChoiceCategoryDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.label != null && message.hasOwnProperty("label")) {
        if (!$util.isString(message.label))
          return "label: string expected";
      }
      if (message.tag != null && message.hasOwnProperty("tag")) {
        if (!$util.isString(message.tag))
          return "tag: string expected";
      }
      return null;
    };
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
    FeatureSelectChoiceCategoryDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    FeatureSelectChoiceCategoryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.FeatureSelectChoiceCategoryDbo";
    };
    return FeatureSelectChoiceCategoryDbo;
  }();
  data.FeatureSelectChoiceSortByDbo = function() {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FEATURE_SELECT_CHOICE_SORTBY_NONE"] = 0;
    values[valuesById[1] = "FEATURE_SELECT_CHOICE_SORTBY_NAME"] = 1;
    return values;
  }();
  data.DescriptionDbo = function() {
    function DescriptionDbo(properties) {
      this.sections = {};
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    DescriptionDbo.prototype.text = "";
    DescriptionDbo.prototype.sections = $util.emptyObject;
    DescriptionDbo.create = function create(properties) {
      return new DescriptionDbo(properties);
    };
    DescriptionDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.text != null && Object.hasOwnProperty.call(message, "text"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.text);
      if (message.sections != null && Object.hasOwnProperty.call(message, "sections"))
        for (let keys = Object.keys(message.sections), i = 0; i < keys.length; ++i)
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).fork().uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(keys[i]).uint32(
            /* id 2, wireType 2 =*/
            18
          ).string(message.sections[keys[i]]).ldelim();
      return writer;
    };
    DescriptionDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    DescriptionDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.DescriptionDbo(), key, value;
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
    DescriptionDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    DescriptionDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.text != null && message.hasOwnProperty("text")) {
        if (!$util.isString(message.text))
          return "text: string expected";
      }
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
    DescriptionDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    DescriptionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.DescriptionDbo";
    };
    return DescriptionDbo;
  }();
  data.FeatureSummaryDbo = function() {
    function FeatureSummaryDbo(properties) {
      this.tags = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    FeatureSummaryDbo.prototype.id = "";
    FeatureSummaryDbo.prototype.name = "";
    FeatureSummaryDbo.prototype.tags = $util.emptyArray;
    FeatureSummaryDbo.prototype.enabledFormula = "";
    FeatureSummaryDbo.prototype.maxStacks = null;
    FeatureSummaryDbo.prototype.label = null;
    let $oneOfFields;
    Object.defineProperty(FeatureSummaryDbo.prototype, "_maxStacks", {
      get: $util.oneOfGetter($oneOfFields = ["maxStacks"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    Object.defineProperty(FeatureSummaryDbo.prototype, "_label", {
      get: $util.oneOfGetter($oneOfFields = ["label"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    FeatureSummaryDbo.create = function create(properties) {
      return new FeatureSummaryDbo(properties);
    };
    FeatureSummaryDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.id);
      if (message.name != null && Object.hasOwnProperty.call(message, "name"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.name);
      if (message.tags != null && message.tags.length)
        for (let i = 0; i < message.tags.length; ++i)
          writer.uint32(
            /* id 3, wireType 2 =*/
            26
          ).string(message.tags[i]);
      if (message.enabledFormula != null && Object.hasOwnProperty.call(message, "enabledFormula"))
        writer.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(message.enabledFormula);
      if (message.maxStacks != null && Object.hasOwnProperty.call(message, "maxStacks"))
        writer.uint32(
          /* id 5, wireType 0 =*/
          40
        ).uint32(message.maxStacks);
      if (message.label != null && Object.hasOwnProperty.call(message, "label"))
        writer.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(message.label);
      return writer;
    };
    FeatureSummaryDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    FeatureSummaryDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.FeatureSummaryDbo();
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
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    FeatureSummaryDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    FeatureSummaryDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.id != null && message.hasOwnProperty("id")) {
        if (!$util.isString(message.id))
          return "id: string expected";
      }
      if (message.name != null && message.hasOwnProperty("name")) {
        if (!$util.isString(message.name))
          return "name: string expected";
      }
      if (message.tags != null && message.hasOwnProperty("tags")) {
        if (!Array.isArray(message.tags))
          return "tags: array expected";
        for (let i = 0; i < message.tags.length; ++i)
          if (!$util.isString(message.tags[i]))
            return "tags: string[] expected";
      }
      if (message.enabledFormula != null && message.hasOwnProperty("enabledFormula")) {
        if (!$util.isString(message.enabledFormula))
          return "enabledFormula: string expected";
      }
      if (message.maxStacks != null && message.hasOwnProperty("maxStacks")) {
        if (!$util.isInteger(message.maxStacks))
          return "maxStacks: integer expected";
      }
      if (message.label != null && message.hasOwnProperty("label")) {
        if (!$util.isString(message.label))
          return "label: string expected";
      }
      return null;
    };
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
      return message;
    };
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
      return object;
    };
    FeatureSummaryDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    FeatureSummaryDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.FeatureSummaryDbo";
    };
    return FeatureSummaryDbo;
  }();
  data.FeatureDbo = function() {
    function FeatureDbo(properties) {
      this.tags = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    FeatureDbo.prototype.id = "";
    FeatureDbo.prototype.name = "";
    FeatureDbo.prototype.tags = $util.emptyArray;
    FeatureDbo.prototype.enabledFormula = "";
    FeatureDbo.prototype.maxStacks = null;
    FeatureDbo.prototype.label = null;
    FeatureDbo.prototype.description = null;
    FeatureDbo.prototype.stacks = null;
    let $oneOfFields;
    Object.defineProperty(FeatureDbo.prototype, "_maxStacks", {
      get: $util.oneOfGetter($oneOfFields = ["maxStacks"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    Object.defineProperty(FeatureDbo.prototype, "_label", {
      get: $util.oneOfGetter($oneOfFields = ["label"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    FeatureDbo.create = function create(properties) {
      return new FeatureDbo(properties);
    };
    FeatureDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.id);
      if (message.name != null && Object.hasOwnProperty.call(message, "name"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.name);
      if (message.tags != null && message.tags.length)
        for (let i = 0; i < message.tags.length; ++i)
          writer.uint32(
            /* id 3, wireType 2 =*/
            26
          ).string(message.tags[i]);
      if (message.enabledFormula != null && Object.hasOwnProperty.call(message, "enabledFormula"))
        writer.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(message.enabledFormula);
      if (message.maxStacks != null && Object.hasOwnProperty.call(message, "maxStacks"))
        writer.uint32(
          /* id 5, wireType 0 =*/
          40
        ).uint32(message.maxStacks);
      if (message.label != null && Object.hasOwnProperty.call(message, "label"))
        writer.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(message.label);
      if (message.description != null && Object.hasOwnProperty.call(message, "description"))
        $root.data.DescriptionDbo.encode(message.description, writer.uint32(
          /* id 100, wireType 2 =*/
          802
        ).fork()).ldelim();
      if (message.stacks != null && Object.hasOwnProperty.call(message, "stacks"))
        $root.data.StacksDbo.encode(message.stacks, writer.uint32(
          /* id 101, wireType 2 =*/
          810
        ).fork()).ldelim();
      return writer;
    };
    FeatureDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    FeatureDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.FeatureDbo();
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
          case 100: {
            message.description = $root.data.DescriptionDbo.decode(reader, reader.uint32());
            break;
          }
          case 101: {
            message.stacks = $root.data.StacksDbo.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    FeatureDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    FeatureDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.id != null && message.hasOwnProperty("id")) {
        if (!$util.isString(message.id))
          return "id: string expected";
      }
      if (message.name != null && message.hasOwnProperty("name")) {
        if (!$util.isString(message.name))
          return "name: string expected";
      }
      if (message.tags != null && message.hasOwnProperty("tags")) {
        if (!Array.isArray(message.tags))
          return "tags: array expected";
        for (let i = 0; i < message.tags.length; ++i)
          if (!$util.isString(message.tags[i]))
            return "tags: string[] expected";
      }
      if (message.enabledFormula != null && message.hasOwnProperty("enabledFormula")) {
        if (!$util.isString(message.enabledFormula))
          return "enabledFormula: string expected";
      }
      if (message.maxStacks != null && message.hasOwnProperty("maxStacks")) {
        if (!$util.isInteger(message.maxStacks))
          return "maxStacks: integer expected";
      }
      if (message.label != null && message.hasOwnProperty("label")) {
        if (!$util.isString(message.label))
          return "label: string expected";
      }
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
      return null;
    };
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
      return message;
    };
    FeatureDbo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults)
        object.tags = [];
      if (options.defaults) {
        object.id = "";
        object.name = "";
        object.enabledFormula = "";
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
      if (message.description != null && message.hasOwnProperty("description"))
        object.description = $root.data.DescriptionDbo.toObject(message.description, options);
      if (message.stacks != null && message.hasOwnProperty("stacks"))
        object.stacks = $root.data.StacksDbo.toObject(message.stacks, options);
      return object;
    };
    FeatureDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    FeatureDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.FeatureDbo";
    };
    return FeatureDbo;
  }();
  data.StacksDbo = function() {
    function StacksDbo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    StacksDbo.prototype.fixedStack = null;
    StacksDbo.prototype.repeatingStack = null;
    let $oneOfFields;
    Object.defineProperty(StacksDbo.prototype, "stackable", {
      get: $util.oneOfGetter($oneOfFields = ["fixedStack", "repeatingStack"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    StacksDbo.create = function create(properties) {
      return new StacksDbo(properties);
    };
    StacksDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.fixedStack != null && Object.hasOwnProperty.call(message, "fixedStack"))
        $root.data.FixedStackDbo.encode(message.fixedStack, writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim();
      if (message.repeatingStack != null && Object.hasOwnProperty.call(message, "repeatingStack"))
        $root.data.StackDbo.encode(message.repeatingStack, writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim();
      return writer;
    };
    StacksDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    StacksDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.StacksDbo();
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
    StacksDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
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
    StacksDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    StacksDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.StacksDbo";
    };
    return StacksDbo;
  }();
  data.FixedStackDbo = function() {
    function FixedStackDbo(properties) {
      this.stacks = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    FixedStackDbo.prototype.stacks = $util.emptyArray;
    FixedStackDbo.create = function create(properties) {
      return new FixedStackDbo(properties);
    };
    FixedStackDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.stacks != null && message.stacks.length)
        for (let i = 0; i < message.stacks.length; ++i)
          $root.data.StackDbo.encode(message.stacks[i], writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).fork()).ldelim();
      return writer;
    };
    FixedStackDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    FixedStackDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.FixedStackDbo();
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
    FixedStackDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
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
    FixedStackDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    FixedStackDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.FixedStackDbo";
    };
    return FixedStackDbo;
  }();
  data.EffectDbo = function() {
    function EffectDbo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    EffectDbo.prototype.setAction = null;
    EffectDbo.prototype.addAction = null;
    let $oneOfFields;
    Object.defineProperty(EffectDbo.prototype, "action", {
      get: $util.oneOfGetter($oneOfFields = ["setAction", "addAction"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    EffectDbo.create = function create(properties) {
      return new EffectDbo(properties);
    };
    EffectDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.setAction != null && Object.hasOwnProperty.call(message, "setAction"))
        $root.data.EffectDbo.SetActionDbo.encode(message.setAction, writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim();
      if (message.addAction != null && Object.hasOwnProperty.call(message, "addAction"))
        $root.data.EffectDbo.AddActionDbo.encode(message.addAction, writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim();
      return writer;
    };
    EffectDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    EffectDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.EffectDbo();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.setAction = $root.data.EffectDbo.SetActionDbo.decode(reader, reader.uint32());
            break;
          }
          case 2: {
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
    EffectDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    EffectDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      let properties = {};
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
    EffectDbo.fromObject = function fromObject(object) {
      if (object instanceof $root.data.EffectDbo)
        return object;
      let message = new $root.data.EffectDbo();
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
    EffectDbo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
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
    EffectDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    EffectDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.EffectDbo";
    };
    EffectDbo.SetActionDbo = function() {
      function SetActionDbo(properties) {
        if (properties) {
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
        }
      }
      SetActionDbo.prototype.targetKey = "";
      SetActionDbo.prototype.formula = null;
      SetActionDbo.prototype.numberValue = null;
      let $oneOfFields2;
      Object.defineProperty(SetActionDbo.prototype, "value", {
        get: $util.oneOfGetter($oneOfFields2 = ["formula", "numberValue"]),
        set: $util.oneOfSetter($oneOfFields2)
      });
      SetActionDbo.create = function create(properties) {
        return new SetActionDbo(properties);
      };
      SetActionDbo.encode = function encode(message, writer) {
        if (!writer)
          writer = $Writer.create();
        if (message.targetKey != null && Object.hasOwnProperty.call(message, "targetKey"))
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.targetKey);
        if (message.formula != null && Object.hasOwnProperty.call(message, "formula"))
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).string(message.formula);
        if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
          writer.uint32(
            /* id 3, wireType 0 =*/
            24
          ).int32(message.numberValue);
        return writer;
      };
      SetActionDbo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      SetActionDbo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
          reader = $Reader.create(reader);
        let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.EffectDbo.SetActionDbo();
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
      SetActionDbo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
          reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      SetActionDbo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        let properties = {};
        if (message.targetKey != null && message.hasOwnProperty("targetKey")) {
          if (!$util.isString(message.targetKey))
            return "targetKey: string expected";
        }
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
      SetActionDbo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
      };
      SetActionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === void 0) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/data.EffectDbo.SetActionDbo";
      };
      return SetActionDbo;
    }();
    EffectDbo.AddActionDbo = function() {
      function AddActionDbo(properties) {
        if (properties) {
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
        }
      }
      AddActionDbo.prototype.targetKey = "";
      AddActionDbo.prototype.numberDelta = 0;
      AddActionDbo.create = function create(properties) {
        return new AddActionDbo(properties);
      };
      AddActionDbo.encode = function encode(message, writer) {
        if (!writer)
          writer = $Writer.create();
        if (message.targetKey != null && Object.hasOwnProperty.call(message, "targetKey"))
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.targetKey);
        if (message.numberDelta != null && Object.hasOwnProperty.call(message, "numberDelta"))
          writer.uint32(
            /* id 2, wireType 0 =*/
            16
          ).int32(message.numberDelta);
        return writer;
      };
      AddActionDbo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      AddActionDbo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
          reader = $Reader.create(reader);
        let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.EffectDbo.AddActionDbo();
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
      AddActionDbo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
          reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      AddActionDbo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.targetKey != null && message.hasOwnProperty("targetKey")) {
          if (!$util.isString(message.targetKey))
            return "targetKey: string expected";
        }
        if (message.numberDelta != null && message.hasOwnProperty("numberDelta")) {
          if (!$util.isInteger(message.numberDelta))
            return "numberDelta: integer expected";
        }
        return null;
      };
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
      AddActionDbo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
      };
      AddActionDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === void 0) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/data.EffectDbo.AddActionDbo";
      };
      return AddActionDbo;
    }();
    return EffectDbo;
  }();
  data.LinkDbo = function() {
    function LinkDbo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    LinkDbo.prototype.featureId = "";
    LinkDbo.prototype.conditionFormula = null;
    let $oneOfFields;
    Object.defineProperty(LinkDbo.prototype, "_conditionFormula", {
      get: $util.oneOfGetter($oneOfFields = ["conditionFormula"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    LinkDbo.create = function create(properties) {
      return new LinkDbo(properties);
    };
    LinkDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.featureId != null && Object.hasOwnProperty.call(message, "featureId"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.featureId);
      if (message.conditionFormula != null && Object.hasOwnProperty.call(message, "conditionFormula"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.conditionFormula);
      return writer;
    };
    LinkDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    LinkDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.LinkDbo();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.featureId = reader.string();
            break;
          }
          case 2: {
            message.conditionFormula = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    LinkDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    LinkDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.featureId != null && message.hasOwnProperty("featureId")) {
        if (!$util.isString(message.featureId))
          return "featureId: string expected";
      }
      if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula")) {
        if (!$util.isString(message.conditionFormula))
          return "conditionFormula: string expected";
      }
      return null;
    };
    LinkDbo.fromObject = function fromObject(object) {
      if (object instanceof $root.data.LinkDbo)
        return object;
      let message = new $root.data.LinkDbo();
      if (object.featureId != null)
        message.featureId = String(object.featureId);
      if (object.conditionFormula != null)
        message.conditionFormula = String(object.conditionFormula);
      return message;
    };
    LinkDbo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults)
        object.featureId = "";
      if (message.featureId != null && message.hasOwnProperty("featureId"))
        object.featureId = message.featureId;
      if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula")) {
        object.conditionFormula = message.conditionFormula;
        if (options.oneofs)
          object._conditionFormula = "conditionFormula";
      }
      return object;
    };
    LinkDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    LinkDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.LinkDbo";
    };
    return LinkDbo;
  }();
  data.UnlinkDbo = function() {
    function UnlinkDbo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    UnlinkDbo.prototype.featureId = "";
    UnlinkDbo.prototype.conditionFormula = null;
    let $oneOfFields;
    Object.defineProperty(UnlinkDbo.prototype, "_conditionFormula", {
      get: $util.oneOfGetter($oneOfFields = ["conditionFormula"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    UnlinkDbo.create = function create(properties) {
      return new UnlinkDbo(properties);
    };
    UnlinkDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.featureId != null && Object.hasOwnProperty.call(message, "featureId"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.featureId);
      if (message.conditionFormula != null && Object.hasOwnProperty.call(message, "conditionFormula"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.conditionFormula);
      return writer;
    };
    UnlinkDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    UnlinkDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.UnlinkDbo();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.featureId = reader.string();
            break;
          }
          case 2: {
            message.conditionFormula = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    UnlinkDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    UnlinkDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.featureId != null && message.hasOwnProperty("featureId")) {
        if (!$util.isString(message.featureId))
          return "featureId: string expected";
      }
      if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula")) {
        if (!$util.isString(message.conditionFormula))
          return "conditionFormula: string expected";
      }
      return null;
    };
    UnlinkDbo.fromObject = function fromObject(object) {
      if (object instanceof $root.data.UnlinkDbo)
        return object;
      let message = new $root.data.UnlinkDbo();
      if (object.featureId != null)
        message.featureId = String(object.featureId);
      if (object.conditionFormula != null)
        message.conditionFormula = String(object.conditionFormula);
      return message;
    };
    UnlinkDbo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults)
        object.featureId = "";
      if (message.featureId != null && message.hasOwnProperty("featureId"))
        object.featureId = message.featureId;
      if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula")) {
        object.conditionFormula = message.conditionFormula;
        if (options.oneofs)
          object._conditionFormula = "conditionFormula";
      }
      return object;
    };
    UnlinkDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    UnlinkDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.UnlinkDbo";
    };
    return UnlinkDbo;
  }();
  data.StackDbo = function() {
    function StackDbo(properties) {
      this.conditionalComponents = [];
      this.effects = [];
      this.links = [];
      this.unlinks = [];
      this.choices = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    StackDbo.prototype.conditionalComponents = $util.emptyArray;
    StackDbo.prototype.effects = $util.emptyArray;
    StackDbo.prototype.links = $util.emptyArray;
    StackDbo.prototype.unlinks = $util.emptyArray;
    StackDbo.prototype.choices = $util.emptyArray;
    StackDbo.create = function create(properties) {
      return new StackDbo(properties);
    };
    StackDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.conditionalComponents != null && message.conditionalComponents.length)
        for (let i = 0; i < message.conditionalComponents.length; ++i)
          $root.data.ConditionalStackComponentDbo.encode(message.conditionalComponents[i], writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).fork()).ldelim();
      if (message.effects != null && message.effects.length)
        for (let i = 0; i < message.effects.length; ++i)
          $root.data.EffectDbo.encode(message.effects[i], writer.uint32(
            /* id 101, wireType 2 =*/
            810
          ).fork()).ldelim();
      if (message.links != null && message.links.length)
        for (let i = 0; i < message.links.length; ++i)
          $root.data.LinkDbo.encode(message.links[i], writer.uint32(
            /* id 102, wireType 2 =*/
            818
          ).fork()).ldelim();
      if (message.unlinks != null && message.unlinks.length)
        for (let i = 0; i < message.unlinks.length; ++i)
          $root.data.UnlinkDbo.encode(message.unlinks[i], writer.uint32(
            /* id 103, wireType 2 =*/
            826
          ).fork()).ldelim();
      if (message.choices != null && message.choices.length)
        for (let i = 0; i < message.choices.length; ++i)
          $root.data.ChoiceDbo.encode(message.choices[i], writer.uint32(
            /* id 104, wireType 2 =*/
            834
          ).fork()).ldelim();
      return writer;
    };
    StackDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    StackDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.StackDbo();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (!(message.conditionalComponents && message.conditionalComponents.length))
              message.conditionalComponents = [];
            message.conditionalComponents.push($root.data.ConditionalStackComponentDbo.decode(reader, reader.uint32()));
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
            message.links.push($root.data.LinkDbo.decode(reader, reader.uint32()));
            break;
          }
          case 103: {
            if (!(message.unlinks && message.unlinks.length))
              message.unlinks = [];
            message.unlinks.push($root.data.UnlinkDbo.decode(reader, reader.uint32()));
            break;
          }
          case 104: {
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
    StackDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    StackDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.conditionalComponents != null && message.hasOwnProperty("conditionalComponents")) {
        if (!Array.isArray(message.conditionalComponents))
          return "conditionalComponents: array expected";
        for (let i = 0; i < message.conditionalComponents.length; ++i) {
          let error = $root.data.ConditionalStackComponentDbo.verify(message.conditionalComponents[i]);
          if (error)
            return "conditionalComponents." + error;
        }
      }
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
        for (let i = 0; i < message.links.length; ++i) {
          let error = $root.data.LinkDbo.verify(message.links[i]);
          if (error)
            return "links." + error;
        }
      }
      if (message.unlinks != null && message.hasOwnProperty("unlinks")) {
        if (!Array.isArray(message.unlinks))
          return "unlinks: array expected";
        for (let i = 0; i < message.unlinks.length; ++i) {
          let error = $root.data.UnlinkDbo.verify(message.unlinks[i]);
          if (error)
            return "unlinks." + error;
        }
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
    StackDbo.fromObject = function fromObject(object) {
      if (object instanceof $root.data.StackDbo)
        return object;
      let message = new $root.data.StackDbo();
      if (object.conditionalComponents) {
        if (!Array.isArray(object.conditionalComponents))
          throw TypeError(".data.StackDbo.conditionalComponents: array expected");
        message.conditionalComponents = [];
        for (let i = 0; i < object.conditionalComponents.length; ++i) {
          if (typeof object.conditionalComponents[i] !== "object")
            throw TypeError(".data.StackDbo.conditionalComponents: object expected");
          message.conditionalComponents[i] = $root.data.ConditionalStackComponentDbo.fromObject(object.conditionalComponents[i]);
        }
      }
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
        for (let i = 0; i < object.links.length; ++i) {
          if (typeof object.links[i] !== "object")
            throw TypeError(".data.StackDbo.links: object expected");
          message.links[i] = $root.data.LinkDbo.fromObject(object.links[i]);
        }
      }
      if (object.unlinks) {
        if (!Array.isArray(object.unlinks))
          throw TypeError(".data.StackDbo.unlinks: array expected");
        message.unlinks = [];
        for (let i = 0; i < object.unlinks.length; ++i) {
          if (typeof object.unlinks[i] !== "object")
            throw TypeError(".data.StackDbo.unlinks: object expected");
          message.unlinks[i] = $root.data.UnlinkDbo.fromObject(object.unlinks[i]);
        }
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
      return message;
    };
    StackDbo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults) {
        object.conditionalComponents = [];
        object.effects = [];
        object.links = [];
        object.unlinks = [];
        object.choices = [];
      }
      if (message.conditionalComponents && message.conditionalComponents.length) {
        object.conditionalComponents = [];
        for (let j = 0; j < message.conditionalComponents.length; ++j)
          object.conditionalComponents[j] = $root.data.ConditionalStackComponentDbo.toObject(message.conditionalComponents[j], options);
      }
      if (message.effects && message.effects.length) {
        object.effects = [];
        for (let j = 0; j < message.effects.length; ++j)
          object.effects[j] = $root.data.EffectDbo.toObject(message.effects[j], options);
      }
      if (message.links && message.links.length) {
        object.links = [];
        for (let j = 0; j < message.links.length; ++j)
          object.links[j] = $root.data.LinkDbo.toObject(message.links[j], options);
      }
      if (message.unlinks && message.unlinks.length) {
        object.unlinks = [];
        for (let j = 0; j < message.unlinks.length; ++j)
          object.unlinks[j] = $root.data.UnlinkDbo.toObject(message.unlinks[j], options);
      }
      if (message.choices && message.choices.length) {
        object.choices = [];
        for (let j = 0; j < message.choices.length; ++j)
          object.choices[j] = $root.data.ChoiceDbo.toObject(message.choices[j], options);
      }
      return object;
    };
    StackDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    StackDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.StackDbo";
    };
    return StackDbo;
  }();
  data.ConditionalStackComponentDbo = function() {
    function ConditionalStackComponentDbo(properties) {
      this.effects = [];
      this.links = [];
      this.unlinks = [];
      this.choices = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    ConditionalStackComponentDbo.prototype.conditionFormula = "";
    ConditionalStackComponentDbo.prototype.effects = $util.emptyArray;
    ConditionalStackComponentDbo.prototype.links = $util.emptyArray;
    ConditionalStackComponentDbo.prototype.unlinks = $util.emptyArray;
    ConditionalStackComponentDbo.prototype.choices = $util.emptyArray;
    ConditionalStackComponentDbo.create = function create(properties) {
      return new ConditionalStackComponentDbo(properties);
    };
    ConditionalStackComponentDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.conditionFormula != null && Object.hasOwnProperty.call(message, "conditionFormula"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.conditionFormula);
      if (message.effects != null && message.effects.length)
        for (let i = 0; i < message.effects.length; ++i)
          $root.data.EffectDbo.encode(message.effects[i], writer.uint32(
            /* id 101, wireType 2 =*/
            810
          ).fork()).ldelim();
      if (message.links != null && message.links.length)
        for (let i = 0; i < message.links.length; ++i)
          $root.data.LinkDbo.encode(message.links[i], writer.uint32(
            /* id 102, wireType 2 =*/
            818
          ).fork()).ldelim();
      if (message.unlinks != null && message.unlinks.length)
        for (let i = 0; i < message.unlinks.length; ++i)
          $root.data.UnlinkDbo.encode(message.unlinks[i], writer.uint32(
            /* id 103, wireType 2 =*/
            826
          ).fork()).ldelim();
      if (message.choices != null && message.choices.length)
        for (let i = 0; i < message.choices.length; ++i)
          $root.data.ChoiceDbo.encode(message.choices[i], writer.uint32(
            /* id 104, wireType 2 =*/
            834
          ).fork()).ldelim();
      return writer;
    };
    ConditionalStackComponentDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    ConditionalStackComponentDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.ConditionalStackComponentDbo();
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
            message.links.push($root.data.LinkDbo.decode(reader, reader.uint32()));
            break;
          }
          case 103: {
            if (!(message.unlinks && message.unlinks.length))
              message.unlinks = [];
            message.unlinks.push($root.data.UnlinkDbo.decode(reader, reader.uint32()));
            break;
          }
          case 104: {
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
    ConditionalStackComponentDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    ConditionalStackComponentDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.conditionFormula != null && message.hasOwnProperty("conditionFormula")) {
        if (!$util.isString(message.conditionFormula))
          return "conditionFormula: string expected";
      }
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
        for (let i = 0; i < message.links.length; ++i) {
          let error = $root.data.LinkDbo.verify(message.links[i]);
          if (error)
            return "links." + error;
        }
      }
      if (message.unlinks != null && message.hasOwnProperty("unlinks")) {
        if (!Array.isArray(message.unlinks))
          return "unlinks: array expected";
        for (let i = 0; i < message.unlinks.length; ++i) {
          let error = $root.data.UnlinkDbo.verify(message.unlinks[i]);
          if (error)
            return "unlinks." + error;
        }
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
    ConditionalStackComponentDbo.fromObject = function fromObject(object) {
      if (object instanceof $root.data.ConditionalStackComponentDbo)
        return object;
      let message = new $root.data.ConditionalStackComponentDbo();
      if (object.conditionFormula != null)
        message.conditionFormula = String(object.conditionFormula);
      if (object.effects) {
        if (!Array.isArray(object.effects))
          throw TypeError(".data.ConditionalStackComponentDbo.effects: array expected");
        message.effects = [];
        for (let i = 0; i < object.effects.length; ++i) {
          if (typeof object.effects[i] !== "object")
            throw TypeError(".data.ConditionalStackComponentDbo.effects: object expected");
          message.effects[i] = $root.data.EffectDbo.fromObject(object.effects[i]);
        }
      }
      if (object.links) {
        if (!Array.isArray(object.links))
          throw TypeError(".data.ConditionalStackComponentDbo.links: array expected");
        message.links = [];
        for (let i = 0; i < object.links.length; ++i) {
          if (typeof object.links[i] !== "object")
            throw TypeError(".data.ConditionalStackComponentDbo.links: object expected");
          message.links[i] = $root.data.LinkDbo.fromObject(object.links[i]);
        }
      }
      if (object.unlinks) {
        if (!Array.isArray(object.unlinks))
          throw TypeError(".data.ConditionalStackComponentDbo.unlinks: array expected");
        message.unlinks = [];
        for (let i = 0; i < object.unlinks.length; ++i) {
          if (typeof object.unlinks[i] !== "object")
            throw TypeError(".data.ConditionalStackComponentDbo.unlinks: object expected");
          message.unlinks[i] = $root.data.UnlinkDbo.fromObject(object.unlinks[i]);
        }
      }
      if (object.choices) {
        if (!Array.isArray(object.choices))
          throw TypeError(".data.ConditionalStackComponentDbo.choices: array expected");
        message.choices = [];
        for (let i = 0; i < object.choices.length; ++i) {
          if (typeof object.choices[i] !== "object")
            throw TypeError(".data.ConditionalStackComponentDbo.choices: object expected");
          message.choices[i] = $root.data.ChoiceDbo.fromObject(object.choices[i]);
        }
      }
      return message;
    };
    ConditionalStackComponentDbo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults) {
        object.effects = [];
        object.links = [];
        object.unlinks = [];
        object.choices = [];
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
          object.links[j] = $root.data.LinkDbo.toObject(message.links[j], options);
      }
      if (message.unlinks && message.unlinks.length) {
        object.unlinks = [];
        for (let j = 0; j < message.unlinks.length; ++j)
          object.unlinks[j] = $root.data.UnlinkDbo.toObject(message.unlinks[j], options);
      }
      if (message.choices && message.choices.length) {
        object.choices = [];
        for (let j = 0; j < message.choices.length; ++j)
          object.choices[j] = $root.data.ChoiceDbo.toObject(message.choices[j], options);
      }
      return object;
    };
    ConditionalStackComponentDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    ConditionalStackComponentDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.ConditionalStackComponentDbo";
    };
    return ConditionalStackComponentDbo;
  }();
  data.CharacterTemplateDbo = function() {
    function CharacterTemplateDbo(properties) {
      this.levels = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    CharacterTemplateDbo.prototype.levels = $util.emptyArray;
    CharacterTemplateDbo.create = function create(properties) {
      return new CharacterTemplateDbo(properties);
    };
    CharacterTemplateDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.levels != null && message.levels.length)
        for (let i = 0; i < message.levels.length; ++i)
          $root.data.CharacterLevelTemplateDbo.encode(message.levels[i], writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).fork()).ldelim();
      return writer;
    };
    CharacterTemplateDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    CharacterTemplateDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.CharacterTemplateDbo();
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
    CharacterTemplateDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
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
    CharacterTemplateDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    CharacterTemplateDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.CharacterTemplateDbo";
    };
    return CharacterTemplateDbo;
  }();
  data.CharacterLevelTemplateDbo = function() {
    function CharacterLevelTemplateDbo(properties) {
      this.effects = [];
      this.links = [];
      this.unlinks = [];
      this.choices = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    CharacterLevelTemplateDbo.prototype.levelNumber = 0;
    CharacterLevelTemplateDbo.prototype.effects = $util.emptyArray;
    CharacterLevelTemplateDbo.prototype.links = $util.emptyArray;
    CharacterLevelTemplateDbo.prototype.unlinks = $util.emptyArray;
    CharacterLevelTemplateDbo.prototype.choices = $util.emptyArray;
    CharacterLevelTemplateDbo.create = function create(properties) {
      return new CharacterLevelTemplateDbo(properties);
    };
    CharacterLevelTemplateDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.levelNumber != null && Object.hasOwnProperty.call(message, "levelNumber"))
        writer.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint32(message.levelNumber);
      if (message.effects != null && message.effects.length)
        for (let i = 0; i < message.effects.length; ++i)
          $root.data.EffectDbo.encode(message.effects[i], writer.uint32(
            /* id 101, wireType 2 =*/
            810
          ).fork()).ldelim();
      if (message.links != null && message.links.length)
        for (let i = 0; i < message.links.length; ++i)
          $root.data.LinkDbo.encode(message.links[i], writer.uint32(
            /* id 102, wireType 2 =*/
            818
          ).fork()).ldelim();
      if (message.unlinks != null && message.unlinks.length)
        for (let i = 0; i < message.unlinks.length; ++i)
          $root.data.UnlinkDbo.encode(message.unlinks[i], writer.uint32(
            /* id 103, wireType 2 =*/
            826
          ).fork()).ldelim();
      if (message.choices != null && message.choices.length)
        for (let i = 0; i < message.choices.length; ++i)
          $root.data.ChoiceDbo.encode(message.choices[i], writer.uint32(
            /* id 104, wireType 2 =*/
            834
          ).fork()).ldelim();
      return writer;
    };
    CharacterLevelTemplateDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    CharacterLevelTemplateDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.CharacterLevelTemplateDbo();
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
            message.links.push($root.data.LinkDbo.decode(reader, reader.uint32()));
            break;
          }
          case 103: {
            if (!(message.unlinks && message.unlinks.length))
              message.unlinks = [];
            message.unlinks.push($root.data.UnlinkDbo.decode(reader, reader.uint32()));
            break;
          }
          case 104: {
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
    CharacterLevelTemplateDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    CharacterLevelTemplateDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.levelNumber != null && message.hasOwnProperty("levelNumber")) {
        if (!$util.isInteger(message.levelNumber))
          return "levelNumber: integer expected";
      }
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
        for (let i = 0; i < message.links.length; ++i) {
          let error = $root.data.LinkDbo.verify(message.links[i]);
          if (error)
            return "links." + error;
        }
      }
      if (message.unlinks != null && message.hasOwnProperty("unlinks")) {
        if (!Array.isArray(message.unlinks))
          return "unlinks: array expected";
        for (let i = 0; i < message.unlinks.length; ++i) {
          let error = $root.data.UnlinkDbo.verify(message.unlinks[i]);
          if (error)
            return "unlinks." + error;
        }
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
        for (let i = 0; i < object.links.length; ++i) {
          if (typeof object.links[i] !== "object")
            throw TypeError(".data.CharacterLevelTemplateDbo.links: object expected");
          message.links[i] = $root.data.LinkDbo.fromObject(object.links[i]);
        }
      }
      if (object.unlinks) {
        if (!Array.isArray(object.unlinks))
          throw TypeError(".data.CharacterLevelTemplateDbo.unlinks: array expected");
        message.unlinks = [];
        for (let i = 0; i < object.unlinks.length; ++i) {
          if (typeof object.unlinks[i] !== "object")
            throw TypeError(".data.CharacterLevelTemplateDbo.unlinks: object expected");
          message.unlinks[i] = $root.data.UnlinkDbo.fromObject(object.unlinks[i]);
        }
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
    CharacterLevelTemplateDbo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults) {
        object.effects = [];
        object.links = [];
        object.unlinks = [];
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
          object.links[j] = $root.data.LinkDbo.toObject(message.links[j], options);
      }
      if (message.unlinks && message.unlinks.length) {
        object.unlinks = [];
        for (let j = 0; j < message.unlinks.length; ++j)
          object.unlinks[j] = $root.data.UnlinkDbo.toObject(message.unlinks[j], options);
      }
      if (message.choices && message.choices.length) {
        object.choices = [];
        for (let j = 0; j < message.choices.length; ++j)
          object.choices[j] = $root.data.ChoiceDbo.toObject(message.choices[j], options);
      }
      return object;
    };
    CharacterLevelTemplateDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    CharacterLevelTemplateDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.CharacterLevelTemplateDbo";
    };
    return CharacterLevelTemplateDbo;
  }();
  data.SourceModuleDbo = function() {
    function SourceModuleDbo(properties) {
      this.features = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    SourceModuleDbo.prototype.sourceId = "";
    SourceModuleDbo.prototype.features = $util.emptyArray;
    SourceModuleDbo.create = function create(properties) {
      return new SourceModuleDbo(properties);
    };
    SourceModuleDbo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.sourceId);
      if (message.features != null && message.features.length)
        for (let i = 0; i < message.features.length; ++i)
          $root.data.FeatureSummaryDbo.encode(message.features[i], writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).fork()).ldelim();
      return writer;
    };
    SourceModuleDbo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    SourceModuleDbo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.data.SourceModuleDbo();
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
    SourceModuleDbo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    SourceModuleDbo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.sourceId != null && message.hasOwnProperty("sourceId")) {
        if (!$util.isString(message.sourceId))
          return "sourceId: string expected";
      }
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
    SourceModuleDbo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    SourceModuleDbo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/data.SourceModuleDbo";
    };
    return SourceModuleDbo;
  }();
  return data;
})();
const api = {
  list_sources: () => electron.ipcRenderer.invoke("list_sources"),
  list_features: (sourceKey) => electron.ipcRenderer.invoke("list_features", sourceKey),
  load_feature: (sourceKey, featureKey) => electron.ipcRenderer.invoke("load_feature", sourceKey, featureKey),
  save_feature: (sourceKey, featureKey, model) => electron.ipcRenderer.invoke("save_feature", sourceKey, featureKey, model)
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
