import NewsList from '../components/news/NewsList';

export default function NewsPage() {
    return (
        <div style={{textAlign: "center", margin : "10px", marginBottom: "20px"}}>
            <p style={{marginBottom: "10px", fontSize: "12px"}}>📰 매일 새로 업데이트 되는 환경 관련 뉴스를 읽어보세요.</p>
            <NewsList />
        </div>
    );
}
