const Button = ({ children }: { children: string }) => {
  return (
    <li
      className="p-2 flex items-center text-center bg-red-600 rounded-md text-sm
            font-bold cursor-pointer"
    >
      {children}
    </li>
  );
};

export const Menu = () => {
  return (
    <nav className="h-screen flex">
      <div className="border-r border-r-white/10 h-full">
        <ul className="flex flex-col gap-3 mt-16 px-2">
          <Button>3S</Button>
          <Button>2X</Button>
          <Button>+R</Button>
        </ul>
      </div>
      <div className="border-r border-r-white/10 h-full">
        <div className="px-8 pt-8">
          <div className="flex gap-2">
            <div
              className="h-10 w-10 flex items-center justify-center font-black
                            bg-red-600 rounded-sm"
            >
              3S
            </div>
            <span
              className="uppercase font-semibold text-yellow-400 hover:text-white 
                            cursor-pointer duration-150"
            >
              Third Strike
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
