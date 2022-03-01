import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  //send request to backend api to fetch news item with newsId

  return <h1>Detail Page</h1>;
};

export default DetailPage;
