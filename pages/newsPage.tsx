import CustomHead from '../components/common/CustomHead';
import TopHeading from '../components/common/TopHeading';
import NewsList from '../components/news/NewsList';

export default function NewsPage() {
  return (
    <>
      <CustomHead title="๋ด์ค | AimEco" />
      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <TopHeading title="๋ด์ค" to="/" />
        <p style={{ margin: '10px 0', fontSize: '12px' }}>
          ๐ฐ ๋งค์ผ ์๋ก ์๋ฐ์ดํธ ๋๋ ํ๊ฒฝ ๊ด๋ จ ๋ด์ค๋ฅผ ์ฝ์ด๋ณด์ธ์.
        </p>
        <NewsList />
      </div>
    </>
  );
}
