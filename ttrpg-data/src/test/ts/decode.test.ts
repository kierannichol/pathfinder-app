import {ChoiceData} from "../../../build/generated/source/proto/main/ts/Choice";
import {decodeChoice} from "../../main/ts/decode";
import {SelectChoice} from "../../main/ts/Choice";

test('decode select choice', () => {
  const data = new ChoiceData({
    id: "abc",
    select: new ChoiceData.SelectInput({
      option_tags: ["cat1", "cat2"]
    })
  });

  const result = decodeChoice(data);

  expect(result).toBeInstanceOf(typeof SelectChoice);
  const selectChoice = result as SelectChoice;
  expect(result.id).toBe("abc");
})