/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardBody } from "@nextui-org/card"
import Link from "next/link"

type cardsProps = {
  projectName: string
  image: string
  github: string
  liveUrl: string
}

const Cards = ({ projectName, image, github, liveUrl }: cardsProps) => {
  return (
    <Card className="p-4  rounded-3xl max-sm:mb-10 sm:mb-10 border border-gray-400">
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center gap-4">
        <h4 className="font-bold text-2xl ">{projectName}</h4>
        <div className="flex justify-center items-center gap-4">
          <Link
            href={`${github}`}
            target="_blank"
            className="text-md font-bold border border-slate-900 p-3 rounded-3xl hover:bg-slate-900 hover:text-[#fff] dark:border-[#fff] dark:hover:text-slate-900 dark:hover:bg-[#fff]"
          >
            GitHub
          </Link>
          <Link
            href={`${liveUrl}`}
            target="_blank"
            className="text-md font-bold border  border-slate-900 p-3 rounded-3xl hover:bg-slate-900 hover:text-[#fff] dark:border-white dark:hover:text-slate-900 dark:hover:bg-[#fff]"
          >
            Live Demo
          </Link>
        </div>
      </CardHeader>
    </Card>
  )
}

export default Cards
