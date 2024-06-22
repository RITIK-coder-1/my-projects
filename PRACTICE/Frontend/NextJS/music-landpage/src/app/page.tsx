import HeroSection from "@/components/HeroSection";

export default function Home() {
  return(
    <>
    <main className="border border-solid border-red-900 h-full felx flex-col justify-center items-center">
        <section className="border border-solid border-red-900  h-auto md:h-[40rem] flex flex-col justify-center items-center gap-5">
        <HeroSection />
        </section>
    </main>
    </>
  )
}
