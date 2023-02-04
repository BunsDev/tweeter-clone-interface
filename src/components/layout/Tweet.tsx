import {
  FaRetweet,
  FaRegCommentAlt,
  FaRegHeart,
  FaRegBookmark,
} from "react-icons/fa";
import { Card, Avatar, Button, TextInput } from "flowbite-react";
import Image from "next/image";
import { BiImageAlt } from "react-icons/bi";

export default function Tweet() {
  return (
    <li>
      <h2 className="mb-2 flex items-center gap-2.5 text-gray-400">
        <FaRetweet className="text-lg" />
        <span className="text-sm">Daniel Jensen Retweeted</span>
      </h2>

      <article className="max-w-full">
        <Card>
          <div className="flex items-center gap-4">
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
            <div>
              <h3 className="text-base font-bold capitalize text-black">
                peyton leyons
              </h3>
              <time
                dateTime="1985-12-30"
                className="text-xs font-medium text-gray-400"
              >
                December 30, 1985
              </time>
            </div>
          </div>

          <p className="text-base font-medium text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, vitae.
          </p>

          <figure className="relative h-80 w-full">
            <Image
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt="tweet cover"
              className="object-cover"
              fill={true}
            />
          </figure>

          <div className="flex items-center justify-end space-x-4 border-0 border-b-2 border-solid border-gray-100 pb-1 text-xs font-medium text-gray-400">
            <span>449 Comments</span>
            <span>59k Retweets</span>
            <span>234 Saved</span>
          </div>

          <Button.Group className="flex justify-between border-0 border-b-2 border-solid border-gray-100 pb-3">
            <Button color="gray" className="flex-1">
              <FaRegCommentAlt className="mr-3 text-xl" />
              Comments
            </Button>
            <Button color="gray" className="flex-1">
              <FaRetweet className="mr-3 text-xl" />
              Retweets
            </Button>
            <Button color="gray" className="flex-1">
              <FaRegHeart className="mr-3 text-xl" />
              Like
            </Button>
            <Button color="gray" className="flex-1">
              <FaRegBookmark className="mr-3 text-xl" />
              Bookmark
            </Button>
          </Button.Group>

          <form className="flex items-center gap-4">
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
            <fieldset className="relative flex-1">
              <TextInput
                type="text"
                placeholder="Tweet your reply"
                required={true}
                className="rounded-lg border border-solid border-gray-200"
              />
              <BiImageAlt className="absolute top-2 right-2 cursor-pointer text-2xl text-gray-400 hover:text-blue-500" />
            </fieldset>
          </form>

          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </article>
    </li>
  );
}