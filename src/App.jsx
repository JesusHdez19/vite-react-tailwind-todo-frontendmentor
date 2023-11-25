import MoonIcon from "./components/MoonIcon";
import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-300 bg-[url('./assets/imgs/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
        <header className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
              Todo
            </h1>
            <button>
              <MoonIcon className=" fill-red-500" />
            </button>
          </div>
          <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
            <span className="inline-block h-6 w-6 rounded-full border-2"></span>
            <input
              className="w-full text-gray-400 outline-none"
              type="text"
              placeholder="Create a new todo...."
            />
          </form>
        </header>

        <main className="container mx-auto mt-8 px-4">
          <div className="rounded-md bg-white [&>article]:p-4">
            <article className="flex gap-2 border-b border-b-gray-400">
              <button className="flex-none">
                <span className="inline-block h-6 w-6 rounded-full border-2"></span>
              </button>
              <p className="grow text-gray-600">Complete online javascript</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-2 border-b border-b-gray-400">
              <button className="flex-none">
                <span className="inline-block h-6 w-6 rounded-full border-2"></span>
              </button>
              <p className="grow text-gray-600">Complete online javascript</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-2 border-b border-b-gray-400">
              <button className="flex-none">
                <span className="inline-block h-6 w-6 rounded-full border-2"></span>
              </button>
              <p className="grow text-gray-600">Complete online javascript</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-2 border-b border-b-gray-400">
              <button className="flex-none">
                <span className="inline-block h-6 w-6 rounded-full border-2"></span>
              </button>
              <p className="grow text-gray-600">Complete online javascript</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <section className="flex justify-between rounded-md px-4 py-4">
              <span className=" text-gray-400">5 items left</span>
              <button className=" text-gray-400">Limpiar Completed</button>
            </section>
          </div>
        </main>

        <section className="container mx-auto mt-8  px-4">
          <div className="flex  justify-center gap-4 rounded-md bg-white p-4">
            <button className="text-blue-600">All list</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section>

        <p className="text-center">Drag and drop to recorder List</p>
      </div>
    </>
  );
};
export default App;
