import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center supports-dvh:min-h-dscreen">
            <header className="flex flex-col items-center justify-center">
                <h1 className="p-8 pb-6 text-center font-playfair-display text-4xl">
                    {"Avery Rosenblum-O'Connor"}
                </h1>
                <div className="border-px w-[60%] border-t-[1px] border-black dark:border-white"></div>
                <ul className="flex gap-x-8 p-4">
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
