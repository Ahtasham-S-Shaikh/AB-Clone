export default function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 md:gap-x-[40px] gap-x-[20px] gap-y-[30px] items-center">
          {children}
        </div>
      </div>
    </>
  );
}
