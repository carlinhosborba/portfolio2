import Image from "next/image";

export function ProjectCard({ link, image, title, description, className }) {
  return (
    <a href={link} target="_blank">
      <div
        className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${className} cursor-pointer`}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h2 className="text-blue-700 text-2xl font-bold mb-2">{title}</h2>
          <p className="text-black font-semibold">{description}</p>
        </div>
      </div>
    </a>
  );
}
