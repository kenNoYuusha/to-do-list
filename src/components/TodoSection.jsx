import { ButtonTheme } from "./ButtonTheme";

const TodoSection = ({ todoAddNew, todoSearch }) => {
  return (
    <section className="h-1/4 container mx-auto max-w-screen-lg pb-4">
      <div className="flex flex-row justify-between items-center">
        {todoAddNew}
        <ButtonTheme />
      </div>
      <h1 className="text-center font-bold py-[calc(var(--vh,_1vh)_*_1)]">
        To Do List
      </h1>
      <div className="flex justify-end">{todoSearch}</div>
    </section>
  );
};
export { TodoSection };
