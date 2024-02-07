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
    Center,
} from '@chakra-ui/react';
import { auth, googleProvider } from '../firebase-config';

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

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
        toast({
            title: 'Logged in',
            description: "Successfully logged in!",
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top',
        });
        history('/homepage')
    }

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color = "red.300">Welcome to MavEN!</Heading>
        <Container border="1px" borderColor="gray.300">
            <Text fontSize = "xl">Sign in</Text>
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
                New to us?{" "}
                <Link to = "/register"
                    style = {{
                        color:"teal"
                        }}>
                    Sign Up.
                </Link>
                <br/>
            </Container>
        </>
    )
};

export default LoginPage;
