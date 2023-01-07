export default function Layout({ children }) {
  return (
    <div className="h-full flex justify-center items-center bg-[#FAFAFA]">
        <div className="w-[360px]">
            {children}
        </div>
    </div>
  );
}
