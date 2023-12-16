import dayjs from "dayjs";
import { Dialog, DialogContent, Trigger } from "../../../components/Dialog";
import { Defects } from "../../../types/defects";
import { useAtom } from "jotai";
import { formDataAtom } from "./EncodeAtoms";

export const ToEncodeCard = ({ data }: { data: Defects }) => {
	const [formData] = useAtom(formDataAtom);

	return (
		<Dialog>
			<Trigger>
				<div className="border-b py-4 px-3 grid grid-cols-7 grid-rows-1 p-2 font-medium text-left hover:bg-neutral-50 transition duration-75">
					<span className="col-span-2 ">
						{
							formData.products.find((keys) => data.product == keys.id)
								?.productName
						}
					</span>
					<span className="whitespace-nowrap text-ellipsis">
						{data.defectDescription}
					</span>
					<span>{data.quantity}</span>
					<span>
						{formData.packaging.find((keys) => data.packaging == keys.id)?.name}
					</span>
					<span>{dayjs(data.date).format("MM/DD/YY")}</span>
					<span>
						{formData.places.find((keys) => data.placeid == keys.id)?.areaName}
					</span>
				</div>
			</Trigger>
			<DialogContent>Hello World</DialogContent>
		</Dialog>
	);
};
