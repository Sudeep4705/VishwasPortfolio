export default function Projects() {
  const projects = [
    {
      name: "Actual vs Budget forcasting",
      image: "Images/img1.png",
      lang: ["Power Bi", "Excel", "DAX Function"],
      des: `Analyzed the relationship between Cash Conversion Cycle components and working capital efficiency with focus on
             inventory turnover, accounts receivable, and accounts payable management
            Applied statistical techniques including correlation and regression analysis to quantify relationships between CCC
            metrics and cash flow performance`,
    livelink:""
    
    },
  ];
  return (
    <>
      <div className="project grid grid-cols-1 p-5 md:grid md:grid-cols-3 md:w-full md:h-[700px] bg-gray-200 md:p-10">
        {projects.map((prj) => (
          <>
            <div
              className="card-menu md:flex md:rounded-md md:items-center md:w-[500px] md:h-full bg-gradient-to-r from-red-100 via-gray-400 to-gray-200 "
              key={prj.name}
            >
              <div className="card md:w-[480px] md:h-full md:rounded-md bg-gradient-to-r from-red-100 via-gray-100 to-gray-100">
                <div className="img md:w-full">
                  <img
                    src={prj.image}
                    alt=""
                    className="md:w-full rounded-tl-md rounded-tr-md md:h-60 p-0"
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
                  {prj.lang.map((tool, idx) => (
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
                    Project Demo
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
