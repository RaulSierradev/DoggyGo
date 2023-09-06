const SuperHeader = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">
        Hola, <span className="text-amber-600">Super Admin</span>
      </h1>
    </header>
  );
};

export default SuperHeader;
