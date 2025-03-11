import {expect, test} from "vitest";
import {Chance} from "@/data/Chance.ts";
import {DataContext} from "@kierannichol/formula-js";

test("2d6 vs 1d10", async () => {
  const chance = new Chance("1d6", "1d10");
  expect(chance.calculate(DataContext.Empty)).toBeCloseTo(0.25, 2);
});