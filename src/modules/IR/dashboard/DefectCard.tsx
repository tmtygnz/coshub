import dayjs from "dayjs";
import { ReadableDefects } from "../../../types/defects";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	Trigger,
} from "../../../components/Dialog";
import { Button } from "../../../components/Button";
import { toast } from "sonner";
import { supabase } from "../../../lib/supabase";

export const DefectCard = ({ data }: { data: ReadableDefects }) => {
	const deleteDefect = async () => {
		const { error } = await supabase
			.from("defects")
			.delete()
			.eq("id", data?.id!);
		if (error) toast.error(error.message);
		else toast.success("Defect Deleted");
	};

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
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Defect Detailed View</DialogTitle>
				</DialogHeader>
				<div className="font-mono w-full flex px-4 py-2 bg-neutral-50 justify-between">
					<span>Batch: {data.batch}</span>
					<span>DBRef: {data.id}</span>
				</div>
				<div className="p-4 w-full text-sm">
					<div className="grid-cols-1 grid-rows-5 grid">
						<div className="bg-neutral-200 grid-cols-2 grid-rows-1 grid p-2 rounded">
							<span>Key</span>
							<span>Value</span>
						</div>
						<div className=" grid-cols-2 grid-rows-1 grid p-2">
							<span>AppVer</span>
							<span>{data.app_version}</span>
						</div>
						<div className=" grid-cols-2 grid-rows-1 grid p-2">
							<span>Product</span>
							<span>{data.product.productName}</span>
						</div>
						<div className=" grid-cols-2 grid-rows-1 grid p-2">
							<span>Defect</span>
							<span>{data.defectDescription}</span>
						</div>
						<div className=" grid-cols-2 grid-rows-1 grid p-2">
							<span>Packaging</span>
							<span>{data.packaging.name}</span>
						</div>
						<div className=" grid-cols-2 grid-rows-1 grid p-2">
							<span>Area</span>
							<span>{data.places.areaName}</span>
						</div>
						<div className=" grid-cols-2 grid-rows-1 grid p-2">
							<span>Quantity</span>
							<span>{data.quantity}</span>
						</div>
						<div className=" grid-cols-2 grid-rows-1 grid p-2">
							<span>Encoded by</span>
							<span>{data.encodedBy}</span>
						</div>
					</div>
					<DialogClose>
						<Button
							onClick={() =>
								toast("Do you really want to delete this defect?", {
									action: {
										label: "Yes! No Regrets!",
										onClick: async () => {
											await deleteDefect();
										},
									},
								})
							}
						>
							Hello
						</Button>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	);
};
