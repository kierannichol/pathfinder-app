import {render} from "@testing-library/react";
import {Database, DatabaseContext, useRecord} from "./database";

class StubSummary {
  constructor(public readonly id: string, public readonly name: string) {
  }
}

class StubRecord extends StubSummary {
  constructor(id: string, name: string, public readonly description: string) {
    super(id, name);
  }
}

class StubDatabase extends Database<StubSummary, StubRecord> {
  static readonly Records: StubRecord[] = [
      new StubRecord('1', 'A', 'Alpha'),
      new StubRecord('2', 'B', 'Beta'),
      new StubRecord('3', 'D', 'Delta'),
  ]

  fetch(id: string): Promise<StubRecord | undefined> {
    return new Promise(resolve => {
      resolve(StubDatabase.Records
        .find(record => record.id === id));
    })
  }

  list(): Promise<StubSummary[]> {
    return new Promise(resolve => {
      resolve(StubDatabase.Records);
    })
  }
}

const database = new StubDatabase();
const databaseContext = DatabaseContext.create(database);

function LoadingComponent() {
  return <div>Loading...</div>
}

function StubComponent({ id }: { id: string }) {
  const record = useRecord(databaseContext, id);
  return <div id={id}>{record?.description}</div>
}

test('load database', () => {
  render(<StubComponent id={'1'} />)
  expect(document.getElementById('1')).toHaveTextContent('Alpha')
})