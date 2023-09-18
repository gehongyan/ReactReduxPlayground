import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavMenu />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout;
