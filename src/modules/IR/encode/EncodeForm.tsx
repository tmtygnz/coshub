import React, { useEffect, useState } from "react";
import { Defects, defectSchema } from "../../../types/defects";
import { fetchNecessaryData } from "./EncodeDataHandler";
import { Input } from "../../../components/Input";
import { Combobox } from "../../../components/Combobox";
import { DateInput } from "../../../components/DateInput";
import { Button } from "../../../components/Button";
import { useAtom } from "jotai";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";
import { formDataAtom, toEncodeAtom } from "./EncodeAtoms";
import { Checkbox } from "../../../components/checkbox";

export const EncodeForm = () => {
	const [formData, setFormData] = useAtom(formDataAtom);

	const auth = useAuth0();

	const [batchName, setBatchName] = useState<string>("");
	const [productSelected, setProductSelected] = useState<number>(0);
	const [packagingSelected, setPackagingSelected] = useState<number>(0);
	const [quantity, setQuantity] = useState<number>(0);
	const [defectTypeSelected, setDefectTypeSelected] = useState<number | null>(
		0
	);
	const [areaSelected, setSelectedArea] = useState<number>(0);
	const [date, setDate] = useState<Date>(new Date());
	const [defectDescription, setDefectDescription] = useState<string>("");

	const [hasCustomDefect, setHasCustomDefect] = useState<boolean>(false);

	const [toEncode, setToEncode] = useAtom(toEncodeAtom);

	useEffect(() => {
		const fetch = async () => {
			const results = await fetchNecessaryData();
			setFormData(results);
		};

		fetch();
	}, []);

	const addToList = async () => {
		const newDefect: Defects = {
			app_version: 3,
			product: productSelected,
			packaging: packagingSelected,
			quantity: quantity,
			defPrebTp: defectTypeSelected,
			placeid: areaSelected,
			date: date,
			dateEncoded: new Date(),
			encodedBy: auth.user?.name || "",
			batch: batchName,
			defectDescription: defectDescription,
			isDev: import.meta.env.DEV,
		};

		const result = await defectSchema.safeParseAsync(newDefect);
		if (!result.success) {
			result.error.issues.forEach((value) => toast.error(value.message));
		} else {
			setToEncode([...toEncode, newDefect]);
		}
		console.log(toEncode);
	};

	useEffect(() => {
		setDefectDescription(
			defectTypeSelected != 0 && defectTypeSelected != null
				? formData.defectTypes.find(
						(defect) => (defect.id = defectTypeSelected)
				  )!.name!
				: ""
		);
	}, [defectTypeSelected]);

	return (
		<div className="h-full w-96 shrink-0 border rounded-md flex flex-col justify-between p-3">
			<div className="flex flex-col gap-3">
				<h2 className="font-bold text-base">Defect Encode Form</h2>
				<div className="flex gap-3 flex-col">
					{formData && (
						<>
							<div className="w-full flex flex-col gap-1">
								<span className="bg-opacity-50 font-bold text-xs">
									BATCH NAME
								</span>
								<Input
									value={batchName}
									onChange={(ev) => setBatchName(ev.currentTarget.value)}
								/>
							</div>
							<div className="w-full flex flex-col gap-1">
								<span className="bg-opacity-50 font-bold text-xs">
									PRODUCTS
								</span>
								<Combobox
									data={formData.products.map((a) => ({
										value: a.id!,
										label: a.productName!,
									}))}
									selected={productSelected}
									setSelectedData={setProductSelected}
								/>
							</div>
							<div className="w-full flex flex-col gap-1">
								<span className="bg-opacity-50 font-bold text-xs">
									PACKAGING
								</span>
								<Combobox
									data={formData.packaging.map((a) => ({
										value: a.id,
										label: a.name!,
									}))}
									selected={packagingSelected}
									setSelectedData={setPackagingSelected}
								/>
							</div>
							<div className="w-full flex flex-col gap-1">
								<span className="bg-opacity-50 font-bold text-xs">
									QUANTITY
								</span>
								<Input
									type="number"
									value={quantity}
									onChange={(ev) =>
										setQuantity(parseInt(ev.currentTarget.value))
									}
								/>
							</div>
							<div className="w-full flex flex-col gap-1">
								<span className="bg-opacity-50 font-bold text-xs">DATE</span>
								<DateInput selected={date} onChange={(date) => setDate(date)} />
							</div>
							<div className="w-full flex flex-col gap-1">
								<span className="bg-opacity-50 font-bold text-xs">
									DEFECT TYPE
								</span>
								<Combobox
									data={formData.defectTypes.map((a) => ({
										value: a.id,
										label: a.name!,
									}))}
									disabled={hasCustomDefect}
									selected={defectTypeSelected!}
									setSelectedData={setDefectTypeSelected}
								/>
							</div>
							<div className="w-full flex flex-col gap-1">
								<span className="bg-opacity-50 font-bold text-xs">AREA</span>
								<Combobox
									data={formData.places.map((a) => ({
										value: a.id,
										label: a.areaName!,
									}))}
									selected={areaSelected}
									setSelectedData={setSelectedArea}
								/>
							</div>
						</>
					)}
					<Checkbox
						checked={hasCustomDefect}
						onCheckedChange={() => {
							setDefectTypeSelected(null);
							setDefectDescription("");
							setHasCustomDefect(!hasCustomDefect);
						}}
					/>
					{hasCustomDefect && (
						<textarea
							className="p-2 h-full border rounded-md"
							value={defectDescription}
							onChange={(ev) => setDefectDescription(ev.currentTarget.value)}
						/>
					)}
				</div>
			</div>
			<Button onClick={addToList} >Add to List</Button>
		</div>
	);
};
