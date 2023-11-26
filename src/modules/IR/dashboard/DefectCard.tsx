import dayjs from "dayjs";
import { ReadableDefects } from "../../../types/defects";
import { Dialog, DialogContent, Trigger } from "../../../components/Dialog";

export const DefectCard = ({ data }: { data: ReadableDefects }) => {
	return (
		<Dialog>
			<Trigger>
				<div className="border-b py-4 px-3 grid grid-cols-7 grid-rows-1 p-2 font-medium text-left hover:bg-neutral-50 transition duration-75">
					<span className="col-span-2 ">{data.product.productName}</span>
					<span className="whitespace-nowrap text-ellipsis">
						{data.defectDescription}
					</span>
					<span>{data.quantity}</span>
					<span>{data.packaging.name}</span>
					<span>{dayjs(data.date).format("MM/DD/YY")}</span>
					<span>{data.encodedBy}</span>
				</div>
			</Trigger>
			<DialogContent>Hello World</DialogContent>
		</Dialog>
	);
};
