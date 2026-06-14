import Intro from "@/components/Intro";
import CountHome from "@/components/CountHome";
import FirendsSection from "@/components/FriendsSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Intro></Intro>
        <CountHome></CountHome>
        <FirendsSection></FirendsSection>
      </main>
    </div>
  );
}
