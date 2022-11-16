const TodoLoading = () => {
  return (
    <>
      <TodoLoadingItem/>
      <TodoLoadingItem/>
      <TodoLoadingItem/>
      <TodoLoadingItem/>
      <TodoLoadingItem/>
      <TodoLoadingItem/>
    </>
  );
};

const TodoLoadingItem = () => {
  return (
    <li className="w-full pt-mobileRangeSpacing flex flex-row justify-between gap-x-mobileRangeSpacing text-mobileRange first:pt-0">
        <span className="basis-mobileRangeSpacing aspect-square rounded-full bg-zinc-400 dark:bg-zinc-800 animate-pulse"></span>
        <p className="basis-mobileRangeSpacing grow px-mobileRangeSpacing rounded-full bg-zinc-400 dark:bg-zinc-800 animate-pulse text-transparent">C</p>
        <span className="basis-mobileRangeSpacing aspect-square rounded-full bg-zinc-400 dark:bg-zinc-800 animate-pulse"></span>
      </li>
  )
}

// const TodoLoadingItem = () => {
//   return (
//     <li className="w-full pt-mobileRangeSpacing flex flex-row justify-between gap-x-mobileRangeSpacing text-mobileRange first:pt-0">
//         <span className="basis-mobileRangeSpacing aspect-square rounded-full bg-gradient-to-br bg-400% animate-loadingAnimation from-zinc-300 via-zinc-500 to-zinc-700"></span>
//         <p className="basis-mobileRangeSpacing grow px-mobileRangeSpacing rounded-full bg-gradient-to-br bg-400% animate-loadingAnimation from-zinc-300 via-zinc-500 to-zinc-700 text-transparent">C</p>
//         <span className="basis-mobileRangeSpacing aspect-square rounded-full bg-gradient-to-br bg-400% animate-loadingAnimation from-zinc-300 via-zinc-500 to-zinc-700"></span>
//       </li>
//   )
// }
export { TodoLoading };
