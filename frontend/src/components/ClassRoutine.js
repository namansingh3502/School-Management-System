import {Component} from "react";

export default class ClassRoutine extends Component{

  render(){

    const Days = [
      { key:"" }, { key:"MONDAY" }, { key:"TUESDAY" }, { key:"WEDNESDAY" },
      { key:"THURSDAY" }, { key:"FRIDAY" }, { key:"SATURDAY" }, { key:"SUNDAY" }
    ]
    const Class = [
      [{ key: "class 1" }, { key: "class 1" }, { key: "class 1" }, { key: "class 1" }, { key: "class 1" },
        { key: "class 1" }, { key: "class 1" }, { key: "class 1" }],
      [{ key: "class 1" }, { key: "class 1" }, { key: "class 1" }, { key: "class 1" }, { key: "class 1" },
        { key: "class 1" }, { key: "class 1" }, { key: "class 1" }],
    ]

    return(
      <div className="ml-80">
        <div className="ml-2  min-h-screen px-5">
          <div className="py-5">
              <h1>Select Class</h1>
          </div>

          <table className="border-collapse border-1 border-green-800 w-full text-center text-lg">
            <thead>
              <tr>
                {Days.map((day) => {
                  return(
                    <th className="border border-green-600 w-32" key={day.key}>{day.key}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {Class.map((row, index) => {
                return(
                  <tr key={index}>
                    {row.map((col) => {
                      return(<td className="border border-green-600" key={col.key}>{col.key}</td>)
                    })}
                  </tr>
                )
              })

              }

            </tbody>

          </table>

        </div>
      </div>
    )
  }
}
