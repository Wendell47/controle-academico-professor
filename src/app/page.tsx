import Image from "next/image";
import Footer from "./components/footer";
import Input from "./components/input";
import Container from "./components/Container";
import Link from "next/link";
import Button from "./components/button";

export default function Home() {
	return (
		<main className="flex flex-auto  flex-col bg-[url('/bg-login.webp')] bg-cover bg-no-repeat bg-center">
			<Container className="flex-1 flex items-center">
				<div className="flex w-full gap-3 items-center justify-center *:flex-auto  z-10">
					<div className="flex justify-center  max-sm:absolute max-sm:opacity-60 max-sm:-z-10">
						<Image
							src="/login-teacher.webp"
							alt="teacher"
							width={400}
							height={400}
							quality={100}
						/>
					</div>
					<div className="px-24 max-lg:px-5 max-sm:px-0 max-sm pt-8">
						<form className="flex flex-col gap-10 w-full items-center">
							<img src="/logo-unip.svg" alt="logo" className="w-1/3" />

							<div className="text-center">
								<h2>Sistema de controle Acadêmico</h2>
								<h1 className="text-3xl font-bold">Bem-vindo Professor</h1>
							</div>
							<div className="flex flex-col gap-5 w-full">
								<Input
									label="Código Identificador"
									placeholder="1234"
									type="text"
								/>
								<Input label="Senha" placeholder="•••••••" type="password" />
								<div className="flex justify-between">
									<div className="flex gap-3">
										<input
											id="connect"
											type="checkbox"
											className="focus:ring-2 focus:ring-blue-500"
										/>
										<label htmlFor="connect" className="text-sm">
											Manter Conectado
										</label>
									</div>
									<Link href="#" className="text-sm">
										Esqueceu a Senha?
									</Link>
								</div>
							</div>
							<Button title="Entrar" />
						</form>
					</div>
				</div>
			</Container>
			<Footer />
		</main>
	);
}
