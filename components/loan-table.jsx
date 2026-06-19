import Image from "next/image";

export function LoanTable() {
  const loanData = [
    { capital: 1000, month1: 1250, month2: 705, month3: 705 },
    { capital: 1500, month1: 1875, month2: 1058, month3: 793 },
    { capital: 2000, month1: 2500, month2: 1410, month3: 1057 },
    { capital: 2500, month1: 3125, month2: 1763, month3: 1321 },
    { capital: 3000, month1: 3750, month2: 2115, month3: 1585 },
    { capital: 3500, month1: 4375, month2: 2468, month3: 1849 },
    { capital: 4000, month1: 5000, month2: 2820, month3: 2113 },
    { capital: 4500, month1: 5625, month2: 3173, month3: 2378 },
    { capital: 5000, month1: 6250, month2: 3525, month3: 2642 },
  ];

  return (
    <main className="max-w-6xl mx-auto  pt-20 pb-12 ">
      <article className="relative grid gap-0 border border-ink-200 dark:border-ink-800 lg:grid-cols-2">
        <div className="relative w-full min-h-[350px] md:min-h-[300px] lg:min-h-[440px]">
          <Image
            src="/761368.jpg"
            alt="Gaborone skyline"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-1">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cream-200 drop-shadow-lg underline">
              Get a Loan up to
            </p>
            <p className="mt-4 text-display italic text-6xl md:text-8xl font-black leading-none text-clay-400 drop-shadow-xl">
              P6000
            </p>
            <div className="max-w-max mt-4 flex gap-x-2 items-center">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo/qll-graphic-white.svg"
                  alt="QuickLittleLoans logo"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-heading text-2xl font-medium text-white">
                Quick<span className="text-clay-400">Little</span>Loans
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full bg-cream-50 p-2 sm:px-12 sm:py-6 dark:bg-ink-950 flex flex-col justify-center">
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100">
                  <th className="px-3 md:px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Capital
                  </th>
                  <th className="px-3 md:px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    1 Month
                  </th>
                  <th className="px-3 md:px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    2 Months
                  </th>
                  <th className="px-3 md:px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    3 Months
                  </th>
                </tr>
              </thead>
              <tbody>
                {loanData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-3 md:px-6 py-4 text-sm font-medium text-gray-900">
                      P{row.capital.toLocaleString()}
                    </td>
                    <td className="px-3 md:px-6 py-4 text-sm text-gray-700">
                      P{row.month1.toLocaleString()}
                    </td>
                    <td className="px-3 md:px-6 py-4 text-sm text-gray-700">
                      P{row.month2.toLocaleString()}
                    </td>
                    <td className="px-3 md:px-6 py-4 text-sm text-gray-700">
                      P{row.month3.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <cite className="mt-5 block font-mono text-[11px] uppercase tracking-widest not-italic text-ink-500 dark:text-ink-300">
            Here at QuickLittleLoans, we encourage responsible borrowing. Our
            loan table is designed to provide clear and transparent information
            about our loan offerings. Please do not borrow more than you can
            comfortably repay.
          </cite>
        </div>
      </article>
    </main>
  );
}
