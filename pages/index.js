import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>João Victor - Portifólio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-36 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Portifólio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resumo
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              João Victor
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Desenvolvedor e designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              sit. Incidunt odio repellendus, dolor non dolorum laudantium rem
              atque aut tempore ea natus porro rerum veniam ipsum at id sit.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <MdEmail className="dark:text-white" />
            <AiFillLinkedin className="dark:text-white" />
            <AiFillYoutube className="dark:text-white" />
          </div>

          <div
            className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full 
            w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96"
          >
            <Image src={deved} fill style={{ objectFit: "cover" }} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              commodi nulla aut, error{" "}
              <span className="text-teal-500">culpa</span> consequatur ipsa
              maiores sapiente quo mollitia harum rem veniam voluptates
              repellendus rerum <span className="text-teal-500">doloum </span>
              minima odio temporibus.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              commodi nulla aut, error
            </p>
          </div>

          <div className="lg:flex gap-10 justify-center">
            <div
              className="flex flex-col items-center 
              shadow-lg p-10 rounded-xl my-10 dark:bg-white"
            >
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium py-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your design theory
              </p>
              <h4 className="py-4 text-teal-600">
                Ferramentas de Design que eu uso
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium py-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your design theory
              </p>
              <h4 className="py-4 text-teal-600">
                Ferramentas de Design que eu uso
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium py-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your design theory
              </p>
              <h4 className="py-4 text-teal-600">
                Ferramentas de Design que eu uso
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portifólio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              commodi nulla aut, error{" "}
              <span className="text-teal-500">culpa</span> consequatur ipsa
              maiores sapiente quo mollitia harum rem veniam voluptates
              repellendus rerum <span className="text-teal-500">doloum </span>
              minima odio temporibus.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              commodi nulla aut, error
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
