import CustomHead from '../components/common/CustomHead';
import TopHeading from '../components/common/TopHeading';
import NewsList from '../components/news/NewsList';

export default function NewsPage() {
  return (
    <>
      <CustomHead title="뉴스 | AimEco" />
      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <TopHeading title="뉴스" to="/" />
        <p style={{ margin: '10px 0', fontSize: '12px' }}>
          📰 매일 새로 업데이트 되는 환경 관련 뉴스를 읽어보세요.
        </p>
        <NewsList />
      </div>
    </>
  );
}
