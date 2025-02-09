const TodoEmptyList = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold text-zinc-900">Enter your first task</h2>
      <svg
        /* width="100%"
        height="100%" */
        className="w-3/5 text-zinc-900"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.00002 7L8.73728 5.26274C9.52931 4.47071 9.92533 4.07469 10.382 3.92632C10.7837 3.7958 11.2164 3.7958 11.6181 3.92632C12.0747 4.07469 12.4707 4.47071 13.2628 5.26274L14 6.00012M10 10L14 14M9.50005 18.5002C10.1581 17.8422 16.644 11.3563 20.004 7.99627C21.1086 6.89166 21.1046 5.10475 20.0001 4.0001C18.8954 2.89541 17.1084 2.89137 16.0038 3.99603C12.6437 7.35611 6.15797 13.8419 5.49993 14.4999C3.71534 16.2843 2.64644 20.6464 2.99993 20.9999C3.35341 21.3533 7.66067 20.3396 9.50005 18.5002Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { TodoEmptyList };
