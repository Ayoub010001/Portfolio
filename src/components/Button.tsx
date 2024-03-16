import { ReactNode } from 'react'
import './btn.css'
import { motion} from "framer-motion"



export default function Button({ btnMsg, children }: { btnMsg: string, children?:ReactNode }) {
  return (
    <motion.button className="btn">{btnMsg} {children}</motion.button>
  )
}
