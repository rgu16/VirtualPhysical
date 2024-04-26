import React, {  useRef,  useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import { Img, List, Text, TabNav, NavBar,  MedTechNotes} from "components";

const EyesMedPage = (props) => {
    const [value, setValue] = useState("none");

    const [note, setNotes] = useState();
    const [imageLoaded, setImageLoaded] = useState(false);
    const fileInputRef = useRef(null);
    const [profilePic, setProfilePic] = useState()

    const [isChecked, setIsChecked] = useState(false);
    const [navigate, setNavigate] = useState();
    const [error, setError] = useState("");
    useEffect(() => {
      // console.log(jwtDecode(props.token).patient.split("/"))
      axios({
          method: "GET",
          url: props.proxy + "/download/eyes",
          headers: {
          Authorization: 'Bearer ' + props.token
          }
      })
      .then((response) => {
          const res = response.data
          // console.log(res)
          setValue(res.detail['eyes'])
          // setSelected(res.detail['generalpain'].split(" , "))
          // setPainSummaryValue(res.detail['painsummary'])
          if (res.hasOwnProperty("med_note")){
            // console.log(res.med_note)
            setNotes(res.med_note)
          }
          if (res.hasOwnProperty("Image")){
            setProfilePic(res.Image)
          }
      }).catch((error) => {
          if (error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)}
      })
    }, [props]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    const handleChange = (event) => {
        setValue(event.target.value);
    }

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log('UploadEyesImage')
    setProfilePic(URL.createObjectURL(file))
    if (!file) {
        console.error('No file selected.');
        return;
    }
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('location', "/eyes/Image")
    console.log(formData)
    axios({
        method: "POST",
        url: props.proxy+"/upload_file",
        data: formData,
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
     
    }).catch((error)=>{
        if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
  };
 
  useEffect(() => {
    setNotes(props.notes);
    // console.log('props.notes changed:', props.notes);
  }, [props.notes]);

    const handleSave = (e) => {
        e.preventDefault();
        const data = { eyes: value, eyes_notes: note };
        if (value === "none") {
          setError("Missing input")
        } else{
        console.log(data);
        axios({
            method: "POST",
            url: props.proxy + "/upload_json",
            data: { data: data, filename: '/eyes/detail' },
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        }).then((response) => {
            axios({
              method:"POST",
              url: props.proxy + "/upload_json",
              data: {data: note, filename: '/eyes/med_note'},
              headers: {
                Authorization: 'Bearer ' + props.token
                }
            }).then((response) => {
              setNavigate('/lungs');
          })
            .catch((error)=>{
              setError("Upload failed, please try again")
              if(error.response){
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
              }
            })
        }).catch((error) => {
          setError("Upload failed, please try again")
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
      }
    };

    return (
        <>
 <div className="h-screen">
    <NavBar proxy={props.proxy} token={props.token}/>
      <div
        className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
         <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <TabNav tab="eyes"></TabNav>
            <div className="min-h-screen bg-white-A700 flex flex-col font-cairo items-start justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px]  relative w-[80%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                      <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[100%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Eyes
                          </Text>
                          <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                            <div className="flex flex-row gap-[10px]">
                          <Text
                              className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             Check for yellowing in the eyes on a 0-2 scale:
                          </Text>
                          <div className="relative group flex flex-row">
                            <button onClick={handleCheckboxChange}>
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <span className=" bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                              Show reference images
                            </span>
                          </div>
                          
                          </div>
                          <FormLabel style={{ paddingBottom: '25px', paddingTop: '5px', fontSize: '17px', color: 'black' }} id="demo-row-radio-buttons-group-label">Symptoms may include: jaundice (liver disease), opisthotonos (dramatic abnormal posture) or poor feeding</FormLabel>
                          </div>
                          <div className="flex flex-col gap-[0px] ml-[50px] items-start justify-start w-[50%]" >
                          <FormControl error = {value !== '0' && value !=="none"} >                       
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                        style={{ flexWrap: 'nowrap' }}
                                    >
                                      
                                      <div className = "flex flex-col">

                                        <div className ="flex flex-row justify-between">
                                          {isChecked? 
                                          <div></div> :
                                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                                          <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                                          <div></div>
                                          <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
                                          <div></div>
                                          <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
                                          {isChecked? 
                                          <div></div>:
                                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">Severe</FormLabel>}
                                        </div>
                                        {isChecked && (
                                          <div className = "flex flex-row justify-between items-center">
                                            <div className ="flex flex-col items-center justify-center w-[33%] m-[2px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/noneeye.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              None
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl">
                                              Eye show no signs of yellowing
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[33%]  m-25px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/mildeye.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              Mild
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl">
                                              Eye is starting to have yellow tint
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[33%] m-[2px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/severeeye.png"
                                              alt="screenshot20231"
                                            />
                                                                                        <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              Severe
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl">
                                              Most of the eye is yellow
                                            </Text>
                                            </div>
                                          </div>
                                      )}
                                        
                                      </div>

                                        
                                    </RadioGroup>
                          </FormControl>

                          </div>
                         
                          </List>


                     
        
               
                          
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-[1218px] top-[240px]">
                <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="abdomen" setNotes={setNotes}/>
                <div className ="flex flex-row gap-[10px] ml-[50px] mb-[50px] mr-[50px]">
                  <input 
                          ref={fileInputRef}
                          type="file"
                          style={{ display: 'none'}}
                          accept="image/*" // Accept only image files
                          onChange={handleImageUpload}
                        />
                  <button className="bg-indigo-A200 flex md:flex-col flex-row gap-[5px] md:gap-5 ml-5px items-center justify-center mt-2.5 w-[60%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={handleUploadClick}
                      >
                        <Img
                          className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                          src="images/img_television_white.svg"
                          alt="television"
                        />
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Upload Image of Eyes</Text>
                  </button>
                  <Img
                      className="h-[130px] md:h-auto w-[130px] md:h-auto object-cover  w-full"
                      src= {profilePic}
                      alt=""
                      onLoad ={()=> setImageLoaded(true)}
                      style={{ display: imageLoaded ? "block" : "none" }}
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop if the alt image also fails to load
                        e.target.src = "images/white.png"; // Set a default image
                        e.target.alt = "Alternate Image"; // Set an alternate alt text
                        setImageLoaded(true); // Mark as loaded
                      }}
                      />
   

                </div>
                </div>
                <div className = 'flex flex-row items-center justify-start gap-[25px] ml-[90px] w-[41%] mt-[20px]'>
                
                  <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[20%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={(e) => handleSave(e)}
                      >
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Save</Text>
                  </button>
                  <Text className="font-semibold md:ml-[0] text-red-700 text-xl">{error}</Text>
                  {navigate ? (<Navigate replace to= {navigate} />) : null}
                  
                </div>
            </div>
            </div>
            </div>
            
           
          
        </div>
        </div>
        </>
    );
};

export default EyesMedPage;
