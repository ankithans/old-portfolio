import Resume from "../components/Resume";

export default function name() {
  return (
    <div className="flex flex-row">
      <div className="text-gray-300 font-sans head-font font-semibold text-2xl pt-20 pb-20 pl-7 lg:pl-20">
        Ankit Hans
      </div>
      <div className="flex-1 pr-7 lg:p-20">
        <Resume />
      </div>
    </div>
  );
}
