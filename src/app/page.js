import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Cards from "@/components/Cards/Cards";


export default async function Home() {
  const session = await auth();

  console.log;

  if (!session?.user) {
    return redirect("/auth/signin");
  }

  // if(!session.user?.subscription){
  //   return redirect('/');
  // }

  return (
    <>
      <Cards />
    </>
  );
}
