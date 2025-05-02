import Bottom from "./components/Bottom";
import CurencyModal from "./components/CurencyModal";
import Form from "./components/Form";
import Top from "./components/Top";
import { cn } from "./lib/util";
import { useSelectModalStore } from "./store/store";

export default function App() {
	const isOpen = useSelectModalStore((state) => state.isOpen);

	return (
		<main className="font-firs h-screen flex flex-col items-center justify-between bg-primary bg-no-repeat bg-center overflow-hidden">
			<div
				className={cn(
					"transition-all flex flex-col h-full items-center justify-between w-full p-5 max-w-[1400px] z-10 bg-[url('/bg.png')] bg-no-repeat bg-center",
					isOpen && "blur-sm",
				)}
			>
				<Top />
				<Form />
				<Bottom />
			</div>
			<CurencyModal />
		</main>
	);
}
