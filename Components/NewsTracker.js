export default function Article() {
  const newsList = [
    {
      title: "Hydrogen Vs Electric Cars",
      detail: "Will Hydrogen-fueled cars ever catch up with EVs?"
    },
    {
      title: "The downsides of AI Artistery",
      detail:
        "What are the possible downsides of on demand AI image generation."
    },
    {
      title: "Is VC funding drying up?",
      detail:
        "Private funding VC firms is down 50% YOY. We take a look at what taht means."
    }
  ];
  return (
    <div className="bg-black md:w-1/3 p-8 md:p-3">
      <h1 className="text-white text-yellow-500 text-4xl px-3">News </h1>
      <div>
        {newsList.map((news, i) => (
          <div className="p-3 md:p-1">
            <h3 className="text-white font-bold text-2xl md:text-lg py-3 md:pd-1">
              {news.title}
            </h3>
            <p className="text-slate-400 text-xl md:text-sm py-3 mb-4 md:mb-2">
              {news.detail}
            </p>
            {i < 2 ? <hr /> : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
