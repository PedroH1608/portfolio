export function Menu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-4">
      <nav className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border rounded-full p-2 shadow-lg">
        <a
          href="https://www.linkedin.com/in/pedro-henrique-oliveira-braga/"
          className="group relative px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors text-sm"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn Logo"
            className="w-5"
          />
          <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border">
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/PedroH1608"
          className="group relative px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors text-sm"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub Icon"
            className="w-5"
          />
          <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border">
            GitHub
          </span>
        </a>
        <button className="group relative px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors text-sm cursor-pointer">
          <img
            src="public/icons/light.svg"
            alt="Light Mode Icon"
            className="w-5"
          />
          <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border">
            Theme
          </span>
        </button>
        <button className="group relative px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors text-sm cursor-pointer">
          <img
            src="public/icons/language.svg"
            alt="Language Button"
            className="w-5"
          />
          <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border">
            Language
          </span>
        </button>
      </nav>
    </div>
  );
}
