import Image from "next/image";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (

    <>

      <div className="relative mt-20 w-full">

        <Image
          src="/images/image1.svg"
          alt="logo"
          width={5000}
          height={100}
        />
        <div className=" w-full absolute inset-y-0 flex flex-col justify-center items-center">
          <div className="max-container padding-container flex flex-row justify-end gap-28" >
            <p className="title">Who are we?</p>
            <p className="text">At Test, we are a mental health services provider dedicated to supporting individuals during challenging times. Founded in 2021, in the wake of the post-COVID-19 pandemic, we recognized the increasing prevalence of depression and the importance of accessible mental health care. We are committed to offering convenient and personalized services in the comfort of your home.</p>
          </div>
        </div>

        <Image
          src="/images/character1.svg"
          alt="logo"
          width={260}
          height={400}
          className="absolute  end-0 bottom-[-150px] hidden lg:block"
        />

      </div>

      <div className="max-container padding-container space-y-14 mt-16">
        <p className="text-body pr-36">Our mission is to empower individuals to prioritize their mental well-being by providing accessible and high-quality mental health services. We envision a world where everyone has the opportunity to achieve mental wellness and lead fulfilling lives.</p>
        <p className="text-body">Test offers a comprehensive suite of mental health services tailored to meet your individual needs. Our team of experienced and compassionate mental health professionals provides therapy, counseling, and support for a variety of concerns, including depression, anxiety, and substance abuse. We combine evidence-based practices with a client-centered approach to ensure personalized care that promotes growth, healing, and resilience.</p>
      </div>

      <div className="max-container padding-container flexCenter mt-16">
        <Image
          src="/images/character2.svg"
          alt="logo"
          width={130}
          height={400}
        />

        <div className="space-y-10">
          <p className="text-body">We understand the importance of privacy and confidentiality in the therapeutic process. At Bimo Health, we adhere to strict privacy standards and follow legal and ethical guidelines to safeguard your personal information. Your privacy is our utmost priority, ensuring a safe and confidential space for you to share and grow.</p>
          <p className="text-body">Our team consists of licensed therapists and counselors who are passionate about mental health and have extensive experience in their respective fields. They possess diverse backgrounds and specialized training in various therapeutic modalities. Our professionals are committed to providing a safe and supportive environment where you can explore your thoughts and emotions, and work towards positive change.</p>
        </div>
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
            <div className="space-y-5">
              <p className="title">Our Purpose</p>
              <p className="text">At Bimo Health, our purpose is deeply rooted in our belief that solutions created to serve others, especially those who are underserved, are always the best solutions. We are driven by the commitment to make a positive impact on individuals lives, ensuring that everyone has access to the mental health care they deserve.</p>
            </div>

            <Image
              src="/images/character3.svg"
              alt="logo"
              width={260}
              height={400}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-container padding-container">
        <p className="text-body">
          We understand that seeking care for mental health concerns can be challenging, with various barriers that can prevent individuals from receiving the support they need. That s why we are dedicated to removing those barriers and making mental health care more accessible to all. Whether it s geographical limitations, financial constraints, or stigmas surrounding mental health, we strive to bridge the gaps and create a safe and inclusive space where individuals can seek help without hesitation or obstacles.
          Equally important to us is easing the burdens for those delivering care. We recognize the immense dedication and compassion required from mental health professionals who work tirelessly to support individuals on their journey to recovery. By leveraging technology and innovative solutions, we aim to streamline and enhance the mental health care delivery process, empowering our dedicated professionals to focus on what they do best: helping individuals find their way back to themselves.
          We firmly believe that the right technology can transform lives. By harnessing the power of digital tools, we can extend our reach and impact, ensuring that individuals can access mental health resources anytime, anywhere. Whether through online counseling, teletherapy options, or user-friendly platforms, we embrace technology as a means to enhance the lives of people who are seeking a way back to themselves.
          Our purpose is to create a harmonious connection between compassionate care, cutting-edge technology, and the individuals we serve. We are driven by the conviction that everyone deserves the opportunity to prioritize their mental well-being and discover a path to inner peace and fulfillment. At Bimo Health, we are dedicated to making a meaningful difference in the lives of those who need it most, one step at a time.
        </p>
        <p className="text-end underline text-2xl text-white ">Show Less</p>
      </div>

     <Footer/>
    </>

  );
}
