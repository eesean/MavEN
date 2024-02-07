import React , {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
    Heading, 
    Text, 
    Button, 
    Input,
    Container,
    useToast
} from '@chakra-ui/react';
import { auth, firestore } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';

//test for validity for email
const validEmail = (email: string) => {
    const emailReged = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(emailReged);
  };

const RegisterPage: React.FC = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:"",
        password: "",
        confirmPassword: ""
    })
    
    const handleChange = (e: { target: { name: any; value: any;}; }) =>{
    const {name,value} = e.target
        setUser({
        ...user, //spread operator 
        [name]:value
        })
    }

    const toast = useToast();
    
//register function 
   const registerAccount = async (e: any)=> {
        e.preventDefault();
        if (user.password === user.confirmPassword && validEmail(user.email)) {
            try {
                const result = await createUserWithEmailAndPassword(auth, user.email, user.password);
                const registeredUser = result.user;
                await addDoc(collection(firestore, "users"), {
                    uid: registeredUser.uid,
                    email: registeredUser.email,
                    authProvider: "local",
                })
                navigate("/login");
            } catch {
                alert("Sorry, something went wrong. Please try again.");
            }     
        } else {
            toast({
                title: 'Registration Error',
                description: 'Please check that you have inputted the correct information',
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
            });
        }
   }


    return (
        <>  
        <Heading my = {10} fontSize = "3xl" color = "red.300" textAlign={'center'}>Create a new account</Heading>
    <Container border="1px" borderColor="gray.300">
        <Text fontSize = "xl" align={'center'}>Sign up</Text>
            <Input 
                m="5px"
                type="text"
                name="email" 
                value={user.email} 
                onChange={handleChange} 
                placeholder="Email"/>
            <Input 
                m="5px"
                type="password" 
                name="password" 
                value={user.password} 
                onChange={handleChange} 
                placeholder="Password"/>
                <Input 
                type="password" 
                m="5px" 
                name="confirmPassword" 
                value={user.confirmPassword} 
                onChange={handleChange}    
                placeholder="Re-enter password"/>
            <Button
                m="5px"
                type = "submit" 
                colorScheme = "pink" 
                width = "full"
                variant="solid"
                onClick={registerAccount} >
                Register
            </Button>
            <Text align={'center'}>
            Already have an account ?{" "}
            <Link to="/login"
                style = {{
                    color:"teal"
                    }}>
                Sign in
            </Link>
            </Text>
        </Container>    
        </>
        
    )
    
}
export default RegisterPage