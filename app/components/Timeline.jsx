import TimeLine from "../data/timeline";
import TimeLineItem from "../components/TimeLineItem";
import Title from "./title";

export default function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12">
        <Title>Work Experience</Title>
        {TimeLine.map((item, key) => (
          <TimeLineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
        </div>
      </div>
  );
}
