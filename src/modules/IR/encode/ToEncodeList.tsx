import { useAtom } from "jotai";
import { toEncodeAtom } from "./EncodeAtoms";
import { ToEncodeCard } from "./ToEncodeCard";
import { Button } from "../../../components/Button";
import { supabase } from "../../../lib/supabase";
import { toast } from "sonner";

export const ToEncodeList = () => {
	const [toEncode, setToEncode] = useAtom(toEncodeAtom);
	const encodeDefectsToDB = async () => {
		const { data, error } = await supabase.from("defects").insert(toEncode);
		if (error) toast.error(`SPB ERR(${error.code}) ${error.message}`);
		else {
			toast.success("Defects encoded");
			setToEncode([]);
		}
	};
	return (
		<div className="h-full w-full rounded-md border shrink relative">
			{toEncode.length == 0 ? (
				<div className="h-full w-full flex items-center justify-center">
					<p className="font-bold opacity-50 text-lg">
						🥺 I'm feeling lonely here.
					</p>
				</div>
			) : (
				<>
					<div className="absolute bottom-3 left-3">
						<Button onClick={() => encodeDefectsToDB()}>Submit</Button>
					</div>
					<div className="h-full w-full p-3">
						<div className="grid grid-cols-7 grid-rows-1 p-2 bg-neutral-300 rounded-md text-neutral-600  text-left">
							<span className="col-span-2">Product with Defect</span>
							<span>Description</span>
							<span>Quantity</span>
							<span>Packaging Type</span>
							<span>Date</span>
							<span>Encoded by</span>
						</div>
						<ul className="flex flex-col">
							{toEncode.map((data, i) => (
								<ToEncodeCard data={data} key={i} />
							))}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};
