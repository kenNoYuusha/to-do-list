import { BiError } from "react-icons/bi";
const TodoError = () => {
  return <li className="w-full h-full grid place-items-center text-[40vw] text-zinc-700 dark:text-zinc-200">
  <p className="text-mobileRange text-center">Something went wrong<br/> Try later</p>
  <BiError />
</li>;
}
export { TodoError }
