const Error = () => {
  return (
    <div className="h-[100vh] flex-col gap-12 flex justify-center items-center">
      <img
        width={300}
        src="https://www.searchnurture.com/wp-content/uploads/2021/03/The-Easiest-Way-to-Build-Links-Dont-Ignore-Your-404s.png.webp"
        alt=""
      />
      <p className=" text-red-500 text-lg font-semibold">Something went wrong!</p>
    </div>
  );
};

export default Error;
