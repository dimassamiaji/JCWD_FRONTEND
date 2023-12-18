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

// export function P11Components({ bgColor, value }) {
//   return <div style={{ backgroundColor: bgColor, padding: "16" }}>{value}</div>;
// }

export function P11Components({ bgColor, value }) {
  return <div className={`bg-${bgColor} p-4`}>{value}</div>;
}

export function LoopComponent({ arr }) {
  return (
    <div>
      {arr?.map((color, idx) => {
        const test = "Testing " + (idx + 1);
        return <P11Components bgColor={color} key={idx} value={test} />;
      })}
    </div>
  );
}
