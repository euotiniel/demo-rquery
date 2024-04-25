import { Link } from 'next-view-transitions'
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";


export default function contacts() {
  return (
    <div className="flex flex-row items-center justify-center gap-5 opacity-70">
        <Link href="https://twitter.com/euotiniel" target='_blank'><FaTwitter size={17} /></Link>
        <Link href="https://github.com/euotiniel" target='_blank'><BsGithub size={17} /></Link>
        <Link href="https://www.instagram.com/euotiniel/" target='_blank'><AiFillInstagram size={20} /></Link>
    </div>
  )
}
