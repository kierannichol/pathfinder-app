import {expect, test} from 'vitest'
import {AppliedFeature, FeatureStack} from "./FeatureStack.ts";
import {CharacterState} from "./CharacterState.ts";
import {SetNumberEffect, SetTextEffect} from "./Effect.ts";

const NameFeature = new AppliedFeature("name")
    .addsEffect(new SetTextEffect("name", "Test"));

const NoNameFeature = new AppliedFeature("name")
    .addsEffect(new SetNumberEffect("no_name", 1));

const ClassFeature = new AppliedFeature("class")
    .addsFeature(new AppliedFeature("health")
      .addsEffect(new SetNumberEffect("hp", 10)));

const RemoveNameFeature = new AppliedFeature("remove-name")
    .removesFeature(NameFeature)
    .addsFeature(NoNameFeature);

test('add feature', () => {
  const stack = new FeatureStack();
  stack.add(NameFeature);

  const state: CharacterState = {};
  stack.applyTo(state);
  expect(state).toHaveProperty('name', 'Test');
});

test('add feature with child features', () => {
  const stack = new FeatureStack();
  stack.add(ClassFeature);

  const state: CharacterState = {};
  stack.applyTo(state);
  expect(state).toHaveProperty('hp', 10);
});

test('feature that replaces another feature', () => {
  const stack = new FeatureStack();
  stack.add(NameFeature);
  stack.add(RemoveNameFeature);

  const state: CharacterState = {};
  stack.applyTo(state);
  expect(state).toHaveProperty('no_name', 1);
  expect(state).not.toHaveProperty('name');
});
