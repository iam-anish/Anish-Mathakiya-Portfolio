import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'nitinranganath.me',
  //   href: 'https://nitinranganath.me',
  // },
  {
    social: 'email',
    link: 'anumathakiya073@gmail.com',
    href: 'mailto:anumathakiya073@gmail.com',
  },
  {
    social: 'github',
    link: 'iam-anish',
    href: 'https://github.com/iam-anish',
  },
  {
    social: 'linkedin',
    link: 'anishmathakiya',
    href: 'https://www.linkedin.com/in/anishmathakiya/',
  },
  {
    social: 'twitter',
    link: 'anish_mathakiya',
    href: 'https://www.twitter.com/anish_mathakiya',
  },
  {
    social: 'instagram',
    link: 'anish_mathakiya_073',
    href: 'https://www.instagram.com/anish_mathakiya_073',
  },
  // {
  //   social: 'polywork',
  //   link: 'nitinranganath',
  //   href: 'https://www.polywork.com/nitinranganath',
  // },
  {
    social: 'telegram',
    link: 'anish073',
    href: 'https://t.me/anish073',
  },
  // {
  //   social: 'codepen',
  //   link: 'nitinranganath',
  //   href: 'https://codepen.io/itsnitinr',
  // },
  // {
  //   social: 'codesandbox',
  //   link: 'itsnitinr',
  //   href: 'https://codesandbox.io/u/itsnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
