type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mb-20 sm:mb-10 px-4  text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Shreyas Vaidya. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
