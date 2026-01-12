export default function Premium() {
    return (
        <>
            <div className="bg-[#020517]"></div>

            <div className="overflow-x-auto">
                <table className="table table-zebra text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Features</th>
                        <th>Basic</th>
                        <th className="bg-[#5048e5]">Premium</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td>24x7 Chat</td>
                        <td>&#10006;</td>
                        <td className="border-x-2 border-x-[#5048e5]">&#10004;</td>
                    </tr>
                    {/*Call Listeners*/}
                    <tr>

                        <td>Call the listeners</td>
                        <td>&#10006;</td>
                        <td className="border-x-2 border-x-[#5048e5]">&#10004;</td>
                    </tr>
                    {/* row 2 */}


                    <tr>

                        <td>Prioritized for mentors</td>
                        <td>&#10006;</td>
                        <td className="border-x-2 border-x-[#5048e5]">&#10004;</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td className="flex justify-center">
                            <div className="rounded-md bg-[#0f1729] duration-300 ease-in hover:scale-101 hover:shadow-[#5048e5]/25 hover:shadow-lg hover:bg-[#5048e5] py-2 w-40">
                                Start for free
                            </div>
                        </td>
                        <td className="border-x-2 border-b-2 justify-center border-x-[#5048e5] border-b-[#5048e5]">
                            <div className="rounded-md duration-300 ease-in hover:scale-101 bg-[#0f1729] hover:shadow-[#5048e5]/25 hover:shadow-lg hover:bg-[#5048e5] py-2 w-40">
                                Buy Now</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>



        </>


    )
}