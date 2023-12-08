import { useEffect, useState } from "react";
import { fetchDefects } from "./DefectListViewDataHandler";
import { DefectCard } from "./DefectCard";
import { ReadableDefects } from "../../../types/defects";
import { Input } from "../../../components/Input";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Combobox } from "../../../components/Combobox";

//! Just you and me to infinity
export const DefectListView = () => {
  const [defects, setDefects] = useState<Array<ReadableDefects>>([]);
  const [page, setPage] = useState<number>(0);
  const [defectCount, setCount] = useState<number>(0);
  const [searchBy, setSearchBy] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, count } = await fetchDefects(page, searchQuery, searchBy);
      setDefects(data);
      setCount(count!);
      console.log(count);
    };
    fetchData();
  }, [page, searchBy, searchQuery]);

  //TODO: Move react paginate to a standalone component
  return (
    <div className="flex flex-col mt-6">
      <div className="flex items-center justify-between">
        <div className="gap-2 flex">
          <Input
            className="w-64"
            value={searchQuery}
            onChange={(ev) => setSearchQuery(ev.currentTarget.value)}
          />
          <Combobox
            data={[
              { value: 0, label: "Product" },
              { value: 1, label: "Defect" },
              { value: 2, label: "Packaging" },
              { value: 3, label: "Encoder" },
            ]}
            selected={searchBy}
            setSelectedData={setSearchBy}
          />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <div className="flex h-full items-center">
              <ArrowRight size={16} />
            </div>
          }
          previousLabel={
            <div className="flex h-full items-center">
              <ArrowLeft size={16} />
            </div>
          }
          onPageChange={(ev) => {
            setPage(ev.selected);
          }}
          pageRangeDisplayed={2}
          pageCount={Math.ceil(defectCount / 10)}
          renderOnZeroPageCount={null}
          className="flex gap-2 items-center px-1 h-9 bg-neutral-100 border rounded-md "
          pageClassName=" bg-none hover:bg-white rounded h-7 w-7 items-center justify-center flex transition"
          activeClassName="bg-white border"
          breakClassName="h-7 w-7 flex items-center justify-center"
          nextClassName="h-7 w-7 flex items-center justify-center bg-orange-500 text-white rounded"
          previousClassName="h-7 w-7 flex items-center justify-center bg-orange-500 text-white rounded"
        />
      </div>
      <div className="grid grid-cols-7 grid-rows-1 p-2 bg-neutral-300 rounded-md text-neutral-600 mt-3  text-left">
        <span className="col-span-2">Product with Defect</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Packaging Type</span>
        <span>Date</span>
        <span>Encoded by</span>
      </div>
      <div className="flex flex-col">
        {defects.map((data, i) => (
          <DefectCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};
