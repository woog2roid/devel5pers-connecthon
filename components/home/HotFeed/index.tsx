interface IProps {
  name: string;
}

export default function HotFeed({ name }: IProps) {
  return (
    <div>
      <span>🔥 {name}</span>
      <span>더보기</span>
    </div>
  );
}
