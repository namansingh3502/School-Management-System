import {Component} from "react";

export default class ClassRoutine extends Component{

  render(){

    const Days = [
      { key:"" }, { key:"MONDAY" }, { key:"TUESDAY" }, { key:"WEDNESDAY" },
      { key:"THURSDAY" }, { key:"FRIDAY" }, { key:"SATURDAY" }, { key:"SUNDAY" }
    ]
    const Class = [
      ["class 1", "class 2", "class 3", "class 4", "class 5", "class 6", "class 7", "class 8"],
      ["class 1", "class 2", "class 3", "class 4", "class 5", "class 6", "class 7", "class 8"],
      ["class 1", "class 2", "class 3", "class 4", "class 5", "class 6", "class 7", "class 8"],
      ["class 1", "class 2", "class 3", "class 4", "class 5", "class 6", "class 7", "class 8"],
    ]
    const classes = [ "class 1" , "class 2" , "class 3" , "class 4" , "class 5" ];

    return(
      <div className="ml-80">
        <div className="ml-2  min-h-screen px-5">
          <div className="py-5">
            <label>
              <span>Class</span>
              <select className="ml-5">
                {classes.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
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
              {Class.map((row, rowindex) => {
                return(
                  <tr key={rowindex}>
                    {row.map((col) => {
                      return(<td className="border border-green-600" key={col}>{col}</td>)
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
