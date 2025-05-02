import { useSelectModalStore } from "../store/store";
import Button from "./ui/Button";

export default function Form() {
	const { isOpen, onOpen, onClose } = useSelectModalStore((state) => state);

	const handleModalOpen = () => (isOpen ? onClose() : onOpen());

	return (
		<form className="bg-primary border-3 rounded-xl px-5 py-8 flex flex-col gap-4 min-w-96">
			<label htmlFor="from" className="font-bold text-4xl">
				From
			</label>
			<Button variant="select" onClick={handleModalOpen}>
				Select asset
			</Button>
			<label htmlFor="from" className="font-bold text-4xl">
				To
			</label>
			<Button variant="select" onClick={handleModalOpen}>
				Select asset
			</Button>
		</form>
	);
}
