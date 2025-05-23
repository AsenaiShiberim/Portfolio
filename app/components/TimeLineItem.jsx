export default function TimeLineItem({ year, title, duration, details }) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-2 border border-white"></div>
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400">
                        {duration}
                    </div>
                </div>
                <p className="my-2 text-base font-normal text-stone-500">
                    {details}
                </p>
            </li>
        </ol>
    );
}
