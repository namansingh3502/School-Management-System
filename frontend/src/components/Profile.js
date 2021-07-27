import {Component} from "react";
import userimg from "../static/userimg.jpeg";
import { GoLocation } from "react-icons/go";

export default class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const PersonalDetail = [
      { key:"Name : ", value:"Steven Johnson" },
      { key:"ID No : ", value:"10005" },
      { key:"Joining Date : ", value:"07-08-2016" },
      { key:"Gender : ", value:"Male" },
      { key:"Father Name : ", value:"Steve Jones" },
      { key:"Mother Name : ", value:"Naomi Rose" },
      { key:"Phone : ", value:"+ 88 98568888418" },
      { key:"E-mail : " , value:"stevenjohnson@gmail.com" },
      { key:"Subject : ", value:"English" },
      { key:"Address : ", value:"House #10, Road #6, Australia" },
    ]
    const Education = [
      { key:"DEGREE NAME ", value:"COLLAGE NAME" },
      { key:"DEGREE NAME ", value:"COLLAGE NAME" },
      { key:"DEGREE NAME ", value:"COLLAGE NAME" },
      { key:"DEGREE NAME ", value:"COLLAGE NAME" },
    ]
    const AcademicProfile = [
      { key: "Class 1 : ", value: "Subject 1" },
      { key: "Class 1 : ", value: "Subject 2" },
      { key: "Class 1 : ", value: "Subject 1" },
      { key: "Class 2 : ", value: "Subject 1" },
      { key: "Class 3 : ", value: "Subject 1" },
      { key: "Class 3 : ", value: "Subject 2" },
    ]

    return(
      <div className="ml-80">
        <div className="h-80 w-full flex bg-gradient-to-r from-green-400 to-blue-500">
          <div className="self-center ml-52 pr-10">
            <img className="w-56 h-526 rounded-full " src={userimg} alt="" width="384" height="512"/>
          </div>
          <div className="my-auto place-items-center">
            <h1 className="font-medium text-4xl py-6">Naman Singh</h1>
            <h1 className="text-2xl" >Software Developer at Somewhere</h1>
            <div className="flex items-center" >
              <GoLocation className="h-4 w-4"/>
              <span className="pl-2 text-xl" >Software Engineer at Somewhere</span>
            </div>
          </div>
        </div>
        <div className="m-5 p-8 bg-blue-100">
          <div className="mb-5">
            <span className="text-2xl underline">Personal Details</span>
            <div className="mx-4 w-full h-auto flex p-2 text-xl flex flex-wrap">
              {PersonalDetail.map((item) => {
                return (
                  <div className="w-1/2 py-1" key={item.key}>
                    <span className="font-medium pr-4">{item.key}</span><span>{item.value}</span>
                  </div>)
              })}
            </div>
          </div>

          <div className="mb-5">
            <span className="text-2xl underline">Educational Details</span>
            <div className="mx-4 w-full h-auto flex p-4 text-xl flex flex-wrap">
              {Education.map((item) => {
                return (<div className="w-full py-2" key={item.key}>
                  <h1 className="font-medium pr-4">Degree : <span className="pl-4 font-normal">{item.key}</span></h1>
                  <h1 className="font-medium pr-2">Collage/University : <span className="pl-4 font-normal">{item.value}</span> </h1>
                </div>)
              })}
            </div>
          </div>

          <div className="mb-5">
            <span className="text-2xl underline">Academic Profile</span>
            <div className="mx-4 w-full h-auto flex p-4 text-xl flex flex-wrap">
              {AcademicProfile.map((item) => {
                return (
                  <div className="w-1/2 py-1" key={item.key}>
                    <span className="font-medium pr-4">{item.key} </span><span>{item.value}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mb-5">
            <span className="text-2xl underline">Academic Badges</span>
            <div className="mx-4 w-full h-auto flex p-4 text-xl flex flex-wrap">
              <h1>All Badges</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

