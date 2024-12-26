function Footer(){
    return (
      // Footer section here
        <div className="sm:h-32 min-[320px]:h-[80px] w-full bg-[#001A6E] flex justify-between p-2 items-end">
         < div id="logo">
        <span className="sm:text-[28px] min-[425px]:text-[16px] min-[425px]:font-semibold sm:font-bold text-white">Shoppy<span className="sm:text-3xl sm:font-bold bg-white text-[#001A6E] rounded p-1 min-[425px]:font-semibold min-[425px]:text-[18px]">Globe</span></span>
      </div>
      <div>
        <span className="sm:text-2xl font-bold text-white min-[425px]:text-[16px] min-[320px]:text-[14px]">All Rights Reserved</span>
      </div>
        </div>
    )
}
export default Footer;