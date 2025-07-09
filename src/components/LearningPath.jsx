const learningPath = [
  { name: 'C / C++', level: 75, note: 'Problem-solving base' },
  { name: 'Java', level: 90, note: 'OOP & backend fundamentals' },
  { name: 'HTML / CSS / JS', level: 70, note: 'Frontend foundation' },
  { name: 'ReactJS', level: 70, note: 'UI development' },
  { name: 'SQL / MySQL', level: 85, note: 'Database basics' },
  { name: 'Spring Boot', level: 85, note: 'RESTful APIs' },
  { name: 'AWS', level: 60, note: 'Cloud & deployment' },
];

export default function LearningPathTree() {
  return (
    <section className="bg-[#1a1a1a] text-white py-24 px-6 sm:px-12 md:px-24">
      <h2 className="text-3xl font-bold text-center mx-auto mb-20 border-b border-red-500 pb-2 w-fit">
  My Learning Path
</h2>


      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 w-1 bg-red-500 z-0" />
        <div className="w-4 h-4 bg-red-500 rounded-full mb-10 z-10 shadow" />
        {learningPath.map((item, idx) => (
          <div
            key={idx}
            className={`relative mb-16 max-w-xs w-full px-4 py-3 rounded-xl border border-[#333] shadow-md bg-[#2a2a2a]/80 backdrop-blur-md z-10
              ${idx % 2 === 0 ? 'ml-[calc(50%+0.75rem)]' : 'mr-[calc(50%+0.75rem)]'}`}
          >
            <div
              className={`absolute top-1/2 w-65 h-1 bg-red-500 z-10 ${
                idx % 2 === 0 ? 'right-full' : 'left-full'
              }`}
            ></div>

            <h3 className="text-md font-bold text-red-400">{item.name}</h3>
            <p className="text-xs italic text-gray-400 mb-2">{item.note}</p>
            <div className="w-full h-2 bg-[#444] rounded-full">
              <div
                style={{ width: `${item.level}%` }}
                className="h-full bg-red-500 rounded-full"
              ></div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">{item.level}%</p>
          </div>
        ))}
        <div className="w-4 h-4 bg-red-500 rounded-full mt-10 z-10 shadow" />
      </div>
      <h2 className="pt-5 text-3xl font-bold text-center mb-20 w-full">
        Until the Infinity...
      </h2>
    </section>
  );
}
