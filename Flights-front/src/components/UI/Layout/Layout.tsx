import React, {ReactChild, ReactNode} from 'react';
import {Container} from 'reactstrap';
import MainNav from "./MainNav/MainNav";

interface LayoutProps {
    children: ReactChild | ReactNode
}


const Layout: React.FC<LayoutProps> = ({children}) => {

    return (
        <div>
            <header className='bg-primary'>
                <Container>
                    <MainNav/>
                </Container>
            </header>
            <Container>
                {children}
            </Container>

        </div>
    );
};

export default Layout;