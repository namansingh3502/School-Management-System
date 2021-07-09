import { Link } from "react-router-dom";
import { BsFillGridFill,BsCalendar } from "react-icons/bs";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { GiBookshelf, GiBlackBook} from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const NavItems = (props) => {
  const { name, icon  } = props ;
  return(
    <li className="flex items-start mb-1 transition duration-500 ease-in-out text-white hover:text-gray-700 hover:bg-white transform hover:-translate-y-0.5 hover:scale-100 rounded-2xl py-1 w-full">
      <Link to="#" className="flex items-center px-3 text-center  " >
        {icon}
        <span className="pl-4 text-xl">{name}</span>
      </Link>
    </li>
  )

}

const Sidebar = () => {

  const dashboard = <BsFillGridFill size="1.5em"/>;
  const myprofile = <BiUser size="1.5em"/>;
  const timetable = <BsCalendar size="1.5em"/>
  const syllabus = <GiBookshelf size="1.5em"/>
  const material = <MdLibraryBooks size="1.5em"/>
  const message = <BiMessageDetail size="1.5em"/>
  const info = <FaUsers size="1.5em"/>
  const marksheet = <HiOutlineDocumentReport size="1.5em"/>
  const attendence = <GiBlackBook size="1.5em"/>


  return (

    <div className="fixed h-full w-18 md:w-80 px-2 py-4 bg-gray-800 z-99">
      <div className=" grid text-white flex h-12 w-full justify-items-center items-center opacity-0 md:opacity-100 pointer-events-none">
          <div className="text-4xl font-bold mt-8">
            Logo Here
          </div>
      </div>

      <ul className="mt-32 w-full py-3 px-2 font-semibold ">

        <NavItems name={"Dashboard"} icon={dashboard} />
        <NavItems name={"My Profile"} icon={myprofile} />
        <NavItems name={"Class Timetables"} icon={timetable} />
        <NavItems name={"Academic Syllabus"} icon={syllabus} />
        <NavItems name={"Study Materials"} icon={material} />
        <NavItems name={"Messages"} icon={message} />
        <NavItems name={"Student Information"} icon={info} />
        <NavItems name={"Student Marksheet"} icon={marksheet} />
        <NavItems name={"Student Attendence"} icon={attendence} />
      </ul>

    </div>

  )
}

export default Sidebar