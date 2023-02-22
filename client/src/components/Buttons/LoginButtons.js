import { Stack, Button } from '@chakra-ui/react';

function LoginButtons({ user }) {

    function SignInButtons() {
        return ( // display log in buttons - no user logged in
            <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button
                    as={'a'}
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={'link'}
                    href={'/UserLogin'}>
                    Sign In
                </Button>
                <Button
                    as={'a'}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    href={'/UserLogin'}
                    _hover={{
                    bg: 'pink.300',
                    }}>
                    Sign Up
                </Button>
            </Stack>
        )
    };

    function logout() {
        localStorage.removeItem('user');
    };
  
    function LogoutButton() {
        return ( // display log out button
            <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                onClick={() => logout()}
                _hover={{
                bg: 'pink.300',
                }}>
                Log out
            </Button>
        )
    };
        
    return (
        <div>
            {(user.first_name !== undefined)
                ? <LogoutButton />
                : <SignInButtons />
            }
        </div>
    )
};

export default LoginButtons;