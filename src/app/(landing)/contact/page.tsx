'use client'
import Welcome from '@/app/assets/investment.jpg'
import Image from 'next/image';
import ContactForm from "@/app/(landing)/contact/_components/contact_form";
export default  function ContactFormPage() {
    return <div className="grid lg:grid-cols-2  bg-stone-50 gap-4 p-4 lg:p-8 place-items-center">
        <ContactForm/>
        <section className="h-full w-full p-4">
            <div className=" relative h-80 lg:h-full w-full">
                <div className=" absolute top-0 bg-black translate-y-4 left-0 w-full h-full"/>
                <Image
                    src={Welcome}
                    alt="what we do"
                    width={2000}
                    height={2000}
                    className="absolute top-0 -translate-x-4 left-0 object-cover object-top w-full h-full"
                />
            </div>
        </section>
    </div>
}