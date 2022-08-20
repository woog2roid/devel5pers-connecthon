import LibraryItem from "./LibraryItem";
import styled from "@emotion/styled";

const LibraryList = ({ imageUrlList }: { imageUrlList: string[] }) => (
  <LibraryListWrapper>
    {imageUrlList.map((it, idx) => <LibraryItem key={idx} src={it} />)}
  </LibraryListWrapper>
)

export default LibraryList

const LibraryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
