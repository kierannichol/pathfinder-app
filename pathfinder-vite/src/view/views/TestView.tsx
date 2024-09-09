import BoxedValue from "@/view/components/character/sheet/common/BoxedValue.tsx";

export default function TestView() {
  return <main>
    <header>Controls Test</header>
    <section className="d-flex flex-column gap-2">
      <div className="d-flex flex-grow-1 justify-content-evenly gap-2">
        <BoxedValue>15</BoxedValue>
        <BoxedValue>8</BoxedValue>
        <BoxedValue>A</BoxedValue>
        <BoxedValue>-</BoxedValue>
      </div>
      <div className="d-flex flex-grow-1 justify-content-evenly align-content-stretch gap-2">
        <BoxedValue>Input</BoxedValue>
        <BoxedValue><input type="text" /></BoxedValue>
      </div>
    </section>
  </main>
}