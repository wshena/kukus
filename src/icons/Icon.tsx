import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";

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