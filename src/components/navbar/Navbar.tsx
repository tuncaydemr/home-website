
const Navbar = () => {
   return (
      <div className="flex justify-between items-center my-[40px] mx-[120px] text-white">
         <div className="font-Outfit text-[42px] font-[500]">Logo</div>
         <ul className="flex items-center text-[18px] gap-10">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="border rounded-[50px] py-2 px-8 bg-white hover:bg-slate-200 text-[#262626]">Contact</li>
         </ul>
      </div>
   )
}

export default Navbar
