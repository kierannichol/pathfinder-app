"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolvedCharacterLevelTemplate = exports.CharacterLevelTemplate = exports.ResolvedCharacterTemplateAtLevel = exports.ResolvedCharacterTemplate = exports.CharacterTemplate = void 0;
const ResolvedEntityContext_ts_1 = require("./ResolvedEntityContext.ts");
const Trait_ts_1 = require("./Trait.ts");
const Path_ts_1 = require("@/utils/Path.ts");
const Feature_ts_1 = require("./Feature.ts");
const RestartApplyState_ts_1 = require("./RestartApplyState.ts");
class CharacterTemplate {
    constructor(levelTemplates) {
        this.levelTemplates = levelTemplates;
    }
    async resolve(database, selections) {
        const context = new ResolvedEntityContext_ts_1.ResolvedEntityContext(key => database.load(key), selections);
        let i = 0;
        while (true) {
            try {
                i++;
                if (i > 100) {
                    throw Error("Failed to resolve template");
                }
                const resolved = await Promise.all(this.levelTemplates.map(levelTemplate => levelTemplate.resolve(context)));
                return new ResolvedCharacterTemplate(resolved);
            }
            catch (e) {
                if (e !== RestartApplyState_ts_1.RestartApplyState) {
                    throw e;
                }
            }
        }
    }
}
exports.CharacterTemplate = CharacterTemplate;
class ResolvedCharacterTemplate {
    constructor(resolvedLevelTemplates) {
        this.resolvedLevelTemplates = resolvedLevelTemplates;
    }
    atLevel(level) {
        return new ResolvedCharacterTemplateAtLevel(level, this.resolvedLevelTemplates.filter(levelTemplate => levelTemplate.levelNumber <= level));
    }
}
exports.ResolvedCharacterTemplate = ResolvedCharacterTemplate;
class ResolvedCharacterTemplateAtLevel {
    constructor(characterLevel, resolvedLevelTemplates) {
        this.characterLevel = characterLevel;
        this.resolvedLevelTemplates = resolvedLevelTemplates;
    }
    applyTo(state) {
        this.resolvedLevelTemplates.forEach(levelTemplate => levelTemplate.applyTo(state));
    }
    traverse(state, actionFn) {
        this.resolvedLevelTemplates.forEach(level => level.traverse(state, actionFn));
    }
}
exports.ResolvedCharacterTemplateAtLevel = ResolvedCharacterTemplateAtLevel;
class CharacterLevelTemplate {
    constructor(levelNumber, traits) {
        this.levelNumber = levelNumber;
        this.traits = traits;
    }
    async resolve(context) {
        const path = Path_ts_1.Path.of(this.levelNumber > 0 ? this.levelNumber : '');
        const ref = new Feature_ts_1.FeatureRef(path, 'level', this.levelNumber > 0 ? `Level ${this.levelNumber}` : 'Base', this.levelNumber, undefined);
        const promises = this.traits.map(trait => trait.resolve(ref, context));
        const resolved = await Promise.all(promises);
        return new ResolvedCharacterLevelTemplate(this.levelNumber, resolved);
    }
}
exports.CharacterLevelTemplate = CharacterLevelTemplate;
class ResolvedCharacterLevelTemplate {
    constructor(levelNumber, traits) {
        this.levelNumber = levelNumber;
        this.traits = traits;
    }
    applyTo(state) {
        this.traits.forEach(trait => trait.applyTo(state));
    }
    traverse(state, actionFn) {
        this.traits.forEach(descendant => (0, Trait_ts_1.traverseTrait)(descendant, state, actionFn));
    }
}
exports.ResolvedCharacterLevelTemplate = ResolvedCharacterLevelTemplate;
