export const Layout = ({ children }) => {
  return (
    <main>
      <div className="w-full h-[calc(var(--vh,_1vh)_*_100)] min-h-[568px] p-4 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
        {children}
      </div>
    </main>
  );
};
