import * as React from 'react';
import {useState} from 'react';
import Button from "@/components/base/form/Button.tsx";
import Tabs from "@/components/base/Tabs.tsx";
import CollapseExample from "@/view/test/CollapseExample.tsx";
import SelectExamples from "@/view/test/SelectExamples.tsx";

interface TestViewProps {

}

function TestView({}: TestViewProps) {
  const [activeTab, setActiveTab] = useState<string>();
  return (
      <main>
        <Tabs activeKey={activeTab} onSelect={setActiveTab}>
          <Tabs.Tab eventKey="base" header="Base">
            <header>Collapse</header>
            <section>
              <CollapseExample/>
            </section>
          </Tabs.Tab>
          <Tabs.Tab eventKey="form" header="Form">
            <header>Buttons</header>
            <section>
              <Button>Button</Button>
              <hr/>
              <SelectExamples/>
            </section>
          </Tabs.Tab>
        </Tabs>
      </main>
  )
}

export default TestView;