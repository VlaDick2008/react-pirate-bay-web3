import Button from "./ui/Button";

export default function Top() {
	return (
		<div className="flex justify-between items-center w-full">
			<img src="/logo.png" alt="logo" />
			<Button>Connect wallet</Button>
		</div>
	);
}
