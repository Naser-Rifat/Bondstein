import React from 'react'

const Navbar = () => {
  return (
    <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
    {/* <!-- logo --> */}
    <div className="inline-flex">
        <a className="_o6689fn" href="/"
            ><div className="hidden md:block">
              
            </div>
            <div className="block md:hidden">
              
            </div>
        </a>
    </div>

    {/* <!-- end logo --> */}

    {/* <!-- search bar --> */}
    <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
                <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1" type="button">
                    <div className="block flex-grow flex-shrink overflow-hidden">Start your search</div>
                    <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                      
                    </div>
                </button>
            </div>
        </div>
    </div>
    {/* <!-- end search bar --> */}

    {/* <!-- login --> */}
    <div className="flex-initial">
      <div className="flex justify-end items-center relative">
       
        <div className="flex mr-4 items-center">
          <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
          </a>
          <div className="block relative">
            <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
              <div className="flex items-center h-5">
                <div className="_xpkakx">
                
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="block">
            <div className="inline relative">
                <button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                    <div className="pl-1">
                       
                    </div>

                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                       
                    </div>
                </button>
            </div>
        </div>
      </div>
    </div>
    {/* <!-- end login --> */}
</nav>
  )
}

export default Navbar
