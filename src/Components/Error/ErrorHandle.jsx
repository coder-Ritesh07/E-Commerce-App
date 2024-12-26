

function ErroHandle(){
    return(
        // This is the Error Section When another link is come it's render
        <div className="bg-[#c5d4e8d3] h-screen flex justify-center items-center">
            <div className="bg-black rounded-md sm:p-10 sm:w-[450px] w-[250px]">
                <h1 className="sm:text-3xl font-bold text-red-700">Opps!..</h1>
                <h2 className="sm:text-3xl font-bold text-red-700">Something went Wrong<span className="sm:text-4xl font-bold text-green-700">"404 NOT FOUND"</span></h2>
                <h3 className="sm:text-3xl font-bold text-red-700">Please Enter Valid Url Because "URL" is Not Match</h3>
            </div>

        </div>
    )
}
export default ErroHandle;