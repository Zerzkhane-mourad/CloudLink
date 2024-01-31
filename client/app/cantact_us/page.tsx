import Image from "next/image";
import Footer from "../components/Footer";

export default function CantacttUs() {
    return (

        <>

            <div className="h-[90vh] max-container padding-container  flex flex-col justify-center items-center" >
                <div className="w-full">
                    <div className="mx-auto max-w-screen-md w-full">
                        <form className="space-y-5">
                            <div>
                                <label className="text-white font-bold">Full name</label>
                                <input type="text" className="shadow-sm bg-bleu-100 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5 " placeholder="Full name" />
                            </div>
                            <div>
                                <label className="text-white font-bold">Email</label>
                                <input type="email" className="block p-3 w-full text-sm text-white bg-bleu-100 rounded-lg border border-white shadow-sm focus:ring-primary-500 " placeholder="Johnmayer@gmail.com" />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="text-white font-bold">Message</label>
                                <textarea id="message" className="block p-9 w-full text-sm text-white bg-bleu-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 " placeholder="...."></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="py-3 bg-green-700 px-5 text-sm font-medium text-center text-white rounded-lg">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <Footer />
        </>

    );
}
