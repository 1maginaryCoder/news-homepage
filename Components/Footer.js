import imgRetroPCs from "../Images/image-retro-pcs.jpg";
import imgTopLap from "../Images/image-top-laptops.jpg";
import imgGameGrowth from "../Images/image-gaming-growth.jpg";

export default function Article() {
  const newsList = [
    {
      image: imgRetroPCs,
      title: "Reviving Retro PCs",
      detail: "What happens when old Pcs are given modern updates?"
    },
    {
      image: imgTopLap,
      title: "Top 10 Latops of 2022",
      detail: "Our best picks for various needs and budgets."
    },
    {
      image: imgGameGrowth,
      title: "The growth of gaming",
      detail: "How the pandemic has sparked fresh opportunities."
    }
  ];
  return (
    <ul className="flex-row md:flex p-3">
      {newsList.map((news, i) => (
        <li className="flex p-5">
          <img
            src={newsList[i].image}
            alt="Imagegroup"
            className="h-48 md:h-32"
          />
          <div className="p-2 flex-row justify-evenly space-y-5">
            <h3 className="text-5xl md:text-xl text-slate-400 font-semibold">
              <span>{i < 10 ? 0 : ""}</span>
              {i + 1}
            </h3>
            <h2 className="font-bold text-2xl md:text-sm">
              {newsList[i].title}
            </h2>
            <p className="text-slate-500 text-xl md:text-xs">
              {newsList[i].detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
