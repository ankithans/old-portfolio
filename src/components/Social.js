import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

export default function Social() {
  return (
    <div className="pl-7 pr-5 lg:pl-20 pt-32 flex flex-row space-x-6">
      <a
        className="hover:opacity-50"
        target="_blank"
        href="mailto:ankithans1947@gmail.com"
      >
        <AiFillMail className="text-gray-400 text-3xl" />
      </a>

      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://github.com/ankithans/"
      >
        <AiFillGithub className="text-gray-400 text-3xl" />
      </a>

      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://linkedin.com/in/ankithans/"
      >
        <AiFillLinkedin className="text-gray-400 text-3xl" />
      </a>

      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://twitter.com/AnkitHans15/"
      >
        <AiFillTwitterCircle className="text-gray-400 text-3xl" />
      </a>

      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://ankithans1947.medium.com/"
      >
        <AiFillMediumCircle className="text-gray-400 text-3xl" />
      </a>
      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://www.instagram.com/thisisankithans/"
      >
        <AiFillInstagram className="text-gray-400 text-3xl" />
      </a>
    </div>
  );
}
