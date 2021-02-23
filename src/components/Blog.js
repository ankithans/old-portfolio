import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ankithans1947"
      );
      setBlogs(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="text-gray-300 overflow-y-hidden pb-10 text-3xl lg:text-4xl body-font font-medium pl-7 lg:pl-10">
        My Recently Published Blogs
      </div>
      <div className="flex flex-wrap pl-5 pr-5">
        {blogs.map((b, i) => (
          <div key={i} className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:opacity-80">
            <a target="_blank" href={b.link}>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full opacity-80"
                  src={b.thumbnail}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-300 mt-5">
                {b.title}
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mt-2">
                {parse(b.description.substring(0, 200))}
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}