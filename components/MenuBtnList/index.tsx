import MenuBtn from "../MenuBtn";

export default function MenuBtnList() {
    const btnNames = [
        '뉴스', '도서관', '캠페인', '스토어'
    ];

    return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        { btnNames.map(item => {
            return <MenuBtn name={item} />;
        }) }
    </div>
    );
}