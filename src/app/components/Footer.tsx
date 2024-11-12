import Image from "next/image";
import styles from "./components.module.css";

const links = [
  {
    name: 'npm',
    url: 'https://www.npmjs.com/package/mui-tiptap-editor',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tiavina-mika/mui-tiptap-editor',
  }
];

const Footer = () => {
  return (
      <footer className={styles.footer}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={`/${link.name.toLowerCase()}.svg`}
              alt={`${link.name} icon`}
              width={16}
              height={16}
            />
            {link.name}
          </a>
        ))}
      </footer>
  );
}


export default Footer;