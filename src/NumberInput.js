export default function NumberInput({ state, setState }) {
  return (
    <input
      type="number"
      step="1"
      min="1"
      max="100"
      value={state}
      onChange={(e) => setState(Number(e.target.value))}
    />
  );
}
