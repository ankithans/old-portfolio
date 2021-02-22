import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillMail,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

export default function Social() {
  return (
    <div className="pl-7 pr-5 lg:pl-20 pt-32 flex flex-row space-x-6">
      <AiFillMail className="text-gray-400 text-3xl" />

      <AiFillGithub className="text-gray-400 text-3xl" />
      <AiFillLinkedin className="text-gray-400 text-3xl" />
      <AiFillTwitterCircle className="text-gray-400 text-3xl" />
      <AiFillMediumCircle className="text-gray-400 text-3xl" />
      <AiFillInstagram className="text-gray-400 text-3xl" />
      <AiFillFacebook className="text-gray-400 text-3xl" />
    </div>
  );
}
