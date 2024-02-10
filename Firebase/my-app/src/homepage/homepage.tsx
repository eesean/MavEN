/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames';
import styles from './homepage.module.scss';
import { useNavigate } from 'react-router-dom';
import {
    useToast,
    Button
} from '@chakra-ui/react';

export interface HomepageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Homepage = ({ className }: HomepageProps) => {
    const navigate = useNavigate();
    const toast = useToast();

    const signOut = () => {
        navigate('/');
        toast({
            title: 'Signed out',
            description: "Have a nice day ahead!",
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top',
        });
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['hero-banner']}>
                <div className={styles['hero-image']}>
                    <img
                        src="../images/Volunteering.jpg"
                        alt="Hero image"
                        className={styles.image}
                    />
                </div>
                <div className={styles['hero-text']}>
                    <h1 className={styles['hero-title']}>MAvEN</h1>
                    <h2 className={styles['hero-tagline']}>
                        Connecting Hearts, Building Communities.
                    </h2>
                    <p className={styles['hero-description']}>
                        Your time is a powerful force for change. Explore opportunities to transform
                        lives and be part of a community that believes in the strength of collective
                        impact.
                    </p>
                </div>
            </div>
            <Button 
                m="5px"
                type = "submit"
                colorScheme = "teal" 
                width = "full"
                variant="solid"
                onClick={signOut}>
                Sign out
            </Button>
        </div>
    );
};
