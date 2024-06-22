import HeroSection from "@/components/HeroSection";

export default function Home() {
  return(
    <>
    <main className="h-full felx flex-col justify-center items-center">
        <section className="h-full md:h-[40rem] flex flex-col justify-center items-center gap-5">
        <HeroSection />
        </section>
    </main>
    </>
  )
}
