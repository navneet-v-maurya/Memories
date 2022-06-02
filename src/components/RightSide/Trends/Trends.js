import "./Trends.css";

const Trends = () => {
  const trends = [
    {
      trend: "minions",
      share: "97k",
    },
    {
      trend: "react",
      share: "25.5k",
    },
    {
      trend: "javascript",
      share: "105.8k",
    },
    {
      trend: "wwe",
      share: "20.7k",
    },
    {
      trend: "ufc",
      share: "92.69k",
    },
  ];

  const handleClick = () => {};

  return (
    <div className="trends">
      <span>Trends for your</span>
      {trends.map((t) => {
        return (
          <div className="trend" key={t.trend}>
            <span>#{t.trend}</span>
            <span>{t.share} shares</span>
          </div>
        );
      })}
      <button onClick={handleClick}>share</button>
    </div>
  );
};

export default Trends;
