import { useEffect, useState } from "react";
import { definitions } from "../types/supabase";
import { getPostsByCategory } from "../apis/post";
import LibraryList from "../components/library/LibraryList";

const Library = () => {
  const [data, setData] = useState<definitions['posts'][]>()

  const fetchData = async () => {
    setData(await getPostsByCategory('library'));
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <LibraryList imageUrlList={data?.map((it) => (it.image[0] as string)) ?? []}/>;
}

export default Library;
