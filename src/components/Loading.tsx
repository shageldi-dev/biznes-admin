import { useGetStaticFiles } from "../hooks/useGetStaticFiles";
import { BaseUrl } from "../utils/baseUrl";

const Loading = () => {
  const { data, isLoading, error } = useGetStaticFiles();
  if (isLoading) {
    return <h2>Please wait...</h2>;
  }
  if (data == null || error) {
    return <h1> Error </h1>;
  }
  return (
    <div>
      {data ? (
        <div>
          <img
            src={`${BaseUrl}${
              data.data.find((it) => it.attributes.type == "logo")?.attributes
                .file.data[0].attributes.url
            }`}
          />
        </div>
      ) : (
        <h2>Empty</h2>
      )}
    </div>
  );
};

export default Loading;
