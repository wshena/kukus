import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";
import { FaStar, FaRegStar, FaStarHalfAlt, FaYoutube, FaTwitter, FaFacebook, FaUser } from "react-icons/fa";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { MdOutlineZoomOutMap } from "react-icons/md";

export const USerIcon = ({size, color, classname}:IconProps) => {
  return <FaUser size={size} color={color} className={classname} />
}

export const YoutubeIcon = ({size, color, classname}:IconProps) => {
  return <FaYoutube size={size} color={color} className={classname} />
}

export const TwitterIcon = ({size, color, classname}:IconProps) => {
  return <FaTwitter size={size} color={color} className={classname} />
}

export const FacebookIcon = ({size, color, classname}:IconProps) => {
  return <FaFacebook size={size} color={color} className={classname} />
}

export const ZoomOutIcon = ({size, color, classname}:IconProps) => {
  return <MdOutlineZoomOutMap size={size} color={color} className={classname} />
}

export const SearchIcon = ({size, color, classname}:IconProps) => {
  return <PiMagnifyingGlassFill size={size} color={color} className={classname} />
}

export const HollowStarIcon = ({size, color, classname}:IconProps) => {
  return <FaRegStar size={size} color={color} className={classname} />
}

export const HalfFullStarIcon = ({size, color, classname}:IconProps) => {
  return <FaStarHalfAlt size={size} color={color} className={classname} />
}

export const FullStarIcon = ({size, color, classname}:IconProps) => {
  return <FaStar size={size} color={color} className={classname} />
}

export const CloseMenuIcon = ({size, color, classname}:IconProps) => {
  return <RiCloseLargeLine size={size} color={color} className={classname} />
}

export const MobileNavMenuIcon = ({size, color, classname}:IconProps) => {
  return <RiMenu3Line size={size} color={color} className={classname} />
}

export const AngleRightIcon = ({size, color, classname}:IconProps) => {
  return <FaAngleRight size={size} color={color} className={classname} />
}

export const AngleLeftIcon = ({size, color, classname}:IconProps) => {
  return <FaAngleLeft size={size} color={color} className={classname} />
}