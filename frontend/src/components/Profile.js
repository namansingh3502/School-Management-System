import {Component} from "react";
import userimg from "../static/userimg.jpeg";
import { GoLocation } from "react-icons/go";
import axios from "axios";

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PersonalDetail:[],
      EducationDetail:[],
      AcademicProfile:[],
      PersonalStatus:'LOADING',
      EducationStatus:'LOADING',
    }
  }

  loadDetail(url, info){
    const Token = localStorage.getItem("Token");
    axios
      .get(url,
        {
          headers: {
            Authorization: Token
          }
        }
      )
      .then(response => {
          if( response.status === 200 ){
            if( info === 'personal'){
              this.setState({
                PersonalDetail: response.data,
                PersonalStatus: 'LOADED'
              })
            }
            else{
              this.setState({
                EducationDetail: response.data,
                EducationStatus: 'LOADED'

              })
            }
          }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    const personalDetail = `http://127.0.0.1:8000/auth/personaldetails`;
    const educationDetail = `http://127.0.0.1:8000/auth/eduactionaldetails`;
    this.loadDetail(personalDetail, 'personal');
    this.loadDetail(educationDetail, 'education');
  }

  render() {

    const Personal = this.state.PersonalDetail
    const Education = this.state.EducationDetail


    { console.log(Personal) }
    { console.log(Education) }

    if( this.state.EducationStatus !== "LOADED" ){
      return <div>Loading</div>
    }

    return(
      <div className="ml-80">
        <div className="h-80 w-full flex bg-gradient-to-r from-green-400 to-blue-500">
          <div className="self-center ml-52 pr-10">
            <img className="w-56 h-526 rounded-full " src={userimg} alt="" width="384" height="512"/>
          </div>
          <div className="my-auto place-items-center">
            <h1 className="font-medium text-4xl py-6">Steven Johnson</h1>
            <h1 className="text-2xl" >Software Developer at Somewhere</h1>
            <div className="flex items-center" >
              <GoLocation className="h-4 w-4"/>
              <span className="pl-2 text-xl" >Software Engineer at Somewhere</span>
            </div>
          </div>
        </div>
        <div className="m-2 p-8 bg-blue-100">
          <div className="mb-5">
            <span className="text-2xl underline">Personal Details</span>
            <div className="mx-4 w-full h-auto flex p-2 text-xl flex flex-wrap">
              <div className="w-full py-1" >
                <span className="font-medium pr-4">Name : </span><span>{Personal.prefix} {Personal.name}</span>
              </div>
              <div className="w-1/2 py-1" >
                <span className="font-medium pr-4">ID No : </span><span>{Personal.idNumber}</span>
              </div>
              <div className="w-1/2 py-1" >
                <span className="font-medium pr-4">Joining Date : </span><span>{Personal.joiningDate}</span>
              </div>
              <div className="w-1/2 py-1" >
                <span className="font-medium pr-4">Father Name : </span><span>{Personal.fathersName}</span>
              </div>
              <div className="w-1/2 py-1" >
                <span className="font-medium pr-4">Mother Name : </span><span>{Personal.mothersName}</span>
              </div>
              <div className="w-1/2 py-1" >
                <span className="font-medium pr-4">Phone : </span><span>{Personal.phone}</span>
              </div>
              <div className="w-1/2 py-1" >
                <span className="font-medium pr-4">E-mail : </span><span>{Personal.email}</span>
              </div>
              <div className="w-1/2 py-1" >
                <span className="font-medium pr-4">Address : </span><span>{Personal.address}</span>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <span className="text-2xl underline">Educational Details</span>
            <div className="mx-4 w-full h-auto flex p-4 text-xl flex flex-wrap">
              {Education.map((item,index) => {
                return (<div className="w-full py-2" key={index}>
                  <h1 className="font-medium pr-4">Degree : <span className="pl-4 font-normal">{item.degree}</span></h1>
                  <h1 className="font-medium pr-2">Collage/University : <span className="pl-4 font-normal">{item.college}</span> </h1>
                </div>)
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

