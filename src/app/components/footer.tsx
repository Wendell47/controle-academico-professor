import Link from "next/link";
import Container from "./Container";

export default function Footer() {
	return (
		<footer className="bg-blue-800 text-white py-4 mt-8 text-center">
			<Container>
				<span className="text-white/50 text-sm">
					Copyright © 1997-2025 UNIP - Universidade Paulista. Todos os direitos
					reservados. {}
					<Link
						className="text-white"
						href="https://unip.br/universidade/politica-privacidade.aspx"
					>
						Política de Privacidade
					</Link>
				</span>
			</Container>
		</footer>
	);
}
