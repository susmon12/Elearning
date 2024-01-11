import React, { useState, useEffect } from "react";
import { getToken , storeActive_Course} from "../../Fetch_Api//Service/LocalStorageServices";
import { useGetLoggedUserQuery,useUpdateUserInfoMutation } from "../../Fetch_Api/Service/User_Auth_Api";
import {
  setUserToken,
  unSetUserToken,
} from "../../Fetch_Api/Feature/authSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import './Setting.scss'

const Settings = () => {
  const [server_error, setServerError] = useState({});
  const [Userinfo, { isLoading }] = useUpdateUserInfoMutation();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const {
    data: userData,
    isSuccess: userSuccess,
    isError: userError,
  } = useGetLoggedUserQuery(access_token);

  const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
    phone:"",
    profile: "",
    facebook: "",
    instagram: "",
    linkind: "",
    bio: "",
    address: "",
  });

  useEffect(()=>{
    if (userSuccess && userData) {
      try {
        // Destructure user data
        const { id, email, name, phone, userinfo, courseinfo } = userData;

        // Update state with user data
        setUserInfo({
          name: name,
          email: email,
          phone: phone,
          profile: userinfo?.profile
            ? `http://127.0.0.1:8000${userinfo.profile}`
            : "/media/profile/default.jpg",
          facebook: userinfo?.facebook || "",
          instagram: userinfo?.instagram || "",
          linkind: userinfo?.linkind || "",
          bio: userinfo?.bio || "This is the default bio.",
          address: userinfo?.address || "",
        });
      } catch (error) {
        console.error("Error processing user data:", error);
      }
    }

  },[])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      user: data.get("user"),
      profile: data.get("profile"),
      bio: data.get("bio"),
      address: data.get("address")
    };
    const res = await Userinfo(actualData);
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      setServerError("Saved")
    }
  }

  const [edit, setEdit] = useState({
    profile:false,
    name: false,
    bio: false,
    email: false,
    phone: false,
    address: false,
  });

  const handleEdit = (field) => {
    setEdit((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  return (
    <>
      <div style={{display:"flex",alignItems:"center"}} className='projects-section'> 
      {/* <h1>Settings</h1> */}
      <div className="profile_Image">
          <div className="image_wrapper">
            <img src={userInfo.profile} alt="" />
              <div className="Prop_edit">
              <MdEdit  onClick={() => handleEdit("profile")} className="edit prop"/>
              {edit.profile ? <div className="edit"><input  defaultValue={userInfo.profile} /><button>Save</button></div> : ""}
              </div>
          </div>
          <div className="user_info_wrapper">
            <span className="sett">
              <h1>{userInfo.name}</h1>
              <MdEdit onClick={() => handleEdit("name")} className="edit"/>
              {edit.name ? <div className="edit"><input name="name" defaultValue={userInfo.name} /><button>Save</button></div> : ""}
              <span>            
        </span>
            </span>
            <div className="sett">
            <p>{userInfo.bio}</p>
            <MdEdit onClick={() => handleEdit("bio")} className="edit"/>
            {edit.bio ? <div className="edit"><input name="bio" defaultValue={userInfo.bio} /><button>Save</button></div> : ""}
            </div>
            <div className="sett">
            <p>{userInfo.email}</p>
            <MdEdit onClick={() => handleEdit("email")} className="edit"/>
            {edit.email ? <div className="edit"><input name="email" defaultValue={userInfo.email} /><button>Save</button></div> : ""}
            </div>
            <div className="sett">
            <p>{userInfo.phone}</p>
            <MdEdit onClick={() => handleEdit("phone")} className="edit"/>
            {edit.phone ? <div className="edit"><input name="phone" defaultValue={userInfo.phone} /><button>Save</button> </div>  : ""}
            </div>
            <div className="sett">
            <p>{userInfo.address}</p>
            <MdEdit onClick={() => handleEdit("addresh")} className="edit"/>
            {edit.addresh ? <div className="edit"><input name="addresh" defaultValue={userInfo.address} /><button>Save</button> </div>  : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
