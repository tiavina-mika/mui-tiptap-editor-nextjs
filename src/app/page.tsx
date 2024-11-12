import styles from "./page.module.css";
import ThemeProvider from "./components/ThemeProvider";
import MuiTiptapEditor from "./components/MuiTiptapEditor";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const meta: Metadata = {
  title: "mui-tiptap-editor with Next.js 14/15",
  description: "A customizable and easy to use Tiptap styled WYSIWYG rich text editor, using Material UI.",
};

const HomePage = () => {
  return (
    <ThemeProvider>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>mui-tiptap-editor with Next.js 14/15</h1>
          <div>
            <MuiTiptapEditor />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}


export default HomePage;