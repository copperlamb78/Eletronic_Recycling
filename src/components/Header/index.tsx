import { HouseLine, Recycle } from "phosphor-react";
import { HeaderContainer, LogoContainer, MenuContainer } from "./style";
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <MenuContainer to='/address'>
                <Recycle size="6vw"/>
                <h1>Endereços</h1>
            </MenuContainer>
            <LogoContainer>
                <img src={logo} alt="" />
            </LogoContainer>
            <MenuContainer to='/' >
                <h1>Home</h1>
                <HouseLine size="6vw"/>
            </MenuContainer>
        </HeaderContainer>
    )
}