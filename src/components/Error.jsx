export default function Error() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-sky-700">
        <div className="bg-sky-100 w-96 text-center py-10 mt-44">
          <h2 className="text-xl font-bold">An error occured!</h2>
          <p className="text-base font-medium">
            Could not fetch post, please try again later.
          </p>
        </div>
      </div>
    </>
  );
}
