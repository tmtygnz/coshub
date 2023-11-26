import { useAtom } from "jotai";
import { toEncodeAtom } from "./EncodeAtoms";
import { ToEncodeCard } from "./ToEncodeCard";

export const ToEncodeList = () => {
	const [toEncode] = useAtom(toEncodeAtom);
	return (
		<div className="h-full w-full rounded-md border shrink">
			{toEncode.length == 0 ? (
				<div className="h-full w-full flex items-center justify-center">
					<p className="font-bold opacity-50 text-lg">
						🥺 I'm feeling lonely here.
					</p>
				</div>
			) : (
				<div className="h-full w-full p-3">
					<div className="grid grid-cols-7 grid-rows-1 p-2 bg-neutral-300 rounded-md text-neutral-600  text-left">
						<span className="col-span-2">Product with Defect</span>
						<span>Description</span>
						<span>Quantity</span>
						<span>Packaging Type</span>
						<span>Date</span>
						<span>Encoded by</span>
					</div>
					<div className="flex flex-col">
						{toEncode.map((data, i) => (
							<ToEncodeCard data={data} key={i} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};
