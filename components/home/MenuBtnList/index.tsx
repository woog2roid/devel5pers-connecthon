import MenuBtn from '../MenuBtn';

const btns = [
  { name: '뉴스', link: '/newsPage' },
  { name: '도서관', link: '/library' },
  { name: '캠페인', link: '' },
  { name: '스토어', link: '' },
];

export default function MenuBtnList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '2rem 0' }}>
      {btns.map((item, i) => {
        return <MenuBtn key={i} btn={item} />;
      })}
    </div>
  );
}
