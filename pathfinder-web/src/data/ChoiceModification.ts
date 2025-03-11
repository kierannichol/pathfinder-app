import {ResolvedTrait, Trait} from "@/data/Trait.ts";
import {FeatureRef} from "./Feature";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export class ChoiceModification implements Trait {

    constructor(public readonly targetChoiceId: string,
                public readonly tagsToAdd: string[],
                public readonly tagsToRemove: string[],
                public readonly featuresToAdd: string[],
                public readonly featuresToRemove: string[]) {
    }

    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
        throw new Error("Method not implemented.");
    }

}