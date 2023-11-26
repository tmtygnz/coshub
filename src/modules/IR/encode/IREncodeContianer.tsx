import { EncodeForm } from "./EncodeForm";
import { ToEncodeList } from "./ToEncodeList";

export const IREncodeContainer = () => {
	return (
		<div className="px-5 py-5 flex gap-2 h-full w-full flex-col ">
			<h1 className="text-xl font-bold">Encode</h1>
			<div className="flex h-full gap-2">
				<EncodeForm />
				<ToEncodeList />
			</div>
		</div>
	);
};
