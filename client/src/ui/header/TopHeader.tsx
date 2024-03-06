import { HiOutlineUser } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

function TopHeader() {
  return (
    <div className="flex justify-between bg-[#effae8] p-4 py-3 text-[15px] lg:px-8">
      <div className="flex items-center">
        <span className="pe-2">
          <HiOutlineUser />
        </span>
        <span>Login</span>
      </div>
      <div className="flex items-center">
        <span className="pe-2">
          <SlLocationPin />
        </span>
        <span>Shop location</span>
      </div>
    </div>
  );
}

export default TopHeader;
