const letterColors = {
  C: "bg-yellow-400/50",
  B: "bg-green-400/50",
  A: "bg-green-500/50",
  S: "bg-gradient-to-tr from-pink-500 to-blue-500",
} as const;

export default function Score({ letter }: { letter?: string }) {
  return (
    <ul className="flex gap-4 md:gap-8 flex-wrap">
      {Object.keys(letterColors).map((l) => (
        <li
          className={`transition-colors duration-300 w-16 h-16 md:w-20 md:h-20 rounded-lg grid place-items-center border-2 border-white/30 ${letter === l ? letterColors[l as keyof typeof letterColors] : "bg-gray-500/40"}`}
          key={l}
        >
          <span className="md:text-xl font-bold">{l}</span>
        </li>
      ))}
    </ul>
  );
}
