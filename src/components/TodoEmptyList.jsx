const TodoEmptyList = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-50">
        Enter your first task
      </h2>
      {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
      <svg
        /* width="800px"
        height="800px" */
        className="w-5/6 text-zinc-800 dark:text-zinc-50"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 7.00003H4M8 12H4M8 17H4M12 3V21M9.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V6.20003C20 5.07993 20 4.51987 19.782 4.09205C19.5903 3.71573 19.2843 3.40977 18.908 3.21802C18.4802 3.00003 17.9201 3.00003 16.8 3.00003H9.2C8.07989 3.00003 7.51984 3.00003 7.09202 3.21802C6.71569 3.40977 6.40973 3.71573 6.21799 4.09205C6 4.51987 6 5.07993 6 6.20003V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
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
