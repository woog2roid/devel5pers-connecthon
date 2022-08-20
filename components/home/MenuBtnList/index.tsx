import MenuBtn from '../MenuBtn';

const btnNames = ['뉴스', '도서관', '캠페인', '스토어'];

export default function MenuBtnList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {btnNames.map((item, i) => {
        return <MenuBtn key={i} name={item} />;
      })}
    </div>
  );
}
