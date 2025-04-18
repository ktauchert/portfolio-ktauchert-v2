"use client";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import * as motion from "motion/react-client";
import { DirectionType, fadeIn } from "@/utils/variants";

type Props = {
  title: string;
  year: number;
  description: string;
  imageUrl: string;
  link: string;
  align: string;
};

const SingleProject = ({
  title,
  description,
  year,
  imageUrl,
  link,
  align,
}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false); // For mobile click handling

  return (
    <div
      className={`flex w-full flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end flex-col`}
    >
      <motion.div
        variants={fadeIn(
          (align === "right" ? "left" : "right") as DirectionType,
          0.2
        )}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <h2 className="md:text-3xl text-2xl text-orange">{title}</h2>
        <h2
          className={`text-xl font-thin text-white special text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <Link
          href={link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BsArrowUpRightCircleFill />
        </Link>
      </motion.div>
      <motion.div
        variants={fadeIn(align as DirectionType, 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        title="Click for more info"
        className={`relative w-full md:w-[400px] h-[220px] perspective`}
        onClick={() => setIsFlipped(!isFlipped)} // Handle click for mobile
      >
        <div
          className={`absolute w-full h-full transition-transform duration-700 cursor-pointer border-white border-2 rounded-xl ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="w-full h-full bg-orange opacity-40 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden rounded-xl">
              <div className="absolute bottom-4 right-4 bg-orange p-2 rounded-full cursor-pointer">
                <GiClick className="text-light-grey text-2xl" />
              </div>
            </div>
            <img
              className="w-full h-full object-center object-cover rounded-xl"
              loading="lazy"
              src={imageUrl}
              alt={title}
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-orange text-white flex flex-col justify-center items-center rounded-xl backface-hidden rotate-y-180">
            <p className="text-lg px-4">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleProject;
