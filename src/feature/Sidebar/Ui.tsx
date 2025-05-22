import {useNavigate} from "react-router-dom";
import {SideNav} from "@telus-uds/components-web";

/** Sidebar for navigation */
export const Ui = () => {
    const navigate = useNavigate()
    
    return (<SideNav style={{width: "200px", height: "100%"}}>
        <SideNav.Item onPress={() => navigate('/')}>Home</SideNav.Item>
        <SideNav.Item onPress={() => navigate('/pet/list')}>Pets</SideNav.Item>
        <SideNav.Item onPress={() => navigate('/about')}>About</SideNav.Item>
    </SideNav>)
}
