import swanLogo from '../../assets/sponsors-logo/swan-logo.svg';
import nodalViewLogo from '../../assets/sponsors-logo/nodal-view-logo.svg';
import juneLogo from '../../assets/sponsors-logo/june-logo.svg';
import doptLogo from '../../assets/sponsors-logo/dopt-logo.svg';
import '../../styles/sections.css'


export function SponsorSection(){
    return (
        <>
            <div className='px-8 max-sm:px-4'>
                <div className="flex justify-center pt-7 pb-1 mx-auto max-w-[1276.8px]">
                    <div className="sponsor-section-container w-full flex flex-col items-center gap-16 pb-[68px] max-sm:gap-[53px]"
                        style={{
                            borderBottom: "2px solid #0B0B20"
                        }}
                    >
                        <p className='text-white text-center text-2xl max-sm:text-[20px]'>Loved by product folks at</p>
                        <div className="flex justify-center items-center gap-[92px] max-md:max-w-[550px] max-md:w-full max-md:gap-0 max-md:justify-between max-sm:flex-wrap max-sm:justify-center max-sm:max-w-[328px] max-sm:gap-x-[92px] max-sm:gap-y-[50px]">
                            <img src={swanLogo} alt="" />
                            <img src={nodalViewLogo} alt="" />
                            <img src={juneLogo} alt="" />
                            <img src={doptLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}