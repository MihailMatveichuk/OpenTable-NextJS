import styles from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-blue-400 text-6xl">Hello world!</h1>
    </main>
  );
}
