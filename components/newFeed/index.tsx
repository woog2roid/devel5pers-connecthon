import { Divider } from '@mui/material';
import data from '../../data/dummy.json';
import { IDummy } from '../../types/dummy';
import { ImgWrapper, ProfileImg } from './style';

export default function NewFeed() {
    const feedData: IDummy[] = data;

    return (
        <>
            {feedData.map((item, i) => {
                return <div style={{borderRadius: "5px", boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.3)", margin: "10px", padding: "3px"}}>
                    <div style={{ display: "flex", margin: "10px", marginTop: "15px" }}>
                        <ProfileImg><div style={{ width: "30px", height: "30px", backgroundColor: '#FFC090' }} /></ProfileImg>
                        <div style={{ display: "inline", marginTop: "4px", marginLeft: "10px", color: "#444444", fontSize: "14px" }}>{item.user_name}</div>
                    </div>
                    <ImgWrapper><img src={item.image_url} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></ImgWrapper>
                    <div style={{ padding: "10px", fontSize: "14px", marginBottom: "10px" }}>
                        {item.content}
                    </div>
                </div>;
            })}
        </>

    );
}