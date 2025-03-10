import portfolio from "../data/portfolio";
import PortfolioItem from "../components/PorfolioItem";

export default function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={index} // Adding a unique key
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}
