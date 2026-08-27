import { useState } from "react";
import Card from "./Card.jsx";
import Logo from "./Logo.jsx";

function App() {
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-between items-center mt-3 lg:flex-row flex-col gap-6">
        <Logo />
        <div className="flex gap-x-2 flex-wrap justify-center gap-y-6.5">
          <div>
            <a
              href="#PAC-MAN"
              className="bg-[yellow] py-3 px-4 text-black rounded-md hover:bg-black hover:text-[yellow] hover:outline"
            >
              PAC-MAN
            </a>
          </div>
          <div>
            <a
              href="#BLINKY"
              className="bg-[red] py-3 px-4 text-white rounded-md hover:bg-white hover:text-[red] hover:outline"
            >
              BLINKY
            </a>
          </div>
          <div>
            <a
              href="#INKY"
              className="bg-[cyan] py-3 px-4 text-black rounded-md hover:bg-black hover:text-[cyan] hover:outline"
            >
              INKY
            </a>
          </div>
          <div>
            <a
              href="#CLYDE"
              className="bg-[orange] py-3 px-4 text-white rounded-md hover:bg-white hover:text-[orange] hover:outline"
            >
              CLYDE
            </a>
          </div>
          <div>
            <a
              href="#PINKY"
              className="bg-[pink] py-3 px-4 text-black rounded-md hover:bg-black hover:text-[pink] hover:outline"
            >
              PINKY
            </a>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
        <Card
          image="pacman_cartoon.png"
          title="PAC-MAN"
          text="PAC-MAN’s yellow color and round shape are what make him so
              iconic! Always cheerful and happy, he loves to chomp anything and
              everything!"
        />
        <Card
          image="blinky.png"
          title="BLINKY"
          text="BLINKY is the leader of the Ghosts! He is very quick and persistent."
        />
        <Card
          image="inky.png"
          title="INKY"
          text="INKY is capricious, sometimes chasing and sometimes running away from PAC-MAN. He’s a bit shy!"
        />
        <Card
          image="clyde.png"
          title="CLYDE"
          text="CLYDE is a free-spirited wanderer who likes to explore every corner of the maze."
        />
        <Card
          image="pinky.png"
          title="PINKY"
          text="PINKY is the strategist of the group, anticipating and ambushing PAC-MAN at every chance!"
        />
      </div>
      <div className="rounded-2xl border-3 border-[blue] p-2 mt-5">
        <div className="rounded-lg border-3 border-[blue] px-5 py-3">
          This website contains information from the official{" "}
          <a href="https://www.pacman.com/en/" className="link">
            pacman website
          </a>
          . If you would like to see some of my other works, go to my{" "}
          <a href="https://arontorok.github.io/" className="link">
            portfolio website
          </a>{" "}
          (https://arontorok.github.io/).
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-3">
        <Logo />
      </div>
    </div>
  );
}

export default App;
