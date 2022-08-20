interface IProps {
    name: string;
}

export default function HotFeed({ name } :IProps) {
    return (
        <div>
            <span style={{fontFamily}}>🔥 {name}</span>
            <span>더보기</span>
        </div>
    );
}