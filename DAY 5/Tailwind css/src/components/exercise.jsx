export function P1Components() {
  return <div className=" bg-red-600 py-6">Page 1 </div>;
}

export function P2Components() {
  return <div className=" bg-slate-500 py-6">Page 2</div>;
}

export function P3Components() {
  return <div className=" bg-yellow-500 py-6">Page 3 </div>;
}

export function P4Components() {
  return <div className=" bg-orange-400 py-6">Page 4 </div>;
}

export function P5Components() {
  return <div className=" bg-blue-200 py-6">Page 5 </div>;
}

export function P6Components() {
  return <div className=" bg-blue-500 py-6">Page 6 </div>;
}

export function P7Components() {
  return <div className=" bg-red-300 py-6">Page 7 </div>;
}

export function P8Components() {
  return <div className=" bg-yellow-700 py-6">Page 8 </div>;
}

export function P9Components() {
  return <div className=" bg-gray-400 py-6">Page 9 </div>;
}

export function P10Components() {
  return <div className=" bg-cyan-200 py-6">Page 10 </div>;
}

function ColorArrayComponent({ colorArray }) {
  // Array of string warna
  const colorArray = [
    "red",
    "slate",
    "yellow",
    "orange",
    "blue",
    "blue",
    "red",
    "yellow",
    "gray",
    "cyan",
  ];

  return (
    <div>
      <h1>Array of Colors</h1>
      {colorArray.map((val, idx) => (
        <LoopComponents key={idx} val={val} />
      ))}
    </div>
  );
}

function LoopComponents(val) {
  return <div style={{ backgroundColor: val, padding: "16px" }}>here </div>;
}

export default ColorArrayComponent;
