import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiMongodb,
  DiGoogleCloudPlatform,
  DiGit,
} from "react-icons/di";
import {
  SiCplusplus,
  SiTypescript,
  SiGraphql,
  SiKubernetes,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";
import { FaNodeJs, FaDocker, FaAws, FaFigma } from "react-icons/fa";
import GoIcon from "./goicon";

export default function Techstack() {
  return (
    <div className="pt-10 pb-10">
      <div className="text-gray-300 text-4xl body-font font-medium pl-10">
        Tech I'm familiar with
      </div>
      <div className="pt-10 flex flex-wrap pl-5 ">
        <DiJavascript1 className="text-gray-400 text-5xl pl-5 pt-5" />
        <SiCplusplus className="text-gray-400 text-5xl pl-5 pt-5" />
        <DiPython className="text-gray-400 text-5xl pl-5 pt-5" />
        <GoIcon />
        <FaNodeJs className="text-gray-400 text-5xl pl-5 pt-5" />
        <SiTypescript className="text-gray-400 text-5xl pl-5 pt-5" />
        <DiReact className="text-gray-400 text-5xl pl-5 pt-5" />
        <SiFlutter className="text-gray-400 text-5xl pl-5 pt-5" />
        <FaDocker className="text-gray-400 text-5xl pl-5 pt-5" />

        <SiGraphql className="text-gray-400 text-5xl pl-5 pt-5" />
        <DiMongodb className="text-gray-400 text-5xl pl-5 pt-5" />
        <SiKubernetes className="text-gray-400 text-5xl pl-5 pt-5" />
        <SiPostgresql className="text-gray-400 text-5xl pl-5 pt-5" />
        <DiGoogleCloudPlatform className="text-gray-400 text-5xl pl-5 pt-5" />
        <FaAws className="text-gray-400 text-5xl pl-5 pt-5" />
        <FaFigma className="text-gray-400 text-5xl pl-5 pt-5" />
      </div>
    </div>
  );
}
