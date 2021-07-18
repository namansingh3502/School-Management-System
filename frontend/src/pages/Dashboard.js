import React, {Component} from "react";
import { BsFillInboxFill } from "react-icons/bs"
import { FaUsers } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {username} = this.props.data.user;

    console.log("loggedinstatus", this.props.data.loggedInStatus)
    if (this.props.data.loggedInStatus === "LOGGED_OUT"){
      return(<p>Loading...</p>)
    }
    else {
      return(
        <div className="ml-80 p-10 min-h-screen ">
          <h1 className="text-4xl">Dashboard</h1>
          <div className="grid grid-cols-4 gap-14 px-10 pb-10">

            <Link to="#" className="h-auto w-auto bg-gray-400 mt-24">
              <div className="relative -top-1/4 h-20 w-20 bg-white rounded-full mx-auto text-center">
                <BsFillInboxFill className="h-10 w-10 mx-auto relative top-1/4"/>
              </div>
              <div className="bg-gray-400">
                <h1 className="text-2xl font-bold text-center">CLASSES</h1>
                <h1 className="text-2xl font-bold text-center">CLASS COUNT</h1>
              </div>
            </Link>

            <Link to="#" className="h-auto w-auto bg-gray-400 mt-24">
              <div className="relative -top-1/4 h-20 w-20 bg-white rounded-full mx-auto text-center">
                <FaUsers className="h-10 w-10 mx-auto relative top-1/4"/>
              </div>
              <div className="bg-gray-400">
                <h1 className="text-2xl font-bold text-center">STUDENTS</h1>
                <h1 className="text-2xl font-bold text-center">STUDENT COUNT</h1>
              </div>
            </Link>

            <Link to="#" className="h-auto w-auto bg-gray-400 mt-24">
              <div className="relative -top-1/4 h-20 w-20 bg-white rounded-full mx-auto text-center">
                <FiActivity className="h-10 w-10 mx-auto relative top-1/4"/>
              </div>
              <div className="bg-gray-400">
                <h1 className="text-2xl font-bold text-center">PARENTS</h1>
                <h1 className="text-2xl font-bold text-center">PARENTS COUNT</h1>
              </div>
            </Link>

            <Link to="#" className="h-auto w-auto bg-gray-400 mt-24">
              <div className="relative -top-1/4 h-20 w-20 bg-white rounded-full mx-auto text-center">
                <MdNotificationsActive className="h-10 w-10 mx-auto relative top-1/4"/>
              </div>
              <div className="bg-gray-400">
                <h1 className="text-2xl font-bold text-center">ATTENDENCE</h1>
              </div>
            </Link>
          </div>

          <div className="flex px-3 mt-8 w-auto h-auto">
            <div className="w-5/12  ml-8 border border-black bg-white p-5">
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              weekends={true}
              events={[
                { title: 'event 1 skjfsdkfj', date: '2021-07-01' },
                { title: 'event 2', date: '2021-07-01' }
              ]}
            />
          </div>

            <div className="w-1/4 border-black border-1 ml-10 bg-white px-8 pt-3">
              <div className="text-center border-b-2 border-black p-3">
                <span className="text-3xl font-bold">Notice Board</span>
              </div>
              <div className="overflow-auto h-4/5 border-l-8 m-2 pl-6 border-gray-500">
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>
                <h1 className="text-3xl font-bold">Notice Board</h1>

              </div>
            </div>
            <div className="w-1/4 border-black border-1 ml-10 bg-white px-8 pt-3">
              <div className="text-center border-b-2 border-black p-3">
                <span className="text-3xl font-bold">Recent Activity</span>
              </div>
              <div className="overflow-auto h-4/5 border-l-8 m-2 pl-6 border-gray-500">
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
                <h1 className="text-3xl font-bold">Recent Activity</h1>
              </div>
            </div>
          </div>

        </div>
      )
    }
  }
}
