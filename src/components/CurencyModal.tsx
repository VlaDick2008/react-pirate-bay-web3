import { useSelectModalStore } from "../store/store";
import Button from "./ui/Button";

export default function CurencyModal() {
	const { isOpen, onOpen, onClose } = useSelectModalStore((state) => state);

	if (!isOpen) return null;

	return (
		<div
			className="fixed flex flex-col items-center justify-center z-20 w-full h-full"
			onClick={() => {
				onClose();
			}}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="border-2 rounded-xl p-5 min-w-80 bg-primary flex flex-col gap-4"
			>
				<Button variant="select" image="usdt.png">
					USDT
				</Button>
				<Button variant="select" image="usdc.png">
					USDC
				</Button>
				<Button variant="select" image="eth.png">
					ETH
				</Button>
				<Button
					onClick={() => {
						onClose();
					}}
				>
					Close
				</Button>
			</div>
		</div>
	);
}
