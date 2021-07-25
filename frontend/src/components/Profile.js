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
            <span className="text-4xl underline">Personal Details</span>
            <div className="mx-4 w-full h-auto flex p-4 text-2xl flex flex-wrap">
              {PersonalDetail.map((item) => {
                return (
                  <div className="w-1/2 py-2" key={item.key}>
                    <span className="font-medium pr-6">{item.key}</span><span>{item.value}</span>
                  </div>)
              })}
            </div>
          </div>

          <div>
            <span className="text-4xl underline">Educational Details</span>
            <div className="mx-4 w-full h-auto flex p-4 text-2xl flex flex-wrap">
              {Education.map((item) => {
                return (<div className="w-full py-2" key={item.key}>
                  <span className="font-medium pr-2">Degree : </span><span>{item.key}</span>
                  <span className="ml-32 font-medium pr-2">Collage/University : </span><span>{item.value}</span>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

