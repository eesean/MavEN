import React, {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
    Heading, 
    useToast,
    Button
} from '@chakra-ui/react';
import { auth, googleProvider } from '../firebase-config';


const LoginPage: React.FC = () => {
  // const[user, setUser] = useState();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            // setUser(loggedInUser);
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
    const history = useNavigate();

    const toast = useToast();

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color = "teal.500">Welcome to MavEN!</Heading>
        <Button 
            m="5px"
            type = "submit" 
            colorScheme = "teal" 
            width = "full"
            variant="solid"
            onClick={googleSignIn}>
            Sign in with Google
        </Button>
        </>
    )
};

export default LoginPage;
