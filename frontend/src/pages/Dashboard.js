import React, {Component} from "react";
import { BsFillInboxFill } from "react-icons/bs"
import { FaUsers } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from "axios";

const Board = (data) => {
  const val = data.data
  if(data.status=="LOADED"){
    return(
      <div className="border-black border-1 ml-6 bg-white px-6 pt-3 bg-gray-800 rounded-xl w-1/4" >
        <div className="text-center border-b-2 border-black p-3">
          <span className="text-3xl font-bold">{data.heading}</span>
        </div>
        <div className="overflow-auto h-4/5 border-l-8 pl-6 border-gray-500">
          {val.map((item,  index) => {
            return(
              <div className="my-1" key={index}>
                <div>
                  <h1 className="text-2xl text-purple-700 font-semibold">{item.department_name}</h1>
                  <h2 className="text-md text-purple-700">{item.datetime}</h2>
                  <h3 className="text-xl ml-4 mt-1">{item.message}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return(
    <div className="border-black border-1 ml-6 bg-white px-6 pt-3 bg-gray-800 rounded-xl w-1/4" >
      <div className="text-center border-b-2 border-black p-3">
        <span className="text-3xl font-bold">{data.heading}</span>
      </div>
      <div className="overflow-auto h-4/5 border-l-8 m-2 pl-6 border-gray-500">
        <div>NotDone</div>
      </div>
    </div>
  )
}

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "NOT_LOADED",
      notice:[],
      activity:[],
    }
    this.loadActivityList = this.loadActivityList.bind(this);
  }

  async loadActivityList(){
    const Token = localStorage.getItem("Token");

    const [ProfileData, EducationData] = await Promise.all([
      axios(`http://127.0.0.1:8000/dashboard/activity`, { headers: { Authorization: Token }}),
      axios(`http://127.0.0.1:8000/dashboard/notice`, { headers: { Authorization: Token }}),
    ])
    this.setState({
      notice: ProfileData.data,
      activity: EducationData.data
    });
    console.log("ProfileData");
    console.log(ProfileData);
    console.log("EducationData");
    console.log(EducationData);
  }
  componentDidMount() {
    this.loadActivityList();
  }

  render() {
    const quick_link = [
      {key:"CLASSES", value:"CLASS COUNT", icon:<BsFillInboxFill className="h-10 w-10 mx-auto relative top-1/4" />},
      {key:"STUDENTS", value:"STUDENT COUNT", icon:<FaUsers className="h-10 w-10 mx-auto relative top-1/4" /> },
      {key:"PARENTS", value:"PARENT COUNT", icon:<FiActivity className="h-10 w-10 mx-auto relative top-1/4" />},
      {key:"ATTENDANCE", value:"", icon:<MdNotificationsActive className="h-10 w-10 mx-auto relative top-1/4" /> },
    ];
    return (
      <div className="ml-80 pt-8 px-5 min-h-screen bg-gray-900">
        <div className=""><span className="text-4xl font-semibold text-white">Dashboard</span></div>
        <div className="flex pb-5 mt-2">
          {quick_link.map((item) => {
            return (
              <Link to="#" className="h-auto w-1/4 mt-16 pb-4 bg-gray-880 rounded-xl mx-4" key={item.key}>
                <div className="relative -top-1/4 h-20 w-20 bg-white rounded-full mx-auto text-center">
                  {item.icon}
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold text-center">{item.key}</h1>
                  <h1 className="text-2xl font-bold text-center">{item.value}</h1>
                </div>
              </Link>
            )
          })}

        </div>
        <div className="flex pb-5 mt-1 text-white mx-4">
          <div className="text-lg border border-black bg-gray-800 p-5 rounded-lg font-semibold w-1/2" >
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={[
                { title: 'event 1', date: '2021-08-01' },
                { title: 'event 1', date: '2021-08-10' },
                { title: 'event 2', date: '2021-09-01' },
                { title: 'event 2', date: '2021-09-04' },
              ]}
            />
          </div>

          <Board
            heading={"Notice"}
            data={this.state.notice}
            status={this.state.noticeStatus}
          />
          <Board
            heading={"Activity"}
            data={this.state.activity}
            status={this.state.activityStatus}
          />

        </div>
      </div>
    )
  }
}
export default Dashboard;