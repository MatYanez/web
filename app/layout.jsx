import "./../styles/globals.scss";
import IOSNavbar from "./components/IOSNavbar";

export const metadata = {
  title: "Mi Plataforma Web · iOS Style",
  description: "Plataforma interna para gestionar proyectos web y documentación."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <IOSNavbar />
        <main className="ios-main">
          {children}
        </main>
      </body>
    </html>
  );
}
