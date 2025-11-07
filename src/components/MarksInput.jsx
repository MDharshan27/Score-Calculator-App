function MarksInput({ value, onChange, index }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(index, e.target.value)}
      placeholder={`Sub ${index + 1}`}
      className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 rounded-lg p-2 text-center outline-none transition-all"
    />
  );
}

export default MarksInput;
