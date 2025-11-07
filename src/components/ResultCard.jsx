function ResultCard({ name, total, average }) {
  return (
    <div className="bg-blue-900 rounded-xl p-4 text-gray-800 text-center shadow-inner">
      <p className="text-lg font-semibold mb-2">
        {name
          ? `${name}, your total is ${total}`
          : `Your total is ${total}`}
      </p>
      <p className="text-lg font-semibold">
        and your average is{" "}
        <span className="text-blue-900">
          {isNaN(average) ? 0 : average.toFixed(2)}
        </span>
      </p>
    </div>
  );
}

export default ResultCard;
