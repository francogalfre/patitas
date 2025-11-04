import { fontVariables } from "@/styles/font";
import "@/app/globals.css";

interface PatitasAuthLayoutProps extends React.PropsWithChildren {}

export default function PatitasAuthLayout(props: PatitasAuthLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={`${fontVariables} antialiased min-h-screen overflow-x-hidden`}
      >
        <div className="absolute -z-10 inset-0 h-full w-full bg-white">
          <div className="absolute opacity-70 inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
