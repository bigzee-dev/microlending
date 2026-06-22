import { FaCar } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaUsers, FaHouse } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const cases = [
  {
    title: "Household emergencies",
    body: "Burst geyser? Broken fridge? Cover unexpected home costs without dipping into savings.",
    icon: <FaHouse className="h-5 w-5" />,
  },
  {
    title: "School fees & uniforms",
    body: "Make sure the kids are ready for the new term — repay comfortably once your salary lands.",
    icon: <IoSchool className="h-5 w-5" />,
  },
  {
    title: "Health & wellness",
    body: "Cover medical bills, prescriptions, or specialist consultations when you need them most.",
    icon: <FaRegHeart className="h-5 w-5" />,
  },
  {
    title: "Car repairs",
    body: "Get your wheels back on the road quickly. Pay the mechanic, drive to work, repay later.",
    icon: <FaCar className="h-5 w-5" />,
  },
  {
    title: "Small business cashflow",
    body: "Cover stock or a once-off opportunity. Get back to running your hustle, fast.",
    icon: <MdOutlineBusinessCenter className="h-5 w-5" />,
  },
  {
    title: "Family obligations",
    body: "Help with funerals, weddings, or family responsibilities — without the stress of waiting.",
    icon: <FaUsers className="h-5 w-5" />,
  },
];

export function UseCases() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-editorial text-ink-900 sm:text-5xl lg:text-6xl text-balance dark:text-cream-100">
              We're here to help.
            </h2>
          </div>
        </div>

        <ul className="mt-16 grid gap-0 border border-ink-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-ink-800">
          {cases.map((c, idx) => (
            <li
              key={c.title}
              className={`group relative flex flex-col border bg-cream-50 p-7 transition border-ink-100 dark:border-ink-700 hover:bg-clay-50/60 sm:p-8 dark:bg-ink-950 dark:hover:bg-clay-950/40 
               `}
            >
              <div className="flex items-start justify-between">
                <span className="text-white grid h-12 w-12 place-items-center rounded-full border border-ink-200 bg-clay-600 transition group-hover:border-clay-500 group-hover:bg-clay-500 group-hover:text-cream-50 dark:border-ink-600 dark:text-clay-300 dark:group-hover:border-clay-400 dark:group-hover:bg-clay-400 dark:group-hover:text-ink-950">
                  <span className="h-5 w-5">{c.icon}</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink-900 dark:text-cream-100">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
