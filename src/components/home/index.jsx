import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "../navbar";
import bluebar from "../../assets/bluebar.svg";

export const Home = () => {
  return (
    <div className="w-full justify-center rounded-t bg-white shadow-md shadow-black/30 print:hidden px-5">
      <main className="main px-4 md:px-0 index">
        <div className="container mx-auto">
          <section className="">
            <div className="py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
                <div className="home__welcome markdown">
                  <h1 className="text-4xl font-semibold">
                    Mesaje de Pruebas para la cosi
                  </h1>
                  <p>
                    Authentic cred hoodie hashtag selfies. Raclette banjo
                    cardigan cred. Kitsch XOXO lomo polaroid. Knausgaard put a
                    bird on it four dollar toast leggings typewriter
                    asymmetrical.
                  </p>
                  <p>HIIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                </div>{" "}
                <div className="mb-12 xl:mb-0">
                  <form
                    name="signups"
                    netlify=""
                    className="flex items-center border-b border-2 border-blue-400 py-2"
                  >
                    <input
                      type="text"
                      name="email"
                      placeholder="your@email.com"
                      aria-label="Email address"
                      className="appearance-none mb-36 bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>{" "}
              <div className="flex flex-col w-full xl:w-2/5">
                <img
                  alt="Hero"
                  src="https://source.unsplash.com/random/720x400"
                  className="rounded shadow-xl"
                />
              </div>
            </div>
          </section>
        </div>
        <img src={bluebar} />
        <footer className="footer -mx-4 md:mx-0">
          <div className="container mx-auto pb-6 flex justify-center">
            <a href="https://github.com/yetto-tools "></a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
