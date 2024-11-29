import { Button } from "@/shared/components/ui/button";
import { getPosts } from "@/shared/queries";


export const revalidate = 30;



export default async function NewsAndEvents() {
  const news =  await  getPosts()
  console.log(news)
  return (
    <section className=" bg-black  ">
      <div className="py-16 px-2 md:px-6 max-w-screen-2xl mx-auto">
        <section className="text-white">
          <h2 className=" text-4xl lg:text-6xl mb-3 font-semibold">
            News and <span className=" text-secondary">Events</span>
          </h2>
          <p className=" md:font-lg mb-4 max-w-screen-sm text-stone-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab a
            totam labore temporibus quos maiores est laboriosam ipsum asperiores
            repellendus
          </p>
        </section>
        <section className=" grid lg:grid-cols-3  py-6 gap-4">
          {/*{news.map((item) => (*/}
          {/*  <article key={item.id} className=" p-4 md:p-12 bg-secondary">*/}
          {/*    <h3 className=" font-semibold text-xl text-black mb-3">{item.title}</h3>*/}
          {/*    <p className=" text-black line-clamp-4">{item.description}</p>*/}
          {/*    <Button className=" w-full mt-6 hover:opacity-80 bg-black text-white">*/}
          {/*      Read More*/}
          {/*    </Button>*/}
          {/*  </article>*/}
          {/*))}*/}
        </section>
      </div>
    </section>
  );
}
