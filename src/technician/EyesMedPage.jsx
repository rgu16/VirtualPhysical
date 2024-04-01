import React, {  useRef,  useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Img, Line, List, Text, TabNav, NavBar, PhysicianNotes} from "components";
import MedTechNotes from "../components/MedTechNotes";

const EyesMedPage = (props) => {
    const [value, setValue] = useState("none");
    const [isHoveredOne, setIsHoveredOne] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);
    const [isHoveredThree, setIsHoveredThree] = useState(false);
    const [note, setNotes] = useState();
    const [imageLoaded, setImageLoaded] = useState(false);
    const fileInputRef = useRef(null);
    const [profilePic, setProfilePic] = useState()

    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleNotes = (event) => {
      setNotes(event.target.value);
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
      const res = response.data
      console.log(res)
   
      console.log('Server response:', response);
      console.log('Image uploaded:', imageUrl);
     // Assuming the URL is nested within a 'data' property, modify this accordingly
    const imageUrl = response.data && response.data.url;
     
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
      
        console.log(data);
        axios({
            method: "POST",
            url: props.proxy + "/upload_json",
            data: { data: data, filename: '/eyes/detail' },
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        }).then((response) => {
            const res = response.data;
            localStorage.setItem('eyes', data);
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
           <NavBar proxy={props.proxy} token={props.token} />
        
           <div
      className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
      style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
    >
      <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
      <div></div>
        <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
 <TabNav tab="eyes"></TabNav>
 <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
 <div className="absolute top-30 right-20 w-1/2" style={{paddingLeft: '300px'}}>
 
 <div className= "flex flex-col items-start justify-start w-[400px] h-full m-[50px] mt-[80px]">
        <Text className="font-bold text-2xl text-black-900">Notes: </Text>
        <textarea className="w-full h-[400px] border border-gray-400 border-2 rounded-[14px] p-[10px]" 
                  placeholder="Medical Technician notes"
                  value={note}
                  onChange={(e) => setNotes(e.target.value)}></textarea>
       
        {/*Upload Image */}
        <div style={{ paddingTop: "2rem" }}>
            <input 
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none'}}
                    accept="image/*" // Accept only image files
                    onChange={handleImageUpload}
                  />
                  <button
  className="flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0 roundedButton"
  style={{ background: '#5974F6',  borderRadius: '20px', width: '250px'}}
  onClick={handleUploadClick}
>
  <Img
    className="h-7 md:ml-[0] ml-[0] md:mt-0 mt-1 w-7 "
    src="images/audioupload.png"
    alt="television"
  />
  <Text  style={{color: 'white' }} className="font-semibold ml-2.5 md:ml-[0] text-xl">Upload Image of Eyes</Text>
</button>
                  <Img
                      className="h-[130px] md:h-auto rounded-[50%] w-[130px] md:h-auto object-cover  w-full"
                      src= {profilePic}
                      alt=""
                      onLoad ={()=> setImageLoaded(true)}
                      // style = {{display: imageLoaded? "none": "block"}}
                      />
   

    </div>

        </div>
               
               </div>


 <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
 <div className="w-full max-w-md">

 <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34"
                      >
                       Eyes Inspection
                      </Text>
                     
          
                                <h4 style={{ paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold', fontSize: '22px' }}>Check for yellowing in the eyes on a 0-2 scale:</h4>
                                <FormControl >
                                    <FormLabel style={{ paddingBottom: '25px', paddingTop: '5px', fontSize: '17px', color: 'black' }} id="demo-row-radio-buttons-group-label">Symptoms may include: jaundice (liver disease), opisthotonos (dramatic abnormal posture) or poor feeding</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                        style={{ flexWrap: 'nowrap' }}
                                    >
                                        <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '50px', marginRight: '100px' }}label="None" />
                                        <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '120px', marginRight: '150px' }}label="1" />
                                        <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '45px', marginRight: '10px' }}label="2" />
                                    </RadioGroup>
                                </FormControl>
                                
                                <div>
      {isChecked && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '200px' }}>
          {/* Your images */}
          <img
            style={{
              width: "250px", // Set width to 100% to occupy the whole width
              height: "185px", // Set height to auto to maintain aspect ratio
              paddingTop: "5px",
              marginRight: '15px'

            }}
            src="images/noyellowing.png"
            alt="screenshot20231"
          />
          <img
            style={{
              width: "250px", // Set width to 100% to occupy the whole width
              height: "175px", // Set height to auto to maintain aspect ratio
              paddingTop: "10px",
              marginRight: '12px'
            }}
            src="images/mildyellowing.png"
            alt="screenshot20231_One"
          />
          <img
            style={{
              width: "250px", // Set width to 100% to occupy the whole width
              height: "195px", // Set height to auto to maintain aspect ratio
              paddingBottom: "20px"
            }}
            src="images/severeyellowing.png"
            alt="screenshot20231_One"
          />
        </div>
      )}
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Show Reference Images
      </label>
    </div>
  
                                <div style={{ paddingTop: "2rem", textAlign: 'center' }}>
                                    <Link to="/lungs">
                                        <Button variant="outlined" onClick={(e) => handleSave(e)}>Save</Button>
                                    </Link>
                                </div>
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
