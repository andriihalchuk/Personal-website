export default function App() {
  return (
    <div className="flex items-center justify-around bg-slate-900 text-white p-4 text-2xl">
      <div className="font-bold">Logo</div>
      <div className="flex gap-6">
        <button className="btn-nav">About Me</button>
        <button className="btn-nav">Projects</button>
        <button className="btn-nav">Skills</button>
        <button className="btn-nav">Contact</button>
      </div>
      <ul className="flex space-x-3 ">
          <a href="https://www.linkedin.com/in/andrii-halchuk/">
          </a>
      </ul>
    </div>
  );
}