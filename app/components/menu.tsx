const Button = ({ children }: { children: string }) => {
  return (
    <li
      className="p-2 flex items-center text-center bg-red-600 rounded-md text-sm
            font-bold"
    >
      {children}
    </li>
  );
};
export const Menu = () => {
  return (
    <nav className="h-full px-2 py-4">
      <ul className="flex flex-col gap-2">
        <Button>3S</Button>
        <Button>2X</Button>
        <Button>+R</Button>
      </ul>
    </nav>
  );
};
