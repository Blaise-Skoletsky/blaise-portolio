import Image from 'next/image'

export default function Home() {
  return (
    <div id="nav-bar" className="fixed w-full h-32  flex items-stretch">
      <ul className=" text-2xl font-semibold text-white menu menu-vertical lg:menu-horizontal  rounded-full h-1/2 w-1/2 m-auto self-center bg-gradient-to-r from-pink-500 from-33% via-purple-500 via-33% to-indigo-500 to-33%">
        <li className="h-full  w-1/3">
          <a className=" rounded-full h-full place-self-center w-4/5">Projects</a>
        </li>
        <li className="h-full  w-1/3">
          <a className=" rounded-full h-full place-self-center w-4/5">About Me</a>
        </li>
        <li className="h-full  w-1/3">
          <a className=" rounded-full h-full place-self-center w-4/5">Contact</a>
        </li>
      </ul>
    </div>

  )
}
