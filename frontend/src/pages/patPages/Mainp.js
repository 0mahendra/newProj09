import React, { useEffect, useState } from "react";
import Navbarp from "./Navbarp";
import { Box, Image,Button} from "@chakra-ui/react";
import Footer from "./Footer";
import MediAi from "./ourAi/MediAi";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import SideDrawerp from "../chatting/SideDrawerp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";






const Mainp = () => {
    const history = useHistory();

       
  const user1 = localStorage.getItem("userInfo");
  const user = JSON.parse(user1);
    // console.log("this is colsole page",user);
   const patientId = user._id;
    const [time, setTime] = useState(new Date());

    const Report = ()=>{
          history.push("/MainReportp");
    }
    const AddDctr = ()=>{
      history.push("/pfindDctr");
    }




      
  


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []); 
  


 


  return (
    <>
      <Box  display={"flex"} flexDirection={"row"} width={"100%"} bgColor={"#2a3970"} height={"100vh"}>
      <Box marginLeft={"1%"} marginTop={"2%"} width={"5%"} >
      <Navbarp />
      </Box>

      <Box width={"80%"}  display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box width={"100%"} height={"15vh"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"}  >
        <Text   textAlign={"left"} marginLeft={"3%"} color={"white"}  textTransform={"capitalize"} fontSize={"35px"} fontStyle={"oblique"} fontWeight={"700"}> MedLinker</Text>
        <Button className="btn" marginRight={"4%"} onClick={AddDctr}> + Add Doctor</Button>

        </Box>  
        <Box   width={"90%"} height={"25vh"} borderRadius={"30px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} bgColor={"#3484d9"} >
               <Image src="https://i.pinimg.com/736x/6a/e1/59/6ae1599c62af3dc358f95d68bf344298.jpg" width={"15%"} marginLeft={"2%"} borderRadius={"full"}></Image>
               <Box marginLeft={"2%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize={"35px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>Welcome , {user.name}</Text>
                    <Text fontSize={"20px"} textTransform={"capitalize"} fontWeight={"400"} color={"white"}>Have a nice day </Text>
               </Box>
               <Box marginRight={"2%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                      <Text fontSize={"25px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>{time.toLocaleTimeString()}</Text>
                      <Text fontSize={"25px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>{time.toLocaleDateString()}</Text>
               </Box>
        </Box>
      <Box display={"flex"} flexDirection={"column"} width={"90%"} marginTop={"5%"} >
       <Text textAlign={"left"} fontSize={"35px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>Your personalize Report's </Text> 
        <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-start"} marginTop={"2%"}>
        <Button margin={"1%"} height="25vh" width="20vh" flexDirection="column" justifyContent="flex-end" padding={0}  bg="white" _hover={{ bg: "gray.200" }} onClick={Report}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5903/5903616.png" 
            height="20vh"
            width="20vh"
            objectFit="cover"
          />
          <Text marginTop="auto" paddingBottom="4px">
            health
          </Text>
        </Button>
        <Button margin={"1%"} height="25vh" width="20vh" flexDirection="column" justifyContent="flex-end" padding={0}  bg="white" _hover={{ bg: "gray.200" }} onClick={Report}>
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-medical-health-checkup-report-5588764-4655033.png?f=webp" 
            height="20vh"
            width="20vh"
            objectFit="cover"
          />
          <Text marginTop="auto" paddingBottom="4px">
            BP test
          </Text>
        </Button>
        <Button margin={"1%"} height="25vh" width="20vh" flexDirection="column" justifyContent="flex-end" padding={0}  bg="white" _hover={{ bg: "gray.200" }} onClick={Report}>
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/consult-with-doctor-online-for-prescription-5588761-4655030.png?f=webp" 
            height="20vh"
            width="20vh"
            objectFit="cover"
          />
          <Text marginTop="auto" paddingBottom="4px">
            test
          </Text>
        </Button>
        <Button margin={"1%"} height="25vh" width="20vh" flexDirection="column" justifyContent="flex-end" padding={0}  bg="white" _hover={{ bg: "gray.200" }} onClick={Report}>
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/medical-insurance-payment-5588751-4655020.png?f=webp" 
            height="20vh"
            width="20vh"
            objectFit="cover"
          />
          <Text marginTop="auto" paddingBottom="4px">
            urine test
          </Text>
        </Button>
      
        </Box>
      </Box>  
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignContent={"center"} bgColor={"#111536"} width={"15%"}>
      <Text marginTop={"10%"}  marginLeft={"20%"} textAlign={"left"} color={"white"} fontSize={"25px"}  textTransform={"capitalize"} > my profile</Text>
      <Image margin={"15%"} borderRadius={"full"} boxSize={"150px"} src={ "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"} alt = {user.name} />
      <Text  marginLeft={"0%"} textAlign={"center"} color={"white"} fontSize={"35px"} textTransform={"capitalize"} > {user.name}</Text>

      {/* <SideDrawerp sender = {"patient"}/> */}
      </Box>
      <Box>
      <MediAi/> 
      </Box>    
      </Box>
      
      
    </>
      )

        }


        export default Mainp;