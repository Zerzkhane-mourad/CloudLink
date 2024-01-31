import Image from "next/image";
import { IMAGE_URL } from "../constants";
import Footer from "../components/Footer";

export default function Home() {
  return (

    <>

      <div className="max-container padding-container flex items-center gap-16 mt-20">
        <div className="space-y-5" >
          <p className="title">What is Mental Health?</p>
          <p className="text-body">Mental health encompasses the overall well-being of an individual s emotional and psychological state. In South Africa, mental health disorders are prevalent, with the South African Stress and Health (SASH) study reporting that around 30% of the population will experience a mental disorder in their lifetime.</p>
        </div>

        <Image
          src="/images/character5.svg"
          alt="logo"
          width={500}
          height={200}
        />
      </div>

      <div className="max-container padding-container space-y-14 mt-10">
        <p className="text-body ">Additionally, the South African Depression and Anxiety Group (SADAG) estimates that approximately 1 in 6 South Africans suffer from anxiety, depression, or substance abuse disorders. The suicide rate in South Africa, according to the World Health Organization (WHO) data for 2016, was approximately 13.8 per 100,000 population. Unfortunately, mental health stigma persists, as highlighted by a study conducted by the Human Sciences Research Council (HSRC) in 2008, revealing that 78% of South Africans believe individuals with mental health problems are unfit for work. Access to mental health services remains a challenge, with the SASH study indicating that only 15% of South Africans with a mental health disorder received treatment in the year preceding the study. Socioeconomic factors such as financial stress and unemployment significantly contribute to mental health problems in the country, according to the South African Depression and Anxiety Group (SADAG).</p>
      </div>


      <div className="relative mt-16 w-full">
        <Image
          src="/images/image1.svg"
          alt="logo"
          width={5000}
          height={100}
        />
        <div className="w-full absolute inset-y-0 flex flex-col justify-center items-center">
          <div className="max-container padding-container flexCenter  gap-20 " >
            <div className="flex flex-col justify-center items-center space-y-4">
              <p className="text-5xl text-white">Handling Mental Health</p>
              <Image
                src="/images/char6.svg"
                alt="logo"
                width={600}
                height={400}
                className="hidden lg:block"
              />
            </div>

            <div className="space-y-8">
              <p className="text-4xl text-white">How can I help myself?</p>
              <div className="space-y-3">
                <p className="text">i. Try to be active and exercise.</p>
                <p className="text">ii. Break large tasks into small ones.</p>
                <p className="text">iii. Set priorities.</p>
                <p className="text">iv. Spend time with friends and family.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-container padding-container flexCenter  gap-20 mt-16 " >

        <div className="space-y-8">
          <p className="text-4xl text-white">How can I help others?</p>
          <div className="space-y-3">
            <p className="text">i. Offer support and patience.</p>
            <p className="text">ii. Invite him/her to outdoor activities e.g. walks.</p>
            <p className="text">iii. Remind him about his medication frequently.</p>
            <p className="text">iv. Encourage them that with time and treatment, depression will lift.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Image
            src="/images/char7.svg"
            alt="logo"
            width={600}
            height={400}
            className="hidden lg:block"
          />
        </div>

      </div>
      <Footer />
    </>

  );
}
