import dayjs from "dayjs";
import { NestedDefects } from "../../../types/defects";

export const DefectCard = ({ data }: { data: NestedDefects }) => {
  return (
    <div className="border-b py-4 px-3 grid grid-cols-7 grid-rows-1 p-2 font-medium">
      <span className="col-span-2 ">{data.products.productName}</span>
      <span>{data.defectDescription}</span>
      <span>{data.quantity}</span>
      <span>{data.packaging_type.name}</span>
      <span>{dayjs(data.date).format("MM/DD/YY")}</span>
      <span>{data.encodedBy}</span>
    </div>
  );
};
