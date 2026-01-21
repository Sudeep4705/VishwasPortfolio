import SchoolIcon from '@mui/icons-material/School';
import '@fontsource/bitter';
export default function Education() {
  return (
    <>
      <div className="edu mt-10 mb-10 md:pb-10 md:w-full md:h-96 md:mt-25" style={{fontFamily:"'Bitter', serif"}}>
         <h1 className="text-center text-black text-3xl font-bold mb-2 md:mb-5" style={{fontFamily:" 'Staatliches', system-ui"}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3,delay:1}}>
                Education
              </h1>
        <div className="edu-card grid grid-cols-1  gap-5 px-5 md:w-full md:h-full md:grid md:grid-cols-2 md:px-5 md:gap-5">
          <div className="card1 md:p-0 p-5 bg-gradient-to-l from-gray-300 via-blue-800/30 to-gray-500/30 backdrop:backdrop-blur-md border-white/20 rounded-md shadow-lg">
            <div className='md:flex md:gap-1 md:px-20 md:pt-20  md:items-center'>
                <h1><SchoolIcon sx={{fontSize: { xs: 30, md: 70 }}}/></h1>  
                <h1 className="text-black text-lg md:text-2xl font-bold"> Vidyavardhaka College of Engineering, Mysore (2023-2025) </h1>
            </div>
            <div className='md:pl-30 md:mt-10 md:flex md:flex-col md:gap-10'>
                <h1 className='text-lg md:text-2xl'> Master of Business Administration (MBA) - Finance</h1>
                <h1 className='text-lg md:text-2xl'><b>  CGPA:</b> 7.87/10</h1>
            </div>
          </div>
          <div className="card2 md:p-0 p-5  bg-gradient-to-l from-gray-300 via-blue-800/30 to-gray-500/30 backdrop:backdrop-blur-md border-white/20 rounded-md shadow-lg">
                 <div className='md:flex md:gap-1 md:px-20 md:pt-20  md:items-center'>
                <h1><SchoolIcon sx={{fontSize: { xs: 30, md: 70 }}}/></h1>  
                <h1 className="text-black text-lg md:text-2xl font-bold"> Kuvempu University, Sringeri  (2020-2023) </h1>
            </div>
            <div className='md:pl-30 md:mt-10 md:flex md:flex-col md:gap-10'>
                <h1 className='text-lg md:text-2xl'>  Bachelor of Commerce (B.Com)</h1>
                <h1 className='text-lg md:text-2xl'><b>  Percentage:</b>82.97%</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
