import LibraryItem from "./LibraryItem";
import styled from "@emotion/styled";

const LibraryList = ({ imageUrlList }: { imageUrlList: string[] }) => (
  <LibraryListWrapper>
    {imageUrlList.map((it) => <LibraryItem src={it} />)}
  </LibraryListWrapper>
)

export default LibraryList

const LibraryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
