import { User } from "../../types";
import { useGetProfilQuery, useGetUsersQuery } from "../../redux/api/user-api";

const Navbar = () => {
  const { data } = useGetUsersQuery({});
  const { data: userData } = useGetProfilQuery({});
  return (
    <div className="">
      <div className=" scroll-hide  flex gap-3 overflow-x-auto ">
        <div className="  gap-1 flex flex-col items-center">
          <div className="flex flex-col items-end">
            <img className=" border-[#675CFF] w-[54px] h-[54px] rounded-full border-[3px]"src={ userData?.photo?.includes("http")? userData?.photo: import.meta.env.VITE_APP_BASE_URL + userData?.photo}alt="" />
            <sub className=" border-[#675CFF]  w-[10px] h-[10px] rounded-full mt-[-13px] text-[#675CFF] cursor-pointer flex items-center justify-center border"> +</sub>
          </div>
          <p className=" text-[12px] text-[#fff] ">{userData?.username.slice(0, 8)}</p>
        </div>
        {data?.map((el: User): JSX.Element => (
            <div key={el._id}className=" flex  gap-1 flex-col min-w-[54px] items-center" >
              <img className=" border-[3px] border-[#675CFF] w-[54px] h-[54px] rounded-full" src={ el.photo?.includes("http") ? el.photo : import.meta.env.VITE_APP_BASE_URL + el.photo  } alt="" />
              <p className=" text-[12px] text-[#fff]"> {el.username.slice(0, 10)} </p>
            </div>
          )
        )}
      </div>
      <h3 className=" font-[700] mt-[42px]  text-[#fff] text-[30px]"> Home Feed </h3>
    </div>
  );
};

export default Navbar;
