import undrawNoData from "./assets/undrawNoData.png";

const App = () => {
  return (
    <div className="w-96 min-h-96 mx-auto p-3 mt-5 bg-zinc-100">
      <h1 className="text-2xl mb-2 font-bold">List Builder App</h1>
      <form>
        <div className="flex mb-3">
          <input
            type="text"
            placeholder="enter your task"
            className="px-2 py-1 w-full"
          />
          <button className="text-2xl bg-blue-700 px-3 text-white">+</button>
        </div>
      </form>
      <div className="flex justify-between">
        <p>Your Lists</p>
        <p className="bg-blue-700 text-xs text-white rounded-lg p-1">
          Done (<span>0</span>/<span>0</span>)
        </p>
      </div>
      <ul>
        <li className="flex flex-col items-center">
          <img
            src={undrawNoData}
            className="w-56 m-3 rounded-lg"
            alt="empty lists"
          />
          <p className="text-sm text-zinc-500">There Is No Lists</p>
        </li>
      </ul>
    </div>
  );
};

export default App;
