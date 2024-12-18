import * as React from 'react';
import {useState} from 'react';
import SelectButton from "@/components/base/form/select/SelectButton.tsx";
import SelectList, {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";

function SelectExamples() {
  const [selected, setSelected] = useState<string>("None");

  const options = [
    SelectListEntry.builder("first", "First")
    .description(async () => "Nulla consectetur molestie mi, in suscipit libero vehicula sed. Curabitur bibendum lacus arcu, vel mattis sem vulputate a. Curabitur a felis rutrum, fermentum nunc non, tempus tellus. Nulla finibus mi non dolor imperdiet eleifend. Nunc vehicula elit sit amet pharetra consequat. In enim nisl, accumsan dictum iaculis eget, euismod quis justo. Donec pellentesque nec ipsum quis eleifend.")
    .build(),
    SelectListEntry.builder("second", "Second")
    .description(async () => "Phasellus at feugiat est. Duis interdum odio a velit aliquet tristique. Mauris vitae arcu convallis, rhoncus est laoreet, pellentesque ante. Aenean orci dui, condimentum non vehicula sit amet, mattis vel risus. Etiam bibendum nec felis ut interdum. Donec fermentum mauris quis interdum congue. Suspendisse at venenatis magna. Ut tempor dui at justo vestibulum, vitae tincidunt ante convallis. Aliquam feugiat cursus erat, in vehicula nulla rutrum quis. Sed metus nulla, porttitor quis turpis at, feugiat porttitor ex. Sed pulvinar posuere odio, nec sodales velit. Ut dui nibh, ultrices eu luctus sed, rutrum nec nisi. Cras aliquam, mi placerat dignissim consectetur, nunc dolor porttitor libero, eu posuere orci sapien nec ligula. Morbi nec lacus ac dui tempus varius. Sed quis nibh a est viverra molestie eu in lectus. In hac habitasse platea dictumst.")
    .build(),
    SelectListEntry.builder("third", "Third")
    .description(async () => "Aliquam ut felis laoreet sem interdum fringilla vel id ante. Curabitur facilisis imperdiet urna nec tempus. Ut nec lacus blandit, volutpat dui eu, posuere nulla. Proin luctus porttitor quam, ut dapibus enim lobortis nec. Etiam semper dolor ut lacus lobortis, ac feugiat diam pretium. Morbi posuere, lectus sit amet cursus pharetra, ipsum diam cursus diam, cursus finibus tellus nibh in lectus. Aliquam ligula nunc, tempor sed elit nec, placerat vulputate nulla. Sed et justo sit amet est malesuada congue. Pellentesque nec tellus auctor enim tempor gravida id eu sem. Curabitur id nulla vel massa dapibus fermentum ac in libero. Curabitur imperdiet tortor sit amet mattis malesuada.")
    .enabled(false)
    .build(),
  ];

  function handleSelect(value: string) {
    setSelected(value);
  }

  return (
      <div>
        <header>Select Button</header>
        <label>{selected}</label>
        <SelectButton onChange={handleSelect}
                      optionsFn={() => options}
                      title="Chose Option">
          Chose
        </SelectButton>
        <header>Select List</header>
        <SelectList optionsFn={() => options} />
      </div>
  )
}

export default SelectExamples;