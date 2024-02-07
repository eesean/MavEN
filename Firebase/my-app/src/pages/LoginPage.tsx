import React, {useState} from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
    Heading, 
    useToast,
    Button,
    Container,
    Text,
    Input,
} from '@chakra-ui/react';
import { auth, googleProvider, firestore } from '../firebase-config';
import { collection, query, getDocs, addDoc, where } from 'firebase/firestore';

const validEmail = (email: string) => {
    const emailReged = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(emailReged);
  };

const LoginPage: React.FC = () => {
    const history = useNavigate();
    const toast = useToast();

    const [user,setUser] = useState({
        email:"",
        password: ""
    })

    const handleChange = (e: { target: { name: any; value: any; }; }) =>{
    const {name,value} = e.target
    setUser({
    ...user, //spread operator 
    [name]:value
    })
    }

    const loginUser = async(e: any) => {
        e.preventDefault();
        if (validEmail(user.email)) {
            try {
                await signInWithEmailAndPassword(auth, user.email, user.password);
                toast({
                    title: 'Logged in',
                    description: "Successfully logged in!",
                    duration: 5000,
                    isClosable: true,
                    status: 'success',
                    position: 'top',
                });
                history("./homepage");
            } catch {
                toast({
                    title: 'Login Error',
                    description: "You entered a wrong email or password",
                    duration: 5000,
                    isClosable: true,
                    status: 'error',
                    position: 'top',
                });
            }
        } else {
            toast({
                title: 'Login Error',
                description: "You entered an invalid email",
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
            });
        }
    }

    const googleSignIn = async() => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const loggedInUser = result.user;
            const q = query(collection(firestore, "users"), where("uid", "==", loggedInUser.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                await addDoc(collection(firestore, "users"), {
                    uid: loggedInUser.uid,
                    email: loggedInUser.email,
                    authProvider: "google"
                })
            }
            toast({
                title: 'Logged in',
                description: "Successfully logged in!",
                duration: 5000,
                isClosable: true,
                status: 'success',
                position: 'top',
            });
            history('/homepage');
        } catch(error) {
            console.log('error', "Error occurred")
            toast({
                title: 'Login Error',
                description: "An error occurred, please try again",
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
            });
        }
    }

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color = "red.300" textAlign={'center'}>Welcome to MavEN!</Heading>
        <Container border="1px" borderColor="gray.300">
            <Text fontSize = "xl" align={'center'}>Sign in</Text>
                <Input 
                    m="5px" 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={user.email}  
                    onChange ={handleChange}/>
                <Input 
                    m="5px"
                    type="password"
                    placeholder="Password" 
                    name="password" 
                    value={user.password}  
                    onChange={handleChange}/>
                <Button 
                    m="5px"
                    type = "submit" 
                    colorScheme = "pink" 
                    width = "full"
                    variant="solid"
                    onClick={loginUser}>
                    Login
                </Button>
                <Button 
                    m="5px"
                    type = "submit" 
                    colorScheme = "teal" 
                    width = "full"
                    variant="solid"
                    onClick={googleSignIn}>
                    Sign in with Google
                </Button>
                <Text align={'center'}>
                New to us?{" "}
                <Link to = "/register"
                    style = {{
                        color:"teal"
                        }}>
                    Sign Up.
                </Link>
                </Text>
                <br/>
            </Container>
        </>
    )
};

export default LoginPage;
