export default function Error({ title, message }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-sky-700">
        <div className="bg-sky-100 w-96 text-center py-10 mt-44">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-base font-medium">{message}</p>
        </div>
      </div>
    </>
  );
}
