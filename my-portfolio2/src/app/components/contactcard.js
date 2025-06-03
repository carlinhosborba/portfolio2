export function ContactCard({
  icon: Icon,
  title,
  description,
  link,
  linkLabel,
  iconColor = "text-green-500",
}) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition">
      <Icon size={40} className={iconColor} />
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="text-center text-gray-700">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-black hover:bg-gray-800 text-white rounded-full transition"
      >
        {linkLabel}
      </a>
    </div>
  );
}
