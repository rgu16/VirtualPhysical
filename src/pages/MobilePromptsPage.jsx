import axios from 'axios';
import React, { useState, useEffect, useRef} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Img, Input, Text} from "../components";
import DataTable from 'react-data-table-component';
import { DeleteFilled, CloseCircleTwoTone, CheckCircleTwoTone, CameraOutlined, VideoCameraOutlined, FileAddOutlined } from '@ant-design/icons';
const MobilePromptsPage = (props) => {
  const token = props.token
  const imageInputRef = useRef(null);
  const audioInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const [folder,setFolder] = useState();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = [ { name: 'Tab',
                      selector: row => row.tab,
                      cell: (d) => <span>{d.tab}</span>,},
                    { name: 'File',
                      selector: row => row.file,
                      cell: (d) => <span>{d.file}</span>},                
                    { name: "Upload File",
                    sortable: false,
                    cell: (d) => <button onClick={uploadFile.bind(this, d)} style= {{border: 'none'}}>
                                    <FileAddOutlined style={{fontSize: '32px'}}/>
                                </button>}, 
                  ];

  function goToPhoto(file){
    console.log(file);
    console.log("GO TO PHOTO");
    navigate('/camera',{state:{folder:file}})
    // setNavigate('/camera', { state: { key: file } });
  }
  function goToVideo(file){
    console.log(file);
    console.log("GO TO VIDEO");
    navigate('/video',{state:{folder:file}})
    // setNavigate('/camera', { state: { key: file } });
  }
  // function uploadFile(file) {
  //   console.log(file)
  //   console.log("UPLOAD FILE")
  // };
  const uploadFile = (d) => {
    const type = d.type
    setFolder(d.filename)
    console.log(d.filename)
    if(type === "image"){
      imageInputRef.current.click();
    }
    if(type === "audio"){
      audioInputRef.current.click();
    }
    if(type === "video"){
      videoInputRef.current.click();
    }
  };

  const handleUpload =(e) => {
    e.preventDefault();
    console.log(folder)
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('location', folder)
    console.log(formData)
    axios({
        method: "POST",
        url: props.proxy+"/mobile_upload_file",
        data: formData,
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      const res = response.data
      console.log(res)
    }).catch((error)=>{
        if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
  };

  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "/all_prompts",
        headers: {
        Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data
        console.log(response)
        setData(res)
    }).catch((error) => {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
    })
  }, [props.token, props.proxy]);

  function logOut() {
    localStorage.clear()
    axios({
        method: "POST",
        url: props.proxy + "/logout",
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    })
    .then(() => {
        props.removeToken()
    }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
    })
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
      <header >
        <div className = "flex flex-row gap-5 items-center justify-center w-full bg-white-A700 h-[80px]">
          <Img
            className="h-[50px] w-[50px] "
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="text-3xl sm:text-[50px] md:text-[28px] text-black-900"
            size="txtDMSansMedium30"
            style={{ whiteSpace: 'nowrap' }}
          >
            Virtual Physical
          </Text>
        </div>
      </header>
        <div className="bg-gray-50 flex flex-col items-center justify-start w-full h-[70rem]">
          <div className="flex flex-col gap-[50px] justify-start items-center w-full mt-[50px]">
            <div className="w-[90%]">  
                <DataTable columns={columns} data={data}
                        customStyles={{
                          title: {
                            style: {
                              textAlign: 'center', // Center the title
                              fontSize: '24px',   // Adjust font size if needed
                            },
                          },
                          head: {
                            style: {
                              fontSize: '20px', // Change the font size of column names here
                            },
                          },
                          rows: {
                            style: {
                              fontSize: '16px', // Change the font size here
                            },
                          }}}/>
            </div>
            <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[100px] w-[200px] md:w-full h-[50px] rounded-[20px]"
                        onClick={() => logOut()}>
                        <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Log out</Text>
            </button>
            <input
                      ref={imageInputRef}
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*" // Accept only image files
                      onChange={handleUpload}
                    />
            <input
              ref={audioInputRef}
              type="file"
              style={{ display: 'none' }}
              accept="audio/*" // Accept only image files
              onChange={handleUpload}
            />
            <input
              ref={videoInputRef}
              type="file"
              style={{ display: 'none' }}
              accept="video/*" // Accept only image files
              onChange={handleUpload}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePromptsPage;
