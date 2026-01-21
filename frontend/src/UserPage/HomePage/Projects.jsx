import { motion} from "motion/react"
export default function Projects() {
  const projects = [
    {
      name: "Actual vs Budget Executive",
      image: "Images/img1.png",
      tools: ["Power Bi", "Excel", "DAX Function"],
      des: `Developed a foundational Actual vs. Budget Dashboard in Power BI to monitor fiscal performance and evaluate real-time outcomes against pre-established targets. Analyzed budget utilization rates and departmental variances to identify key cost centers and opportunities for organizational cost-savings. Implemented time-series tracking with interactive slicers for months and quarters to facilitate granular financial reporting and data-driven executive decision-making.`,
      livelink:"https://drive.google.com/drive/folders/1pV2iIR2WguJ70f5JoPHKqYSv4E5aFbBh?usp=sharing"
    
    },
    {
      name: "P&L Dashboard",
      image: "Images/img2.png",
      tools: ["Power Bi", "Excel", "DAX Function"],
      des: `Developed an interactive Power BI Finance Dashboard to monitor revenue, expenses, and net profit margins through dynamic data visualization. Analyzed departmental profitability and expenditure drivers like Salaries and Software Tools to identify key cost centers and performance trends. Implemented monthly trend tracking with interactive slicers to facilitate granular fiscal reporting and data-driven executive decision-making.`,
      livelink:"https://drive.google.com/drive/folders/1nUNrSG_IL3K63S7yVNTc62-ev2Nx8qkt?usp=sharing"
    
    },
    {
      name: "Failed Banks Dashboard",
      image: "Images/img3.png",
      tools: ["Power Bi", "Excel", "DAX Function"],
      des: `Developed a foundational Failed Banks Analysis Dashboard in Power BI to monitor and analyze historical bank closures and institutional stability through dynamic data visualization. Analyzed high-risk regions and failure trends over time to identify key systemic vulnerabilities and provide strategic risk assessment insights. Implemented interactive geographic mapping and integrated custom visual packages to facilitate granular historical reporting and data-driven executive visibility.`,
      livelink:"https://drive.google.com/drive/folders/1ZEm6LDOI3__27hhrtGbqFZvRY4tQC3k9?usp=sharing"
    
    },
    {
      name: "Financial Modeling and Valuation of asian paints",
      image: "Images/img4.png",
      tools: ["Excel", "SPSS","Screener",],
      des: `Developed a detailed Financial Model for Asian Paints to evaluate the company's historical performance and projected valuation through dynamic Excel-based analysis. Analyzed key financial drivers and scenario summaries to assess the impact of varying market conditions on revenue and profitability metrics. Implemented structured data modeling with scenario management to facilitate granular sensitivity reporting and data-driven investment decision-making.`,
      livelink:"https://drive.google.com/drive/folders/1s20QWNRXROQNF1zEZgiNEXWStijMEkbQ?usp=drive_link"
    
    },
    {
      name: "Academic Project",
      image: "Images/img5.png",
      tools: ["Excel", "Word","Mendley Desktop"],
      des: `Developed a specialized study on the Impact of Cash Conversion Cycle (CCC) on Working Capital Efficiency at Sri Chamundeswari Sugars Limited. Analyzed the critical relationship between CCC components—inventory turnover, accounts receivable, and accounts payable—to determine their direct influence on organizational liquidity. Implemented statistical techniques, including correlation and regression analysis, to quantify how CCC metrics drive cash flow performance and overall working capital health.`,
      livelink:"https://drive.google.com/drive/folders/15fQXr6jLKCtlELwLxtCo55PP2w8xU-nG?usp=drive_link"
    
    },
  ];
  return (
    <> <motion.h1 className="text-center text-black text-3xl font-bold mb-2 mt-5 md:mb-5" style={{fontFamily:" 'Staatliches', system-ui"}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3,delay:1}}>
                My Works
              </motion.h1>
      <div className="project grid grid-cols-1 p-5 gap-5 md:grid md:grid-cols-3 md:w-full md:gap-5 md:min-h-[700px] bg-gray-200 md:p-5">

        {projects.map((prj) => (
          <>
            <div
              className="card-menu md:flex  md:rounded-md md:items-center md:w-[500px] md:h-full bg-gradient-to-r from-red-100 via-gray-400 to-gray-200"
              key={prj.name}
            >
              <div className="card md:w-[480px] md:h-full md:rounded-md bg-gradient-to-r from-red-100 via-gray-100 to-gray-100">
                <div className="img md:w-full">
                  <img
                    src={prj.image}
                    alt=""
                    className="md:w-full rounded-tl-md rounded-tr-md md:h-60 p-0 "
                  />
                </div>
                <div className="md:w-full">
                  <h1
                    className="text-2xl font-bold p-4 md:p-4"
                    style={{ fontFamily: " 'Staatliches', system-ui" }}
                  >
                    {prj.name}
                  </h1>
                  <p
                    className="md:px-4 px-4"
                    style={{ fontFamily: "'Bitter', serif" }}
                  >
                    {prj.des}
                  </p>
                </div>
                <div className="md:flex flex p-4 gap-3 md:p-4 md:gap-3">
                  {prj.tools.map((tool, idx) => (
                    <div className="lang" key={idx}>    
                    <span className="px-2.5 py-1 text-xs font-semibold  rounded-full bg-emerald-900/60 text-emerald-300">
                        {tool}
                    </span>
                    </div>
                  ))}
                </div>

                <div className="link">
                  <a
                    href={prj.livelink}
                    className="inline-flex items-center gap-2 text-black-300 font-semibold transition-colors hover:text-emerald-400 p-4 md:p-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
