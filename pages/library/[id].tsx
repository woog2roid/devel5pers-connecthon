import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { definitions } from "../../types/supabase"
import { getPostById } from "../../apis/post"
import LibraryItem from "../../components/library/LibraryItem"

const LibraryDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState<definitions['posts']>()

  const fetchData = async (id: number) => {
    setData((await getPostById(id))[0])
  }
  useEffect(() => {
    fetchData(parseInt((id as string) ?? '0'))
  }, [id])

  return (
    <>
      {data?.image.map((it) => {
        return (
          <LibraryItem src={(it as string)} />
        )
      })}
    </>
  )
}

export default LibraryDetail
