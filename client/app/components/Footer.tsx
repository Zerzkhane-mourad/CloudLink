import Image from "next/image"
import { IMAGE_URL } from "../constants"

const Footer = () => {
    return (
        <div className="relative mt-16 w-full">

            <Image
                src="/images/image2.svg"
                alt="logo"
                width={5000}
                height={100}
            />

            <div className="w-full absolute inset-y-0 flex flex-col justify-center items-center">
                <div className="max-container padding-container w-full flex flex-row justify-between items-end mt-16" >
                    <div className="flex justify-center items-center gap-4">
                        {
                            IMAGE_URL.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt="logo"
                                    width={35}
                                    height={35}
                                />
                            ))
                        }
                    </div>
                    <div className="">
                        <p className="text-white text-2xl">Cantact Us</p>
                        <div className="mx-auto max-w-screen-md w-full">
                            <form className="space-y-5">
                                <div className="flex items-center gap-5">
                                    <div>
                                        <input type="text" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="email" className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 " placeholder="Your Email" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <textarea id="message" className="block p-9 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 " placeholder="Your Message"></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-bleu-100 ">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer