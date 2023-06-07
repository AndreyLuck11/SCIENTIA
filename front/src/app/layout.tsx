import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "../styles/index.scss"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
		<body className={inter.className}>
			<Header/>
			{children}
		</body>
		</html>
	);
}
