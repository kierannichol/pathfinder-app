import * as React from 'react';
import Collapse from "@/components/base/Collapse.tsx";
import Button from "@/components/base/form/Button.tsx";

function CollapseExample() {
  const [open, setOpen] = React.useState(false);

  function handleToggleClicked() {
    setOpen(!open);
  }

  return (
      <div>
        <Button onClick={handleToggleClicked}>Toggle Collapse</Button>
        <Collapse open={open}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante ex, vehicula ac faucibus in, lacinia vitae magna. Vivamus laoreet, tortor quis egestas pulvinar, ligula nulla dictum nulla, sit amet consectetur lorem augue eget sem. Integer vitae imperdiet sapien, a convallis ex. Etiam faucibus dui et odio eleifend, vel scelerisque orci porta. Duis non massa euismod, tincidunt tellus id, sollicitudin tortor. Sed mollis nunc at elit pretium sodales. Pellentesque dui lectus, iaculis vitae felis a, commodo finibus diam.
        </Collapse>
      </div>
  )
}

export default CollapseExample;