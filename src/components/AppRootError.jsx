export function AppRootError({ error }) {
  return (
    <div className="bg-red text-black">CRITICAL ERROR {String(error)}</div>
  );
}
