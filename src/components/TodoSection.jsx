import { ButtonTheme } from "./ButtonTheme";

const TodoSection = ({ children }) => {
  return (
    <section className="relative container mx-auto max-w-screen-lg flex flex-col items-center gap-4">
      <ButtonTheme />
      <h1 className="text-center font-bold">To Do List</h1>
      {children}
    </section>
  );
};
export { TodoSection };
