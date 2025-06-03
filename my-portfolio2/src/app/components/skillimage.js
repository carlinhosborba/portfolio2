import Image from "next/image";

export function SkillImage({ image, name }) {
  return (
    <div>
      <img src={image} alt={name} className="w-25 h-25 object-contain" />
      <p className="mt-2 text-center">{name}</p>
    </div>
  );
}
