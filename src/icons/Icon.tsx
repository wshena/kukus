import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export const AngleRightIcon = ({size, color, classname}:IconProps) => {
  return <FaAngleRight size={size} color={color} className={classname} />
}

export const AngleLeftIcon = ({size, color, classname}:IconProps) => {
  return <FaAngleLeft size={size} color={color} className={classname} />
}