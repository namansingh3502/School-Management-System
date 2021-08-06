import { Component } from "react";
import userimg from "../static/userimg.jpeg"

export default class StudentInformation extends Component{

  constructor(props) {
    super(props);
  }


  render(){
    const classes=["class 1" , "class 2" , "class 3" , "class 4" , "class 5"];

    const students=["student-1","student-2","student-3","student-4","student-5",
                "student-6","student-7","student-8"];

    return(
      <div className="ml-80">
        <div className="p-2 h-auto w-auto">

          <div className="text-4xl text-center">Student Information</div>

          <label className="m-4"><span className="text-xl text-semibold">Select Class</span>
            <select className="m-4 w-32">
              {classes.map((item, index) => (
                <option  key={index} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <div className="m-3 ">
            <div className="grid grid-cols-4 gap-6 ">

              {students.map((item) => {
                return (
                  <div className="h-auto border-4 shadow-2xl grid " key={item}>
                    <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-green-500" >
                      <div className="relative" style={{bottom:-25}}>
                        <img className="w-32 h-32 rounded-full mx-auto border-4 border-red-300" src={userimg} alt="" />
                      </div>
                    </div>

                    <div className="mt-12 pl-3 mb-2">
                      <h1 className="text-center font-semibold text-2xl mb-5">Naman Singh</h1>
                      <div className="text-md mb-1">Registration Number: 123456789012</div>
                      <div className="text-md mb-1">Father&apos;s Name: Lorem Ipsum</div>
                      <div className="text-md mb-1">Mother&apos;s Name: Lorem Ipsum</div>
                      <div className="text-md mb-1">D.O.B. : 12/12/2021</div>
                    </div>

                    <div className="flex items-center py-5 ">
                      <button className="bg-blue-400 rounded-3xl h-10 mx-auto px-4 text-lg border-b-0" >
                          More Details
                      </button>
                    </div>

                  </div>
                )
              }) }

            </div>
          </div>

        </div>
      </div>
    )
  }
}