import Image from "next/image";

export default function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image
                    width={600}
                    height={300}
                    src={imgUrl}
                    alt={title}
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            </a>
            <div className="w-full p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="flex flex-wrap gap-2 mt-2 flex-row items-center justify-center text-xs">
                    {stack.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block text-sm bg-gray-200 rounded-md px-2 py-1 border-2 border-stone-900 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
