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
        <main>{children}</main>
      </body>
    </html>
  );
}
