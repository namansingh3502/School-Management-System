import React, {Component} from "react";
import { BsFillInboxFill } from "react-icons/bs"
import { FaUsers } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let notice_board = [];
    for (let i = 0; i < 20; i++) { notice_board.push(<h1 className="text-xl font-semibold">Notice Board</h1>);}
    let recent_activity = [];
    for (let i = 0; i < 20; i++) { recent_activity.push(<h1 className="text-xl font-semibold">Recent Activity</h1>);}

    const quick_link = [
      {key:"CLASSES", value:"CLASS COUNT", icon:<BsFillInboxFill className="h-10 w-10 mx-auto relative top-1/4" />},
      {key:"STUDENTS", value:"STUDENT COUNT", icon:<FaUsers className="h-10 w-10 mx-auto relative top-1/4" /> },
      {key:"PARENTS", value:"PARENT COUNT", icon:<FiActivity className="h-10 w-10 mx-auto relative top-1/4" />},
      {key:"ATTENDENCE", value:"", icon:<MdNotificationsActive className="h-10 w-10 mx-auto relative top-1/4" /> },
    ];

    return (
      <div className="ml-80 py-10 px-5 min-h-screen bg-gray-200">
        <h1 className="text-4xl">Dashboard</h1>
        <div className="grid grid-cols-4 gap-8 px-5 pb-5">
          {quick_link.map((item) => {
            return (
              <Link to="#" className="h-auto w-auto bg-gray-400 mt-24" key={item.key}>
                <div className="relative -top-1/4 h-16 w-16 bg-white rounded-full mx-auto text-center">
                  {item.icon}
                </div>
                <div className="bg-gray-400" >
                  <h1 className="text-2xl font-bold text-center">{item.key}</h1>
                  <h1 className="text-2xl font-bold text-center">{item.value}</h1>
                </div>
              </Link>
            )
          })}

        </div>
        <div className="flex px-5 mt-8 w-auto h-auto">
          <div className="border border-black bg-white p-5" style={{width:840}}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={[
                { title: 'event 1 skjfsdkfj', date: '2021-07-01' },
                { title: 'event 2', date: '2021-07-01' }
              ]}
            />
          </div>

          <div className="border-black border-1 ml-8 bg-white px-6 pt-3" style={{width:400}}>
            <div className="text-center border-b-2 border-black p-3">
              <span className="text-3xl font-bold">Notice Board</span>
            </div>
            <div className="overflow-auto h-4/5 border-l-8 m-2 pl-6 border-gray-500">
              <div>{notice_board}</div>
            </div>
          </div>
          <div className="border-black border-1 ml-8 bg-white px-6 pt-3" style={{width:400}}>
            <div className="text-center border-b-2 border-black p-3">
              <span className="text-3xl font-bold">Recent Activity</span>
            </div>
            <div className="overflow-auto h-4/5 border-l-8 m-2 pl-6 border-gray-500">
              <div>{recent_activity}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard;