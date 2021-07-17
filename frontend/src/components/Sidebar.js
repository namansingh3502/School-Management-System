import { Link, useRouteMatch, useParams } from "react-router-dom";
import { BsFillGridFill,BsCalendar } from "react-icons/bs";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { GiBookshelf, GiBlackBook,GiExitDoor} from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import userimg from "../static/userimg.jpeg"

const NavbarItem = (props) => {
  const { user } = useParams();
  const { name, icon, nexturl } = props ;
  return (
    <li className="flex items-start mb-1 transition duration-500 ease-in-out text-white hover:text-gray-700 hover:bg-white transform hover:-translate-y-0.5 hover:scale-100 rounded-2xl py-1 w-full">
      <Link to={`${user}/${nexturl}`} className="flex items-center px-3 text-center" >
        {icon}
        <span className="pl-4 text-xl">{name}</span>
      </Link>
    </li>
  )
}

const Sidebar = (props) => {
  const { user } = useParams();
  const navlist = [
    { name:"Dashboard", icon:<BsFillGridFill size="1.5em"/>, nexturl:"" },
    { name:"My Profile", icon:<BiUser size="1.5em"/>, nexturl:"profile" },
    { name:"Class Timetables", icon:<BsCalendar size="1.5em"/>, nexturl:"timetable" },
    { name:"Academic Syllabus", icon:<GiBookshelf size="1.5em"/>, nexturl:"syllabus" },
    { name:"Study Materials", icon:<MdLibraryBooks size="1.5em"/>, nexturl:"study-materials" },
    { name:"Messages", icon:<BiMessageDetail size="1.5em"/>, nexturl:"messages" },
    { name:"Student Information", icon:<FaUsers size="1.5em"/>, nexturl:"stduent-info" },
    { name:"Student Marksheet", icon:<HiOutlineDocumentReport size="1.5em"/>, nexturl:"student-marksheet" },
    { name:"Student Attendence", icon:<GiBlackBook size="1.5em"/>, nexturl:"student-attendence" },
  ]

  return (
    <div className="fixed h-full w-18 md:w-80 px-2 py-4 bg-gray-800 z-99">
      <div id={"LOGO"} className="grid text-white flex h-12 w-full justify-items-center items-center opacity-0 md:opacity-100 pointer-events-none my-3">
          <div className="text-4xl font-bold">
            Logo Here
          </div>
      </div>
      <div id={"USER"} className="mt-8">
        <img className="w-36 h-36 rounded-full mx-auto" src={userimg} alt="" width="384" height="512"/>
        <h1 className="text-3xl text-center text-white my-5">{user}</h1>
      </div>
      <div id={"SIDEBARLINK"} >
        <ul className="mt-10 w-full py-3 px-2 font-semibold ">
          {navlist.map((item) => {
            return <NavbarItem
              key={item.name}
              name={item.name}
              icon={item.icon}
              nexturl={item.nexturl}
            />
          })}
          <li className="fixed bottom-4 flex items-start mb-1 transition duration-500 ease-in-out text-white hover:text-gray-700 hover:bg-white transform hover:-translate-y-0.5 hover:scale-100 rounded-2xl py-1 w-72">
            <Link to={`logout`} className="flex items-center px-3 text-center" >
              <GiExitDoor size="1.5em"/>
              <span className="pl-4 text-xl">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar