import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";

export default function Home() {
  return (
    <div className="w-full min-h-screen supports-dvh:min-h-dscreen flex flex-col justify-center items-center">
      <header className="flex flex-col justify-center items-center">
        <h1 className="font-playfair-display text-center text-4xl p-8 pb-6">
          {"Avery Rosenblum-O'Connor"}
        </h1>
        <div className="w-[60%] border-px border-t-[1px] border-black dark:border-white"></div>
        <ul className="p-4 flex gap-x-8">
          <li>
            <a href="https://github.com/nekodjin">
              <GithubIcon></GithubIcon>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nekodjin">
              <LinkedinIcon></LinkedinIcon>
            </a>
          </li>
        </ul>
      </header>
      <main className="grow"></main>
    </div>
  );
}
