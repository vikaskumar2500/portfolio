export default async function NotFound() {
  return (
    <div className="relative mt-[-30px] flex flex-col items-center px-4 pb-[20px]">
      <div className="card max-w-[900px] rounded bg-base-200 p-4 shadow-xl">
        <h2>Not Found: 404</h2>
        <p>Could not find requested resource</p>
      </div>
    </div>
  )
}
