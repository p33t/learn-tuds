import {useNavigate} from "react-router-dom";
import {SideNav} from "@telus-uds/components-web";

/** Sidebar for navigation */
export const Ui = () => {
    const navigate = useNavigate()
    
    return (<SideNav>
        <SideNav.Item key='root' onPress={() => navigate('/')}>Home</SideNav.Item>
        <SideNav.Item key='pet/list' onPress={() => navigate('/pet/list')}>Pets</SideNav.Item>
        <SideNav.Item key='imageUpload' onPress={() => navigate('/imageUpload')}>Image Upload</SideNav.Item>
        <SideNav.Item key='about' onPress={() => navigate('/about')}>About</SideNav.Item>
    </SideNav>)
}
